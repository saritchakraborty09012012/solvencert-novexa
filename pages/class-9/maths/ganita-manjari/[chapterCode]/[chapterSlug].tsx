import React, { useState, useRef } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import { ChevronRight, BookOpen, Home, Download, Copy, Check, KeyRound } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import BackToTop from '@/components/features/BackToTop';
import ReadAloud from '@/components/features/ReadAloud';
import AIFollowUp from '@/components/features/AIFollowUp';
import GuestPaywall from '@/components/features/GuestPaywall';
import QuestionNav from '@/components/features/QuestionNav';
import BookmarkButton from '@/components/features/BookmarkButton';
import ThumbsRating from '@/components/features/ThumbsRating';
import ReportFlag from '@/components/features/ReportFlag';
import AuthModal from '@/components/auth/AuthModal';
import { MATHS_SOURCE_CHAPTERS, type MathsSourceQuestion, type MathsSourceExercise } from '@/lib/content-maths-source';
import { MATHS_PART2_CHAPTERS } from '@/lib/content-maths-part2';
import type { Chapter } from '@/lib/content';
import MathRenderer from '@/components/features/MathRenderer';
import { useAuthStore } from '@/store/authStore';
import { hasReachedGuestLimit, incrementSolutionView } from '@/lib/guestLimits';
import { cn, getSubjectBackground } from '@/utils/helpers';
import { useChapterTabSession } from '@/lib/chapterTabSession';
import { htmlToPdf } from '@/lib/pdf';

