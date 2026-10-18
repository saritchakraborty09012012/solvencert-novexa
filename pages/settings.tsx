import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  User, Mail, Phone, Calendar, Lock, Camera,
  Save, Loader2, Shield, Trash2, Eye, EyeOff,
  Bell, Palette, Globe, ChevronRight, Archive, ArchiveRestore, KeyRound,
  Clock, Crown, Info, Sun, Moon, Monitor, Check
} from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { useAuthStore } from '@/store/authStore';
import { useCollabStore } from '@/store/collabStore';
import { useThemeStore } from '@/store/themeStore';
import { useUIStore } from '@/store/uiStore';
import { supabase } from '@/lib/supabase';
import { generateInitials } from '@/utils/helpers';
import { cn } from '@/utils/helpers';
import { FREE_RETENTION_MAX, PREMIUM_RETENTION_MAX, ARCHIVE_LIMIT } from '@/lib/history';
import toast from 'react-hot-toast';
import FadeNotice, { LIGHT_THEME_NOTICE } from '@/components/ui/FadeNotice';

type Tab = 'profile' | 'account' | 'notifications' | 'appearance';

// Same Moods (UI) list as the header ribbon — Header.tsx keeps its own copy.
const UI_OPTIONS = [
  { id: 'ui1' as const, label: 'UI-1', name: 'Classic Nerdy',     desc: 'Clean, academic & focused' },
  { id: 'ui2' as const, label: 'UI-2', name: 'Aesthetic Vintage', desc: 'Warm, timeless & elegant' },
  { id: 'ui3' as const, label: 'UI-3', name: 'Signature Noir',    desc: 'Bold, cinematic & premium' },
];

