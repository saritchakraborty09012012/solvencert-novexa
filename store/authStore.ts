import { create } from 'zustand';
import { supabase } from '@/lib/supabase';
import { clearGuestLimits } from '@/lib/guestLimits';
import { identifyUser, resetUser } from '@/lib/analytics';
import type { Profile } from '@/types/database';

interface AuthState {
  user:       Profile | null;
  loading:    boolean;
  isGuest:    boolean;
  setUser:    (user: Profile | null) => void;
  setLoading: (loading: boolean) => void;
  signOut:    () => Promise<void>;
  fetchProfile: (userId: string) => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user:    null,
  loading: true,
  isGuest: true,

  setUser: (user) => set({ user, isGuest: !user }),
  setLoading: (loading) => set({ loading }),

  fetchProfile: async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single();
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
