import { useEffect, useState } from 'react';
import { cn } from '@/utils/helpers';

export const LIGHT_THEME_NOTICE =
  'This mood does not support light theme. Select other moods for accessing it.';

/**
 * Lazy opacity popup: mounts on `text`, fades in, lingers, fades off, unmounts.
 * Re-triggerable — the consumer nulls `text` after its own window and can set
 * the same message again for the next click.
 */
export default function FadeNotice({ text, duration = 3200 }: { text: string | null; duration?: number }) {
  const [current, setCurrent] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!text) {
      setVisible(false);
      const t = setTimeout(() => setCurrent(null), 500);
      return () => clearTimeout(t);
    }
    setCurrent(text);
    // double rAF so the initial opacity-0 paint lands before the fade-in
    const raf = requestAnimationFrame(() => requestAnimationFrame(() => setVisible(true)));
    const hide = setTimeout(() => setVisible(false), duration);
    const unmount = setTimeout(() => setCurrent(null), duration + 500);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(hide);
      clearTimeout(unmount);
    };
  }, [text, duration]);

  if (!current) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className={cn(
        'fixed left-1/2 top-1/2 z-[200] -translate-x-1/2 -translate-y-1/2',
        'max-w-[86vw] sm:max-w-md px-5 py-4 rounded-2xl',
        'bg-[var(--surface-2)] border border-[var(--border)] shadow-soft-xl',
        'text-sm font-medium text-[var(--text-primary)] text-center',
        'transition-opacity duration-500',
        visible ? 'opacity-100' : 'opacity-0',
      )}
    >
      {current}
    </div>
  );
}
