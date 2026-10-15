// ─────────────────────────────────────────────────────────────────────────────
// Solution Retrieval (SAG) — gives the "Ask Anything" chatbot access to every
// solution stored on the site: Maths (Ganita Manjari source), Science,
// Advanced Maths, Advanced Science, SST and English.
// Builds a keyword index once (lazy singleton) and returns the most relevant
// verbatim solutions so AI answers follow the exact book pattern.
// ─────────────────────────────────────────────────────────────────────────────

import { MATHS_SOURCE_CHAPTERS } from './content-maths-source';
import { MATHS_PART2_CHAPTERS } from './content-maths-part2';
import { SCIENCE_CHAPTERS } from './content-science';
import { ADVMATH_CHAPTERS } from './content-advmath';
import { ADVSCIENCE_CHAPTERS } from './content-advscience';
import { SST_CHAPTERS } from './content-sst';
import { ENGLISH_CHAPTERS } from './content-english';

export interface SolutionEntry {
  subject: string;
  chapterNumber: number;
  chapterTitle: string;
  sectionTitle: string;
  questionNumber: string;
  question: string;
  solution: string;
}

interface IndexedEntry extends SolutionEntry {
  tokens: Set<string>;
}

const STOPWORDS = new Set([
  'the','a','an','is','are','was','were','of','in','on','for','to','and','or','what','which','how',
  'why','when','who','do','does','did','can','could','will','would','solve','find','give','answer',
  'question','ques','q','please','me','my','i','you','this','that','these','those','it','its','from',
  'with','by','at','as','be','been','being','have','has','had','not','no','yes','if','then','than',
  'so','but','about','into','explain','tell','kya','hai','ho','ka','ki','ke','ko','se','mein','karo',
]);

function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\u0900-\u097F\s]/g, ' ')
    .split(/\s+/)
    .filter(t => t.length > 1 && !STOPWORDS.has(t));
}

function stripHtml(html: string): string {
  return html
    .replace(/<img[^>]*>/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/\s+/g, ' ')
    .trim();
}

function cap(text: string, max: number): string {
  return text.length > max ? text.slice(0, max) + '…' : text;
}

let _index: IndexedEntry[] | null = null;

