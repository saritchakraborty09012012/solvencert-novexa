import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Loader2, Users, Mail, ArrowRight, PartyPopper, Eye, EyeOff } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { supabase } from '@/lib/supabase';
import { useAuthStore } from '@/store/authStore';
import { useCollabStore, attachCollabChannel } from '@/store/collabStore';
import { validateEmail, validateDob } from '@/utils/helpers';
import toast from 'react-hot-toast';

/**
 * Collaboration invite landing: /collab/join/[code]
 * Email first. Existing account → just password (no OTP, no name/DOB).
 * New email → name + DOB + password, straight in (no OTP).
 */
export default function JoinCollabPage() {
  const router = useRouter();
  const code = typeof router.query.code === 'string' ? router.query.code : '';
  const { user, fetchProfile } = useAuthStore();

  const [step, setStep] = useState<'email' | 'password' | 'register'>('email');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [dob, setDob] = useState('');
  const [knownName, setKnownName] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [joined, setJoined] = useState(false);
  const [showPw, setShowPw] = useState(false);

  useEffect(() => {
    if (user?.email) setEmail(user.email);
  }, [user]);

  async function doJoin() {
    const res = await useCollabStore.getState().joinSession(code);
    if (!res.ok) { setError(res.error || 'Could not join.'); return false; }
    attachCollabChannel();
    setJoined(true);
    toast.success(`You joined ${res.hostName}'s study circle!`);
    setTimeout(() => router.push('/'), 1200);
    return true;
  }

  async function submitEmail(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    if (!validateEmail(email)) return setError('Enter a valid email.');
    setBusy(true);
    try {
      const { data, error: rpcErr } = await supabase.rpc('collab_lookup_email', { p_email: email.toLowerCase().trim() });
      if (rpcErr) { setError('Could not check the email. Try again.'); return; }
      const rows = (data as { user_id: string; full_name: string }[] | null) || [];
      if (rows.length > 0) {
        setKnownName(rows[0].full_name);
        if (user && user.email.toLowerCase() === email.toLowerCase().trim()) {
          const ok = await doJoin();
          if (ok) return;
        } else {
          setStep('password');
          return;
        }
      } else {
        setStep('register');
        return;
      }
    } finally {
      setBusy(false);
    }
  }

  async function submitPassword(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    if (!password) return setError('Enter your password.');
    setBusy(true);
    try {
      const { data, error: e2 } = await supabase.auth.signInWithPassword({ email: email.toLowerCase().trim(), password });
      if (e2 || !data.user) { setError('Wrong password. Try again.'); return; }
      await fetchProfile(data.user.id);
      await doJoin();
    } finally {
      setBusy(false);
    }
  }

  async function submitRegister(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    if (!fullName.trim()) return setError('Enter your name.');
    if (!validateEmail(email)) return setError('Enter a valid email.');
    if (password.length < 6) return setError('Password must be at least 6 characters.');
    // Same rule as the main sign-up form: new email accounts must give a DOB.
    const dobError = validateDob(dob);
    if (dobError) return setError(dobError);
    setBusy(true);
    try {
      const { data, error: e2 } = await supabase.auth.signUp({
        email: email.toLowerCase().trim(),
        password,
        options: { data: { full_name: fullName.trim(), dob: dob || null } },
      });
      if (e2) { setError(e2.message.includes('already') ? 'An account with this email exists — go back and log in.' : e2.message); return; }
      if (data.user) {
        // Wait for trigger to create profile (poll for up to 3s)
        let profileCreated = false;
        for (let i = 0; i < 15; i++) {
          await new Promise(r => setTimeout(r, 200));
          const { data: prof } = await supabase.from('profiles').select('id').eq('id', data.user!.id).maybeSingle();
          if (prof) { profileCreated = true; break; }
        }
        if (!profileCreated) return setError('Profile creation timed out. Please try again.');
        // Profile exists — update dob if provided
        if (dob) {
          await supabase.from('profiles').update({ dob: dob }).eq('id', data.user.id);
        }
        if (data.session) {
          await fetchProfile(data.user.id);
          await doJoin();
        } else {
          setError('Account created! Please log in normally, then reopen the invite link.');
        }
      }
    } finally {
      setBusy(false);
    }
  }

  if (joined) {
    return (
      <Layout title="Joined | SolveNCERT" noFooter noDock>
        <div className="max-w-sm mx-auto px-6 py-24 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 mb-5">
            <PartyPopper size={28} className="text-emerald-500" />
          </div>
          <h1 className="text-xl font-display font-bold text-[var(--text-primary)] mb-2">You&apos;re in!</h1>
          <p className="text-sm text-[var(--text-muted)]">Taking you to your friend&apos;s account…</p>
          <Loader2 size={18} className="animate-spin text-emerald-500 mx-auto mt-6" />
        </div>
      </Layout>
    );
  }

  return (
    <Layout title="Join Study Circle | SolveNCERT" noFooter noDock>
      <div className="max-w-sm mx-auto px-6 py-16">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-500/15 border border-blue-500/30 mb-4">
            <Users size={24} className="text-blue-500" />
          </div>
          <h1 className="text-xl font-display font-bold text-[var(--text-primary)] mb-1">Join your friend&apos;s study circle</h1>
          <p className="text-xs text-[var(--text-muted)]">
            Study together — shared history, live chat and whiteboard, all in real time.
          </p>
        </div>

        <div className="card p-6">
          {step === 'email' && (
            <form onSubmit={submitEmail} className="space-y-4">
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider">Your email</label>
                <div className="relative">
                  <Mail size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" />
                  <input
                    type="email" value={email} onChange={(e) => { setEmail(e.target.value.toLowerCase()); setError(''); }}
                    placeholder="you@example.com" autoFocus autoComplete="email"
                    className="input-field w-full pl-9"
                  />
                </div>
              </div>
              <button type="submit" disabled={busy} className="btn-primary w-full justify-center">
                {busy ? <Loader2 size={15} className="animate-spin" /> : <>Continue <ArrowRight size={14} /></>}
              </button>
              <p className="text-[11px] text-[var(--text-muted)] text-center">
                Already on SolveNCERT? Just enter the same email — no extra sign-up needed.
              </p>
            </form>
          )}

          {step === 'password' && (
            <form onSubmit={submitPassword} className="space-y-4">
              <p className="text-sm text-[var(--text-secondary)]">
                Welcome back, <b className="text-[var(--text-primary)]">{knownName}</b>! Enter your password to join.
              </p>
              <input
                type="password" value={password} onChange={(e) => { setPassword(e.target.value); setError(''); }}
                placeholder="Your SolveNCERT password" autoFocus autoComplete="current-password"
                className="input-field w-full"
              />
              <button type="submit" disabled={busy} className="btn-primary w-full justify-center">
                {busy ? <Loader2 size={15} className="animate-spin" /> : <>Join <ArrowRight size={14} /></>}
              </button>
              <button type="button" onClick={() => { setStep('email'); setPassword(''); }}
                className="w-full text-xs text-[var(--text-muted)] hover:text-blue-500 transition-colors">
                Use a different email
              </button>
            </form>
          )}

          {step === 'register' && (
            <form onSubmit={submitRegister} className="space-y-4">
              <p className="text-sm text-[var(--text-secondary)]">Quick sign-up — no email verification needed.</p>
              <input
                value={fullName} onChange={(e) => { setFullName(e.target.value); setError(''); }}
                placeholder="Your full name" autoFocus autoComplete="name" className="input-field w-full"
              />
              <input
                type="email" value={email} onChange={(e) => { setEmail(e.target.value.toLowerCase()); setError(''); }}
                placeholder="Email" autoComplete="email" className="input-field w-full"
              />
              <input
                type="date" value={dob} onChange={(e) => setDob(e.target.value)}
                placeholder="Date of birth (required)" autoComplete="bday" required
                className="input-field w-full"
              />
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider">Password</label>
                <div className="relative">
                  <input type={showPw ? 'text' : 'password'} value={password}
                    onChange={e=>{setPassword(e.target.value);setError('');}}
                    placeholder="Create a password (min 6 characters)" autoComplete="new-password"
                    className="input-field w-full pr-11" />
                  <button type="button" onClick={()=>setShowPw(!showPw)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-[var(--text-muted)] hover:text-[var(--text-secondary)]">
                    {showPw ? <EyeOff size={15} /> : <Eye size={15} />}
                  </button>
                </div>
              </div>
              <button type="submit" disabled={busy} className="btn-primary w-full justify-center">
                {busy ? <Loader2 size={15} className="animate-spin" /> : <>Create & Join <ArrowRight size={14} /></>}
              </button>
            </form>
          )}

          {error && <p className="mt-4 text-xs text-red-500 text-center">{error}</p>}
        </div>
      </div>
    </Layout>
  );
}
