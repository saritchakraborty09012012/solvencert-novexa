import { supabase } from '@/lib/supabase';

export type ChatMessage = {
  id?: string;
  role: 'user' | 'ai';
  text: string;
  mode?: string;
  createdAt?: string;
};

export type AISession = {
  id: string;
  user_id: string;
  title: string;
  kind: 'bubble' | 'followup';
  context_label: string | null;
  messages: ChatMessage[];
  created_at: string;
  updated_at: string;
};

export type AIHistorySettings = {
  history_enabled: boolean;
  retention_days: number;
  auto_delete: boolean;
};

type SessionRow = Omit<AISession, 'messages'> & { messages: unknown };

function normalise(row: SessionRow): AISession {
  return { ...row, messages: Array.isArray(row.messages) ? row.messages as ChatMessage[] : [] };
}

export const DEFAULT_AI_HISTORY_SETTINGS: AIHistorySettings = {
  history_enabled: true,
  retention_days: 30,
  // Premium accounts keep chats until they explicitly opt in to auto-delete.
  auto_delete: false,
};

export async function loadAIHistorySettings(userId: string): Promise<AIHistorySettings> {
  const { data } = await supabase.from('ai_chat_settings')
    .select('history_enabled,retention_days,auto_delete').eq('user_id', userId).maybeSingle();
  if (!data) return DEFAULT_AI_HISTORY_SETTINGS;
  return {
    history_enabled: data.history_enabled ?? true,
    retention_days: Math.min(30, Math.max(1, data.retention_days ?? 30)),
    auto_delete: data.auto_delete ?? true,
  };
}

export async function saveAIHistorySettings(userId: string, settings: AIHistorySettings): Promise<boolean> {
  const { error } = await supabase.from('ai_chat_settings').upsert({
    user_id: userId,
    history_enabled: settings.history_enabled,
    retention_days: Math.min(30, Math.max(1, settings.retention_days)),
    auto_delete: settings.auto_delete,
    updated_at: new Date().toISOString(),
  });
  return !error;
}

export async function listAISessions(userId: string): Promise<AISession[]> {
  const { data, error } = await supabase.from('ai_chat_sessions')
    .select('id,user_id,title,kind,context_label,messages,created_at,updated_at')
    .eq('user_id', userId).order('updated_at', { ascending: false }).limit(50);
  if (error || !data) return [];
  return (data as SessionRow[]).map(normalise);
}

/** Reuse the newest session for a specific follow-up question (one session per question). */
export async function findFollowupSession(userId: string, contextLabel: string): Promise<AISession | null> {
  const { data } = await supabase.from('ai_chat_sessions')
    .select('id,user_id,title,kind,context_label,messages,created_at,updated_at')
    .eq('user_id', userId).eq('kind', 'followup').eq('context_label', contextLabel)
    .order('updated_at', { ascending: false }).limit(1).maybeSingle();
  return data ? normalise(data as SessionRow) : null;
}

export async function createAISession(input: {
  userId: string;
  title: string;
  kind: 'bubble' | 'followup';
  contextLabel?: string | null;
  messages?: ChatMessage[];
}): Promise<AISession | null> {
  const { data, error } = await supabase.from('ai_chat_sessions').insert({
    user_id: input.userId,
    title: input.title,
    kind: input.kind,
    context_label: input.contextLabel ?? null,
    messages: input.messages ?? [],
  }).select('id,user_id,title,kind,context_label,messages,created_at,updated_at').single();
  if (error || !data) return null;
  return normalise(data as SessionRow);
}

export async function appendAIMessages(sessionId: string, messages: ChatMessage[]): Promise<void> {
  const { data } = await supabase.from('ai_chat_sessions').select('messages').eq('id', sessionId).maybeSingle();
  const current = Array.isArray(data?.messages) ? data.messages as ChatMessage[] : [];
  await supabase.from('ai_chat_sessions').update({
    messages: [...current, ...messages],
    updated_at: new Date().toISOString(),
  }).eq('id', sessionId);
}

export async function replaceAIMessages(sessionId: string, messages: ChatMessage[]): Promise<void> {
  await supabase.from('ai_chat_sessions').update({
    messages,
    updated_at: new Date().toISOString(),
  }).eq('id', sessionId);
}

