import React, { useState } from 'react';
import Link from 'next/link';
import { History, Plus, X, Download, Trash2, Pencil, Check, MessageSquare, Sparkles, UserPlus, Crown } from 'lucide-react';
import type { AISession } from '@/lib/aiHistory';
import AuthModal from '@/components/auth/AuthModal';
import { cn } from '@/utils/helpers';

type Props = {
  open: boolean;
  onClose: () => void;
  sessions: AISession[];
  activeId: string | null;
  guest: boolean;
  retentionDays?: number;
  onSelect: (s: AISession) => void;
  onNew: () => void;
  onDelete: (id: string) => void;
  onRename: (id: string, title: string) => void;
  onExport: (s: AISession) => void;
};

export default function AIChatHistorySidebar({ open, onClose, sessions, activeId, guest, retentionDays = 30, onSelect, onNew, onDelete, onRename, onExport }: Props) {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [draft, setDraft] = useState('');
  const [filter, setFilter] = useState<'all' | 'bubble' | 'followup'>('all');
  const [authMode, setAuthMode] = useState<'login' | 'signup' | null>(null);

  if (!open) return null;
  const shown = sessions.filter(s => filter === 'all' || s.kind === filter);

  return (
    <div className="absolute inset-0 z-20 flex" onClick={onClose}>
      <div className="w-[88%] max-w-[320px] min-w-0 h-full flex flex-col bg-[var(--surface-0)] border-r border-[var(--border)] shadow-2xl animate-slide-up" onClick={e => e.stopPropagation()}>
        <div className="flex items-center justify-between px-3 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white flex-shrink-0">
          <div className="flex items-center gap-2 min-w-0"><History size={15} className="flex-shrink-0" /><span className="text-sm font-semibold truncate">Chat History</span></div>
          <button onClick={onClose} aria-label="Close history" className="h-9 w-9 flex-shrink-0 flex items-center justify-center rounded-lg hover:bg-white/20 active:bg-white/30"><X size={16} /></button>
        </div>

        <div className="px-3 pt-3 pb-2 flex-shrink-0 space-y-2">
          <div className="flex gap-1">
            {(['all', 'bubble', 'followup'] as const).map(f => (
              <button key={f} onClick={() => setFilter(f)}
                className={cn('text-[10px] font-semibold px-3 py-2 rounded-full border transition-colors',
                  filter === f ? 'bg-blue-600 text-white border-blue-600' : 'bg-[var(--surface-1)] text-[var(--text-muted)] border-[var(--border)]')}>
                {f === 'all' ? 'All' : f === 'bubble' ? 'AI chats' : 'Follow-ups'}
              </button>
            ))}
          </div>

          {guest ? (
            <div className="rounded-xl border border-blue-200 dark:border-blue-900/60 bg-blue-50 dark:bg-blue-950/30 p-3">
              <p className="text-xs font-semibold text-blue-700 dark:text-blue-300">Sign up for histories</p>
              <p className="text-[11px] text-[var(--text-secondary)] mt-1">Your AI chats are saved only for registered users and stay synced across devices. Guests don&apos;t get saved history.</p>
              <button onClick={() => setAuthMode('signup')} className="mt-2 inline-flex items-center gap-1.5 text-[11px] font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-lg px-4 py-2.5"><UserPlus size={12} /> Sign up</button>
            </div>
          ) : (
            <>
              <div className="rounded-xl border border-[var(--border)] bg-[var(--surface-1)] p-3">
                <p className="text-[11px] leading-relaxed text-[var(--text-secondary)]">
                  Sessions stay for <b>{retentionDays} days from their last edit</b>, and sync across devices before they are deleted from our database.
                </p>
                <Link href="/pricing" className="mt-2.5 inline-flex items-center gap-1.5 rounded-lg border border-amber-300 dark:border-amber-700/60 bg-amber-50 dark:bg-amber-950/30 px-3 py-2 text-[11px] font-semibold text-amber-700 dark:text-amber-300 hover:bg-amber-100 dark:hover:bg-amber-950/50 active:bg-amber-200 dark:active:bg-amber-900/40 transition-colors">
                  <Crown size={12} className="flex-shrink-0" /> Upgrade to keep chats forever
                </Link>
              </div>
              <button onClick={() => { onNew(); onClose(); }} className="w-full inline-flex items-center justify-center gap-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-xs font-semibold py-2.5">
                <Plus size={13} /> New Session
              </button>
            </>
          )}
        </div>

        <div className="flex-1 min-h-0 overflow-y-auto px-3 pb-3 space-y-2">
          {!guest && shown.length === 0 && (
            <p className="text-center text-[11px] text-[var(--text-muted)] py-6">No saved sessions yet.</p>
          )}
          {shown.map(s => (
            <div key={s.id} className={cn('rounded-xl border p-2.5 transition-colors',
              activeId === s.id ? 'border-blue-400 bg-blue-50 dark:bg-blue-950/30' : 'border-[var(--border)] bg-[var(--surface-1)] hover:border-blue-300')}>
              {editingId === s.id ? (
                <div className="flex items-center gap-1">
                  <input autoFocus value={draft} onChange={e => setDraft(e.target.value)} onKeyDown={e => { if (e.key === 'Enter') { onRename(s.id, draft); setEditingId(null); } if (e.key === 'Escape') setEditingId(null); }}
                    className="input-field text-xs py-2 flex-1 min-w-0" />
                  <button onClick={() => { onRename(s.id, draft); setEditingId(null); }} aria-label="Save name" className="h-8 w-8 flex-shrink-0 flex items-center justify-center rounded-lg bg-blue-600 text-white"><Check size={12} /></button>
                </div>
              ) : (
                <button onClick={() => { onSelect(s); onClose(); }} className="w-full text-left py-1">
                  <p className="text-xs font-semibold text-[var(--text-primary)] line-clamp-2 flex items-start gap-1.5">
                    {s.kind === 'followup' ? <Sparkles size={11} className="text-amber-500 mt-0.5 flex-shrink-0" /> : <MessageSquare size={11} className="text-blue-500 mt-0.5 flex-shrink-0" />}
                    <span className="min-w-0">{s.title}</span>
                  </p>
                  <p className="text-[9px] text-[var(--text-muted)] mt-1">{new Date(s.updated_at).toLocaleString()}</p>
                </button>
              )}
              <div className="flex items-center gap-1 mt-2">
                <button onClick={() => { setEditingId(s.id); setDraft(s.title); }} title="Rename session" aria-label="Rename session" className="h-8 w-8 flex items-center justify-center rounded-lg text-[var(--text-muted)] hover:text-blue-500 hover:bg-[var(--surface-2)] active:bg-[var(--surface-3)]"><Pencil size={13} /></button>
                <button onClick={() => onExport(s)} title="Download PDF" aria-label="Download PDF" className="h-8 w-8 flex items-center justify-center rounded-lg text-[var(--text-muted)] hover:text-blue-500 hover:bg-[var(--surface-2)] active:bg-[var(--surface-3)]"><Download size={13} /></button>
                <button onClick={() => onDelete(s.id)} title="Delete session" aria-label="Delete session" className="h-8 w-8 flex items-center justify-center rounded-lg text-[var(--text-muted)] hover:text-red-500 hover:bg-[var(--surface-2)] active:bg-[var(--surface-3)] ml-auto"><Trash2 size={13} /></button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1 bg-black/30" />
      {authMode && <AuthModal mode={authMode} onClose={() => setAuthMode(null)} onSwitch={setAuthMode} />}
    </div>
  );
}
