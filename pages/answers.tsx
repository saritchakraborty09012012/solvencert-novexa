import React from 'react';
import Link from 'next/link';
import { BookOpen, ChevronRight } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { CLASS_9_SUBJECTS } from '@/lib/content';
import { cn } from '@/utils/helpers';

const BG: Record<string,string> = {
  blue:   'bg-blue-50 dark:bg-blue-950/30 border-blue-100 dark:border-blue-900/50',
  green:  'bg-green-50 dark:bg-green-950/30 border-green-100 dark:border-green-900/50',
  purple: 'bg-purple-50 dark:bg-purple-950/30 border-purple-100 dark:border-purple-900/50',
  orange: 'bg-orange-50 dark:bg-orange-950/30 border-orange-100 dark:border-orange-900/50',
  teal:   'bg-teal-50 dark:bg-teal-950/30 border-teal-100 dark:border-teal-900/50',
  red:    'bg-red-50 dark:bg-red-950/30 border-red-100 dark:border-red-900/50',
  indigo: 'bg-indigo-50 dark:bg-indigo-950/30 border-indigo-100 dark:border-indigo-900/50',
};
const TEXT: Record<string,string> = {
  blue:'text-blue-600 dark:text-blue-400', green:'text-green-600 dark:text-green-400',
  purple:'text-purple-600 dark:text-purple-400', orange:'text-orange-600 dark:text-orange-400',
  teal:'text-teal-600 dark:text-teal-400',
  red:'text-red-600 dark:text-red-400',
  indigo:'text-indigo-600 dark:text-indigo-400',
};

function chapterUrl(subject: typeof CLASS_9_SUBJECTS[0], chapter: typeof CLASS_9_SUBJECTS[0]['chapters'][0]) {
  if (subject.slug === 'english') return `/class-9/english/kaveri/${chapter.code}/${chapter.slug}`;
  if (subject.slug === 'science') return `/class-9/science/exploration/${chapter.code}/${chapter.slug}`;
  return `/class-9/${subject.slug}/${subject.bookSlug}/${chapter.code}/${chapter.slug}`;
}

