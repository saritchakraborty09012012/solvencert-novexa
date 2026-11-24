import React, { useState } from 'react';
import { Sparkles, ChevronUp, ChevronDown, Send, Loader2, Pencil, Copy, Check, X, Trash2 } from 'lucide-react';
import ReadAloud from './ReadAloud';
import MicButton from './MicButton';
import FileAttach, { AttachedFile } from './FileAttach';
import AutoGrowTextarea from './AutoGrowTextarea';
import ReportFlag from './ReportFlag';
import ThumbsRating from './ThumbsRating';
import MathRenderer from './MathRenderer';
import { supabase } from '@/lib/supabase';
import {
  appendAIMessages, createAISession, findFollowupSession, followupSessionTitle,
  loadAIHistorySettings,
} from '@/lib/aiHistory';
import { useAuthStore } from '@/store/authStore';
import { useCollabStore, useCollabEffective } from '@/store/collabStore';
import { cn } from '@/utils/helpers';

interface Props {
  context: string;
  subject: string;
  chapterNumber: number;
  exerciseLabel: string;
  itemKey: string;
  onGuestBlock: () => void;
}

function CopyBtn({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button onClick={async () => { await navigator.clipboard.writeText(text.replace(/\*\*/g, '').replace(/\$+/g, '')); setCopied(true); setTimeout(() => setCopied(false), 2000); }}
      className={cn('inline-flex items-center gap-1 px-2 py-1 rounded-lg border text-[11px] font-medium transition-all',
        copied ? 'bg-green-100 dark:bg-green-900/30 text-green-600 border-green-200' : 'bg-[var(--surface-2)] text-[var(--text-muted)] border-transparent hover:border-[var(--border)]')}>
      {copied ? <Check size={11} /> : <Copy size={11} />}
      <span>{copied ? 'Copied' : 'Copy'}</span>
    </button>
  );
}

