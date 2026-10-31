import React, { useState, useRef } from 'react';
import { ChevronDown, BookOpen, FileText, Loader2, Sparkles, Pen } from 'lucide-react';
import { CLASS_9_SUBJECTS, subjectOptions } from '@/lib/content';
import { cn } from '@/utils/helpers';
import MicButton from './MicButton';
import FileAttach, { type AttachedFile } from './FileAttach';

interface Props {
  onGenerate: (config: NotesConfig) => void;
  loading: boolean;
}

export interface NotesConfig {
  classLevel: string;
  subject: string;
  book: string;
  chapter: string;
  chapterNumber: number;
  instructions: string;
  chapterContent?: string;
}

export default function NotesForm({ onGenerate, loading }: Props) {
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

  const sel = (
    onChange: (v: string) => void,
    value: string,
    placeholder: string,
    options: { value: string; label: string }[],
    disabled = false
  ) => (
    <div className="relative">
      <select
        value={value}
        onChange={e => onChange(e.target.value)}
        disabled={disabled}
        className="input-field appearance-none pr-10 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed w-full"
      >
        <option value="">{placeholder}</option>
        {options.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
      </select>
      <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)] pointer-events-none" />
    </div>
  );

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        {sel(
          setCls,
          cls,
          'Select Class',
          [{ value: 'class-9', label: 'Class 9' }]
        )}
        {sel(
          v => { setSubjSlug(v); setChapSlug(''); },
          subjSlug,
          'Select Subject',
          subjectOptions(subjects),
          !cls
        )}
      </div>

      {subject && (
        <div className="space-y-3">
          <div className="input-field bg-[var(--surface-2)] text-[var(--text-muted)] cursor-default select-none text-sm flex items-center gap-2">
            <BookOpen size={14} className="text-[var(--brand-gold)] flex-shrink-0" />
            <span className="truncate">{subject.book}</span>
          </div>
          {sel(
            setChapSlug,
            chapSlug,
            'Select Chapter',
            chapters.map(ch => ({ value: ch.slug, label: `Ch ${ch.number}: ${ch.title}` })),
            false
          )}
        </div>
      )}

      {/* Additional instructions */}
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
            placeholder="e.g. Prefer point-wise answers, focus on formulas, include diagrams, word limit 200 per topic..."
            rows={3}
            className="input-field resize-none pr-24 w-full"
          />
          <div className="absolute right-2 bottom-2 flex items-center gap-1">
            <MicButton onResult={handleMicResult} size="sm" />
            <FileAttach files={files} onChange={setFiles} className="flex-row" />
          </div>
        </div>
        {files.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {files.map((f, i) => (
              <span key={i} className="text-[10px] text-[var(--text-muted)] bg-[var(--surface-2)] px-2 py-0.5 rounded-full">
                {f.name}
              </span>
            ))}
          </div>
        )}
      </div>

      <button
        onClick={handleSubmit}
        disabled={!subject || !chapter || loading}
        className={cn(
          'w-full justify-center flex items-center gap-2 py-3 rounded-xl font-semibold text-sm transition-all',
          loading
            ? 'bg-blue-500/20 text-blue-400 cursor-wait'
            : 'bg-gradient-to-r from-[var(--brand-a)] to-[var(--brand-b)] text-white hover:shadow-lg hover:shadow-blue-500/20 disabled:opacity-40 disabled:cursor-not-allowed'
        )}
      >
        {loading ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Generating Notes...
          </>
        ) : (
          <>
            <Sparkles size={16} />
            Generate Notes
          </>
        )}
      </button>
    </div>
  );
}
