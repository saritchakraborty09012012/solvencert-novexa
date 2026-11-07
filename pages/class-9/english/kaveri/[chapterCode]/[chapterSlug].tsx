import React, { useState } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import { ChevronRight, BookOpen, Home, Download, FileText, Feather, Loader2, Lightbulb, Baby } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import BackToTop from '@/components/features/BackToTop';
import ReadAloud from '@/components/features/ReadAloud';
import AIFollowUp from '@/components/features/AIFollowUp';
import BookmarkButton from '@/components/features/BookmarkButton';
import ThumbsRating from '@/components/features/ThumbsRating';
import ReportFlag from '@/components/features/ReportFlag';
import AuthModal from '@/components/auth/AuthModal';
import { ENGLISH_CHAPTERS, type EnglishQuestion } from '@/lib/content-english';
import { cn } from '@/utils/helpers';
import { getSubjectBackground } from '@/utils/helpers';
import QuestionNav from '@/components/features/QuestionNav';
import { htmlToPdf } from '@/lib/pdf';
import { useChapterTabSession } from '@/lib/chapterTabSession';

function QuestionBlock({ q, sectionId, sectionTitle, chapterCode, contentSlug, contentTitle, chapterNumber, onGuestBlock }: {
  q: EnglishQuestion; sectionId: string; sectionTitle: string;
  chapterCode: string; contentSlug: string; contentTitle: string; chapterNumber: number; onGuestBlock: () => void;
}) {
  const ctx = `English Question: ${q.text}${q.parts ? '\n' + q.parts.join('\n') : ''}`;
  const isComing = q.answer === 'Coming Soon';
  const [explainTxt, setExplainTxt] = useState('');
  const [explainLoading, setExplainLoading] = useState(false);
  const [simplifyTxt, setSimplifyTxt] = useState('');
  const [simplifyLoading, setSimplifyLoading] = useState(false);

  async function runAI(mode: 'explain' | 'simplify') {
    const setText = mode === 'explain' ? setExplainTxt : setSimplifyTxt;
    const setLoading = mode === 'explain' ? setExplainLoading : setSimplifyLoading;
    setLoading(true);
    try {
      const res = await fetch(`/api/ai/${mode}`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: q.text, answer: q.answer, subject: 'English' }),
      });
      const data = await res.json();
      setText(data.explanation || data.simplified || (mode === 'explain' ? 'Could not generate explanation.' : 'Could not simplify the solution.'));
    } catch { setText('Connection error.'); }
    finally { setLoading(false); }
  }

  return (
    <div className="question-block" id={`q-${sectionId}-${q.id}`}>
      <div className="q-header">
        <div className="flex items-start gap-3">
          <span className="flex-shrink-0 w-7 h-7 rounded-lg bg-[var(--surface-2)] text-xs font-bold text-[var(--text-secondary)] flex items-center justify-center mt-0.5">
            {q.number}
          </span>
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2">
              <p className="text-sm font-medium text-[var(--text-primary)] leading-relaxed flex-1 min-w-0">{q.text}</p>
              <BookmarkButton
                subject="english" chapterCode={chapterCode} chapterSlug={contentSlug} chapterTitle={contentTitle}
                questionId={`${sectionId}-${q.id}`} questionNumber={q.number} questionText={q.text}
                onGuestBlock={onGuestBlock}
              />
            </div>
            {q.parts && q.parts.length > 0 && (
              <ol className="mt-2 space-y-1.5 pl-1">
                {q.parts.map((part, pi) => (
                  <li key={pi} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                    <span className="flex-shrink-0 text-[var(--text-muted)] font-mono text-xs mt-0.5">
                      {String.fromCharCode(97 + pi)}.
                    </span>
                    <span className="leading-relaxed">{part}</span>
                  </li>
                ))}
              </ol>
            )}
          </div>
        </div>
      </div>
      <div className="q-body">
        <div className={cn('p-3.5 rounded-xl border',
          isComing
            ? 'bg-amber-50 dark:bg-amber-950/20 border-amber-100 dark:border-amber-900/40'
            : 'bg-[var(--surface-1)] border-[var(--border)]')}>
          {isComing ? (
            <div className="flex items-center gap-2.5">
              <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-amber-100 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 flex-shrink-0">
                <BookOpen size={16} />
              </span>
              <div>
                <p className="text-xs font-semibold text-amber-700 dark:text-amber-400">Answer Coming Soon</p>
                <p className="text-xs text-amber-600/80 dark:text-amber-500/80 mt-0.5">
                  Human-verified solutions are being carefully prepared.
                </p>
              </div>
            </div>
          ) : (
            <>
              <div className="flex items-start gap-2">
                <span className="flex-shrink-0 mt-0.5 rounded-md bg-blue-600/10 dark:bg-blue-400/15 text-blue-600 dark:text-blue-400 text-xs font-bold px-2 py-0.5">Ans.</span>
                <p className="answer-body text-sm flex-1 min-w-0" style={{ whiteSpace: 'pre-wrap' }}>{q.answer}</p>
              </div>
              <div className="flex items-center justify-between mt-2">
                <div className="answer-actions">
                  <ReadAloud text={q.answer} size="sm" />
                  <button onClick={() => navigator.clipboard.writeText(q.answer)}
                    className="inline-flex items-center gap-1 px-2 py-1 rounded-lg border text-[11px] font-medium bg-[var(--surface-2)] text-[var(--text-muted)] border-transparent hover:border-[var(--border)]">
                    ⎘ Copy
                  </button>
                </div>
                <ReportFlag reportedContent={q.answer} onGuestBlock={onGuestBlock} />
              </div>
              <ThumbsRating subject="english" chapterNumber={chapterNumber} exerciseLabel={sectionTitle} itemKey={`${sectionId}-${q.id}-answer`} />

              <div className="flex items-center gap-2 flex-wrap mt-3">
                <button onClick={() => runAI('explain')} disabled={explainLoading} title="Get expert explanation"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-violet-50 dark:bg-violet-950/30 border border-violet-200 dark:border-violet-800 text-violet-700 dark:text-violet-300 text-xs font-semibold hover:bg-violet-100 disabled:opacity-50 transition-all">
                  {explainLoading ? <Loader2 size={11} className="animate-spin" /> : <Lightbulb size={11} />} Explain
                </button>
                <button onClick={() => runAI('simplify')} disabled={simplifyLoading} title="Simplify like explaining to a 5-year-old"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-xs font-semibold hover:bg-emerald-100 disabled:opacity-50 transition-all">
                  {simplifyLoading ? <Loader2 size={11} className="animate-spin" /> : <Baby size={11} />} Simplify
                </button>
              </div>

              {explainTxt && (
                <div className="mt-3 p-3 rounded-xl bg-violet-50 dark:bg-violet-950/20 border border-violet-100 dark:border-violet-900/40">
                  <p className="text-[10px] font-bold text-violet-600 uppercase tracking-wider mb-1.5 flex items-center gap-1"><Lightbulb size={10} /> Expert Explanation</p>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed" style={{ whiteSpace: 'pre-wrap' }}>{explainTxt}</p>
                  <div className="flex items-center justify-between mt-2">
                    <div className="answer-actions"><ReadAloud text={explainTxt} size="sm" /></div>
                    <ReportFlag reportedContent={explainTxt} onGuestBlock={onGuestBlock} />
                  </div>
                  <ThumbsRating subject="english" chapterNumber={chapterNumber} exerciseLabel={sectionTitle} itemKey={`${sectionId}-${q.id}-explain`} />
                </div>
              )}

              {simplifyTxt && (
                <div className="mt-3 p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/40">
                  <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider mb-1.5 flex items-center gap-1"><Baby size={10} /> Simplified (Age 5)</p>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed" style={{ whiteSpace: 'pre-wrap' }}>{simplifyTxt}</p>
                  <div className="flex items-center justify-between mt-2">
                    <div className="answer-actions"><ReadAloud text={simplifyTxt} size="sm" /></div>
                    <ReportFlag reportedContent={simplifyTxt} onGuestBlock={onGuestBlock} />
                  </div>
                  <ThumbsRating subject="english" chapterNumber={chapterNumber} exerciseLabel={sectionTitle} itemKey={`${sectionId}-${q.id}-simplify`} />
                </div>
              )}
            </>
          )}
        </div>
        <AIFollowUp context={ctx} subject="english" chapterNumber={chapterNumber} exerciseLabel={sectionTitle} itemKey={`${sectionId}-${q.id}`} onGuestBlock={onGuestBlock} />
      </div>
    </div>
  );
}

