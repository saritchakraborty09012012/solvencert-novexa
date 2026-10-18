import React, { useState, useEffect, useCallback } from 'react';
import { MessageCircle, X, UserPlus, Share2, Copy, Loader2, BookOpen } from 'lucide-react';
import { useAuthStore } from '@/store/authStore';
import { useRouter } from 'next/router';
import { useCollabStore, attachCollabChannel } from '@/store/collabStore';
import ChatSidebar from '@/components/collab/ChatSidebar';
import toast from 'react-hot-toast';

const INVITE_KEY = 'collab_invite_seen_';

function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

interface Props {
  isOpen: boolean;
  onToggle: () => void;
}

export default function ChatFloatBubble({ isOpen, onToggle }: Props) {
  const { isGuest, user } = useAuthStore();
  const collab = useCollabStore();
  const router = useRouter();
  const [busy, setBusy] = useState(false);
  const [restoring, setRestoring] = useState(false);

  // Auto-restore: if invite was already seen today, skip invite card and restore session
  useEffect(() => {
    if (!user || isGuest || collab.active || restoring) return;
    const seen = localStorage.getItem(INVITE_KEY + todayKey());
    if (!seen) return;
    setRestoring(true);
    useCollabStore.getState().startHosting()
      .then(() => attachCollabChannel())
      .catch(() => {})
      .finally(() => setRestoring(false));
  }, [user, isGuest, collab.active, restoring]);

  function inviteLink(code: string) {
    return `${window.location.origin}/collab/join/${code}`;
  }

  async function doInvite(share: boolean) {
    if (!user) return;
    setBusy(true);
    try {
      let code = collab.inviteCode;
      if (!collab.active) code = await useCollabStore.getState().startHosting();
      if (!code) throw new Error('Could not create invite — please run the latest database migration (migrations_v15) in Supabase and refresh.');
      attachCollabChannel();
      // Mark invite as seen for today — won't show invite card again today
      localStorage.setItem(INVITE_KEY + todayKey(), 'true');
      const link = inviteLink(code!);
      if (share && typeof navigator.share === 'function') {
        try {
          await navigator.share({ title: 'SolveNCERT', text: 'Join my study circle on SolveNCERT!', url: link });
        } catch (e: unknown) {
          const msg = (e as Error)?.name === 'AbortError' ? null : (e as Error)?.message;
          if (msg) throw new Error(msg);
        }
      } else {
        await navigator.clipboard.writeText(link);
        toast.success('Link copied! Share it with your friend.');
      }
    } catch (e: unknown) {
      const m = (e as Error)?.message || '';
      if (m && m !== 'AbortError') toast.error(m);
    } finally {
      setBusy(false);
    }
  }

  function onInviteClick(share: boolean) {
    if (!user) return;
    doInvite(share);
  }

  // ── Collapsed: floating pill ───────────────────────────────────────────────
  if (!isOpen) {
    return (
      <button
        onClick={onToggle}
        className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[var(--surface-0)] border border-[var(--border)] text-[var(--text-secondary)] text-sm font-semibold font-display shadow-soft hover:border-blue-300 hover:text-blue-500 transition-all hover:-translate-y-0.5"
        aria-label="Open chat"
      >
        <MessageCircle size={16} />
        <span className="hidden sm:inline">Chat</span>
      </button>
    );
  }

  // ── Open + in a live collab session → full sidebar ────────────────────────
  if (collab.active) {
    return <ChatSidebar onClose={onToggle} />;
  }

  // ── Restoring session (auto-restore from localStorage) ────────────────────
  if (restoring) {
    return (
      <div className="w-[280px] bg-[var(--surface-0)] border border-[var(--border)] rounded-2xl shadow-soft-xl p-5 text-center animate-slide-up">
        <Loader2 size={20} className="animate-spin text-blue-500 mx-auto mb-2" />
        <p className="text-xs text-[var(--text-muted)]">Restoring your session…</p>
      </div>
    );
  }

  // ── Open + guest → sign-up prompt ─────────────────────────────────────────
  if (isGuest) {
    return (
      <div className="w-[280px] bg-[var(--surface-0)] border border-[var(--border)] rounded-2xl shadow-soft-xl overflow-hidden animate-slide-up">
        <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--border)]">
          <div className="flex items-center gap-2 text-[var(--text-primary)]">
            <MessageCircle size={14} className="text-blue-500" />
            <span className="text-sm font-semibold">Study Chat</span>
          </div>
          <button onClick={onToggle} className="p-1 rounded-lg hover:bg-[var(--surface-2)] text-[var(--text-muted)]">
            <X size={14} />
          </button>
        </div>
        <div className="p-5 text-center">
          <UserPlus size={28} className="mx-auto text-blue-400 mb-3" />
          <p className="text-sm font-semibold text-[var(--text-primary)] mb-1">Study with friends</p>
          <p className="text-xs text-[var(--text-muted)] mb-4">Sign up free to chat, share and study together.</p>
          <button
            onClick={() => { onToggle(); router.push('/'); }}
            className="btn-primary text-xs py-2 px-5 w-full justify-center"
          >
            Sign Up Free
          </button>
        </div>
      </div>
    );
  }

  // ── Open + logged-in host → collaborate card ──────────────────────────────
  return (
    <>
      <div className="w-[300px] bg-[var(--surface-0)] border border-[var(--border)] rounded-2xl shadow-soft-xl overflow-hidden animate-slide-up">
        {/* Header — Start Study Room lives here */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--border)]">
          <div className="flex items-center gap-2 text-[var(--text-primary)]">
            <MessageCircle size={14} className="text-blue-500" />
            <span className="text-sm font-semibold">Study Chat</span>
          </div>
          <div className="flex items-center gap-1">
            <button
              onClick={() => { onToggle(); router.push('/study-room'); }}
              title="Open the whiteboard study room"
              className="gold-btn flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold shadow-md hover:brightness-110 transition-all"
            >
              <BookOpen size={11} /> Start Study Room
            </button>
            <button onClick={onToggle} className="p-1 rounded-lg hover:bg-[var(--surface-2)] text-[var(--text-muted)]">
              <X size={14} />
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="p-5 blur-[5px] opacity-60 pointer-events-none select-none">
          <UserPlus size={28} className="mx-auto text-blue-400 mb-3" />
          <p className="text-sm font-semibold text-[var(--text-primary)] mb-1 text-center">Invite a friend</p>
          <p className="text-xs text-[var(--text-muted)] mb-4 text-center">
            They&apos;ll study inside your account with you — live history, chat and whiteboard.
          </p>

          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => onInviteClick(true)}
              disabled={busy}
              className="gold-btn text-xs py-2.5 px-3 justify-center rounded-xl font-bold"
            >
              {busy ? <Loader2 size={13} className="animate-spin" /> : <Share2 size={13} />} Share link
            </button>
            <button
              onClick={() => onInviteClick(false)}
              disabled={busy}
              className="gold-btn text-xs py-2.5 px-3 justify-center rounded-xl font-bold"
            >
              {busy ? <Loader2 size={13} className="animate-spin" /> : <Copy size={13} />} Copy link
            </button>
          </div>

          <p className="text-[10px] text-[var(--text-muted)] mt-4 text-center">
            {user?.plan === 'premium'
              ? 'Premium — up to 10 friends can join.'
              : 'Free plan — up to 5 friends. Invite link works for 24 hours.'}
          </p>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="px-3 py-1.5 rounded-full bg-[var(--surface-2)] border border-[var(--border)] text-[11px] font-bold uppercase tracking-wider text-[var(--text-primary)] shadow-soft">
              Coming soon
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
