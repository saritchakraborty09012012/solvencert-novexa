import React, { useEffect, useState } from 'react';
import { Calendar, Loader2, ShieldCheck } from 'lucide-react';
import { useAuthStore } from '@/store/authStore';
import { supabase } from '@/lib/supabase';
import { validateDob } from '@/utils/helpers';
import { captureEvent } from '@/lib/analytics';
import toast from 'react-hot-toast';

/**
 * Blocking "one step left" popup shown right after a brand-new OAuth (Google)
 * sign-up lands on the site — Google never shares a date of birth, so the
 * account can't be completed without it.
 *
 * Deliberately NON-DISMISSABLE: no close button, the backdrop does nothing,
 * Escape is swallowed and the page behind cannot scroll. The only way out is
 * entering a DOB, which is saved straight into this user's own `profiles.dob`
 * row. Visibility comes from `dobPending`, which authStore only ever sets for
 * non-email providers whose account was created after the feature launched —
 * existing users (Google or email) never see this.
 */
export default function DobCompletionModal() {
  const { user, isGuest, loading, dobPending, setUser } = useAuthStore();
  const [dob, setDob] = useState('');
  const [error, setError] = useState('');
  const [dobInvalid, setDobInvalid] = useState(false); // red blinking field + "Required" underneath
  const [saving, setSaving] = useState(false);

  const show = !loading && !isGuest && !!user && dobPending && !user.dob;

  // While shown: the page behind must not scroll, and Escape must not do
  // anything — there is nothing to close.
  useEffect(() => {
    if (!show) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const swallowEscape = (e: KeyboardEvent) => { if (e.key === 'Escape') e.preventDefault(); };
    document.addEventListener('keydown', swallowEscape);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener('keydown', swallowEscape);
    };
  }, [show]);

  if (!show || !user) return null;
  const current = user;
  const today = new Date().toISOString().slice(0, 10);

  async function submit() {
    const invalid = validateDob(dob);
    // Invalid/empty → red blinking field with "Required" right below it
    // (not a generic message). Save failures keep their own message below.
    if (invalid) {
      setDobInvalid(true);
      setError(invalid === 'Date of birth is required.' ? 'Required' : invalid);
      return;
    }
    setDobInvalid(false);
    setError('');
    setSaving(true);
    try {
      // Own row only (RLS enforces auth.uid() = id) and only while the column
      // is still empty — never overwrite a DOB someone already has on file.
      const { data: updated, error: e } = await supabase
        .from('profiles')
        .update({ dob })
        .eq('id', current.id)
        .is('dob', null)
        .select('dob')
        .maybeSingle();
      if (e) { setError('Could not save your date of birth. Please try again.'); return; }
      setUser({ ...current, dob: (updated?.dob as string | null) ?? dob });
      captureEvent('user_dob_completed');
      toast.success('All set — your sign-up is complete!');
    } catch {
      setError('Could not save your date of birth. Please try again.');
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="fixed inset-0 z-[110] flex items-end sm:items-center justify-center p-4" role="dialog" aria-modal="true" aria-labelledby="dob-complete-title">
      {/* Backdrop WITHOUT a click handler — this dialog cannot be dismissed. */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div className="relative w-full max-w-sm bg-[var(--surface-0)] rounded-3xl border border-amber-200/70 dark:border-amber-800/50 shadow-soft-xl overflow-hidden animate-scale-in">
        <div className="h-1.5 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500" />
        <div className="absolute -top-16 -right-16 w-44 h-44 rounded-full bg-amber-400/10 blur-3xl pointer-events-none" />

        <div className="p-6 text-center">
          <div className="w-12 h-12 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mx-auto mb-3 border border-amber-200 dark:border-amber-800">
            <Calendar size={20} className="text-amber-500" />
          </div>
          <p className="text-[11px] font-semibold uppercase tracking-widest text-amber-500 mb-1">Almost done</p>
          <h3 id="dob-complete-title" className="text-lg font-serif font-bold text-[var(--text-primary)] mb-1">
            One step left to complete your sign up
          </h3>
          <p className="text-sm text-[var(--text-muted)] mb-5">
            Please enter your DOB to complete sign up — Google doesn't share it, so we need it from you.
          </p>

          <input
            type="date"
            value={dob}
            onChange={(e) => { setDob(e.target.value); setError(''); setDobInvalid(false); }}
            max={today}
            min="1900-01-01"
            autoComplete="bday"
            aria-label="Date of birth"
            aria-invalid={dobInvalid || undefined}
            className={`input-field w-full text-center${dobInvalid ? ' field-invalid' : ''}`}
          />
          {error && (
            <p className={`text-xs mt-2 ${dobInvalid ? 'font-semibold text-red-500' : 'text-red-500'}`}>{error}</p>
          )}

          <button onClick={submit} disabled={saving} className="btn-primary w-full justify-center mt-4 text-sm">
            {saving ? <Loader2 size={16} className="animate-spin" /> : 'Complete Sign Up'}
          </button>

          <p className="text-[11px] text-[var(--text-muted)] mt-3 flex items-center justify-center gap-1">
            <ShieldCheck size={12} /> Only saved to your profile — never shared.
          </p>
        </div>
      </div>
    </div>
  );
}
