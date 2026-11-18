import { create } from 'zustand';
import { supabase } from '@/lib/supabase';
import { clearGuestLimits } from '@/lib/guestLimits';
import { identifyUser, resetUser } from '@/lib/analytics';
import { generateInitials, generateReferralCode, needsDobCompletion } from '@/utils/helpers';
import type { Profile } from '@/types/database';

/** Minimal shape of a Supabase auth user needed to bootstrap a profile. */
export interface AuthUserLike {
  email?: string;
  created_at?: string;
  user_metadata?: Record<string, unknown> | null;
  app_metadata?: Record<string, unknown> | null;
}

interface AuthState {
  user:       Profile | null;
  loading:    boolean;
  isGuest:    boolean;
  /** A brand-new OAuth sign-up still owes us a date of birth (blocking popup). */
  dobPending: boolean;
  setUser:    (user: Profile | null) => void;
  setLoading: (loading: boolean) => void;
  signOut:    () => Promise<void>;
  fetchProfile: (userId: string, authUser?: AuthUserLike) => Promise<void>;
}

export const useAuthStore = create<AuthState>((set, get) => ({
  user:    null,
  loading: true,
  isGuest: true,
  dobPending: false,

  setUser: (user) => set({ user, isGuest: !user, ...(user ? {} : { dobPending: false }) }),
  setLoading: (loading) => set({ loading }),

  fetchProfile: async (userId: string, authUser?: AuthUserLike) => {
    try {
      let { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .maybeSingle();

      // First login for an OAuth (Google) user: there is no email/password
      // signup form to create the profile row, so create it here with the
      // same defaults email signup uses (freemium trial, referral code,
      // initials) plus the name/avatar Google provides. Guarded to
      // non-email providers so legacy email accounts keep their old
      // behaviour, and reached only when NO row exists — combined with the
      // upsert on the primary key, existing profiles are never duplicated
      // or overwritten.
      const provider = typeof authUser?.app_metadata?.provider === 'string'
        ? authUser.app_metadata.provider
        : null;
      if (!data && authUser?.email && provider && provider !== 'email') {
        const meta = authUser.user_metadata ?? {};
        const fullName =
          (typeof meta.full_name === 'string' && meta.full_name) ||
          (typeof meta.name === 'string' && meta.name) ||
          authUser.email.split('@')[0].replace(/[._-]+/g, ' ').trim() ||
          'Student';
        const avatarUrl =
          (typeof meta.avatar_url === 'string' && meta.avatar_url) ||
          (typeof meta.picture === 'string' && meta.picture) ||
          null;
        await supabase.from('profiles').upsert({
          id: userId,
          email: authUser.email,
          full_name: fullName,
          phone: null,
          dob: null,
          avatar_url: avatarUrl,
          initials: generateInitials(fullName),
          plan: 'freemium',
          trial_ends_at: new Date(Date.now() + 30 * 864e5).toISOString(),
          referral_code: generateReferralCode(userId),
          total_referrals: 0,
          email_verified: true,
        });
        const retry = await supabase
          .from('profiles')
          .select('*')
          .eq('id', userId)
          .maybeSingle();
        data = retry.data;
        error = retry.error;
      }

      if (error || !data) { set({ user: null, isGuest: true, loading: false, dobPending: false }); return; }

      // Trial over → plan must read 'free'. Writes ONLY the `plan` column, only
      // on the signed-in user's own row, and only while it still reads as a
      // trial, so the upgrade popup, plan badge and premium gates all agree
      // with trial_ends_at. Failure is harmless: the UI keys off the date.
      if (
        (data.plan === 'freemium' || data.plan === 'trial') &&
        data.trial_ends_at &&
        new Date(data.trial_ends_at).getTime() <= Date.now()
      ) {
        const { data: flipped } = await supabase
          .from('profiles')
          .update({ plan: 'free' })
          .eq('id', userId)
          .in('plan', ['freemium', 'trial'])
          .select('plan')
          .maybeSingle();
        if (flipped) data.plan = 'free';
      }

      // New OAuth sign-up with no DOB on file → the blocking "one step left"
      // popup (DobCompletionModal). Recomputed whenever the caller passes the
      // auth user (it does on every session restore); when it doesn't, keep
      // whatever was decided last. `dob` on the row wins: once it's saved the
      // popup never comes back.
      const dobPending = authUser
        ? needsDobCompletion({ provider, createdAt: authUser.created_at }, data.dob)
        : get().dobPending;

      set({ user: data as Profile, isGuest: false, loading: false, dobPending });
      identifyUser(userId, { name: data.full_name, plan: data.plan });
    } catch {
      set({ user: null, isGuest: true, loading: false, dobPending: false });
    }
  },

  signOut: async () => {
    await supabase.auth.signOut();
    set({ user: null, isGuest: true, dobPending: false });
    resetUser();
  },
}));
