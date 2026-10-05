import React from 'react';
import Link from 'next/link';
import { GetStaticPaths, GetStaticProps } from 'next';
import { ChevronRight, BookOpen } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { CLASS_9_SUBJECTS, getSubject } from '@/lib/content';
import { cn } from '@/utils/helpers';

const COLOR_HEADER: Record<string, string> = {
  blue:   'from-blue-500/10 to-indigo-500/5',
  green:  'from-green-500/10 to-emerald-500/5',
  purple: 'from-purple-500/10 to-violet-500/5',
  orange: 'from-orange-500/10 to-amber-500/5',
  teal:   'from-teal-500/10 to-cyan-500/5',
  red:    'from-red-500/10 to-rose-500/5',
  indigo: 'from-indigo-500/10 to-blue-500/5',
};

interface Props { classSlug: string; subjectSlug: string; bookSlug: string; }

export default function BookIndexPage({ classSlug, subjectSlug, bookSlug }: Props) {
  const subject = getSubject(subjectSlug, bookSlug);
  // Make sure the bookSlug matches this subject
  if (!subject || subject.bookSlug !== bookSlug) return null;

  const isComingSoon = subject.chapters.length === 0;

  return (
    <Layout
      title={isComingSoon
        ? `Class 9 ${subject.name} NCERT Solutions — ${subject.book} (Coming Soon)`
        : `Class 9 ${subject.name} NCERT Solutions — ${subject.book}`}
      description={isComingSoon
        ? `NCERT solutions for Class 9 ${subject.name} (${subject.book}) are being prepared and will be published soon — NCERT 2026 Revised Syllabus.`
        : `Complete NCERT solutions for Class 9 ${subject.name} (${subject.book}). All ${subject.chapters.length} chapters covered — NCERT 2026 Revised Syllabus.`}
      canonical={`/${classSlug}/${subjectSlug}/${bookSlug}`}
      schema={{
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home',            item: 'https://solvencert-novexa.vercel.app' },
          { '@type': 'ListItem', position: 2, name: 'NCERT Solutions', item: 'https://solvencert-novexa.vercel.app/answers' },
          { '@type': 'ListItem', position: 3, name: `Class 9 ${subject.name}`, item: `https://solvencert-novexa.vercel.app/${classSlug}/${subjectSlug}/${bookSlug}` },
        ],
      }}
    >
      <div className="max-w-screen-lg mx-auto px-6 py-10">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-xs text-[var(--text-muted)] mb-6">
          <Link href="/" className="hover:text-blue-500">Home</Link>
          <ChevronRight size={12} />
          <Link href="/answers" className="hover:text-blue-500">NCERT Solutions</Link>
          <ChevronRight size={12} />
          <Link href={`/${classSlug}/${subjectSlug}`} className="hover:text-blue-500 capitalize">{subject.name}</Link>
          <ChevronRight size={12} />
          <span className="text-[var(--text-secondary)] font-medium">{subject.book}</span>
        </nav>

        {/* Header */}
        <div className={cn('page-intro p-8 rounded-[2rem] bg-gradient-to-br mb-8 border border-[var(--border)]', COLOR_HEADER[subject.color])}>
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[var(--surface-2)] flex items-center justify-center text-3xl shadow-soft">
              {subject.icon}
            </div>
            <div>
              <span className="badge-2026 mb-1 inline-flex">NCERT 2026 Revised Syllabus</span>
              <h1 className="text-2xl font-display font-bold text-[var(--text-primary)]">Class 9 {subject.name}</h1>
              <p className="text-sm text-[var(--text-muted)]">{subject.book} · {isComingSoon ? 'Coming soon' : `${subject.chapters.length} Chapters`}</p>
            </div>
          </div>
        </div>

        {/* Chapter list */}
        {isComingSoon ? (
          <div className="card p-10 text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/15 to-violet-600/10 border border-blue-500/30 mb-4">
              <BookOpen size={24} className="text-blue-400" />
            </div>
            <p className="font-semibold text-[var(--text-primary)] mb-1">Coming Soon</p>
            <p className="text-sm text-[var(--text-muted)]">Solutions for {subject.book} are being prepared and will be added soon.</p>
          </div>
        ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {subject.chapters.map(chapter => (
            <div key={chapter.id} className={`card section-panel flex items-center gap-3 hover:scale-[1.01] active:scale-[0.99] transition-transform ${subjectSlug === 'hindi' || subjectSlug === 'sanskrit' ? 'p-4 min-h-[64px]' : 'p-4'}`}>
              <Link
                href={`/${classSlug}/${subjectSlug}/${bookSlug}/${chapter.code}/${chapter.slug}`}
                className="flex items-center gap-3 flex-1 min-w-0"
              >
                <span className="w-8 h-8 rounded-lg bg-[var(--surface-2)] text-sm font-bold text-[var(--text-secondary)] flex items-center justify-center flex-shrink-0">
                  {chapter.number}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-[var(--text-primary)] truncate">{chapter.title}</p>
                  <p className="text-xs text-[var(--text-muted)]">
                    {chapter.exercises.length > 0
                      ? `${chapter.exercises.reduce((a, ex) => a + ex.questions.length, 0)} questions`
                      : 'View solutions'}
                  </p>
                </div>
              </Link>
              <ChevronRight size={14} className="text-[var(--text-muted)] flex-shrink-0" />
            </div>
          ))}
        </div>
        )}
      </div>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: CLASS_9_SUBJECTS
    // English (Kaveri) and Maths (Ganita Manjari Part I) have dedicated book index
    // pages (pages/class-9/*), so skip those books here to avoid conflicting
    // static paths. Other books of the same subject (Ganita Manjari Part II) are
    // still generated here.
    .filter(s => s.bookSlug !== 'kaveri' && s.bookSlug !== 'ganita-manjari')
    .map(s => ({
    params: { classSlug: 'class-9', subjectSlug: s.slug, bookSlug: s.bookSlug },
  })),
  fallback: false,
});

export const getStaticProps: GetStaticProps = async ({ params }) => ({
  props: params || {},
});
