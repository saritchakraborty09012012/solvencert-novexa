import React, { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, X } from 'lucide-react';
import { useAuthStore } from '@/store/authStore';
import {
  UPDATES,
  formatUpdateDate,
  getUpdatesForSignup,
  type UpdateEntry,
} from '@/lib/updates';
import UpdateTypeBadge from '@/components/features/UpdateTypeBadge';

/**
 * Dismissible "What's New" popup.
 *
 * Shown to everyone — guest, free and premium — on their first visit after an
 * update, then never again for that update (per browser). Closing it via the X,
 * the backdrop, Esc or "Got it" records the newest update id in localStorage.
 *
 * If a returning visitor missed more than one update, every update newer than
 * the last one they saw is listed in the same popup. A brand-new browser only
 * sees the single latest update, so a first-time visitor is never hit with the
 * whole history.
 */

const SEEN_KEY = 'sn_updates_seen_v1';
const GUEST_POPUPS_KEY = 'sn_guest_popups_done';

interface SeenRecord {
  id: string;
  date: string;
}

function readSeen(): SeenRecord | null {
  try {
    const raw = window.localStorage.getItem(SEEN_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as unknown;
    if (parsed && typeof parsed === 'object' && 'id' in parsed) {
      const record = parsed as { id?: unknown; date?: unknown };
      if (typeof record.id === 'string') {
        return { id: record.id, date: typeof record.date === 'string' ? record.date : '' };
      }
    }
    // Defensive: an older/bare id string.
    if (typeof parsed === 'string') return { id: parsed, date: '' };
  } catch {
    /* storage unavailable or malformed — treat as never seen */
  }
  return null;
}

function writeSeen(entry: UpdateEntry) {
  try {
    window.localStorage.setItem(SEEN_KEY, JSON.stringify({ id: entry.id, date: entry.date }));
  } catch {
    /* ignore */
  }
}

/** Updates newer than the last one this browser saw, within the given list. */
function unseenFrom(available: UpdateEntry[]): UpdateEntry[] {
  const seen = readSeen();
  if (!seen) return available.slice(0, 1);

  const seenIndex = UPDATES.findIndex((u) => u.id === seen.id);
  if (seenIndex === -1) {
    // The seen entry no longer exists in the log — fall back to dates.
    return seen.date ? available.filter((u) => u.date > seen.date) : available.slice(0, 1);
  }
  return available.filter((u) => UPDATES.indexOf(u) < seenIndex);
}

export default function WhatsNewPopup() {
  const { user, isGuest, loading } = useAuthStore();
  const [updates, setUpdates] = useState<UpdateEntry[]>([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (loading || typeof window === 'undefined') return;

    // Logged-in users never see updates that predate their signup. Guests have
    // no signup date, so they simply get whatever they have not seen yet.
    const available = isGuest ? UPDATES : getUpdatesForSignup(user?.created_at);
    const pending = unseenFrom(available);
    if (pending.length === 0) return;

    let cancelled = false;
    let interval = 0;

    const reveal = () => {
      if (cancelled) return;
      setUpdates(pending);
      setOpen(true);
    };

    // Small delay so the popup does not compete with the first paint. For
    // guests, also wait for the one-time onboarding popups to finish so the
    // two overlays never stack on top of each other.
    const timer = window.setTimeout(() => {
      if (cancelled) return;

      let guestPopupsDone = true;
      try {
        guestPopupsDone = window.sessionStorage.getItem(GUEST_POPUPS_KEY) === '1';
      } catch {
        /* ignore */
      }
      if (!isGuest || guestPopupsDone) {
        reveal();
        return;
      }

      let waited = 0;
      interval = window.setInterval(() => {
        waited += 700;
        let done = false;
        try {
          done = window.sessionStorage.getItem(GUEST_POPUPS_KEY) === '1';
        } catch {
          /* ignore */
        }
        // Fall back after ~21s in case onboarding never marks itself done.
        if (done || waited >= 21000) {
          window.clearInterval(interval);
          reveal();
        }
      }, 700);
    }, 1400);

    return () => {
      cancelled = true;
      window.clearTimeout(timer);
      if (interval) window.clearInterval(interval);
    };
  }, [loading, isGuest, user?.id, user?.created_at]);

  const close = useCallback(() => {
    setOpen(false);
    const newest = updates[0];
    if (newest) writeSeen(newest);
  }, [updates]);

  // Esc closes the popup.
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open, close]);

  // Don't let the page scroll behind the modal.
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  if (!open || updates.length === 0) return null;

  const latest = updates[0];
  const hasSeveral = updates.length > 1;

  return (
    <div className="fixed inset-0 z-[90] flex items-end sm:items-center justify-center p-0 sm:p-4">
      <div
        className="absolute inset-0 bg-black/55 backdrop-blur-sm animate-fade-in"
        onClick={close}
        aria-hidden="true"
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="whats-new-title"
        className="relative w-full max-w-lg max-h-[88vh] sm:max-h-[85vh] flex flex-col rounded-t-2xl sm:rounded-2xl border border-[var(--border)] bg-[var(--surface-0)] shadow-2xl animate-scale-in"
      >
        {/* Header */}
        <div className="flex items-start gap-3 p-5 sm:p-6 pb-4 border-b border-[var(--border)]">
          <span
            className="grid size-10 place-items-center rounded-xl text-white flex-shrink-0"
            style={{ background: 'var(--brand-primary)' }}
          >
            <Sparkles size={18} />
          </span>
          <div className="flex-1 min-w-0">
            <h2 id="whats-new-title" className="text-lg font-display font-bold text-[var(--text-primary)] leading-tight">
              What&apos;s New
            </h2>
            <p className="text-xs text-[var(--text-muted)] mt-0.5">
              {hasSeveral
                ? `${updates.length} updates since your last visit`
                : `Updated ${formatUpdateDate(latest.date)}`}
            </p>
          </div>
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="p-1.5 -mt-1 -mr-1 rounded-lg hover:bg-[var(--surface-2)] text-[var(--text-muted)] transition-colors"
          >
            <X size={16} />
          </button>
        </div>

        {/* Update list */}
        <div className="overflow-y-auto px-5 sm:px-6 py-4 space-y-5">
          {updates.map((update) => {
            const settingsLink = update.href?.startsWith('/settings');
            return (
              <article key={update.id}>
                <div className="flex flex-wrap items-center gap-2 mb-1.5">
                  <UpdateTypeBadge type={update.type} />
                  <span className="text-[11px] text-[var(--text-muted)]">
                    {formatUpdateDate(update.date)}
                  </span>
                  {update.beta && (
                    <span
                      className="px-2 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/40 text-amber-600 dark:text-amber-400 text-[9px] font-bold uppercase tracking-[0.14em]"
                      title="This is a beta feature and is still under testing and constant improvement."
                    >
                      Beta
                    </span>
                  )}
                </div>

                <h3 className="text-sm font-bold text-[var(--text-primary)]">{update.title}</h3>
                <p className="text-[13px] leading-relaxed text-[var(--text-secondary)] mt-1">
                  {update.summary}
                </p>
                {update.body && (
                  <p className="text-[13px] leading-relaxed text-[var(--text-muted)] mt-1">
                    {update.body}
                  </p>
                )}

                {update.href && !(isGuest && settingsLink) && (
                  <Link
                    href={update.href}
                    onClick={close}
                    className="inline-flex items-center gap-1 text-[13px] font-semibold text-blue-500 hover:text-blue-600 mt-2"
                  >
                    {update.hrefLabel || 'Open'} <ArrowRight size={13} />
                  </Link>
                )}
              </article>
            );
          })}
        </div>

        {/* Footer */}
        <div className="flex items-center gap-3 p-5 sm:p-6 pt-4 border-t border-[var(--border)]">
          {!isGuest && (
            <Link
              href="/settings/updates"
              onClick={close}
              className="text-[13px] font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
            >
              View all updates
            </Link>
          )}
          <button
            type="button"
            onClick={close}
            className="ml-auto px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-opacity hover:opacity-90"
            style={{ background: 'var(--brand-primary)' }}
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  );
}
