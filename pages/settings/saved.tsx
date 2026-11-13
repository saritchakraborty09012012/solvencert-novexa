import React, { useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Bookmark, Loader2, Trash2 } from 'lucide-react';
import SettingsShell from '@/components/settings/SettingsShell';
import { useAuthStore } from '@/store/authStore';
import { useBookmarksStore } from '@/store/bookmarksStore';
import { savedQuestionHref } from '@/lib/savedLinks';
import { formatDate } from '@/utils/helpers';

/**
 * Settings → Saved: every solution the user kept with the Save button.
 * Saved rows live in the `bookmarks` table (account-wise, RLS-scoped); this is
 * the place where they become visible again — each row reopens the chapter and
 * scrolls straight to that question's solution.
 */
export default function SavedSettingsPage() {
  const { user, loading } = useAuthStore();
  const { items, loaded, loading: fetching, fetchAll, remove } = useBookmarksStore();

  useEffect(() => {
    if (!loading && user?.id && !loaded) fetchAll(user.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading, user?.id, loaded]);

  const loadingList = fetching && !loaded;

  return (
    <SettingsShell active="saved">
      <div className="card p-6">
        <div className="flex items-start gap-3">
          <span
            className="grid size-9 place-items-center rounded-xl text-white flex-shrink-0"
            style={{ background: 'var(--brand-primary)' }}
          >
            <Bookmark size={16} />
          </span>
          <div>
            <h2 className="font-display font-semibold text-[var(--text-primary)]">Saved</h2>
            <p className="text-[15px] text-[var(--text-secondary)]">
              Every solution you kept with the Save button — stored in your account.
            </p>
          </div>
        </div>

        {loadingList ? (
          <div className="flex justify-center py-10">
            <Loader2 size={22} className="animate-spin text-blue-500" />
          </div>
        ) : items.length === 0 ? (
          <div className="mt-6 rounded-xl border border-dashed border-[var(--border)] px-6 py-10 text-center">
            <Bookmark size={26} className="mx-auto text-amber-500 mb-2" />
            <p className="text-sm font-semibold text-[var(--text-primary)]">Nothing saved yet</p>
            <p className="text-[13px] text-[var(--text-muted)] mt-1">
              Press <span className="font-semibold text-[var(--text-secondary)]">Save</span> on any
              question&apos;s solution and it will show up here — on every device you sign in from.
            </p>
            <Link
              href="/answers"
              className="inline-flex items-center gap-1 text-[13px] font-semibold text-blue-500 hover:text-blue-600 mt-3"
            >
              Browse solutions <ArrowRight size={13} />
            </Link>
          </div>
        ) : (
          <ul className="mt-6 space-y-2.5">
            {items.map(b => (
              <li key={b.id} className="group rounded-xl border border-[var(--border)] bg-[var(--surface-1)] hover:border-blue-400/50 transition-colors">
                <div className="flex items-start gap-2 p-3.5">
                  <Link href={savedQuestionHref(b)} className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-900/40 text-amber-600 dark:text-amber-400 uppercase tracking-wide">
                        {b.subject}
                      </span>
                      <span className="text-[11px] text-[var(--text-muted)] truncate">{b.chapter_title}</span>
                      <span className="text-[11px] text-[var(--text-muted)] ml-auto flex-shrink-0">{formatDate(b.created_at)}</span>
                    </div>
                    <p className="text-sm text-[var(--text-primary)] font-medium leading-snug line-clamp-2">
                      Q{b.question_number}. {b.question_text}
                    </p>
                    <span className="inline-flex items-center gap-1 text-[12px] font-semibold text-blue-500 hover:text-blue-600 mt-1.5">
                      Open &amp; scroll to solution <ArrowRight size={12} />
                    </span>
                  </Link>
                  <button
                    onClick={() => user && remove(user.id, b.id)}
                    className="p-1.5 rounded-lg text-[var(--text-muted)] hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20 flex-shrink-0 transition-colors"
                    title="Remove from Saved"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </SettingsShell>
  );
}
