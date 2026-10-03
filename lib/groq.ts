import { SCIENCE_BOOK_CONTEXT } from './content-science';
import { ENGLISH_BOOK_CONTEXT } from './content-english';
import { IT_BOOK_CONTEXT } from './content-it';
import { EMPLOYABILITY_BOOK_CONTEXT } from './content-employability';
import { SST_BOOK_CONTEXT } from './content-sst';
import { ADVMATH_BOOK_CONTEXT } from './content-advmath';
import { ADVSCIENCE_BOOK_CONTEXT } from './content-advscience';

const GROQ_BASE_URL = 'https://api.groq.com/openai/v1/chat/completions';

type Msg = { role:'system'|'user'|'assistant'; content:string };

const getMainKey = () => process.env.GROQ_API_KEY;
const getSrchKey = () => process.env.GROQ_AI_SEARCH_KEY;
const getPayKey  = () => process.env.GROQ_PAYMENT_VERIFY_KEY;

/** Groq chat model (llama-3.1-8b-instant was decommissioned by Groq). */
const GROQ_MODEL = 'openai/gpt-oss-120b';

type ChatParams = { model:string; messages:Msg[]; max_tokens:number; temperature:number; stream:boolean; reasoning_effort?:'low'|'medium' };
function withEffort<T extends ChatParams>(p: T, effort: 'low' | 'medium' = 'low'): T {
  return { ...p, reasoning_effort: effort } as T;
}

type ChatCompletion = { choices?: { message?: { content?: string|null } }[] };

async function chatCompletions(apiKey: string|undefined, params: ChatParams): Promise<ChatCompletion> {
  if (!apiKey) throw new Error('GROQ API key is not configured.');
  const { reasoning_effort, ...body } = params;
  const res = await fetch(GROQ_BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    throw new Error(`Groq request failed: ${res.status} ${await res.text()}`);
  }
  return (await res.json()) as ChatCompletion;
}

export type AIMode = 'explain'|'simplify'|'meaning'|'alternate_method'|'similar_questions'|'logic'|'revision'|'doubt';

const MATHS_CONTEXT = `
GANITA MANJARI PART I — Class 9 Maths (NCERT 2026):
Ch1: Coordinates — Cartesian plane, quadrants, plotting points, distance formula, midpoint
Ch2: Linear Polynomials — degree, coefficients, zeroes, linear equations
Ch3: World of Numbers — natural numbers, integers, rational numbers, number line, properties
Ch4: Algebraic Identities — (a+b)², (a-b)², (a+b)(a-b), (a+b)³, factorisation
Ch5: Circles — circumference = 2πr, area = πr², arc, sector, chord
Ch6: Perimeter and Area — triangles (Heron's formula), quadrilaterals, composite shapes
Ch7: Probability — sample space, events, P(E) = favourable/total outcomes
Ch8: Sequences and Progressions — AP, nth term = a+(n-1)d, sum = n/2(2a+(n-1)d)
`;

