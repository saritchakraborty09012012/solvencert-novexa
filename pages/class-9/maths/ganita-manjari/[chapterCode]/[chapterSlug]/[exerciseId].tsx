import React, { useState, useRef } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import { ChevronRight, BookOpen, Home, Download } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import BackToTop from '@/components/features/BackToTop';
import BetaBadge from '@/components/features/BetaBadge';
import QuestionNav from '@/components/features/QuestionNav';
import AuthModal from '@/components/auth/AuthModal';
import { MATHS_SOURCE_CHAPTERS } from '@/lib/content-maths-source';
import { MATHS_PART2_CHAPTERS } from '@/lib/content-maths-part2';
import { useAuthStore } from '@/store/authStore';
import { hasReachedGuestLimit, incrementSolutionView } from '@/lib/guestLimits';
import { cn, getSubjectBackground } from '@/utils/helpers';
import { htmlToPdf } from '@/lib/pdf';
import {
  ALL_GM_CHAPTERS,
  ExerciseQuestions,
  PART2_FIRST,
  part2ToGm,
  type GmChapter,
  type GmExercise,
  type GmQuestion,
} from '../[chapterSlug]';

interface PageProps { chapterCode: string; chapterSlug: string; exerciseId: string; }

/**
 * Single-exercise page for Ganita Manjari: /{chapterCode}/{chapterSlug}/{exerciseId}
 * Renders only the requested exercise (plus chapter sidebar + intro) so every
 * exercise is its own crawlable, linkable page. The chapter page itself is
 * untouched and keeps its all-exercises view.
 */
