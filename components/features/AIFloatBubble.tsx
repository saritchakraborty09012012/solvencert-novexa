import React, { useState, useRef, useEffect } from 'react';
import { Brain, X, Send, Sparkles, Loader2, History, SquarePen, Pencil, Copy, Check } from 'lucide-react';
import MicButton from './MicButton';
import FileAttach, { AttachedFile } from './FileAttach';
import ReadAloud from './ReadAloud';
import MathRenderer from './MathRenderer';
import AutoGrowTextarea from './AutoGrowTextarea';
import AIChatHistorySidebar from './AIChatHistorySidebar';
import { useFeedbackStore } from '@/store/feedbackStore';
import { useAuthStore } from '@/store/authStore';
import {
  appendAIMessages, createAISession, deleteAISession, exportAISessionPdf,
  loadAIHistorySettings, listAISessions, renameAISession, replaceAIMessages,
  smartSessionName, type AISession, type ChatMessage,
} from '@/lib/aiHistory';
import { cn } from '@/utils/helpers';

type Mode = 'doubt' | 'explain' | 'simplify' | 'revision' | 'logic';
const MODES: { id: Mode; label: string }[] = [
  { id: 'doubt',    label: 'Ask Doubt' },
  { id: 'explain',  label: 'Explain'   },
  { id: 'simplify', label: 'Simplify'  },
  { id: 'revision', label: 'Revise'    },
  { id: 'logic',    label: 'Logic'     },
];
const MODE_LABEL: Record<Mode, string> = Object.fromEntries(MODES.map(m => [m.id, m.label])) as Record<Mode, string>;

/** Auto-select the mode from the user's prompt (English + Hinglish cues). */
function detectMode(q: string): Mode {
  const t = ` ${q.toLowerCase()} `;
  if (/\b(revise|revision|recap|summar(y|ise|ize)|quick notes|revison)\b/.test(t)) return 'revision';
  if (/\b(simplif(y|ied)|simple(r|st)? words?|easy(er)? language|in simple|aasan|asaan|saral|aarambh)\b/.test(t)) return 'simplify';
  if (/\b(why|reason|logic|justify|prove|kyu|kyun|kyo|kaaran|karan|wajah)\b|how (does|do|can|did)\b/.test(t)) return 'logic';
  if (/\b(explain|elaborate|describe|define|meaning|means|difference between|compare|samjhao|samjha|batao|what is|what are|what was|what were)\b/.test(t)) return 'explain';
  return 'doubt';
}

interface Msg { role: 'user' | 'ai'; text: string; mode?: Mode; }