function CopyBtn({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  async function go() {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }
  return (
    <button onClick={go} className={cn('inline-flex items-center gap-1 px-2 py-1 rounded-lg border text-[11px] font-medium transition-all',
      copied ? 'bg-green-100 dark:bg-green-900/30 text-green-600 border-green-200' : 'bg-[var(--surface-2)] text-[var(--text-muted)] border-transparent hover:border-[var(--border)]')}>
      {copied ? <Check size={11} /> : <Copy size={11} />}
      <span>{copied ? 'Copied' : 'Copy'}</span>
    </button>
  );
}

// ── Part II adapter ─────────────────────────────────────────────────────────
// Part II content lives as the standard Chapter shape (markdown + $math$). The
// page above renders Part I's notebook HTML, so Part II questions carry an
// optional `md` payload that NotebookQuestion renders through MathRenderer.
type GmQuestion = MathsSourceQuestion & {
  md?: { text: string; school: string };
  instruction?: string;
  boxHeading?: string;
  page?: number;
  figure?: { svg: string; caption?: string };
};
interface GmExercise { id: string; title: string; introHtml: string; questions: GmQuestion[]; }
interface GmChapter { code: string; slug: string; title: string; number: number; exercises: GmExercise[]; }

function escapeHtml(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// Put (i)/(ii)/(a)/(b)-style subpoints on their own lines so they render as a
// point-wise list instead of one long paragraph. Only split after a sentence
// boundary (. ; : ? !) or a newline so inline references like "answers to (a)
// and (b) now?" stay untouched. Applied to question text only (never to answer
// keys / solutions). Idempotent: markers already at a line start are skipped.
function splitSubpoints(text: string): string {
  return text.replace(/(^|[.;:?!]\s|\n)(\((?:iv|iii|ii|i|v|[a-h])\))\s+/g, (_m, pre: string, mark: string) =>
    (pre === '' || pre === '\n' ? `${pre}${mark} ` : `${pre.trimEnd()}\n${mark} `));
}

function part2ToGm(chapter: Chapter): GmChapter {
  return {
    code: chapter.code, slug: chapter.slug, title: chapter.title, number: chapter.number,
    exercises: chapter.exercises.map(ex => ({
      id: ex.id, title: ex.title, introHtml: '',
      questions: ex.questions.map(q => {
        const text = splitSubpoints(q.text);
        return {
          id: q.id,
          number: q.number,
          head: `<div class="qnum">${escapeHtml(q.number)}</div><div class="qtext">${escapeHtml(text)}</div>`,
          body: '',
          plainText: `${text}\n\n${q.answer.schoolMethod}`,
          answerKey: q.answer.answerKey,
          instruction: q.instruction,
          boxHeading: q.boxHeading,
          figure: q.figure,
          page: q.page,
          md: { text, school: q.answer.schoolMethod },
        } as GmQuestion;
      }),
    })),
  };
}

function questionText(q: GmQuestion): string {
  return q.md ? q.md.text : q.plainText;
}

// Small supporting sketches for Chapter 5 answers whose reasoning depends on
// a circle, chord, or cyclic quadrilateral. The two textbook figures that need
// construction detail remain embedded in their original screenshot form.
function chapterFiveDiagram(exerciseId: string, number: string): string {
  const key = `${exerciseId}:${number.replace(/\u2605/g, '')}`;
  const circle = (inner: string, caption: string) => `<div style="margin:12px auto 16px;max-width:440px;overflow-x:auto"><svg viewBox="0 0 420 230" role="img" aria-label="${caption}" style="display:block;width:100%;height:auto;background:#fffdf3;border:1px solid #d8cfb5;border-radius:8px;font-family:serif" xmlns="http://www.w3.org/2000/svg"><circle cx="210" cy="112" r="82" fill="none" stroke="#213575" stroke-width="2.5"/>${inner}</svg><div style="text-align:center;font-size:13px;color:#64748b">${caption}</div></div>`;
  const chord = (top = false) => circle(`<line x1="145" y1="${top ? 72 : 152}" x2="275" y2="${top ? 72 : 152}" stroke="#b3372c" stroke-width="3"/><line x1="210" y1="112" x2="145" y2="${top ? 72 : 152}" stroke="#213575" stroke-width="2"/><line x1="210" y1="112" x2="275" y2="${top ? 72 : 152}" stroke="#213575" stroke-width="2"/><line x1="210" y1="112" x2="210" y2="${top ? 72 : 152}" stroke="#c99a3f" stroke-dasharray="5 4" stroke-width="2"/><circle cx="210" cy="112" r="4" fill="#c99a3f"/><text x="199" y="108" font-size="16">O</text><text x="132" y="${top ? 68 : 170}" font-size="16">A</text><text x="278" y="${top ? 68 : 170}" font-size="16">B</text><text x="216" y="${top ? 68 : 170}" font-size="16">M</text>`, 'Circle chord and perpendicular from centre');
  const cyclic = (label = 'A B C D') => circle(`<polygon points="210,32 286,88 250,188 134,164" fill="#dbeafe" fill-opacity=".35" stroke="#213575" stroke-width="2.5"/><text x="204" y="26" font-size="16">${label.split(' ')[0]}</text><text x="292" y="88" font-size="16">${label.split(' ')[1]}</text><text x="250" y="207" font-size="16">${label.split(' ')[2]}</text><text x="116" y="171" font-size="16">${label.split(' ')[3]}</text>`, 'Cyclic quadrilateral inscribed in a circle');
  const rightTriangle = (caption: string) => circle(`<line x1="210" y1="112" x2="130" y2="112" stroke="#b3372c" stroke-width="3"/><line x1="130" y1="112" x2="130" y2="55" stroke="#c99a3f" stroke-width="3"/><line x1="210" y1="112" x2="130" y2="55" stroke="#213575" stroke-width="2.5"/><path d="M130 101h11v11" fill="none" stroke="#213575"/><circle cx="210" cy="112" r="4" fill="#213575"/><text x="216" y="109" font-size="16">O</text><text x="112" y="116" font-size="16">M</text><text x="112" y="49" font-size="16">A</text><text x="143" y="105" font-size="14">d</text><text x="164" y="74" font-size="14">r</text>`, caption);
  const diagrams: Record<string, string> = {
    'ex5.1:4': circle(`<line x1="128" y1="112" x2="292" y2="112" stroke="#b3372c" stroke-width="3"/><circle cx="210" cy="112" r="4" fill="#213575"/><text x="118" y="108" font-size="16">A</text><text x="296" y="108" font-size="16">B</text><text x="214" y="108" font-size="16">O</text>`, 'The least-radius circle has AB as its diameter'),
    'ex5.2:1': chord(), 'ex5.2:2': circle(`<line x1="210" y1="112" x2="147" y2="64" stroke="#213575" stroke-width="2"/><line x1="210" y1="112" x2="274" y2="64" stroke="#213575" stroke-width="2"/><line x1="147" y1="64" x2="274" y2="64" stroke="#b3372c" stroke-width="3"/><line x1="210" y1="112" x2="146" y2="160" stroke="#213575" stroke-width="2"/><line x1="210" y1="112" x2="274" y2="160" stroke="#213575" stroke-width="2"/><line x1="146" y1="160" x2="274" y2="160" stroke="#b3372c" stroke-width="3"/><text x="137" y="60">A</text><text x="278" y="60">B</text><text x="137" y="176">C</text><text x="278" y="176">D</text><text x="215" y="109">O</text>`, 'Two isosceles triangles formed by equal chords'),
    'ex5.3:1': chord(), 'ex5.3:2': circle(`<polygon points="210,35 140,150 280,150" fill="none" stroke="#213575" stroke-width="2.5"/><line x1="210" y1="35" x2="210" y2="112" stroke="#c99a3f" stroke-width="2" stroke-dasharray="5 4"/><circle cx="210" cy="112" r="4" fill="#b3372c"/><text x="204" y="28">A</text><text x="127" y="157">B</text><text x="282" y="157">C</text><text x="216" y="109">O</text>`, 'Isosceles triangle inscribed in a circle'),
    'ex5.3:3': circle(`<line x1="126" y1="76" x2="294" y2="76" stroke="#b3372c" stroke-width="3"/><line x1="126" y1="148" x2="294" y2="148" stroke="#c99a3f" stroke-width="3"/><line x1="210" y1="112" x2="210" y2="76" stroke="#213575" stroke-dasharray="5 4"/><line x1="210" y1="112" x2="210" y2="148" stroke="#213575" stroke-dasharray="5 4"/><text x="198" y="106">O</text><text x="177" y="70">6 cm</text><text x="177" y="169">8 cm</text>`, 'Parallel chords on opposite sides of the centre'),
    'ex5.4:1': rightTriangle('Radius, perpendicular, and half-chord form a right triangle'), 'ex5.4:3': rightTriangle('Compare the right triangles formed by equal chord distances'),
    'ex5.5:1': rightTriangle('Radius and distance to chord determine the half-chord'), 'ex5.5:2': rightTriangle('Chord length depends on radius and perpendicular distance'), 'ex5.5:3': circle(`<line x1="126" y1="76" x2="294" y2="76" stroke="#b3372c" stroke-width="3"/><line x1="126" y1="148" x2="294" y2="148" stroke="#c99a3f" stroke-width="3"/><line x1="210" y1="112" x2="210" y2="76" stroke="#213575" stroke-dasharray="5 4"/><line x1="210" y1="112" x2="210" y2="148" stroke="#213575" stroke-dasharray="5 4"/><text x="196" y="106">O</text><text x="151" y="69">AB</text><text x="151" y="168">CD</text>`, 'Compare two chords by their distances from the centre'),
    'ex5.6:1': circle(`<line x1="210" y1="112" x2="145" y2="112" stroke="#213575" stroke-width="2"/><line x1="210" y1="112" x2="244" y2="38" stroke="#213575" stroke-width="2"/><line x1="145" y1="112" x2="244" y2="38" stroke="#b3372c" stroke-width="3"/><path d="M184 112 A26 26 0 0 1 198 89" fill="none" stroke="#c99a3f" stroke-width="2"/><text x="203" y="108">O</text><text x="131" y="119">A</text><text x="246" y="34">B</text><text x="176" y="86">60°</text>`, 'Central angle and its chord'),
    'ex5.6:2': circle(`<line x1="145" y1="112" x2="275" y2="112" stroke="#b3372c" stroke-width="2.5"/><line x1="145" y1="112" x2="210" y2="35" stroke="#213575" stroke-width="2"/><line x1="275" y1="112" x2="210" y2="35" stroke="#213575" stroke-width="2"/><line x1="145" y1="112" x2="210" y2="189" stroke="#c99a3f" stroke-width="2"/><line x1="275" y1="112" x2="210" y2="189" stroke="#c99a3f" stroke-width="2"/><text x="132" y="117">A</text><text x="280" y="117">B</text><text x="206" y="28">X</text><text x="206" y="209">Y</text>`, 'Angles subtended by the same chord at points on the circle'),
    'ex5.eoc:1': rightTriangle('Chord, radius, and perpendicular distance'), 'ex5.eoc:3': rightTriangle('The perpendicular from the centre bisects the chord'), 'ex5.eoc:4': rightTriangle('Use a right triangle to find the chord length'), 'ex5.eoc:5': chord(),
    'ex5.eoc:6': circle(`<line x1="128" y1="112" x2="292" y2="112" stroke="#b3372c" stroke-width="3"/><line x1="128" y1="112" x2="210" y2="35" stroke="#213575" stroke-width="2.5"/><line x1="292" y1="112" x2="210" y2="35" stroke="#213575" stroke-width="2.5"/><path d="M199 44 A18 18 0 0 1 221 44" fill="none" stroke="#c99a3f" stroke-width="2"/><text x="118" y="117">A</text><text x="296" y="117">B</text><text x="206" y="28">C</text><text x="206" y="63">90°</text>`, 'Angle in a semicircle is a right angle'),
    'ex5.eoc:7': cyclic(), 'ex5.eoc:8': cyclic('P Q R S'), 'ex5.eoc:9': rightTriangle('Radius, half-chord, and distance from centre'), 'ex5.eoc:10': cyclic('A B C D'), 'ex5.eoc:11': cyclic(),
    'ex5.eoc:12': circle(`<line x1="128" y1="72" x2="292" y2="152" stroke="#b3372c" stroke-width="3"/><line x1="128" y1="152" x2="292" y2="72" stroke="#c99a3f" stroke-width="3"/><circle cx="210" cy="112" r="4" fill="#213575"/><text x="204" y="107">P</text><text x="116" y="68">A</text><text x="296" y="157">B</text><text x="116" y="158">C</text><text x="296" y="68">D</text>`, 'Two intersecting chords'),
    'ex5.eoc:13': rightTriangle('Construct a chord using a right triangle with legs 3 cm and 3 cm'), 'ex5.eoc:14': cyclic(), 'ex5.eoc:15': cyclic(),
    'ex5.eoc:16': circle(`<line x1="128" y1="75" x2="292" y2="75" stroke="#b3372c" stroke-width="2.5"/><line x1="128" y1="149" x2="292" y2="149" stroke="#c99a3f" stroke-width="2.5"/><circle cx="210" cy="112" r="4" fill="#213575"/><text x="216" y="108">O</text>`, 'Midpoints of equal length chords lie on a circle'),
    'ex5.eoc:17': circle(`<line x1="210" y1="112" x2="145" y2="112" stroke="#213575" stroke-width="2"/><line x1="210" y1="112" x2="245" y2="38" stroke="#213575" stroke-width="2"/><line x1="145" y1="112" x2="245" y2="38" stroke="#b3372c" stroke-width="3"/><line x1="145" y1="112" x2="245" y2="186" stroke="#c99a3f" stroke-width="3"/><text x="201" y="108">O</text><text x="130" y="117">A</text><text x="248" y="35">B</text><text x="249" y="195">C</text>`, 'Equal chords subtend equal angles at the centre'),
    'ex5.eoc:18': circle(`<line x1="128" y1="72" x2="292" y2="72" stroke="#b3372c" stroke-width="3"/><line x1="128" y1="150" x2="292" y2="150" stroke="#c99a3f" stroke-width="3"/><line x1="210" y1="112" x2="210" y2="72" stroke="#213575" stroke-dasharray="5 4"/><line x1="210" y1="112" x2="210" y2="150" stroke="#213575" stroke-dasharray="5 4"/><text x="196" y="106">O</text><text x="167" y="67">10 cm</text><text x="165" y="171">24 cm</text>`, 'Parallel chords on the same side of the centre'),
    'ex5.eoc:19': circle(`<polygon points="210,30 281,71 281,153 210,194 139,153 139,71" fill="#dbeafe" fill-opacity=".35" stroke="#213575" stroke-width="2.5"/><line x1="210" y1="112" x2="210" y2="30" stroke="#c99a3f" stroke-width="2"/><text x="216" y="107">O</text><text x="214" y="28">A</text>`, 'Regular hexagon inscribed in a circle'),
    'ex5.eoc:20': cyclic('M N O P'), 'ex5.eoc:21': cyclic(), 'ex5.eoc:22': circle(`<line x1="128" y1="112" x2="292" y2="112" stroke="#b3372c" stroke-width="3"/><text x="118" y="108">A</text><text x="296" y="108">B</text>`, 'The diameter is the longest possible chord'),
    'ex5.eoc:23': circle(`<line x1="128" y1="72" x2="292" y2="72" stroke="#b3372c" stroke-width="3"/><line x1="128" y1="112" x2="292" y2="112" stroke="#c99a3f" stroke-width="2.5"/><circle cx="175" cy="112" r="4" fill="#213575"/><text x="181" y="108">A</text><text x="190" y="67">longer</text><text x="186" y="134">shortest</text>`, 'The shortest chord through an interior point is perpendicular to the radius'),
    'ex5.eoc:24': circle(`<line x1="128" y1="112" x2="292" y2="112" stroke="#b3372c" stroke-width="3"/><line x1="128" y1="112" x2="210" y2="35" stroke="#213575" stroke-width="2.5"/><line x1="292" y1="112" x2="210" y2="35" stroke="#213575" stroke-width="2.5"/><text x="118" y="117">A</text><text x="296" y="117">B</text><text x="206" y="28">C</text><text x="208" y="69">90°</text>`, 'Angle subtended by a diameter'),
    'ex5.eoc:25': circle(`<line x1="128" y1="112" x2="292" y2="112" stroke="#213575" stroke-width="2.5"/><line x1="160" y1="47" x2="160" y2="177" stroke="#b3372c" stroke-width="3"/><line x1="260" y1="47" x2="260" y2="177" stroke="#c99a3f" stroke-width="3"/><line x1="160" y1="112" x2="260" y2="112" stroke="#213575" stroke-dasharray="5 4"/><text x="201" y="106">O</text><text x="148" y="44">C</text><text x="265" y="44">D</text><text x="198" y="130">MM′</text>`, 'Perpendicular chords and their midpoints'),
    'ex5.eoc:26': cyclic(),
  };
  return diagrams[key] ?? '';
}

// Rasterise an inline SVG figure so jsPDF can embed it as a PNG.
function svgToPngDataUrl(svg: string, scale = 2): Promise<string> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = Math.max(1, Math.round(img.naturalWidth * scale));
      canvas.height = Math.max(1, Math.round(img.naturalHeight * scale));
      const ctx = canvas.getContext('2d');
      if (!ctx) { reject(new Error('canvas context unavailable')); return; }
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      resolve(canvas.toDataURL('image/png'));
    };
    img.onerror = () => reject(new Error('SVG rasterisation failed'));
    img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
  });
}

