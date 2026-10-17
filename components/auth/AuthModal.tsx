import React, { useState } from 'react';
import { X, Eye, EyeOff, Loader2, ArrowRight, Mail, AlertCircle } from 'lucide-react';
import { SolveNCERTLogo } from '@/components/ui/Logo';
import { supabase } from '@/lib/supabase';
import { useAuthStore } from '@/store/authStore';
import { validateEmail, generateInitials, generateReferralCode } from '@/utils/helpers';
import { clearGuestLimits } from '@/lib/guestLimits';
import { captureEvent } from '@/lib/analytics';
import { cn } from '@/utils/helpers';
import RewardModal from './RewardModal';
import HistoryRetentionModal from './HistoryRetentionModal';
import ForgotPasswordForm from './ForgotPasswordForm';
import toast from 'react-hot-toast';

interface Props { mode:'login'|'signup'; onClose:()=>void; onSwitch:(m:'login'|'signup')=>void; }

// Clean labeled input — icon ABOVE label, NO overlap
function Field({ label, type='text', value, onChange, placeholder, autoComplete, children }: {
  label:string; type?:string; value:string; onChange:(v:string)=>void;
  placeholder?:string; autoComplete?:string; children?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider">{label}</label>
      <div className="relative">
        <input type={type} value={value} onChange={e=>onChange(type === 'email' ? e.target.value.toLowerCase() : e.target.value)}
          placeholder={placeholder} autoComplete={autoComplete}
          className="input-field w-full" />
        {children}
      </div>
    </div>
  );
}