const SYSTEM_PROMPT = `You are SolveNCERT AI — a brilliant, warm and knowledgeable learning assistant for CBSE Class 9 students.

YOUR PERSONALITY:
- Confident, encouraging and helpful — like the best teacher a student could have
- You LOVE helping students and always give your absolute best
- When asked what you know: "Of course! I have thorough knowledge of your Class 9 NCERT books — Maths, Science, English, Social Science and more. I can help with anything in your syllabus and beyond. Just ask!"

YOUR KNOWLEDGE (NCERT 2026 Revised Syllabus):

=== MATHEMATICS (Ganita Manjari Part I) ===
${MATHS_CONTEXT}

=== SCIENCE (Exploration) ===
${SCIENCE_BOOK_CONTEXT}

=== ENGLISH (Kaveri) ===
${ENGLISH_BOOK_CONTEXT}

=== INFORMATION TECHNOLOGY (Code 402) ===
${IT_BOOK_CONTEXT}

=== EMPLOYABILITY SKILLS ===
${EMPLOYABILITY_BOOK_CONTEXT}

=== SOCIAL SCIENCE (Understanding Society: India and Beyond) ===
${SST_BOOK_CONTEXT}

=== ADVANCED MATHEMATICS (Optional) ===
${ADVMATH_BOOK_CONTEXT}

=== ADVANCED SCIENCE ===
${ADVSCIENCE_BOOK_CONTEXT}

SUBJECT RULES — STRICTLY FOLLOW:
1. Maths questions → give mathematical solutions with steps and formulas
2. Science questions → explain using scientific concepts from the book
3. English questions → focus on language, literature, comprehension and grammar
4. IT questions → focus on IT-ITeS industry, keyboarding, LibreOffice Writer/Calc/Impress concepts from the book
5. Employability Skills questions → focus on communication, self-management, ICT basics, entrepreneurship, or green skills as covered in that book — do NOT mix with IT (Code 402) content even though both are vocational subjects; treat each as a fully separate knowledge base
6. Social Science (SST) questions → focus on Geography (Earth, atmosphere, climate), History (early humans, civilisations, state and society up to 1000 CE), Civics (democracy, elections) and Economics (choice, opportunity cost, demand & supply) using the Understanding Society: India and Beyond book knowledge above
7. Advanced Mathematics questions → focus on set theory (roster/set-builder, subsets, power sets, De Morgan's laws), logarithms, relations and functions, coordinate geometry (slope, parallel/perpendicular lines), combinatorics (permutations & combinations) and progressions exactly as per the Advanced Mathematics book knowledge above
8. Advanced Science questions → focus on measurement and SI units, motion and Newton's laws, simple machines (MA/VR/efficiency), work and energy, structure of the atom, chemical bonding, mixtures and separation, microscopy, and biotechnology exactly as per the Science Advanced book knowledge above
9. NEVER mix subjects — don't give Science answers for Maths questions etc.
10. Detect subject from context: equations/numbers → Maths; cells/motion/atoms → Science; stories/poems/grammar → English; keyboard/spreadsheet/presentation/IT-ITeS → IT; communication/grooming/entrepreneurship/green skills → Employability Skills; plate tectonics/atmosphere/monsoon/early humans/civilisation/varna-jati/democracy/elections/opportunity cost/demand & supply → Social Science; sets/logarithms/relations and functions/permutations/combinations/progressions → Advanced Mathematics; significant figures/machines/chemical bonding/microscope/biotechnology → Advanced Science

ANSWERING RULES:
1. FIRST PRIORITY: Answer from the NCERT 2026 syllabus above
2. IN syllabus: give thorough, accurate, exam-ready answer
3. BEYOND syllabus: say "This is beyond your Class 9 syllabus, but since you're curious — it's a higher concept called [name]. Here's a simple explanation..." then explain clearly
4. Student doesn't understand: start simpler, use everyday analogies, build up gradually
5. NEVER say "I don't know" or refuse — always try your best

MATH FORMATTING:
- Fractions: $$\\frac{numerator}{denominator}$$ (display/block — shows as one-above-other)
- Inline math: $expression$ e.g. $x^2 + 3x$ (you may also use \\(expression\\) for inline)
- Display math: $$expression$$ (you may also use \\[expression\\] for display)
- Powers: $x^{2}$, roots: $\\sqrt{x}$, times: $\\times$, divide: $\\div$
- Sets: $\\in$, $\\notin$, $\\subset$, $\\cup$, $\\cap$, $\\mathbb{N}$, $\\mathbb{Z}$, $\\mathbb{R}$
- Bold headings: **text** (never show ** in answers)
- Steps numbered clearly, show all working
- CRITICAL: Always put the final answer of every Maths or Advanced Maths question inside \\boxed{...} (e.g. $= \\boxed{90}$) exactly like the NCERT PDF, so it displays as a boxed answer. Box only the final answer, not every step.

RESPONSE FORMAT:
- Use **bold** for key terms and headings
- Number each step clearly in maths
- Keep language appropriate for Class 9`;

const MODE_PROMPTS: Record<AIMode,string> = {
  explain:          'Explain this clearly for a CBSE Class 9 student:',
  simplify:         'Simplify this in very easy language:',
  meaning:          'What does this mean? Give a simple explanation:',
  alternate_method: 'Show an alternate or shorter method:',
  similar_questions:'Give 3 similar practice questions with answers:',
  logic:            'Explain the reasoning behind every step:',
  revision:         'Give a quick revision summary of:',
  doubt:            'Answer this doubt clearly for a Class 9 CBSE student:',
};

/** Models to try in order; later ones are smaller/faster fallbacks for bursts. */
const GROQ_MODELS = ['openai/gpt-oss-120b', 'openai/gpt-oss-20b', 'llama-3.3-70b-versatile'];

/** Shared keys distinct from the main one, used as fallback when the main key is rate-limited. */
const FALLBACK_KEYS = [getSrchKey, getPayKey].filter(fn => fn() !== getMainKey() && fn());

/**
 * Retry a Groq call across models and keys so transient 429/5xx/network errors
 * don't surface as "could not respond" to the student.
 */
async function chatCompletionsResilient(keys: string[], params: ChatParams, retries = 2): Promise<ChatCompletion> {
  let lastErr: unknown;
  const models = Array.isArray((params as any).model) ? (params as any).model : [params.model];
  for (const model of models) {
    for (const apiKey of keys) {
      for (let attempt = 0; attempt <= retries; attempt++) {
        try {
          return await chatCompletions(apiKey, { ...params, model } as ChatParams);
        } catch (err) {
          lastErr = err;
          if (attempt < retries) {
            await new Promise(r => setTimeout(r, 250 * (attempt + 1)));
          }
        }
      }
    }
  }
  throw lastErr;
}

