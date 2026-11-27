import React from 'react';

/**
 * Small "Part II" chip with an explanatory popover. Shown on books/chapters
 * from the second part of a textbook (e.g. Ganita Manjari Part II,
 * Understanding Society Part II) so students can tell the two parts apart.
 */
export default function PartTwoBadge({ className = '' }: { className?: string }) {
  const [open, setOpen] = React.useState(false);
  return (
    <span className={`relative inline-flex ${className}`}>
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
        aria-label="About Part II solutions"
        className="px-2 py-0.5 rounded-full bg-blue-500/15 border border-blue-500/40 text-blue-600 dark:text-blue-300 text-[9px] font-bold uppercase tracking-[0.14em] hover:bg-blue-500/25 transition-colors cursor-pointer"
      >
        Part II
      </button>
      {open && (
        <span className="absolute z-40 left-0 top-full mt-2 w-64 rounded-xl border border-blue-500/30 bg-[var(--surface-0)] shadow-lg p-3.5 text-left block">
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close"
            className="absolute top-1.5 right-2 text-[var(--text-muted)] hover:text-[var(--text-primary)] text-sm leading-none"
          >
            ✕
          </button>
          <p className="text-[11px] font-bold uppercase tracking-wider text-blue-500 mb-1.5">Part II</p>
          <p className="text-xs text-[var(--text-secondary)] leading-relaxed pr-3">
            Solutions from Part II of this textbook. Use the Part I / Part II switcher on the book page to move between the two parts.
          </p>
        </span>
      )}
    </span>
  );
}
