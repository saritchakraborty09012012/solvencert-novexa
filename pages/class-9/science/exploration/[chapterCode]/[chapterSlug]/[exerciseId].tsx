import React, { useState } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import { ChevronRight, BookOpen, Home, Download } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import BackToTop from '@/components/features/BackToTop';
import MathRenderer from '@/components/features/MathRenderer';
import QuestionNav from '@/components/features/QuestionNav';
import AuthModal from '@/components/auth/AuthModal';
import { SCIENCE_CHAPTERS } from '@/lib/content-science';
import { cn, getSubjectBackground } from '@/utils/helpers';
import { htmlToPdf } from '@/lib/pdf';
import { QuestionCard } from '../[chapterSlug]';

interface PageProps { chapterCode: string; chapterSlug: string; exerciseId: string; }

/**
 * Single-exercise page for Science (Exploration): /{chapterCode}/{chapterSlug}/{exerciseId}
 * Renders only the requested exercise so every exercise is its own crawlable,
 * linkable page. The chapter page itself is untouched.
 */
export default function ScienceExercisePage({ chapterCode, chapterSlug, exerciseId }: PageProps) {
  const chapter = SCIENCE_CHAPTERS.find(c => c.slug === chapterSlug);
  const exercise = chapter?.exercises.find(e => e.id === exerciseId);
  const [authModal, setAuthModal] = useState<'login' | 'signup' | null>(null);

  function downloadPDF() {
    if (!chapter || !exercise) return;
    const html = `<html><head><title>${exercise.title} — Science Solutions</title>
    <style>body{font-family:Georgia,serif;max-width:720px;margin:0 auto;padding:24px;font-size:13px;line-height:1.8}
    h1{font-size:22px;border-bottom:2px solid #16a34a;padding-bottom:8px}h2{font-size:15px;color:#16a34a;margin-top:20px}
    .q{margin:14px 0;padding:12px;border-left:3px solid #16a34a;background:#f0fdf4;border-radius:0 8px 8px 0}
    .footer{position:fixed;bottom:0;left:0;right:0;background:#fff;padding:8px 24px;font-size:10px;color:#6b7280;border-top:1px solid #dde3f0;text-align:center}
    @media print{body{padding-bottom:40px}}</style></head><body>
    <h1>Chapter ${chapter.number}: ${chapter.title} — ${exercise.title}</h1>
    <p style="color:#6b7280;font-size:12px;margin-bottom:20px">Class 9 Science (Exploration) · NCERT 2026 Revised Syllabus</p>
    <h2>${exercise.title}</h2>${exercise.questions.map(q => `
      <div class="q"><p><strong>Q${q.number}.</strong> ${q.text}</p>
      ${q.parts ? '<ol>' + q.parts.map(p => `<li>${p}</li>`).join('') + '</ol>' : ''}
      <p><strong>Answer:</strong> ${q.answer.answerKey}</p>
      <p><strong>Solution:</strong> ${q.answer.solution}</p></div>`).join('')}
    <div class="footer">SolveNCERT — Powered by NDe · formerly NOVEXA | solvencert · NCERT 2026 Revised Syllabus</div>
    </body></html>`;
    htmlToPdf(html, `class-9-science-${chapter.code}-${exercise.id}-solutions.pdf`);
  }

  if (!chapter || !exercise) {
    return <Layout title="Exercise Not Found | SolveNCERT" description="The requested exercise could not be found. Browse all NCERT solutions for Class 9."><div className="text-center py-20"><p className="text-[var(--text-muted)]">Exercise not found.</p><Link href="/class-9/science/exploration" className="btn-primary mt-4 inline-flex">Browse Science</Link></div></Layout>;
  }

  const chapterUrl = `/class-9/science/exploration/${chapterCode}/${chapterSlug}`;
  const canonical = `${chapterUrl}/${exerciseId}`;

  return (
    <Layout
      title={`${exercise.title} — Chapter ${chapter.number}: ${chapter.title} | Class 9 Science NCERT Solutions`}
      description={`NCERT Solutions for Class 9 Science, Exploration Chapter ${chapter.number} (${chapter.code.toUpperCase()}), ${exercise.title} — ${exercise.questions.length} questions answered step-by-step. CBSE 2026 Revised Syllabus.`}
      canonical={canonical}
      ogType="article"
      bgImage={getSubjectBackground('science', chapter.number)}
      keywords={`${chapter.code.toUpperCase()}, ${chapter.code}, class 9 science NCERT solutions, Exploration chapter ${chapter.number}, ${exercise.title}, CBSE 2026 science`}
      schema={[
        {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://solvencert-novexa.vercel.app' },
            { '@type': 'ListItem', position: 2, name: 'NCERT Solutions', item: 'https://solvencert-novexa.vercel.app/answers' },
            { '@type': 'ListItem', position: 3, name: 'Class 9 Science', item: 'https://solvencert-novexa.vercel.app/class-9/science/exploration' },
            { '@type': 'ListItem', position: 4, name: chapter.title, item: `https://solvencert-novexa.vercel.app${chapterUrl}` },
          ],
        },
      ]}
    >
      <div className="sticky top-14 z-30 bg-[var(--surface-0)]/95 backdrop-blur-md border-b border-[var(--border)]">
        <div className="max-w-screen-lg mx-auto px-4 md:px-6 py-2.5 flex items-center gap-1.5 text-xs text-[var(--text-muted)] overflow-x-auto scrollbar-hide whitespace-nowrap">
          <Link href="/" className="hover:text-blue-500 flex-shrink-0 flex items-center gap-1"><Home size={11} />Home</Link>
          <ChevronRight size={10} className="flex-shrink-0" /><Link href="/answers" className="hover:text-blue-500 flex-shrink-0">Solutions</Link>
          <ChevronRight size={10} className="flex-shrink-0" /><Link href="/class-9/science/exploration" className="hover:text-blue-500 flex-shrink-0">Science</Link>
          <ChevronRight size={10} className="flex-shrink-0" /><Link href={chapterUrl} className="hover:text-blue-500 flex-shrink-0">Ch {chapter.number}</Link>
          <ChevronRight size={10} className="flex-shrink-0" /><span className="text-[var(--text-secondary)] font-semibold flex-shrink-0">{exercise.title}</span>
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
              <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)] mt-5 mb-2">This chapter</p>
              <nav className="space-y-0.5">
                {chapter.exercises.map(ex => (
                  <Link key={ex.id} href={`${chapterUrl}/${ex.id}`}
                    className={cn('flex items-center gap-2 px-2.5 py-2 rounded-lg text-xs transition-colors',
                      ex.id === exerciseId ? 'bg-green-50 dark:bg-green-950/40 text-green-600 dark:text-green-400 font-semibold' : 'text-[var(--text-muted)] hover:bg-[var(--surface-1)]')}>
                    <span className="truncate">{ex.title}</span>
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
              <div className="flex justify-end mt-3">
                <button onClick={downloadPDF} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--surface-2)] hover:bg-[var(--surface-3)] text-[var(--text-secondary)] text-xs font-semibold border border-[var(--border)]">
                  <Download size={13} /> Download Solutions PDF
                </button>
              </div>
            </div>

            <div className="mb-8">
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
            questions={exercise.questions.map(q => ({ id: `${exercise.id}-${q.id}`, number: q.number, section: exercise.title }))}
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
export const getStaticProps: GetStaticProps = async ({ params }) => ({ props: params || {}, revalidate: 3600 });