interface PageProps { chapterCode: string; chapterSlug: string; }

export default function EnglishContentPage({ chapterCode, chapterSlug }: PageProps) {
  const chapter = ENGLISH_CHAPTERS.find(c => c.code === chapterCode);
  const content = chapter?.contents.find(c => c.slug === chapterSlug);
  const otherContent = chapter?.contents.find(c => c.slug !== chapterSlug);
  const [selSec, setSelSec] = useState<string>('all');
  useChapterTabSession({
    scope: 'english/kaveri',
    code: chapterCode,
    slug: chapterSlug,
    tab: selSec,
    setTab: setSelSec,
    isTabValid: t => t === 'all' || (content?.sections.some(s => s.id === t) ?? false),
  });
  // selSec survives client-side navigation — fall back to All Sections when it
  // doesn't exist on this page so the section list is never empty.
  const sel = selSec === 'all' || (content?.sections.some(s => s.id === selSec) ?? false) ? selSec : 'all';
  const [authModal, setAuthModal] = useState<'login' | 'signup' | null>(null);

  async function downloadPDF() {
    if (!chapter || !content) return;
    const { jsPDF } = await import('jspdf');
    const secs = sel === 'all' ? content.sections : content.sections.filter(s => s.id === sel);
    const html = `<html><head><title>${content.title} — English Solutions</title>
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
    <h1>Chapter ${chapter.number}: ${content.title}</h1>
    <p style="color:#7c8caa;font-size:12px;margin-bottom:20px">
      Class 9 English (Kaveri) · Chapter code: ${chapter.code} · NCERT 2026 Revised Syllabus
    </p>
    ${secs.map(s => `
      <h2>${s.title}</h2>
      ${s.questions.map(q => `
        <div class="q">
          <p><span class="q-num">Q${q.number}.</span> ${q.text}</p>
          ${q.parts ? '<ol>' + q.parts.map(p => `<li>${p}</li>`).join('') + '</ol>' : ''}
          <div class="ans">
            ${q.answer === 'Coming Soon' ? 'Answer: Coming Soon' : q.answer}
          </div>
        </div>
      `).join('')}
    `).join('')}
    <div class="footer">
      SolveNCERT — Powered by NDe · formerly NOVEXA | solvencert &nbsp;·&nbsp; NCERT 2026 Revised Syllabus
    </div>
    </body></html>`;
    await import('jspdf');
    htmlToPdf(html, `class-9-english-${chapter.code}-${content.slug}-${sel === 'all' ? 'all-sections' : sel}-solutions.pdf`);
  }

  if (!chapter || !content) {
    return (
      <Layout title="Chapter Not Found | SolveNCERT" description="The requested chapter could not be found. Browse all NCERT solutions for Class 9.">
        <div className="text-center py-20">
          <p className="text-[var(--text-muted)]">Chapter not found.</p>
          <Link href="/class-9/english/kaveri" className="btn-primary mt-4 inline-flex">Browse English</Link>
        </div>
      </Layout>
    );
  }

  const sections = sel === 'all' ? content.sections : content.sections.filter(s => s.id === sel);
  const totalQ   = content.sections.reduce((a, s) => a + s.questions.length, 0);

  return (
    <Layout
      title={`${content.title} — ${chapter.code.toUpperCase()} | Class 9 English NCERT Questions | Kaveri`}
      description={`All questions from Class 9 English Kaveri Chapter ${chapter.number} (${chapter.code.toUpperCase()}): ${content.title}. Reading comprehension, vocabulary, grammar${content.kind === 'poem' ? ', poem analysis' : ''}. CBSE 2026 Syllabus.`}
      canonical={`/class-9/english/kaveri/${chapterCode}/${chapterSlug}`}
      ogType="article"
      keywords={`${chapter.code.toUpperCase()}, ${chapter.code}, class 9 english NCERT solutions, Kaveri chapter ${chapter.number}, ${content.title}, CBSE 2026 english`}
      schema={[{
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home',            item: 'https://solvencert-novexa.vercel.app' },
          { '@type': 'ListItem', position: 2, name: 'NCERT Solutions', item: 'https://solvencert-novexa.vercel.app/answers' },
          { '@type': 'ListItem', position: 3, name: 'Class 9 English', item: 'https://solvencert-novexa.vercel.app/class-9/english/kaveri' },
          { '@type': 'ListItem', position: 4, name: `Chapter ${chapter.number}`, item: `https://solvencert-novexa.vercel.app/class-9/english/kaveri/${chapterCode}` },
          { '@type': 'ListItem', position: 5, name: content.title,     item: `https://solvencert-novexa.vercel.app/class-9/english/kaveri/${chapterCode}/${chapterSlug}` },
        ],
      }, {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: `Chapter ${chapter.number}: ${content.title} (${chapter.code.toUpperCase()})`,
        description: `NCERT Solutions for Class 9 English Kaveri Chapter ${chapter.number} (${chapter.code.toUpperCase()}): ${content.title}. CBSE 2026 Syllabus.`,
        keywords: `${chapter.code.toUpperCase()}, ${chapter.code}, class 9 english, NCERT solutions, Kaveri, chapter ${chapter.number}`,
        author: { '@type': 'Organization', name: 'SolveNCERT by NOVEXA · Now NDe · NoirDemons', alternateName: ['NDe', 'NDE', 'nde', 'NoirDemons'] },
        publisher: { '@type': 'Organization', name: 'SolveNCERT by NOVEXA · Now NDe · NoirDemons', alternateName: ['NDe', 'NDE', 'nde', 'NoirDemons'], url: 'https://solvencert-novexa.vercel.app' },
        url: `https://solvencert-novexa.vercel.app/class-9/english/kaveri/${chapterCode}/${chapterSlug}`,
        identifier: chapter.code.toUpperCase(),
        about: { '@type': 'Chapter', name: content.title, position: chapter.number, code: chapter.code.toUpperCase() },
        isPartOf: { '@type': 'Book', name: 'Kaveri', isbn: 'NCERT Class 9 English' },
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
          <span className="text-[var(--text-secondary)] font-semibold flex-shrink-0 truncate max-w-[160px]">{content.title}</span>
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
            {/* Header */}
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
              <p className="text-sm text-[var(--text-muted)] mt-1">Kaveri · {totalQ} questions · {content.sections.length} sections</p>
              <p className="text-xs text-[var(--text-muted)] mt-1">Chapter code: <span className="font-mono font-semibold text-[var(--text-secondary)]">{chapter.code}</span> · Book: Kaveri · Class 9 English</p>
              <p className="text-sm text-[var(--text-secondary)] mt-3 leading-relaxed">Find complete NCERT solutions for Class 9 English, Kaveri Chapter {chapter.number}. This page covers {content.title} with clear answers for chapter code {chapter.code.toUpperCase()}.</p>

              {/* Real links to the sibling content — not an in-page tab, each is its own page */}
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

            {/* Section tabs + Download */}
            <div className="mb-5">
              <div className="mb-3">
                <span className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider">Section:</span>
                <div className="section-nav mt-2">
                  <button onClick={() => setSelSec('all')}
                    className={cn('method-tab section-nav-button text-xs', sel === 'all' ? 'method-tab-active' : 'method-tab-inactive')}>
                    All Sections
                  </button>
                  {content.sections.map(s => (
                    <button key={s.id} onClick={() => setSelSec(s.id)}
                      className={cn('method-tab section-nav-button text-xs', sel === s.id ? 'method-tab-active' : 'method-tab-inactive')}>
                      {s.title.length > 18 ? s.title.slice(0, 18) + '…' : s.title}
                    </button>
                  ))}
                </div>
              </div>

              {/* Download PDF */}
              <div className="flex items-center gap-2 flex-wrap justify-end">
                <button onClick={downloadPDF}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--surface-2)] hover:bg-[var(--surface-3)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] text-xs font-semibold border border-[var(--border)] transition-all">
                  <Download size={13} /> Download PDF
                </button>
              </div>
            </div>

            {/* Sections */}
            {sections.map(section => (
              <div key={section.id} className="mb-8" id={section.id}>
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
            ))}

            {/* Mobile chapter nav */}
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
            questions={sections.flatMap(s => s.questions.map(q => ({ id: `${s.id}-${q.id}`, number: q.number, section: s.title })))}
            label={sel === 'all' ? 'Questions' : sections[0]?.title || 'Questions'}
          />
        </div>
      </div>
      <BackToTop />
      {authModal && <AuthModal mode={authModal} onClose={() => setAuthModal(null)} onSwitch={m => setAuthModal(m)} />}
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: ENGLISH_CHAPTERS.flatMap(ch =>
    ch.contents.map(cc => ({ params: { chapterCode: ch.code, chapterSlug: cc.slug } }))
  ),
  fallback: 'blocking'
});

export const getStaticProps: GetStaticProps = async ({ params }) => ({
  props: params || {}, revalidate: 3600
});
