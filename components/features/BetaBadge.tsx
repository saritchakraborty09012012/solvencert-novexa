import React from 'react';

/**
 * Small "Beta" chip with an explanatory popover. Used for books/features that
 * are live but still being refined (e.g. Ganita Manjari Part II, SST Part II).
 */
export default function BetaBadge({ className = '' }: { className?: string }) {
  const [open, setOpen] = React.useState(false);
  return (
    <span className={`relative inline-flex ${className}`}>
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
        aria-label="About this beta feature"
        className="px-2 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/40 text-amber-600 dark:text-amber-400 text-[9px] font-bold uppercase tracking-[0.14em] hover:bg-amber-500/25 transition-colors cursor-pointer"
      >
        Beta
      </button>
      {open && (
        <span className="absolute z-40 left-0 top-full mt-2 w-64 rounded-xl border border-amber-500/30 bg-[var(--surface-0)] shadow-lg p-3.5 text-left block">
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close"
            className="absolute top-1.5 right-2 text-[var(--text-muted)] hover:text-[var(--text-primary)] text-sm leading-none"
          >
            ✕
          </button>
          <p className="text-[11px] font-bold uppercase tracking-wider text-amber-500 mb-1.5">Beta feature</p>
          <p className="text-xs text-[var(--text-secondary)] leading-relaxed pr-3">
            This is a beta feature and is still under testing and constant improvement. Content and pages may change as we keep refining it.
          </p>
        </span>
      )}
    </span>
  );
}
