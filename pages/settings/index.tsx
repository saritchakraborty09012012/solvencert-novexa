import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuthStore } from '@/store/authStore';

const VALID_TABS = ['profile', 'account', 'notifications', 'appearance'];

export default function SettingsIndexPage() {
  const router = useRouter();
  const { isGuest, loading } = useAuthStore();

  useEffect(() => {
    if (loading) return;
    if (isGuest) { router.replace('/'); return; }
    const tab = typeof router.query.tab === 'string' && VALID_TABS.includes(router.query.tab)
      ? router.query.tab
      : 'profile';
    router.replace(`/settings/${tab}`);
  }, [loading, isGuest, router]);

  return null;
}
