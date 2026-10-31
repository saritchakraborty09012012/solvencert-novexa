import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { Search, BookOpen, Loader2, X, Mic, MicOff, Sparkles } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import AutoGrowTextarea from '@/components/features/AutoGrowTextarea';
import { CLASS_9_SUBJECTS } from '@/lib/content';
import { useFeedbackStore } from '@/store/feedbackStore';
import { cn } from '@/utils/helpers';

interface SearchResult { title: string; subject: string; chapter: string; url: string; snippet: string; }

// Only include chapters that actually have exercises/solutions
function localSearch(q: string): SearchResult[] {
  const lq = q.toLowerCase();
  const results: SearchResult[] = [];
  for (const subject of CLASS_9_SUBJECTS) {
    for (const chapter of subject.chapters) {
      // For maths — only show if has exercises
      // For science/english — always show (content via dedicated pages)
      if (chapter.exercises.length === 0 && subject.slug !== 'science' && subject.slug !== 'english') continue;

      const score = (chapter.title.toLowerCase().includes(lq) ? 3 : 0) +
                    (subject.name.toLowerCase().includes(lq) ? 2 : 0) +
                    (chapter.description?.toLowerCase().includes(lq) ? 1 : 0);

      if (score === 0) continue;

      // Build correct URL
      let url: string;
      if (subject.slug === 'english') url = `/class-9/english/kaveri/${chapter.code}/${chapter.slug}`;
      else if (subject.slug === 'science') url = `/class-9/science/exploration/${chapter.code}/${chapter.slug}`;
      else url = `/class-9/${subject.slug}/${subject.bookSlug}/${chapter.code}/${chapter.slug}`;

      results.push({
        title: chapter.title, subject: subject.name, chapter: `Chapter ${chapter.number}`,
        url, snippet: chapter.description || `${subject.book} · Chapter ${chapter.number}`,
      });
    }
  }
  return results.slice(0, 15);
}