export default function MathsExercisePage({ chapterCode, chapterSlug, exerciseId }: PageProps) {
  const srcChapter = MATHS_SOURCE_CHAPTERS.find(c => c.code === chapterCode && c.slug === chapterSlug);
  const p2Source = srcChapter ? undefined : MATHS_PART2_CHAPTERS.find(c => c.code === chapterCode && c.slug === chapterSlug);
  const chapter: GmChapter | undefined = srcChapter
    ? { code: srcChapter.code, slug: srcChapter.slug, title: srcChapter.title, number: srcChapter.number, exercises: srcChapter.exercises as unknown as GmExercise[] }
    : (p2Source ? part2ToGm(p2Source) : undefined);
  const bookLabel = chapter ? (chapter.number >= PART2_FIRST ? 'Part II' : 'Part I') : 'Part I';
  const exercise = chapter?.exercises.find(e => e.id === exerciseId);

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

  async function downloadExercisePDF() {
    if (!chapter || !exercise) return;
    const { jsPDF } = await import('jspdf');
    const ex = exercise;
    const pdf = new jsPDF({ unit: 'pt', format: 'a4' });
    let y = 48;
    const write = (line: string) => { if (y > 790) { pdf.addPage(); y = 48; } pdf.text(line, 48, y); y += 16; };
    const writeWrapped = (text: string, size: number) => {
      pdf.setFont('helvetica', 'normal'); pdf.setFontSize(size);
      pdf.splitTextToSize(text, 510).forEach((l: string) => write(l));
      pdf.setFont('helvetica', 'normal'); pdf.setFontSize(10);
    };
    pdf.setFontSize(16); pdf.text(`Chapter ${chapter.number}: ${chapter.title}`, 48, y); y += 20;
    pdf.setFontSize(10);
    write(`Class 9 Maths · Ganita Manjari ${bookLabel} · NCERT 2026 Revised Syllabus`);
    y += 10;
    pdf.setFontSize(13); write(ex.title); pdf.setFontSize(10); y += 6;
    for (const q of ex.questions) {
      const gm = q as GmQuestion;
      pdf.setFont('helvetica', 'bold');
      write(`Q${gm.number.replace(/\u2605/g, '')}.`);
      pdf.setFont('helvetica', 'normal');
      writeWrapped((gm.md ? gm.md.text : gm.plainText).replace(/\$/g, ''), 10);
      writeWrapped(`Answer Key: ${gm.answerKey}`, 10);
      if (gm.md) {
        pdf.setFont('helvetica', 'italic');
        writeWrapped(`Solution: ${gm.md.school}`, 10);
        pdf.setFont('helvetica', 'normal');
      }
      y += 6;
    }
    pdf.save(`class-9-maths-${chapter.code}-${exercise.id}-solutions.pdf`);
  }

  if (!chapter || !exercise) {
    return (
      <Layout title="Exercise Not Found | SolveNCERT" description="The requested exercise could not be found. Browse all NCERT solutions for Class 9.">
        <div className="max-w-screen-md mx-auto px-6 py-20 text-center">
          <p className="text-[var(--text-muted)]">Exercise not found.</p>
          <Link href="/class-9/maths/ganita-manjari" className="btn-primary mt-4 inline-flex">Browse Maths</Link>
        </div>
      </Layout>
    );
  }

  const chapterUrl = `/class-9/maths/ganita-manjari/${chapterCode}/${chapterSlug}`;
  const canonical = `${chapterUrl}/${exerciseId}`;

  return (
    <Layout
      title={`${exercise.title} — Chapter ${chapter.number}: ${chapter.title} | Class 9 Maths NCERT Solutions`}
      description={`NCERT Solutions for Class 9 Maths, Ganita Manjari ${bookLabel} Chapter ${chapter.number} (${chapter.code.toUpperCase()}), ${exercise.title} — ${exercise.questions.length} questions with step-by-step notebook-style answers. NCERT 2026 Revised Syllabus.`}
      canonical={canonical}
      ogType="article"
      bgImage={getSubjectBackground('maths', chapter.number)}
      keywords={`${chapter.code.toUpperCase()}, class 9 maths NCERT solutions, Ganita Manjari chapter ${chapter.number}, ${exercise.title}, CBSE 2026 maths`}
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
          <Link href={chapterUrl} className="hover:text-blue-500 flex-shrink-0">Ch {chapter.number}</Link>
          <ChevronRight size={10} className="flex-shrink-0" />
          <span className="text-[var(--text-secondary)] font-semibold flex-shrink-0">{exercise.title}</span>
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
                      <span className="truncate leading-tight flex-1 min-w-0">{ch.title}</span>
                      {ch.part === 2 && (
                        <span className="px-1.5 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/40 text-amber-600 dark:text-amber-400 text-[8px] font-bold uppercase tracking-[0.12em] flex-shrink-0">Beta</span>
                      )}
                    </Link>
                  </React.Fragment>
                ))}
              </nav>
              <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)] mt-5 mb-2">This chapter</p>
              <nav className="space-y-0.5">
                {chapter.exercises.map(ex => (
                  <Link key={ex.id} href={`${chapterUrl}/${ex.id}`}
                    className={cn('flex items-center gap-2 px-2.5 py-2 rounded-lg text-xs transition-colors',
                      ex.id === exerciseId ? 'bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 font-semibold' : 'text-[var(--text-muted)] hover:bg-[var(--surface-1)]')}>
                    <span className="truncate leading-tight">{ex.title}</span>
                  </Link>
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
                {chapter.number >= PART2_FIRST && <BetaBadge />}
              </div>
              <h1 className="text-2xl md:text-3xl font-display font-bold text-[var(--text-primary)] leading-tight">Chapter {chapter.number}: {chapter.title} <span className="text-lg md:text-xl font-normal text-[var(--text-muted)]">({chapter.code.toUpperCase()})</span></h1>
              <p className="text-sm text-[var(--text-secondary)] mt-3 leading-relaxed">{exercise.title} — {exercise.questions.length} questions with step-by-step notebook-style answers.</p>
              <div className="flex items-center gap-2 flex-wrap justify-end mt-4">
                <button onClick={downloadExercisePDF} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--surface-2)] hover:bg-[var(--surface-3)] text-[var(--text-secondary)] text-xs font-semibold border border-[var(--border)]">
                  <Download size={13} /> Download Solutions PDF
                </button>
              </div>
            </div>

            <div className="mb-8">
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

            {/* Mobile chapter nav */}
            <div className="lg:hidden mt-8 card p-4">
              <p className="text-xs font-bold uppercase tracking-widest text-[var(--text-muted)] mb-3">Other Chapters</p>
              <div className="flex flex-wrap gap-2 items-center">
                {ALL_GM_CHAPTERS.map(ch => (
                  <React.Fragment key={ch.code}>
                    {ch.number === PART2_FIRST && (
                      <span className="flex items-center gap-1.5 w-full mt-1">
                        <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-blue-500/90">Part II</span>
                        <span className="px-1.5 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/40 text-amber-600 dark:text-amber-400 text-[8px] font-bold uppercase tracking-[0.12em]">Beta</span>
                      </span>
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
            questions={exercise.questions.map(q => ({ id: `${exercise.id}-${q.id}`, number: q.number.replace(/\u2605/g, ''), section: exercise.title, page: q.page }))}
            label={exercise.title}
          />
        </div>
      </div>

      <BackToTop />
      {authModal && <AuthModal mode={authModal} onClose={() => setAuthModal(null)} onSwitch={m => setAuthModal(m)} />}
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [],
  fallback: 'blocking'
});

export const getStaticProps: GetStaticProps = async ({ params }) => ({
  props: params || {}, revalidate: 3600
});
