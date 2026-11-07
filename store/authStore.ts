import { create } from 'zustand';
import { supabase } from '@/lib/supabase';
import { clearGuestLimits } from '@/lib/guestLimits';
import { identifyUser, resetUser } from '@/lib/analytics';
import { generateInitials, generateReferralCode } from '@/utils/helpers';
import type { Profile } from '@/types/database';

/** Minimal shape of a Supabase auth user needed to bootstrap a profile. */
export interface AuthUserLike {
  email?: string;
  user_metadata?: Record<string, unknown> | null;
  app_metadata?: Record<string, unknown> | null;
}

interface AuthState {
  user:       Profile | null;
  loading:    boolean;
  isGuest:    boolean;
  setUser:    (user: Profile | null) => void;
  setLoading: (loading: boolean) => void;
  signOut:    () => Promise<void>;
  fetchProfile: (userId: string, authUser?: AuthUserLike) => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user:    null,
  loading: true,
  isGuest: true,

  setUser: (user) => set({ user, isGuest: !user }),
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
      // same defaults email signup uses (trial plan, referral code,
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
          plan: 'trial',
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

      if (error || !data) { set({ user: null, isGuest: true, loading: false }); return; }
      set({ user: data as Profile, isGuest: false, loading: false });
      identifyUser(userId, { name: data.full_name, plan: data.plan });
    } catch {
      set({ user: null, isGuest: true, loading: false });
    }
  },

  signOut: async () => {
    await supabase.auth.signOut();
    set({ user: null, isGuest: true });
    resetUser();
  },
}));
