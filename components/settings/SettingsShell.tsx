import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { User, Shield, Bell, Palette, Lock } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { useAuthStore } from '@/store/authStore';
import { useCollabStore } from '@/store/collabStore';
import { cn } from '@/utils/helpers';

const TABS = [
  { id: 'profile',       label: 'Profile',       icon: User,   href: '/settings/profile' },
  { id: 'account',       label: 'Account',       icon: Shield, href: '/settings/account' },
  { id: 'notifications', label: 'Notifications', icon: Bell,   href: '/settings/notifications' },
  { id: 'appearance',    label: 'Appearance',    icon: Palette, href: '/settings/appearance' },
] as const;

export type SettingsTabId = (typeof TABS)[number]['id'];

interface SettingsShellProps {
  active: SettingsTabId;
  children: React.ReactNode;
}

export default function SettingsShell({ active, children }: SettingsShellProps) {
  const router = useRouter();
  const { isGuest, loading } = useAuthStore();
  const isCollabInvitee = useCollabStore((s) => s.active && s.role === 'invitee');

  // Guests can't have settings — but wait for auth restore first so a hard
  // reload doesn't bounce a logged-in user to the home page.
  useEffect(() => {
    if (!loading && isGuest) router.replace('/');
  }, [loading, isGuest, router]);

  if (loading || isGuest) return null;

  if (isCollabInvitee) {
    return (
      <Layout title="Settings | SolveNCERT" canonical="/settings">
        <div className="max-w-sm mx-auto px-6 py-24 text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-red-500/10 border border-red-500/30 mb-4">
            <Lock size={24} className="text-red-500" />
          </div>
          <h1 className="text-lg font-display font-bold text-[var(--text-primary)] mb-2">Settings are private</h1>
          <p className="text-sm text-[var(--text-muted)]">
            You&apos;re inside your friend&apos;s account — only they can change settings here.
          </p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout
      title="Settings | SolveNCERT"
      description="Manage your SolveNCERT account settings, notifications and preferences."
      canonical={`/settings/${active}`}
    >
      <div className="max-w-screen-md mx-auto px-6 py-10">
        <h1 className="text-2xl font-display font-bold text-[var(--text-primary)] mb-6">Settings</h1>

        <div className="flex flex-col sm:flex-row gap-6">
          <aside className="sm:w-44 flex-shrink-0">
            <nav className="space-y-1">
              {TABS.map(({ id, label, icon: Icon, href }) => (
                <Link
                  key={id}
                  href={href}
                  className={cn('sidebar-item w-full', active === id && 'active')}
                >
                  <Icon size={15} /> {label}
                </Link>
              ))}
            </nav>
          </aside>

          <div className="flex-1">{children}</div>
        </div>
      </div>
    </Layout>
  );
}