export async function askAI(userMessage: string, mode: AIMode='doubt', context?: string, fileContent?: string): Promise<string> {
  const msgs: Msg[] = [{ role:'system', content:SYSTEM_PROMPT }];
  if (context) {
    msgs.push({ role:'user', content:`Context:\n${context}` });
    msgs.push({ role:'assistant', content:'Got it! Ask me anything about this.' });
  }
  if (fileContent) {
    msgs.push({ role:'user', content:`Attached file:\n${fileContent.slice(0,3000)}` });
    msgs.push({ role:'assistant', content:'I can see the file. What would you like to know?' });
  }
  msgs.push({ role:'user', content:`${MODE_PROMPTS[mode]}\n\n${userMessage}` });

  const c = await chatCompletionsResilient(
    [getMainKey(), ...FALLBACK_KEYS].filter(Boolean) as string[],
    withEffort({ model: GROQ_MODELS, messages: msgs, max_tokens: 1400, temperature: 0.35, stream: false } as unknown as ChatParams),
  );
  return c.choices?.[0]?.message?.content || 'Sorry, could not generate a response.';
}

const ASK_ANYTHING_INSTRUCTIONS = `You are now running in "Ask Anything" mode — a quick-solution chatbot for CBSE Class 9 students.

The student will ask ANY question or doubt from ANY subject and ANY book (Maths, Science, English, Social Science, IT, Employability Skills, Advanced Maths, Advanced Science — or even general curiosity).

MATCH THE OFFICIAL SOLUTION PATTERN:
- If "OFFICIAL SOLUTIONS" are provided below and one matches the student's question, base your answer on it — same method, same steps, same final answer.
- Maths & Advanced Maths: follow the notebook pattern exactly — write **Given:**, **To Find/Prove:**, **Solution:** with numbered steps, show every sign and operation ($\\pm$, $\\times$, $\\div$, $=$), state formulas before substituting, and end with the final answer inside \\boxed{...} (e.g. $= \\boxed{90}$).
- Science: define the concept, then answer point-wise with correct scientific terms, SI units and labelled reasoning.
- English: quote-based literature answers, grammar rules, and vocabulary meanings in simple language.
- SST: structured answers with key terms bolded, dates/facts accurate.
- Always use the math formatting rules (LaTeX with $...$, $$...$$) and **bold** headings.
- If the question is an MCQ, state the correct option first, then justify briefly.
- Keep answers exam-ready but concise enough for quick revision.`;

export async function askAnythingAI(userMessage: string, history: { role:'user'|'assistant'; content:string }[] = [], solutionContext?: string): Promise<string> {
  const msgs: Msg[] = [{ role:'system', content:`${SYSTEM_PROMPT}\n\n${ASK_ANYTHING_INSTRUCTIONS}` }];
  if (solutionContext) {
    msgs.push({ role:'user', content:`OFFICIAL SOLUTIONS (from the SolveNCERT solution bank — use the matching one as the base of your answer):\n\n${solutionContext}` });
    msgs.push({ role:'assistant', content:'Understood. I will answer using these official solutions and follow the exact book pattern.' });
  }
  for (const m of history.slice(-4)) {
    msgs.push({ role: m.role, content: m.content.slice(0, 800) });
  }
  msgs.push({ role:'user', content:userMessage });

  const c = await chatCompletions(getMainKey(), withEffort({
    model:GROQ_MODEL, messages:msgs, max_tokens:1500, temperature:0.3, stream:false,
  }));
  return c.choices?.[0]?.message?.content || 'Sorry, could not generate a response.';
}

export async function explainAnswer(question: string, answer: string, subject: string): Promise<string> {
  const msgs: Msg[] = [
    { role:'system', content:SYSTEM_PROMPT },
    { role:'user', content:`You are explaining a ${subject} solution to a Class 9 student like an expert teacher.

Question: ${question}
Solution: ${answer}

Explain this solution in clear, simple but detailed terms. Cover:
1. What concept is being used and why
2. Why each step is done
3. The key insight to remember
4. How to apply this to similar problems

Be encouraging. Use proper math formatting where needed.` }
  ];
  const c = await chatCompletions(getMainKey(), withEffort({
    model:GROQ_MODEL, messages:msgs, max_tokens:1200, temperature:0.3, stream:false,
  }));
  return c.choices?.[0]?.message?.content || 'Could not generate explanation.';
}

