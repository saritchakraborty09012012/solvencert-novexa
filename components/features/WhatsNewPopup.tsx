import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  BookOpen,
  Check,
  Rocket,
  Sparkles,
  Wrench,
  X,
  type LucideIcon,
} from 'lucide-react';
import { useAuthStore } from '@/store/authStore';
import {
  UPDATES,
  formatUpdateDate,
  getUpdatesForSignup,
  type UpdateEntry,
  type UpdateType,
} from '@/lib/updates';
import UpdateTypeBadge from '@/components/features/UpdateTypeBadge';

/**
 * Celebratory "What's New" popup.
 *
 * One update per popup. If a visitor missed several updates they are shown one
 * after another (newest first) — never as a long list inside a single card.
 *
 * Visibility rules:
 *   • Logged-in users see updates dated on/after their signup day.
 *   • Guests never see popups on their very first visit. That visit only
 *     records a baseline (date + latest update id); later visits show the
 *     updates that shipped after that baseline.
 *   • Seen updates are remembered per browser in localStorage, so closing a
 *     popup never hides a different, newer update.
 *
 * "View" navigates to the exact thing that changed. Links may include a
 * `#anchor` (e.g. a question block); HashScrollHandler in _app lands on it.
 */

const SEEN_KEY = 'sn_updates_seen_v1';
const GUEST_SINCE_KEY = 'sn_guest_since_v1';
const GUEST_FIRST_SESSION_KEY = 'sn_guest_first_session';
const GUEST_POPUPS_KEY = 'sn_guest_popups_done';

const CONFETTI_COLORS = [
  '#f59e0b', '#fbbf24', '#fde68a', '#ef4444', '#22c55e',
  '#3b82f6', '#a855f7', '#ec4899', '#38bdf8',
];

const TYPE_ICON: Record<UpdateType, LucideIcon> = {
  feature: Sparkles,
  content: BookOpen,
  fix: Wrench,
  release: Rocket,
};

interface GuestSince {
  date: string;
  latestId: string;
}

/** Ids of updates this browser has already dismissed. */
function readSeenIds(): Set<string> {
  try {
    const raw = window.localStorage.getItem(SEEN_KEY);
    if (!raw) return new Set();
    const parsed = JSON.parse(raw) as unknown;
    // Legacy shape: a bare id string.
    if (typeof parsed === 'string') return new Set([parsed]);
    if (parsed && typeof parsed === 'object') {
      const record = parsed as { ids?: unknown; id?: unknown };
      if (Array.isArray(record.ids)) {
        return new Set(record.ids.filter((id): id is string => typeof id === 'string'));
      }
      // Legacy shape: { id, date }.
      if (typeof record.id === 'string') return new Set([record.id]);
    }
  } catch {
    /* storage unavailable or malformed — treat as never seen */
  }
  return new Set();
}

function markSeen(entries: UpdateEntry[]) {
  if (entries.length === 0) return;
  try {
    const ids = readSeenIds();
    entries.forEach((entry) => ids.add(entry.id));
    window.localStorage.setItem(SEEN_KEY, JSON.stringify({ ids: Array.from(ids) }));
  } catch {
    /* ignore */
  }
}

