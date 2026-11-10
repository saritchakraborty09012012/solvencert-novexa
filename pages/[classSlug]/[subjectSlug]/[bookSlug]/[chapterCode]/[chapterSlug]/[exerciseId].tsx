import React, { useState, useEffect, useRef } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import { ChevronRight, BookOpen, Home, Download } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import BetaBadge from '@/components/features/BetaBadge';
import BackToTop from '@/components/features/BackToTop';
import QuestionNav from '@/components/features/QuestionNav';
import AuthModal from '@/components/auth/AuthModal';
import { CLASS_9_SUBJECTS, getSubject } from '@/lib/content';
import { useAuthStore } from '@/store/authStore';
import { hasReachedGuestLimit, incrementSolutionView } from '@/lib/guestLimits';
import { cn, getSubjectBackground } from '@/utils/helpers';
import { htmlToPdf } from '@/lib/pdf';
import { QuestionCard } from '../[chapterSlug]';

interface PageProps { classSlug: string; subjectSlug: string; bookSlug: string; chapterCode: string; chapterSlug: string; exerciseId: string; }

function sstBranch(chNumber: number, bookSlug?: string): string | null {
  if (bookSlug === 'sst-part-2') {
    if (chNumber <= 2) return 'Geography';
    if (chNumber === 3) return 'History';
    if (chNumber === 4) return 'Political Science';
    if (chNumber <= 6) return 'Economics';
    return null;
  }
  if (chNumber === 1) return 'General';
  if (chNumber <= 3) return 'Geography';
  if (chNumber <= 5) return 'History';
  if (chNumber <= 7) return 'Political Science';
  if (chNumber <= 9) return 'Economics';
  return null;
}

async function savePdf(html: string, filename: string) {
  await import('jspdf');
  htmlToPdf(html, filename);
}

/**
 * Single-exercise page for generic subjects (SST, Hindi, Sanskrit, IT, Arts,
 * Advanced): /{classSlug}/{subjectSlug}/{bookSlug}/{chapterCode}/{chapterSlug}/{exerciseId}
 * Renders only the requested exercise so every exercise/section is its own
 * crawlable, linkable page. The chapter page itself is untouched.
 */
