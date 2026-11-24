import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Bot, Crown, Loader2, Save, Sparkles } from 'lucide-react';
import SettingsShell from '@/components/settings/SettingsShell';
import { useAuthStore } from '@/store/authStore';
import { loadAIHistorySettings, saveAIHistorySettings } from '@/lib/aiHistory';
import toast from 'react-hot-toast';

export default function AISettingsPage() {
  const { user } = useAuthStore();
  const [historyEnabled, setHistoryEnabled] = useState(true);
  const [retentionDays, setRetentionDays] = useState(30);
  const [autoDelete, setAutoDelete] = useState(false);
  const [saving, setSaving] = useState(false);

  const isPremiumUser = user?.plan === 'premium';

  useEffect(() => {
    if (!user?.id) return;
    loadAIHistorySettings(user.id).then(s => {
      setHistoryEnabled(s.history_enabled);
      setRetentionDays(s.retention_days);
      setAutoDelete(s.auto_delete);
    }).catch(() => {});
  }, [user?.id]);

  async function saveSettings() {
    if (!user?.id) return;
    setSaving(true);
    const ok = await saveAIHistorySettings(user.id, {
      history_enabled: historyEnabled,
      retention_days: retentionDays,
      // Free accounts always auto-delete; premium only when explicitly enabled.
      auto_delete: isPremiumUser ? autoDelete : true,
    });
    setSaving(false);
    if (ok) toast.success('AI chat settings saved!');
    else toast.error('Failed to save AI chat settings.');
  }

  return (
    <SettingsShell active="ai">
      <div className="card p-6 space-y-1">
        <div className="flex items-start gap-3">
          <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900 flex items-center justify-center flex-shrink-0">
            <Sparkles size={16} className="text-blue-500" />
          </div>
          <div>
            <h2 className="font-display font-semibold text-[var(--text-primary)]">AI Settings</h2>
            <p className="text-sm text-[var(--text-secondary)] mt-1">
              Manage how AI chats and question follow-ups are saved, synced and removed.
            </p>
          </div>
        </div>
      </div>

      <div className="card p-6 space-y-4 mt-5">
        <div className="flex items-start gap-3">
          <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900 flex items-center justify-center flex-shrink-0">
            <Bot size={16} className="text-blue-500" />
          </div>
          <div>
            <h2 className="font-display font-semibold text-[var(--text-primary)]">AI Chat &amp; Follow-up History</h2>
            <p className="text-sm text-[var(--text-secondary)] mt-1">
              Saved AI bubble chats and per-solution follow-ups sync across your devices. Guests do not get saved history.
            </p>
          </div>
        </div>

        <div className="rounded-xl bg-[var(--surface-1)] border border-[var(--border)] p-4 space-y-4">
          <div className="flex items-center justify-between py-1">
            <div>
              <p className="text-sm font-medium text-[var(--text-primary)]">Save AI chats</p>
              <p className="text-[11px] text-[var(--text-muted)]">Turn off to stop saving new conversations. Existing saved chats still expire normally.</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer flex-shrink-0 ml-3">
              <input type="checkbox" checked={historyEnabled} onChange={e => setHistoryEnabled(e.target.checked)} className="sr-only peer" />
              <div className="w-9 h-5 bg-[var(--surface-3)] peer-checked:bg-blue-600 rounded-full transition-colors after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-4" />
            </label>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-2">Keep AI chats for</label>
            <div className="flex items-center gap-3">
              <input type="range" min={1} max={30} value={retentionDays}
                onChange={e => setRetentionDays(Number(e.target.value))}
                className="flex-1 h-2 bg-[var(--surface-3)] rounded-lg appearance-none cursor-pointer accent-blue-500" />
              <span className="text-sm font-bold text-[var(--text-primary)] min-w-[52px] text-right tabular-nums">
                {retentionDays} day{retentionDays === 1 ? '' : 's'}
              </span>
            </div>
            <div className="flex justify-between text-[10px] text-[var(--text-muted)] mt-1">
              <span>1 day</span><span>30 days</span>
            </div>
            <p className="text-[10px] text-[var(--text-muted)] mt-2">
              Counted from the last edit of each chat, not when it was created. Maximum 30 days on free accounts.
            </p>
          </div>

          {isPremiumUser ? (
            <div className="flex items-center justify-between py-2 border-t border-[var(--border)]">
              <div>
                <p className="text-sm font-medium text-[var(--text-primary)]">Auto-delete old AI chats</p>
                <p className="text-[11px] text-[var(--text-muted)]">Off by default — your chats are kept until you turn this on.</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer flex-shrink-0 ml-3">
                <input type="checkbox" checked={autoDelete} onChange={e => setAutoDelete(e.target.checked)} className="sr-only peer" />
                <div className="w-9 h-5 bg-[var(--surface-3)] peer-checked:bg-blue-600 rounded-full transition-colors after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-4" />
              </label>
            </div>
          ) : (
            <div className="flex items-start gap-2 py-2 px-3 rounded-lg bg-amber-50 dark:bg-amber-950/20 border border-amber-200/50 dark:border-amber-800/30">
              <Crown size={14} className="text-amber-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-xs text-[var(--text-secondary)]">Free AI chats are deleted after the period above. Premium users can keep chats by default.</p>
                <Link href="/pricing" className="text-[11px] font-semibold text-amber-600 dark:text-amber-400 hover:underline mt-0.5 inline-block">Upgrade to Premium</Link>
              </div>
            </div>
          )}
        </div>

        <button onClick={saveSettings} disabled={saving} className="btn-primary text-sm">
          {saving ? <Loader2 size={14} className="animate-spin" /> : <><Save size={13} /> Save AI Settings</>}
        </button>
      </div>
    </SettingsShell>
  );
}
