import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Layout from '@/components/layout/Layout';
import FlashCardViewer from '@/components/flashcards/FlashCardViewer';
import { CLASS_9_SUBJECTS, subjectOptions, type Subject, type Chapter } from '@/lib/content';
import toast from 'react-hot-toast';
import { useAuthStore } from '@/store/authStore';
import { useFeedbackStore } from '@/store/feedbackStore';
import { Layers, Sparkles, ChevronDown, Loader2 } from 'lucide-react';
import AuthModal from '@/components/auth/AuthModal';
import { getFlashcardRemaining, incrementFlashcardGen, hasReachedFlashcardLimit } from '@/lib/guestLimits';

interface FlashcardQuestion { question: string; answer: string; }
interface FlashcardPageData { questions: FlashcardQuestion[]; }
interface FlashcardsPayload {
  title: string;
  pages: FlashcardPageData[];
  metadata: {
    classLevel: number;
    subject: string;
    book: string;
    chapter: string;
    chapterNumber: number;
    numPages: number;
    totalQuestions: number;
    generatedAt: string;
  };
}

type PageState = 'generator' | 'loading' | 'viewer';

const LOADING_MESSAGES = [
  'Preparing questions...',
  'Covering the full chapter...',
  'Almost ready...',
];

const CLASS_OPTIONS = [
  { value: '6', label: 'Class 6' },
  { value: '7', label: 'Class 7' },
  { value: '8', label: 'Class 8' },
  { value: '9', label: 'Class 9' },
  { value: '10', label: 'Class 10' },
  { value: '11', label: 'Class 11' },
  { value: '12', label: 'Class 12' },
];

function getSubjectsForClass(classLevel: number): Subject[] {
  if (classLevel === 9) {
    return CLASS_9_SUBJECTS;
  }
  return [];
}

/* ── Custom Dropdown ────────────────────────────────────────────────────── */
interface DropdownProps {
  label: string;
  value: string;
  placeholder: string;
  options: { value: string; label: string }[];
  onChange: (val: string) => void;
  disabled?: boolean;
}

