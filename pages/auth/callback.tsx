import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import { useAuthStore } from '@/store/authStore';
import { Loader2, AlertCircle, Home } from 'lucide-react';

/**
 * OAuth / email-verification landing page.
 *
 * Handles every way a user can arrive with a session:
 *   • Google OAuth     → Supabase redirects here with ?code= (PKCE) or a
 *                        #access_token= fragment (implicit); the session is
 *                        exchanged/detected, the profile is ensured
 *                        (authStore.fetchProfile), then we go home.
 *   • Email verify     → same flow via the confirmation link.
 *   • Password recovery → PASSWORD_RECOVERY event routes to the reset page.
 *   • Failures         → ?error=... from the provider, or no session at
 *                        all (cancelled sign-in, expired link) — show a
 *                        clear message with a way back instead of a
 *                        silent redirect.
 */
export default function AuthCallback() {
  const router = useRouter();
  const { fetchProfile } = useAuthStore();
  const isRecovery = useRef(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Password-recovery links point here (already on the Supabase redirect
    // allow-list via signup verification). Forward them to the reset page.
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event) => {
      if (event === 'PASSWORD_RECOVERY') {
        isRecovery.current = true;
        router.replace('/auth/reset-password');
      }
    });

    const run = async () => {
      const params = new URLSearchParams(window.location.search);
      const providerError = params.get('error_description') || params.get('error');
      if (providerError) {
        setError(decodeURIComponent(providerError.replace(/\+/g, ' ')));
        return;
      }

      // PKCE flow: exchange the code for a session. (Implicit flow needs no
      // exchange — detectSessionInUrl handles the #access_token fragment.)
      const code = params.get('code');
      if (code) {
        const { error: exchangeError } = await supabase.auth.exchangeCodeForSession(code);
        if (exchangeError) {
          setError(exchangeError.message);
          return;
        }
      }

      const result: any = await supabase.auth.getSession();
      const session = result?.data?.session ?? null;
      if (isRecovery.current) return; // already routed to the reset page
      if (session?.user) {
        // fetchProfile also creates the profile row for first-time OAuth
        // users, so Google sign-ups land fully registered.
        await fetchProfile(session.user.id, session.user);
        router.replace('/');
      } else {
        // No session and no provider error — the user most likely cancelled
        // the sign-in or the link expired. Send them home quietly.
        router.replace('/');
      }
    };

    run().catch(() => setError('Something went wrong while signing you in. Please try again.'));

    return () => subscription.unsubscribe();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--surface-1)] p-4">
        <div className="w-full max-w-md bg-[var(--surface-0)] rounded-2xl shadow-soft-xl border border-[var(--border)] p-6 text-center">
          <div className="w-14 h-14 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center mx-auto mb-4">
            <AlertCircle size={24} className="text-red-500" />
          </div>
          <h2 className="text-lg font-display font-bold text-[var(--text-primary)] mb-2">
            Sign-in didn&apos;t go through
          </h2>
          <p className="text-sm text-[var(--text-secondary)] mb-5">{error}</p>
          <Link href="/" className="btn-primary w-full justify-center">
            <Home size={16} /> Back to home
          </Link>
          <p className="text-xs text-[var(--text-muted)] mt-3">
            You can open Login or Sign Up from the top menu and try again.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--surface-1)]">
      <div className="text-center">
        <Loader2 size={28} className="animate-spin text-blue-500 mx-auto mb-3" />
        <p className="text-sm text-[var(--text-muted)]">Signing you in...</p>
      </div>
    </div>
  );
}
