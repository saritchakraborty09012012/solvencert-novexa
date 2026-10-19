import React, { useState, useEffect, useRef } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import { ChevronRight, BookOpen, Star, Lightbulb, Copy, Check, Home, Loader2, Download, KeyRound, Zap } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import BackToTop from '@/components/features/BackToTop';
import MathRenderer from '@/components/features/MathRenderer';
import ReadAloud from '@/components/features/ReadAloud';
import AIFollowUp from '@/components/features/AIFollowUp';
import GuestPaywall from '@/components/features/GuestPaywall';
import QuestionNav from '@/components/features/QuestionNav';
import BookmarkButton from '@/components/features/BookmarkButton';
import ThumbsRating from '@/components/features/ThumbsRating';
import ReportFlag from '@/components/features/ReportFlag';
import AuthModal from '@/components/auth/AuthModal';
import { CLASS_9_SUBJECTS, getSubject, type Question } from '@/lib/content';
import { useAuthStore } from '@/store/authStore';
import { hasReachedGuestLimit, incrementSolutionView } from '@/lib/guestLimits';
import { cn } from '@/utils/helpers';
import { getSubjectBackground } from '@/utils/helpers';
import { htmlToPdf } from '@/lib/pdf';

async function savePdf(html: string, filename: string) {
  await import('jspdf');
  htmlToPdf(html, filename);
}

function sstBranch(chNumber: number): string | null {
  if (chNumber === 1) return 'General';
  if (chNumber <= 3) return 'Geography';
  if (chNumber <= 5) return 'History';
  if (chNumber <= 7) return 'Political Science';
  if (chNumber <= 9) return 'Economics';
  return null;
}

