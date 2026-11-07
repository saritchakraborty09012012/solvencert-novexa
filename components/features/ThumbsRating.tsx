import React, { useState } from 'react';
import { ThumbsUp, ThumbsDown } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { cn } from '@/utils/helpers';

interface Props {
  subject: string;
  chapterNumber: number;
  exerciseLabel: string;
  /** Unique key for this specific answer/reply — used only for the local "already reacted" guard, never sent to the server. */
  itemKey: string;
  className?: string;
}

type Reaction = 'up' | 'double_up' | 'down';

function storageKey(itemKey: string) {
  return `sn_reacted_${itemKey}`;
}

export default function ThumbsRating({ subject, chapterNumber, exerciseLabel, itemKey }: Props) {
  const [reacted, setReacted] = useState<Reaction | null>(() => {
    if (typeof window === 'undefined') return null;
    return (localStorage.getItem(storageKey(itemKey)) as Reaction | null) || null;
  });
  const [busy, setBusy] = useState(false);

  async function react(kind: Reaction) {
    if (busy || reacted) return; // one reaction per browser per answer — soft abuse guard + avoids double counting
    setBusy(true);
    try {
      await supabase.rpc('react_to_answer', {
        p_subject: subject, p_chapter_number: chapterNumber, p_exercise_label: exerciseLabel, p_reaction: kind,
      });
      localStorage.setItem(storageKey(itemKey), kind);
      setReacted(kind);
    } catch {
      // silent fail — non-critical UX, no need to alarm the user over a reaction click
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="flex items-center gap-1.5 mt-2">
      <button
        onClick={() => react('up')}
        disabled={!!reacted || busy}
        title="Helpful"
        className={cn('p-1.5 rounded-lg transition-colors', reacted === 'up' ? 'bg-green-100 dark:bg-green-900/30 text-green-600' : 'text-[var(--text-muted)] hover:bg-[var(--surface-2)]', reacted && reacted !== 'up' && 'opacity-40')}
      >
        <ThumbsUp size={13} fill={reacted === 'up' ? 'currentColor' : 'none'} />
      </button>
      <button
        onClick={() => react('double_up')}
        disabled={!!reacted || busy}
        title="Very good"
        className={cn('flex items-center px-1 py-1.5 rounded-lg transition-colors', reacted === 'double_up' ? 'bg-green-100 dark:bg-green-900/30 text-green-600' : 'text-[var(--text-muted)] hover:bg-[var(--surface-2)]', reacted && reacted !== 'double_up' && 'opacity-40')}
      >
        <ThumbsUp size={13} fill={reacted === 'double_up' ? 'currentColor' : 'none'} />
        <ThumbsUp size={13} fill={reacted === 'double_up' ? 'currentColor' : 'none'} className="-ml-1.5" />
      </button>
      <button
        onClick={() => react('down')}
        disabled={!!reacted || busy}
        title="Not helpful"
        className={cn('p-1.5 rounded-lg transition-colors', reacted === 'down' ? 'bg-red-100 dark:bg-red-900/30 text-red-500' : 'text-[var(--text-muted)] hover:bg-[var(--surface-2)]', reacted && reacted !== 'down' && 'opacity-40')}
      >
        <ThumbsDown size={13} fill={reacted === 'down' ? 'currentColor' : 'none'} />
      </button>
      {reacted && <span className="text-[10px] text-[var(--text-muted)] ml-1">Thanks for the feedback!</span>}
    </div>
  );
}