function getIndex(): IndexedEntry[] {
  if (_index) return _index;
  const entries: IndexedEntry[] = [];

  // Maths — Ganita Manjari (plainText = question + full notebook solution)
  for (const ch of MATHS_SOURCE_CHAPTERS) {
    for (const ex of ch.exercises) {
      for (const q of ex.questions) {
        const question = cap(q.plainText, 900);
        entries.push({
          subject: 'Maths',
          chapterNumber: ch.number,
          chapterTitle: ch.title,
          sectionTitle: ex.title,
          questionNumber: q.number.replace(/★/g, ''),
          question,
          solution: cap(q.plainText, 2200),
          tokens: new Set(tokenize(`${ch.title} ${ex.title} ${q.plainText}`)),
        });
      }
    }
  }

  // Maths — Ganita Manjari Part II (chapters 9-14, standard Chapter shape)
  for (const ch of MATHS_PART2_CHAPTERS) {
    for (const ex of ch.exercises) {
      for (const q of ex.questions) {
        const sol = `${q.answer.answerKey}\n${q.answer.schoolMethod}`;
        entries.push({
          subject: 'Maths',
          chapterNumber: ch.number,
          chapterTitle: ch.title,
          sectionTitle: ex.title,
          questionNumber: q.number.replace(/★/g, ''),
          question: cap(q.text, 900),
          solution: cap(sol, 2200),
          tokens: new Set(tokenize(`${ch.title} ${ex.title} ${q.text} ${sol}`)),
        });
      }
    }
  }

  // Science — Exploration
  for (const ch of SCIENCE_CHAPTERS) {
    for (const ex of ch.exercises) {
      for (const q of ex.questions) {
        const sol = stripHtml(`${q.answer.answerKey} ${q.answer.solution}`);
        entries.push({
          subject: 'Science',
          chapterNumber: ch.number,
          chapterTitle: ch.title,
          sectionTitle: ex.title,
          questionNumber: q.number,
          question: cap(q.text, 900),
          solution: cap(sol, 2200),
          tokens: new Set(tokenize(`${ch.title} ${ex.title} ${q.text} ${sol}`)),
        });
      }
    }
  }

  // Advanced Mathematics
  for (const ch of ADVMATH_CHAPTERS) {
    for (const ex of ch.exercises) {
      for (const q of ex.questions) {
        entries.push({
          subject: 'Advanced Maths',
          chapterNumber: ch.number,
          chapterTitle: ch.title,
          sectionTitle: ex.title,
          questionNumber: q.number,
          question: cap(q.text, 900),
          solution: cap(`${q.answer.answerKey}\n${q.answer.schoolMethod}`, 2200),
          tokens: new Set(tokenize(`${ch.title} ${ex.title} ${q.text} ${q.answer.answerKey} ${q.answer.schoolMethod}`)),
        });
      }
    }
  }

  // Advanced Science
  for (const ch of ADVSCIENCE_CHAPTERS) {
    for (const ex of ch.exercises) {
      for (const q of ex.questions) {
        entries.push({
          subject: 'Advanced Science',
          chapterNumber: ch.number,
          chapterTitle: ch.title,
          sectionTitle: ex.title,
          questionNumber: q.number,
          question: cap(q.text, 900),
          solution: cap(`${q.answer.answerKey}\n${q.answer.schoolMethod}`, 2200),
          tokens: new Set(tokenize(`${ch.title} ${ex.title} ${q.text} ${q.answer.answerKey} ${q.answer.schoolMethod}`)),
        });
      }
    }
  }

  // Social Science — Understanding Society
  for (const ch of SST_CHAPTERS) {
    for (const ex of ch.exercises) {
      for (const q of ex.questions) {
        entries.push({
          subject: 'Social Science',
          chapterNumber: ch.number,
          chapterTitle: ch.title,
          sectionTitle: ex.title,
          questionNumber: q.number,
          question: cap(q.text, 900),
          solution: cap(`${q.answer.answerKey}\n${q.answer.schoolMethod}`, 2200),
          tokens: new Set(tokenize(`${ch.title} ${ex.title} ${q.text} ${q.answer.answerKey} ${q.answer.schoolMethod}`)),
        });
      }
    }
  }

  // English — Kaveri (both contents per chapter)
  for (const ch of ENGLISH_CHAPTERS) {
    for (const content of ch.contents) {
      for (const sec of content.sections) {
        for (const q of sec.questions) {
          entries.push({
            subject: 'English',
            chapterNumber: ch.number,
            chapterTitle: content.title,
            sectionTitle: sec.title,
            questionNumber: q.number,
            question: cap(q.text, 900),
            solution: cap(q.answer, 2000),
            tokens: new Set(tokenize(`${content.title} ${sec.title} ${q.text} ${q.answer}`)),
          });
        }
      }
    }
  }

  _index = entries;
  return entries;
}

/** Retrieve the most relevant verbatim solutions for a user query. */
export function retrieveSolutions(query: string, maxEntries = 3, maxChars = 4500): string {
  const qTokens = tokenize(query);
  if (qTokens.length === 0) return '';

  const index = getIndex();
  const scored: { entry: IndexedEntry; score: number }[] = [];

  for (const entry of index) {
    let score = 0;
    for (const t of qTokens) {
      if (entry.tokens.has(t)) score += 1;
      else {
        // partial match for morphological variants (plural, -ing, -ed)
        for (const et of entry.tokens) {
          if (et.length > 4 && (et.startsWith(t) || t.startsWith(et))) { score += 0.4; break; }
        }
      }
    }
    if (score > 0) scored.push({ entry, score });
  }

  if (scored.length === 0) return '';

  scored.sort((a, b) => b.score - a.score);
  const minScore = Math.max(2, qTokens.length * 0.25);
  const top = scored.filter(s => s.score >= minScore).slice(0, maxEntries);

  const parts: string[] = [];
  let used = 0;
  for (const { entry } of top) {
    const block = `[${entry.subject} — Chapter ${entry.chapterNumber}: ${entry.chapterTitle} — ${entry.sectionTitle} — Q${entry.questionNumber}]\nQuestion: ${entry.question}\nOfficial Solution: ${entry.solution}`;
    if (used + block.length > maxChars) break;
    parts.push(block);
    used += block.length;
  }
  return parts.join('\n\n---\n\n');
}
