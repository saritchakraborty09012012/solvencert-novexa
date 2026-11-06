import React, { useCallback, useEffect, useState } from 'react';
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
import WhatsNewPyro from '@/components/features/WhatsNewPyro';

/**
 * "What's New" popup — styled exactly like the site's other popups
 * (GuestOnboardingPopups / AuthModal): `--surface-0` card, `--border`,
 * `--brand-primary` icon tile and `btn-primary` action, so it follows the
 * active theme and mood automatically.
 *
 * One update per popup. If a visitor missed several updates they are shown one
 * after another (newest first) — never as a long list inside a single card.
 *
 * Visibility rules:
 *   • Logged-in users see updates dated on/after their signup day.
 *   • Guests never see popups on their very first visit. That visit only
 *     records a baseline (date + latest update id); later visits show the
 *     updates that shipped after that baseline.
 *   • Seen updates are remembered per browser in localStorage as a watermark:
 *     only updates newer than the last one the visitor saw are ever queued.
 *     Anything older is skipped forever — a new release never re-shows the
 *     backlog, and a dismissed update never appears again.
 *
 * "View" navigates to the exact thing that changed. Links may include a
 * `#anchor` (e.g. a question block); HashScrollHandler in _app lands on it.
 */

const SEEN_KEY = 'sn_updates_seen_v1';
const GUEST_SINCE_KEY = 'sn_guest_since_v1';
const GUEST_FIRST_SESSION_KEY = 'sn_guest_first_session';
const GUEST_POPUPS_KEY = 'sn_guest_popups_done';

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

/** Index (in the newest-first UPDATES list) of the most recent update this
 *  browser has seen — i.e. the seen watermark. Infinity when nothing seen. */
function newestSeenIndex(seen: Set<string>): number {
  let best = Infinity;
  UPDATES.forEach((update, i) => {
    if (seen.has(update.id) && i < best) best = i;
  });
  return best;
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
  // Watermark: never re-show anything at or older than the newest seen update,
  // even if it was never individually dismissed.
  const watermark = newestSeenIndex(seen);
  return newer.filter((update) => UPDATES.indexOf(update) < watermark && !seen.has(update.id));
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
      // Watermark: only updates newer than the most recent one this browser
      // has seen are ever shown. Older updates that were never individually
      // dismissed are skipped forever, so a new release never resurrects the
      // whole backlog. A fresh browser (nothing seen) gets just the newest.
      const watermark = newestSeenIndex(seen);
      pending =
        seen.size === 0
          ? available.slice(0, 1)
          : available.filter((u) => UPDATES.indexOf(u) < watermark);
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

  if (!open || !current) return null;

  const Icon = TYPE_ICON[current.type];
  const hasNext = index + 1 < queue.length;
  const settingsLink = current.href?.startsWith('/settings') ?? false;
  const showLink = !!current.href && !(isGuest && settingsLink);
  const actionLabel = hasNext ? 'Next update' : 'Got it';

  return (
    <div className="fixed inset-0 z-[90] flex items-end sm:items-center justify-center p-0 sm:p-4">
      <div
        className="absolute inset-0 bg-black/55 backdrop-blur-sm"
        onClick={closeAll}
        aria-hidden="true"
      />

      <div
        key={current.id}
        role="dialog"
        aria-modal="true"
        aria-labelledby="whats-new-title"
        className="relative w-full max-w-md max-h-[90vh] flex flex-col bg-[var(--surface-0)] rounded-t-2xl sm:rounded-2xl shadow-soft-xl border border-[var(--border)] animate-scale-in overflow-hidden"
      >
        {/* Same top accent as the site's other popups (AuthModal). */}
        <div className="h-1 bg-gradient-to-r from-blue-500 via-blue-400 to-indigo-500 flex-shrink-0" />

        <button
          type="button"
          onClick={closeAll}
          aria-label="Close"
          className="absolute top-4 right-4 p-1.5 rounded-lg hover:bg-[var(--surface-2)] text-[var(--text-muted)] z-10 transition-colors"
        >
          <X size={16} />
        </button>

        <div className="overflow-y-auto flex-1 p-5 sm:p-6">
          {/* Header — same pattern as GuestOnboardingPopups / AuthModal */}
          <div className="flex items-center gap-3 mb-4">
            <span
              className="grid size-10 place-items-center rounded-xl text-white flex-shrink-0"
              style={{ background: 'var(--brand-primary)' }}
            >
              <Icon size={18} />
            </span>
            <div className="min-w-0">
              <h2 id="whats-new-title" className="text-lg font-display font-bold text-[var(--text-primary)] leading-tight pr-8">
                What&apos;s New
              </h2>
              <p className="text-xs text-[var(--text-muted)]">
                {queue.length > 1
                  ? `Update ${index + 1} of ${queue.length} · ${formatUpdateDate(current.date)}`
                  : `Updated ${formatUpdateDate(current.date)}`}
              </p>
            </div>
          </div>

          {/* The single update in this popup */}
          <h3 className="text-base font-bold text-[var(--text-primary)]">{current.title}</h3>
          <p className="text-sm leading-relaxed text-[var(--text-secondary)] mt-1">
            {current.summary}
          </p>

          <div className="mt-3 flex flex-wrap items-center gap-2">
            <UpdateTypeBadge type={current.type} />
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

        {/* Actions — site-standard primary button, follows theme + mood */}
        <div className="p-5 sm:p-6 pt-0">
          {showLink ? (
            <Link
              href={current.href as string}
              onClick={openLink}
              className="btn-primary w-full justify-center"
            >
              {current.hrefLabel || 'View'} <ArrowRight size={16} />
            </Link>
          ) : (
            <button type="button" onClick={next} className="btn-primary w-full justify-center">
              {actionLabel} <Check size={16} />
            </button>
          )}

          {(showLink || !isGuest) && (
            <div className="flex items-center justify-between gap-3 mt-3 px-0.5">
              {!isGuest ? (
                <Link
                  href="/settings/updates"
                  onClick={openLink}
                  className="text-xs font-semibold text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
                >
                  View all updates
                </Link>
              ) : (
                <span />
              )}

              {showLink && (
                <button
                  type="button"
                  onClick={next}
                  className="text-xs font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                >
                  {actionLabel}
                </button>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Sparkler fountain + pyrotechnics around the popup (popup only). */}
      <WhatsNewPyro />
    </div>
  );
}
