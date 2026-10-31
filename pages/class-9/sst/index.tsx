import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home, BookOpen, Waves } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import BetaBadge from '@/components/features/BetaBadge';
import { CLASS_9_SUBJECTS } from '@/lib/content';

export default function SstLandingPage() {
  const part1 = CLASS_9_SUBJECTS.find(s => s.id === 'sst');
  const part2 = CLASS_9_SUBJECTS.find(s => s.id === 'sst-part-2');

  return (
    <Layout
      title="Class 9 Social Science NCERT Solutions — Understanding Society Part I & Part II"
      description="Class 9 Social Science NCERT solutions — Understanding Society: India and Beyond Part I (9 chapters) and Part II (6 chapters). NCERT 2026 Revised Syllabus."
      canonical="/class-9/sst"
    >
      <div className="max-w-screen-sm mx-auto px-6 py-10">
        <nav className="flex items-center gap-1.5 text-xs text-[var(--text-muted)] mb-6">
          <Link href="/" className="hover:text-blue-500 flex items-center gap-1"><Home size={11} />Home</Link>
          <ChevronRight size={12} />
          <span className="text-[var(--text-secondary)] font-medium">Class 9 Social Science</span>
        </nav>

        <span className="badge-2026 mb-2 inline-flex">NCERT 2026 Revised Syllabus</span>
        <h1 className="text-2xl font-display font-bold text-[var(--text-primary)] mb-1">Class 9 Social Science</h1>
        <p className="text-sm text-[var(--text-muted)] mb-8">Choose a part to continue</p>

        <div className="space-y-4">
          <Link
            href={`/class-9/sst/${part1?.bookSlug}`}
            className="card p-6 flex items-center gap-4 border-2 border-indigo-200 dark:border-indigo-800 hover:border-indigo-500 hover:bg-indigo-50/50 dark:hover:bg-indigo-950/20 transition-colors block shadow-sm"
          >
            <span className="w-12 h-12 rounded-2xl bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-300 flex items-center justify-center flex-shrink-0 text-xl">
              <BookOpen size={22} />
            </span>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-[var(--text-muted)] uppercase tracking-wide">Part I</p>
              <p className="font-display font-bold text-[var(--text-primary)]">Understanding Society — India and Beyond</p>
              <p className="text-xs text-[var(--text-muted)] mt-0.5">{part1?.chapters.length} chapters · Geography, History, Civics, Economics</p>
            </div>
            <ChevronRight size={18} className="text-[var(--text-muted)] flex-shrink-0" />
          </Link>

          <Link
            href={`/class-9/sst/${part2?.bookSlug}`}
            className="card p-6 flex items-center gap-4 border-2 border-indigo-200 dark:border-indigo-800 hover:border-indigo-500 hover:bg-indigo-50/50 dark:hover:bg-indigo-950/20 transition-colors block shadow-sm"
          >
            <span className="w-12 h-12 rounded-2xl bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-300 flex items-center justify-center flex-shrink-0 text-xl">
              <Waves size={22} />
            </span>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-[var(--text-muted)] uppercase tracking-wide flex items-center gap-2">Part II <BetaBadge /></p>
              <p className="font-display font-bold text-[var(--text-primary)]">Understanding Society Part II</p>
              <p className="text-xs text-[var(--text-muted)] mt-0.5">{part2?.chapters.length} chapters · Oceans, Life on Earth, History, Civics, Economics</p>
            </div>
            <ChevronRight size={18} className="text-[var(--text-muted)] flex-shrink-0" />
          </Link>
        </div>
      </div>
    </Layout>
  );
}
