import React, { useState } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import { ChevronRight, BookOpen, Home, Download, Loader2, Lightbulb, Baby, KeyRound } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import BackToTop from '@/components/features/BackToTop';
import MathRenderer from '@/components/features/MathRenderer';
import ReadAloud from '@/components/features/ReadAloud';
import AIFollowUp from '@/components/features/AIFollowUp';
import QuestionNav from '@/components/features/QuestionNav';
import BookmarkButton from '@/components/features/BookmarkButton';
import ThumbsRating from '@/components/features/ThumbsRating';
import ReportFlag from '@/components/features/ReportFlag';
import AuthModal from '@/components/auth/AuthModal';
import { SCIENCE_CHAPTERS, type ScienceQuestion } from '@/lib/content-science';
import { cn } from '@/utils/helpers';
import { getSubjectBackground } from '@/utils/helpers';
import { htmlToPdf } from '@/lib/pdf';
import { useChapterTabSession } from '@/lib/chapterTabSession';

async function savePdf(html: string, filename: string) {
  await import('jspdf');
  htmlToPdf(html, filename);
}

function CopyBtn({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button onClick={async () => { await navigator.clipboard.writeText(text); setCopied(true); setTimeout(() => setCopied(false), 2000); }}
      className={cn('inline-flex items-center gap-1 px-2 py-1 rounded-lg border text-[11px] font-medium transition-all',
        copied ? 'bg-green-100 dark:bg-green-900/30 text-green-600 border-green-200' : 'bg-[var(--surface-2)] text-[var(--text-muted)] border-transparent hover:border-[var(--border)]')}>
      {copied ? '✓ Copied' : '⎘ Copy'}
    </button>
  );
}

