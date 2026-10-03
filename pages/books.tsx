import React, { useState, useCallback, useEffect, useRef, useMemo } from 'react';
import Link from 'next/link';
import {
  BookOpen, Download, ChevronRight, CheckCircle, Search,
  ShieldCheck, GraduationCap, Smartphone, BadgeCheck, Heart, Cloud,
  TrendingUp, NotebookText, Languages,
  ScrollText, Sigma, Calculator, FlaskConical, Dna, Laptop, Code2,
  Check, Loader2, ArrowLeft, Globe, Palette,
  FileText, Library, BookMarked, Sparkles, ArrowRight,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { CLASS_9_SUBJECTS, getChapterPdfUrl } from '@/lib/content';
import type { Subject } from '@/lib/content';
import { cn } from '@/utils/helpers';
import { useUIStore } from '@/store/uiStore';
import { BOOK_IMAGES } from '@/lib/book-images';
import toast from 'react-hot-toast';

interface BookCardDef {
  id: string;
  title: string;
  tagline: string;
  desc: string;
  imageKey: string;
  Icon: LucideIcon;
  from: string;
  to: string;
  ring: string;
  size: 'lg' | 'sm';
}

const BOOK_CARDS: BookCardDef[] = [
  { id: 'social-science', title: 'Social Science', tagline: 'Understanding Society India and Beyond', desc: 'Trace the journeys of empires, revolutions, geography, governance and the people who shaped the world \u2014 laid out chapter by chapter for Class 9.', imageKey: 'geography', Icon: Globe, from: '#0e3a4a', to: '#041014', ring: '#5fd0e8', size: 'lg' },
  { id: 'english', title: 'English', tagline: 'Language & Literature', desc: 'Beehive, Moments and the full grammar syllabus \u2014 prose, poetry and every textbook exercise in one download.', imageKey: 'english', Icon: NotebookText, from: '#241a10', to: '#080603', ring: '#e0c98f', size: 'lg' },
  { id: 'hindi', title: 'Hindi', tagline: '\u0915\u094D\u0937\u093F\u0924\u093F\u091C, \u0915\u0943\u0924\u093F\u0915\u093E, \u0935\u093F\u091A\u093E\u0930', desc: '\u0915\u094D\u0937\u093F\u0924\u093F\u091C \u0914\u0930 \u0915\u0943\u0924\u093F\u0915\u093E \u0915\u0940 \u092A\u0942\u0930\u0940 \u092A\u093E\u0920\u094D\u092F\u092A\u0941\u0938\u094D\u0924\u0915 \u2014 \u0917\u0926\u094D\u092F, \u092A\u0926\u094D\u092F \u0914\u0930 \u0935\u094D\u092F\u093E\u0915\u0930\u0923 \u090F\u0915 \u0938\u093E\u0925\u0964', imageKey: 'hindi', Icon: Languages, from: '#3a1610', to: '#0c0503', ring: '#e8a15c', size: 'lg' },
  { id: 'maths', title: 'Mathematics', tagline: 'The Language of Logic', desc: 'Polynomials to probability \u2014 every chapter of the core Class 9 mathematics textbook, fully worked.', imageKey: 'maths', Icon: Calculator, from: '#141a3a', to: '#04050f', ring: '#8fa8ff', size: 'lg' },
  { id: 'adv-maths', title: 'Advanced Mathematics', tagline: 'Think Beyond', desc: 'Extension problems and enrichment sets for students ready to go past the standard curriculum.', imageKey: 'adv-maths', Icon: Sigma, from: '#1c1440', to: '#050310', ring: '#b79dff', size: 'lg' },
  { id: 'science', title: 'Science', tagline: 'The World of Curiosity', desc: 'Matter, cells, motion and more \u2014 the full physics, chemistry and biology syllabus in one place.', imageKey: 'science', Icon: FlaskConical, from: '#0c2436', to: '#03080c', ring: '#6fd0e0', size: 'lg' },
  { id: 'adv-science', title: 'Advanced Science', tagline: 'Explore. Discover. Innovate.', desc: 'Deeper dives and lab-extension material for students building toward Olympiad-level science.', imageKey: 'adv-science', Icon: Dna, from: '#1a1440', to: '#050310', ring: '#9fb8ff', size: 'sm' },
  { id: 'it-part-a', title: 'IT: Part A', tagline: 'Employability Skills', desc: 'Communication, self-management and digital literacy \u2014 the employability skills module.', imageKey: 'it-a', Icon: Laptop, from: '#141c3a', to: '#04060f', ring: '#8fb0ff', size: 'sm' },
  { id: 'it-part-b', title: 'IT: Part B', tagline: 'IT Subject code_402', desc: 'The core Information Technology curriculum under subject code 402, chapter by chapter.', imageKey: 'it-b', Icon: Code2, from: '#101830', to: '#03050c', ring: '#7fa0ff', size: 'sm' },
  { id: 'sanskrit', title: 'Sanskrit', tagline: '\u0938\u0902\u0938\u094D\u0915\u0943\u0924\u092E\u094D, \u0938\u0902\u0938\u094D\u0915\u093E\u0930:, \u0938\u0902\u0938\u094D\u0915\u0943\u0924\u093F:', desc: '\u0936\u0947\u092E\u0941\u0937\u0940 \u092D\u093E\u0917-1 \u0915\u093E \u0938\u092E\u094D\u092A\u0942\u0930\u094D\u0923 \u092A\u093E\u0920\u094D\u092F\u0915\u094D\u0930\u092E \u2014 \u0936\u094D\u0932\u094B\u0915, \u0905\u0928\u0941\u0935\u093E\u0926 \u0914\u0930 \u0935\u094D\u092F\u093E\u0915\u0930\u0923 \u0938\u0939\u093F\u0924\u0964', imageKey: 'sanskrit', Icon: ScrollText, from: '#2c1c0c', to: '#0a0603', ring: '#d4af37', size: 'sm' },
  { id: 'arts', title: 'Arts', tagline: 'Madhurima', desc: 'History of Arts, Theatre, Music, Dance and Visual Arts \u2014 all 17 chapters with complete solutions.', imageKey: 'history', Icon: Palette, from: '#3a2410', to: '#0c0804', ring: '#d4af37', size: 'sm' },
  { id: 'kaushal-vikas', title: 'Kaushal Vikas', tagline: 'Skill Education', desc: 'Agricultural Practices, Rooftop Gardening, Precision Farming and more \u2014 complete skill development.', imageKey: 'economics', Icon: TrendingUp, from: '#2a1c10', to: '#0a0603', ring: '#d4af37', size: 'sm' },
];

const LARGE_BOOKS = BOOK_CARDS.filter(b => b.size === 'lg');
const SMALL_BOOKS = BOOK_CARDS.filter(b => b.size === 'sm');

const FEATURES = [
  { Icon: BookOpen, label: '100% NCERT', sub: 'Official Books' },
  { Icon: Download, label: 'Free to', sub: 'Download' },
  { Icon: ShieldCheck, label: 'Safe, Secure &', sub: 'Easy Access' },
];

const FOOTER_BADGES = [
  { Icon: GraduationCap, label: 'Designed for', sub: 'NCERT 2026 Syllabus' },
  { Icon: Smartphone, label: 'Optimized for', sub: 'All Devices' },
  { Icon: BadgeCheck, label: 'Trusted by', sub: 'Lakhs of Students' },
  { Icon: Cloud, label: 'Easy Downloads', sub: 'Anytime, Anywhere' },
  { Icon: Heart, label: 'Made for Your', sub: 'Better Tomorrow' },
];

function lookupSubject(cardId: string): Subject | undefined {
  if (cardId === 'social-science') return CLASS_9_SUBJECTS.find(s => s.id === 'sst');
  if (cardId === 'hindi') return CLASS_9_SUBJECTS.find(s => s.id === 'hindi');
  if (cardId === 'sanskrit') return CLASS_9_SUBJECTS.find(s => s.id === 'sanskrit-sharda');
  return CLASS_9_SUBJECTS.find(s => s.id === cardId);
}

function lookupSubjectReva(): Subject | undefined {
  return CLASS_9_SUBJECTS.find(s => s.id === 'hindi-reva');
}

function lookupSanskritIravati(): Subject | undefined {
  return CLASS_9_SUBJECTS.find(s => s.id === 'sanskrit-reva');
}

function triggerDownload(url: string, filename: string) {
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

/* ------------------------------------------------------------------ */
/* UI3 Components — Obsidian Gold Theme                                */
/* ------------------------------------------------------------------ */

function UI3BookCard({ card, onOpen }: { card: BookCardDef; onOpen: (c: BookCardDef) => void }) {
  const { Icon, title, tagline, from, to, ring, size, imageKey } = card;
  const isLg = size === 'lg';

  return (
    <button
      type="button"
      onClick={() => onOpen(card)}
      className="group relative flex flex-col overflow-hidden rounded-xl border text-left transition-all duration-300 focus:outline-none focus-visible:ring-2"
      style={{ borderColor: '#d4af3733', boxShadow: '0 6px 18px rgba(0,0,0,0.35)', ['--tw-ring-color']: ring } as React.CSSProperties}
      onMouseEnter={(e) => (e.currentTarget.style.borderColor = ring + 'aa')}
      onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#d4af3733')}
    >
      <div
        className={`relative ${isLg ? 'h-[clamp(8.5rem,22vw,11rem)]' : 'h-[clamp(7rem,18vw,9rem)]'} w-full overflow-hidden`}
        style={{ background: `radial-gradient(120% 120% at 30% 20%, ${from}, ${to})` }}
      >
        <img
          src={BOOK_IMAGES[imageKey]}
          alt={`${title} cover`}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
          draggable={false}
        />
        <div
          className="absolute left-2 top-2 flex h-7 w-7 items-center justify-center rounded-full border backdrop-blur-sm"
          style={{ borderColor: ring + 'aa', background: 'rgba(10,8,4,0.55)' }}
        >
          <Icon size={13} strokeWidth={1.75} color={ring} />
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-black/80 to-transparent" />
      </div>

      <div
        className="min-w-0 border-t px-2.5 pb-2.5 pt-2.5 sm:px-4 sm:pb-3 sm:pt-3"
        style={{ borderColor: '#d4af3722', background: 'linear-gradient(180deg,#100d08,#0b0906)' }}
      >
        <h3 className={`truncate font-serif tracking-wide text-[#f3e6c4] ${isLg ? 'text-[15px] sm:text-lg' : 'text-[13px] sm:text-[15px]'}`}>
          {title}
        </h3>
        <p className={`mt-0.5 line-clamp-2 text-[#c7bda2]/80 ${isLg ? 'text-[11px] sm:text-xs' : 'text-[10px] sm:text-[11px]'} leading-snug`}>
          {tagline}
        </p>
      </div>
    </button>
  );
}

function UI3ChapterList({
  subject,
  onChapterDownload,
  doneChapters,
  onBatchDownload,
  downloadingBook,
}: {
  subject: Subject;
  onChapterDownload: (slug: string, num: number, id?: string) => void;
  doneChapters: Record<string, number[]>;
  onBatchDownload: (s: Subject) => void;
  downloadingBook: string | null;
}) {
  const chapterPdfs = subject.chapters
    .map(c => ({ n: c.number, title: c.title, url: getChapterPdfUrl(subject.slug, c.number, subject.id) }))
    .filter(x => x.url) as { n: number; title: string; url: string }[];
  const done = doneChapters[subject.id] || [];
  const active = downloadingBook === subject.id;

  return (
    <div className="rounded-xl border overflow-hidden" style={{ borderColor: '#d4af3728', background: 'rgba(212,175,55,.035)' }}>
      <div className="flex items-center justify-between gap-3 px-4 py-3 border-b" style={{ borderColor: '#d4af3722' }}>
        <div>
          <h4 className="font-serif text-sm text-[#f3e6c4]">{subject.book}</h4>
          <p className="text-[10px] text-[#8e856f]">{chapterPdfs.length} chapters available</p>
        </div>
        {chapterPdfs.length > 0 && (
          <button
            onClick={() => onBatchDownload(subject)}
            disabled={active}
            className="flex items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-[10px] font-medium transition-colors disabled:opacity-60"
            style={{ borderColor: '#d4af3755', color: '#e8c86a', background: 'rgba(212,175,55,0.06)' }}
          >
            {active ? <Loader2 size={12} className="animate-spin" /> : <Download size={12} />}
            {active ? `${done.length}/${chapterPdfs.length}` : 'Download All'}
          </button>
        )}
      </div>
      {chapterPdfs.length > 0 && (
        <ul className="max-h-72 overflow-y-auto divide-y" style={{ borderColor: '#d4af3715' }}>
          {chapterPdfs.map(ch => {
            const isDone = done.includes(ch.n);
            return (
              <li key={ch.n} className="flex items-center gap-3 px-4 py-2.5">
                <span className={`w-6 h-6 rounded-md text-[10px] font-bold flex items-center justify-center flex-shrink-0 ${isDone ? 'bg-green-900/40 text-green-400' : 'bg-white/5 text-[#8e856f]'}`}>
                  {isDone ? <Check size={11} /> : ch.n}
                </span>
                <span className="flex-1 min-w-0">
                  <span className="block text-xs font-medium text-[#e5dcc3] truncate">Ch {ch.n}: {ch.title}</span>
                </span>
                <button
                  onClick={() => onChapterDownload(subject.slug, ch.n, subject.id)}
                  className="inline-flex items-center gap-1 px-2 py-1 rounded-md text-[10px] font-semibold transition-colors flex-shrink-0"
                  style={{ borderColor: '#d4af3744', color: '#e8c86a', background: 'rgba(212,175,55,0.06)', border: '1px solid' }}
                >
                  <Download size={10} /> PDF
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

function UI3BookDetail({
  card,
  onBack,
  onFullBookDownload,
  onChapterDownload,
  onBatchDownload,
  downloadingBook,
  doneChapters,
}: {
  card: BookCardDef;
  onBack: () => void;
  onFullBookDownload: (s: Subject) => void;
  onChapterDownload: (slug: string, num: number, id?: string) => void;
  onBatchDownload: (s: Subject) => void;
  downloadingBook: string | null;
  doneChapters: Record<string, number[]>;
}) {
  const { Icon, title, tagline, desc, from, to, ring, imageKey } = card;
  const subject = lookupSubject(card.id);
  const isHindi = card.id === 'hindi';
  const isSanskrit = card.id === 'sanskrit';
  const hindiReva = isHindi ? lookupSubjectReva() : undefined;
  const sanskritIravati = isSanskrit ? lookupSanskritIravati() : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className="w-full px-3 py-5 sm:px-6 sm:py-8 lg:px-10 pb-16"
      style={{
        background: 'radial-gradient(1100px 500px at 82% -10%, #16233066 0%, transparent 60%), radial-gradient(900px 500px at 10% 0%, #2a1c1044 0%, transparent 55%), #07070a',
        fontFamily: "'Inter', system-ui, sans-serif",
      }}
    >
      <div className="mx-auto w-full max-w-4xl">
        {/* Back button */}
        <button
          onClick={onBack}
          className="mb-5 flex items-center gap-2 rounded-lg border px-3 py-2 text-xs font-medium transition-colors"
          style={{ borderColor: '#d4af3744', color: '#e8c86a', background: 'rgba(10,8,4,0.5)' }}
        >
          <ArrowLeft size={14} /> Back to Books
        </button>

        {/* Book header with cover */}
        <div className="relative overflow-hidden rounded-2xl border" style={{ borderColor: '#d4af3755' }}>
          <div className="relative h-[min(40dvh,22rem)] w-full overflow-hidden sm:h-[min(45dvh,26rem)]">
            <div className="absolute inset-0" style={{ background: `radial-gradient(120% 120% at 30% 20%, ${from}, ${to})` }} />
            <img src={BOOK_IMAGES[imageKey]} alt={`${title} cover`} className="absolute inset-0 h-full w-full object-cover object-center" draggable={false} />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
            <div
              className="absolute left-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border backdrop-blur-sm sm:left-4 sm:top-4"
              style={{ borderColor: ring + 'aa', background: 'rgba(10,8,4,0.55)' }}
            >
              <Icon size={16} strokeWidth={1.75} color={ring} />
            </div>
            <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6">
              <p className="font-serif text-2xl text-white drop-shadow sm:text-3xl">{title}</p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.18em] sm:text-xs" style={{ color: ring }}>{tagline}</p>
            </div>
          </div>

          <div className="p-4 sm:p-6 lg:p-8" style={{ background: 'linear-gradient(180deg,#0c0a06,#07070a)' }}>
            <div className="mb-5 flex items-center justify-between gap-3">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#8e856f]">Class 9 · 2026</p>
                <h3 className="mt-1 font-serif text-xl text-[#f3e6c4] sm:text-2xl">{title}</h3>
              </div>
              <div className="hidden h-10 w-10 items-center justify-center rounded-full border sm:flex" style={{ borderColor: '#d4af3744' }}>
                <BookOpen size={17} color="#d4af37" />
              </div>
            </div>

            <div className="rounded-xl border p-4 sm:p-5" style={{ borderColor: '#d4af3728', background: 'rgba(212,175,55,.035)' }}>
              <p className="text-sm leading-6 text-[#c7bda2] sm:text-[15px]">{desc}</p>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-2">
              <div className="rounded-lg border p-3" style={{ borderColor: '#d4af3728' }}>
                <p className="text-[9px] uppercase tracking-widest text-[#756e5d]">Format</p>
                <p className="mt-1 text-xs text-[#e5dcc3]">NCERT PDF</p>
              </div>
              <div className="rounded-lg border p-3" style={{ borderColor: '#d4af3728' }}>
                <p className="text-[9px] uppercase tracking-widest text-[#756e5d]">Access</p>
                <p className="mt-1 text-xs text-[#e5dcc3]">Free download</p>
              </div>
            </div>

            {subject?.downloadUrl && (
              <button
                onClick={() => onFullBookDownload(subject)}
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg border py-3 text-sm font-medium tracking-wide transition-colors"
                style={{ borderColor: '#d4af37', color: '#0a0804', background: '#d4af37' }}
              >
                <Download size={16} /> Download Full Book
              </button>
            )}

            {!subject?.downloadUrl && (
              <div className="mt-5 rounded-lg border p-3 text-center" style={{ borderColor: '#d4af3728', background: 'rgba(212,175,55,.035)' }}>
                <p className="text-xs text-[#8e856f]">Full book PDF coming soon</p>
              </div>
            )}
          </div>
        </div>

        {/* Chapter sections */}
        <div className="mt-6 space-y-6">
          {isHindi && hindiReva ? (
            <>
              <UI3ChapterList
                subject={subject!}
                onChapterDownload={onChapterDownload}
                doneChapters={doneChapters}
                onBatchDownload={onBatchDownload}
                downloadingBook={downloadingBook}
              />
              <UI3ChapterList
                subject={hindiReva}
                onChapterDownload={onChapterDownload}
                doneChapters={doneChapters}
                onBatchDownload={onBatchDownload}
                downloadingBook={downloadingBook}
              />
            </>
          ) : isSanskrit && sanskritIravati ? (
            <>
              <UI3ChapterList
                subject={subject!}
                onChapterDownload={onChapterDownload}
                doneChapters={doneChapters}
                onBatchDownload={onBatchDownload}
                downloadingBook={downloadingBook}
              />
              <UI3ChapterList
                subject={sanskritIravati}
                onChapterDownload={onChapterDownload}
                doneChapters={doneChapters}
                onBatchDownload={onBatchDownload}
                downloadingBook={downloadingBook}
              />
            </>
          ) : subject ? (
            <UI3ChapterList
              subject={subject}
              onChapterDownload={onChapterDownload}
              doneChapters={doneChapters}
              onBatchDownload={onBatchDownload}
              downloadingBook={downloadingBook}
            />
          ) : null}
        </div>

        <p className="mt-6 text-center text-[11px] text-[#5c5646]">
          Tap any cover to preview · tap &quot;Download Book&quot; to fetch that title
        </p>
      </div>
    </div>
  );
}

function UI3GridView({
  onOpen,
  onFullBookDownload,
}: {
  onOpen: (c: BookCardDef) => void;
  onFullBookDownload: (s: Subject) => void;
}) {
  return (
    <div
      className="min-h-[100dvh] w-full overflow-x-hidden px-3 py-5 sm:px-6 sm:py-8 lg:px-10 lg:py-10"
      style={{
        background: 'radial-gradient(1100px 500px at 82% -10%, #16233066 0%, transparent 60%), radial-gradient(900px 500px at 10% 0%, #2a1c1044 0%, transparent 55%), #07070a',
        fontFamily: "'Inter', system-ui, sans-serif",
      }}
    >
      <div className="mx-auto w-full max-w-6xl">
        {/* Hero */}
        <div className="grid min-w-0 gap-6 md:gap-8 lg:grid-cols-[minmax(0,1.5fr)_minmax(300px,1fr)]">
          <div>
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border" style={{ borderColor: '#d4af37aa' }}>
                <BookOpen size={24} color="#d4af37" strokeWidth={1.5} />
              </div>
              <div>
                <h1 className="font-serif text-3xl leading-tight tracking-wide text-white sm:text-5xl">
                  GET <span style={{ color: '#d4af37' }}>BOOKS</span>
                </h1>
                <p className="mt-1 text-sm text-[#c7bda2]">All Your NCERT Books. One Place.</p>
              </div>
            </div>
            <div className="mt-5 flex items-center gap-2">
              <span className="h-px w-24" style={{ background: '#d4af37' }} />
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: '#d4af37' }} />
            </div>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-[#c7bda2]">
              Download all NCERT books for <span style={{ color: '#d4af37' }}>Class 9 (2026 Syllabus)</span> in one click and start your learning journey.
            </p>
            <div className="mt-7 flex flex-wrap gap-x-8 gap-y-4">
              {FEATURES.map(({ Icon, label, sub }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border" style={{ borderColor: '#d4af3799' }}>
                    <Icon size={15} color="#d4af37" strokeWidth={1.5} />
                  </div>
                  <div className="text-xs leading-tight text-[#e5dcc3]">
                    <div>{label}</div>
                    <div>{sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="flex flex-col items-center justify-center rounded-2xl border px-8 py-8 text-center"
            style={{ borderColor: '#d4af3755', background: 'linear-gradient(160deg, #14110b, #0a0906)' }}
          >
            <p className="font-serif text-lg text-white">One Click.</p>
            <p className="font-serif text-lg" style={{ color: '#d4af37' }}>All Books.</p>
            <div className="my-5 flex h-14 w-14 items-center justify-center rounded-full border" style={{ borderColor: '#d4af3799' }}>
              <Cloud size={22} color="#d4af37" strokeWidth={1.5} />
            </div>
            <p className="text-xs text-[#8e856f]">Browse and download individual books below</p>
          </div>
        </div>

        {/* Large row */}
        <div className="mt-8 grid grid-cols-2 gap-2.5 sm:mt-12 sm:grid-cols-3 lg:grid-cols-6">
          {LARGE_BOOKS.map(b => (
            <UI3BookCard key={b.id} card={b} onOpen={onOpen} />
          ))}
        </div>

        {/* Small row */}
        <div className="mt-3 grid grid-cols-2 gap-2.5 sm:mt-4 sm:grid-cols-4 lg:grid-cols-7">
          {SMALL_BOOKS.map(b => (
            <UI3BookCard key={b.id} card={b} onOpen={onOpen} />
          ))}
        </div>

        {/* Footer bar */}
        <div
          className="mt-8 flex flex-col flex-wrap items-stretch justify-between gap-4 rounded-xl border px-4 py-4 sm:mt-10 sm:flex-row sm:items-center sm:gap-6 sm:px-6 sm:py-5"
          style={{ borderColor: '#d4af3744' }}
        >
          {FOOTER_BADGES.map(({ Icon, label, sub }) => (
            <div key={label} className="flex items-center gap-3">
              <Icon size={18} color="#d4af37" strokeWidth={1.5} />
              <div className="text-xs leading-tight text-[#e5dcc3]">
                <div>{label}</div>
                <div>{sub}</div>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-[11px] text-[#5c5646]">
          Tap any cover to preview · tap a book to view chapters and download
        </p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* UI1/UI2 Components — Light/Dark Modern Theme                        */
/* ------------------------------------------------------------------ */

const COLOR_GRADIENT: Record<string, string> = {
  blue: 'from-blue-500/15 via-indigo-500/10 to-transparent',
  green: 'from-green-500/15 via-emerald-500/10 to-transparent',
  purple: 'from-purple-500/15 via-violet-500/10 to-transparent',
  orange: 'from-orange-500/15 via-amber-500/10 to-transparent',
  teal: 'from-teal-500/15 via-cyan-500/10 to-transparent',
  red: 'from-red-500/15 via-rose-500/10 to-transparent',
  indigo: 'from-indigo-500/15 via-blue-500/10 to-transparent',
};

function UI1BookDetail({
  card,
  onBack,
  onFullBookDownload,
  onChapterDownload,
  onBatchDownload,
  downloadingBook,
  doneChapters,
}: {
  card: BookCardDef;
  onBack: () => void;
  onFullBookDownload: (s: Subject) => void;
  onChapterDownload: (slug: string, num: number, id?: string) => void;
  onBatchDownload: (s: Subject) => void;
  downloadingBook: string | null;
  doneChapters: Record<string, number[]>;
}) {
  const subject = lookupSubject(card.id);
  const isHindi = card.id === 'hindi';
  const isSanskrit = card.id === 'sanskrit';
  const hindiReva = isHindi ? lookupSubjectReva() : undefined;
  const sanskritIravati = isSanskrit ? lookupSanskritIravati() : undefined;

  const renderSubjectSection = (s: Subject, label?: string) => {
    const chapterPdfs = s.chapters
      .map(c => ({ n: c.number, title: c.title, url: getChapterPdfUrl(s.slug, c.number, s.id) }))
      .filter(x => x.url) as { n: number; title: string; url: string }[];
    const done = doneChapters[s.id] || [];
    const active = downloadingBook === s.id;

    return (
      <div key={s.id} className="rounded-2xl border border-[var(--border)] overflow-hidden">
        {label && (
          <div className="px-5 py-3 bg-gradient-to-r from-blue-500/10 to-violet-500/8 dark:from-blue-500/15 dark:to-violet-500/10 border-b border-[var(--border)]">
            <h3 className="font-display font-bold text-sm text-[var(--text-primary)]">{label}</h3>
            <p className="text-xs text-[var(--text-muted)]">{s.book}</p>
          </div>
        )}
        <div className="p-5">
          {s.downloadUrl && (
            <button
              onClick={() => onFullBookDownload(s)}
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:brightness-110 shadow-sm transition-all mb-4"
            >
              <Download size={13} /> Download Full Book
            </button>
          )}
          {!s.downloadUrl && (
            <p className="text-xs text-[var(--text-muted)] mb-4">Full book PDF coming soon</p>
          )}

          {chapterPdfs.length > 0 && (
            <div>
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-xs font-semibold text-[var(--text-secondary)]">{chapterPdfs.length} Chapter PDFs</h4>
                <button
                  onClick={() => onBatchDownload(s)}
                  disabled={active}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-semibold bg-[var(--surface-2)] hover:bg-[var(--surface-3)] text-[var(--text-secondary)] border border-[var(--border)] transition-all disabled:opacity-60"
                >
                  {active ? <span className="w-3 h-3 border-2 border-[var(--text-muted)] border-t-transparent rounded-full animate-spin" /> : <BookOpen size={11} />}
                  {active ? `${done.length}/${chapterPdfs.length}` : 'Download All'}
                </button>
              </div>
              <ul className="divide-y divide-[var(--border)] max-h-80 overflow-y-auto">
                {chapterPdfs.map(ch => {
                  const isDone = done.includes(ch.n);
                  return (
                    <li key={ch.n} className="flex items-center gap-3 px-4 py-2.5">
                      <span className={`w-6 h-6 rounded-md text-[10px] font-bold flex items-center justify-center flex-shrink-0 ${isDone ? 'bg-green-100 dark:bg-green-950/40 text-green-600' : 'bg-[var(--surface-2)] text-[var(--text-secondary)]'}`}>
                        {isDone ? <CheckCircle size={12} /> : ch.n}
                      </span>
                      <span className="flex-1 min-w-0">
                        <span className="block text-xs font-medium text-[var(--text-primary)] truncate">Chapter {ch.n}: {ch.title}</span>
                      </span>
                      <button
                        onClick={() => onChapterDownload(s.slug, ch.n, s.id)}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-[11px] font-semibold transition-all flex-shrink-0 bg-[var(--surface-2)] hover:bg-[var(--surface-3)] text-[var(--text-secondary)] border border-[var(--border)]"
                      >
                        <FileText size={11} /> PDF
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-screen-lg mx-auto px-6 py-10">
      <button
        onClick={onBack}
        className="mb-6 inline-flex items-center gap-1.5 text-xs text-blue-500 hover:text-blue-600 font-medium"
      >
        <ArrowLeft size={14} /> Back to Books
      </button>

      <div className="card p-6 mb-6">
        <h1 className="text-2xl font-display font-bold text-[var(--text-primary)] mb-2">{card.title}</h1>
        <p className="text-sm text-[var(--text-muted)] mb-1">{card.tagline}</p>
        <p className="text-xs text-[var(--text-muted)]">{card.desc}</p>
      </div>

      <div className="space-y-5">
        {isHindi && hindiReva ? (
          <>
            {renderSubjectSection(subject!, 'R1 & R2 Book \u2014 Ganga')}
            {renderSubjectSection(hindiReva, 'R3 Book \u2014 Reva')}
          </>
        ) : isSanskrit && sanskritIravati ? (
          <>
            {renderSubjectSection(subject!, 'R1 & R2 Book \u2014 Sharda')}
            {renderSubjectSection(sanskritIravati, 'R3 Book \u2014 Iravati')}
          </>
        ) : subject ? (
          renderSubjectSection(subject)
        ) : null}
      </div>
    </div>
  );
}

function UI1GridView({
  onOpen,
  onFullBookDownload,
}: {
  onOpen: (c: BookCardDef) => void;
  onFullBookDownload: (s: Subject) => void;
}) {
  const [query, setQuery] = useState('');
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return BOOK_CARDS;
    return BOOK_CARDS.filter(c => c.title.toLowerCase().includes(q) || c.tagline.toLowerCase().includes(q));
  }, [query]);

  return (
    <div className="max-w-screen-lg mx-auto px-6 py-10">
      <nav className="flex items-center gap-1.5 text-xs text-[var(--text-muted)] mb-6">
        <Link href="/" className="hover:text-blue-500">Home</Link>
        <ChevronRight size={12} />
        <span className="text-[var(--text-secondary)] font-medium">Get Books</span>
      </nav>

      <div className="hero-panel p-6 md:p-8 rounded-3xl bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-950/40 dark:via-indigo-950/30 dark:to-purple-950/40 border border-[var(--border)] mb-8 relative overflow-hidden">
        <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-blue-400/10 blur-3xl" />
        <span className="badge-2026 mb-3 inline-flex">NCERT 2026 Revised Syllabus</span>
        <h1 className="text-3xl font-display font-bold text-[var(--text-primary)] mb-2">Download NCERT Books</h1>
        <p className="text-sm text-[var(--text-muted)] mb-5">Free PDFs for Class 9 \u2014 updated for 2026. No login required.</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl">
          <div className="bg-white/70 dark:bg-black/20 rounded-xl p-3 border border-[var(--border)]">
            <Library size={16} className="text-blue-500 mb-1" />
            <p className="text-lg font-bold text-[var(--text-primary)]">{BOOK_CARDS.length}</p>
            <p className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider">Books</p>
          </div>
          <div className="bg-white/70 dark:bg-black/20 rounded-xl p-3 border border-[var(--border)]">
            <BookMarked size={16} className="text-green-500 mb-1" />
            <p className="text-lg font-bold text-[var(--text-primary)]">Chapter PDFs</p>
            <p className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider">Per Chapter</p>
          </div>
          <div className="bg-white/70 dark:bg-black/20 rounded-xl p-3 border border-[var(--border)]">
            <Sparkles size={16} className="text-purple-500 mb-1" />
            <p className="text-lg font-bold text-[var(--text-primary)]">100%</p>
            <p className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider">Free</p>
          </div>
          <div className="bg-white/70 dark:bg-black/20 rounded-xl p-3 border border-[var(--border)]">
            <CheckCircle size={16} className="text-teal-500 mb-1" />
            <p className="text-lg font-bold text-[var(--text-primary)]">No Login</p>
            <p className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider">Required</p>
          </div>
        </div>
      </div>

      <div className="relative mb-6 max-w-md">
        <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" />
        <input
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search subject or chapter\u2026"
          className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[var(--surface-1)] border border-[var(--border)] text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-blue-500/40"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {filtered.map(card => {
          const subject = lookupSubject(card.id);
          const { Icon } = card;
          return (
            <button
              key={card.id}
              onClick={() => onOpen(card)}
              className="card p-0 overflow-hidden transition-all duration-300 text-left hover:ring-2 hover:ring-blue-500/30"
            >
              <div className={cn('relative p-5 bg-gradient-to-br', COLOR_GRADIENT[subject?.color ?? 'blue'] || COLOR_GRADIENT.blue)}>
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-white dark:bg-black/25 flex items-center justify-center text-xl shadow-sm flex-shrink-0">
                    {subject?.icon || ''}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="font-display font-bold text-[var(--text-primary)] text-sm truncate">{card.title}</h2>
                    <p className="text-xs text-[var(--text-muted)] truncate">{subject?.book || card.tagline}</p>
                  </div>
                  {subject?.downloadUrl && (
                    <span className="flex items-center gap-1 text-[10px] font-bold text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-950/40 px-2 py-0.5 rounded-full border border-green-100 dark:border-green-900 flex-shrink-0">
                      <CheckCircle size={9} /> PDF
                    </span>
                  )}
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <span className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold bg-blue-600 text-white">
                    <BookOpen size={13} /> View Chapters
                  </span>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <div className="card p-10 text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/15 to-violet-600/10 border border-blue-200/60 dark:border-blue-500/30 mb-4">
            <Search size={22} className="text-blue-600 dark:text-blue-400" />
          </div>
          <p className="font-semibold text-[var(--text-primary)] mb-1">No results for &quot;{query}&quot;</p>
          <p className="text-sm text-[var(--text-muted)]">Try a different subject name.</p>
        </div>
      )}

      <div className="mt-8 p-5 rounded-2xl bg-gradient-to-br from-blue-500/10 to-violet-500/8 dark:from-blue-500/15 dark:to-violet-500/10 border border-blue-300/40 dark:border-blue-500/30">
        <p className="text-sm text-blue-700 dark:text-blue-300 mb-3">
          <Download size={13} className="inline -mt-0.5 mr-1" /><strong>Chapter-wise PDFs available now.</strong> Pick a chapter, download its PDF, then browse step-by-step solutions.
        </p>
        <div className="flex flex-wrap gap-2">
          <Link href="/answers" className="btn-primary inline-flex text-sm">
            Browse Solved Answers <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Main Page Export                                                    */
/* ------------------------------------------------------------------ */

export default function BooksPage() {
  const { ui } = useUIStore();
  const isUI3 = ui === 'ui3';
  const [selectedCard, setSelectedCard] = useState<BookCardDef | null>(null);
  const [downloadingBook, setDownloadingBook] = useState<string | null>(null);
  const [doneChapters, setDoneChapters] = useState<Record<string, number[]>>({});
  const timersRef = useRef<Record<string, ReturnType<typeof setTimeout>>>({});

  useEffect(() => {
    const t = timersRef.current;
    return () => Object.values(t).forEach(clearTimeout);
  }, []);

  const openBook = useCallback((card: BookCardDef) => {
    setSelectedCard(card);
    if (typeof window !== 'undefined') window.scrollTo(0, 0);
  }, []);

  const closeBook = useCallback(() => {
    setSelectedCard(null);
  }, []);

  function triggerDownload(url: string, filename: string) {
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  const handleFullBookDownload = useCallback((subject: Subject) => {
    if (subject.downloadUrl) {
      triggerDownload(subject.downloadUrl, `${subject.bookSlug}-class9-ncert.pdf`);
      toast.success(`${subject.name} full book download started!`);
    } else {
      toast('This book will be available for download soon!');
    }
  }, []);

  const handleChapterDownload = useCallback((subjectSlug: string, chapterNumber: number, subjectId?: string) => {
    const url = getChapterPdfUrl(subjectSlug, chapterNumber, subjectId);
    if (!url) return;
    triggerDownload(url, url.split('/').pop() || 'chapter.pdf');
    toast.success(`Downloading Chapter ${chapterNumber} PDF\u2026`);
  }, []);

  const handleBatchDownload = useCallback(async (subject: Subject) => {
    if (downloadingBook) return;
    const urls = subject.chapters
      .map(c => ({ n: c.number, url: getChapterPdfUrl(subject.slug, c.number, subject.id) }))
      .filter(x => x.url) as { n: number; url: string }[];
    if (urls.length === 0) { toast('Chapter PDFs coming soon!'); return; }

    setDownloadingBook(subject.id);
    setDoneChapters(prev => ({ ...prev, [subject.id]: [] }));
    toast(`Collecting ${urls.length} chapters of ${subject.name}\u2026`);

    for (let i = 0; i < urls.length; i++) {
      await new Promise(r => setTimeout(r, 450));
      triggerDownload(urls[i].url, urls[i].url.split('/').pop() || 'chapter.pdf');
      setDoneChapters(prev => ({ ...prev, [subject.id]: [...(prev[subject.id] || []), urls[i].n] }));
    }
    setDownloadingBook(null);
    toast.success(`All ${urls.length} chapters of ${subject.name} are downloading!`);
  }, [downloadingBook]);

  return (
    <Layout
      title="Download NCERT Books Free \u2014 Class 9 PDFs | 2026 Revised Syllabus"
      description="Free NCERT textbooks for Class 9 Maths (Ganita Manjari), Science (Exploration), English (Kaveri) and Social Science as PDFs \u2014 updated for 2026 Revised Syllabus. Download the full book or single chapters."
      canonical="/books"
      schema={{
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://solvencert-novexa.vercel.app' },
          { '@type': 'ListItem', position: 2, name: 'NCERT Books', item: 'https://solvencert-novexa.vercel.app/books' },
        ],
      }}
    >
      {isUI3 ? (
        selectedCard ? (
          <UI3BookDetail
            card={selectedCard}
            onBack={closeBook}
            onFullBookDownload={handleFullBookDownload}
            onChapterDownload={handleChapterDownload}
            onBatchDownload={handleBatchDownload}
            downloadingBook={downloadingBook}
            doneChapters={doneChapters}
          />
        ) : (
          <UI3GridView onOpen={openBook} onFullBookDownload={handleFullBookDownload} />
        )
      ) : (
        selectedCard ? (
          <UI1BookDetail
            card={selectedCard}
            onBack={closeBook}
            onFullBookDownload={handleFullBookDownload}
            onChapterDownload={handleChapterDownload}
            onBatchDownload={handleBatchDownload}
            downloadingBook={downloadingBook}
            doneChapters={doneChapters}
          />
        ) : (
          <UI1GridView onOpen={openBook} onFullBookDownload={handleFullBookDownload} />
        )
      )}
    </Layout>
  );
}

