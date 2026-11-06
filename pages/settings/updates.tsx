import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import SettingsShell from '@/components/settings/SettingsShell';
import UpdateTypeBadge from '@/components/features/UpdateTypeBadge';
import { useAuthStore } from '@/store/authStore';
import { formatUpdateDate, getUpdatesForSignup } from '@/lib/updates';

export default function UpdatesSettingsPage() {
  const { user } = useAuthStore();

  // Only show what shipped on/after the day this account was created.
  const updates = getUpdatesForSignup(user?.created_at);
  const joinedOn = user?.created_at ? formatUpdateDate(user.created_at) : null;

  return (
    <SettingsShell active="updates">
      <div className="card p-6">
        <div className="flex items-start gap-3">
          <span
            className="grid size-9 place-items-center rounded-xl text-white flex-shrink-0"
            style={{ background: 'var(--brand-primary)' }}
          >
            <Sparkles size={16} />
          </span>
          <div>
            <h2 className="font-display font-semibold text-[var(--text-primary)]">Updates</h2>
            <p className="text-[15px] text-[var(--text-secondary)]">
              Everything new{joinedOn ? ` since you joined on ${joinedOn}` : ''}.
            </p>
          </div>
        </div>

        {updates.length === 0 ? (
          <div className="mt-6 rounded-xl border border-dashed border-[var(--border)] px-6 py-10 text-center">
            <CheckCircle2 size={26} className="mx-auto text-emerald-500 mb-2" />
            <p className="text-sm font-semibold text-[var(--text-primary)]">You&apos;re all caught up</p>
            <p className="text-[13px] text-[var(--text-muted)] mt-1">
              No updates have shipped since you joined. New solutions and features will appear here.
            </p>
          </div>
        ) : (
          <ol className="mt-6">
            {updates.map((update, index) => (
              <li key={update.id} className="relative pl-6 pb-6 last:pb-0">
                <span
                  className="absolute left-0 top-1.5 size-2 rounded-full"
                  style={{ background: 'var(--brand-primary)' }}
                />
                {index < updates.length - 1 && (
                  <span className="absolute left-[3.5px] top-4 bottom-0 w-px bg-[var(--border)]" />
                )}

                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <UpdateTypeBadge type={update.type} />
                  <span className="text-[11px] text-[var(--text-muted)]">
                    {formatUpdateDate(update.date)}
                  </span>
                  {update.beta && (
                    <span
                      className="px-2 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/40 text-amber-600 dark:text-amber-400 text-[9px] font-bold uppercase tracking-[0.14em]"
                      title="This is a beta feature and is still under testing and constant improvement."
                    >
                      Beta
                    </span>
                  )}
                </div>

                <h3 className="text-sm font-bold text-[var(--text-primary)]">{update.title}</h3>
                <p className="text-[13px] leading-relaxed text-[var(--text-secondary)] mt-1">
                  {update.summary}
                </p>
                {update.body && (
                  <p className="text-[13px] leading-relaxed text-[var(--text-muted)] mt-1">
                    {update.body}
                  </p>
                )}

                {update.href && (
                  <Link
                    href={update.href}
                    className="inline-flex items-center gap-1 text-[13px] font-semibold text-blue-500 hover:text-blue-600 mt-2"
                  >
                    {update.hrefLabel || 'Open'} <ArrowRight size={13} />
                  </Link>
                )}
              </li>
            ))}
          </ol>
        )}
      </div>
    </SettingsShell>
  );
}