function QuestionCard({ q, exerciseId, chapterCode, chapterSlug, chapterTitle, chapterNumber, exerciseLabel, onGuestBlock }: {
  q: ScienceQuestion; exerciseId: string; chapterCode: string; chapterSlug: string; chapterTitle: string;
  chapterNumber: number; exerciseLabel: string; onGuestBlock: () => void;
}) {
  const [showKey, setShowKey] = useState(false);
  const [showSol, setShowSol] = useState(true);
  const [explainText, setExplainText] = useState('');
  const [explaining, setExplaining] = useState(false);
  const [simplifyText, setSimplifyText] = useState('');
  const [simplifying, setSimplifying] = useState(false);
  const ctx = `Science Question: ${q.text}${q.parts ? '\n' + q.parts.join('\n') : ''}\nAnswer: ${q.answer.solution}`;

  async function explain() {
    setExplaining(true);
    try {
      const res = await fetch('/api/ai/explain', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: q.text, answer: q.answer.solution, subject: 'Science' }),
      });
      const data = await res.json();
      setExplainText(data.explanation || 'Could not generate explanation.');
    } catch { setExplainText('Connection error.'); }
    finally { setExplaining(false); }
  }

  async function simplify() {
    setSimplifying(true);
    try {
      const res = await fetch('/api/ai/simplify', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: q.text, answer: q.answer.solution, subject: 'Science' }),
      });
      const data = await res.json();
      setSimplifyText(data.simplified || 'Could not simplify the solution.');
    } catch { setSimplifyText('Connection error.'); }
    finally { setSimplifying(false); }
  }

  return (
    <div className="question-block" id={`q-${exerciseId}-${q.id}`}>
      <div className="q-header">
        <div className="flex items-start gap-3">
          <span className="flex-shrink-0 w-7 h-7 rounded-lg bg-[var(--surface-2)] text-xs font-bold text-[var(--text-secondary)] flex items-center justify-center mt-0.5">{q.number}</span>
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2">
              {/* H4 for SEO — styled to match body text size */}
              <h3 className="text-sm font-medium text-[var(--text-primary)] leading-relaxed flex-1 min-w-0" style={{ margin:0 }}>{q.text}</h3>
              <BookmarkButton
                subject="science" chapterCode={chapterCode} chapterSlug={chapterSlug} chapterTitle={chapterTitle}
                questionId={`${exerciseId}-${q.id}`} questionNumber={q.number} questionText={q.text}
                onGuestBlock={onGuestBlock}
              />
            </div>
            {q.parts && q.parts.length > 0 && (
              <ol className="mt-2 space-y-1.5 pl-1">
                {q.parts.map((part, pi) => (
                  <li key={pi} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                    <span className="flex-shrink-0 text-[var(--text-muted)] font-mono text-xs mt-0.5">{String.fromCharCode(97 + pi)}.</span>
                    <span className="leading-relaxed">{part}</span>
                  </li>
                ))}
              </ol>
            )}
          </div>
        </div>
      </div>
      <div className="q-body space-y-3">
        {/* Answer type buttons */}
        <div className="flex items-center gap-2 flex-wrap">
          <button onClick={() => { setShowKey(!showKey); if (!showKey) setShowSol(false); }}
            className={cn('method-tab text-xs', showKey ? 'method-tab-active' : 'method-tab-inactive')}><KeyRound size={12}/> Answer Key</button>
          <button onClick={() => { setShowSol(!showSol); if (!showSol) setShowKey(false); }}
            className={cn('method-tab text-xs', showSol ? 'method-tab-active' : 'method-tab-inactive')}><BookOpen size={12}/> School Level Solution</button>
          {/* Explain + Simplify buttons */}
          <span className="ml-auto flex items-center gap-2">
            <button onClick={explain} disabled={explaining}
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-violet-50 dark:bg-violet-950/30 border border-violet-200 dark:border-violet-800 text-violet-700 dark:text-violet-300 text-xs font-semibold hover:bg-violet-100 disabled:opacity-50 transition-all">
              {explaining ? <Loader2 size={11} className="animate-spin" /> : <Lightbulb size={11} />} Explain
            </button>
            <button onClick={simplify} disabled={simplifying}
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-xs font-semibold hover:bg-emerald-100 disabled:opacity-50 transition-all">
              {simplifying ? <Loader2 size={11} className="animate-spin" /> : <Baby size={11} />} Simplify
            </button>
          </span>
        </div>

        {showKey && (
          <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/20 border border-amber-100 dark:border-amber-900/40">
            <p className="text-[10px] font-bold text-amber-600 uppercase tracking-wider mb-1.5">Answer Key</p>
            <div className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-0.5 rounded-md bg-amber-600/10 dark:bg-amber-400/15 text-amber-600 dark:text-amber-400 text-xs font-bold px-2 py-0.5">Ans.</span>
              <p className="flex-1 min-w-0 text-sm text-[var(--text-secondary)] leading-relaxed">{q.answer.answerKey}</p>
            </div>
            <div className="flex items-center justify-between mt-2">
              <div className="answer-actions"><ReadAloud text={q.answer.answerKey} size="sm" /><CopyBtn text={q.answer.answerKey} /></div>
              <ReportFlag reportedContent={q.answer.answerKey} onGuestBlock={onGuestBlock} />
            </div>
            <ThumbsRating subject="science" chapterNumber={chapterNumber} exerciseLabel={exerciseLabel} itemKey={`${exerciseId}-${q.id}-key`} />
          </div>
        )}

        {showSol && (
          <div className="p-3 rounded-xl bg-[var(--surface-1)] border border-[var(--border)]">
            <p className="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-1.5">School Level Solution</p>
            <div className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1 rounded-md bg-blue-600/10 dark:bg-blue-400/15 text-blue-600 dark:text-blue-400 text-xs font-bold px-2 py-0.5">Ans.</span>
              <div className="flex-1 min-w-0 text-sm text-[var(--text-secondary)] leading-relaxed space-y-1" dangerouslySetInnerHTML={{ __html: q.answer.solution.replace(/\n\n/g, '<br/><br/>').replace(/\n/g, '<br/>') }} />
            </div>
            <div className="flex items-center justify-between mt-2">
              <div className="answer-actions"><ReadAloud text={q.answer.solution.replace(/<[^>]+>/g,'')} size="sm" /><CopyBtn text={q.answer.solution.replace(/<[^>]+>/g,'')} /></div>
              <ReportFlag reportedContent={q.answer.solution.replace(/<[^>]+>/g,'')} onGuestBlock={onGuestBlock} />
            </div>
            <ThumbsRating subject="science" chapterNumber={chapterNumber} exerciseLabel={exerciseLabel} itemKey={`${exerciseId}-${q.id}-solution`} />
          </div>
        )}

        {explainText && (
          <div className="p-3 rounded-xl bg-violet-50 dark:bg-violet-950/20 border border-violet-100 dark:border-violet-900/40">
            <p className="text-[10px] font-bold text-violet-600 uppercase tracking-wider mb-1.5 flex items-center gap-1"><Lightbulb size={10} /> Expert Explanation</p>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{explainText}</p>
            <div className="flex items-center justify-between mt-2">
              <div className="answer-actions"><ReadAloud text={explainText} size="sm" /><CopyBtn text={explainText} /></div>
              <ReportFlag reportedContent={explainText} onGuestBlock={onGuestBlock} />
            </div>
            <ThumbsRating subject="science" chapterNumber={chapterNumber} exerciseLabel={exerciseLabel} itemKey={`${exerciseId}-${q.id}-explain`} />
          </div>
        )}

        {simplifyText && (
          <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/40">
            <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider mb-1.5 flex items-center gap-1"><Baby size={10} /> Simplified (Age 5)</p>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{simplifyText}</p>
            <div className="flex items-center justify-between mt-2">
              <div className="answer-actions"><ReadAloud text={simplifyText} size="sm" /><CopyBtn text={simplifyText} /></div>
              <ReportFlag reportedContent={simplifyText} onGuestBlock={onGuestBlock} />
            </div>
            <ThumbsRating subject="science" chapterNumber={chapterNumber} exerciseLabel={exerciseLabel} itemKey={`${exerciseId}-${q.id}-simplify`} />
          </div>
        )}

        <AIFollowUp context={ctx} subject="science" chapterNumber={chapterNumber} exerciseLabel={exerciseLabel} itemKey={`${exerciseId}-${q.id}`} onGuestBlock={onGuestBlock} />
      </div>
    </div>
  );
}

