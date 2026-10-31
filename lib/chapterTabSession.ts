import { useEffect, useRef } from 'react';

/**
 * Per-chapter exercise-tab + scroll memory that lives only for the current
 * browser session (sessionStorage → cleared when the window/tab is closed).
 *
 * Why this exists: chapter pages in the pages-router do NOT remount on
 * client-side chapter navigation, so the selected tab id of chapter A leaks
 * into chapter B, where it matches no exercise → no active tab and an empty
 * exercise list. This hook:
 *   • re-selects the saved tab for the chapter being entered (or `defaultTab`,
 *     usually 'all'), so navigation always lands on a valid tab, and
 *   • remembers the tab + scroll position the user left a chapter on, so
 *     coming back to that chapter restores both.
 *
 * Nothing is written to localStorage: closing the browser window drops the
 * state and the next visit opens on the default tab again.
 */

export interface ChapterTabState {
  tab: string;
  scroll: number;
}

const PREFIX = 'sn_chapter_tab:';

function storageKey(scope: string, code: string, slug: string): string {
  return `${PREFIX}${scope}:${code}/${slug}`;
}

function readTabState(scope: string, code: string, slug: string): ChapterTabState | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = window.sessionStorage.getItem(storageKey(scope, code, slug));
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<ChapterTabState>;
    if (typeof parsed?.tab !== 'string') return null;
    const scroll = typeof parsed.scroll === 'number' && isFinite(parsed.scroll) ? parsed.scroll : 0;
    return { tab: parsed.tab, scroll };
  } catch {
    return null;
  }
}

function writeTabState(scope: string, code: string, slug: string, state: ChapterTabState): void {
  if (typeof window === 'undefined') return;
  try {
    window.sessionStorage.setItem(storageKey(scope, code, slug), JSON.stringify(state));
  } catch {
    /* storage full / private mode — memory simply won't persist */
  }
}

/** Scroll to `target`, re-asserting a few times so the router's own
 *  scroll-to-top on route change cannot win the race. Stops as soon as we
 *  arrive (or the user starts scrolling themselves). */
function restoreScroll(target: number): void {
  if (typeof window === 'undefined' || target <= 40) return;
  let cancelled = false;
  let attempts = 0;
  let timer = 0;

  const stop = () => {
    cancelled = true;
    window.clearTimeout(timer);
    window.removeEventListener('wheel', stop);
    window.removeEventListener('touchstart', stop);
  };

  const step = () => {
    if (cancelled) return;
    const root = document.documentElement;
    const prevBehavior = root.style.scrollBehavior;
    root.style.scrollBehavior = 'auto'; // defeat CSS smooth-scroll during restore
    window.scrollTo(0, target);
    root.style.scrollBehavior = prevBehavior;
    attempts += 1;
    if (Math.abs(window.scrollY - target) <= 2 || attempts >= 8) { stop(); return; }
    timer = window.setTimeout(step, 150);
  };

  window.addEventListener('wheel', stop, { once: true, passive: true });
  window.addEventListener('touchstart', stop, { once: true, passive: true });
  timer = window.setTimeout(step, 50);
}

export interface ChapterTabSessionOptions<T extends string> {
  /** Namespace so books/subjects never collide (e.g. 'ganita-manjari'). */
  scope: string;
  code: string;
  slug: string;
  tab: T;
  setTab: (tab: T) => void;
  /** Whether `tab` actually exists for the chapter being displayed. */
  isTabValid: (tab: T) => boolean;
  /** Tab to fall back to when nothing is saved (default 'all'). */
  defaultTab?: T;
}

export function useChapterTabSession<T extends string>({
  scope, code, slug, tab, setTab, isTabValid, defaultTab = 'all' as T,
}: ChapterTabSessionOptions<T>): void {
  const tabRef = useRef(tab);
  tabRef.current = tab;

  const key = `${scope}:${code}/${slug}`;
  const keyRef = useRef(key);
  const quietUntil = useRef(0);
  // Tab value the restore/default just applied — effect (2) must not treat it
  // as a user click (it would clobber the saved scroll with scrollY=0).
  const ignoreTab = useRef<string | null>(null);

  if (keyRef.current !== key) {
    // Chapter changed at render time: switch the save-target immediately and
    // silence the route-change scroll-to-top so it can't be recorded as this
    // chapter's reading position.
    keyRef.current = key;
    quietUntil.current = Date.now() + 900;
  }

  // (1) Entering a chapter → restore its saved tab (or the default) + position.
  useEffect(() => {
    const saved = readTabState(scope, code, slug);
    const valid = saved !== null && isTabValid(saved.tab as T);
    const target = valid ? (saved!.tab as T) : defaultTab;
    ignoreTab.current = target;
    setTab(target);
    quietUntil.current = Date.now() + 900;
    if (saved) restoreScroll(saved.scroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scope, code, slug]);

  // (2) Tab clicks → persist immediately (including the current position).
  useEffect(() => {
    if (keyRef.current !== key) return;      // stale closure from another chapter
    if (ignoreTab.current === tab) {         // this change came from the restore
      ignoreTab.current = null;
      return;
    }
    ignoreTab.current = null;                // consume any stale marker
    writeTabState(scope, code, slug, { tab, scroll: window.scrollY });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab]);

  // (3) Scrolling within the current chapter → keep the position fresh.
  useEffect(() => {
    let timer = 0;
    const flush = () => {
      timer = 0;
      if (Date.now() < quietUntil.current) return;
      if (keyRef.current !== key) return;
      writeTabState(scope, code, slug, { tab: tabRef.current, scroll: window.scrollY });
    };
    const onScroll = () => {
      if (!timer) timer = window.setTimeout(flush, 150);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (timer) window.clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scope, code, slug]);
}
