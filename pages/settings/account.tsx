import React, { useState } from 'react';
import Link from 'next/link';
import {
  Archive, ArchiveRestore, Clock, Crown, Eye, EyeOff,
  KeyRound, Loader2, Lock, Save, Trash2
} from 'lucide-react';
import SettingsShell from '@/components/settings/SettingsShell';
import { useAuthStore } from '@/store/authStore';
import { supabase } from '@/lib/supabase';
import { FREE_RETENTION_MAX, PREMIUM_RETENTION_MAX, ARCHIVE_LIMIT } from '@/lib/history';
import toast from 'react-hot-toast';

export default function AccountSettingsPage() {
  const { user, fetchProfile } = useAuthStore();
  const [loading, setLoading] = useState(false);
  const [showNew, setShowNew] = useState(false);

  // Password fields
  const [newPw, setNewPw] = useState('');

  // Archived History — gated behind a password re-check
  const [archiveUnlocked,  setArchiveUnlocked]  = useState(false);
  const [archivePwInput,   setArchivePwInput]   = useState('');
  const [archiveVerifying, setArchiveVerifying] = useState(false);
  const [archiveRows,      setArchiveRows]      = useState<{ id: string; url: string; label: string; created_at: string }[]>([]);
  const [archiveLoading,   setArchiveLoading]   = useState(false);
  const [archiveCount,     setArchiveCount]     = useState(0);

  // History retention settings
  const [retentionDays,    setRetentionDays]    = useState(user?.history_retention_days ?? 30);
  const [keepForever,      setKeepForever]      = useState(user?.history_keep_forever ?? false);
  const [retentionSaving,  setRetentionSaving]  = useState(false);

  const isPremiumUser = user?.plan === 'premium';
  const maxDays = isPremiumUser ? PREMIUM_RETENTION_MAX : FREE_RETENTION_MAX;

  async function changePassword() {
    if (!newPw || newPw.length < 6) return toast.error('New password must be at least 6 characters.');
    setLoading(true);
    try {
      const { error } = await supabase.auth.updateUser({ password: newPw });
      if (error) throw error;
      toast.success('Password updated!');
      setNewPw('');
    } catch {
      toast.error('Failed to update password.');
    } finally {
      setLoading(false);
    }
  }

  async function verifyAndUnlockArchive() {
    if (!user?.email || !archivePwInput) return;
    setArchiveVerifying(true);
    try {
      const { error } = await supabase.auth.signInWithPassword({ email: user.email, password: archivePwInput });
      if (error) { toast.error('Incorrect password.'); return; }
      setArchiveUnlocked(true);
      setArchivePwInput('');
      loadArchivedHistory();
    } finally {
      setArchiveVerifying(false);
    }
  }

  async function loadArchivedHistory() {
    if (!user) return;
    setArchiveLoading(true);
    const [rowsRes, countRes] = await Promise.all([
      supabase.from('page_history').select('id, url, label, created_at')
        .eq('user_id', user.id).eq('archived', true).order('created_at', { ascending: false }),
      supabase.from('page_history').select('id', { count: 'exact', head: true })
        .eq('user_id', user.id).eq('archived', true),
    ]);
    setArchiveRows(rowsRes.data || []);
    setArchiveCount(countRes.count ?? 0);
    setArchiveLoading(false);
  }

  async function restoreHistoryEntry(id: string) {
    await supabase.from('page_history').update({ archived: false }).eq('id', id);
    setArchiveRows(prev => prev.filter(r => r.id !== id));
    setArchiveCount(c => Math.max(0, c - 1));
    toast.success('Restored to History.');
  }

  async function deleteHistoryEntryForever(id: string) {
    await supabase.from('page_history').delete().eq('id', id);
    setArchiveRows(prev => prev.filter(r => r.id !== id));
    setArchiveCount(c => Math.max(0, c - 1));
  }

  async function saveRetention() {
    if (!user) return;
    setRetentionSaving(true);
    try {
      const { error } = await supabase.rpc('set_history_retention', {
        p_days: retentionDays,
        p_keep_forever: isPremiumUser ? keepForever : false,
      });
      if (error) {
        const msg = (error as { message?: string }).message || '';
        if (msg.includes('INVALID_RANGE')) toast.error('Days must be between 1 and ' + maxDays + '.');
        else toast.error('Failed to save. Try again.');
        return;
      }
      await fetchProfile(user.id);
      toast.success('Retention setting saved!');
    } catch {
      toast.error('Failed to save.');
    } finally {
      setRetentionSaving(false);
    }
  }

  return (
    <SettingsShell active="account">
      <div className="space-y-4">
        <div className="card p-6 space-y-4">
          <h2 className="font-display font-semibold text-[var(--text-primary)]">Change Password</h2>
          <div className="relative">
            <input type={showNew ? 'text' : 'password'} value={newPw} onChange={e => setNewPw(e.target.value)} className="input-field pr-10" placeholder="New password (min. 6 chars)" />
            <button type="button" onClick={() => setShowNew(!showNew)} className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]">
              {showNew ? <EyeOff size={15} /> : <Eye size={15} />}
            </button>
          </div>
          <button onClick={changePassword} disabled={loading} className="btn-primary text-sm">
            {loading ? <Loader2 size={15} className="animate-spin" /> : <><Lock size={14} /> Update Password</>}
          </button>
        </div>

        <div className="card p-6 space-y-4">
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900 flex items-center justify-center flex-shrink-0">
              <Clock size={16} className="text-blue-500" />
            </div>
            <div>
              <h2 className="font-display font-semibold text-[var(--text-primary)]">Activity History Auto-Delete</h2>
              <p className="text-sm text-[var(--text-secondary)] mt-1">Choose how long to keep your browsing history before it is automatically removed.</p>
            </div>
          </div>

          <div className="rounded-xl bg-[var(--surface-1)] border border-[var(--border)] p-4 space-y-4">
            <div>
              <label className="block text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-2">Keep history for</label>
              <div className="flex items-center gap-3">
                <input type="range" min={1} max={maxDays} value={retentionDays}
                  onChange={e => { setRetentionDays(Number(e.target.value)); setKeepForever(false); }}
                  className="flex-1 h-2 bg-[var(--surface-3)] rounded-lg appearance-none cursor-pointer accent-blue-500"
                  disabled={keepForever} />
                <span className="text-sm font-bold text-[var(--text-primary)] min-w-[52px] text-right tabular-nums">
                  {keepForever ? 'Off' : retentionDays + ' day' + (retentionDays === 1 ? '' : 's')}
                </span>
              </div>
              <div className="flex justify-between text-[10px] text-[var(--text-muted)] mt-1">
                <span>1 day</span><span>{maxDays} days</span>
              </div>
            </div>

            {isPremiumUser ? (
              <div className="flex items-center justify-between py-2">
                <div>
                  <p className="text-sm font-medium text-[var(--text-primary)]">Keep forever</p>
                  <p className="text-[11px] text-[var(--text-muted)]">Never auto-delete any history entry.</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" checked={keepForever} onChange={e => setKeepForever(e.target.checked)} className="sr-only peer" />
                  <div className="w-9 h-5 bg-[var(--surface-3)] peer-checked:bg-blue-600 rounded-full transition-colors after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-4" />
                </label>
              </div>
            ) : (
              <div className="flex items-start gap-2 py-2 px-3 rounded-lg bg-amber-50 dark:bg-amber-950/20 border border-amber-200/50 dark:border-amber-800/30">
                <Crown size={14} className="text-amber-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-[var(--text-secondary)]">Premium users can keep history for up to 120 days or switch auto-delete off entirely.</p>
                  <Link href="/pricing" className="text-[11px] font-semibold text-amber-600 dark:text-amber-400 hover:underline mt-0.5 inline-block">Upgrade to Premium</Link>
                </div>
              </div>
            )}
          </div>

          <button onClick={saveRetention} disabled={retentionSaving} className="btn-primary text-sm">
            {retentionSaving ? <Loader2 size={14} className="animate-spin" /> : <><Save size={13} /> Save Retention</>}
          </button>
        </div>

        <div className="card p-6">
          <div className="flex items-center justify-between mb-1">
            <h2 className="font-display font-semibold text-[var(--text-primary)] flex items-center gap-2">
              <Archive size={16} className="text-blue-500" /> Archived History
            </h2>
            {archiveUnlocked && (
              <span className="text-[11px] text-[var(--text-muted)] tabular-nums">
                {archiveCount} / {ARCHIVE_LIMIT} slots
              </span>
            )}
          </div>
          <p className="text-sm text-[var(--text-secondary)] mb-4">Archived pages are hidden from your History list. They never auto-delete until you restore or delete them. Re-enter your password to view and manage them.</p>

          {!archiveUnlocked ? (
            <div className="flex items-center gap-2">
              <div className="relative flex-1 max-w-xs">
                <input
                  type="password"
                  value={archivePwInput}
                  onChange={e => setArchivePwInput(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && verifyAndUnlockArchive()}
                  placeholder="Your password"
                  className="input-field pr-9"
                />
                <KeyRound size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" />
              </div>
              <button onClick={verifyAndUnlockArchive} disabled={archiveVerifying || !archivePwInput} className="btn-primary text-sm whitespace-nowrap">
                {archiveVerifying ? <Loader2 size={14} className="animate-spin" /> : 'Verify & View'}
              </button>
            </div>
          ) : archiveLoading ? (
            <div className="flex justify-center py-6"><Loader2 size={18} className="animate-spin text-blue-500" /></div>
          ) : archiveRows.length === 0 ? (
            <p className="text-sm text-[var(--text-muted)]">No archived pages.</p>
          ) : (
            <div className="space-y-2">
              {archiveRows.map(r => (
                <div key={r.id} className="flex items-center justify-between gap-3 p-2.5 rounded-lg bg-[var(--surface-2)]">
                  <Link href={r.url} className="min-w-0 hover:underline">
                    <p className="text-sm text-[var(--text-primary)] truncate">{r.label}</p>
                    <p className="text-[10px] text-[var(--text-muted)]">{new Date(r.created_at).toLocaleDateString()}</p>
                  </Link>
                  <div className="flex items-center gap-1 flex-shrink-0">
                    <button onClick={() => restoreHistoryEntry(r.id)} title="Restore" className="p-1.5 rounded-lg hover:bg-[var(--surface-3)] text-[var(--text-muted)] hover:text-blue-500">
                      <ArchiveRestore size={13} />
                    </button>
                    <button onClick={() => deleteHistoryEntryForever(r.id)} title="Delete forever" className="p-1.5 rounded-lg hover:bg-red-50 dark:hover:bg-red-950/30 text-[var(--text-muted)] hover:text-red-500">
                      <Trash2 size={13} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="card p-6">
          <h2 className="font-display font-semibold text-[var(--text-primary)] mb-1">Danger Zone</h2>
          <p className="text-sm text-[var(--text-secondary)] mb-4">These actions are irreversible.</p>
          <button className="flex items-center gap-2 text-sm text-red-500 hover:text-red-600 font-medium">
            <Trash2 size={14} /> Delete Account
          </button>
        </div>
      </div>
    </SettingsShell>
  );
}
