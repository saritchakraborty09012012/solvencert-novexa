import React, { useState } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import { ChevronRight, BookOpen, Home, Download, FileText, Feather } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import BackToTop from '@/components/features/BackToTop';
import QuestionNav from '@/components/features/QuestionNav';
import AuthModal from '@/components/auth/AuthModal';
import { ENGLISH_CHAPTERS } from '@/lib/content-english';
import { cn, getSubjectBackground } from '@/utils/helpers';
import { htmlToPdf } from '@/lib/pdf';
import { QuestionBlock } from '../[chapterSlug]';

interface PageProps { chapterCode: string; chapterSlug: string; exerciseId: string; }

/**
 * Single-section page for English (Kaveri): /{chapterCode}/{chapterSlug}/{sectionId}
 * Renders only the requested section so every section is its own crawlable,
 * linkable page. The content page itself is untouched.
 */
export default function EnglishSectionPage({ chapterCode, chapterSlug, exerciseId }: PageProps) {
  const chapter = ENGLISH_CHAPTERS.find(c => c.code === chapterCode);
  const content = chapter?.contents.find(c => c.slug === chapterSlug);
  const otherContent = chapter?.contents.find(c => c.slug !== chapterSlug);
  const section = content?.sections.find(s => s.id === exerciseId);
  const [authModal, setAuthModal] = useState<'login' | 'signup' | null>(null);

  async function downloadPDF() {
    if (!chapter || !content || !section) return;
    const { jsPDF } = await import('jspdf');
    const html = `<html><head><title>${section.title} — English Solutions</title>
    <style>
      body{font-family:Georgia,serif;max-width:720px;margin:0 auto;padding:24px;font-size:13px;line-height:1.8}
      h1{font-size:22px;border-bottom:2px solid #7c3aed;padding-bottom:8px;color:#0f1729}
      h2{font-size:15px;color:#7c3aed;margin-top:24px;margin-bottom:8px}
      .q{margin:14px 0;padding:12px;border-left:3px solid #7c3aed;background:#f9f7ff;border-radius:0 8px 8px 0}
      .q-num{font-weight:bold;color:#7c3aed}
      ol{padding-left:20px;margin:6px 0}
      li{margin-bottom:4px}
      .ans{margin-top:8px;padding:10px;background:#fff;border:1px solid #e4e0f7;border-radius:6px;font-style:italic;color:#4b4b7a;white-space:pre-wrap}
      .footer{margin-top:48px;padding-top:12px;border-top:1px solid #dde3f0;font-size:10px;color:#7c8caa;text-align:center}
      @media print{.footer{position:fixed;bottom:0;left:0;right:0;background:#fff;padding:8px 0}body{padding-bottom:50px}}
    </style></head><body>
    <h1>Chapter ${chapter.number}: ${content.title} — ${section.title}</h1>
    <p style="color:#7c8caa;font-size:12px;margin-bottom:20px">
      Class 9 English (Kaveri) · Chapter code: ${chapter.code} · NCERT 2026 Revised Syllabus
    </p>
    ${section.questions.map(q => `
      <div class="q">
        <p><span class="q-num">Q${q.number}.</span> ${q.text}</p>
        ${q.parts ? '<ol>' + q.parts.map(p => `<li>${p}</li>`).join('') + '</ol>' : ''}
        <div class="ans">
          ${q.answer === 'Coming Soon' ? 'Answer: Coming Soon' : q.answer}
        </div>
      </div>
    `).join('')}
    <div class="footer">
      SolveNCERT — Powered by NDe · formerly NOVEXA | solvencert &nbsp;·&nbsp; NCERT 2026 Revised Syllabus
    </div>
    </body></html>`;
    await import('jspdf');
    htmlToPdf(html, `class-9-english-${chapter.code}-${content.slug}-${section.id}-solutions.pdf`);
  }

  if (!chapter || !content || !section) {
    return (
      <Layout title="Section Not Found | SolveNCERT" description="The requested section could not be found. Browse all NCERT solutions for Class 9.">
        <div className="text-center py-20">
          <p className="text-[var(--text-muted)]">Section not found.</p>
          <Link href="/class-9/english/kaveri" className="btn-primary mt-4 inline-flex">Browse English</Link>
        </div>
      </Layout>
    );
  }

  const chapterUrl = `/class-9/english/kaveri/${chapterCode}/${chapterSlug}`;
  const canonical = `${chapterUrl}/${exerciseId}`;

  return (
    <Layout
      title={`${section.title} — Chapter ${chapter.number}: ${content.title} | Class 9 English NCERT Questions | Kaveri`}
      description={`All questions from the ${section.title} section of Class 9 English Kaveri Chapter ${chapter.number} (${chapter.code.toUpperCase()}): ${content.title}. ${section.questions.length} questions with answers. CBSE 2026 Syllabus.`}
      canonical={canonical}
      ogType="article"
      keywords={`${chapter.code.toUpperCase()}, ${chapter.code}, class 9 english NCERT solutions, Kaveri chapter ${chapter.number}, ${section.title}, CBSE 2026 english`}
      schema={[{
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://solvencert-novexa.vercel.app' },
          { '@type': 'ListItem', position: 2, name: 'NCERT Solutions', item: 'https://solvencert-novexa.vercel.app/answers' },
          { '@type': 'ListItem', position: 3, name: 'Class 9 English', item: 'https://solvencert-novexa.vercel.app/class-9/english/kaveri' },
          { '@type': 'ListItem', position: 4, name: `Chapter ${chapter.number}`, item: `https://solvencert-novexa.vercel.app/class-9/english/kaveri/${chapterCode}` },
          { '@type': 'ListItem', position: 5, name: content.title, item: `https://solvencert-novexa.vercel.app${chapterUrl}` },
        ],
      }]}
      bgImage={getSubjectBackground('english', chapter.number)}
    >
      {/* Sticky breadcrumb */}
      <div className="sticky top-14 z-30 bg-[var(--surface-0)]/95 backdrop-blur-md border-b border-[var(--border)]">
        <div className="max-w-screen-lg mx-auto px-4 md:px-6 py-2.5 flex items-center gap-1.5 text-xs text-[var(--text-muted)] overflow-x-auto scrollbar-hide whitespace-nowrap">
          <Link href="/" className="hover:text-blue-500 flex-shrink-0 flex items-center gap-1"><Home size={11} />Home</Link>
          <ChevronRight size={10} className="flex-shrink-0" />
          <Link href="/answers" className="hover:text-blue-500 flex-shrink-0">Solutions</Link>
          <ChevronRight size={10} className="flex-shrink-0" />
          <Link href="/class-9/english/kaveri" className="hover:text-blue-500 flex-shrink-0">English</Link>
          <ChevronRight size={10} className="flex-shrink-0" />
          <Link href={`/class-9/english/kaveri/${chapterCode}`} className="hover:text-blue-500 flex-shrink-0">Chapter {chapter.number}</Link>
          <ChevronRight size={10} className="flex-shrink-0" />
          <span className="text-[var(--text-secondary)] font-semibold flex-shrink-0 truncate max-w-[160px]">{section.title}</span>
        </div>
      </div>

      <div className="max-w-screen-lg mx-auto px-4 md:px-6 py-6 md:py-8">
        <div className="flex gap-7">

          {/* Sidebar — chapter list, each expanded into its two content links */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <div className="sticky top-28 card p-4">
              <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)] mb-3">Chapters</p>
              <nav className="space-y-2.5 max-h-[65vh] overflow-y-auto scrollbar-hide">
                {ENGLISH_CHAPTERS.map(ch => (
                  <div key={ch.code}>
                    <div className="flex items-center gap-2 px-2.5 mb-1">
                      <span className="w-5 h-5 rounded bg-[var(--surface-2)] text-[10px] font-bold flex items-center justify-center flex-shrink-0">
                        {ch.number}
                      </span>
                      <span className="text-[10px] font-mono text-[var(--text-muted)]">{ch.code.toUpperCase()}</span>
                    </div>
                    <div className="space-y-0.5">
                      {ch.contents.map(cc => (
                        <Link key={cc.slug}
                          href={`/class-9/english/kaveri/${ch.code}/${cc.slug}`}
                          className={cn('flex items-center gap-1.5 pl-9 pr-2.5 py-1.5 rounded-lg text-xs transition-colors',
                            cc.slug === chapterSlug
                              ? 'bg-purple-50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400 font-semibold'
                              : 'text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-1)]')}>
                          {cc.kind === 'poem' ? <Feather size={10} className="flex-shrink-0" /> : <FileText size={10} className="flex-shrink-0" />}
                          <span className="truncate leading-tight">{cc.title}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main */}
          <main className="flex-1 min-w-0">
            <div className="mb-5">
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                <span className="px-2 py-0.5 rounded-md bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-400 text-xs font-bold">
                  Class 9 · English
                </span>
                <span className="badge-2026">NCERT 2026 Revised Syllabus</span>
              </div>
              <h1 className="text-xl md:text-2xl font-display font-bold text-[var(--text-primary)]">
                Chapter {chapter.number}: {content.title} <span className="text-base md:text-lg font-normal text-[var(--text-muted)]">({chapter.code.toUpperCase()})</span>
              </h1>
              <p className="text-sm text-[var(--text-muted)] mt-1">Kaveri · {section.questions.length} questions · {section.title}</p>
              <p className="text-xs text-[var(--text-muted)] mt-1">Chapter code: <span className="font-mono font-semibold text-[var(--text-secondary)]">{chapter.code}</span> · Book: Kaveri · Class 9 English</p>
              <p className="text-sm text-[var(--text-secondary)] mt-3 leading-relaxed">Complete NCERT solutions for the {section.title} section of Class 9 English, Kaveri Chapter {chapter.number} ({content.title}).</p>

              {otherContent && (
                <div className="flex items-center gap-2 mt-3">
                  <Link href={`/class-9/english/kaveri/${chapterCode}/${chapterSlug}`}
                    className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-purple-600 text-white flex items-center gap-1.5">
                    {content.kind === 'poem' ? <Feather size={11} /> : <FileText size={11} />} {content.title}
                  </Link>
                  <Link href={`/class-9/english/kaveri/${chapterCode}/${otherContent.slug}`}
                    className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-[var(--surface-2)] text-[var(--text-secondary)] hover:bg-[var(--surface-3)] flex items-center gap-1.5">
                    {otherContent.kind === 'poem' ? <Feather size={11} /> : <FileText size={11} />} {otherContent.title}
                  </Link>
                </div>
              )}
            </div>

            <div className="mb-5 flex items-center gap-2 flex-wrap justify-end">
              <button onClick={downloadPDF}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--surface-2)] hover:bg-[var(--surface-3)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] text-xs font-semibold border border-[var(--border)] transition-all">
                <Download size={13} /> Download PDF
              </button>
            </div>

            {/* Section tabs — same tabs as the content page, each one its own page */}
            <div className="mb-3">
              <span className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider">Section:</span>
              <div className="section-nav mt-2">
                <Link href={chapterUrl} className="method-tab section-nav-button text-xs method-tab-inactive">All Sections</Link>
                {content.sections.map(s => (
                  <Link key={s.id} href={`${chapterUrl}/${s.id}`}
                    className={cn('method-tab section-nav-button text-xs', s.id === exerciseId ? 'method-tab-active' : 'method-tab-inactive')}>
                    {s.title.length > 18 ? s.title.slice(0, 18) + '…' : s.title}
                  </Link>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-base font-display font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                <BookOpen size={15} className="text-purple-500" />
                <span>{section.title}</span>
                <span className="text-xs font-normal text-[var(--text-muted)]">
                  ({section.questions.length} questions)
                </span>
              </h2>
              {section.questions.map(q => (
                <QuestionBlock key={q.id} q={q} sectionId={section.id} sectionTitle={section.title}
                  chapterCode={chapter.code} contentSlug={content.slug} contentTitle={content.title} chapterNumber={chapter.number}
                  onGuestBlock={() => setAuthModal('signup')} />
              ))}
            </div>

            <div className="lg:hidden mt-8 card p-4">
              <p className="text-xs font-bold uppercase tracking-widest text-[var(--text-muted)] mb-3">Other Chapters</p>
              <div className="flex flex-wrap gap-2">
                {ENGLISH_CHAPTERS.map(ch => (
                  <Link key={ch.code}
                    href={`/class-9/english/kaveri/${ch.code}`}
                    className={cn('px-3 py-1.5 rounded-lg text-xs font-medium transition-colors',
                      ch.code === chapterCode
                        ? 'bg-purple-600 text-white'
                        : 'bg-[var(--surface-2)] text-[var(--text-secondary)] hover:bg-[var(--surface-3)]')}>
                    {ch.number}
                  </Link>
                ))}
              </div>
            </div>
          </main>
          <QuestionNav
            questions={section.questions.map(q => ({ id: `${section.id}-${q.id}`, number: q.number, section: section.title }))}
            label={section.title}
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