interface PageProps { chapterCode: string; chapterSlug: string; }

export default function ScienceChapterPage({ chapterCode, chapterSlug }: PageProps) {
  const chapter = SCIENCE_CHAPTERS.find(c => c.slug === chapterSlug);

  const ppExercises = chapter ? chapter.exercises.filter(e => e.id.endsWith('.pp')) : [];
  const rrExercises = chapter ? chapter.exercises.filter(e => e.id.endsWith('.rr')) : [];
  const otherExercises = chapter ? chapter.exercises.filter(e => !e.id.endsWith('.pp') && !e.id.endsWith('.rr')) : [];
  const hasTabs = ppExercises.length > 0 && rrExercises.length > 0;
  const [activeTab, setActiveTab] = useState<'pp' | 'rr'>(ppExercises.length > 0 ? 'pp' : 'rr');
  useChapterTabSession<'pp' | 'rr'>({
    scope: 'science/exploration',
    code: chapterCode,
    slug: chapterSlug,
    tab: activeTab,
    setTab: setActiveTab,
    isTabValid: t => (t === 'pp' ? ppExercises : rrExercises).length > 0,
    defaultTab: ppExercises.length > 0 ? 'pp' : 'rr',
  });
  const [authModal, setAuthModal] = useState<'login' | 'signup' | null>(null);
  const activeExercises = hasTabs ? (activeTab === 'pp' ? ppExercises : rrExercises) : [...ppExercises, ...rrExercises];
  const visibleExercises = [...activeExercises, ...otherExercises];

  function downloadPDF() {
    if (!chapter) return;
    const html = `<html><head><title>${chapter.title} — Science Solutions</title>
    <style>body{font-family:Georgia,serif;max-width:720px;margin:0 auto;padding:24px;font-size:13px;line-height:1.8}
    h1{font-size:22px;border-bottom:2px solid #16a34a;padding-bottom:8px}h2{font-size:15px;color:#16a34a;margin-top:20px}
    .q{margin:14px 0;padding:12px;border-left:3px solid #16a34a;background:#f0fdf4;border-radius:0 8px 8px 0}
    .footer{position:fixed;bottom:0;left:0;right:0;background:#fff;padding:8px 24px;font-size:10px;color:#6b7280;border-top:1px solid #dde3f0;text-align:center}
    @media print{body{padding-bottom:40px}}</style></head><body>
    <h1>Chapter ${chapter.number}: ${chapter.title}</h1>
    <p style="color:#6b7280;font-size:12px;margin-bottom:20px">Class 9 Science (Exploration) · NCERT 2026 Revised Syllabus</p>
    ${chapter.exercises.map(ex => `<h2>${ex.title}</h2>${ex.questions.map(q => `
      <div class="q"><p><strong>Q${q.number}.</strong> ${q.text}</p>
      ${q.parts ? '<ol>' + q.parts.map(p => `<li>${p}</li>`).join('') + '</ol>' : ''}
      <p><strong>Answer:</strong> ${q.answer.answerKey}</p>
      <p><strong>Solution:</strong> ${q.answer.solution}</p></div>`).join('')}`).join('')}
    <div class="footer">SolveNCERT — Powered by NDe · formerly NOVEXA | solvencert · NCERT 2026 Revised Syllabus</div>
    </body></html>`;
    savePdf(html, `class-9-science-${chapter.code}-solutions.pdf`);
  }

  function downloadAnswerKeys() {
    if (!chapter) return;
    const html = `<html><head><title>${chapter.title} — Answer Keys Only</title>
    <style>body{font-family:Georgia,serif;max-width:720px;margin:0 auto;padding:24px;font-size:13px;line-height:1.8}
    h1{font-size:22px;border-bottom:2px solid #16a34a;padding-bottom:8px}h2{font-size:15px;color:#16a34a;margin-top:20px}
    .q{margin:10px 0;padding:10px;border-left:3px solid #16a34a;background:#f0fdf4;border-radius:0 8px 8px 0}
    .footer{position:fixed;bottom:0;left:0;right:0;background:#fff;padding:8px 24px;font-size:10px;color:#6b7280;border-top:1px solid #dde3f0;text-align:center}
    @media print{body{padding-bottom:40px}}</style></head><body>
    <h1>Chapter ${chapter.number}: ${chapter.title} — Answer Keys</h1>
    <p style="color:#6b7280;font-size:12px;margin-bottom:20px">Class 9 Science (Exploration) · Quick-reference answer keys only · NCERT 2026 Revised Syllabus</p>
    ${chapter.exercises.map(ex => `<h2>${ex.title}</h2>${ex.questions.map(q => `
      <div class="q"><p><strong>Q${q.number}.</strong> ${q.answer.answerKey}</p></div>`).join('')}`).join('')}
    <div class="footer">SolveNCERT — Powered by NDe · formerly NOVEXA | solvencert · NCERT 2026 Revised Syllabus</div>
    </body></html>`;
    savePdf(html, `class-9-science-${chapter.code}-answer-keys.pdf`);
  }

  if (!chapter) {
    return <Layout title="Chapter Not Found | SolveNCERT" description="The requested chapter could not be found. Browse all NCERT solutions for Class 9."><div className="text-center py-20"><p className="text-[var(--text-muted)]">Chapter not found.</p><Link href="/class-9/science/exploration" className="btn-primary mt-4 inline-flex">Browse Science</Link></div></Layout>;
  }

  return (
    <Layout
      title={`${chapter.title} — ${chapter.code.toUpperCase()} | Class 9 Science NCERT Solutions`}
      description={`NCERT Solutions for Class 9 Science Chapter ${chapter.number} (${chapter.code.toUpperCase()}): ${chapter.title}. All questions answered step-by-step. CBSE 2026 Revised Syllabus (Exploration).`}
      canonical={`/class-9/science/exploration/${chapterCode}/${chapterSlug}`}
      ogType="article"
      bgImage={getSubjectBackground('science', chapter.number)}
      keywords={`${chapter.code.toUpperCase()}, ${chapter.code}, class 9 science NCERT solutions, Exploration chapter ${chapter.number}, ${chapter.title} solutions, CBSE 2026 science`}
      schema={[
        {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home',            item: 'https://solvencert-novexa.vercel.app' },
            { '@type': 'ListItem', position: 2, name: 'NCERT Solutions', item: 'https://solvencert-novexa.vercel.app/answers' },
            { '@type': 'ListItem', position: 3, name: 'Class 9 Science', item: 'https://solvencert-novexa.vercel.app/class-9/science/exploration' },
            { '@type': 'ListItem', position: 4, name: chapter.title,     item: `https://solvencert-novexa.vercel.app/class-9/science/exploration/${chapterCode}/${chapterSlug}` },
          ],
        },
        {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: `Chapter ${chapter.number}: ${chapter.title} (${chapter.code.toUpperCase()})`,
          description: `NCERT Solutions for Class 9 Science Chapter ${chapter.number} (${chapter.code.toUpperCase()}): ${chapter.title}. CBSE 2026 Revised Syllabus.`,
          keywords: `${chapter.code.toUpperCase()}, ${chapter.code}, class 9 science, NCERT solutions, Exploration, chapter ${chapter.number}`,
          author: { '@type': 'Organization', name: 'SolveNCERT by NOVEXA · Now NDe · NoirDemons', alternateName: ['NDe', 'NDE', 'nde', 'NoirDemons'] },
          publisher: { '@type': 'Organization', name: 'SolveNCERT by NOVEXA · Now NDe · NoirDemons', alternateName: ['NDe', 'NDE', 'nde', 'NoirDemons'], url: 'https://solvencert-novexa.vercel.app' },
          url: `https://solvencert-novexa.vercel.app/class-9/science/exploration/${chapterCode}/${chapterSlug}`,
          identifier: chapter.code.toUpperCase(),
          about: { '@type': 'Chapter', name: chapter.title, position: chapter.number, code: chapter.code.toUpperCase() },
          isPartOf: { '@type': 'Book', name: 'Exploration', isbn: 'NCERT Class 9 Science' },
        },
      ]}
    >
      <div className="sticky top-14 z-30 bg-[var(--surface-0)]/95 backdrop-blur-md border-b border-[var(--border)]">
        <div className="max-w-screen-lg mx-auto px-4 md:px-6 py-2.5 flex items-center gap-1.5 text-xs text-[var(--text-muted)] overflow-x-auto scrollbar-hide whitespace-nowrap">
          <Link href="/" className="hover:text-blue-500 flex-shrink-0 flex items-center gap-1"><Home size={11} />Home</Link>
          <ChevronRight size={10} className="flex-shrink-0" /><Link href="/answers" className="hover:text-blue-500 flex-shrink-0">Solutions</Link>
          <ChevronRight size={10} className="flex-shrink-0" /><Link href="/class-9/science/exploration" className="hover:text-blue-500 flex-shrink-0">Science</Link>
          <ChevronRight size={10} className="flex-shrink-0" /><span className="text-[var(--text-secondary)] font-semibold flex-shrink-0">Ch {chapter.number}</span>
        </div>
      </div>

      <div className="max-w-screen-lg mx-auto px-4 md:px-6 py-6">
        <div className="flex gap-7">
          <aside className="hidden lg:block w-52 flex-shrink-0">
            <div className="sticky top-28 card p-4">
              <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)] mb-3">Chapters</p>
              <nav className="space-y-0.5 max-h-[65vh] overflow-y-auto scrollbar-hide">
                {SCIENCE_CHAPTERS.map(ch => (
                  <Link key={ch.slug} href={`/class-9/science/exploration/${ch.code}/${ch.slug}`}
                    className={cn('flex items-center gap-2 px-2.5 py-2 rounded-lg text-xs transition-colors',
                      ch.slug === chapterSlug ? 'bg-green-50 dark:bg-green-950/40 text-green-600 dark:text-green-400 font-semibold' : 'text-[var(--text-muted)] hover:bg-[var(--surface-1)]')}>
                    <span className="w-5 h-5 rounded bg-[var(--surface-2)] text-[10px] font-bold flex items-center justify-center flex-shrink-0">{ch.number}</span>
                    <span className="truncate">{ch.title}</span>
                  </Link>
                ))}
              </nav>
            </div>
          </aside>

          <main className="flex-1 min-w-0">
            <div className="mb-5">
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                <span className="px-2 py-0.5 rounded-md bg-green-100 dark:bg-green-900/40 text-green-600 dark:text-green-400 text-xs font-bold">Class 9 · Science</span>
                <span className="badge-2026">NCERT 2026 Revised Syllabus</span>
              </div>
              <h1 className="text-xl md:text-2xl font-display font-bold text-[var(--text-primary)]">
                Chapter {chapter.number}: {chapter.title} <span className="text-base md:text-lg font-normal text-[var(--text-muted)]">({chapter.code.toUpperCase()})</span>
              </h1>
              <p className="text-sm text-[var(--text-muted)] mt-1">Exploration · <MathRenderer text={chapter.description} /></p>
              <p className="text-xs text-[var(--text-muted)] mt-1">Chapter code: <span className="font-mono font-semibold text-[var(--text-secondary)]">{chapter.code}</span> · Book: Exploration · Class 9 Science</p>
              <p className="text-sm text-[var(--text-secondary)] mt-3 leading-relaxed">Find complete NCERT solutions for Class 9 Science, Exploration Chapter {chapter.number}. Every question has a clear, step-by-step answer for chapter code {chapter.code.toUpperCase()}.</p>
            </div>

            <div className="mb-5 flex items-center gap-2 flex-wrap">
              {hasTabs && (
                <>
                  <button onClick={() => setActiveTab('pp')} className={cn('method-tab science-tab text-xs shadow-sm hover:shadow-md hover:-translate-y-px', activeTab === 'pp' ? 'method-tab-active' : 'method-tab-inactive')}>Pause &amp; Ponder</button>
                  <button onClick={() => setActiveTab('rr')} className={cn('method-tab science-tab text-xs shadow-sm hover:shadow-md hover:-translate-y-px', activeTab === 'rr' ? 'method-tab-active' : 'method-tab-inactive')}>Revise, Reflect, Refine</button>
                </>
              )}
              <div className="ml-auto flex items-center gap-2">
                <button onClick={downloadAnswerKeys} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--surface-2)] hover:bg-[var(--surface-3)] text-[var(--text-secondary)] text-xs font-semibold border border-[var(--border)]">
                  <Download size={13} /> Download Answer Keys
                </button>
                <button onClick={downloadPDF} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--surface-2)] hover:bg-[var(--surface-3)] text-[var(--text-secondary)] text-xs font-semibold border border-[var(--border)]">
                  <Download size={13} /> Download Solutions PDF
                </button>
              </div>
            </div>

            {visibleExercises.map(exercise => (
              <div key={exercise.id} className="mb-8">
                <h2 className="text-base font-display font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                  <BookOpen size={15} className="text-green-500" />
                  {exercise.title}
                  <span className="text-xs font-normal text-[var(--text-muted)]">({exercise.questions.length} questions)</span>
                </h2>
                {exercise.questions.map(q => (
                  <QuestionCard key={q.id} q={q} exerciseId={exercise.id}
                    chapterCode={chapter.code} chapterSlug={chapter.slug} chapterTitle={chapter.title}
                    chapterNumber={chapter.number} exerciseLabel={exercise.title}
                    onGuestBlock={() => setAuthModal('signup')} />
                ))}
              </div>
            ))}

            <div className="lg:hidden mt-8 card p-4">
              <p className="text-xs font-bold uppercase tracking-widest text-[var(--text-muted)] mb-3">Other Chapters</p>
              <div className="flex flex-wrap gap-2">
                {SCIENCE_CHAPTERS.map(ch => (
                  <Link key={ch.slug} href={`/class-9/science/exploration/${ch.code}/${ch.slug}`}
                    className={cn('px-3 py-1.5 rounded-lg text-xs font-medium transition-colors',
                      ch.slug === chapterSlug ? 'bg-green-600 text-white' : 'bg-[var(--surface-2)] text-[var(--text-secondary)] hover:bg-[var(--surface-3)]')}>
                    {ch.number}
                  </Link>
                ))}
              </div>
            </div>
          </main>

          <QuestionNav
            questions={visibleExercises.flatMap(ex => ex.questions.map(q => ({ id: `${ex.id}-${q.id}`, number: q.number, section: ex.title })))}
            label={hasTabs ? (activeTab === 'pp' ? 'Pause & Ponder' : 'Revise/Reflect') : 'Questions'}
          />
        </div>
      </div>
      <BackToTop />
      {authModal && <AuthModal mode={authModal} onClose={() => setAuthModal(null)} onSwitch={m => setAuthModal(m)} />}
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: SCIENCE_CHAPTERS.map(ch => ({ params: { chapterCode: ch.code, chapterSlug: ch.slug } })),
  fallback: 'blocking'
});
export const getStaticProps: GetStaticProps = async ({ params }) => ({ props: params || {}, revalidate: 3600 });
