import type { NextApiRequest, NextApiResponse } from 'next'
import { generateGeminiContent } from '@/lib/gemini'
import JSZip from 'jszip'

const PRIMARY_MODEL = 'gemini-3.6-flash'
const FALLBACK_MODELS = ['gemini-flash-latest', 'gemini-flash-lite-latest']

export const config = { api: { bodyParser: { sizeLimit: '18mb' } } }

type IncomingImage = { data?: string; mimeType?: string }
type IncomingDocument = { name?: string; mimeType?: string; data?: string }

interface CheckRequest {
  images?: IncomingImage[]
  documents?: IncomingDocument[]
  answerText?: string
  subject?: string
  classLevel?: string
  questionContext?: string
}

const SYSTEM_PROMPT = `You are "Examiner Nova" — the STRICTEST CBSE board copy examiner in India, evaluating answer sheets for the NEW 2026 CBSE board pattern.

2026 CBSE EVALUATION FRAMEWORK (apply ruthlessly):
1. COMPETENCY-BASED MARKING (50%+ weightage): Answers must demonstrate application, analysis and real understanding — NOT rote recall. Rote-book definitions without application context = quality deduction.
2. STEP MARKING: For numericals/derivations, every step carries marks. A wrong or skipped step loses its step-marks even if the final answer is right.
3. KEY-WORD / VALUE-POINT MATCHING: Board evaluators tick specific NCERT keywords and value points. Missing even one mandatory keyword loses that value point.
4. NCERT TERMINOLOGY: Paraphrased/informal wording instead of exact NCERT terms is penalized.
5. UNITS, SYMBOLS & SIGNIFICANT FIGURES: Missing/wrong units, wrong symbols, missing SI notation = deduction.
6. DIAGRAMS & GRAPHS: Must be drawn where the marking scheme expects them, with labels, captions and pencil work.
7. PRESENTATION & STRUCTURE (2026 emphasises this): Underlined headings/key terms, numbered points, proper Q-numbering, margins, neat work. Poor presentation loses "presentation marks".
8. RELEVANCE & LENGTH: Extra irrelevant content, story-telling, or filler gets NO marks and can lose presentation credit. Answer length must match mark weightage (1/2/3/5 marks).
9. HONEST ERRORS: Wrong facts, calculation slips, sign errors, mislabelled parts, unanswered sub-parts.
10. LANGUAGE QUALITY: Grammar/spelling errors in language subjects; unclear expression elsewhere.

YOUR JOB:
You receive photo(s) of a student's hand-written answer copy (possibly multiple pages). Read every page carefully like a real evaluator with a red pen.

For EVERY mistake or weakness you find on the paper, output an annotation with PRECISE pixel-location boxes so the app can draw on top of the image:
- type "rect": box tightly around the exact wrong text/step/fact/calculation.
- type "circle": circle around a small localized error (a word, a number, a symbol). ONLY for actual errors — never for quality issues.
- type "underline": a SINGLE STRAIGHT LINE drawn UNDER a phrase. MANDATORY for every quality-only weakness: weak phrasing, informal or shorthand wording, vague lines, filler, rote lines, missing presentation. NEVER use circle or rect for a quality issue — quality issues MUST be "underline". Give the underline a THIN box: a narrow band hugging the phrase, ymax just below the text baseline, small height (15–40 units on the 0–1000 scale).

BOX COORDINATES — CRITICAL: Give each box as [ymin, xmin, ymax, xmax] with all four integers on a 0–1000 scale RELATIVE TO THAT IMAGE's width and height (top-left of that image = [0,0,0,0]). Boxes must hug the actual handwriting location as precisely as possible. imageIndex refers to the index of the uploaded image (0-based).

Also draw an arrow mentally from each annotation to its explanation: set labelSide to "left" or "right" depending on which side of the page has free space (side with fewer annotations / larger empty area).

SEVERITY:
- "critical": factually wrong / calculation error / wrong concept → direct mark loss.
- "major": missing mandatory keyword/value-point/step/unit/diagram → partial mark loss.
- "minor": presentation, numbering, neatness, grammar slip → small deduction.
- "polish": quality issue only (vague, weak phrasing, rote) → no hard loss but flagged for quality; use underline + needsRewrite true when it hurts the score.

needsRewrite = true whenever fixing that single remark alone would clearly raise the answer to full-mark standard (e.g., whole answer is low quality, key section missing, badly structured long answer).

MARKS: Award marks strictly per the official-style marking scheme. Be harsh — a strict board examiner gives full marks ONLY to near-perfect copies. Typical distribution: content/value-points ~70%, steps/method ~15%, presentation & terminology ~15%.

Respond ONLY with valid JSON matching this schema (no markdown fences):
{
  "detectedQuestion": string,            // the question you detected being answered
  "detectedSubject": string,
  "marksObtained": number,
  "marksTotal": number,
  "scorePercent": number,                // 0-100
  "grade": string,                       // CBSE style: "A1" | "A2" | "B1" | "B2" | "C1" | "C2" | "D" | "E"
  "verdict": string,                     // one-liner, e.g. "Below board standard — would fetch 3/5 in boards."
  "summary": string,                     // 2-4 sentence examiner summary, harsh but constructive
  "criteria": [                          // 2026 pattern scorecard
    { "name": string,                    // e.g. "Content & Value Points", "Step Marking", "NCERT Keywords", "Units & Symbols", "Diagrams & Labels", "Presentation & Structure", "Competency/Application", "Relevance & Length"
      "score": number, "max": number, "note": string }
  ],
  "annotations": [
    { "id": number,
      "imageIndex": number,
      "type": "rect"|"circle"|"underline",
      "box": [number,number,number,number],   // [ymin,xmin,ymax,xmax] 0-1000 scale
      "label": string,                        // short red-pen note, <= 6 words
      "severity": "critical"|"major"|"minor"|"polish",
      "explanation": string,                  // WHY this is wrong / what the board deducts for, 1-2 sentences
      "remark": string,                       // what the examiner writes in the margin
      "marksLost": number,
      "labelSide": "left"|"right",
      "needsRewrite": boolean }
  ],
  "strengths": string[],                 // what earned marks (even strict examiners acknowledge)
  "nextSteps": string[]                  // exactly how to fix before the board exam
}`

