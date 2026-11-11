import type { AppProps } from 'next/app';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { Toaster } from 'react-hot-toast';
import { supabase } from '@/lib/supabase';
import { useAuthStore } from '@/store/authStore';
import { useCollabStore, attachCollabChannel } from '@/store/collabStore';
import CollabPresenceBar from '@/components/collab/CollabPresenceBar';
import CollabBanner from '@/components/collab/CollabBanner';
import { initTheme } from '@/store/themeStore';
import { initUI } from '@/store/uiStore';
import { initPostHog, captureEvent } from '@/lib/analytics';
import { initSharedLearningOnLogin, initSharedLearningOnLogout } from '@/lib/mock-tests/shared-knowledge';
import { setStorageUserId, loadAllFromSupabase, clearAllStorageOnLogout } from '@/lib/mock-tests/storage';
import TunnelLoader from '@/components/features/BrainLoader';
import GuestOnboardingPopups from '@/components/features/GuestOnboardingPopups';
import WhatsNewPopup from '@/components/features/WhatsNewPopup';
import HashScrollHandler from '@/components/features/HashScrollHandler';
import '@/styles/globals.css';
import '@/styles/ui3.css';
import '@/styles/ganita-notebook.css';
import '@/styles/notes-notebook.css';

export default function App({ Component, pageProps }: AppProps) {
  const router   = useRouter();
  const { fetchProfile, setUser, setLoading } = useAuthStore();
  const [loaderState, setLoaderState] = useState<'hidden' | 'loading' | 'finish'>('hidden');
  const loaderStateRef = useRef<'hidden' | 'loading' | 'finish'>('hidden');
  const showTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hideTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const shownAtRef = useRef(0);

  const setLoader = (next: 'hidden' | 'loading' | 'finish') => {
    loaderStateRef.current = next;
    setLoaderState(next);
  };

  // ── Page-transition solar loader ─────────────────────────────────────────
  // The destination page loads IN THE BACKGROUND while the loader is on screen.
  // The loader is removed only after that page has been committed, painted,
  // fonts are ready and its eager images have decoded — so it never disappears
  // while the student is still staring at the old/blank page. If the next route
  // is ready almost instantly it is never shown at all (no flash).
  useEffect(() => {
    let cancelled = false;
    let watchdog: ReturnType<typeof setTimeout> | null = null;
    const SHOW_DELAY_MS = 120;    // don't flash for instant navigations
    const MIN_VISIBLE_MS = 420;   // once shown, stay at least this long
    const FADE_MS = 240;          // quick fade once the page is ready
    const PAINT_CAP_MS = 1600;    // safety: never hang on a stalled image
    const IMAGE_CAP_MS = 800;
    const FONTS_CAP_MS = 350;     // fallback faces are fine; don't wait for webfonts
    const WATCHDOG_MS = 20000;    // safety: never leave the loader stuck

    const clearWatchdog = () => {
      if (watchdog) { clearTimeout(watchdog); watchdog = null; }
    };

    const clearShowTimer = () => {
      if (showTimerRef.current) { clearTimeout(showTimerRef.current); showTimerRef.current = null; }
    };
    const clearHideTimer = () => {
      if (hideTimerRef.current) { clearTimeout(hideTimerRef.current); hideTimerRef.current = null; }
    };

    const hide = () => {
      if (cancelled) return;
      clearHideTimer();
      const shownFor = shownAtRef.current ? Date.now() - shownAtRef.current : MIN_VISIBLE_MS;
      const wait = Math.max(0, MIN_VISIBLE_MS - shownFor);
      hideTimerRef.current = setTimeout(() => {
        if (cancelled) return;
        setLoader('finish');
        hideTimerRef.current = setTimeout(() => { if (!cancelled) setLoader('hidden'); }, FADE_MS + 60);
      }, wait);
    };

    /** Run `cb` once the destination page has actually been painted. */
    const whenPainted = (cb: () => void) => {
      if (typeof window === 'undefined' || typeof window.requestAnimationFrame !== 'function') { cb(); return; }
      let settled = false;
      const settle = () => {
        if (settled) return;
        settled = true;
        window.clearTimeout(guard);
        cb();
      };
      const guard = window.setTimeout(settle, PAINT_CAP_MS);

      const waitImages = () => {
        const startedAt = Date.now();
        const poll = () => {
          if (settled) return;
          const pending = Array.from(document.images)
            .filter(img => !img.complete && img.loading !== 'lazy');
          if (pending.length === 0 || Date.now() - startedAt > IMAGE_CAP_MS) { settle(); return; }
          window.setTimeout(poll, 60);
        };
        poll();
      };

      // Fonts can take seconds to finish loading; the page is already readable
      // with its fallback faces, so never hold the loader longer than this race.
      const waitFonts = () => {
        const fonts = (document as Document & { fonts?: { ready?: Promise<unknown> } }).fonts;
        if (!fonts?.ready || typeof fonts.ready.then !== 'function') { waitImages(); return; }
        let moved = false;
        const next = () => {
          if (moved) return;
          moved = true;
          waitImages();
        };
        fonts.ready.then(next, next);
        window.setTimeout(next, FONTS_CAP_MS);
      };

      // Two frames = the browser has run layout + paint for the new page. If the
      // tab is backgrounded, rAF may be throttled indefinitely, so start the same
      // wait from a short timer as a fallback (whichever runs first wins).
      let paintWaitStarted = false;
      const startPaintWait = () => {
        if (settled || paintWaitStarted) return;
        paintWaitStarted = true;
        waitFonts();
      };
      window.requestAnimationFrame(() => window.requestAnimationFrame(startPaintWait));
      window.setTimeout(startPaintWait, 260);
    };

    const start = () => {
      shownAtRef.current = 0;
      clearShowTimer();
      clearHideTimer();
      clearWatchdog();
      watchdog = setTimeout(() => {
        if (loaderStateRef.current === 'loading') hide();
      }, WATCHDOG_MS);
      showTimerRef.current = setTimeout(() => {
        if (cancelled) return;
        shownAtRef.current = Date.now();
        setLoader('loading');
      }, SHOW_DELAY_MS);
    };

    const done = () => {
      clearShowTimer();
      clearWatchdog();
      if (loaderStateRef.current !== 'loading') return; // never shown → nothing to hide
      whenPainted(hide);
    };

    const failed = () => {
      clearShowTimer();
      clearWatchdog();
      if (loaderStateRef.current !== 'loading') return;
      hide();
    };

    router.events.on('routeChangeStart', start);
    router.events.on('routeChangeComplete', done);
    router.events.on('routeChangeError', failed);
    return () => {
      cancelled = true;
      clearShowTimer();
      clearHideTimer();
      clearWatchdog();
      router.events.off('routeChangeStart', start);
      router.events.off('routeChangeComplete', done);
      router.events.off('routeChangeError', failed);
    };
  }, [router.events]);

  // ── Init theme ──────────────────────────────────────────────────────────
  useEffect(() => { initTheme(); }, []);

  // ── Init UI (interface variant: ui1 / ui2) ─────────────────────────────────
  useEffect(() => { initUI(); }, []);

  // ── Subject cinematic universe (UI-2 only) ────────────────────────────────
  // Sets data-subject from the route so each subject gets its own atmosphere
  // under UI-2's luxury theme. Ignored by UI-1 (gated in CSS).
  useEffect(() => {
    const apply = () => {
      const parts = router.pathname.split('/').filter(Boolean);
      const idx = parts.findIndex(p => /^class-\d+$/.test(p));
      const slug = idx >= 0 ? parts[idx + 1] : undefined;
      if (slug && /^(maths|advanced-maths|science|advanced-science|english|hindi|sanskrit|sst|it)$/.test(slug)) {
        document.documentElement.setAttribute('data-subject', slug);
      } else {
        document.documentElement.removeAttribute('data-subject');
      }
    };
    apply();
    router.events.on('routeChangeComplete', apply);
    return () => router.events.off('routeChangeComplete', apply);
  }, [router.pathname, router.events]);

  // ── Init analytics ───────────────────────────────────────────────────────
  useEffect(() => { initPostHog(); }, []);

  // ── Collaboration: only attach if already in active session (no auto-restore) ────
  const { active, sessionId } = useCollabStore();
  useEffect(() => {
    if (active && sessionId) attachCollabChannel();
  }, [active, sessionId]);

  // ── Track page views ─────────────────────────────────────────────────────
  useEffect(() => {
    const handleRoute = (url: string) => captureEvent('$pageview', { url });
    router.events.on('routeChangeComplete', handleRoute);
    return () => router.events.off('routeChangeComplete', handleRoute);
  }, [router.events]);

  // ── Scroll position restore (reload + back/forward) ──────────────────────
  // Next.js + hydration otherwise resets the page to the top on reload.
  // We keep the scroll Y per pathname in sessionStorage and restore it after
  // load — re-asserting a few times so late layout (fonts/images) can't
  // clamp it back to the top. Hash links are left to HashScrollHandler.
  useEffect(() => {
    if (typeof window === 'undefined') return;
    try { window.history.scrollRestoration = 'manual'; } catch { /* older browsers */ }

    const key = (pathname: string) => `sn_scroll:${pathname}`;
    const readY = (pathname: string): number => {
      try {
        const raw = window.sessionStorage.getItem(key(pathname));
        const y = raw ? Number(raw) : 0;
        return Number.isFinite(y) && y > 0 ? y : 0;
      } catch { return 0; }
    };
    const save = (pathname: string) => {
      try { window.sessionStorage.setItem(key(pathname), String(Math.round(window.scrollY))); }
      catch { /* storage unavailable — memory only */ }
    };

    let quietUntil = 0;
    const restore = (pathname: string, url: string) => {
      if (url.includes('#')) return; // HashScrollHandler owns anchored links
      const target = readY(pathname);
      if (target <= 0) return;
      quietUntil = Date.now() + 1200;
      let cancelled = false;
      let attempts = 0;
      let timer = 0;
      const stop = () => { cancelled = true; window.clearTimeout(timer); };
      const step = () => {
        if (cancelled) return;
        const root = document.documentElement;
        const prev = root.style.scrollBehavior;
        root.style.scrollBehavior = 'auto';
        window.scrollTo(0, target);
        root.style.scrollBehavior = prev;
        attempts += 1;
        if (Math.abs(window.scrollY - target) <= 2 || attempts >= 8) return;
        timer = window.setTimeout(step, 150);
      };
      window.addEventListener('wheel', stop, { once: true, passive: true });
      window.addEventListener('touchstart', stop, { once: true, passive: true });
      timer = window.setTimeout(step, 60);
    };

    let saveTimer = 0;
    const onScroll = () => {
      if (Date.now() < quietUntil) return;
      if (saveTimer) window.clearTimeout(saveTimer);
      saveTimer = window.setTimeout(() => save(window.location.pathname), 150);
    };
    const onUnload = () => save(window.location.pathname);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('beforeunload', onUnload);

    // Initial load (reload): restore this pathname's saved position.
    restore(window.location.pathname, window.location.href);

    const onStart = () => save(window.location.pathname);
    const onComplete = (url: string) => {
      const [pathname] = url.split('#');
      const pathOnly = pathname || window.location.pathname;
      const saved = readY(pathOnly);
      if (saved > 0 && !url.includes('#')) {
        restore(pathOnly, url);
      } else if (!url.includes('#')) {
        // Fresh navigation: start at the top (Next's default behaviour).
        window.scrollTo(0, 0);
      }
    };
    router.events.on('routeChangeStart', onStart);
    router.events.on('routeChangeComplete', onComplete);
    return () => {
      onUnload();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('beforeunload', onUnload);
      if (saveTimer) window.clearTimeout(saveTimer);
      router.events.off('routeChangeStart', onStart);
      router.events.off('routeChangeComplete', onComplete);
    };
  }, [router.events]);

  // ── Auth session listener ─────────────────────────────────────────────────
  useEffect(() => {
    supabase.auth.getSession().then((result: any) => {
      const session = result?.data?.session ?? null;
      if (session?.user) {
        fetchProfile(session.user.id, session.user);
        // Initialize mock test shared learning for this user
        setStorageUserId(session.user.id);
        loadAllFromSupabase(session.user.id);
        initSharedLearningOnLogin(session.user.id);
      } else {
        setUser(null);
        setLoading(false);
        // Clear mock test data on logout
        clearAllStorageOnLogout();
        initSharedLearningOnLogout();
      }
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      // Recovery links (custom email or Supabase's built-in template) carry a
      // recovery session — always route it to the password-reset page.
      if (_event === 'PASSWORD_RECOVERY') {
        router.replace('/auth/reset-password');
      }
      if (session?.user) {
        fetchProfile(session.user.id, session.user);
        setStorageUserId(session.user.id);
        loadAllFromSupabase(session.user.id);
        initSharedLearningOnLogin(session.user.id);
      } else {
        setUser(null);
        setLoading(false);
        clearAllStorageOnLogout();
        initSharedLearningOnLogout();
      }
    });

    return () => subscription.unsubscribe();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Component {...pageProps} />
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            fontFamily: 'var(--font-plus-jakarta)',
            fontSize:   '0.88rem',
            background: 'var(--surface-0)',
            color:      'var(--text-primary)',
            border:     '1px solid var(--border)',
            borderRadius: '12px',
            boxShadow:  '0 8px 32px rgba(0,0,0,0.1)',
          },
          success: { iconTheme: { primary: '#22c55e', secondary: '#fff' } },
          error:   { iconTheme: { primary: '#ef4444', secondary: '#fff' } },
        }}
      />
      <TunnelLoader state={loaderState} />
      <GuestOnboardingPopups />
      <WhatsNewPopup />
      <HashScrollHandler />
      <CollabPresenceBar />
      <CollabBanner />
    </>
  );
}
