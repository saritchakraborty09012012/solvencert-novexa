import React, { useEffect, useState } from 'react';
import { ArrowLeft, Loader2, MailCheck, AlertCircle, Send } from 'lucide-react';
import { validateEmail, cn } from '@/utils/helpers';

const COOLDOWN_MS = 60_000;
const STORE_KEY = 'fp_cooldown_until';
const EMAIL_KEY = 'fp_last_email';

interface Props {
  /** Email typed in the login form, prefilled when opening the forgot view. */
  initialEmail?: string;
  onBack: () => void;
  /** Heading shown above the form (defaults per stage). */
  compact?: boolean;
}

function formatRemaining(ms: number): string {
  const total = Math.max(0, Math.ceil(ms / 1000));
  const m = Math.floor(total / 60);
  const s = total % 60;
  return `${m}:${String(s).padStart(2, '0')}`;
}

/**
 * Forgot-password request form with a 60-second resend cooldown.
 * The resend button stays faded/disabled for 1 minute after each send and
 * re-activates automatically (persisted in localStorage, so it survives
 * closing the modal or refreshing the page).
 */
export default function ForgotPasswordForm({ initialEmail = '', onBack, compact }: Props) {
  const [email, setEmail] = useState(initialEmail);
  const [stage, setStage] = useState<'form' | 'sent'>('form');
  const [lastEmail, setLastEmail] = useState('');
  const [sentAt, setSentAt] = useState(0); // epoch ms of the last successful send
  const [now, setNow] = useState(() => Date.now());
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [info, setInfo] = useState('');

  // Restore an active cooldown (e.g. modal reopened or page refreshed).
  useEffect(() => {
    try {
      const until = Number(localStorage.getItem(STORE_KEY) || '0');
      const prevEmail = localStorage.getItem(EMAIL_KEY) || '';
      if (until > Date.now()) {
        setStage('sent');
        setSentAt(until - COOLDOWN_MS);
        setNow(Date.now());
        if (prevEmail) {
          setLastEmail(prevEmail);
          if (!initialEmail) setEmail(prevEmail);
        }
      }
    } catch { /* storage unavailable — behave as fresh */ }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Tick the countdown while the resend button is faded.
  useEffect(() => {
    if (stage !== 'sent') return;
    const t = setInterval(() => setNow(Date.now()), 500);
    return () => clearInterval(t);
  }, [stage]);

  const remaining = stage === 'sent' && sentAt ? Math.max(0, sentAt + COOLDOWN_MS - now) : 0;

  function persistCooldown(until: number, forEmail: string) {
    try {
      localStorage.setItem(STORE_KEY, String(until));
      localStorage.setItem(EMAIL_KEY, forEmail);
    } catch { /* ignore */ }
  }

  async function send() {
    setError('');
    setInfo('');
    if (!validateEmail(email)) {
      setError('Enter a valid email address.');
      return;
    }
    setLoading(true);
    try {
      const res = await fetch('/api/auth/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.toLowerCase() }),
      });
      const data = await res.json().catch(() => ({} as any));

      if (res.status === 429) {
        const retryAfter = Number(data.retryAfter || 60);
        const until = Date.now() + retryAfter * 1000;
        setSentAt(until - COOLDOWN_MS);
        setNow(Date.now());
        setStage('sent');
        setLastEmail(email.toLowerCase());
        setInfo(data.error || `Please wait ${retryAfter} seconds before requesting another email.`);
        persistCooldown(until, email.toLowerCase());
        return;
      }
      if (!res.ok) {
        setError(data.error || 'Something went wrong. Please try again.');
        return;
      }

      // Success — start the 1-minute resend cooldown.
      const until = Date.now() + COOLDOWN_MS;
      setSentAt(Date.now());
      setNow(Date.now());
      setStage('sent');
      setLastEmail(email.toLowerCase());
      persistCooldown(until, email.toLowerCase());
    } catch {
      setError('Network error. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  }

  if (stage === 'sent') {
    return (
      <div className="text-center py-2">
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-emerald-500/15 to-teal-500/10 flex items-center justify-center mx-auto mb-3 border border-emerald-200/60 dark:border-emerald-500/30">
          <MailCheck size={22} className="text-emerald-600 dark:text-emerald-400" />
        </div>
        <h3 className="font-semibold text-[var(--text-primary)] mb-1">Check your email</h3>
        <p className="text-sm text-[var(--text-muted)] mb-4">
          If an account exists for <strong className="text-[var(--text-primary)]">{lastEmail}</strong>, we sent a password reset link. The link is valid for 1 hour.
        </p>
        <p className="text-xs text-[var(--text-muted)] mb-4">Also check your spam/junk folder.</p>

        {info && (
          <div className="flex items-start gap-2 p-3 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-100 dark:border-amber-900 mb-3 text-left">
            <AlertCircle size={15} className="text-amber-500 flex-shrink-0 mt-0.5" />
            <p className="text-xs text-amber-700 dark:text-amber-400">{info}</p>
          </div>
        )}
        {error && (
          <div className="flex items-start gap-2 p-3 rounded-xl bg-red-50 dark:bg-red-950/30 border border-red-100 dark:border-red-900 mb-3 text-left">
            <AlertCircle size={15} className="text-red-500 flex-shrink-0 mt-0.5" />
            <p className="text-xs text-red-600 dark:text-red-400">{error}</p>
          </div>
        )}

        <button
          onClick={send}
          disabled={remaining > 0 || loading}
          aria-disabled={remaining > 0}
          className={cn(
            'w-full btn-primary justify-center transition-opacity',
            remaining > 0 && 'opacity-40 cursor-not-allowed'
          )}
        >
          {loading
            ? <span className="flex items-center gap-2"><Loader2 size={15} className="animate-spin" /> Sending…</span>
            : remaining > 0
              ? `Resend in ${formatRemaining(remaining)}`
              : <span className="flex items-center gap-2"><Send size={14} /> Resend email</span>}
        </button>

        <button onClick={onBack} className="mt-3 w-full flex items-center justify-center gap-1.5 text-sm text-[var(--text-muted)] hover:text-[var(--text-secondary)] py-2">
          <ArrowLeft size={14} /> Back to {compact ? 'home' : 'sign in'}
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-1">
        <label className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider">Email Address</label>
        <input
          type="email"
          value={email}
          onChange={e => { setEmail(e.target.value.toLowerCase()); setError(''); }}
          onKeyDown={e => { if (e.key === 'Enter') send(); }}
          placeholder="you@example.com"
          autoComplete="email"
          autoFocus
          className="input-field w-full"
        />
      </div>

      {error && (
        <div className="flex items-start gap-2 p-3 rounded-xl bg-red-50 dark:bg-red-950/30 border border-red-100 dark:border-red-900">
          <AlertCircle size={15} className="text-red-500 flex-shrink-0 mt-0.5" />
          <p className="text-xs text-red-600 dark:text-red-400">{error}</p>
        </div>
      )}

      <button onClick={send} disabled={loading} className="btn-primary w-full justify-center">
        {loading
          ? <span className="flex items-center gap-2"><Loader2 size={16} className="animate-spin" /> Sending…</span>
          : <span className="flex items-center gap-2">Send reset link <Send size={14} /></span>}
      </button>

      <button onClick={onBack} className="w-full flex items-center justify-center gap-1.5 text-sm text-[var(--text-muted)] hover:text-[var(--text-secondary)] py-1">
        <ArrowLeft size={14} /> Back to {compact ? 'home' : 'sign in'}
      </button>
    </div>
  );
}