export default function SettingsPage() {
  const router = useRouter();
  const { user, isGuest, fetchProfile } = useAuthStore();
  const { theme, setTheme } = useThemeStore();
  const { ui, setUi } = useUIStore();

  const [tab,       setTab]      = useState<Tab>('profile');
  const [themeNotice, setThemeNotice] = useState<string | null>(null);

  const flashThemeNotice = (msg: string) => {
    setThemeNotice(msg);
    window.setTimeout(() => setThemeNotice(null), 3200);
  };

  const [loading,   setLoading]  = useState(false);
  const [showOld,   setShowOld]  = useState(false);
  const [showNew,   setShowNew]  = useState(false);

  // Profile fields
  const [fullName, setFullName] = useState(user?.full_name || '');
  const [phone,    setPhone]    = useState(user?.phone     || '');
  const [dob,      setDob]      = useState(user?.dob       || '');
  const [bio,      setBio]      = useState(user?.bio       || '');

  // Password fields
  const [oldPw, setOldPw] = useState('');
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

  const fileRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isGuest) router.replace('/');
  }, [isGuest, router]);

  // Auto-select tab from query param
  useEffect(() => {
    if (router.query.tab === 'account') setTab('account');
  }, [router.query.tab]);

  // Invitees inside a friend's account cannot touch settings
  const isCollabInvitee = useCollabStore((s) => s.active && s.role === 'invitee');

  if (isGuest) return null;

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

  async function saveProfile() {
    if (!user) return;
    setLoading(true);
    try {
      const initials = generateInitials(fullName);
      const { error } = await supabase
        .from('profiles')
        .update({ full_name: fullName, phone, dob, bio, initials, updated_at: new Date().toISOString() })
        .eq('id', user.id);
      if (error) throw error;
      await fetchProfile(user.id);
      toast.success('Profile updated!');
    } catch {
      toast.error('Failed to save. Try again.');
    } finally {
      setLoading(false);
    }
  }

  async function changePassword() {
    if (!newPw || newPw.length < 6) return toast.error('New password must be at least 6 characters.');
    setLoading(true);
    try {
      const { error } = await supabase.auth.updateUser({ password: newPw });
      if (error) throw error;
      toast.success('Password updated!');
      setOldPw(''); setNewPw('');
    } catch {
      toast.error('Failed to update password.');
    } finally {
      setLoading(false);
    }
  }

  async function uploadAvatar(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file || !user) return;
    const ext      = file.name.split('.').pop();
    const path     = `avatars/${user.id}.${ext}`;
    const { error: upErr } = await supabase.storage.from('avatars').upload(path, file, { upsert: true });
    if (upErr) return toast.error('Upload failed.');
    const url = supabase.storage.from('avatars').getPublicUrl(path).data.publicUrl;
    await supabase.from('profiles').update({ avatar_url: url }).eq('id', user.id);
    await fetchProfile(user.id);
    toast.success('Avatar updated!');
  }

  const TABS: { id: Tab; label: string; icon: React.ElementType }[] = [
    { id: 'profile',       label: 'Profile',       icon: User   },
    { id: 'account',       label: 'Account',       icon: Shield },
    { id: 'notifications', label: 'Notifications', icon: Bell   },
    { id: 'appearance',    label: 'Appearance',    icon: Palette },
  ];

  return (
    <Layout title="Settings | SolveNCERT" description="Manage your SolveNCERT account settings, notifications and preferences." canonical="/settings">
      <div className="max-w-screen-md mx-auto px-6 py-10">
        <h1 className="text-2xl font-display font-bold text-[var(--text-primary)] mb-6">Settings</h1>

        <div className="flex flex-col sm:flex-row gap-6">
          {/* Sidebar */}
          <aside className="sm:w-44 flex-shrink-0">
            <nav className="space-y-1">
              {TABS.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => setTab(id)}
                  className={cn(
                    'sidebar-item w-full',
                    tab === id && 'active'
                  )}
                >
                  <Icon size={15} /> {label}
                </button>
              ))}
            </nav>
          </aside>

          {/* Content */}
          <div className="flex-1">
            {/* Profile tab */}
            {tab === 'profile' && (
              <div className="card p-6 space-y-5">
                <h2 className="font-display font-semibold text-[var(--text-primary)]">Profile Information</h2>

                {/* Avatar */}
                <div className="flex items-center gap-4">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-lg font-bold text-white shadow-soft cursor-pointer relative group"
                    style={{ background: '#3478f6' }}
                    onClick={() => fileRef.current?.click()}
                  >
                    {user?.avatar_url
                      ? <img src={user.avatar_url} className="w-full h-full rounded-2xl object-cover" alt="Your profile photo" />
                      : (user?.initials || 'SN')
                    }
                    <div className="absolute inset-0 bg-black/40 rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Camera size={16} className="text-white" />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">{user?.full_name}</p>
                    <button onClick={() => fileRef.current?.click()} className="text-xs text-blue-500 hover:underline mt-0.5">Change photo</button>
                  </div>
                  <input ref={fileRef} type="file" accept="image/*" onChange={uploadAvatar} className="hidden" />
                </div>

                {/* Fields */}
                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-semibold text-[var(--text-muted)] mb-1.5 uppercase tracking-wider">Full Name</label>
                    <input value={fullName} onChange={e => setFullName(e.target.value)} className="input-field" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[var(--text-muted)] mb-1.5 uppercase tracking-wider">Email</label>
                    <input value={user?.email || ''} disabled className="input-field opacity-60 cursor-not-allowed" />
                    <p className="text-xs text-[var(--text-muted)] mt-1">Email cannot be changed.</p>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[var(--text-muted)] mb-1.5 uppercase tracking-wider">Phone</label>
                    <input value={phone} onChange={e => setPhone(e.target.value)} className="input-field" placeholder="Optional" type="tel" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[var(--text-muted)] mb-1.5 uppercase tracking-wider">Date of Birth</label>
                    <input value={dob} onChange={e => setDob(e.target.value)} className="input-field" type="date" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[var(--text-muted)] mb-1.5 uppercase tracking-wider">Bio</label>
                    <textarea value={bio} onChange={e => setBio(e.target.value)} className="input-field resize-none" rows={3} placeholder="Tell us about yourself..." />
                  </div>
                </div>

                <button onClick={saveProfile} disabled={loading} className="btn-primary text-sm">
                  {loading ? <Loader2 size={15} className="animate-spin" /> : <><Save size={14} /> Save Changes</>}
                </button>
              </div>
            )}

            {/* Account tab */}
            {tab === 'account' && (
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
                      <p className="text-xs text-[var(--text-muted)] mt-0.5">Choose how long to keep your browsing history before it is automatically removed.</p>
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
                  <p className="text-xs text-[var(--text-muted)] mb-4">Archived pages are hidden from your History list. They never auto-delete until you restore or delete them. Re-enter your password to view and manage them.</p>

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
                  <p className="text-xs text-[var(--text-muted)] mb-4">These actions are irreversible.</p>
                  <button className="flex items-center gap-2 text-sm text-red-500 hover:text-red-600 font-medium">
                    <Trash2 size={14} /> Delete Account
                  </button>
                </div>
              </div>
            )}

            {/* Notifications tab */}
            {tab === 'notifications' && (
              <div className="card p-6 space-y-4">
                <h2 className="font-display font-semibold text-[var(--text-primary)]">Notification Preferences</h2>
                {[
                  { label: 'New chapter solutions added',    key: 'chapters' },
                  { label: 'Study room invites',             key: 'rooms'    },
                  { label: 'Referral updates',               key: 'referral' },
                  { label: 'Premium & plan reminders',       key: 'plan'     },
                ].map(({ label, key }) => (
                  <div key={key} className="flex items-center justify-between py-2">
                    <p className="text-sm text-[var(--text-secondary)]">{label}</p>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" defaultChecked className="sr-only peer" />
                      <div className="w-9 h-5 bg-[var(--surface-3)] peer-checked:bg-blue-600 rounded-full transition-colors after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-4" />
                    </label>
                  </div>
                ))}
              </div>
            )}

            {/* Appearance tab */}
            {tab === 'appearance' && (
              <div className="card p-6">
                <h2 className="font-display font-semibold text-[var(--text-primary)] mb-1">Appearance</h2>
                <p className="text-sm text-[var(--text-muted)] mb-5">
                  Same controls as the header ribbon — changes apply on all pages.
                </p>

                {/* Moods (UI) — mirrors the header Moods dropdown */}
                <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)] mb-2">Mood</p>
                <div className="grid sm:grid-cols-3 gap-2 mb-6">
                  {UI_OPTIONS.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => setUi(opt.id)}
                      className={cn(
                        'text-left px-3.5 py-3 rounded-xl border transition-all',
                        ui === opt.id
                          ? 'border-[var(--brand-primary)] bg-[var(--surface-2)]'
                          : 'border-[var(--border)] bg-[var(--surface-1)] hover:border-[var(--text-muted)]',
                      )}
                    >
                      <span className="flex items-center justify-between gap-2">
                        <span className="text-sm font-semibold text-[var(--text-primary)]">{opt.name}</span>
                        {ui === opt.id && <Check size={14} className="text-[var(--brand-primary)] flex-shrink-0" />}
                      </span>
                      <span className="block text-[11px] text-[var(--text-muted)] mt-0.5">{opt.desc}</span>
                    </button>
                  ))}
                </div>

                {/* Theme — mirrors the header System / Light / Dark buttons */}
                <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)] mb-2">Theme</p>
                <div className="inline-flex items-center gap-1 p-1.5 rounded-xl bg-[var(--surface-1)] border border-[var(--border)]">
                  {([
                    { id: 'system' as const, icon: <Monitor size={14} />, label: 'System' },
                    { id: 'light'  as const, icon: <Sun     size={14} />, label: 'Light'  },
                    { id: 'dark'   as const, icon: <Moon    size={14} />, label: 'Dark'   },
                  ]).map(({ id, icon, label }) => {
                    const blocked = id === 'light' && ui === 'ui3';
                    return (
                      <button
                        key={id}
                        onClick={() => (blocked ? flashThemeNotice(LIGHT_THEME_NOTICE) : setTheme(id))}
                        title={blocked ? 'Not supported in Signature Noir' : label}
                        className={cn(
                          'flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold transition-all',
                          blocked && 'opacity-40 cursor-not-allowed',
                          theme === id
                            ? 'bg-[var(--surface-3)] text-[var(--brand-primary)] shadow-inner'
                            : 'text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-2)]',
                        )}
                      >
                        {icon}{label}
                      </button>
                    );
                  })}
                </div>
                <FadeNotice text={themeNotice} />
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