export async function renameAISession(sessionId: string, title: string): Promise<void> {
  await supabase.from('ai_chat_sessions').update({
    title: title.trim().slice(0, 100) || 'New Session',
    updated_at: new Date().toISOString(),
  }).eq('id', sessionId);
}

export async function deleteAISession(sessionId: string): Promise<void> {
  await supabase.from('ai_chat_sessions').delete().eq('id', sessionId);
}

/** Plain text for PDF — keeps Q&A readable without reproducing raw Markdown/LaTeX syntax. */
function toPlain(text: string): string {
  return text
    .replace(/```[\s\S]*?```/g, m => m.replace(/```/g, ''))
    .replace(/\\boxed\{([^}]*)\}/g, '$1')
    .replace(/\$\$?([^$]+)\$\$?/g, '$1')
    .replace(/\\(frac|times|div|pm|sqrt|in|notin|subset|cup|cap|mathbb)\b/g, ' ')
    .replace(/\*\*|__/g, '')
    .replace(/^#{1,6}\s*/gm, '')
    .replace(/\s{3,}/g, ' ')
    .trim();
}

export async function exportAISessionPdf(session: AISession): Promise<void> {
  const { jsPDF } = await import('jspdf');
  const doc = new jsPDF({ unit: 'pt', format: 'a4' });
  const pageW = doc.internal.pageSize.getWidth();
  const margin = 48;
  const maxW = pageW - margin * 2;
  let y = margin;

  const newPage = () => { doc.addPage(); y = margin; };
  const writeLine = (text: string, font: 'bold' | 'normal', size: number, gap = 4) => {
    doc.setFont('helvetica', font);
    doc.setFontSize(size);
    const lines = doc.splitTextToSize(text, maxW) as string[];
    for (const line of lines) {
      if (y > doc.internal.pageSize.getHeight() - margin) newPage();
      doc.text(line, margin, y);
      y += size + gap;
    }
  };

  writeLine('SolveNCERT AI — Chat History', 'bold', 16, 8);
  writeLine(session.title, 'bold', 12, 4);
  writeLine(`Saved ${new Date(session.updated_at).toLocaleString()}`, 'normal', 9, 14);

  for (const m of session.messages) {
    if (y > doc.internal.pageSize.getHeight() - 120) newPage();
    writeLine(m.role === 'user' ? 'You' : 'SolveNCERT AI', 'bold', 10, 3);
    writeLine(toPlain(m.text), 'normal', 11, 10);
  }

  doc.save(`${(session.title || 'ai-chat').replace(/[^a-z0-9-]+/gi, '-').slice(0, 60)}.pdf`);
}

/** Fast local fallback used if the naming API is unavailable. */
export function nameSessionFromPrompt(prompt: string): string {
  const stop = new Set(['what','is','are','the','a','an','of','to','in','for','and','or','how','why','when','where','do','does','did','can','could','would','should','give','tell','explain','me','about','with','this','that','please','solve','find']);
  const words = prompt.toLowerCase().replace(/[^a-z0-9\s]/g, ' ').split(/\s+/).filter(w => w.length > 2 && !stop.has(w));
  const picked = words.slice(0, 5);
  if (!picked.length) return 'New Chat';
  return picked.map(w => w[0].toUpperCase() + w.slice(1)).join(' ').slice(0, 60);
}

/** Short topical title from the first prompt, requested from Groq; falls back locally. */
export async function smartSessionName(prompt: string): Promise<string> {
  try {
    const res = await fetch('/api/ai/name-session', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt: prompt.slice(0, 500) }),
    });
    if (!res.ok) return nameSessionFromPrompt(prompt);
    const data = await res.json();
    const title = typeof data.title === 'string' ? data.title.trim().replace(/^["']|["']$/g, '') : '';
    return title ? title.slice(0, 60) : nameSessionFromPrompt(prompt);
  } catch {
    return nameSessionFromPrompt(prompt);
  }
}

export function followupSessionTitle(subject: string, chapterNumber: number, exerciseLabel: string, itemKey: string): string {
  const ex = exerciseLabel.replace(/^\s*exercise\s*/i, 'ex ').trim();
  const q = (itemKey.split('-').pop() || '').replace(/^q[\s.]*/i, '');
  return `Follow up of class9 ${subject.toLowerCase()}, ch-${chapterNumber}, ${ex}, q. ${q || itemKey}`.slice(0, 100);
}