function ExerciseQuestions({ exercise, chapter, guestBlocked, onGuestBlock }: {
  exercise: GmExercise;
  chapter: { code: string; slug: string; title: string; number: number };
  guestBlocked: boolean;
  onGuestBlock: () => void;
}) {
  const [showKey, setShowKey] = useState(false);
  const [showSol, setShowSol] = useState(true);
  const anchor = useRef<{ el: HTMLElement; top: number } | null>(null);

  React.useLayoutEffect(() => {
    if (anchor.current) {
      const root = document.documentElement;
      const prev = root.style.scrollBehavior;
      root.style.scrollBehavior = 'auto';
      const { el, top } = anchor.current;
      const delta = el.getBoundingClientRect().top - top;
      if (Math.abs(delta) > 0) window.scrollBy(0, delta);
      root.style.scrollBehavior = prev;
      anchor.current = null;
    }
  });

  function toggleKey(e: React.MouseEvent<HTMLButtonElement>) {
    const block = e.currentTarget.closest('.question-block') as HTMLElement | null;
    anchor.current = block ? { el: block, top: block.getBoundingClientRect().top } : null;
    setShowKey(!showKey);
    if (!showKey) setShowSol(false);
  }

  function toggleSol(e: React.MouseEvent<HTMLButtonElement>) {
    const block = e.currentTarget.closest('.question-block') as HTMLElement | null;
    anchor.current = block ? { el: block, top: block.getBoundingClientRect().top } : null;
    setShowSol(!showSol);
    if (!showSol) setShowKey(false);
  }

  // Group questions by printed book page (Think & Reflect boxes) so each page
  // gets its own "Page N" side heading with numbering restarting under it.
  const pageGroups: { page?: number; items: GmQuestion[] }[] = [];
  for (const q of exercise.questions) {
    const last = pageGroups[pageGroups.length - 1];
    if (last && last.page === q.page) last.items.push(q);
    else pageGroups.push({ page: q.page, items: [q] });
  }
  const hasPageGroups = pageGroups.some(g => g.page !== undefined);

  return (
    <>
      {hasPageGroups
        ? pageGroups.map((g, gi) => (
            <React.Fragment key={g.page !== undefined ? `p${g.page}` : `g${gi}`}>
              {g.page !== undefined && (
                <h3 className="mt-5 mb-4 first:mt-0 text-base font-display font-bold text-[var(--text-primary)] flex items-center gap-2">
                  <BookOpen size={15} className="text-blue-500" />
                  Page {g.page}
                  <span className="text-xs font-normal text-[var(--text-muted)]">({g.items.length} {g.items.length === 1 ? 'question' : 'questions'})</span>
                </h3>
              )}
              {g.items[0]?.boxHeading && (
                <h4 className="mb-4 first:mt-0 text-base font-display font-bold text-red-600 flex items-center gap-2">
                  {g.items[0].boxHeading}
                </h4>
              )}
              {g.items.map(q => (
                <NotebookQuestion key={q.id} q={q} exercise={exercise} chapter={chapter}
                  guestBlocked={guestBlocked} onGuestBlock={onGuestBlock}
                  showKey={showKey} showSol={showSol}
                  onToggleKey={toggleKey} onToggleSol={toggleSol} />
              ))}
            </React.Fragment>
          ))
        : exercise.questions.map(q => (
            <NotebookQuestion key={q.id} q={q} exercise={exercise} chapter={chapter}
              guestBlocked={guestBlocked} onGuestBlock={onGuestBlock}
              showKey={showKey} showSol={showSol}
              onToggleKey={toggleKey} onToggleSol={toggleSol} />
          ))}
    </>
  );
}