export default function ExercisePage({ classSlug, subjectSlug, bookSlug, chapterCode, chapterSlug, exerciseId }: PageProps) {
  const subject = getSubject(subjectSlug, bookSlug);
  const chapter = subject?.chapters.find(c => c.slug === chapterSlug);
  const exercise = chapter?.exercises.find(e => e.id === exerciseId);
  const isMaths = subjectSlug === 'maths' || subjectSlug === 'advanced-maths';
  const [guestBlocked, setGuestBlocked] = useState(false);
  const [authModal, setAuthModal] = useState<'login' | 'signup' | null>(null);
  const { isGuest } = useAuthStore();
  const viewCounted = useRef(false);

  useEffect(() => {
    if (isGuest && !viewCounted.current) {
      viewCounted.current = true;
      incrementSolutionView();
      setGuestBlocked(hasReachedGuestLimit());
    }
    if (!isGuest) {
      setGuestBlocked(false);
    }
  }, [isGuest]);

  function downloadPDF() {
    if (!subject || !chapter || !exercise) return;
    const html = `<html><head><title>Ch${chapter.number} ${chapter.title} — ${exercise.title} Solutions</title>
    <style>body{font-family:Georgia,serif;max-width:720px;margin:0 auto;padding:24px;font-size:13px;line-height:1.8}
    h1{font-size:20px;border-bottom:2px solid #1d4ed8;padding-bottom:8px}h2{font-size:15px;color:#1d4ed8;margin-top:20px}
    .q{margin:14px 0;padding:12px;border-left:3px solid #1d4ed8;background:#f7f8fc;border-radius:0 8px 8px 0}
    .footer{position:fixed;bottom:0;left:0;right:0;background:#fff;padding:8px 24px;font-size:10px;color:#6b7280;border-top:1px solid #dde3f0;text-align:center}
    @media print{body{padding-bottom:40px}}</style></head><body>
    <h1>Chapter ${chapter.number}: ${chapter.title} — ${exercise.title}</h1>
    <p style="color:#6b7280;font-size:12px;margin-bottom:20px">Class 9 ${subject.name} · ${subject.book} · NCERT 2026 Revised Syllabus</p>
    <h2>${exercise.title}</h2>${exercise.questions.map(q=>`<div class="q"><p><strong>Q${q.number}.</strong> ${q.text.replace(/\$[^$]+\$/g,'[math]')}</p>${q.parts?'<ol>'+q.parts.map(p=>`<li>${p}</li>`).join('')+'</ol>':''}<p><strong>Answer Key:</strong> ${q.answer.answerKey.replace(/\$[^$]+\$/g,'[math]').replace(/\*\*/g,'')}</p><p><strong>Solution:</strong> ${q.answer.schoolMethod.replace(/\$[^$]+\$/g,'[math]').replace(/\*\*/g,'')}</p></div>`).join('')}
    <div class="footer">SolveNCERT — Powered by NDe · formerly NOVEXA | solvencert · NCERT 2026 Revised Syllabus</div></body></html>`;
    savePdf(html, `class-9-${subject.slug}-${chapter.code}-${exercise.id}-solutions.pdf`);
  }

  if (!subject || !chapter || !exercise) {
    return (
      <Layout title="Exercise Not Found | SolveNCERT" description="The requested exercise could not be found. Browse all NCERT solutions for Class 9.">
        <div className="max-w-screen-md mx-auto px-6 py-20 text-center">
          <p className="text-[var(--text-muted)]">Exercise not found.</p>
          <Link href="/answers" className="btn-primary mt-4 inline-flex">Browse Answers</Link>
        </div>
      </Layout>
    );
  }

  const BASE = 'https://solvencert-novexa.vercel.app';
  const chapterUrl = `${BASE}/${classSlug}/${subjectSlug}/${bookSlug}/${chapterCode}/${chapterSlug}`;
  const canonical = `/${classSlug}/${subjectSlug}/${bookSlug}/${chapterCode}/${chapterSlug}/${exerciseId}`;
  const chapterPath = `/${classSlug}/${subjectSlug}/${bookSlug}/${chapterCode}/${chapterSlug}`;
  const hasRealCode = subject.id !== 'it-part-a' && subject.id !== 'advanced-maths' && subject.id !== 'advanced-science' && subject.id !== 'hindi-reva' && subject.id !== 'sanskrit-reva';
  const subjectBg = getSubjectBackground(subject.id, chapter.number);

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
      { '@type': 'ListItem', position: 2, name: 'NCERT Solutions', item: `${BASE}/answers` },
      { '@type': 'ListItem', position: 3, name: `Class 9 ${subject.name}`, item: `${BASE}/class-9/${subjectSlug}/${bookSlug}` },
      { '@type': 'ListItem', position: 4, name: chapter.title, item: chapterUrl },
      { '@type': 'ListItem', position: 5, name: exercise.title, item: `${BASE}${canonical}` },
    ],
  };

  return (
    <Layout
      title={`${exercise.title} — Chapter ${chapter.number}: ${chapter.title} | Class 9 ${subject.name} NCERT Solutions`}
      description={`NCERT Solutions for Class 9 ${subject.name} Chapter ${chapter.number}${hasRealCode ? ` (${chapter.code.toUpperCase()})` : ''}: ${exercise.title} — ${exercise.questions.length} questions with step-by-step answers. NCERT 2026 Revised Syllabus (${subject.book}).`}
      canonical={canonical}
      ogType="article"
      schema={[breadcrumbSchema]}
      bgImage={subjectBg}
      keywords={`${chapter.code.toUpperCase()}, ${chapter.code}, class 9 ${subject.name} NCERT solutions, ${subject.book} chapter ${chapter.number}, ${exercise.title}, CBSE 2026`}
    >
      <div className="sticky top-14 z-30 bg-[var(--surface-0)]/95 backdrop-blur-md border-b border-[var(--border)]">
        <div className="max-w-screen-lg mx-auto px-4 md:px-6 py-2.5 flex items-center gap-1.5 text-xs text-[var(--text-muted)] overflow-x-auto scrollbar-hide whitespace-nowrap">
          <Link href="/" className="hover:text-blue-500 flex items-center gap-1 flex-shrink-0"><Home size={11} />Home</Link>
          <ChevronRight size={10} className="flex-shrink-0" />
          <Link href="/answers" className="hover:text-blue-500 flex-shrink-0">Solutions</Link>
          <ChevronRight size={10} className="flex-shrink-0" />
          <Link href={`/${classSlug}/${subjectSlug}`} className="hover:text-blue-500 flex-shrink-0 capitalize">{subject.name}</Link>
          <ChevronRight size={10} className="flex-shrink-0" />
          <Link href={`/${classSlug}/${subjectSlug}/${bookSlug}/${chapterCode}/${chapterSlug}`} className="hover:text-blue-500 flex-shrink-0">Ch {chapter.number}</Link>
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
                {subject.chapters.map((ch, i) => {
                  const branch = subjectSlug === 'sst' ? sstBranch(ch.number, bookSlug) : null;
                  const prevBranch = subjectSlug === 'sst' && i > 0 ? sstBranch(subject.chapters[i-1].number, bookSlug) : null;
                  return (
                    <React.Fragment key={ch.slug}>
                      {branch && branch !== prevBranch && (
                        <p className="text-[9px] font-bold uppercase tracking-widest text-blue-500/80 dark:text-blue-400/70 mt-2 first:mt-0 px-2.5 pt-1">{branch}</p>
                      )}
                      <Link href={`/${classSlug}/${subjectSlug}/${bookSlug}/${ch.code}/${ch.slug}`}
                        className={cn('flex items-center gap-2 px-2.5 py-2 rounded-lg text-xs transition-colors',
                          ch.slug===chapterSlug ? 'bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 font-semibold' : 'text-[var(--text-muted)] hover:bg-[var(--surface-1)]')}>
                        <span className="w-5 h-5 rounded bg-[var(--surface-2)] text-[10px] font-bold flex items-center justify-center flex-shrink-0">{ch.number}</span>
                        <span className="truncate leading-tight flex-1 min-w-0">{ch.title}</span>
                        {subject.beta && (
                          <span className="px-1.5 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/40 text-amber-600 dark:text-amber-400 text-[8px] font-bold uppercase tracking-[0.12em] flex-shrink-0">Beta</span>
                        )}
                      </Link>
                    </React.Fragment>
                  );
                })}
              </nav>
              <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)] mt-5 mb-2">This chapter</p>
              <nav className="space-y-0.5">
                {chapter.exercises.map(ex => (
                  <Link key={ex.id} href={`/${classSlug}/${subjectSlug}/${bookSlug}/${chapterCode}/${chapterSlug}/${ex.id}`}
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
                <span className="px-2.5 py-1 rounded-full bg-blue-100 dark:bg-blue-950/30 text-blue-700 dark:text-blue-300 text-xs font-bold">Class 9 · {subject.name}</span>
                <span className="badge-2026">NCERT 2026 Revised Syllabus</span>
                {subject.beta && <BetaBadge />}
              </div>
              <h1 className="text-2xl md:text-3xl font-display font-bold text-[var(--text-primary)] leading-tight">Chapter {chapter.number}: {chapter.title} {hasRealCode && <span className="text-lg md:text-xl font-normal text-[var(--text-muted)]">({chapter.code.toUpperCase()})</span>}</h1>
              <p className="text-sm text-[var(--text-secondary)] mt-3 leading-relaxed">{exercise.title} — {exercise.questions.length} questions with step-by-step answers.</p>
              <div className="flex items-center gap-2 flex-wrap justify-end mt-4">
                <button onClick={downloadPDF} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--surface-2)] hover:bg-[var(--surface-3)] text-[var(--text-secondary)] text-xs font-semibold border border-[var(--border)]">
                  <Download size={13} /> Download Solutions PDF
                </button>
              </div>
            </div>

            {/* Exercise tabs — same tabs as the chapter page, each one its own page */}
            {chapter.exercises.length > 1 && (
              <div className="mb-3">
                <span className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider">Jump to:</span>
                <div className="section-nav mt-2">
                  <Link href={chapterPath} className="method-tab section-nav-button text-xs method-tab-inactive">All Exercises</Link>
                  {chapter.exercises.map(ex => (
                    <Link key={ex.id} href={`${chapterPath}/${ex.id}`}
                      className={cn('method-tab section-nav-button text-xs', ex.id === exerciseId ? 'method-tab-active' : 'method-tab-inactive')}>{ex.title}</Link>
                  ))}
                </div>
              </div>
            )}

            <div className="mb-8" id={exercise.id}>
              <h2 className="text-base font-display font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                <BookOpen size={15} className="text-blue-500" />
                {exercise.title}
                <span className="text-xs font-normal text-[var(--text-muted)]">({exercise.questions.length} questions)</span>
              </h2>
              {exercise.questions.map(q=>(
                <QuestionCard key={q.id} question={q} exerciseId={exercise.id} isMaths={isMaths} subject={subject.name}
                  subjectSlug={subject.slug} chapterCode={chapter.code} chapterSlug={chapter.slug} chapterTitle={chapter.title}
                  chapterNumber={chapter.number} exerciseLabel={exercise.title}
                  guestBlocked={guestBlocked && isGuest}
                  onUnlock={()=>setAuthModal('signup')}/>
              ))}
            </div>

            {/* Mobile chapter nav */}
            <div className="lg:hidden mt-8 card p-4">
              <p className="text-xs font-bold uppercase tracking-widest text-[var(--text-muted)] mb-3">Other Chapters</p>
              <div className="flex flex-wrap gap-2">
                {subject.chapters.map(ch=>(
                  <Link key={ch.slug} href={`/${classSlug}/${subjectSlug}/${bookSlug}/${ch.code}/${ch.slug}`}
                    className={cn('px-3 py-1.5 rounded-lg text-xs font-medium transition-colors',
                      ch.slug===chapterSlug?'bg-blue-600 text-white':'bg-[var(--surface-2)] text-[var(--text-secondary)] hover:bg-[var(--surface-3)]')}>
                    {ch.number}
                  </Link>
                ))}
              </div>
            </div>
          </main>

          <QuestionNav
            questions={exercise.questions.map(q => ({ id: `${exercise.id}-${q.id}`, number: q.number, section: exercise.title }))}
            label={exercise.title}
          />
        </div>
      </div>

      <BackToTop />
      {authModal && <AuthModal mode={authModal} onClose={()=>setAuthModal(null)} onSwitch={m=>setAuthModal(m)}/>}
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [],
  fallback: 'blocking'
});
export const getStaticProps: GetStaticProps = async ({ params }) => ({ props: params || {}, revalidate: 3600 });
