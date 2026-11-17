import React, { useEffect } from 'react';
import Link from 'next/link';
import { Crown, Gift, BookOpen, Brain, Calendar, Settings, ChevronRight } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { useAuthStore } from '@/store/authStore';
import { useRouter } from 'next/router';
import { formatDate, getInitialsColor } from '@/utils/helpers';
import { cn } from '@/utils/helpers';
import { isTrialActive } from '@/lib/plan';

export default function ProfilePage() {
  const { user, isGuest } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (isGuest) router.replace('/');
  }, [isGuest, router]);

  if (isGuest) return null;
  if (!user)   return null;

  const colors      = getInitialsColor(user.initials || 'SN');
  const trialActive = isTrialActive(user);
  const planLabel   = user.plan === 'premium' ? 'Premium' : trialActive ? 'Free Trial' : 'Free Plan';
  const planColor   = user.plan === 'premium' ? 'text-amber-600 bg-amber-50 dark:bg-amber-900/30' :
                      trialActive             ? 'text-blue-600 bg-blue-50 dark:bg-blue-900/30' :
                                               'text-gray-600 bg-gray-100 dark:bg-gray-800';

  return (
    <Layout title="My Profile | SolveNCERT" description="Manage your SolveNCERT profile, track progress and view your premium plan." canonical="/profile">
      <div className="max-w-screen-sm mx-auto px-6 py-10 space-y-5">

        {/* Profile card */}
        <div className="card p-6 text-center">
          <div
            className="w-20 h-20 rounded-2xl flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4 shadow-soft-lg"
            style={{ background: colors.fg }}
          >
            {user.avatar_url
              ? <img src={user.avatar_url} className="w-full h-full rounded-2xl object-cover" alt="Profile photo" />
              : (user.initials || 'SN')}
          </div>
          <h1 className="text-xl font-display font-bold text-[var(--text-primary)]">{user.full_name}</h1>
          <p className="text-sm text-[var(--text-muted)] mt-0.5">{user.email}</p>
          <span className={cn('mt-2 inline-block px-3 py-1 rounded-full text-xs font-bold', planColor)}>
            {planLabel}
          </span>
          {user.bio && <p className="text-sm text-[var(--text-secondary)] mt-3 max-w-xs mx-auto">{user.bio}</p>}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4">
          {[
            { icon: BookOpen, label: 'Chapters Read',     val: '–' },
            { icon: Brain,    label: 'AI Queries',        val: '–' },
          ].map(({ icon: Icon, label, val }) => (
            <div key={label} className="card p-4 text-center">
              <Icon size={18} className="mx-auto text-blue-500 mb-1.5" />
              <p className="text-lg font-bold text-[var(--text-primary)]">{val}</p>
              <p className="text-xs text-[var(--text-muted)]">{label}</p>
            </div>
          ))}
        </div>

        {/* Plan info */}
        {user.plan !== 'premium' && (
          <div className="card p-5 border-amber-200 dark:border-amber-800">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <Crown size={16} className="text-amber-500" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">Upgrade to Premium</p>
                  <p className="text-xs text-[var(--text-muted)]">₹99/month · All features unlocked</p>
                </div>
              </div>
              <Link href="/premium" className="btn-primary text-xs py-2">Upgrade</Link>
            </div>
          </div>
        )}

        {/* Account info */}
        <div className="card p-5 space-y-3">
          <h2 className="text-xs font-bold uppercase tracking-widest text-[var(--text-muted)]">Account Info</h2>
          {[
            { label: 'Referral Code', val: user.referral_code || '—' },
            { label: 'Member Since',  val: formatDate(user.created_at) },
            { label: 'Total Referrals', val: String(user.total_referrals || 0) },
          ].map(({ label, val }) => (
            <div key={label} className="flex items-center justify-between py-1">
              <p className="text-sm text-[var(--text-muted)]">{label}</p>
              <p className="text-sm font-semibold text-[var(--text-primary)] font-mono">{val}</p>
            </div>
          ))}
        </div>

        {/* Quick links */}
        <div className="card divide-y divide-[var(--border)]">
          {[
            { icon: Settings, label: 'Edit Profile & Settings', href: '/settings' },
            { icon: Gift,     label: 'Referral & Rewards',       href: '/referral' },
            { icon: Crown,    label: 'Premium Plan',             href: '/premium'  },
          ].map(({ icon: Icon, label, href }) => (
            <Link key={href} href={href} className="flex items-center gap-3 p-4 hover:bg-[var(--surface-1)] transition-colors group">
              <Icon size={15} className="text-[var(--text-muted)] group-hover:text-blue-500 transition-colors" />
              <span className="flex-1 text-sm text-[var(--text-secondary)] group-hover:text-[var(--text-primary)]">{label}</span>
              <ChevronRight size={14} className="text-[var(--text-muted)]" />
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}
