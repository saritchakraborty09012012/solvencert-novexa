import { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '@/lib/supabase';
import { useAuthStore } from '@/store/authStore';
import { Loader2 } from 'lucide-react';

export default function AuthCallback() {
  const router = useRouter();
  const { fetchProfile } = useAuthStore();
  const isRecovery = useRef(false);

  useEffect(() => {
    // Password-recovery links point here (already on the Supabase redirect
    // allow-list via signup verification). Forward them to the reset page.
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event) => {
      if (event === 'PASSWORD_RECOVERY') {
        isRecovery.current = true;
        router.replace('/auth/reset-password');
      }
    });

    supabase.auth.getSession().then((result: any) => {
      const session = result?.data?.session ?? null;
      if (isRecovery.current) return; // already routed to the reset page
      if (session?.user) {
        fetchProfile(session.user.id).then(() => router.replace('/'));
      } else {
        router.replace('/');
      }
    });

    return () => subscription.unsubscribe();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--surface-1)]">
      <div className="text-center">
        <Loader2 size={28} className="animate-spin text-blue-500 mx-auto mb-3" />
        <p className="text-sm text-[var(--text-muted)]">Signing you in...</p>
      </div>
    </div>
  );
}
