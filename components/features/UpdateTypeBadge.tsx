import React from 'react';
import { Sparkles, BookOpen, Wrench, Rocket, type LucideIcon } from 'lucide-react';
import { UPDATE_TYPE_LABEL, type UpdateType } from '@/lib/updates';
import { cn } from '@/utils/helpers';

/**
 * Coloured pill describing an update's kind. Class strings live here (not in
 * lib/updates.ts) so Tailwind's content scan picks them up.
 */
const STYLES: Record<UpdateType, { tone: string; Icon: LucideIcon }> = {
  feature: {
    tone: 'bg-blue-500/10 text-blue-600 dark:text-blue-300 border-blue-500/25',
    Icon: Sparkles,
  },
  content: {
    tone: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 border-emerald-500/25',
    Icon: BookOpen,
  },
  fix: {
    tone: 'bg-amber-500/10 text-amber-600 dark:text-amber-300 border-amber-500/25',
    Icon: Wrench,
  },
  release: {
    tone: 'bg-violet-500/10 text-violet-600 dark:text-violet-300 border-violet-500/25',
    Icon: Rocket,
  },
};

export default function UpdateTypeBadge({ type, className }: { type: UpdateType; className?: string }) {
  const { tone, Icon } = STYLES[type];
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 px-2 py-0.5 rounded-full border text-[9px] font-bold uppercase tracking-[0.12em]',
        tone,
        className,
      )}
    >
      <Icon size={10} />
      {UPDATE_TYPE_LABEL[type]}
    </span>
  );
}