export default function AnswersPage() {
  const subjects = CLASS_9_SUBJECTS.filter(s => s.id !== 'it-part-a' && s.id !== 'sanskrit-sharda' && s.id !== 'hindi' && s.id !== 'maths-part-2');
  const itPartA = CLASS_9_SUBJECTS.find(s => s.id === 'it-part-a');
  const sanskritSharda = CLASS_9_SUBJECTS.find(s => s.id === 'sanskrit-sharda');
  const hindiGanga = CLASS_9_SUBJECTS.find(s => s.id === 'hindi');
  const mathsPart2 = CLASS_9_SUBJECTS.find(s => s.id === 'maths-part-2');

  return (
    <Layout
      title="NCERT Solutions Class 9 — Maths, Science, English | 2026 Revised Syllabus"
      description="Free NCERT Solutions for Class 9 Maths (Ganita Manjari), Science (Exploration) and English (Kaveri) — CBSE 2026 Revised Syllabus. Human-verified, board-pattern answers."
      canonical="/answers"
      schema={{
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home',            item: 'https://solvencert-novexa.vercel.app' },
          { '@type': 'ListItem', position: 2, name: 'NCERT Solutions', item: 'https://solvencert-novexa.vercel.app/answers' },
        ],
      }}
    >
      <div className="max-w-screen-lg mx-auto px-6 py-10">
        <div className="mb-8 page-intro p-6">
          <nav className="flex items-center gap-1.5 text-xs text-[var(--text-muted)] mb-4">
            <Link href="/" className="hover:text-blue-500">Home</Link>
            <ChevronRight size={12}/>
            <span className="text-[var(--text-secondary)] font-medium">NCERT Solutions</span>
          </nav>
          <span className="badge-2026 mb-3 inline-flex">NCERT 2026 Revised Syllabus</span>
          <h1 className="text-3xl font-display font-bold text-[var(--text-primary)] mb-2 mt-2">NCERT Solutions — Class 9</h1>
          <p className="text-sm text-[var(--text-muted)] max-w-lg">Human-verified solutions structured in CBSE exam format. Select a subject to browse all chapters.</p>
          <button onClick={() => window.location.href = '/quizzes'} className="mt-3 text-xs font-medium text-amber-500 hover:text-amber-600 transition-colors">Test yourself with Chapter Quizzes →</button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {subjects.map(subject => (
            <div key={subject.id} className="card overflow-hidden">
              <div className={cn('p-4 border-b border-[var(--border)]', BG[subject.color])}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white dark:bg-black/20 flex items-center justify-center text-xl shadow-sm flex-shrink-0">{subject.icon}</div>
                  <div className="flex-1 min-w-0">
                    <h2 className={cn('font-display font-bold text-base', TEXT[subject.color])}>{subject.id === 'it-part-b' ? 'IT' : subject.id === 'sanskrit-reva' ? 'Sanskrit' : subject.name}</h2>
                    <p className="text-xs text-[var(--text-muted)]">{subject.id === 'it-part-b' ? 'Two parts' : (subject.id === 'maths') ? 'Ganita Manjari · Part I & II' : (subject.id === 'sanskrit-reva' || subject.id === 'hindi-reva') ? 'Two books' : `${subject.book} · ${subject.chapters.length} chapters`}</p>
                  </div>
                  <Link href={`/class-9/${subject.slug}`}
                    className="text-xs text-blue-500 hover:text-blue-600 font-medium flex items-center gap-0.5 flex-shrink-0">
                    All <ChevronRight size={12}/>
                  </Link>
                </div>
              </div>
              <div className="p-2">
                {subject.id === 'it-part-b' ? <>
                  <Link href={`/class-9/it/${itPartA?.bookSlug}`} className="flex items-center gap-2.5 px-3 py-3 rounded-lg border border-teal-200 dark:border-teal-800 hover:bg-teal-50 dark:hover:bg-teal-950/30 transition-colors group">
                    <span className="w-6 h-6 rounded bg-teal-100 dark:bg-teal-900/40 text-[10px] font-bold text-teal-700 dark:text-teal-300 flex items-center justify-center flex-shrink-0">A</span><span className="text-sm text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] flex-1">Part A: Employability Skills</span><ChevronRight size={12} className="text-teal-600 flex-shrink-0" />
                  </Link>
                  <Link href={`/class-9/it/${subject.bookSlug}`} className="mt-2 flex items-center gap-2.5 px-3 py-3 rounded-lg border border-teal-200 dark:border-teal-800 hover:bg-teal-50 dark:hover:bg-teal-950/30 transition-colors group">
                    <span className="w-6 h-6 rounded bg-teal-100 dark:bg-teal-900/40 text-[10px] font-bold text-teal-700 dark:text-teal-300 flex items-center justify-center flex-shrink-0">B</span><span className="text-sm text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] flex-1">Part B: IT Code 402</span><ChevronRight size={12} className="text-teal-600 flex-shrink-0" />
                  </Link>
                </> : subject.id === 'sanskrit-reva' ? <>
                  <Link href={`/class-9/sanskrit/${sanskritSharda?.bookSlug}`} className="flex items-center gap-2.5 px-3 py-3 rounded-lg border border-orange-200 dark:border-orange-800 hover:bg-orange-50 dark:hover:bg-orange-950/30 transition-colors group">
                    <span className="w-6 h-6 rounded bg-orange-100 dark:bg-orange-900/40 text-[10px] font-bold text-orange-700 dark:text-orange-300 flex items-center justify-center flex-shrink-0">R1</span><span className="text-sm text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] flex-1">R1 and R2: Sharda</span><ChevronRight size={12} className="text-orange-600 flex-shrink-0" />
                  </Link>
                  <Link href={`/class-9/sanskrit/${subject.bookSlug}`} className="mt-2 flex items-center gap-2.5 px-3 py-3 rounded-lg border border-orange-200 dark:border-orange-800 hover:bg-orange-50 dark:hover:bg-orange-950/30 transition-colors group">
                    <span className="w-6 h-6 rounded bg-orange-100 dark:bg-orange-900/40 text-[10px] font-bold text-orange-700 dark:text-orange-300 flex items-center justify-center flex-shrink-0">R3</span><span className="text-sm text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] flex-1">R3: Iravati</span><ChevronRight size={12} className="text-orange-600 flex-shrink-0" />
                  </Link>
                </> : subject.id === 'hindi-reva' ? <>
                  <Link href={`/class-9/hindi/${hindiGanga?.bookSlug}`} className="flex items-center gap-2.5 px-3 py-3 rounded-lg border border-red-200 dark:border-red-800 hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors group">
                    <span className="w-6 h-6 rounded bg-red-100 dark:bg-red-900/40 text-[10px] font-bold text-red-700 dark:text-red-300 flex items-center justify-center flex-shrink-0">R1</span><span className="text-sm text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] flex-1">R1 and R2: Ganga</span><ChevronRight size={12} className="text-red-600 flex-shrink-0" />
                  </Link>
                  <Link href={`/class-9/hindi/${subject.bookSlug}`} className="mt-2 flex items-center gap-2.5 px-3 py-3 rounded-lg border border-red-200 dark:border-red-800 hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors group">
                    <span className="w-6 h-6 rounded bg-red-100 dark:bg-red-900/40 text-[10px] font-bold text-red-700 dark:text-red-300 flex items-center justify-center flex-shrink-0">R3</span><span className="text-sm text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] flex-1">R3: Reva</span><ChevronRight size={12} className="text-red-600 flex-shrink-0" />
                  </Link>
                </> : subject.id === 'maths' ? <>
                  {subject.chapters.slice(0, 4).map(ch => (
                    <Link key={ch.id} href={chapterUrl(subject, ch)}
                      className="flex items-center gap-2.5 px-3 py-2 rounded-lg hover:bg-[var(--surface-1)] transition-colors group">
                      <span className="w-6 h-6 rounded bg-[var(--surface-2)] text-[10px] font-bold text-[var(--text-muted)] flex items-center justify-center flex-shrink-0">{ch.number}</span>
                      <span className="text-sm text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] flex-1 truncate transition-colors">{ch.title}</span>
                      <ChevronRight size={12} className="text-[var(--text-muted)] opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"/>
                    </Link>
                  ))}
                  {subject.chapters.length > 4 && (
                    <Link href={`/class-9/${subject.slug}`}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950/30 text-sm font-medium transition-colors mt-1">
                      <BookOpen size={12}/> +{subject.chapters.length - 4} more chapters
                    </Link>
                  )}
                  <Link href={`/class-9/maths/${mathsPart2?.bookSlug}`} className="flex items-center gap-2.5 px-3 py-3 rounded-lg border border-blue-200 dark:border-blue-800 hover:bg-blue-50 dark:hover:bg-blue-950/30 transition-colors group mt-2">
                    <span className="w-6 h-6 rounded bg-blue-100 dark:bg-blue-900/40 text-[10px] font-bold text-blue-700 dark:text-blue-300 flex items-center justify-center flex-shrink-0">II</span><span className="text-sm text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] flex-1">Part II: Ganita Manjari</span>
                    {mathsPart2?.chapters.length === 0
                      ? <span className="text-[10px] font-bold uppercase tracking-wide text-amber-500 flex-shrink-0">Coming Soon</span>
                      : <ChevronRight size={12} className="text-blue-600 flex-shrink-0" />}
                  </Link>
                </> : <>
                {subject.chapters.slice(0, 5).map(ch => (
                  <Link key={ch.id} href={chapterUrl(subject, ch)}
                    className="flex items-center gap-2.5 px-3 py-2 rounded-lg hover:bg-[var(--surface-1)] transition-colors group">
                    <span className="w-6 h-6 rounded bg-[var(--surface-2)] text-[10px] font-bold text-[var(--text-muted)] flex items-center justify-center flex-shrink-0">{ch.number}</span>
                    <span className="text-sm text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] flex-1 truncate transition-colors">{ch.title}</span>
                    <ChevronRight size={12} className="text-[var(--text-muted)] opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"/>
                  </Link>
                ))}
                {subject.chapters.length > 5 && (
                  <Link href={`/class-9/${subject.slug}`}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950/30 text-sm font-medium transition-colors mt-1">
                    <BookOpen size={12}/> +{subject.chapters.length - 5} more chapters
                  </Link>
                )}
                </>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