function friendlyError(message: string): { code: string; message: string } {
  if (/api key|forbidden|401|403|permission|invalid api/i.test(message)) {
    return { code: 'AUTH', message: 'AI service authentication failed.' }
  }
  if (/quota|429|rate limit|resource exhausted/i.test(message)) {
    return { code: 'QUOTA', message: 'All AI keys are rate-limited right now. Please retry in a few minutes.' }
  }
  if (/payload too large|invalid.*image|image/i.test(message) && /size|format/i.test(message)) {
    return { code: 'IMAGE', message: 'Image could not be processed. Try clearer/smaller photos.' }
  }
  if (/network|fetch failed|undici|socket hang up|timeout/i.test(message)) {
    return { code: 'NETWORK', message: 'Network error while reaching the AI service.' }
  }
  return { code: 'API', message: 'The AI service returned an error. Please try again.' }
}

function extractJson(raw: string): Record<string, unknown> | null {
  const cleaned = raw.replace(/```json|```/g, '').trim()
  try {
    return JSON.parse(cleaned)
  } catch {
    const start = cleaned.indexOf('{')
    const end = cleaned.lastIndexOf('}')
    if (start !== -1 && end > start) {
      try { return JSON.parse(cleaned.slice(start, end + 1)) } catch { return null }
    }
    return null
  }
}

function xmlToText(xml: string): string {
  return xml
    .replace(/<w:p[^>]*>/g, '\n')
    .replace(/<\/w:p>/g, '\n')
    .replace(/<a:p[^>]*>/g, '\n')
    .replace(/<a:br[^>]*/g, '\n')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&apos;/g, "'").replace(/&amp;/g, '&')
    .split('\n').map((l) => l.replace(/[ \t]+/g, ' ').trim()).join('\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim()
}