function readGuestSince(): GuestSince | null {
  try {
    const raw = window.localStorage.getItem(GUEST_SINCE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as { date?: unknown; latestId?: unknown };
    if (typeof parsed?.date === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(parsed.date)) {
      return {
        date: parsed.date,
        latestId: typeof parsed.latestId === 'string' ? parsed.latestId : '',
      };
    }
  } catch {
    /* ignore */
  }
  return null;
}

function writeGuestSince() {
  try {
    const now = new Date();
    const date = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(
      now.getDate(),
    ).padStart(2, '0')}`;
    window.localStorage.setItem(
      GUEST_SINCE_KEY,
      JSON.stringify({ date, latestId: UPDATES[0]?.id ?? '' }),
    );
  } catch {
    /* ignore */
  }
}

/** True only during the browser session in which the guest first arrived. */
function isFirstGuestSession(): boolean {
  try {
    return window.sessionStorage.getItem(GUEST_FIRST_SESSION_KEY) === '1';
  } catch {
    return false;
  }
}

function markFirstGuestSession() {
  try {
    window.sessionStorage.setItem(GUEST_FIRST_SESSION_KEY, '1');
  } catch {
    /* ignore */
  }
}

/** Updates that shipped after the guest's first visit and are still unseen. */
function guestPending(seen: Set<string>, since: GuestSince): UpdateEntry[] {
  const baselineIndex = since.latestId
    ? UPDATES.findIndex((update) => update.id === since.latestId)
    : -1;
  const newer =
    baselineIndex >= 0
      ? UPDATES.slice(0, baselineIndex)
      : UPDATES.filter((update) => update.date > since.date);
  return newer.filter((update) => !seen.has(update.id));
}

export default function WhatsNewPopup() {
  const { user, isGuest, loading } = useAuthStore();
  const [queue, setQueue] = useState<UpdateEntry[]>([]);
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (loading || typeof window === 'undefined') return;

    const seen = readSeenIds();
    let pending: UpdateEntry[] = [];

    if (isGuest) {
      const since = readGuestSince();
      if (!since) {
        // Very first visit: record a baseline, but never pop up.
        writeGuestSince();
        markFirstGuestSession();
        return;
      }
      if (isFirstGuestSession()) return;
      pending = guestPending(seen, since);
    } else {
      const available = getUpdatesForSignup(user?.created_at);
      // A fresh browser shows only the newest update; a browser that already
      // saw something gets every update newer than what it has seen.
      pending = seen.size === 0 ? available.slice(0, 1) : available.filter((u) => !seen.has(u.id));
    }

    if (pending.length === 0) return;

    let cancelled = false;
    let interval = 0;

    const reveal = () => {
      if (cancelled) return;
      setQueue(pending);
      setIndex(0);
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

  const current = queue[index] ?? null;

  /** X / backdrop / Esc: dismiss the whole batch. */
  const closeAll = useCallback(() => {
    markSeen(queue);
    setOpen(false);
  }, [queue]);

  /** "Got it" / "Next update": dismiss this one and show the next if any. */
  const next = useCallback(() => {
    const entry = queue[index];
    if (entry) markSeen([entry]);
    if (index + 1 < queue.length) {
      setIndex((value) => value + 1);
    } else {
      setOpen(false);
    }
  }, [queue, index]);

  /** "View": dismiss this one, navigate, and leave the rest for next visit. */
  const openLink = useCallback(() => {
    const entry = queue[index];
    if (entry) markSeen([entry]);
    setOpen(false);
  }, [queue, index]);

  // Esc closes the popup.
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeAll();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open, closeAll]);

  // Don't let the page scroll behind the modal.
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  // Fresh confetti for each update in the queue.
  const pieces = useMemo(() => {
    if (!open) return [];
    return Array.from({ length: 46 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 0.9,
      duration: 2.8 + Math.random() * 2.2,
      size: 5 + Math.random() * 7,
      color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
      round: Math.random() > 0.5,
    }));
  }, [open, index]);

  if (!open || !current) return null;

  const Icon = TYPE_ICON[current.type];
  const hasNext = index + 1 < queue.length;
  const settingsLink = current.href?.startsWith('/settings') ?? false;
  const showLink = !!current.href && !(isGuest && settingsLink);
  const actionLabel = hasNext ? 'Next update' : 'Got it';

  return (
    <div className="fixed inset-0 z-[90] flex items-end sm:items-center justify-center p-0 sm:p-4 overflow-hidden">
      {/* Celebration confetti */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        {pieces.map((piece) => (
          <span
            key={piece.id}
            className="confetti-piece"
            style={{
              left: `${piece.left}%`,
              width: piece.size,
              height: Math.max(4, piece.size * (piece.round ? 1 : 0.5)),
              background: piece.color,
              borderRadius: piece.round ? '50%' : '2px',
              animationDelay: `${piece.delay}s`,
              animationDuration: `${piece.duration}s`,
            }}
          />
        ))}
      </div>

      <div
        className="absolute inset-0 bg-black/65 backdrop-blur-sm animate-fade-in"
        onClick={closeAll}
        aria-hidden="true"
      />

      <div
        key={current.id}
        role="dialog"
        aria-modal="true"
        aria-labelledby="whats-new-title"
        className="whatsnew-glow relative w-full max-w-md max-h-[90vh] sm:max-h-[88vh] flex flex-col overflow-hidden rounded-t-3xl sm:rounded-3xl border-2 border-white/30 dark:border-white/10 bg-[var(--surface-0)] shadow-2xl animate-scale-in"
      >
        {/* Animated rainbow ribbon */}
        <div className="whatsnew-topbar h-1.5 flex-shrink-0 bg-gradient-to-r from-blue-500 via-fuchsia-500 to-amber-400" />

        <button
          type="button"
          onClick={closeAll}
          aria-label="Close"
          className="absolute top-4 right-3.5 z-10 p-1.5 rounded-lg bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-[var(--text-muted)] transition-colors"
        >
          <X size={16} />
        </button>

        <div className="overflow-y-auto px-6 pt-7 pb-5 text-center">
          <div className="relative inline-flex mb-3">
            <span className="whatsnew-spark absolute -left-7 top-1 text-amber-400" aria-hidden="true">
              <Sparkles size={16} />
            </span>
            <span
              className="whatsnew-spark absolute -right-7 bottom-1 text-fuchsia-400"
              style={{ animationDelay: '0.5s' }}
              aria-hidden="true"
            >
              <Sparkles size={14} />
            </span>
            <span
              className="whatsnew-pop grid size-16 place-items-center rounded-2xl text-white shadow-xl shadow-blue-500/30"
              style={{ background: 'linear-gradient(135deg, var(--brand-primary), #a855f7)' }}
            >
              <Icon size={28} />
            </span>
          </div>

          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-fuchsia-500 dark:text-fuchsia-400">
            {queue.length > 1 ? `Update ${index + 1} of ${queue.length}` : 'Just dropped'}
          </p>

          <h2
            id="whats-new-title"
            className="mt-1 text-xl sm:text-2xl font-display font-bold text-[var(--text-primary)] leading-tight"
          >
            {current.title}
          </h2>

          <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
            {current.summary}
          </p>

          <div className="mt-3 flex flex-wrap items-center justify-center gap-2">
            <UpdateTypeBadge type={current.type} />
            <span className="text-[11px] text-[var(--text-muted)]">
              {formatUpdateDate(current.date)}
            </span>
            {current.beta && (
              <span
                className="px-2 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/40 text-amber-600 dark:text-amber-400 text-[9px] font-bold uppercase tracking-[0.14em]"
                title="This is a beta feature and is still under testing and constant improvement."
              >
                Beta
              </span>
            )}
          </div>
        </div>

        <div className="mt-auto border-t border-[var(--border)] bg-[var(--surface-1)]/60 p-4 sm:p-5 space-y-2.5">
          {showLink ? (
            <Link
              href={current.href as string}
              onClick={openLink}
              className="group flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-500/25 transition-transform hover:scale-[1.02] active:scale-[0.99]"
              style={{ background: 'linear-gradient(135deg, var(--brand-primary), #a855f7)' }}
            >
              {current.hrefLabel || 'View'}
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          ) : (
            <button
              type="button"
              onClick={next}
              className="flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-500/25 transition-transform hover:scale-[1.02] active:scale-[0.99]"
              style={{ background: 'linear-gradient(135deg, var(--brand-primary), #a855f7)' }}
            >
              {actionLabel}
              <Check size={16} />
            </button>
          )}

          <div className="flex items-center justify-between gap-3 px-0.5">
            {!isGuest ? (
              <Link
                href="/settings/updates"
                onClick={openLink}
                className="text-[12px] font-semibold text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
              >
                All updates
              </Link>
            ) : (
              <span />
            )}

            {showLink && (
              <button
                type="button"
                onClick={next}
                className="text-[12px] font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
              >
                {actionLabel}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
