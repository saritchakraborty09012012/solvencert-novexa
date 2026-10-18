import React, { useEffect, useState, useRef, useCallback } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  History as HistoryIcon, Brain, BookOpen, Trash2, Archive, ChevronRight, Loader2,
  MoreVertical, Clock, Zap, ClipboardCheck, Users, Globe, FileText,
  Settings, LogIn, UserPlus, Layers
} from 'lucide-react';
import Layout from '@/components/layout/Layout';
import AuthModal from '@/components/auth/AuthModal';
import { useAuthStore } from '@/store/authStore';
import { useCollabStore, useCollabEffective } from '@/store/collabStore';
import { supabase } from '@/lib/supabase';
import { formatDate } from '@/utils/helpers';
import { cn } from '@/utils/helpers';
import {
  isDisplayableHistoryUrl, classifyHistoryUrl, timeAgo,
  retentionText, ARCHIVE_LIMIT, type HistoryKind,
} from '@/lib/history';
import { isToday, isYesterday } from 'date-fns';
import toast from 'react-hot-toast';

interface AIChat { id: string; mode: string; query: string; response: string; chapter: string | null; done_by_name: string | null; created_at: string }
interface PageRow { id: string; url: string; label: string; archived: boolean; done_by_name: string | null; created_at: string }
type GroupKey = 'today' | 'yesterday' | 'thisWeek' | 'earlier';

const GROUP_LABELS: Record<GroupKey, string> = {
  today: 'Today', yesterday: 'Yesterday', thisWeek: 'This Week', earlier: 'Earlier',
};

function classifyTime(dateStr: string): GroupKey {
  const d = new Date(dateStr);
  if (isToday(d)) return 'today';
  if (isYesterday(d)) return 'yesterday';
  const diff = Date.now() - d.getTime();
  if (diff < 7 * 86400_000) return 'thisWeek';
  return 'earlier';
}

function groupRows(rows: PageRow[]): Partial<Record<GroupKey, PageRow[]>> {
  const out: Partial<Record<GroupKey, PageRow[]>> = {};
  for (const r of rows) {
    const key = classifyTime(r.created_at);
    (out[key] ??= []).push(r);
  }
  return out;
}

const KIND_ICONS: Record<HistoryKind, React.ElementType> = {
  chapter: BookOpen, practice: FileText, quiz: Zap,
  mock: ClipboardCheck, ai: Brain,
  'study-room': Users, bookmarks: Globe, page: Globe,
};

function RowMenu({ onArchive, onDelete, archivedCount }: {
  onArchive: () => void; onDelete: () => void; archivedCount: number;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const h = (e: MouseEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false); };
    document.addEventListener('mousedown', h);
    return () => document.removeEventListener('mousedown', h);
  }, [open]);

  return (
    <div className="relative flex-shrink-0" ref={ref}>
      <button
        onClick={(e) => { e.preventDefault(); e.stopPropagation(); setOpen(v => !v); }}
        className="p-1.5 rounded-lg hover:bg-[var(--surface-3)] text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
        aria-label="More options"
      >
        <MoreVertical size={15} />
      </button>
      {open && (
        <div className="absolute right-0 top-full mt-1 w-40 bg-[var(--surface-0)] border border-[var(--border)] rounded-xl shadow-soft-xl z-30 py-1 animate-fade-in">
          <button
            onClick={(e) => {
              e.preventDefault(); e.stopPropagation(); setOpen(false);
              if (archivedCount >= ARCHIVE_LIMIT) { toast.error('Archive full (' + ARCHIVE_LIMIT + ' max). Remove one first.'); return; }
              onArchive();
            }}
            className="flex items-center gap-2 w-full px-3 py-2 text-xs text-[var(--text-secondary)] hover:bg-[var(--surface-2)] transition-colors"
          >
            <Archive size={13} /> Archive
          </button>
          <button
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); setOpen(false); onDelete(); }}
            className="flex items-center gap-2 w-full px-3 py-2 text-xs text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors"
          >
            <Trash2 size={13} /> Delete
          </button>
        </div>
      )}
    </div>
  );
}

function GuestGate({ onAuthRequest }: { onAuthRequest: (m: 'login' | 'signup') => void }) {
  return (
    <Layout title="History | SolveNCERT" description="Sign in to view your activity history on SolveNCERT." canonical="/history">
      <div className="max-w-screen-sm mx-auto px-6 py-20 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-50 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900 mb-5">
          <HistoryIcon size={28} className="text-blue-500" />
        </div>
        <h1 className="text-xl font-display font-bold text-[var(--text-primary)] mb-2">Activity History</h1>
        <p className="text-sm text-[var(--text-muted)] mb-6 max-w-xs mx-auto">
          Sign in to see every page you visit synced across all your devices.
        </p>
        <div className="flex gap-3 justify-center">
          <button onClick={() => onAuthRequest('login')} className="btn-primary text-sm px-6">
            <LogIn size={14} /> Log In
          </button>
          <button onClick={() => onAuthRequest('signup')} className="btn-ghost text-sm px-6">
            <UserPlus size={14} /> Sign Up Free
          </button>
        </div>
        <p className="mt-5 text-[11px] text-[var(--text-muted)] max-w-xs mx-auto">
          Your activity is private, synced to your account, and auto-deleted after 30 days (configurable in Settings).
        </p>
      </div>
    </Layout>
  );
}