export async function aiSmartSearch(query: string): Promise<{title:string;subject:string;chapter:string;url:string;snippet:string}[]> {
  const prompt = `You are a search assistant for SolveNCERT (CBSE Class 9, NCERT 2026 Revised Syllabus).

Available chapters:
MATHS: Ch1-Coordinates, Ch2-Linear Polynomials, Ch3-World of Numbers, Ch4-Algebraic Identities, Ch5-Circles, Ch6-Perimeter & Area, Ch7-Probability, Ch8-Sequences & AP
SCIENCE: Ch1-Exploring Science, Ch2-Cell, Ch3-Tissues, Ch4-Describing Motion, Ch5-Mixtures, Ch6-How Forces Affect Motion, Ch7-Work Energy Simple Machines, Ch8-Journey Inside Atom, Ch9-Atomic Foundations, Ch10-Sound Waves, Ch11-Reproduction, Ch12-Diversity Classification, Ch13-Earth as System
ENGLISH: Ch1-How I Taught My Grandmother, Ch2-The Pot Maker, Ch3-Winds of Change, Ch4-Vitamin-M, Ch5-World of Limitless Possibilities, Ch6-Twin Melodies, Ch7-Carrier of Words, Ch8-Follow That Dream
SST: Ch1-Understanding Social Science, Ch2-Shaping of the Earth's Surface, Ch3-Atmosphere and Climate, Ch4-Early Humans and Beginning of Civilisation, Ch5-State and Society up to 1000 CE, Ch6-Democracy, Ch7-Elections, Ch8-Building Blocks in Economics: The Problem of Choice, Ch9-The Price Puzzle: What Drives the Market
ADVANCED MATHS: Ch1-Sets, Ch2-Logarithms, Ch3-Relations and Functions, Ch4-Coordinate Geometry, Ch5-Combinatorics, Ch6-Exploring Some More Progressions
ADVANCED SCIENCE: Ch1-Measurement, Ch2-Understanding Motion, Ch3-Newton's Laws of Motion, Ch4-Advanced Simple Machines, Ch5-Work and Energy, Ch6-Structure of Atom, Ch7-Chemical Bonding, Ch8-Mixtures and Separation, Ch9-Microscope and Microscopy, Ch10-Biotechnology

User searched: "${query}"

Find up to 5 most relevant chapters. Handle spelling mistakes, synonyms, Hindi words (e.g. "ganit"=maths, "vigyan"=science, "angreji"=english, "samajik vigyan"=social science, "bhugol"=geography, "itihas"=history).

Return ONLY a JSON array (no markdown, no extra text):
[{"title":"Chapter Title","subject":"Maths","chapter":"Chapter 1","url":"/class-9/maths/ganita-manjari/0904ch01/orienting-yourself-the-use-of-coordinates","snippet":"Brief description"}]

URL patterns:
- Maths: /class-9/maths/ganita-manjari/0904ch0N/chapter-slug
- Science: /class-9/science/exploration/0906ch0N/chapter-slug  
- English: /class-9/english/kaveri/0903ch0N/chapter-slug
- SST: /class-9/sst/understanding-society-india-and-beyond/0908ch0N/chapter-slug
- Advanced Maths: /class-9/advanced-maths/advanced-mathematics/am0N/chapter-slug
- Advanced Science: /class-9/advanced-science/science-advanced/as0N/chapter-slug`;

  try {
    const c = await chatCompletions(getSrchKey(), withEffort({
      model:GROQ_MODEL, messages:[{role:'user',content:prompt}],
      max_tokens:600, temperature:0.1, stream:false,
    }));
    const text = (c.choices?.[0]?.message?.content||'[]').replace(/```json|```/g,'').trim();
    const start = text.indexOf('['); const end = text.lastIndexOf(']');
    if (start===-1) return [];
    return JSON.parse(text.slice(start,end+1));
  } catch { return []; }
}

export async function verifyPaymentAI(utr:string, amount:number, desc:string): Promise<{verified:boolean;confidence:'high'|'medium'|'low';reason:string}> {
  const prompt = `Verify UPI payment: Expected ₹${amount}. UTR: ${utr}. Description: ${desc}.
UTR must be exactly 12 digits, not all zeros, not obviously fake.
Reply ONLY with JSON: {"verified":true/false,"confidence":"high/medium/low","reason":"one sentence"}`;
  try {
    const c = await chatCompletions(getPayKey(), withEffort({
      model:GROQ_MODEL, messages:[{role:'user',content:prompt}],
      max_tokens:150, temperature:0, stream:false,
    }));
    return JSON.parse((c.choices?.[0]?.message?.content||'{}').replace(/```json|```/g,'').trim());
  } catch { return {verified:false,confidence:'low',reason:'Service unavailable.'}; }
}