function CustomDropdown({ label, value, placeholder, options, onChange, disabled }: DropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const selected = options.find(o => o.value === value);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <div>
      <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5"
        style={{ color: 'var(--text-muted)' }}>{label}</label>
      <div ref={ref} className="relative">
        <button
          type="button"
          disabled={disabled}
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between gap-2 px-4 py-2.5 rounded-xl text-sm text-left transition-all input-field"
          style={{
            cursor: disabled ? 'not-allowed' : 'pointer',
            opacity: disabled ? 0.5 : 1,
          }}
        >
          <span className="truncate">{selected ? selected.label : placeholder}</span>
          <ChevronDown size={14} className={`shrink-0 transition-transform ${open ? 'rotate-180' : ''}`} style={{ color: 'var(--text-muted)' }} />
        </button>

        {open && !disabled && (
          <div
            className="absolute z-50 left-0 right-0 mt-1.5 rounded-xl overflow-hidden shadow-2xl max-h-60 overflow-y-auto"
            style={{
              background: '#2a1f1a',
              border: '1px solid rgba(212,175,55,0.25)',
            }}
          >
            {options.map(opt => (
              <button
                key={opt.value}
                type="button"
                onClick={() => { onChange(opt.value); setOpen(false); }}
                className="w-full text-left px-4 py-2.5 text-sm transition-colors"
                style={{
                  color: opt.value === value ? '#d4af37' : '#e8dcc8',
                  background: opt.value === value ? 'rgba(212,175,55,0.12)' : 'transparent',
                }}
                onMouseEnter={e => {
                  if (opt.value !== value) e.currentTarget.style.background = 'rgba(212,175,55,0.06)';
                }}
                onMouseLeave={e => {
                  if (opt.value !== value) e.currentTarget.style.background = 'transparent';
                }}
              >
                {opt.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function FlashCardsPage() {
  const router = useRouter();
  const { user, isGuest } = useAuthStore();
  const showAiRatingFor = useFeedbackStore(s => s.showAiRatingFor);

  const [pageState, setPageState] = useState<PageState>('generator');
  const [selectedClass, setSelectedClass] = useState<number>(9);
  const [selectedSubjectId, setSelectedSubjectId] = useState('');
  const [selectedChapterSlug, setSelectedChapterSlug] = useState('');
  const [numPages, setNumPages] = useState(5);
  const [flashcards, setFlashcards] = useState<FlashcardsPayload | null>(null);
  const [loadingMsg, setLoadingMsg] = useState(LOADING_MESSAGES[0]);
  const [authModal, setAuthModal] = useState<'login' | 'signup' | null>(null);
  const [guestRemaining, setGuestRemaining] = useState(5);

  useEffect(() => {
    if (isGuest) setGuestRemaining(getFlashcardRemaining());
  }, [isGuest]);

  const subjects = getSubjectsForClass(selectedClass);
  const subject: Subject | undefined = subjects.find(s => s.slug === selectedSubjectId || s.id === selectedSubjectId);
  const chapters: Chapter[] = subject?.chapters || [];
  const chapter: Chapter | undefined = chapters.find(c => c.slug === selectedChapterSlug);

  useEffect(() => {
    if (pageState !== 'loading') return;
    let idx = 0;
    const interval = setInterval(() => {
      idx = (idx + 1) % LOADING_MESSAGES.length;
      setLoadingMsg(LOADING_MESSAGES[idx]);
    }, 1800);
    return () => clearInterval(interval);
  }, [pageState]);

  async function handleGenerate() {
    if (!subject || !chapter) {
      toast.error('Please select subject and chapter.');
      return;
    }

    if (isGuest) {
      if (hasReachedFlashcardLimit()) {
        toast.error('Daily limit reached! Sign up for unlimited flashcards.');
        setAuthModal('signup');
        return;
      }
      incrementFlashcardGen();
      setGuestRemaining(getFlashcardRemaining());
    }

    setPageState('loading');
    setLoadingMsg(LOADING_MESSAGES[0]);

    try {
      const res = await fetch('/api/flashcards/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          classLevel: selectedClass,
          subject: subject.name,
          book: subject.book,
          chapter: chapter.title,
          chapterNumber: chapter.number,
          numPages,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error?.message || 'Failed to generate flashcards');

      const raw = data.flashcards;
      const allQuestions: { question: string; answer: string }[] = [];
      if (raw.pages && Array.isArray(raw.pages)) {
        for (const page of raw.pages) {
          if (page.questions && Array.isArray(page.questions)) {
            allQuestions.push(...page.questions);
          }
        }
      }

      setFlashcards({
        title: raw.title || `${chapter.title} - ${subject.name}`,
        pages: raw.pages || [],
        metadata: {
          classLevel: selectedClass,
          subject: subject.name,
          book: subject.book,
          chapter: chapter.title,
          chapterNumber: chapter.number,
          numPages,
          totalQuestions: allQuestions.length,
          generatedAt: new Date().toISOString(),
        },
      });
      setPageState('viewer');
      showAiRatingFor('ai-flashcards');
    } catch (err) {
      toast.error(err instanceof Error ? err.message : 'Failed to generate flashcards');
      setPageState('generator');
    }
  }

  function handleBack() {
    setPageState('generator');
    setFlashcards(null);
  }

  const totalQuestions = numPages * 4;

  return (
    <Layout
      title="Flash Cards - Quick Revision | SolveNCERT"
      description="AI-powered flashcards for NCERT Classes 6-12. Quick revision, smart learning."
      canonical="/flash-cards"
    >
      <Head>
        <meta name="keywords" content="NCERT flashcards, CBSE flashcards, quick revision, smart learning, class 6 to 12, study cards" />
      </Head>

      <div className="max-w-screen-md mx-auto px-4 py-8">
        {pageState === 'generator' && (
          <div className="card p-6 sm:p-8">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/15 to-indigo-500/10 border border-purple-200/60 dark:border-purple-500/30 mb-4">
                <Sparkles size={24} className="text-purple-500" />
              </div>
              <h1 className="text-2xl font-display font-bold text-[var(--text-primary)] mb-1">Flash Cards</h1>
              <p className="text-sm text-[var(--text-muted)]">Quick Revision &bull; Smart Learning</p>
            </div>

            <div className="space-y-5 max-w-sm mx-auto">
              <CustomDropdown
                label="Class"
                value={String(selectedClass)}
                placeholder="Select Class"
                options={CLASS_OPTIONS}
                onChange={val => {
                  setSelectedClass(Number(val));
                  setSelectedSubjectId('');
                  setSelectedChapterSlug('');
                }}
              />

              <CustomDropdown
                label="Subject"
                value={selectedSubjectId}
                placeholder="Select Subject"
                options={subjectOptions(subjects)}
                onChange={val => { setSelectedSubjectId(val); setSelectedChapterSlug(''); }}
              />

              {subject && (
                <>
                  <div className="input-field bg-[var(--surface-2)] text-[var(--text-muted)] cursor-default select-none text-sm flex items-center gap-2">
                    <span className="text-[var(--brand-gold)]">{subject.icon}</span>
                    <span className="truncate">{subject.book}</span>
                  </div>

                  <CustomDropdown
                    label="Chapter"
                    value={selectedChapterSlug}
                    placeholder="Select Chapter"
                    options={chapters.map(ch => ({ value: ch.slug, label: `Ch ${ch.number}: ${ch.title}` }))}
                    onChange={setSelectedChapterSlug}
                  />
                </>
              )}

              <div>
                <label className="block text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-1.5">
                  Number of Pages
                </label>
                <div className="flex items-center gap-4">
                  <input
                    type="range"
                    min={1}
                    max={20}
                    value={numPages}
                    onChange={e => setNumPages(Number(e.target.value))}
                    className="flex-1 accent-purple-500"
                  />
                  <span className="text-sm font-semibold text-[var(--text-primary)] w-8 text-center">{numPages}</span>
                </div>
                <p className="text-xs text-[var(--text-muted)] mt-1">
                  {numPages} page{numPages !== 1 ? 's' : ''} &middot; {totalQuestions} questions
                </p>
              </div>

              <button
                onClick={handleGenerate}
                disabled={!subject || !chapter}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:shadow-lg hover:shadow-purple-500/20 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <Layers size={16} />
                Generate Flash Cards
              </button>
            </div>

            {isGuest && (
              <p className="text-center text-xs text-[var(--text-muted)] mt-4">
                {guestRemaining > 0
                  ? <>Free generations today: <span className="font-semibold text-purple-400">{guestRemaining}</span> remaining</>
                  : <>No free generations left today. <button onClick={() => setAuthModal('signup')} className="text-purple-400 hover:text-purple-300 underline">Sign up</button> for unlimited.</>}
              </p>
            )}
          </div>
        )}

        {pageState === 'loading' && (
          <div className="card p-10 sm:p-16 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/15 to-indigo-500/10 border border-purple-200/60 dark:border-purple-500/30 flex items-center justify-center mb-6">
              <Loader2 size={28} className="text-purple-500 animate-spin" />
            </div>
            <p className="text-sm font-medium text-[var(--text-primary)] mb-1 transition-opacity duration-500">
              {loadingMsg}
            </p>
            <p className="text-xs text-[var(--text-muted)]">
              This may take a few seconds
            </p>
          </div>
        )}

        {pageState === 'viewer' && flashcards && (
          <div>
            <button
              onClick={handleBack}
              className="mb-4 inline-flex items-center gap-1.5 text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
            >
              <ChevronDown size={14} className="rotate-90" />
              Back to Generator
            </button>
            <FlashCardViewer
              classLevel={flashcards.metadata.classLevel}
              subject={flashcards.metadata.subject}
              book={flashcards.metadata.book}
              chapter={flashcards.metadata.chapter}
              chapterNumber={flashcards.metadata.chapterNumber}
              pages={flashcards.pages}
              onBack={handleBack}
            />
            <button onClick={() => router.push('/quizzes')} className="mt-6 w-full text-center text-xs font-medium text-amber-500 hover:text-amber-600 transition-colors">Test yourself with a Quiz →</button>
          </div>
        )}
      </div>

      {authModal && (
        <AuthModal mode={authModal} onClose={() => setAuthModal(null)} onSwitch={m => setAuthModal(m)} />
      )}
    </Layout>
  );
}