function NotebookQuestion({ q, exercise, chapter, onGuestBlock, guestBlocked, showKey, showSol, onToggleKey, onToggleSol }: {
  q: GmQuestion; exercise: GmExercise;
  chapter: { code: string; slug: string; title: string; number: number };
  onGuestBlock: () => void; guestBlocked: boolean;
  showKey: boolean; showSol: boolean;
  onToggleKey: (e: React.MouseEvent<HTMLButtonElement>) => void; onToggleSol: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) {
  const ctx = `Maths Question ${q.number}: ${q.plainText}`;
  return (
    <div className="question-block" id={`q-${exercise.id}-${q.id}`}>
      <div className="ganita-notebook">
        {q.instruction && <div className="qinstr">{q.instruction}</div>}
        <div className="qcard">
          {q.md
            ? <div className="qhead">
                <div className="qnum">{q.number}</div>
                <div className="qtext">
                  <MathRenderer text={q.md.text} />
                  {q.figure && (
                    <figure className="qfig">
                      <div dangerouslySetInnerHTML={{ __html: q.figure.svg }} />
                      {q.figure.caption && <figcaption>{q.figure.caption}</figcaption>}
                    </figure>
                  )}
                </div>
              </div>
            : <div className="qhead" dangerouslySetInnerHTML={{ __html: q.head }} />}
          {guestBlocked ? (
            <div className="qbody">
              <GuestPaywall onSignUp={onGuestBlock} onLogin={onGuestBlock} />
            </div>
          ) : (
            <div className="qbody">
              {/* Answer type buttons */}
              <div className="flex items-center gap-2 flex-wrap mb-2">
                <button onClick={onToggleKey}
                  className={cn('method-tab text-xs', showKey ? 'method-tab-active' : 'method-tab-inactive')}><KeyRound size={12}/> Answer Key</button>
                <button onClick={onToggleSol}
                  className={cn('method-tab text-xs', showSol ? 'method-tab-active' : 'method-tab-inactive')}><BookOpen size={12}/> School Level Solution</button>
              </div>

              {showKey && (
                <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/20 border border-amber-100 dark:border-amber-900/40 mb-2">
                  <p className="font-bold text-amber-600 uppercase tracking-wider mb-1.5">Answer Key</p>
                  <div className="flex items-start gap-2">
                    <span className="flex-shrink-0 mt-1 rounded-md bg-amber-600/10 dark:bg-amber-400/15 text-amber-600 dark:text-amber-400 font-bold px-2 py-0.5">Ans.</span>
                    <div className="flex-1 min-w-0">
                      {q.md
                        ? <MathRenderer text={q.answerKey} className="box" />
                        : <span className="box" style={{ whiteSpace: 'pre-line' }}>{q.answerKey}</span>}
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <div className="answer-actions"><ReadAloud text={q.answerKey} size="sm" /><CopyBtn text={q.answerKey} /></div>
                    <ReportFlag reportedContent={q.answerKey} onGuestBlock={onGuestBlock} />
                  </div>
                  <ThumbsRating subject="maths" chapterNumber={chapter.number} exerciseLabel={exercise.title} itemKey={`${exercise.id}-${q.id}-key`} />
                </div>
              )}

              {showSol && (
                <div className="p-1.5 rounded-xl bg-[var(--surface-1)] border border-[var(--border)] mb-2">
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <p className="font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">School Level Solution</p>
                    <BookmarkButton
                      subject="maths" chapterCode={chapter.code} chapterSlug={chapter.slug} chapterTitle={chapter.title}
                      questionId={`${exercise.id}-${q.id}`} questionNumber={q.number.replace(/\u2605/g, '')} questionText={questionText(q)}
                      onGuestBlock={onGuestBlock}
                    />
                  </div>
                  {q.md
                    ? <MathRenderer text={q.md.school} className="answer-body" />
                    : <div dangerouslySetInnerHTML={{ __html: chapter.slug === 'im-up-and-down-and-round-and-round' && !/<(?:svg|img)\b/i.test(q.body)
                      ? `${q.body}${chapterFiveDiagram(exercise.id, q.number)}`
                      : q.body }} />}
                  <div className="flex items-center justify-between mt-2">
                    <div className="answer-actions"><ReadAloud text={questionText(q)} size="sm" /><CopyBtn text={questionText(q)} /></div>
                    <ReportFlag reportedContent={questionText(q)} onGuestBlock={onGuestBlock} />
                  </div>
                  <ThumbsRating subject="maths" chapterNumber={chapter.number} exerciseLabel={exercise.title} itemKey={`${exercise.id}-${q.id}-solution`} />
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      <AIFollowUp context={ctx} subject="maths" chapterNumber={chapter.number} exerciseLabel={exercise.title} itemKey={`${exercise.id}-${q.id}`} onGuestBlock={onGuestBlock} />
    </div>
  );
}

interface PageProps { chapterCode: string; chapterSlug: string; }

// Unified sidebar list — Part I (source HTML data) + Part II (Chapter data).
const ALL_GM_CHAPTERS: { code: string; slug: string; title: string; number: number; part: 1 | 2 }[] = [
  ...MATHS_SOURCE_CHAPTERS.map(ch => ({ code: ch.code, slug: ch.slug, title: ch.title, number: ch.number, part: 1 as const })),
  ...MATHS_PART2_CHAPTERS.map(ch => ({ code: ch.code, slug: ch.slug, title: ch.title, number: ch.number, part: 2 as const })),
];
const PART2_FIRST = MATHS_PART2_CHAPTERS[0]?.number ?? Infinity;

export default function MathsChapterPage({ chapterCode, chapterSlug }: PageProps) {
  const srcChapter = MATHS_SOURCE_CHAPTERS.find(c => c.code === chapterCode && c.slug === chapterSlug);
  const p2Source = srcChapter ? undefined : MATHS_PART2_CHAPTERS.find(c => c.code === chapterCode && c.slug === chapterSlug);
  const chapter: GmChapter | undefined = srcChapter
    ? { code: srcChapter.code, slug: srcChapter.slug, title: srcChapter.title, number: srcChapter.number, exercises: srcChapter.exercises as unknown as GmExercise[] }
    : (p2Source ? part2ToGm(p2Source) : undefined);
  const bookLabel = chapter ? (chapter.number >= PART2_FIRST ? 'Part II' : 'Part I') : 'Part I';
  const [selEx, setSelEx] = useState<string>('all');
  useChapterTabSession({
    scope: 'ganita-manjari',
    code: chapterCode,
    slug: chapterSlug,
    tab: selEx,
    setTab: setSelEx,
    isTabValid: t => t === 'all' || (chapter?.exercises.some(e => e.id === t) ?? false),
  });
  // selEx is component state that survives client-side chapter navigation —
  // while it points at an exercise the new chapter doesn't have, fall back to
  // the default tab so we never render "no tab selected + no questions".
  const sel = selEx === 'all' || (chapter?.exercises.some(e => e.id === selEx) ?? false) ? selEx : 'all';
  const [guestBlocked, setGuestBlocked] = useState(false);
  const [authModal, setAuthModal] = useState<'login' | 'signup' | null>(null);
  const { isGuest } = useAuthStore();
  const viewCounted = useRef(false);

  React.useEffect(() => {
    if (isGuest && !viewCounted.current) {
      viewCounted.current = true;
      incrementSolutionView();
      setGuestBlocked(hasReachedGuestLimit());
    }
    if (!isGuest) setGuestBlocked(false);
  }, [isGuest]);

  async function downloadPDF() {
    if (!chapter) return;
    const { jsPDF } = await import('jspdf');
    const exercises = sel === 'all' ? chapter.exercises : chapter.exercises.filter(e => e.id === sel);
    const pdf = new jsPDF({ unit: 'pt', format: 'a4' });
    let y = 48;
    const write = (line: string) => { if (y > 790) { pdf.addPage(); y = 48; } pdf.text(line, 48, y); y += 16; };
    const writeWrapped = (text: string, size: number, style: 'normal' | 'italic' = 'normal') => {
      pdf.setFont('helvetica', style); pdf.setFontSize(size);
      pdf.splitTextToSize(text, 510).forEach((l: string) => write(l));
      pdf.setFont('helvetica', 'normal'); pdf.setFontSize(10);
    };
    pdf.setFontSize(16); pdf.text(`Chapter ${chapter.number}: ${chapter.title}`, 48, y); y += 20;
    pdf.setFontSize(10);
    write(`Class 9 Maths · Ganita Manjari ${bookLabel} · NCERT 2026 Revised Syllabus`);
    y += 10;
    for (const ex of exercises) {
      pdf.setFontSize(13); write(ex.title); pdf.setFontSize(10); y += 6;
      let lastPage: number | undefined;
      for (const q of ex.questions) {
        const gm = q as GmQuestion;
        if (gm.page !== undefined && gm.page !== lastPage) {
          lastPage = gm.page;
          pdf.setFont('helvetica', 'bold'); pdf.setFontSize(11);
          write(`Page ${gm.page}`);
          pdf.setFont('helvetica', 'normal'); pdf.setFontSize(10);
          y += 4;
        }
        if (gm.instruction) { writeWrapped(gm.instruction, 10, 'italic'); y += 4; }
        const starred = q.number.includes('\u2605');
        const num = q.number.replace(/\u2605/g, '');
        const sep = q.plainText.indexOf('\n\n');
        const qPart = sep >= 0 ? q.plainText.slice(0, sep) : q.plainText;
        const sPart = sep >= 0 ? q.plainText.slice(sep + 2) : '';
        writeWrapped(`Q${starred ? '*' : ''}${num}. ${qPart}`, 10);
        if (gm.figure) {
          try {
            const png = await svgToPngDataUrl(gm.figure.svg);
            const props = pdf.getImageProperties(png);
            const w = 160;
            const h = (w * props.height) / props.width;
            if (y + h + 30 > 790) { pdf.addPage(); y = 48; }
            pdf.addImage(png, 'PNG', 48 + (510 - w) / 2, y, w, h);
            y += h + 4;
            if (gm.figure.caption) {
              pdf.setFontSize(9);
              const capW = pdf.getTextWidth(gm.figure.caption);
              pdf.text(gm.figure.caption, 48 + (510 - capW) / 2, y);
              y += 14;
              pdf.setFontSize(10);
            }
          } catch { /* skip figure if rasterisation fails */ }
        }
        if (sPart) { y += 4; writeWrapped(sPart, 10); }
        y += 6;
      }
      y += 8;
    }
    pdf.setFontSize(9);
    write('SolveNCERT — Powered by NDe · formerly NOVEXA | solvencert · NCERT 2026 Revised Syllabus');
    pdf.save(`class-9-maths-${chapter.code}-${sel === 'all' ? 'all-exercises' : sel}-solutions.pdf`);
  }

  async function downloadAnswerKeys() {
    if (!chapter) return;
    await import('jspdf');
    const exercises = sel === 'all' ? chapter.exercises : chapter.exercises.filter(e => e.id === sel);
    const html = `<html><head><title>${chapter.title} — Answer Keys Only</title>
    <style>body{font-family:Georgia,serif;max-width:720px;margin:0 auto;padding:24px;font-size:13px;line-height:1.8}
    h1{font-size:22px;border-bottom:2px solid #2563eb;padding-bottom:8px}h2{font-size:15px;color:#2563eb;margin-top:20px}
    .q{margin:10px 0;padding:10px;border-left:3px solid #2563eb;background:#eff6ff;border-radius:0 8px 8px 0}
    .footer{position:fixed;bottom:0;left:0;right:0;background:#fff;padding:8px 24px;font-size:10px;color:#6b7280;border-top:1px solid #dde3f0;text-align:center}
    @media print{body{padding-bottom:40px}}</style></head><body>
    <h1>Chapter ${chapter.number}: ${chapter.title} — Answer Keys</h1>
    <p style="color:#6b7280;font-size:12px;margin-bottom:20px">Class 9 Maths (Ganita Manjari ${bookLabel}) · Quick-reference answer keys only · NCERT 2026 Revised Syllabus</p>
    ${exercises.map(ex => {
      let lastPage: number | undefined;
      return `<h2>${ex.title}</h2>${ex.questions.map(q => {
        let pageHead = '';
        if (q.page !== undefined && q.page !== lastPage) {
          lastPage = q.page;
          pageHead = `<h3 style="font-size:13px;color:#2563eb;margin:16px 0 4px">Page ${q.page}</h3>`;
        }
        return `${pageHead}
      <div class="q"><p><strong>Q${q.number.replace(/\u2605/g, '')}.</strong> ${q.answerKey.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\n/g, '<br>')}</p></div>`;
      }).join('')}`;
    }).join('')}
    <div class="footer">SolveNCERT — Powered by NDe · formerly NOVEXA | solvencert · NCERT 2026 Revised Syllabus</div>
    </body></html>`;
    htmlToPdf(html, `class-9-maths-${chapter.code}-${sel === 'all' ? 'all-exercises' : sel}-answer-keys.pdf`);
  }

  if (!chapter) {
    return (
      <Layout title="Chapter Not Found | SolveNCERT" description="The requested chapter could not be found. Browse all NCERT solutions for Class 9.">
        <div className="max-w-screen-md mx-auto px-6 py-20 text-center">
          <p className="text-[var(--text-muted)]">Chapter not found.</p>
          <Link href="/class-9/maths/ganita-manjari" className="btn-primary mt-4 inline-flex">Browse Maths</Link>
        </div>
      </Layout>
    );
  }

  const exercises = sel === 'all' ? chapter.exercises : chapter.exercises.filter(e => e.id === sel);
  const totalQ = chapter.exercises.reduce((a, ex) => a + ex.questions.length, 0);
  const BASE = 'https://solvencert-novexa.vercel.app';
  const chapterUrl = `${BASE}/class-9/maths/ganita-manjari/${chapterCode}/${chapterSlug}`;
  const chapterCodeUpper = chapter.code.toUpperCase();

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
      { '@type': 'ListItem', position: 2, name: 'NCERT Solutions', item: `${BASE}/answers` },
      { '@type': 'ListItem', position: 3, name: 'Class 9 Maths', item: `${BASE}/class-9/maths/ganita-manjari` },
      { '@type': 'ListItem', position: 4, name: chapter.title, item: chapterUrl },
    ],
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `Chapter ${chapter.number}: ${chapter.title} (${chapterCodeUpper})`,
    description: `NCERT Solutions for Class 9 Maths Chapter ${chapter.number} (${chapterCodeUpper}): ${chapter.title}. Step-by-step notebook-style answers — CBSE 2026 Revised Syllabus.`,
    keywords: `${chapterCodeUpper}, ${chapter.code}, class 9 maths, NCERT solutions, Ganita Manjari, chapter ${chapter.number}`,
    author: { '@type': 'Organization', name: 'SolveNCERT by NOVEXA · Now NDe · NoirDemons', alternateName: ['NDe', 'NDE', 'nde', 'NoirDemons'] },
    publisher: { '@type': 'Organization', name: 'SolveNCERT by NOVEXA · Now NDe · NoirDemons', alternateName: ['NDe', 'NDE', 'nde', 'NoirDemons'], url: BASE },
    url: chapterUrl,
    identifier: chapterCodeUpper,
    about: { '@type': 'Chapter', name: chapter.title, position: chapter.number, code: chapterCodeUpper },
    isPartOf: { '@type': 'Book', name: `Ganita Manjari ${bookLabel}`, isbn: 'NCERT Class 9 Maths' },
  };

  return (
    <Layout
      title={`${chapter.title} — ${chapterCodeUpper} | Class 9 Maths NCERT Solutions`}
      description={`NCERT Solutions for Class 9 Maths Chapter ${chapter.number} (${chapterCodeUpper}): ${chapter.title}. Step-by-step notebook-style answers for every exercise with diagrams and boxed solutions — CBSE 2026 Revised Syllabus (Ganita Manjari ${bookLabel}).`}
      canonical={`/class-9/maths/ganita-manjari/${chapterCode}/${chapterSlug}`}
      ogType="article"
      schema={[breadcrumbSchema, articleSchema]}
      bgImage={getSubjectBackground('maths', chapter.number)}
      keywords={`${chapterCodeUpper}, ${chapter.code}, class 9 maths NCERT solutions, Ganita Manjari chapter ${chapter.number}, ${chapter.title} solutions, CBSE 2026 maths`}
    >
      {/* Breadcrumb */}
      <div className="sticky top-14 z-30 bg-[var(--surface-0)]/95 backdrop-blur-md border-b border-[var(--border)]">
        <div className="max-w-screen-lg mx-auto px-4 md:px-6 py-2.5 flex items-center gap-1.5 text-xs text-[var(--text-muted)] overflow-x-auto scrollbar-hide whitespace-nowrap">
          <Link href="/" className="hover:text-blue-500 flex items-center gap-1 flex-shrink-0"><Home size={11} />Home</Link>
          <ChevronRight size={10} className="flex-shrink-0" />
          <Link href="/answers" className="hover:text-blue-500 flex-shrink-0">Solutions</Link>
          <ChevronRight size={10} className="flex-shrink-0" />
          <Link href="/class-9/maths/ganita-manjari" className="hover:text-blue-500 flex-shrink-0">Maths</Link>
          <ChevronRight size={10} className="flex-shrink-0" />
          <span className="text-[var(--text-secondary)] font-semibold flex-shrink-0">Ch {chapter.number}</span>
        </div>
      </div>

      <div className="max-w-screen-lg mx-auto px-4 md:px-6 py-6 md:py-8">
        <div className="flex gap-7">
          {/* Sidebar */}
          <aside className="hidden lg:block w-52 flex-shrink-0">
            <div className="sticky top-28 card p-4">
              <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)] mb-3">Chapters</p>
              <nav className="space-y-0.5 max-h-[65vh] overflow-y-auto scrollbar-hide">
                {ALL_GM_CHAPTERS.map(ch => (
                  <React.Fragment key={ch.code}>
                    {ch.number === PART2_FIRST && (
                      <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-blue-500/90 px-2.5 pt-2 pb-0.5">Part II</p>
                    )}
                    <Link href={`/class-9/maths/ganita-manjari/${ch.code}/${ch.slug}`}
                      className={cn('flex items-center gap-2 px-2.5 py-2 rounded-lg text-xs transition-colors',
                        ch.slug === chapterSlug ? 'bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 font-semibold' : 'text-[var(--text-muted)] hover:bg-[var(--surface-1)]')}>
                      <span className="w-5 h-5 rounded bg-[var(--surface-2)] text-[10px] font-bold flex items-center justify-center flex-shrink-0">{ch.number}</span>
                      <span className="truncate leading-tight">{ch.title}</span>
                    </Link>
                  </React.Fragment>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main */}
          <main className="flex-1 min-w-0">
            <div className="mb-6 page-intro p-6 rounded-[2rem] border border-[var(--border)]">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="px-2.5 py-1 rounded-full bg-blue-100 dark:bg-blue-950/30 text-blue-700 dark:text-blue-300 text-xs font-bold">Class 9 · Maths</span>
                <span className="badge-2026">NCERT 2026 Revised Syllabus</span>
              </div>
              <h1 className="text-2xl md:text-3xl font-display font-bold text-[var(--text-primary)] leading-tight">Chapter {chapter.number}: {chapter.title} <span className="text-lg md:text-xl font-normal text-[var(--text-muted)]">({chapter.code.toUpperCase()})</span></h1>
<p className="text-sm text-[var(--text-muted)] mt-2">Ganita Manjari {bookLabel} · {totalQ} questions · {chapter.exercises.length} exercises</p>
              <p className="text-xs text-[var(--text-muted)] mt-4">Chapter code: <span className="font-mono font-semibold text-[var(--text-secondary)]">{chapter.code}</span> · Book: Ganita Manjari {bookLabel} · Class 9 Maths</p>
              <p className="text-sm text-[var(--text-secondary)] mt-3 leading-relaxed">Find complete NCERT solutions for Class 9 Maths, Ganita Manjari {bookLabel} Chapter {chapter.number}. Every exercise has a clear, step-by-step answer for chapter code {chapter.code.toUpperCase()}.</p>
            </div>

            {/* Exercise selector + download */}
            <div className="mb-5">
              {chapter.exercises.length > 1 && (
                <div className="mb-3">
                  <span className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider">Jump to:</span>
                  <div className="section-nav mt-2">
                    <button onClick={() => setSelEx('all')} className={cn('method-tab section-nav-button text-xs', sel === 'all' ? 'method-tab-active' : 'method-tab-inactive')}>All Exercises</button>
                    {chapter.exercises.map(ex => (
                      <button key={ex.id} onClick={() => setSelEx(ex.id)} className={cn('method-tab section-nav-button text-xs', sel === ex.id ? 'method-tab-active' : 'method-tab-inactive')}>{ex.title}</button>
                    ))}
                  </div>
                </div>
              )}
              <div className="flex items-center gap-2 flex-wrap justify-end">
                <button onClick={downloadAnswerKeys} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--surface-2)] hover:bg-[var(--surface-3)] text-[var(--text-secondary)] text-xs font-semibold border border-[var(--border)]">
                  <Download size={13} /> Download Answer Keys
                </button>
                <button onClick={downloadPDF} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--surface-2)] hover:bg-[var(--surface-3)] text-[var(--text-secondary)] text-xs font-semibold border border-[var(--border)]">
                  <Download size={13} /> Download Solutions PDF
                </button>
              </div>
            </div>

            {exercises.map(exercise => (
              <div key={exercise.id} className="mb-8" id={exercise.id}>
                <h2 className="text-base font-display font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                  <BookOpen size={15} className="text-blue-500" />
                  {exercise.title}
                  <span className="text-xs font-normal text-[var(--text-muted)]">({exercise.questions.length} questions)</span>
                </h2>
                <ExerciseQuestions
                  exercise={exercise}
                  chapter={{ code: chapter.code, slug: chapter.slug, title: chapter.title, number: chapter.number }}
                  guestBlocked={guestBlocked && isGuest}
                  onGuestBlock={() => setAuthModal('signup')}
                />
                {exercise.introHtml && (
                  <div className="ganita-notebook" dangerouslySetInnerHTML={{ __html: exercise.introHtml }} />
                )}
              </div>
            ))}

            {/* Mobile chapter nav */}
            <div className="lg:hidden mt-8 card p-4">
              <p className="text-xs font-bold uppercase tracking-widest text-[var(--text-muted)] mb-3">Other Chapters</p>
              <div className="flex flex-wrap gap-2 items-center">
                {ALL_GM_CHAPTERS.map(ch => (
                  <React.Fragment key={ch.code}>
                    {ch.number === PART2_FIRST && (
                      <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-blue-500/90 w-full mt-1">Part II</span>
                    )}
                    <Link href={`/class-9/maths/ganita-manjari/${ch.code}/${ch.slug}`}
                      className={cn('px-3 py-1.5 rounded-lg text-xs font-medium transition-colors',
                        ch.slug === chapterSlug ? 'bg-blue-600 text-white' : 'bg-[var(--surface-2)] text-[var(--text-secondary)] hover:bg-[var(--surface-3)]')}>
                      {ch.number}
                    </Link>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </main>

          <QuestionNav
            questions={exercises.flatMap(ex => ex.questions.map(q => ({ id: `${ex.id}-${q.id}`, number: q.number.replace(/\u2605/g, ''), section: ex.title, page: q.page })))}
            label={sel === 'all' ? 'Questions' : (chapter.exercises.find(e => e.id === sel)?.title || 'Questions')}
          />
        </div>
      </div>

      <BackToTop />
      {authModal && <AuthModal mode={authModal} onClose={() => setAuthModal(null)} onSwitch={m => setAuthModal(m)} />}
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [
    ...MATHS_SOURCE_CHAPTERS.map(ch => ({ params: { chapterCode: ch.code, chapterSlug: ch.slug } })),
    ...MATHS_PART2_CHAPTERS.map(ch => ({ params: { chapterCode: ch.code, chapterSlug: ch.slug } })),
  ],
  fallback: 'blocking'
});

export const getStaticProps: GetStaticProps = async ({ params }) => ({
  props: params || {}, revalidate: 3600
});