export default function SearchPage() {
  const showAiRatingFor = useFeedbackStore(s => s.showAiRatingFor);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [aiUsed, setAiUsed] = useState(false);
  const [listening, setListening] = useState(false);
  const recogRef = useRef<SpeechRecognition | null>(null);

  const doSearch = useCallback(async (q: string) => {
    if (!q.trim()) { setResults([]); setAiUsed(false); return; }
    setLoading(true);
    try {
      const res = await fetch('/api/ai/search', { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({ query:q }) });
      const data = await res.json();
      if (data.results?.length > 0) { setResults(data.results); setAiUsed(true); setLoading(false); showAiRatingFor('ai-search'); return; }
    } catch {}
    setResults(localSearch(q)); setAiUsed(false); setLoading(false);
  }, []);

  useEffect(() => { const t = setTimeout(() => doSearch(query), 350); return () => clearTimeout(t); }, [query, doSearch]);

  function toggleMic() {
    if (typeof window === 'undefined') return;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const SR = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SR) return;

    if (listening) { recogRef.current?.stop(); setListening(false); return; }

    const recog = new SR() as SpeechRecognition;
    recog.lang = 'en-IN'; recog.continuous = false; recog.interimResults = true;
    recogRef.current = recog;

    recog.onstart = () => setListening(true);

    recog.onresult = (e: SpeechRecognitionEvent) => {
      let transcript = '';
      for (let i = e.resultIndex; i < e.results.length; i++) {
        transcript += e.results[i][0].transcript;
      }
      // Show transcript live in the search bar
      setQuery(transcript);
    };

    recog.onend = () => setListening(false);
    recog.onerror = () => setListening(false);
    recog.start();
  }

  return (
    <Layout title="Search NCERT Solutions — Class 9 CBSE" description="Search across all NCERT Class 9 solutions — Maths, Science, English. AI-powered search understands topics, synonyms and related concepts." canonical="/search">
      <div className="max-w-screen-md mx-auto px-6 py-10">
        <div className="mb-8">
          <h1 className="text-2xl font-display font-bold text-[var(--text-primary)] mb-1">Search</h1>
          <p className="text-sm text-[var(--text-muted)]">AI-powered search — understands topics, synonyms and related concepts.</p>
        </div>

        {/* Search input with live voice transcript */}
        <div className="relative mb-6">
          <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)] pointer-events-none" />
          <AutoGrowTextarea
            autoFocus
            value={query}
            onChange={setQuery}
            onEnter={() => {}}
            lineHeightPx={24}
            placeholder={listening ? 'Listening…' : 'Search chapters, topics, questions…'}
            className={cn('input-field pl-11 pr-20 text-base', listening && 'ring-2 ring-red-400')}
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1.5">
            {query && !listening && (
              <button onClick={() => setQuery('')} className="p-1.5 rounded text-[var(--text-muted)] hover:text-[var(--text-primary)]"><X size={15} /></button>
            )}
            <button onClick={toggleMic} title={listening ? 'Stop' : 'Search by voice'}
              className={cn('p-2 rounded-lg transition-all', listening ? 'bg-red-500 text-white animate-pulse' : 'bg-[var(--surface-2)] text-[var(--text-muted)] hover:text-blue-500')}>
              {listening ? <MicOff size={14} /> : <Mic size={14} />}
            </button>
          </div>
        </div>

        {listening && (
          <p className="text-center text-sm text-red-500 mb-4 flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse inline-block" />
            Listening… speak your question
          </p>
        )}

        {loading ? (
          <div className="flex flex-col items-center gap-3 py-12">
            <Loader2 size={22} className="animate-spin text-blue-500" />
            <p className="text-xs text-[var(--text-muted)] flex items-center gap-1.5"><Sparkles size={11} /> AI searching…</p>
          </div>
        ) : results.length > 0 ? (
          <div className="space-y-2">
            <div className="flex items-center gap-2 mb-3">
              <p className="text-xs text-[var(--text-muted)]">{results.length} results</p>
              {aiUsed && <span className="flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950/40 text-blue-600 border border-blue-100"><Sparkles size={9} /> AI</span>}
            </div>
            {results.map((r, i) => (
              <Link key={i} href={r.url} className="card p-4 flex items-start gap-3 hover:scale-[1.01] transition-transform">
                <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-950/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <BookOpen size={14} className="text-blue-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-[var(--text-primary)] line-clamp-2">{r.title}</p>
                  <div className="flex items-center gap-2 mt-1 flex-wrap">
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-[var(--surface-2)] text-[var(--text-muted)]">{r.subject}</span>
                    <span className="text-[10px] text-[var(--text-muted)]">{r.chapter}</span>
                    {r.snippet && <span className="text-[10px] text-[var(--text-muted)] hidden sm:inline">· {r.snippet}</span>}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : query ? (
          <div className="text-center py-12">
            <Search size={32} className="mx-auto text-[var(--text-muted)] mb-3" />
            <p className="font-semibold text-[var(--text-primary)] mb-1">No results for &ldquo;{query}&rdquo;</p>
            <p className="text-sm text-[var(--text-muted)]">Try different keywords or browse below.</p>
          </div>
        ) : (
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[var(--text-muted)] mb-3">Browse by Subject</p>
            <div className="grid grid-cols-2 gap-3">
              {CLASS_9_SUBJECTS.filter(s => s.id !== 'it-part-a' && s.id !== 'sanskrit-sharda' && s.id !== 'hindi' && s.id !== 'sst-part-2').map(s => (
                <Link key={s.id} href={`/class-9/${s.slug}`} className="card p-4 flex items-center gap-3">
                  <span className="text-xl">{s.icon}</span>
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">{s.id === 'it-part-b' ? 'IT' : (s.id === 'sanskrit-reva' || s.id === 'hindi-reva') ? s.name : s.name}</p>
                    <p className="text-xs text-[var(--text-muted)]">{s.id === 'it-part-b' ? '5 chapters' : s.id === 'sanskrit-reva' ? '22 chapters' : s.id === 'hindi-reva' ? '22 chapters' : `${s.chapters.length} chapters`}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