/** Extract + normalize text from the listed XML parts of an Office (zip) container. */
async function zipXmlText(zip: JSZip, paths: string[]): Promise<string[]> {
  const out: string[] = []
  for (const p of paths) {
    const f = zip.file(p)
    if (f) out.push(xmlToText(await f.async('string')))
  }
  return out
}

async function extractDocText(name: string, mime: string, buf: Buffer): Promise<string | null> {
  const isPdf = /pdf/i.test(mime) || /\.pdf$/i.test(name)
  if (isPdf) return null
  const isDocx = /wordprocessingml|msword/i.test(mime) || /\.(docx|doc)$/i.test(name)
  const isPpt = /presentationml|ms-powerpoint/i.test(mime) || /\.(pptx|ppt)$/i.test(name)
  const isXls = /spreadsheetml|ms-excel/i.test(mime) || /\.(xlsx|xls)$/i.test(name)
  const isCsv = /csv/i.test(mime) || /\.csv$/i.test(name)
  const isTxt = /^text\//i.test(mime) || /\.(txt|md)$/i.test(name)

  if (isCsv || isTxt) return buf.toString('utf8').slice(0, 60000)

  const zip = await JSZip.loadAsync(buf)

  if (isDocx) {
    const doc = await zipXmlText(zip, ['word/document.xml'])
    return doc[0]?.slice(0, 60000) || null
  }
  if (isPpt) {
    const slides = Object.keys(zip.files).filter((n) => /^ppt\/slides\/slide\d+\.xml$/.test(n)).sort((a, b) => {
      const na = Number(a.match(/slide(\d+)/)?.[1] || 0), nb = Number(b.match(/slide(\d+)/)?.[1] || 0)
      return na - nb
    })
    const parts = await zipXmlText(zip, slides)
    return parts.join('\n\n').slice(0, 60000) || null
  }
  if (isXls) {
    const sheets = Object.keys(zip.files).filter((k) => /^xl\/worksheets\/sheet\d+\.xml$/.test(k)).sort()
    const chunks = await zipXmlText(zip, ['xl/sharedStrings.xml', ...sheets])
    return chunks.join('\n').replace(/\n{3,}/g, '\n\n').trim().slice(0, 60000) || null
  }
  return null
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    return res.json({ configured: Boolean(process.env.GEMINI_API_KEY || process.env.GEMINI_FLASHCARD_KEY), model: PRIMARY_MODEL })
  }
  if (req.method !== 'POST') {
    return res.status(405).json({ error: { code: 'METHOD', message: 'Method not allowed.' } })
  }

  const apiKeys = Array.from(new Set([process.env.GEMINI_API_KEY, process.env.GEMINI_FLASHCARD_KEY].filter((k): k is string => Boolean(k))))
  if (apiKeys.length === 0) {
    return res.status(500).json({ error: { code: 'NO_KEY', message: 'GEMINI_API_KEY is not configured.' } })
  }

  const body = (req.body || {}) as CheckRequest
  const images = Array.isArray(body.images)
    ? body.images.filter((img) => img && typeof img.data === 'string' && img.data.length > 64)
    : []
  const docs = Array.isArray(body.documents)
    ? body.documents.filter((d) => d && typeof d.data === 'string' && d.data.length > 8).slice(0, 5)
    : []
  const answerText = typeof body.answerText === 'string' ? body.answerText.trim().slice(0, 20000) : ''
  if (images.length === 0 && docs.length === 0 && !answerText) {
    return res.status(400).json({ error: { code: 'EMPTY', message: 'Upload a copy photo, attach a file, or type your answer.' } })
  }

  const subject = typeof body.subject === 'string' && body.subject.trim() ? body.subject.trim() : 'auto-detect from the copy'
  const classLevel = typeof body.classLevel === 'string' && body.classLevel.trim() ? body.classLevel.trim() : 'Class 9'
  const questionContext = typeof body.questionContext === 'string' ? body.questionContext.trim().slice(0, 1200) : ''

  const pdfInline: IncomingImage[] = []
  const docTexts: { name: string; text: string }[] = []
  for (const d of docs) {
    const name = String(d.name || 'attachment').slice(0, 120)
    try {
      const buf = Buffer.from(String(d.data), 'base64')
      if (/pdf/i.test(String(d.mimeType)) || /\.pdf$/i.test(name)) {
        pdfInline.push({ data: String(d.data), mimeType: 'application/pdf' })
        continue
      }
      const text = await extractDocText(name, String(d.mimeType || ''), buf)
      if (text && text.length > 20) docTexts.push({ name, text })
    } catch { /* skip unreadable attachment */ }
  }

  const hasVisualCopy = images.length > 0

  const userInstruction = [
    `Evaluate this student's answer as the strictest CBSE 2026-pattern board examiner.`,
    hasVisualCopy
      ? (images.length > 1
        ? `The student uploaded ${images.length} page photos IN ORDER (imageIndex 0..${images.length - 1}); treat them as one continuous handwritten copy.`
        : `The student uploaded a photo of their handwritten copy.`)
      : '',
    answerText
      ? (hasVisualCopy
        ? 'The student ALSO typed part of their answer below — evaluate it together with the copy.'
        : 'The student TYPED their answer below instead of uploading photos. Evaluate the typed text. For every finding set "box": [0, 0, 0, 0] and "imageIndex": 0 (there is no image to mark); put all detail into explanation and remark fields.')
      : '',
    docTexts.length > 0 ? `Attached document(s): ${docTexts.map((d) => `"${d.name}"`).join(', ')}. Their extracted text is provided below — treat them as the student's answer material.` : '',
    pdfInline.length > 0 ? `${pdfInline.length} PDF file(s) attached as the student's answer material — read them like an evaluator.` : '',
    `Subject: ${subject}. Class: ${classLevel}.`,
    questionContext ? `Question/context supplied by student: "${questionContext}"` : 'Detect the question(s) yourself from the answer.',
    `Find EVERY error and quality weakness.${hasVisualCopy ? ' Pin-point each with rect/circle/underline boxes on the correct imageIndex using precise 0-1000 [ymin,xmin,ymax,xmax] coordinates.' : ''} Quality-only weaknesses MUST use type "underline" (a single straight line under the phrase, thin box) — never circle or rect. Set needsRewrite=true on remarks worth rewriting.`,
    `Be brutally strict with marks — award full marks only to near-perfect board-level answers.`,
  ].filter(Boolean).join(' ')

  const parts: Record<string, unknown>[] = [
    ...images.map((img) => ({
      inlineData: {
        mimeType: img.mimeType || 'image/jpeg',
        data: String(img.data),
      },
    })),
    ...pdfInline.map((p) => ({ inlineData: { mimeType: p.mimeType, data: p.data } })),
    ...docTexts.map((d) => ({ text: `--- Attached file "${d.name}" (extracted text) ---\n${d.text}\n--- end of "${d.name}" ---` })),
  ]
  if (answerText) {
    parts.push({ text: `--- Student's typed answer ---\n${answerText}\n--- end of typed answer ---` })
  }
  parts.push({ text: userInstruction })

  const contents = [{ role: 'user' as const, parts }]

  let lastError: unknown = null

  for (const apiKey of apiKeys) {
    for (const model of [PRIMARY_MODEL, ...FALLBACK_MODELS]) {
      try {
        const response = await generateGeminiContent({
          model,
          contents,
          config: {
            systemInstruction: SYSTEM_PROMPT,
            responseMimeType: 'application/json',
            temperature: 0.15,
            maxOutputTokens: 8192,
          },
          apiKey,
        })

        const raw = response.text?.trim()
        if (!raw) {
          return res.status(502).json({ error: { code: 'EMPTY', message: 'The AI service returned an empty response.' } })
        }

        const parsed = extractJson(raw)
        if (!parsed || !Array.isArray(parsed.annotations)) {
          return res.status(502).json({ error: { code: 'PARSE', message: 'Could not parse the evaluation. Please retry.' } })
        }

        return res.json({ result: parsed })
      } catch (err) {
        lastError = err
      }
    }
  }

  const message = lastError instanceof Error ? lastError.message : String(lastError)
  return res.status(502).json({ error: friendlyError(message) })
}
