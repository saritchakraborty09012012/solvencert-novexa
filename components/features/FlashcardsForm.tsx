import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, BookOpen, Loader2, Sparkles, Pen, Layers } from 'lucide-react';
import { CLASS_9_SUBJECTS, subjectOptions } from '@/lib/content';
import { cn } from '@/utils/helpers';
import MicButton from './MicButton';
import FileAttach, { type AttachedFile } from './FileAttach';

interface Props {
  onGenerate: (config: FlashcardConfig) => void;
  loading: boolean;
}

export interface FlashcardConfig {
  classLevel: string;
  subject: string;
  book: string;
  chapter: string;
  chapterNumber: number;
  instructions: string;
  chapterContent?: string;
}

function Dropdown({ value, placeholder, options, onChange, disabled }: {
  value: string; placeholder: string; options: { value: string; label: string }[];
  onChange: (v: string) => void; disabled?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const selected = options.find(o => o.value === value);
  useEffect(() => {
    const handler = (e: MouseEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false); };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);
  return (
    <div ref={ref} className="relative">
      <button type="button" disabled={disabled} onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-2 px-4 py-3 rounded-xl text-sm text-left transition-all input-field"
        style={{ cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1 }}>
        <span className={selected ? 'text-[var(--text-primary)]' : 'text-[var(--text-muted)]'}>
          {selected ? selected.label : placeholder}
        </span>
        <ChevronDown size={14} className={cn('shrink-0 transition-transform', open && 'rotate-180')} style={{ color: 'var(--text-muted)' }} />
      </button>
      {open && !disabled && (
        <div className="absolute z-50 left-0 right-0 mt-1.5 rounded-xl overflow-hidden shadow-2xl max-h-60 overflow-y-auto"
          style={{ background: '#2a1f1a', border: '1px solid rgba(212,175,55,0.25)' }}>
          {options.map(opt => (
            <button key={opt.value} type="button"
              onClick={() => { onChange(opt.value); setOpen(false); }}
              className="w-full text-left px-4 py-2.5 text-sm transition-colors"
              style={{
                color: opt.value === value ? '#d4af37' : '#e8dcc8',
                background: opt.value === value ? 'rgba(212,175,55,0.12)' : 'transparent',
              }}
              onMouseEnter={e => { if (opt.value !== value) e.currentTarget.style.background = 'rgba(212,175,55,0.06)'; }}
              onMouseLeave={e => { if (opt.value !== value) e.currentTarget.style.background = 'transparent'; }}
            >{opt.label}</button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function FlashcardsForm({ onGenerate, loading }: Props) {
  const [cls, setCls] = useState('class-9');
  const [subjSlug, setSubjSlug] = useState('');
  const [chapSlug, setChapSlug] = useState('');
  const [instructions, setInstructions] = useState('');
  const [files, setFiles] = useState<AttachedFile[]>([]);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const subjects = cls === 'class-9' ? CLASS_9_SUBJECTS : [];
  const subject = subjects.find(s => s.id === subjSlug);
  const chapters = subject?.chapters || [];
  const chapter = chapters.find(c => c.slug === chapSlug);

  function handleMicResult(text: string) {
    setInstructions(prev => prev ? prev + ' ' + text : text);
  }

  function handleSubmit() {
    if (!subject || !chapter) return;
    const chapterContent = files.length > 0 ? files.map(f => f.content).join('\n---\n') : undefined;
    onGenerate({
      classLevel: cls,
      subject: subject.name,
      book: subject.book,
      chapter: chapter.title,
      chapterNumber: chapter.number,
      instructions,
      chapterContent,
    });
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <Dropdown value={cls} placeholder="Select Class" options={[{ value: 'class-9', label: 'Class 9' }]}
          onChange={v => { setCls(v); setSubjSlug(''); setChapSlug(''); }} />
        <Dropdown
          value={subjSlug} placeholder="Select Subject"
          options={subjectOptions(subjects)}
          onChange={v => { setSubjSlug(v); setChapSlug(''); }}
          disabled={!cls}
        />
      </div>

      {subject && (
        <div className="space-y-3">
          <div className="input-field bg-[var(--surface-2)] text-[var(--text-muted)] cursor-default select-none text-sm flex items-center gap-2">
            <BookOpen size={14} className="text-[var(--brand-gold)] flex-shrink-0" />
            <span className="truncate">{subject.book}</span>
          </div>
          <Dropdown
            value={chapSlug} placeholder="Select Chapter"
            options={chapters.map(ch => ({ value: ch.slug, label: `Ch ${ch.number}: ${ch.title}` }))}
            onChange={setChapSlug}
          />
        </div>
      )}

      <div className="space-y-2">
        <label className="flex items-center gap-2 text-sm font-medium text-[var(--text-secondary)]">
          <Pen size={14} className="text-[var(--brand-gold)]" />
          Additional Instructions (Optional)
        </label>
        <div className="relative">
          <textarea
            ref={textareaRef}
            value={instructions}
            onChange={e => setInstructions(e.target.value)}
            placeholder="e.g. Focus on definitions, include formulas, more medium difficulty cards..."
            rows={3}
            className="input-field resize-none pr-24 w-full"
          />
          <div className="absolute right-2 bottom-2 flex items-center gap-1">
            <MicButton onResult={handleMicResult} size="sm" />
            <FileAttach files={files} onChange={setFiles} className="flex-row" />
          </div>
        </div>
      </div>

      <button
        onClick={handleSubmit}
        disabled={!subject || !chapter || loading}
        className={cn(
          'w-full justify-center flex items-center gap-2 py-3 rounded-xl font-semibold text-sm transition-all',
          loading
            ? 'bg-purple-500/20 text-purple-400 cursor-wait'
            : 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:shadow-lg hover:shadow-purple-500/20 disabled:opacity-40 disabled:cursor-not-allowed'
        )}
      >
        {loading ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Generating Flashcards...
          </>
        ) : (
          <>
            <Layers size={16} />
            Generate Flashcards
          </>
        )}
      </button>
    </div>
  );
}
