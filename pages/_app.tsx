import type { AppProps } from 'next/app';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { Toaster } from 'react-hot-toast';
import { SpeedInsights } from '@vercel/speed-insights/next';
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
import TunnelLoader, { deriveLabel } from '@/components/features/BrainLoader';
import GuestOnboardingPopups from '@/components/features/GuestOnboardingPopups';
import '@/styles/globals.css';
import '@/styles/ui3.css';
import '@/styles/ganita-notebook.css';
import '@/styles/notes-notebook.css';

export default function App({ Component, pageProps }: AppProps) {
  const router   = useRouter();
  const { fetchProfile, setUser, setLoading } = useAuthStore();
  const [loaderState, setLoaderState] = useState<'hidden' | 'loading' | 'finish'>('hidden');
  const [loaderLabel, setLoaderLabel] = useState('SOLVENCERT');
  const showTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hideTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // ── Page-transition knowledge tunnel ─────────────────────────────────────
  // Shows only if the new route hasn't finished within 200ms (so instant
  // navigations never flash it). Goes away the moment the page is ready.
  useEffect(() => {
    const start = (url: string) => {
      setLoaderLabel(deriveLabel(url));
      if (showTimerRef.current) clearTimeout(showTimerRef.current);
      showTimerRef.current = setTimeout(() => setLoaderState('loading'), 200);
    };
    const done = () => {
      if (showTimerRef.current) { clearTimeout(showTimerRef.current); showTimerRef.current = null; }
      setLoaderState((prev) => {
        if (prev === 'loading') {
          if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
          hideTimerRef.current = setTimeout(() => setLoaderState('hidden'), 720);
          return 'finish';
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

  // ── Auth session listener ─────────────────────────────────────────────────
  useEffect(() => {
    supabase.auth.getSession().then((result: any) => {
      const session = result?.data?.session ?? null;
      if (session?.user) {
        fetchProfile(session.user.id);
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
      if (session?.user) {
        fetchProfile(session.user.id);
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
      <SpeedInsights />
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
      <TunnelLoader state={loaderState} label={loaderLabel} />
      <GuestOnboardingPopups />
      <CollabPresenceBar />
      <CollabBanner />
    </>
  );
}