export default function HistoryPage() {
  const router = useRouter();
  const { user, isGuest } = useAuthStore();
  const eff = useCollabEffective();
  const accountId = eff.accountId;
  const showTags = eff.isInvitee;   // invitees see "-xyz" tags; the host never does
  const [chats, setChats]           = useState<AIChat[]>([]);
  const [pages, setPages]           = useState<PageRow[]>([]);
  const [notes, setNotes]           = useState<{ id: string; chapter: string; subject: string; total_pages: number; done_by_name: string | null; created_at: string }[]>([]);
  const [flashcards, setFlashcards] = useState<{ id: string; chapter: string; subject: string; total_cards: number; done_by_name: string | null; created_at: string }[]>([]);
  const [loading, setLoading]       = useState(true);
  const [tab, setTab]               = useState<'ai' | 'pages' | 'notes' | 'flashcards'>('pages');
  const [archivedCount, setArchivedCount] = useState(0);
  const [authModal, setAuthModal]   = useState<'login' | 'signup' | null>(null);

  const fetchData = useCallback(async () => {
    if (!accountId) return;
    await supabase.rpc('cleanup_expired_history', { p_user_id: accountId });

    const [chatsRes, pagesRes, arcRes, notesRes, fcRes] = await Promise.all([
      supabase.from('ai_chats').select('*').eq('user_id', accountId).order('created_at', { ascending: false }).limit(50),
      supabase.from('page_history').select('*').eq('user_id', accountId).eq('archived', false).order('created_at', { ascending: false }).limit(300),
      supabase.from('page_history').select('id', { count: 'exact', head: true }).eq('user_id', accountId).eq('archived', true),
      supabase.from('generated_notes').select('id, chapter, subject, total_pages, done_by_name, created_at').eq('user_id', accountId).order('created_at', { ascending: false }).limit(50),
      supabase.from('generated_flashcards').select('id, chapter, subject, total_cards, done_by_name, created_at').eq('user_id', accountId).order('created_at', { ascending: false }).limit(50),
    ]);
    setChats((chatsRes.data as AIChat[]) || []);
    setPages(((pagesRes.data as PageRow[]) || []).filter(p => isDisplayableHistoryUrl(p.url)));
    setArchivedCount(arcRes.count ?? 0);
    setNotes((notesRes.data as any[]) || []);
    setFlashcards((fcRes.data as any[]) || []);
    setLoading(false);
  }, [accountId]);

  useEffect(() => {
    if (!isGuest && accountId) fetchData();
    else { setLoading(false); }
  }, [isGuest, accountId, fetchData]);

  // ── Real-time mirroring: any change to the account's activity shows up live ──
  useEffect(() => {
    if (!accountId) return;
    const chan = supabase.channel(`history-live-${accountId}`)
      .on('postgres_changes', { event: '*', schema: 'public', table: 'page_history', filter: `user_id=eq.${accountId}` }, () => { fetchData(); })
      .on('postgres_changes', { event: '*', schema: 'public', table: 'ai_chats', filter: `user_id=eq.${accountId}` }, () => { fetchData(); })
      .on('postgres_changes', { event: '*', schema: 'public', table: 'generated_notes', filter: `user_id=eq.${accountId}` }, () => { fetchData(); })
      .on('postgres_changes', { event: '*', schema: 'public', table: 'generated_flashcards', filter: `user_id=eq.${accountId}` }, () => { fetchData(); })
      .subscribe();
    return () => { supabase.removeChannel(chan); };
  }, [accountId, fetchData]);

  // Keep the collab members fresh so new joiners appear live
  useEffect(() => {
    if (!eff.isCollab) return;
    const t = setInterval(() => useCollabStore.getState().refreshMembers(), 45 * 1000);
    return () => clearInterval(t);
  }, [eff.isCollab]);

  async function deletePage(id: string) {
    if (eff.isInvitee) { toast.error('Only the host can delete history.'); return; }
    await supabase.from('page_history').delete().eq('id', id);
    setPages(prev => prev.filter(p => p.id !== id));
    toast.success('Deleted');
  }

  async function archivePage(id: string) {
    if (eff.isInvitee) { toast.error('Only the host can archive history.'); return; }
    if (archivedCount >= ARCHIVE_LIMIT) {
      toast.error('Archive full (' + ARCHIVE_LIMIT + ' max). Remove one first.');
      return;
    }
    const { error } = await supabase.rpc('archive_history_entry', { p_entry_id: id });
    if (error) {
      const msg = (error as { message?: string }).message || '';
      if (msg.includes('ARCHIVE_LIMIT')) toast.error('Archive full (' + ARCHIVE_LIMIT + ' max).');
      else toast.error('Could not archive. Try again.');
      return;
    }
    setPages(prev => prev.filter(p => p.id !== id));
    setArchivedCount(c => c + 1);
    toast.success('Archived');
  }

  async function deleteChat(id: string) {
    if (eff.isInvitee) { toast.error('Only the host can delete history.'); return; }
    await supabase.from('ai_chats').delete().eq('id', id);
    setChats(prev => prev.filter(c => c.id !== id));
    toast.success('Deleted');
  }

  if (isGuest) return <GuestGate onAuthRequest={(m) => setAuthModal(m)} />;

  const grouped = groupRows(pages);
  const groupOrder: GroupKey[] = ['today', 'yesterday', 'thisWeek', 'earlier'];

  return (
    <Layout title="Activity History | SolveNCERT" description="Your private activity history on SolveNCERT, synced across all your devices." canonical="/history">
      <div className="max-w-screen-md mx-auto px-6 py-10">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-display font-bold text-[var(--text-primary)] flex items-center gap-2">
            <HistoryIcon size={20} className="text-blue-500" /> History
          </h1>
          {user && (
            <Link href="/settings/account" className="text-xs font-medium text-[var(--text-secondary)] hover:text-blue-500 transition-colors">
              {archivedCount > 0 ? archivedCount + '/' + ARCHIVE_LIMIT + ' archived' : retentionText(user)}
            </Link>
          )}
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 p-1 bg-[var(--surface-2)] rounded-xl w-fit flex-wrap">
          {[
            { id: 'pages', label: 'Pages Visited', icon: BookOpen },
            { id: 'ai',    label: 'AI Chats',      icon: Brain },
            { id: 'notes', label: 'Notes',          icon: FileText },
            { id: 'flashcards', label: 'Flashcards', icon: Layers },
          ].map(({ id, label, icon: Icon }) => (
            <button key={id} onClick={() => setTab(id as any)}
              className={cn('flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all',
                tab === id ? 'bg-[var(--surface-0)] text-[var(--text-primary)] shadow-soft-sm' : 'text-[var(--text-muted)] hover:text-[var(--text-secondary)]')}>
              <Icon size={14} /> {label}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="flex justify-center py-12">
            <Loader2 size={24} className="animate-spin text-blue-500" />
          </div>
        ) : tab === 'pages' ? (
          pages.length === 0 ? (
            <div className="card p-10 text-center">
              <BookOpen size={32} className="mx-auto text-blue-300 mb-3" />
              <p className="font-semibold text-[var(--text-primary)] mb-1">No activity yet</p>
              <p className="text-sm text-[var(--text-muted)]">Browse some solutions and your history will show up here.</p>
              <Link href="/answers" className="btn-primary mt-4 inline-flex text-sm">Browse Answers <ChevronRight size={14} /></Link>
            </div>
          ) : (
            <>
              <p className="text-sm font-medium text-[var(--text-secondary)] mb-4">{retentionText(user)}</p>
              {groupOrder.map(key => {
                const rows = grouped[key];
                if (!rows || rows.length === 0) return null;
                return (
                  <div key={key} className="mb-5">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)] mb-2 px-1">{GROUP_LABELS[key]}</p>
                    <div className="space-y-1.5">
                      {rows.map(row => {
                        const Icon = KIND_ICONS[classifyHistoryUrl(row.url)];
                        return (
                          <Link key={row.id} href={row.url}
                            className="flex items-center gap-3 p-3 rounded-xl bg-[var(--surface-0)] border border-[var(--border)] hover:border-blue-200 dark:hover:border-blue-800 hover:shadow-soft-sm group transition-all">
                            <div className="w-8 h-8 rounded-lg bg-[var(--surface-2)] flex items-center justify-center flex-shrink-0">
                              <Icon size={14} className="text-blue-500" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-[var(--text-primary)] truncate">{row.label}</p>
                              <p className="text-[10px] text-[var(--text-muted)]">
                                {timeAgo(row.created_at)}
                                {showTags && row.done_by_name && <span className="ml-1.5 text-blue-500 font-semibold">- {row.done_by_name}</span>}
                              </p>
                            </div>
                            {!eff.isInvitee && (
                              <RowMenu
                                onArchive={() => archivePage(row.id)}
                                onDelete={() => deletePage(row.id)}
                                archivedCount={archivedCount}
                              />
                            )}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </>
          )
        ) : tab === 'notes' ? (
          notes.length === 0 ? (
            <div className="card p-10 text-center">
              <FileText size={32} className="mx-auto text-blue-300 mb-3" />
              <p className="font-semibold text-[var(--text-primary)] mb-1">No notes yet</p>
              <p className="text-sm text-[var(--text-muted)]">Generate your first set of notes!</p>
              <Link href="/notes" className="btn-primary mt-4 inline-flex text-sm">Generate Notes <ChevronRight size={14} /></Link>
            </div>
          ) : (
            <div className="space-y-3">
              {notes.map(n => (
                <Link key={n.id} href="/notes"
                  className="flex items-center gap-3 p-3 rounded-xl bg-[var(--surface-0)] border border-[var(--border)] hover:border-blue-200 hover:shadow-soft-sm group transition-all">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-950/30 flex items-center justify-center flex-shrink-0">
                    <FileText size={14} className="text-blue-500" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-[var(--text-primary)] truncate">{n.chapter}</p>
                    <p className="text-[10px] text-[var(--text-muted)]">
                      {n.subject} &middot; {n.total_pages} pages &middot; {timeAgo(n.created_at)}
                      {showTags && n.done_by_name && <span className="ml-1.5 text-blue-500 font-semibold">- {n.done_by_name}</span>}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          )
        ) : tab === 'flashcards' ? (
          flashcards.length === 0 ? (
            <div className="card p-10 text-center">
              <Layers size={32} className="mx-auto text-purple-300 mb-3" />
              <p className="font-semibold text-[var(--text-primary)] mb-1">No flashcards yet</p>
              <p className="text-sm text-[var(--text-muted)]">Generate your first set of flashcards!</p>
              <Link href="/flash-cards" className="btn-primary mt-4 inline-flex text-sm">Generate Flashcards <ChevronRight size={14} /></Link>
            </div>
          ) : (
            <div className="space-y-3">
              {flashcards.map(fc => (
                <Link key={fc.id} href="/flash-cards"
                  className="flex items-center gap-3 p-3 rounded-xl bg-[var(--surface-0)] border border-[var(--border)] hover:border-purple-200 hover:shadow-soft-sm group transition-all">
                  <div className="w-8 h-8 rounded-lg bg-purple-50 dark:bg-purple-950/30 flex items-center justify-center flex-shrink-0">
                    <Layers size={14} className="text-purple-500" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-[var(--text-primary)] truncate">{fc.chapter}</p>
                    <p className="text-[10px] text-[var(--text-muted)]">
                      {fc.subject} &middot; {fc.total_cards} cards &middot; {timeAgo(fc.created_at)}
                      {showTags && fc.done_by_name && <span className="ml-1.5 text-blue-500 font-semibold">- {fc.done_by_name}</span>}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          )
        ) : chats.length === 0 ? (
          <div className="card p-10 text-center">
            <Brain size={32} className="mx-auto text-blue-300 mb-3" />
            <p className="font-semibold text-[var(--text-primary)] mb-1">No AI chats yet</p>
            <p className="text-sm text-[var(--text-muted)]">Your AI conversations will appear here.</p>
          </div>
        ) : (
          <div className="space-y-3">
            {chats.map(chat => (
              <div key={chat.id} className="card p-4 group">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 uppercase tracking-wide">
                        {chat.mode}
                      </span>
                      {chat.chapter && <span className="text-[10px] text-[var(--text-muted)]">{chat.chapter}</span>}
                      {showTags && chat.done_by_name && (
                        <span className="text-[10px] font-semibold text-blue-500">- {chat.done_by_name}</span>
                      )}
                      <span className="text-[10px] text-[var(--text-muted)] ml-auto">{timeAgo(chat.created_at)}</span>
                    </div>
                    <p className="text-sm font-medium text-[var(--text-primary)] truncate">{chat.query}</p>
                    <p className="text-xs text-[var(--text-muted)] mt-1 line-clamp-2">{chat.response}</p>
                  </div>
                  {!eff.isInvitee && (
                    <button onClick={() => deleteChat(chat.id)}
                      className="p-1.5 rounded-lg hover:bg-red-50 dark:hover:bg-red-950/30 text-[var(--text-muted)] hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100">
                      <Trash2 size={13} />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="max-w-screen-lg mx-auto px-6 pb-8">
        <button onClick={() => window.location.href = '/quizzes/history'} className="w-full text-center text-xs font-medium text-amber-500 hover:text-amber-600 transition-colors py-2">View Quiz History →</button>
      </div>

      {authModal && <AuthModal mode={authModal} onClose={() => setAuthModal(null)} onSwitch={m => setAuthModal(m)} />}
    </Layout>
  );
}