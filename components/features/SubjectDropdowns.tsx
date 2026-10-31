import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { ChevronDown, ArrowRight, BookOpen } from 'lucide-react';
import { CLASS_9_SUBJECTS, subjectOptions } from '@/lib/content';

export default function SubjectDropdowns({ onGuestLimit }: { onGuestLimit?: () => void }) {
  const router = useRouter();
  const [cls,  setCls]  = useState('');
  const [subj, setSubj] = useState('');
  const [chap, setChap] = useState('');

  const subjects = cls === 'class-9' ? CLASS_9_SUBJECTS.filter(s => s.id !== 'it-part-a') : [];
  const subject  = subjects.find(s => s.id === subj);
  const chapters = subject?.chapters || [];
  // Keyed by subject id so books sharing a subject name (Social Science I/II,
  // Mathematics I/II) stay selectable as separate entries.
  const subjectChoices = subjectOptions(subjects).map(o =>
    o.value === 'it-part-b' ? { ...o, label: 'IT' } : o);

  function buildUrl(): string|null {
    if (!subject || !chap) return null;
    const ch = subject.chapters.find(c => c.slug === chap);
    if (!ch) return null;
    if (subject.slug === 'english') return `/class-9/english/kaveri/${ch.code}/${ch.slug}`;
    if (subject.slug === 'science') return `/class-9/science/exploration/${ch.code}/${ch.slug}`;
    return `/class-9/${subject.slug}/${subject.bookSlug}/${ch.code}/${ch.slug}`;
  }

  function go() {
    const url = buildUrl();
    if (url) router.push(url);
  }

  const sel = (
    onChange: (v: string) => void,
    value: string,
    placeholder: string,
    options: {value:string; label:string}[],
    disabled=false
  ) => (
    <div className="relative">
      <select value={value}
        onChange={e => onChange(e.target.value)}
        disabled={disabled}
        className="input-field appearance-none pr-10 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed w-full">
        <option value="">{placeholder}</option>
        {options.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
      </select>
      <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)] pointer-events-none"/>
    </div>
  );

  return (
    <div className="space-y-3">
      <div className="grid grid-cols-2 gap-3">
        {sel(setCls,  cls,  'Select Class',   [{ value:'class-9', label:'Class 9' }])}
        {sel(v => { setSubj(v); setChap(''); }, subj, 'Select Subject', subjectChoices, !cls)}
      </div>

      {subject && (
        <div className="grid grid-cols-1 gap-3">
          <div className="input-field bg-[var(--surface-2)] text-[var(--text-muted)] cursor-default select-none text-sm flex items-center gap-2">
            <BookOpen size={14} className="text-[var(--brand-gold)] flex-shrink-0" />
            <span className="truncate">{subject.book}</span>
          </div>
          {sel(setChap, chap, 'Select Chapter', chapters.map(ch=>({value:ch.slug,label:`Ch ${ch.number}: ${ch.title}`})), false)}
        </div>
      )}

      <button onClick={go} disabled={!buildUrl()}
        className="btn-primary w-full justify-center text-sm disabled:opacity-40 disabled:cursor-not-allowed">
        View Solutions <ArrowRight size={14}/>
      </button>
    </div>
  );
}