export default function AIFollowUp({ context, subject, chapterNumber, exerciseLabel, itemKey, onGuestBlock }: Props) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [reply, setReply] = useState('');
  const [loading, setLoading] = useState(false);
  const [files, setFiles] = useState<AttachedFile[]>([]);
  // The single user prompt the AI is currently replying to
  const [prompt, setPrompt] = useState('');
  const [promptWasSpeech, setPromptWasSpeech] = useState(false);
  const [editing, setEditing] = useState(false);
  const [editText, setEditText] = useState('');
  const [copiedPrompt, setCopiedPrompt] = useState(false);
  const { user } = useAuthStore();
  const eff = useCollabEffective();
  const [threads, setThreads] = useState<{ id: string; question: string; answer: string; done_by_name: string | null; done_by_id: string | null; created_at: string }[]>([]);
  // Cross-device session history (new tables) — guests never save here.
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [historyOn, setHistoryOn] = useState(true);

  React.useEffect(() => {
    if (!user?.id) { setSessionId(null); return; }
    Promise.all([findFollowupSession(user.id, itemKey), loadAIHistorySettings(user.id)])
      .then(([session, settings]) => {
        setSessionId(session?.id ?? null);
        setHistoryOn(settings.history_enabled);
      }).catch(() => {});
  }, [user?.id, itemKey]);

  async function persistSession(question: string, answer: string) {
    if (!user?.id || !historyOn) return;
    const now = new Date().toISOString();
    const messages = [
      { role: 'user' as const, text: question, createdAt: now },
      { role: 'ai' as const, text: answer, createdAt: now },
    ];
    if (sessionId) {
      await appendAIMessages(sessionId, messages);
      return;
    }
    const created = await createAISession({
      userId: user.id,
      title: followupSessionTitle(subject, chapterNumber, exerciseLabel, itemKey),
      kind: 'followup',
      contextLabel: itemKey,
      messages,
    });
    if (created) setSessionId(created.id);
  }

  // load past threads for this question (host account when mirroring)
  React.useEffect(() => {
    if (!open || !eff.accountId) return;
    supabase.from('ai_followups').select('id,question,answer,done_by_name,done_by_id,created_at')
      .eq('user_id', eff.accountId).eq('page_label', itemKey).order('created_at', { ascending: true }).limit(20)
      .then(({ data }) => { if (data) setThreads(data as typeof threads); }, () => {});
    const ch = supabase.channel(`ai-followup-${eff.accountId}-${itemKey}`)
      .on('postgres_changes', { event: '*', schema: 'public', table: 'ai_followups', filter: `user_id=eq.${eff.accountId}` }, () => {
        supabase.from('ai_followups').select('id,question,answer,done_by_name,done_by_id,created_at')
          .eq('user_id', eff.accountId).eq('page_label', itemKey).order('created_at', { ascending: true }).limit(20)
          .then(({ data }) => { if (data) setThreads(data as typeof threads); }, () => {});
      }).subscribe();
    return () => { supabase.removeChannel(ch); };
  }, [open, eff.accountId, itemKey]);

  async function persistThread(question: string, answer: string) {
    if (!eff.accountId || !user) return;
    await supabase.from('ai_followups').insert({
      user_id: eff.accountId, done_by_id: user.id, done_by_name: eff.doneByName || user.full_name || null,
      page_url: typeof window !== 'undefined' ? window.location.pathname : null,
      page_label: itemKey, question, answer,
    });
  }

  async function ask(forcedQuery?: string, isSpeech = false) {
    const q = (forcedQuery ?? query).trim();
    if ((!q && files.length === 0) || loading) return;
    setLoading(true);
    setPrompt(q);
    setPromptWasSpeech(isSpeech);
    const fc = files.map(f => `[${f.name}]\n${f.content.slice(0, 2000)}`).join('\n\n');
    setFiles([]);
    try {
      const res = await fetch('/api/ai/ask', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: q || '(see attached)', mode: 'doubt', context, fileContent: fc }),
      });
      const data = await res.json();
      const ans = data.answer || 'Could not respond.';
      setReply(ans);
      setQuery('');
      setEditing(false);
      if (q) {
        void persistThread(q, ans);
        void persistSession(q, ans);
      }
    } catch { setReply('Connection error.'); }
    finally { setLoading(false); }
  }

  function copyPrompt() {
    navigator.clipboard.writeText(prompt.replace(/\*\*/g, '').replace(/\$+/g, ''));
    setCopiedPrompt(true);
    setTimeout(() => setCopiedPrompt(false), 2000);
  }

  return (
    <div className="border border-blue-100 dark:border-blue-900/40 rounded-xl overflow-hidden mt-3">
      <button onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-2 px-4 py-2.5 bg-blue-50 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400 text-xs font-semibold hover:bg-blue-100 transition-colors">
        <Sparkles size={12} /> AI Follow-up
        {open ? <ChevronUp size={12} className="ml-auto" /> : <ChevronDown size={12} className="ml-auto" />}
      </button>
      {open && (
        <div className="p-3 space-y-2 bg-[var(--surface-0)]">
          {prompt && (
            <div className="rounded-xl bg-blue-50 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/40 p-3">
              <p className="text-[10px] font-bold uppercase tracking-wider text-blue-500 mb-1.5">Your Question</p>
              <div className="flex items-start justify-between gap-2">
                <p className="text-xs text-[var(--text-primary)] leading-relaxed break-words flex-1 min-w-0">
                  {prompt}
                </p>
                <div className="flex items-center gap-1 flex-shrink-0">
                  <button onClick={() => { setEditing(true); setEditText(prompt); }} title="Edit question"
                    className="inline-flex items-center gap-1 px-2 py-1 rounded-lg border text-[11px] font-medium bg-[var(--surface-0)] text-[var(--text-muted)] border-transparent hover:border-[var(--border)] hover:text-blue-500 transition-all">
                    <Pencil size={11} /> Edit
                  </button>
                  <button onClick={copyPrompt} title="Copy question"
                    className={cn('inline-flex items-center gap-1 px-2 py-1 rounded-lg border text-[11px] font-medium transition-all',
                      copiedPrompt ? 'bg-green-100 dark:bg-green-900/30 text-green-600 border-green-200' : 'bg-[var(--surface-0)] text-[var(--text-muted)] border-transparent hover:border-[var(--border)]')}>
                    {copiedPrompt ? <Check size={11} /> : <Copy size={11} />}
                    <span>{copiedPrompt ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {editing && (
            <div className="space-y-1.5">
              <AutoGrowTextarea
                value={editText}
                onChange={setEditText}
                placeholder="Edit your question…"
                className="input-field text-xs py-2"
                onEnter={() => { if (editText.trim()) { setEditing(false); ask(editText.trim(), promptWasSpeech); } }}
              />
              <div className="flex items-center gap-2 justify-end">
                <button onClick={() => setEditing(false)}
                  className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg border text-[11px] font-medium bg-[var(--surface-2)] text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-all">
                  <X size={11} /> Cancel
                </button>
                <button onClick={() => { if (editText.trim()) { setEditing(false); ask(editText.trim(), promptWasSpeech); } }}
                  className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 disabled:opacity-40 text-white text-[11px] font-semibold transition-all">
                  <Send size={11} /> Re-ask
                </button>
              </div>
            </div>
          )}

          {reply && (
            <div className="text-xs text-[var(--text-secondary)] bg-[var(--surface-1)] rounded-xl p-3 leading-relaxed">
              <MathRenderer text={reply} />
              <div className="flex items-center justify-between mt-2">
                <div className="flex gap-1.5">
                  <ReadAloud text={reply} size="sm" autoPlay={promptWasSpeech} />
                  <CopyBtn text={reply} />
                </div>
                <ReportFlag reportedContent={reply} onGuestBlock={onGuestBlock} />
              </div>
              <ThumbsRating subject={subject} chapterNumber={chapterNumber} exerciseLabel={exerciseLabel} itemKey={`${itemKey}-ai`} />
            </div>
          )}

          {loading && (
            <div className="flex justify-start">
              <div className="bg-[var(--surface-2)] px-3 py-2 rounded-xl rounded-bl-sm flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          )}

          {threads.length > 0 && (
            <div className="space-y-2">
              {threads.map(t => (
                <div key={t.id} className="rounded-xl bg-[var(--surface-1)] border border-[var(--border)] p-3">
                  <p className="text-xs font-semibold text-[var(--text-primary)] flex items-center gap-2">
                    {t.question}
                    {eff.isInvitee && t.done_by_name && <span className="text-blue-500">- {t.done_by_name}</span>}
                  </p>
                  <div className="text-xs text-[var(--text-secondary)] mt-1"><MathRenderer text={t.answer} /></div>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-[9px] text-[var(--text-muted)]">{new Date(t.created_at).toLocaleTimeString()}</span>
                    {t.done_by_id === user?.id && (
                      <button onClick={async () => { await supabase.from('ai_followups').delete().eq('id', t.id); setThreads(prev => prev.filter(x => x.id !== t.id)); }} className="text-[10px] text-red-500 hover:underline flex items-center gap-1"><Trash2 size={10} /> Delete</button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
          {files.length > 0 && <FileAttach files={files} onChange={setFiles} />}

          <div className="flex items-end gap-2">
            <FileAttach files={[]} onChange={f => setFiles(p => [...p, ...f].slice(0, 5))} />
            <AutoGrowTextarea
              value={query}
              onChange={setQuery}
              onEnter={() => ask()}
              placeholder="Ask about this question…"
              className="input-field text-xs py-2 flex-1 min-w-0"
            />
            <MicButton
              onInterim={t => setQuery(t)}
              onResult={t => { setQuery(t); ask(t, true); }}
              size="sm"
            />
            <button onClick={() => ask()} disabled={loading || (!query.trim() && files.length === 0)}
              className="flex-shrink-0 p-2 rounded-lg bg-blue-600 hover:bg-blue-700 disabled:opacity-40 text-white transition-all">
              {loading ? <Loader2 size={13} className="animate-spin" /> : <Send size={13} />}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
