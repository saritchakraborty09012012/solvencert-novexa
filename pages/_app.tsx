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
  const showTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hideTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const routeStartRef = useRef(0);

  // ── Page-transition knowledge tunnel ─────────────────────────────────────
  // Shows only if the new route hasn't finished within ~200ms, so instant
  // navigations never flash it. It is kept on screen until the destination
  // page has actually PAINTED (the main thread reaches an idle slice — the
  // page loads in the background) plus a ~500ms floor since route start, then
  // fades cleanly, so the page is fully visible the moment it disappears.
  useEffect(() => {
    const start = (url: string) => {
      routeStartRef.current = Date.now();
      if (showTimerRef.current) clearTimeout(showTimerRef.current);
      showTimerRef.current = setTimeout(() => setLoaderState('loading'), 200);
    };
    const done = () => {
      if (showTimerRef.current) { clearTimeout(showTimerRef.current); showTimerRef.current = null; }
      const reveal = () => {
        setLoaderState('finish');
        if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
        hideTimerRef.current = setTimeout(() => setLoaderState('hidden'), 720);
      };
      setLoaderState((prev) => {
        if (prev !== 'loading') return prev;
        const waitIdle = typeof window !== 'undefined' && 'requestIdleCallback' in window;
        if (waitIdle) {
          const w = window as Window & { requestIdleCallback: (cb: () => void, opts?: { timeout: number }) => void };
          w.requestIdleCallback(() => {
            const remaining = 500 - (Date.now() - routeStartRef.current);
            setTimeout(reveal, Math.max(0, remaining));
          }, { timeout: 2600 });
        } else {
          reveal();
        }
        return prev;
      });
    };
    router.events.on('routeChangeStart', start);
    router.events.on('routeChangeComplete', done);
    router.events.on('routeChangeError', done);
    return () => {
      if (showTimerRef.current) clearTimeout(showTimerRef.current);
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
      router.events.off('routeChangeStart', start);
      router.events.off('routeChangeComplete', done);
      router.events.off('routeChangeError', done);
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
