import type { NextApiRequest, NextApiResponse } from 'next'
import { generateGeminiContent } from '@/lib/gemini'
import { salvageStructured, sanitizeStructured } from '@/lib/avatar/structure'
import { buildSystemPrompt } from '@/lib/ai-learn/system-prompt'

const PRIMARY_MODEL = 'gemini-3.6-flash'
const FALLBACK_MODELS = ['gemini-flash-latest', 'gemini-flash-lite-latest']

type IncomingMessage = { role?: string; text?: string }
type IncomingAttachment = { name?: string; mimeType?: string; size?: number; dataUrl?: string }

function friendlyError(message: string): { code: string; message: string } {
  if (/api key|forbidden|401|403|permission|invalid api/i.test(message)) {
    return { code: 'AUTH', message: 'AI service authentication failed. Check that GEMINI_API_KEY is valid.' }
  }
  if (/quota|429|rate limit|resource exhausted/i.test(message)) {
    return { code: 'QUOTA', message: 'AI service quota exceeded. Please try again in a moment.' }
  }
  if (/network|fetch failed|undici|socket hang up/i.test(message)) {
    return { code: 'NETWORK', message: 'Network error while reaching the AI service.' }
  }
  return { code: 'API', message: 'The AI service returned an error. Please try again.' }
}

const MIME_PREFIXES_BINARY = ['image/', 'audio/', 'video/', 'application/pdf']

function decodeDataUrl(dataUrl: string): { mimeType: string; base64: string } | null {
  const match = dataUrl.match(/^data:([^;]+);base64,(.+)$/)
  if (!match) return null
  return { mimeType: match[1], base64: match[2] }
}

function isTextLikely(mimeType: string, fileName: string): boolean {
  if (mimeType.startsWith('text/')) return true
  if (MIME_PREFIXES_BINARY.some((p) => mimeType.startsWith(p))) return false
  const ext = fileName.split('.').pop()?.toLowerCase() ?? ''
  const textExts = [
    'txt','md','json','js','jsx','ts','tsx','c','cpp','h','hpp','py','rb','java',
    'html','htm','css','scss','less','xml','yaml','yml','toml','ini','cfg','conf',
    'csv','tsv','log','sh','bash','bat','ps1','sql','r','swift','kt','scala','go',
    'rs','php','pl','lua','dart','svelte','vue','astro','env','gitignore','dockerignore',
    'makefile','cmake','gradle','sbt','cabal','elm','hs','ml','fs','ex','exs','erl',
    'tex','bib','sty','cls','latex','markdown','rst','adoc','asciidoc','rtf',
    'ipynb','dart','zig','nim','v','vhd','vhdl','sv','svh','vbs','psm1','psd1',
    'csproj','fsproj','vbproj','sln','vcxproj','gradle','pro','mk','mak',
  ]
  return textExts.includes(ext)
}

function buildAttachmentParts(
  attachments: IncomingAttachment[],
): Array<Record<string, unknown>>[] {
  const parts: Array<Record<string, unknown>>[] = []
  for (const att of attachments) {
    const dataUrl = att.dataUrl
    if (!dataUrl) continue
    const decoded = decodeDataUrl(dataUrl)
    if (!decoded) continue
    const mimeType = decoded.mimeType || att.mimeType || 'application/octet-stream'
    const fileName = att.name || 'attachment'
    if (isTextLikely(mimeType, fileName)) {
      try {
        const text = Buffer.from(decoded.base64, 'base64').toString('utf-8')
        parts.push([{ text: `[File: ${fileName}]\n${text}` }])
      } catch {
        parts.push([{ inlineData: { mimeType, data: decoded.base64 } }])
      }
    } else {
      parts.push([{ inlineData: { mimeType, data: decoded.base64 } }])
    }
  }
  return parts
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    return res.json({ configured: Boolean(process.env.GEMINI_API_KEY), model: PRIMARY_MODEL })
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: { code: 'METHOD', message: 'Method not allowed.' } })
  }

  const apiKey = process.env.GEMINI_API_KEY
  if (!apiKey) {
    return res.status(500).json({ error: { code: 'NO_KEY', message: 'GEMINI_API_KEY is not configured.' } })
  }

  let body: { messages?: IncomingMessage[]; mode?: string; profile?: Record<string, unknown>; attachments?: IncomingAttachment[] } = {}
  try { body = req.body } catch { /* malformed */ }

  const messages = Array.isArray(body.messages) ? body.messages.filter((m) => m && m.text) : []
  if (messages.length === 0) {
    return res.status(400).json({ error: { code: 'EMPTY', message: 'No message supplied.' } })
  }

  const mode = typeof body.mode === 'string' ? body.mode : undefined
  const profile = body.profile as { classLevel?: string; board?: string; language?: string; learningGoals?: string[]; targetMarks?: string; weakSubjects?: string[]; teachingStyles?: string[]; competitiveExams?: string[]; otherExam?: string } | undefined
  const attachments = Array.isArray(body.attachments) ? body.attachments : []

  const systemPrompt = buildSystemPrompt(
    profile ? {
      classLevel: profile.classLevel ?? '',
      board: profile.board ?? 'CBSE',
      language: profile.language ?? 'English',
      learningGoals: profile.learningGoals ?? [],
      targetMarks: profile.targetMarks ?? '',
      weakSubjects: profile.weakSubjects ?? [],
      teachingStyles: profile.teachingStyles ?? [],
      competitiveExams: profile.competitiveExams ?? [],
      otherExam: profile.otherExam ?? '',
      completedOnboarding: true,
    } : null,
    mode,
  )

  let contents: { role: string; parts: Array<Record<string, unknown>> }[] = messages.map((m) => ({
    role: m.role === 'model' ? 'model' : 'user',
    parts: [{ text: String(m.text) }],
  }))

  if (attachments.length > 0) {
    let lastUserIdx = -1
    for (let i = contents.length - 1; i >= 0; i--) {
      if (contents[i].role === 'user') { lastUserIdx = i; break }
    }
    if (lastUserIdx !== -1) {
      const attachmentParts = buildAttachmentParts(attachments)
      contents[lastUserIdx].parts.push(...attachmentParts.flat())
    }
  }

  let lastError: unknown = null

  for (const model of [PRIMARY_MODEL, ...FALLBACK_MODELS]) {
    try {
      const response = await generateGeminiContent({
        model,
        contents,
        config: {
          systemInstruction: systemPrompt,
          responseMimeType: 'application/json',
          temperature: 0.6,
          maxOutputTokens: 2000,
        },
        apiKey,
      })

      const raw = response.text?.trim()
      if (!raw) {
        return res.status(502).json({ error: { code: 'EMPTY', message: 'The AI service returned an empty response.' } })
      }

      return res.json({
        text: raw,
        structured: sanitizeStructured(raw) ?? salvageStructured(raw) ?? null,
      })
    } catch (err) {
      lastError = err
      const message = err instanceof Error ? err.message : String(err)
      if (/(not found|404|not supported|does not exist|invalid argument.*model)/i.test(message)) continue
      break
    }
  }

  const message = lastError instanceof Error ? lastError.message : String(lastError)
  return res.status(502).json({ error: friendlyError(message) })
}
