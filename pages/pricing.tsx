import React, { useState } from 'react';
import Link from 'next/link';
import { Crown, Check, Sparkles, Layers, Building2, ArrowRight } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import AuthModal from '@/components/auth/AuthModal';
import { useAuthStore } from '@/store/authStore';
import { formatDate } from '@/utils/helpers';
import { cn } from '@/utils/helpers';

const FREE_FEATURES = [
  'Unlimited solved answers access',
  'AI Learn — limited queries per min',
  'Quizzes & practice papers — limited queries per min',
  'Mock tests — limited queries per min',
  'Study Room — up to 5 friends',
  'Download solutions as PDF',
  'Bookmarks & study history',
  'Ad-free experience',
  'Community support',
];

const PREMIUM_FEATURES = [
  'All free features',
  'AI Learn — full access',
  'Quizzes & practice papers — unlimited',
  'Mock tests — unlimited',
  'Study Room — up to 10 friends',
  'Priority AI responses',
];

const ENTERPRISE_FEATURES = [
  'Everything in Premium',
  'Custom AI models & content',
  'Bulk accounts for schools & institutes',
  'Dedicated account manager',
  'Custom onboarding & training',
  'Priority support & SLA',
  'Features on request — built for you',
];

export default function PricingPage() {
  const { user, isGuest } = useAuthStore();
  const [authModal, setAuthModal] = useState<'login' | 'signup' | null>(null);

  const isPremium = user?.plan === 'premium';
  const isTrial   = user?.plan === 'trial';
  const isFree    = user?.plan === 'free';
  const currentIsPremium = isPremium || isTrial;

  return (
    <Layout
      title="Plans & Pricing — SolveNCERT | Free, Premium & Enterprise"
      description="Compare SolveNCERT free, premium and enterprise plans. Premium unlocks unlimited NCERT solutions, AI Learn, quizzes, mock tests and more. Schools & institutes get custom pricing."
      canonical="/pricing"
    >
      <div className="max-w-5xl mx-auto px-6 py-12 space-y-8">

        <div className="text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 mb-4 shadow-glow-amber">
            <Crown size={24} className="text-white" />
          </div>
          <h1 className="text-3xl font-display font-bold text-[var(--text-primary)] mb-2">Plans & Pricing</h1>
          <p className="text-[var(--text-muted)]">Pick the plan that fits your study journey. Upgrade anytime.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-stretch">

          {/* Free plan */}
          <div className={cn(
            'card relative flex flex-col p-8 transition-shadow',
            !isGuest && !currentIsPremium && 'border-amber-300 dark:border-amber-700 ring-2 ring-amber-400/80'
          )}>
            {!isGuest && !currentIsPremium && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-lg shadow-amber-500/30">
                Your Current Plan
              </span>
            )}

            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[var(--brand-primary)]/10 text-[var(--brand-primary)] flex items-center justify-center">
                <Layers size={18} />
              </div>
              <div>
                <h2 className="text-lg font-display font-bold text-[var(--text-primary)]">Free Plan</h2>
                <p className="text-xs text-[var(--text-muted)]">For getting started</p>
              </div>
            </div>

            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-4xl font-display font-bold text-[var(--text-primary)]">Rs. 0</span>
              <span className="text-[var(--text-muted)]">/ forever</span>
            </div>

            <ul className="space-y-3 mb-8 flex-1">
              {FREE_FEATURES.map(f => (
                <li key={f} className="flex items-center gap-3 text-sm text-[var(--text-secondary)]">
                  <Check size={15} className="text-green-500 flex-shrink-0" /> {f}
                </li>
              ))}
            </ul>

            {isGuest ? (
              <button onClick={() => setAuthModal('signup')} className="btn-ghost w-full justify-center text-sm">
                Create Free Account <ArrowRight size={14} />
              </button>
            ) : isFree ? (
              <button disabled className="btn-ghost w-full justify-center text-sm opacity-60 cursor-default">
                Your Current Plan
              </button>
            ) : (
              <Link href="/profile" className="btn-ghost w-full justify-center text-sm">
                View My Plan <ArrowRight size={14} />
              </Link>
            )}
          </div>

          {/* Premium plan */}
          <div className={cn(
            'card relative flex flex-col p-8 transition-shadow border-amber-200 dark:border-amber-800',
            !isGuest && currentIsPremium && 'ring-2 ring-amber-400/80'
          )}>
            {!isGuest && currentIsPremium && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-lg shadow-amber-500/30 whitespace-nowrap">
                {isTrial ? 'Your Current Plan · Free Trial' : 'Your Current Plan'}
              </span>
            )}

            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 text-white flex items-center justify-center shadow-lg shadow-amber-500/30">
                <Crown size={18} />
              </div>
              <div>
                <h2 className="text-lg font-display font-bold text-[var(--text-primary)]">Premium Plan</h2>
                <p className="text-xs text-[var(--text-muted)]">Everything unlocked</p>
              </div>
            </div>

            <div className="flex items-baseline gap-1 mb-1">
              <span className="text-4xl font-display font-bold text-[var(--text-primary)]">Rs. 99</span>
              <span className="text-[var(--text-muted)]">/ month</span>
            </div>
            {isTrial && user?.trial_ends_at && (
              <p className="text-xs text-amber-600 dark:text-amber-400 mb-5">
                <Sparkles size={12} className="inline -mt-0.5 mr-1" />
                Your free trial ends {formatDate(user.trial_ends_at)}
              </p>
            )}
            {!isTrial && <div className="mb-5" />}

            <ul className="space-y-3 mb-8 flex-1">
              {PREMIUM_FEATURES.map(f => (
                <li key={f} className="flex items-center gap-3 text-sm text-[var(--text-secondary)]">
                  <Check size={15} className="text-green-500 flex-shrink-0" /> {f}
                </li>
              ))}
            </ul>

            {isGuest ? (
              <button onClick={() => setAuthModal('signup')} className="btn-primary w-full justify-center text-sm">
                Upgrade to Premium — Rs. 99 <ArrowRight size={14} />
              </button>
            ) : isPremium ? (
              <Link href="/premium" className="btn-ghost w-full justify-center text-sm">
                Manage Plan <ArrowRight size={14} />
              </Link>
            ) : (
              <Link href="/premium" className="btn-primary w-full justify-center text-sm">
                Upgrade to Premium — Rs. 99 <ArrowRight size={14} />
              </Link>
            )}
          </div>

          {/* Enterprise plan */}
          <div className="card relative flex flex-col p-8 transition-shadow border-[var(--border)]">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[var(--surface-2)] text-[var(--text-secondary)] flex items-center justify-center">
                <Building2 size={18} />
              </div>
              <div>
                <h2 className="text-lg font-display font-bold text-[var(--text-primary)]">Enterprise Plan</h2>
                <p className="text-xs text-[var(--text-muted)]">For schools & institutes</p>
              </div>
            </div>

            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-2xl font-display font-bold text-[var(--text-primary)]">Custom</span>
            </div>

            <ul className="space-y-3 mb-8 flex-1">
              {ENTERPRISE_FEATURES.map(f => (
                <li key={f} className="flex items-center gap-3 text-sm text-[var(--text-secondary)]">
                  <Check size={15} className="text-green-500 flex-shrink-0" /> {f}
                </li>
              ))}
            </ul>

            <Link href="/contact" className="btn-ghost w-full justify-center text-sm">
              Contact Us for Pricing <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        <p className="text-center text-xs text-[var(--text-muted)] pt-2">
          Every new account starts with a <strong className="text-amber-600 dark:text-amber-400">1 month free Premium trial</strong> — no card required.
        </p>
      </div>

      {authModal && <AuthModal mode={authModal} onClose={() => setAuthModal(null)} onSwitch={setAuthModal} />}
    </Layout>
  );
}