export default function AIFloatBubble({ isOpen, onToggle, initialContext }: { isOpen: boolean; onToggle: () => void; initialContext?: { context: string; prompt: string } | null }) {
  const showAiRatingFor = useFeedbackStore(s => s.showAiRatingFor);
  const { user } = useAuthStore();
  const [mode,    setMode]    = useState<Mode>('doubt');
  const [query,   setQuery]   = useState('');
  const [msgs,    setMsgs]    = useState<Msg[]>([]);
  const [loading, setLoading] = useState(false);
  const [files,   setFiles]   = useState<AttachedFile[]>([]);
  const [historyOpen, setHistoryOpen] = useState(false);
  const [sessions, setSessions] = useState<AISession[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [retentionDays, setRetentionDays] = useState(30);
  const [historyEnabled, setHistoryEnabled] = useState(true);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editDraft, setEditDraft] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const msgsRef = useRef<Msg[]>([]);
  const activeIdRef = useRef<string | null>(null);
  useEffect(() => { msgsRef.current = msgs; }, [msgs]);
  useEffect(() => { activeIdRef.current = activeId; }, [activeId]);

  const refreshSessions = React.useCallback(async () => {
    if (!user?.id) { setSessions([]); return; }
    const [rows, settings] = await Promise.all([listAISessions(user.id), loadAIHistorySettings(user.id)]);
    setSessions(rows);
    setRetentionDays(settings.retention_days);
    setHistoryEnabled(settings.history_enabled);
  }, [user?.id]);

  useEffect(() => { void refreshSessions(); }, [refreshSessions]);
  useEffect(() => { if (initialContext) setQuery(initialContext.prompt); }, [initialContext]);
  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [msgs, loading]);

  function newSession() {
    setActiveId(null);
    activeIdRef.current = null;
    setMsgs([]);
    msgsRef.current = [];
    setQuery('');
    setMode('doubt');
  }

  async function openSession(s: AISession) {
    setActiveId(s.id);
    activeIdRef.current = s.id;
    const loaded: Msg[] = s.messages.map((m: ChatMessage) => ({ role: m.role, text: m.text, mode: m.mode as Mode | undefined }));
    setMsgs(loaded);
    msgsRef.current = loaded;
  }

  async function persistExchange(finalMsgs: Msg[], firstPrompt: string) {
    if (!user?.id || !historyEnabled) return;
    const payload: ChatMessage[] = finalMsgs.map((m, i) => ({ id: `${Date.now()}-${i}`, role: m.role, text: m.text, mode: m.mode, createdAt: new Date().toISOString() }));
    if (activeIdRef.current) {
      await replaceAIMessages(activeIdRef.current, payload);
      return;
    }
    const created = await createAISession({ userId: user.id, title: 'New Session', kind: 'bubble', messages: payload });
    if (!created) return;
    setActiveId(created.id);
    activeIdRef.current = created.id;
    const title = await smartSessionName(firstPrompt);
    await renameAISession(created.id, title);
    setSessions(prev => [{ ...created, title }, ...prev]);
  }

  async function send(forcedQuery?: string, forcedContext?: string) {
    if ((!(forcedQuery || query.trim()) && files.length === 0) || loading) return;
    const typedQuery = forcedQuery || query.trim() || '(Attached file — please analyse)';
    const selectedText = forcedContext || initialContext?.context;
    const userText = selectedText ? `${typedQuery}\n\nSelected text: ${selectedText}` : typedQuery;
    const detectedMode = detectMode(typedQuery);
    setMode(detectedMode);
    setQuery('');
    const afterUser: Msg[] = [...msgsRef.current, { role: 'user', text: userText, mode: detectedMode }];
    msgsRef.current = afterUser;
    setMsgs(afterUser);
    setLoading(true);

    const fileContent = files.map(f => `[File: ${f.name}]\n${f.content.slice(0, 2000)}`).join('\n\n');
    setFiles([]);

    try {
      const res  = await fetch('/api/ai/ask', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: userText, mode: detectedMode, fileContent }),
      });
      const data = await res.json();
      const finalMsgs: Msg[] = [...afterUser, { role: 'ai', text: data.answer || 'Sorry, could not respond.' }];
      msgsRef.current = finalMsgs;
      setMsgs(finalMsgs);
      showAiRatingFor('ai-doubt-solver');
      void persistExchange(finalMsgs, typedQuery).then(refreshSessions);
    } catch {
      const finalMsgs: Msg[] = [...afterUser, { role: 'ai', text: 'Connection error. Please try again.' }];
      msgsRef.current = finalMsgs;
      setMsgs(finalMsgs);
    } finally { setLoading(false); }
  }
  useEffect(() => {
    if (initialContext?.prompt) send(initialContext.prompt, initialContext.context);
    // A selected-text action is a one-time automatic request.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialContext]);

  function copyPrompt(text: string, id: string) {
    void navigator.clipboard.writeText(text.replace(/\*\*/g, '').replace(/\$+/g, ''));
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  }

  function resendEdited(index: number) {
    const text = editDraft.trim();
    if (!text) return;
    setEditingId(null);
    const trimmed = msgsRef.current.slice(0, index);
    msgsRef.current = trimmed;
    setMsgs(trimmed);
    void send(text);
  }

  if (!isOpen) {
    return (
      <button onClick={onToggle}
        className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm font-semibold shadow-soft-lg hover:shadow-glow-blue transition-all hover:-translate-y-0.5"
        aria-label="Open AI">
        <Brain size={16} /><span className="hidden sm:inline">AI</span>
      </button>
    );
  }

  return (
    <div className="relative w-[calc(100vw-1rem)] sm:w-[380px] max-w-[380px] flex flex-col bg-[var(--surface-0)] border border-[var(--border)] rounded-2xl shadow-soft-xl overflow-hidden animate-slide-up" style={{ maxHeight: 'min(640px, calc(100dvh - 6rem))' }}>
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white flex-shrink-0">
        <div className="flex items-center gap-1.5">
          <button onClick={() => { setHistoryOpen(true); void refreshSessions(); }} aria-label="Chat history" title="Chat history" className="h-9 w-9 -ml-2 flex items-center justify-center rounded-lg hover:bg-white/20 active:bg-white/30 transition-colors"><History size={16} /></button>
          <button onClick={newSession} aria-label="New session" title="New session" className="h-9 w-9 flex items-center justify-center rounded-lg hover:bg-white/20 active:bg-white/30 transition-colors"><SquarePen size={16} /></button>
          <Sparkles size={14} className="ml-1" /><span className="text-sm font-semibold">SolveNCERT AI</span>
        </div>
        <button onClick={onToggle} aria-label="Close AI assistant" className="p-2 -mr-1 rounded-lg hover:bg-white/20 transition-colors"><X size={18} /></button>
      </div>

      {/* Mode tabs */}
      <div className="flex gap-1 px-3 py-2 overflow-x-auto bg-[var(--surface-1)] border-b border-[var(--border)] flex-shrink-0 scrollbar-hide">
        {MODES.map(m => (
          <button key={m.id} onClick={() => setMode(m.id)}
            className={cn('method-tab flex-shrink-0 text-[11px] px-3 py-1.5', mode === m.id ? 'method-tab-active' : 'method-tab-inactive')}>
            {m.label}
          </button>
        ))}
      </div>

      {/* Messages */}
      <div className="flex-1 min-h-0 overflow-y-auto p-3 space-y-3">
        {msgs.length === 0 && (
          <div className="text-center py-6">
            <Brain size={26} className="mx-auto text-blue-400 mb-2" />
            <p className="text-xs text-[var(--text-muted)]">Ask me anything about your NCERT chapters!</p>
            <p className="text-[10px] text-[var(--text-muted)] mt-1">You can also attach files, images, or use voice input</p>
          </div>
        )}
        {msgs.map((m, i) => (
          <div key={`${i}-${m.text.slice(0, 12)}`} className={cn('flex flex-col', m.role === 'user' ? 'items-end' : 'items-start')}>
            {m.role === 'user' && m.mode && (
              <span className="mb-1 inline-flex items-center gap-1 rounded-full border border-blue-200 dark:border-blue-800/60 bg-blue-50 dark:bg-blue-950/40 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-blue-500">
                <Sparkles size={8} /> Auto: {MODE_LABEL[m.mode]}
              </span>
            )}
            <div className={cn('max-w-[90%] px-3 py-2 rounded-xl text-xs leading-relaxed',
              m.role === 'user' ? 'bg-blue-600 text-white rounded-br-sm' : 'bg-[var(--surface-2)] text-[var(--text-secondary)] rounded-bl-sm')}>
              {m.role === 'ai' ? <MathRenderer text={m.text} /> : editingId === i ? (
                <div className="space-y-1.5">
                  <AutoGrowTextarea value={editDraft} onChange={setEditDraft} onEnter={() => resendEdited(i)} className="input-field text-xs py-1.5" />
                  <div className="flex gap-1 justify-end">
                    <button onClick={() => setEditingId(null)} className="text-[10px] px-2 py-1 rounded-lg bg-white/20"><X size={10} /></button>
                    <button onClick={() => resendEdited(i)} className="text-[10px] px-2 py-1 rounded-lg bg-white text-blue-600 font-semibold">Re-ask</button>
                  </div>
                </div>
              ) : m.text}
            </div>
            {m.role === 'user' && editingId !== i && (
              <div className="flex items-center gap-1 mt-1 mr-1">
                <button onClick={() => { setEditingId(i); setEditDraft(m.text); }} title="Edit prompt" className="text-[10px] text-[var(--text-muted)] hover:text-blue-500 flex items-center gap-1"><Pencil size={10} /> Edit</button>
                <button onClick={() => copyPrompt(m.text, `u-${i}`)} title="Copy prompt" className="text-[10px] text-[var(--text-muted)] hover:text-blue-500 flex items-center gap-1">{copiedId === `u-${i}` ? <Check size={10} /> : <Copy size={10} />}</button>
              </div>
            )}
            {m.role === 'ai' && (
              <div className="flex items-center gap-1 mt-1 ml-1">
                <ReadAloud text={m.text} size="sm" />
                <button onClick={() => copyPrompt(m.text, `a-${i}`)} title="Copy reply" className="text-[10px] text-[var(--text-muted)] hover:text-blue-500 flex items-center gap-1">{copiedId === `a-${i}` ? <Check size={10} /> : <Copy size={10} />}</button>
              </div>
            )}
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-[var(--surface-2)] px-3 py-2 rounded-xl rounded-bl-sm flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-bounce" style={{ animationDelay: '0ms' }} />
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-bounce" style={{ animationDelay: '150ms' }} />
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-bounce" style={{ animationDelay: '300ms' }} />
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* File previews */}
      {files.length > 0 && (
        <div className="px-3 pb-1 flex-shrink-0">
          <FileAttach files={files} onChange={setFiles} />
        </div>
      )}

      {/* Input row */}
      <div className="p-3 border-t border-[var(--border)] flex items-center gap-2 flex-shrink-0">
        <FileAttach files={[]} onChange={f => setFiles(prev => [...prev, ...f].slice(0,5))} />
        <div className="flex-1 min-w-0">
          {initialContext && <div className="mb-1 truncate rounded-md bg-blue-50 dark:bg-blue-950/30 px-2 py-1 text-[10px] text-blue-700 dark:text-blue-300">Selected: “{initialContext.context}”</div>}
          <AutoGrowTextarea
            value={query}
            onChange={setQuery}
            onEnter={() => send()}
            placeholder="Ask your doubt…"
            className="input-field text-xs py-2 w-full"
          />
        </div>
        <MicButton onInterim={t => setQuery(t)} onResult={t => { setQuery(t); send(t); }} size="sm" />
        <button onClick={() => send()} disabled={loading || (!query.trim() && files.length === 0)}
          className="flex-shrink-0 p-2 rounded-lg bg-blue-600 hover:bg-blue-700 disabled:opacity-40 text-white transition-all">
          <Send size={13} />
        </button>
      </div>

      <AIChatHistorySidebar
        open={historyOpen}
        onClose={() => setHistoryOpen(false)}
        sessions={sessions}
        activeId={activeId}
        guest={!user}
        retentionDays={retentionDays}
        onSelect={openSession}
        onNew={newSession}
        onDelete={async id => {
          await deleteAISession(id);
          if (activeIdRef.current === id) newSession();
          void refreshSessions();
        }}
        onRename={async (id, title) => {
          await renameAISession(id, title);
          void refreshSessions();
        }}
        onExport={s => { void exportAISessionPdf(s); }}
      />
    </div>
  );
}
