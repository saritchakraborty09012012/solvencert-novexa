import React from 'react';
import Link from 'next/link';
import { History, Clock, RefreshCcw, CloudCog, ShieldCheck } from 'lucide-react';
import { useAuthStore } from '@/store/authStore';
import { retentionText } from '@/lib/history';

// Shown once after every successful login: tells the user their activity
// history is synced to their account and auto-deletes per their retention
// setting (free default 30 days; premium 1–120 days or forever).
export default function HistoryRetentionModal({ onClose }: { onClose: () => void }) {
  const { user } = useAuthStore();
  const isPremiumUser = user?.plan === 'premium';

  return (
    <div className="fixed inset-0 z-[70] flex items-end sm:items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-md bg-[var(--surface-0)] rounded-3xl border border-[var(--border)] shadow-soft-xl overflow-hidden animate-scale-in">
        <div className="h-1.5 bg-gradient-to-r from-blue-500 via-indigo-400 to-blue-600" />
        <div className="p-6 sm:p-7 text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-50 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900 mb-4">
            <History size={24} className="text-blue-500" />
          </div>

          <h3 className="text-lg font-display font-bold text-[var(--text-primary)] mb-1.5">
            Your activity history is now syncing
          </h3>
          <p className="text-sm text-[var(--text-muted)] mb-5">
            Everything you visit on SolveNCERT is saved privately to your account — so your
            History follows you on every device you log in from.
          </p>

          <div className="rounded-2xl bg-[var(--surface-1)] border border-[var(--border)] p-4 text-left space-y-3 mb-5">
            <div className="flex items-start gap-2.5">
              <Clock size={15} className="text-blue-500 mt-0.5 flex-shrink-0" />
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Activity history is <span className="font-semibold text-[var(--text-primary)]">auto-deleted after {user?.history_retention_days ?? 30} day{(user?.history_retention_days ?? 30) === 1 ? '' : 's'}</span>.
              </p>
            </div>
            {isPremiumUser ? (
              <div className="flex items-start gap-2.5">
                <ShieldCheck size={15} className="text-amber-500 mt-0.5 flex-shrink-0" />
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  As a Premium member you can keep it for up to 120 days — or switch auto-delete off and keep it forever.
                </p>
              </div>
            ) : (
              <div className="flex items-start gap-2.5">
                <RefreshCcw size={15} className="text-[var(--text-muted)] mt-0.5 flex-shrink-0" />
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  You can change this anytime (1–30 days) in Settings.
                </p>
              </div>
            )}
            <div className="flex items-start gap-2.5">
              <CloudCog size={15} className="text-[var(--text-muted)] mt-0.5 flex-shrink-0" />
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Archived activities never auto-delete until you remove them yourself.
              </p>
            </div>
          </div>

          <div className="flex gap-2">
            <Link href="/settings/account" onClick={onClose} className="btn-ghost flex-1 justify-center text-sm py-2.5">
              Settings
            </Link>
            <button onClick={onClose} className="btn-primary flex-1 justify-center text-sm py-2.5">
              Got it
            </button>
          </div>

          <p className="mt-3 text-[10px] text-[var(--text-muted)]">{retentionText(user)}</p>
        </div>
      </div>
    </div>
  );
}
