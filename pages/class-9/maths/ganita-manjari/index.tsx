import React from 'react';
import Link from 'next/link';
import { ChevronRight, BookOpen, CheckCircle2 } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { MATHS_SOURCE_CHAPTERS } from '@/lib/content-maths-source';
import { MATHS_PART2_CHAPTERS } from '@/lib/content-maths-part2';

interface MergedChapter { number: number; code: string; slug: string; title: string; qCount: number; exCount: number; }

const PART1_CHAPTERS: MergedChapter[] = MATHS_SOURCE_CHAPTERS.map(ch => ({
  number: ch.number, code: ch.code, slug: ch.slug, title: ch.title, exCount: ch.exercises.length,
  qCount: ch.exercises.reduce((a, ex) => a + ex.questions.length, 0),
}));

const PART2_CHAPTERS: MergedChapter[] = MATHS_PART2_CHAPTERS.map(ch => ({
  number: ch.number, code: ch.code, slug: ch.slug, title: ch.title, exCount: ch.exercises.length,
  qCount: ch.exercises.reduce((a, ex) => a + ex.questions.length, 0),
}));

const TOTAL_EX = PART1_CHAPTERS.reduce((a, c) => a + c.exCount, 0) + PART2_CHAPTERS.reduce((a, c) => a + c.exCount, 0);
const TOTAL_Q = PART1_CHAPTERS.reduce((a, c) => a + c.qCount, 0) + PART2_CHAPTERS.reduce((a, c) => a + c.qCount, 0);
const TOTAL_CH = PART1_CHAPTERS.length + PART2_CHAPTERS.length;

function PartLabel({ part, from, to }: { part: 'I' | 'II'; from: number; to: number }) {
  return (
    <div id={part === 'II' ? 'part-2' : undefined} className="scroll-mt-24 flex items-center gap-3 pt-2">
      <span className="px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-500 dark:text-blue-300 text-[10px] font-bold uppercase tracking-[0.18em] flex-shrink-0">
        Part {part} · Ch {from}–{to}
      </span>
      <div className="h-px flex-1 bg-[var(--border)]" />
    </div>
  );
}

function ChapterCard({ chapter }: { chapter: MergedChapter }) {
  return (
    <Link key={chapter.code} href={`/class-9/maths/ganita-manjari/${chapter.code}/${chapter.slug}`}
      className="card p-4 flex items-center gap-4 hover:border-blue-300 transition-colors block">
      <span className="w-10 h-10 rounded-xl bg-blue-500/15 text-blue-400 flex items-center justify-center flex-shrink-0 font-display font-bold text-sm">
        {chapter.number}
      </span>
      <div className="flex-1 min-w-0">
        <p className="text-[10px] text-[var(--text-muted)] uppercase tracking-wide">Chapter {chapter.number} · {chapter.exCount} exercises</p>
        <p className="text-sm font-semibold text-[var(--text-primary)] leading-snug">{chapter.title}</p>
      </div>
      <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-medium text-[var(--text-muted)] flex-shrink-0">
        <CheckCircle2 size={12} className="text-green-500" /> {chapter.qCount} questions
      </span>
      <ChevronRight size={16} className="text-[var(--text-muted)] flex-shrink-0" />
    </Link>
  );
}

export default function MathsBookIndexPage() {
  return (
    <Layout
      title="Class 9 Maths NCERT Solutions — Ganita Manjari"
      description={`Complete NCERT solutions for Class 9 Maths (Ganita Manjari Part I & II). All ${TOTAL_CH} chapters — every exercise with step-by-step notebook-style solutions, diagrams and boxed answers. NCERT 2026 Revised Syllabus.`}
      canonical="/class-9/maths/ganita-manjari"
      schema={{
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home',            item: 'https://solvencert-novexa.vercel.app' },
          { '@type': 'ListItem', position: 2, name: 'NCERT Solutions', item: 'https://solvencert-novexa.vercel.app/answers' },
          { '@type': 'ListItem', position: 3, name: 'Class 9 Maths',   item: 'https://solvencert-novexa.vercel.app/class-9/maths/ganita-manjari' },
        ],
      }}
    >
      <div className="max-w-screen-lg mx-auto px-6 py-10">
        <nav className="flex items-center gap-1.5 text-xs text-[var(--text-muted)] mb-6 flex-wrap">
          <Link href="/" className="hover:text-blue-500">Home</Link>
          <ChevronRight size={12} />
          <Link href="/answers" className="hover:text-blue-500">NCERT Solutions</Link>
          <ChevronRight size={12} />
          <span className="text-[var(--text-secondary)] font-medium">Class 9 Maths (Ganita Manjari)</span>
        </nav>

        <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-500/10 to-indigo-500/5 mb-8 border border-[var(--border)]">
          <div className="flex items-center gap-4 flex-wrap justify-between">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/15 to-indigo-600/10 border border-blue-500/30 flex items-center justify-center shadow-soft">
                <BookOpen size={26} className="text-blue-400" />
              </div>
              <div>
                <span className="badge-2026 mb-1 inline-flex">NCERT 2026 Revised Syllabus</span>
                <h1 className="text-2xl font-display font-bold text-[var(--text-primary)]">Class 9 Maths</h1>
                <p className="text-sm text-[var(--text-muted)]">Ganita Manjari · Parts I & II · {TOTAL_CH} Chapters · {TOTAL_EX} Exercises · {TOTAL_Q} Questions</p>
              </div>
            </div>
            {PART2_CHAPTERS.length > 0 && (
              <div className="flex items-center gap-2">
                <a href="#part-2" className="px-3 py-1.5 rounded-lg text-xs font-semibold text-blue-500 border border-blue-500/30 hover:bg-blue-500/10 transition-colors">
                  Jump to Part II ↓
                </a>
              </div>
            )}
          </div>
        </div>

        <div className="space-y-3">
          <PartLabel part="I" from={1} to={PART1_CHAPTERS.length} />
          {PART1_CHAPTERS.map(chapter => <ChapterCard key={chapter.code} chapter={chapter} />)}

          {PART2_CHAPTERS.length > 0 && (
            <>
              <PartLabel part="II" from={PART2_CHAPTERS[0].number} to={PART2_CHAPTERS[PART2_CHAPTERS.length - 1].number} />
              {PART2_CHAPTERS.map(chapter => <ChapterCard key={chapter.code} chapter={chapter} />)}
            </>
          )}
        </div>
      </div>
    </Layout>
  );
}
