import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import { Eye, EyeOff, Loader2, AlertCircle, KeyRound, Home } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { useAuthStore } from '@/store/authStore';
import ForgotPasswordForm from '@/components/auth/ForgotPasswordForm';
import toast from 'react-hot-toast';

type Stage = 'checking' | 'ready' | 'invalid';

export default function ResetPasswordPage() {
  const router = useRouter();
  const { fetchProfile } = useAuthStore();
  const [stage, setStage] = useState<Stage>('checking');
  const [password, setPassword] = useState('');
  const [confirmPw, setConfirmPw] = useState('');
  const [showPw, setShowPw] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const decided = useRef(false);

  useEffect(() => {
    // The recovery link lands here (directly or via /auth/callback) with a
    // `#access_token=…&type=recovery` hash that supabase-js exchanges for a
    // session; PASSWORD_RECOVERY fires when that happens.
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session && !decided.current) {
        decided.current = true;
        setStage('ready');
      }
    });

    // Fallback: hash exchange may already have completed before we subscribed.
    let cancelled = false;
    const timer = setTimeout(async () => {
      if (decided.current || cancelled) return;
      try {
        const { data } = await supabase.auth.getSession();
        if (cancelled) return;
        if (data.session?.user) {
          decided.current = true;
          setStage('ready');
          fetchProfile(data.session.user.id);
        } else {
          setStage('invalid');
        }
      } catch {
        if (!cancelled) setStage('invalid');
      }
    }, 1500);

    return () => {
      cancelled = true;
      clearTimeout(timer);
      subscription.unsubscribe();
    };
  }, [fetchProfile]);

  async function submit() {
    setError('');
    if (password.length < 6) return setError('Password must be at least 6 characters.');
    if (password !== confirmPw) return setError('Passwords do not match.');
    setLoading(true);
    try {
      const { error: e } = await supabase.auth.updateUser({ password });
      if (e) { setError(e.message); return; }
      toast.success('Password updated successfully!');
      const { data } = await supabase.auth.getSession();
      if (data.session?.user) await fetchProfile(data.session.user.id);
      router.replace('/');
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Head>
        <title>Reset Password | SolveNCERT</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <div className="min-h-screen flex items-center justify-center bg-[var(--surface-1)] px-4 py-10">
        <div className="w-full max-w-md">
          <div className="text-center mb-6">
            <div className="w-12 h-12 rounded-xl overflow-hidden border border-[var(--border)] mx-auto mb-3" style={{ background: '#fff' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/solvencert-logo.png" alt="SolveNCERT" width={48} height={48} style={{ width: 48, height: 48, objectFit: 'contain', display: 'block' }} />
            </div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-500">SolveNCERT</p>
          </div>

          <div className="bg-[var(--surface-0)] border border-[var(--border)] rounded-2xl shadow-soft-xl p-6 sm:p-7">
            {stage === 'checking' && (
              <div className="text-center py-8">
                <Loader2 size={28} className="animate-spin text-blue-500 mx-auto mb-3" />
                <p className="text-sm text-[var(--text-muted)]">Verifying your reset link…</p>
              </div>
            )}

            {stage === 'invalid' && (
              <div>
                <div className="text-center mb-5">
                  <div className="w-14 h-14 rounded-full bg-red-50 dark:bg-red-950/30 border border-red-100 dark:border-red-900 flex items-center justify-center mx-auto mb-3">
                    <AlertCircle size={22} className="text-red-500" />
                  </div>
                  <h1 className="text-lg font-display font-bold text-[var(--text-primary)] mb-1">Link expired or invalid</h1>
                  <p className="text-sm text-[var(--text-muted)]">
                    This password reset link is invalid or has expired. Links are valid for 1 hour.
                  </p>
                </div>
                <ForgotPasswordForm compact onBack={() => router.push('/')} />
              </div>
            )}

            {stage === 'ready' && (
              <div>
                <div className="text-center mb-5">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500/15 to-indigo-500/10 flex items-center justify-center mx-auto mb-3 border border-blue-200/60 dark:border-blue-500/30">
                    <KeyRound size={22} className="text-blue-600 dark:text-blue-400" />
                  </div>
                  <h1 className="text-lg font-display font-bold text-[var(--text-primary)] mb-1">Set a new password</h1>
                  <p className="text-sm text-[var(--text-muted)]">Choose a strong password for your account.</p>
                </div>

                <div className="space-y-4">
                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider">New Password</label>
                    <div className="relative">
                      <input
                        type={showPw ? 'text' : 'password'}
                        value={password}
                        onChange={e => { setPassword(e.target.value); setError(''); }}
                        placeholder="At least 6 characters"
                        autoComplete="new-password"
                        autoFocus
                        className="input-field w-full pr-11"
                      />
                      <button type="button" onClick={() => setShowPw(!showPw)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-[var(--text-muted)] hover:text-[var(--text-secondary)]">
                        {showPw ? <EyeOff size={15} /> : <Eye size={15} />}
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider">Confirm Password</label>
                    <input
                      type={showPw ? 'text' : 'password'}
                      value={confirmPw}
                      onChange={e => { setConfirmPw(e.target.value); setError(''); }}
                      onKeyDown={e => { if (e.key === 'Enter') submit(); }}
                      placeholder="Same as above"
                      autoComplete="new-password"
                      className="input-field w-full"
                    />
                  </div>

                  {error && (
                    <div className="flex items-start gap-2 p-3 rounded-xl bg-red-50 dark:bg-red-950/30 border border-red-100 dark:border-red-900">
                      <AlertCircle size={15} className="text-red-500 flex-shrink-0 mt-0.5" />
                      <p className="text-xs text-red-600 dark:text-red-400">{error}</p>
                    </div>
                  )}

                  <button onClick={submit} disabled={loading} className="btn-primary w-full justify-center">
                    {loading ? <span className="flex items-center gap-2"><Loader2 size={16} className="animate-spin" /> Updating…</span>
                      : 'Update password'}
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="text-center mt-5">
            <Link href="/" className="inline-flex items-center gap-1.5 text-sm text-[var(--text-muted)] hover:text-[var(--text-secondary)]">
              <Home size={14} /> Back to home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