function CopyBtn({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  async function go() { await navigator.clipboard.writeText(text.replace(/\*\*/g,'').replace(/\$+/g,'').replace(/<[^>]+>/g,'')); setCopied(true); setTimeout(()=>setCopied(false),2000); }
  return (
    <button onClick={go} className={cn('inline-flex items-center gap-1 px-2 py-1 rounded-lg border text-[11px] font-medium transition-all',
      copied ? 'bg-green-100 dark:bg-green-900/30 text-green-600 border-green-200' : 'bg-[var(--surface-2)] text-[var(--text-muted)] border-transparent hover:border-[var(--border)]')}>
      {copied ? <Check size={11}/> : <Copy size={11}/>}
      <span>{copied?'Copied':'Copy'}</span>
    </button>
  );
}

function ExplainBtn({ question, answer, subject, onResult }: { question:string; answer:string; subject:string; onResult:(t:string)=>void }) {
  const [loading, setLoading] = useState(false);
  async function go() {
    setLoading(true);
    try {
      const res = await fetch('/api/ai/explain', { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({ question, answer, subject }) });
      const data = await res.json();
      onResult(data.explanation || 'Could not generate explanation.');
    } catch { onResult('Connection error.'); }
    finally { setLoading(false); }
  }
  return (
    <button onClick={go} disabled={loading} title="Get expert explanation"
      className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-violet-50 dark:bg-violet-950/30 border border-violet-200 dark:border-violet-800 text-violet-700 dark:text-violet-300 text-xs font-semibold hover:bg-violet-100 disabled:opacity-50 transition-all">
      {loading ? <Loader2 size={11} className="animate-spin"/> : <Lightbulb size={11}/>} Explain
    </button>
  );
}

function QuestionCard({ question, exerciseId, isMaths, subject, subjectSlug, chapterCode, chapterSlug, chapterTitle, chapterNumber, exerciseLabel, guestBlocked, onUnlock }: {
  question: Question; exerciseId: string; isMaths: boolean; subject: string; subjectSlug: string;
  chapterCode: string; chapterSlug: string; chapterTitle: string; chapterNumber: number; exerciseLabel: string;
  guestBlocked: boolean; onUnlock: () => void;
}) {
  const [showKey, setShowKey] = useState(false);
  const [showSchool, setShowSchool] = useState(true);
  const [showTrick, setShowTrick] = useState(false);
  const [explainTxt, setExplainTxt] = useState('');
  const showTabs = isMaths || subjectSlug === 'it' || subjectSlug === 'advanced-science';
  const schoolLabel = subjectSlug === 'advanced-science' ? 'Board Level Answers' : 'School Level Solution';
  const answerLabel = isMaths ? 'Sol.' : (subjectSlug === 'hindi' || subjectSlug === 'sanskrit') ? 'उत्तर:' : 'Ans.';
  const ctx = `Question: ${question.text}${question.parts?'\n'+question.parts.join('\n'):''}\nAnswer: ${question.answer.schoolMethod}`;

  return (
    <div className="question-block" id={`q-${exerciseId}-${question.id}`}>
      {/* Question — H3 for SEO */}
      <div className="q-header flex items-start gap-3">
        <span className="flex-shrink-0 min-w-7 min-h-7 h-auto px-1.5 py-0.5 rounded-lg bg-[var(--surface-2)] text-xs font-bold text-[var(--text-secondary)] flex items-center justify-center whitespace-nowrap mt-0.5">{question.number}</span>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <div className="flex-1 min-w-0">
              {question.isHard && <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-600 text-[10px] font-bold mb-1.5"><Star size={9} fill="currentColor"/> Hard</span>}
              <h3 className="text-sm font-medium text-[var(--text-primary)] leading-relaxed" style={{margin:0}}>
                <MathRenderer text={question.text}/>
              </h3>
            </div>
            <BookmarkButton
              subject={subjectSlug} chapterCode={chapterCode} chapterSlug={chapterSlug} chapterTitle={chapterTitle}
              questionId={`${exerciseId}-${question.id}`} questionNumber={question.number} questionText={question.text}
              onGuestBlock={onUnlock}
            />
          </div>
          {question.parts && question.parts.length > 0 && (
            <ol className="mt-2 space-y-1.5 pl-1">
              {question.parts.map((part, pi) => (
                <li key={pi} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                  <span className="flex-shrink-0 text-[var(--text-muted)] font-mono text-xs mt-0.5">{String.fromCharCode(97+pi)}.</span>
                  <MathRenderer text={part}/>
                </li>
              ))}
            </ol>
          )}
        </div>
      </div>

      {/* Answer section */}
      <div className="q-body space-y-3">
        {/* Guest paywall in answer box only */}
        {guestBlocked ? (
          <GuestPaywall onSignUp={onUnlock} onLogin={onUnlock}/>
        ) : (
          <>
            {showTabs && (
              <div className="flex items-center gap-2 flex-wrap">
                <button onClick={()=>{setShowKey(!showKey);if(!showKey){setShowSchool(false);setShowTrick(false);}}} className={cn('method-tab text-xs',showKey?'method-tab-active':'method-tab-inactive')}><KeyRound size={12}/> Answer Key</button>
                <button onClick={()=>{setShowSchool(!showSchool);if(!showSchool)setShowKey(false);}} className={cn('method-tab text-xs',showSchool?'method-tab-active':'method-tab-inactive')}><BookOpen size={12}/> {schoolLabel}</button>
                {question.answer.trickMethod && <button onClick={()=>{setShowTrick(!showTrick);if(!showTrick)setShowKey(false);}} className={cn('method-tab text-xs',showTrick?'method-tab-active':'method-tab-inactive')}><Zap size={12}/> Quick Trick</button>}
                <ExplainBtn question={question.text} answer={question.answer.schoolMethod} subject={subject} onResult={setExplainTxt}/>
              </div>
            )}

            {showKey && question.answer.answerKey && (
              <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/20 border border-amber-100 dark:border-amber-900/40">
                <p className="text-[10px] font-bold text-amber-600 uppercase tracking-wider mb-1.5">Answer Key</p>
                <div className="flex items-start gap-2">
                  <span className="flex-shrink-0 mt-1 rounded-md bg-amber-600/10 dark:bg-amber-400/15 text-amber-600 dark:text-amber-400 text-xs font-bold px-2 py-0.5">{answerLabel}</span>
                  <div className="flex-1 min-w-0"><MathRenderer text={question.answer.answerKey} className="text-sm"/></div>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <div className="answer-actions"><ReadAloud text={question.answer.answerKey} size="sm"/><CopyBtn text={question.answer.answerKey}/></div>
                  <ReportFlag reportedContent={question.answer.answerKey} onGuestBlock={onUnlock} />
                </div>
                <ThumbsRating subject={subjectSlug} chapterNumber={chapterNumber} exerciseLabel={exerciseLabel} itemKey={`${exerciseId}-${question.id}-key`} />
              </div>
            )}

            {(showSchool || !showTabs) && (
              <div className="p-3 rounded-xl bg-[var(--surface-1)] border border-[var(--border)]">
                <div className="flex items-center justify-between mb-1.5">
                  {showTabs && <p className="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">{schoolLabel}</p>}
                  {!showTabs && <ExplainBtn question={question.text} answer={question.answer.schoolMethod} subject={subject} onResult={setExplainTxt}/>}
                  {showTabs && <div className="ml-auto"><ExplainBtn question={question.text} answer={question.answer.schoolMethod} subject={subject} onResult={setExplainTxt}/></div>}
                </div>
                <div className="flex items-start gap-2">
                  <span className="flex-shrink-0 mt-1 rounded-md bg-blue-600/10 dark:bg-blue-400/15 text-blue-600 dark:text-blue-400 text-xs font-bold px-2 py-0.5">{answerLabel}</span>
                  <div className="flex-1 min-w-0"><MathRenderer text={question.answer.schoolMethod} className="answer-body"/></div>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <div className="answer-actions"><ReadAloud text={question.answer.schoolMethod} size="sm"/><CopyBtn text={question.answer.schoolMethod}/></div>
                  <ReportFlag reportedContent={question.answer.schoolMethod} onGuestBlock={onUnlock} />
                </div>
                <ThumbsRating subject={subjectSlug} chapterNumber={chapterNumber} exerciseLabel={exerciseLabel} itemKey={`${exerciseId}-${question.id}-solution`} />
                {explainTxt && (
                  <div className="mt-3 p-3 rounded-xl bg-violet-50 dark:bg-violet-950/20 border border-violet-100 dark:border-violet-900/40">
                    <p className="text-[10px] font-bold text-violet-600 uppercase tracking-wider mb-1.5 flex items-center gap-1"><Lightbulb size={10}/> Expert Explanation</p>
                    <MathRenderer text={explainTxt} className="text-xs"/>
                    <div className="flex items-center justify-between mt-2">
                      <div className="answer-actions"><ReadAloud text={explainTxt} size="sm"/><CopyBtn text={explainTxt}/></div>
                      <ReportFlag reportedContent={explainTxt} onGuestBlock={onUnlock} />
                    </div>
                    <ThumbsRating subject={subjectSlug} chapterNumber={chapterNumber} exerciseLabel={exerciseLabel} itemKey={`${exerciseId}-${question.id}-explain`} />
                  </div>
                )}
              </div>
            )}

            {showTrick && question.answer.trickMethod && (
              <div className="p-3 rounded-xl bg-violet-50 dark:bg-violet-950/20 border border-violet-100 dark:border-violet-900/40">
                <p className="text-[10px] font-bold text-violet-600 uppercase tracking-wider mb-1.5">Quick Trick</p>
                <div className="flex items-start gap-2">
                  <span className="flex-shrink-0 mt-1 rounded-md bg-violet-600/10 dark:bg-violet-400/15 text-violet-600 dark:text-violet-400 text-xs font-bold px-2 py-0.5">{answerLabel}</span>
                  <div className="flex-1 min-w-0"><MathRenderer text={question.answer.trickMethod} className="answer-body"/></div>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <div className="answer-actions"><ReadAloud text={question.answer.trickMethod} size="sm"/><CopyBtn text={question.answer.trickMethod}/></div>
                  <ReportFlag reportedContent={question.answer.trickMethod} onGuestBlock={onUnlock} />
                </div>
                <ThumbsRating subject={subjectSlug} chapterNumber={chapterNumber} exerciseLabel={exerciseLabel} itemKey={`${exerciseId}-${question.id}-trick`} />
              </div>
            )}

            <AIFollowUp context={ctx} subject={subjectSlug} chapterNumber={chapterNumber} exerciseLabel={exerciseLabel} itemKey={`${exerciseId}-${question.id}`} onGuestBlock={onUnlock}/>
          </>
        )}
      </div>
    </div>
  );
}

interface PageProps { classSlug:string; subjectSlug:string; bookSlug:string; chapterCode:string; chapterSlug:string; }

export default function ChapterPage({ classSlug, subjectSlug, bookSlug, chapterCode, chapterSlug }: PageProps) {
  const subject   = getSubject(subjectSlug, bookSlug);
  const chapter   = subject?.chapters.find(c=>c.slug===chapterSlug);
  const isMaths   = subjectSlug === 'maths' || subjectSlug === 'advanced-maths';
  const [selEx, setSelEx]   = useState<string>('all');
  const [guestBlocked, setGuestBlocked] = useState(false);
  const [authModal, setAuthModal]       = useState<'login'|'signup'|null>(null);
  const { isGuest } = useAuthStore();
  const viewCounted = useRef(false); // ensures we count exactly once per page load

  useEffect(() => {
    // Only run once, and only when we know auth state is settled (isGuest is true)
    if (isGuest && !viewCounted.current) {
      viewCounted.current = true;
      incrementSolutionView();               // increment FIRST
      setGuestBlocked(hasReachedGuestLimit()); // THEN check — blocks on 3rd visit
    }
    // If user is logged in (not guest), never block
    if (!isGuest) {
      setGuestBlocked(false);
    }
  }, [isGuest]);

  function downloadPDF() {
    if (!subject || !chapter) return;
    const exercises = selEx==='all' ? chapter.exercises : chapter.exercises.filter(e=>e.id===selEx);
    const html = `<html><head><title>Ch${chapter.number} ${chapter.title} Solutions</title>
    <style>body{font-family:Georgia,serif;max-width:720px;margin:0 auto;padding:24px;font-size:13px;line-height:1.8}
    h1{font-size:20px;border-bottom:2px solid #1d4ed8;padding-bottom:8px}h2{font-size:15px;color:#1d4ed8;margin-top:20px}
    .q{margin:14px 0;padding:12px;border-left:3px solid #1d4ed8;background:#f7f8fc;border-radius:0 8px 8px 0}
    .footer{position:fixed;bottom:0;left:0;right:0;background:#fff;padding:8px 24px;font-size:10px;color:#6b7280;border-top:1px solid #dde3f0;text-align:center}
    @media print{body{padding-bottom:40px}}</style></head><body>
    <h1>Chapter ${chapter.number}: ${chapter.title}</h1>
    <p style="color:#6b7280;font-size:12px;margin-bottom:20px">Class 9 ${subject.name} · ${subject.book} · NCERT 2026 Revised Syllabus</p>
    ${exercises.map(ex=>`<h2>${ex.title}</h2>${ex.questions.map(q=>`<div class="q"><p><strong>Q${q.number}.</strong> ${q.text.replace(/\$[^$]+\$/g,'[math]')}</p>${q.parts?'<ol>'+q.parts.map(p=>`<li>${p}</li>`).join('')+'</ol>':''}<p><strong>Answer Key:</strong> ${q.answer.answerKey.replace(/\$[^$]+\$/g,'[math]').replace(/\*\*/g,'')}</p><p><strong>Solution:</strong> ${q.answer.schoolMethod.replace(/\$[^$]+\$/g,'[math]').replace(/\*\*/g,'')}</p></div>`).join('')}`).join('')}
    <div class="footer">SolveNCERT — Powered by NDe · formerly NOVEXA | solvencert · NCERT 2026 Revised Syllabus</div></body></html>`;
    savePdf(html, `class-9-${subject.slug}-${chapter.code}-${selEx === 'all' ? 'all-exercises' : selEx}-solutions.pdf`);
  }

  function downloadAnswerKeys() {
    if (!subject || !chapter) return;
    const exercises = selEx==='all' ? chapter.exercises : chapter.exercises.filter(e=>e.id===selEx);
    const html = `<html><head><title>Ch${chapter.number} ${chapter.title} — Answer Keys</title>
    <style>body{font-family:Georgia,serif;max-width:720px;margin:0 auto;padding:24px;font-size:13px;line-height:1.8}
    h1{font-size:20px;border-bottom:2px solid #1d4ed8;padding-bottom:8px}h2{font-size:15px;color:#1d4ed8;margin-top:20px}
    .q{margin:10px 0;padding:10px;border-left:3px solid #1d4ed8;background:#f7f8fc;border-radius:0 8px 8px 0}
    .footer{position:fixed;bottom:0;left:0;right:0;background:#fff;padding:8px 24px;font-size:10px;color:#6b7280;border-top:1px solid #dde3f0;text-align:center}
    @media print{body{padding-bottom:40px}}</style></head><body>
    <h1>Chapter ${chapter.number}: ${chapter.title} — Answer Keys</h1>
    <p style="color:#6b7280;font-size:12px;margin-bottom:20px">Class 9 ${subject.name} · ${subject.book} · Quick-reference answer keys only · NCERT 2026 Revised Syllabus</p>
    ${exercises.map(ex=>`<h2>${ex.title}</h2>${ex.questions.map(q=>`<div class="q"><p><strong>Q${q.number}.</strong> ${q.answer.answerKey.replace(/\$[^$]+\$/g,'[math]').replace(/\*\*/g,'')}</p></div>`).join('')}`).join('')}
    <div class="footer">SolveNCERT — Powered by NDe · formerly NOVEXA | solvencert · NCERT 2026 Revised Syllabus</div></body></html>`;
    savePdf(html, `class-9-${subject.slug}-${chapter.code}-${selEx === 'all' ? 'all-exercises' : selEx}-answer-keys.pdf`);
  }

  if (!subject || !chapter) return (
    <Layout title="Chapter Not Found | SolveNCERT" description="The requested chapter could not be found. Browse all NCERT solutions for Class 9.">
      <div className="max-w-screen-md mx-auto px-6 py-20 text-center">
        <p className="text-[var(--text-muted)]">Chapter not found.</p>
        <Link href="/answers" className="btn-primary mt-4 inline-flex">Browse Answers</Link>
      </div>
    </Layout>
  );

  const exercises = selEx==='all' ? chapter.exercises : chapter.exercises.filter(e=>e.id===selEx);

  const BASE = 'https://solvencert-novexa.vercel.app';
  const chapterUrl = `${BASE}/${classSlug}/${subjectSlug}/${bookSlug}/${chapterCode}/${chapterSlug}`;

  // BreadcrumbList schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home',             item: BASE },
      { '@type': 'ListItem', position: 2, name: 'NCERT Solutions',  item: `${BASE}/answers` },
      { '@type': 'ListItem', position: 3, name: `Class 9 ${subject.name}`, item: `${BASE}/class-9/${subjectSlug}/${bookSlug}` },
      { '@type': 'ListItem', position: 4, name: chapter.title,      item: chapterUrl },
    ],
  };

  // QAPage schema — first exercise, first question as the primary Q&A
  // Google requires answerCount on Question, plus text/author/datePublished on
  // both the Question and its acceptedAnswer (Search Console Q&A report).
  const CONTENT_PUBLISHED = '2026-08-26';
  const plain = (s: string) => s.replace(/\$[^$]+\$/g, '[math]').replace(/\*\*/g, '').replace(/<[^>]+>/g, '').trim();
  const firstQ = chapter.exercises[0]?.questions[0];
  const qaAuthor = { '@type': 'Organization', name: 'SolveNCERT', url: BASE };
  const qaSchema = firstQ ? {
    '@context': 'https://schema.org',
    '@type': 'QAPage',
    name: `${chapter.title} — Class 9 ${subject.name} NCERT Solutions`,
    url: chapterUrl,
    datePublished: CONTENT_PUBLISHED,
    dateModified: CONTENT_PUBLISHED,
    mainEntity: {
      '@type': 'Question',
      name: plain(firstQ.text),
      text: plain(firstQ.text),
      answerCount: 1,
      author: qaAuthor,
      datePublished: CONTENT_PUBLISHED,
      acceptedAnswer: {
        '@type': 'Answer',
        text: plain(`${firstQ.answer.answerKey}\n\n${firstQ.answer.schoolMethod}`),
        url: chapterUrl,
        author: qaAuthor,
        datePublished: CONTENT_PUBLISHED,
        upvoteCount: 1,
      },
    },
  } : null;

  const schemas = qaSchema ? [breadcrumbSchema, qaSchema] : [breadcrumbSchema];

  // Employability Skills has no printed chapter code in the book (no QR code page) —
  // its `code` field is a synthetic routing id only, never shown to the user.
  // Advanced Mathematics and Advanced Science have no chapter codes at all by design.
  // Hindi R3 (Reva) and Sanskrit R3 (Iravati) adopt the same pattern — codes are
  // synthetic routing ids and are never shown to the user.
  const hasRealCode = subject.id !== 'it-part-a' && subject.id !== 'advanced-maths' && subject.id !== 'advanced-science' && subject.id !== 'hindi-reva' && subject.id !== 'sanskrit-reva';

  const subjectBg = getSubjectBackground(subject.id, chapter.number);

  return (
    <Layout
      title={hasRealCode
        ? `${chapter.title} — ${chapter.code.toUpperCase()} | Class 9 ${subject.name} NCERT Solutions`
        : `${chapter.title} | Class 9 ${subject.name} NCERT Solutions`}
      description={hasRealCode
        ? `NCERT Solutions for Class 9 ${subject.name} Chapter ${chapter.number} (${chapter.code.toUpperCase()}): ${chapter.title}. Step-by-step answers as per CBSE 2026 Revised Syllabus (${subject.book}).`
        : `NCERT Solutions for Class 9 ${subject.name} Chapter ${chapter.number}: ${chapter.title}. Step-by-step answers as per CBSE 2026 Revised Syllabus (${subject.book}).`}
      canonical={`/${classSlug}/${subjectSlug}/${bookSlug}/${chapterCode}/${chapterSlug}`}
      ogType="article"
      schema={schemas}
      bgImage={subjectBg}
      keywords={hasRealCode ? `${chapter.code.toUpperCase()}, ${chapter.code}, class 9 ${subject.name} NCERT solutions, ${subject.book} chapter ${chapter.number}, ${chapter.title} solutions, CBSE 2026` : undefined}
    >
      {/* Breadcrumb */}
      <div className="sticky top-14 z-30 bg-[var(--surface-0)]/95 backdrop-blur-md border-b border-[var(--border)]">
        <div className="max-w-screen-lg mx-auto px-4 md:px-6 py-2.5 flex items-center gap-1.5 text-xs text-[var(--text-muted)] overflow-x-auto scrollbar-hide whitespace-nowrap">
          <Link href="/" className="hover:text-blue-500 flex items-center gap-1 flex-shrink-0"><Home size={11}/>Home</Link>
          <ChevronRight size={10} className="flex-shrink-0"/>
          <Link href="/answers" className="hover:text-blue-500 flex-shrink-0">Solutions</Link>
          <ChevronRight size={10} className="flex-shrink-0"/>
          <Link href={`/${classSlug}/${subjectSlug}/${bookSlug}`} className="hover:text-blue-500 flex-shrink-0 capitalize">{subject.name}</Link>
          <ChevronRight size={10} className="flex-shrink-0"/>
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
                {subject.chapters.map((ch, i) => {
                  const branch = subjectSlug === 'sst' ? sstBranch(ch.number) : null;
                  const prevBranch = subjectSlug === 'sst' && i > 0 ? sstBranch(subject.chapters[i-1].number) : null;
                  return (
                    <React.Fragment key={ch.slug}>
                      {branch && branch !== prevBranch && (
                        <p className="text-[9px] font-bold uppercase tracking-widest text-blue-500/80 dark:text-blue-400/70 mt-2 first:mt-0 px-2.5 pt-1">{branch}</p>
                      )}
                      <Link href={`/${classSlug}/${subjectSlug}/${bookSlug}/${ch.code}/${ch.slug}`}
                        className={cn('flex items-center gap-2 px-2.5 py-2 rounded-lg text-xs transition-colors',
                          ch.slug===chapterSlug ? 'bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 font-semibold' : 'text-[var(--text-muted)] hover:bg-[var(--surface-1)]')}>
                        <span className="w-5 h-5 rounded bg-[var(--surface-2)] text-[10px] font-bold flex items-center justify-center flex-shrink-0">{ch.number}</span>
                        <span className="truncate leading-tight">{ch.title}</span>
                      </Link>
                    </React.Fragment>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* Main */}
          <main className="flex-1 min-w-0">
            <div className="mb-6 page-intro p-6 rounded-[2rem] border border-[var(--border)]">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="px-2.5 py-1 rounded-full bg-blue-100 dark:bg-blue-950/30 text-blue-700 dark:text-blue-300 text-xs font-bold">Class 9 · {subject.name}</span>
                <span className="badge-2026">NCERT 2026 Revised Syllabus</span>
              </div>
              <h1 className="text-2xl md:text-3xl font-display font-bold text-[var(--text-primary)] leading-tight">Chapter {chapter.number}: {chapter.title} {hasRealCode && <span className="text-lg md:text-xl font-normal text-[var(--text-muted)]">({chapter.code.toUpperCase()})</span>}</h1>
              <p className="text-sm text-[var(--text-muted)] mt-2">{subject.book}</p>
              {chapter.description && (
                <p className="text-sm text-[var(--text-secondary)] mt-4 leading-relaxed"><MathRenderer text={chapter.description} /></p>
              )}
              {hasRealCode && (
                <p className="text-xs text-[var(--text-muted)] mt-4">Chapter code: <span className="font-mono font-semibold text-[var(--text-secondary)]">{chapter.code}</span> · Book: {subject.book} · Class 9 {subject.name}</p>
              )}
              <p className="text-sm text-[var(--text-secondary)] mt-3 leading-relaxed">Find complete NCERT solutions for Class 9 {subject.name}, {subject.book} Chapter {chapter.number}. Every question has a clear, step-by-step answer{hasRealCode ? ` for chapter code ${chapter.code.toUpperCase()}` : ''}.</p>
            </div>

            {/* Exercise selector + download */}
            {chapter.exercises.length > 0 && (
              <div className="mb-5">
                {chapter.exercises.length > 1 && (
                  <div className="mb-3">
                    <span className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider">Jump to:</span>
                    <div className="section-nav mt-2">
                      <button onClick={()=>setSelEx('all')} className={cn('method-tab section-nav-button text-xs',selEx==='all'?'method-tab-active':'method-tab-inactive')}>All Exercises</button>
                      {chapter.exercises.map(ex=>(
                        <button key={ex.id} onClick={()=>setSelEx(ex.id)} className={cn('method-tab section-nav-button text-xs',selEx===ex.id?'method-tab-active':'method-tab-inactive')}>{ex.title}</button>
                      ))}
                    </div>
                  </div>
                )}
                <div className="flex items-center gap-2 flex-wrap justify-end">
                  <button onClick={downloadAnswerKeys} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--surface-2)] hover:bg-[var(--surface-3)] text-[var(--text-secondary)] text-xs font-semibold border border-[var(--border)]">
                    <Download size={13}/> Download Answer Keys
                  </button>
                  <button onClick={downloadPDF} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--surface-2)] hover:bg-[var(--surface-3)] text-[var(--text-secondary)] text-xs font-semibold border border-[var(--border)]">
                    <Download size={13}/> Download Solutions PDF
                  </button>
                </div>
              </div>
            )}

            {chapter.exercises.length === 0 ? (
              <div className="card p-10 text-center">
                <BookOpen size={32} className="mx-auto text-blue-300 mb-3"/>
                <p className="font-semibold text-[var(--text-primary)] mb-1">Solutions Coming Soon</p>
                <p className="text-sm text-[var(--text-muted)]">Human-verified solutions are being prepared.</p>
              </div>
            ) : (
              exercises.map(exercise=>(
                <div key={exercise.id} className="mb-8" id={exercise.id}>
                  {/* H2 for SEO */}
                  <h2 className="text-base font-display font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                    <BookOpen size={15} className="text-blue-500"/>
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
              ))
            )}

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
            questions={exercises.flatMap(ex => ex.questions.map(q => ({ id: `${ex.id}-${q.id}`, number: q.number, section: ex.title })))}
            label={selEx === 'all' ? 'Questions' : (chapter.exercises.find(e=>e.id===selEx)?.title || 'Questions')}
          />
        </div>
      </div>

      <BackToTop/>
      {authModal && <AuthModal mode={authModal} onClose={()=>setAuthModal(null)} onSwitch={m=>setAuthModal(m)}/>}
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths: {params:Record<string,string>}[] = [];
  // English (Kaveri), Science (Exploration) and Maths (Ganita Manjari) have
  // dedicated legacy chapter pages (pages/class-9/*), so skip them here to
  // avoid conflicting paths.
  for (const subject of CLASS_9_SUBJECTS) {
    if (subject.slug === 'english' || subject.slug === 'science' || subject.slug === 'maths') continue;
    for (const chapter of subject.chapters) {
      paths.push({ params:{ classSlug:'class-9', subjectSlug:subject.slug, bookSlug:subject.bookSlug, chapterCode:chapter.code, chapterSlug:chapter.slug }});
    }
  }
  return { paths, fallback:'blocking' };
};
export const getStaticProps: GetStaticProps = async ({ params }) => ({ props:params||{}, revalidate:3600 });