export default function AuthModal({ mode, onClose, onSwitch }: Props) {
  const { fetchProfile } = useAuthStore();

  const [fullName,  setFullName]  = useState('');
  const [email,     setEmail]     = useState('');
  const [phone,     setPhone]     = useState('');
  const [dob,       setDob]       = useState('');
  const [password,  setPassword]  = useState('');
  const [confirmPw, setConfirmPw] = useState('');
  const [showPw,    setShowPw]    = useState(false);
  const [loading,   setLoading]   = useState(false);
  const [otpSent,   setOtpSent]   = useState(false);
  const [reward,    setReward]    = useState<{ code: string } | null>(null);
  const [showRetentionNotice, setShowRetentionNotice] = useState(false);
  const [error,     setError]     = useState('');
  const [fpStage,   setFpStage]   = useState<null | 'forgot'>(null);

  async function handleSignUp() {
    setError('');
    if (!fullName.trim())       return setError('Full name is required.');
    if (!validateEmail(email))  return setError('Enter a valid email (must include @ and .com).');
    if (password.length < 6)    return setError('Password must be at least 6 characters.');
    if (password !== confirmPw) return setError('Passwords do not match.');
    setLoading(true);
    try {
      const { data, error: e } = await supabase.auth.signUp({
        email: email.toLowerCase(), password,
        options: { data:{ full_name:fullName, dob: dob||null, phone: phone||null }, emailRedirectTo:`${window.location.origin}/auth/callback` },
      });
      if (e) { setError(e.message.includes('already') ? 'Please try another password.' : e.message); return; }
      if (data.user) {
        await supabase.from('profiles').upsert({
          id: data.user.id, email: email.toLowerCase(), full_name: fullName,
          phone: phone||null, dob: dob||null,
          initials: generateInitials(fullName),
          plan: 'trial', trial_ends_at: new Date(Date.now()+30*864e5).toISOString(),
          referral_code: generateReferralCode(data.user.id), total_referrals: 0,
        });
        clearGuestLimits();
        captureEvent('user_signed_up');
        if (data.session) {
          await fetchProfile(data.user.id);
          setReward({ code: generateReferralCode(data.user.id) });
        } else {
          setOtpSent(true);
        }
      }
    } catch { setError('Something went wrong. Please try again.'); }
    finally { setLoading(false); }
  }

  async function handleLogin() {
    setError('');
    if (!validateEmail(email)) return setError('Enter a valid email.');
    if (!password)             return setError('Password is required.');
    setLoading(true);
    try {
      const { data, error: e } = await supabase.auth.signInWithPassword({ email: email.toLowerCase(), password });
      if (e) { setError(e.message.includes('Invalid') ? 'Invalid email or password.' : e.message); return; }
      if (data.user) { await fetchProfile(data.user.id); clearGuestLimits(); captureEvent('user_logged_in'); toast.success('Welcome back!'); setShowRetentionNotice(true); }
    } catch { setError('Something went wrong.'); }
    finally { setLoading(false); }
  }

  const isSignUp = mode === 'signup';
  const isForgot = fpStage === 'forgot';

  return (
    <>
    <div className="fixed inset-0 z-[100] flex items-end justify-center p-0 sm:items-center sm:p-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full sm:max-w-md max-h-[90vh] bg-[var(--surface-0)] rounded-t-2xl sm:rounded-2xl shadow-soft-xl border border-[var(--border)] animate-scale-in overflow-hidden flex flex-col">
        <div className="h-1 bg-gradient-to-r from-blue-500 via-blue-400 to-indigo-500 flex-shrink-0" />

        <button onClick={onClose} className="absolute top-4 right-4 p-1.5 rounded-lg hover:bg-[var(--surface-2)] text-[var(--text-muted)] z-10"><X size={16} /></button>

        <div className="overflow-y-auto flex-1 p-5 sm:p-6 max-h-[90vh]">
          {/* Drag handle for mobile bottom-sheet */}
          <div className="mx-auto mb-3 h-1.5 w-10 rounded-full bg-[var(--border)] sm:hidden" />

          {/* Logo + heading */}
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl overflow-hidden border border-[var(--border)] flex-shrink-0" style={{ background:'#fff' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/solvencert-logo.png" alt="SolveNCERT" width={40} height={40} style={{ width:40, height:40, objectFit:'contain', display:'block' }} />
            </div>
            <div>
              <h2 className="text-lg font-display font-bold text-[var(--text-primary)] leading-tight">
                {isForgot ? 'Reset your password' : isSignUp ? 'Create your account' : 'Welcome back'}
              </h2>
              <p className="text-xs text-[var(--text-muted)]">
                {isForgot ? "We'll email you a link to set a new password"
                  : isSignUp ? 'Join thousands of CBSE students' : 'Sign in to continue learning'}
              </p>
            </div>
          </div>

          {otpSent ? (
            <div className="text-center py-6">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-emerald-500/15 to-teal-500/10 flex items-center justify-center mx-auto mb-3 border border-emerald-200/60 dark:border-emerald-500/30">
                <Mail size={22} className="text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="font-semibold text-[var(--text-primary)] mb-1">Verify your email</h3>
              <p className="text-sm text-[var(--text-muted)]">We sent a verification link to <strong className="text-[var(--text-primary)]">{email}</strong>.</p>
              <button onClick={onClose} className="btn-primary mt-5 w-full justify-center">Done</button>
            </div>
          ) : isForgot ? (
            <ForgotPasswordForm initialEmail={email} onBack={() => { setFpStage(null); setError(''); }} />
          ) : (
            <div className="space-y-4">
              {isSignUp && <Field label="Full Name" value={fullName} onChange={setFullName} placeholder="Your full name" autoComplete="name" />}
              <Field label="Email Address" type="email" value={email} onChange={v=>{setEmail(v);setError('');}} placeholder="you@example.com" autoComplete="email" />
              {isSignUp && (
                <div className="grid grid-cols-2 gap-3">
                  <Field label="Phone (optional)" type="tel" value={phone} onChange={setPhone} placeholder="+91 …" autoComplete="tel" />
                  <Field label="Date of Birth" type="date" value={dob} onChange={setDob} autoComplete="bday" />
                </div>
              )}

              {/* Password — separate so we can add eye toggle cleanly */}
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider">Password</label>
                <div className="relative">
                  <input type={showPw?'text':'password'} value={password}
                    onChange={e=>{setPassword(e.target.value);setError('');}}
                    placeholder="At least 6 characters"
                    autoComplete={isSignUp?'new-password':'current-password'}
                    className="input-field w-full pr-11" />
                  <button type="button" onClick={()=>setShowPw(!showPw)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-[var(--text-muted)] hover:text-[var(--text-secondary)]">
                    {showPw ? <EyeOff size={15} /> : <Eye size={15} />}
                  </button>
                </div>
              </div>

              {isSignUp && (
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider">Confirm Password</label>
                  <input type={showPw?'text':'password'} value={confirmPw}
                    onChange={e=>{setConfirmPw(e.target.value);setError('');}}
                    placeholder="Same as above" autoComplete="new-password"
                    className="input-field w-full" />
                </div>
              )}

              {error && (
                <div className="flex items-start gap-2 p-3 rounded-xl bg-red-50 dark:bg-red-950/30 border border-red-100 dark:border-red-900">
                  <AlertCircle size={15} className="text-red-500 flex-shrink-0" />
                  <p className="text-xs text-red-600 dark:text-red-400">{error}</p>
                </div>
              )}

              {!isSignUp && (
                <div className="text-right -mt-1">
                  <button onClick={() => setFpStage('forgot')} className="text-xs text-blue-500 hover:text-blue-600 font-medium">Forgot password?</button>
                </div>
              )}

              <button onClick={isSignUp?handleSignUp:handleLogin} disabled={loading} className="btn-primary w-full justify-center mt-1">
                {loading ? <Loader2 size={16} className="animate-spin" />
                  : isSignUp ? 'Create Account'
                  : <span className="flex items-center gap-2">Sign In <ArrowRight size={14} /></span>}
              </button>

              <p className="text-center text-sm text-[var(--text-muted)] pt-1">
                {isSignUp ? 'Already have an account? ' : "Don't have an account? "}
                <button onClick={()=>onSwitch(isSignUp?'login':'signup')} className="text-blue-500 hover:text-blue-600 font-semibold">
                  {isSignUp ? 'Log In' : 'Sign Up Free'}
                </button>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>

    {reward && <RewardModal referralCode={reward.code} onClose={() => { setReward(null); onClose(); }} />}
    {showRetentionNotice && <HistoryRetentionModal onClose={onClose} />}
    </>
  );
}
