import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  X, Users, Send, Paperclip, Mic, BarChart3, FileText, Plus, MoreVertical,
  Trash2, Info, Check, CheckCheck, Play, LogOut, Pencil, ChevronLeft, ShieldAlert,
  Image as ImageIcon, Download, UserPlus, XCircle, Loader2, Square, Share2, Copy,
  CirclePlus,
} from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { useAuthStore } from '@/store/authStore';
import { useCollabStore, isMemberOnline, lastActiveLabel, type CollabMember } from '@/store/collabStore';
import { getInitialsColor } from '@/utils/helpers';
import toast from 'react-hot-toast';
import type { ChatGroup, ChatMessage } from '@/types/database';

interface Membership { group_id: string; user_id: string; nickname: string | null; last_read_at: string }

interface ReadRow { message_id: string; user_id: string; read_at: string }

function fmtTime(iso: string) {
  return new Date(iso).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
}
function fmtDateTime(iso: string) {
  return new Date(iso).toLocaleString('en-IN', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' });
}
function fmtSize(bytes: number | null) {
  if (!bytes) return '';
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1048576) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / 1048576).toFixed(1)} MB`;
}

export default function ChatSidebar({ onClose }: { onClose: () => void }) {
  const { user } = useAuthStore();
  const collab = useCollabStore();
  const me = user!.id;

  const [groups, setGroups] = useState<ChatGroup[]>([]);
  const [memberships, setMemberships] = useState<Map<string, Membership>>(new Map());
  const [activeId, setActiveId] = useState<string | null>(null);
  const [mobileView, setMobileView] = useState<'list' | 'chat'>('list');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [reads, setReads] = useState<Map<string, ReadRow[]>>(new Map());
  const [draft, setDraft] = useState('');
  const [showBanner, setShowBanner] = useState(true);
  const [menuFor, setMenuFor] = useState<string | null>(null);
  const [infoMsg, setInfoMsg] = useState<ChatMessage | null>(null);
  const [plusOpen, setPlusOpen] = useState(false);
  const [newGroupOpen, setNewGroupOpen] = useState(false);
  const [recording, setRecording] = useState(false);
  const [busy, setBusy] = useState(false);
  const [inviteOpen, setInviteOpen] = useState(false);

  function inviteLink(code: string) {
    return `${window.location.origin}/collab/join/${code}`;
  }

  async function doInvite(share: boolean) {
    if (!collab.inviteCode) return;
    const link = inviteLink(collab.inviteCode);
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
    setInviteOpen(false);
  }

  const fileRef = useRef<HTMLInputElement>(null);
  const photoRef = useRef<HTMLInputElement>(null);
  const recorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const bottomRef = useRef<HTMLDivElement>(null);
  const signedCache = useRef<Map<string, string>>(new Map());

  const memberMap = useMemo(() => {
    const m = new Map<string, CollabMember>();
    collab.members.forEach(mm => m.set(mm.user_id, mm));
    return m;
  }, [collab.members]);

  const activeGroup = groups.find(g => g.id === activeId) || null;

  // â”€â”€ Data loading â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

  const reload = useCallback(async () => {
    if (!collab.hostId || !collab.sessionId) return;
    await collab.ensureDms();
    const [{ data: gs }, { data: ms }] = await Promise.all([
      supabase.from('chat_groups').select('*').order('created_at'),
      supabase.from('chat_group_members').select('*').eq('user_id', me),
    ]);
    const memMap = new Map<string, Membership>();
    ((ms as Membership[]) || []).forEach(m => memMap.set(m.group_id, m));
    setMemberships(memMap);
    const list = ((gs as ChatGroup[]) || []).filter(g =>
      g.is_dm || memMap.has(g.id) || g.host_id === me
    );
    // session groups first (general on top), then custom, then DMs
    list.sort((a, b) => {
      if (a.is_dm !== b.is_dm) return a.is_dm ? 1 : -1;
      if (a.is_default !== b.is_default) return a.is_default ? -1 : 1;
      return a.created_at < b.created_at ? -1 : 1;
    });
    setGroups(list);
    setActiveId(prev => {
      if (prev && list.some(g => g.id === prev)) return prev;
      const def = list.find(g => g.is_default && g.session_id === collab.sessionId);
      return def?.id || list[0]?.id || null;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [collab.hostId, collab.sessionId, me]);

  useEffect(() => {
    supabase.rpc('cleanup_expired_collab').then(() => {}, () => {});
    reload();
    const t = setInterval(reload, 60 * 1000);
    return () => clearInterval(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // â”€â”€ Messages for active group â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  const loadMessages = useCallback(async (groupId: string) => {
    const { data } = await supabase
      .from('chat_messages')
      .select('*')
      .eq('group_id', groupId)
      .order('created_at', { ascending: true })
      .limit(200);
    setMessages(((data as ChatMessage[]) || []).filter(m => !m.deleted_for_everyone || true));
  }, []);

  const loadReads = useCallback(async (groupId: string) => {
    const ids = messagesRef.current.map(m => m.id);
    if (ids.length === 0) return setReads(new Map());
    const { data } = await supabase
      .from('chat_message_reads')
      .select('*')
      .in('message_id', ids);
    const map = new Map<string, ReadRow[]>();
    ((data as ReadRow[]) || []).forEach(r => {
      const arr = map.get(r.message_id) || [];
      arr.push(r);
      map.set(r.message_id, arr);
    });
    setReads(map);
  }, []);

  const messagesRef = useRef<ChatMessage[]>([]);
  useEffect(() => { messagesRef.current = messages; }, [messages]);

  useEffect(() => {
    if (activeId) {
      loadMessages(activeId);
      setMobileView('chat');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeId]);

  useEffect(() => {
    if (activeId) loadReads(activeId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messages]);

  // mark incoming messages as read while the group is open
  useEffect(() => {
    if (!activeId || !user) return;
    const unread = messagesRef.current.filter(m => m.sender_id !== me && !m.deleted_for_everyone);
    if (unread.length === 0) return;
    const rows = unread.map(m => ({ message_id: m.id, user_id: me }));
    supabase.from('chat_message_reads').upsert(rows, { onConflict: 'message_id,user_id', ignoreDuplicates: true })
      .then(() => {}, () => {});
    supabase.from('chat_group_members').update({ last_read_at: new Date().toISOString() })
      .eq('group_id', activeId).eq('user_id', me).then(() => {}, () => {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messages, activeId]);

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [messages]);

  // â”€â”€ Realtime â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  useEffect(() => {
    const ch = supabase.channel(`chat-sidebar-${me}`)
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'chat_messages' },
        (payload) => {
          const m = payload.new as ChatMessage;
          if (m.group_id === activeId) {
            setMessages(prev => (prev.some(x => x.id === m.id) ? prev : [...prev, m]));
          }
        })
      .on('postgres_changes', { event: 'UPDATE', schema: 'public', table: 'chat_messages' },
        (payload) => {
          const m = payload.new as ChatMessage;
          if (m.group_id === activeId) {
            setMessages(prev => prev.map(x => (x.id === m.id ? m : x)).filter(x => !x.deleted_for_everyone || x.sender_id === me));
          }
        })
      .on('postgres_changes', { event: 'DELETE', schema: 'public', table: 'chat_messages' },
        (payload) => {
          const id = (payload.old as { id: string }).id;
          setMessages(prev => prev.filter(x => x.id !== id));
        })
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'chat_message_reads' },
        (payload) => {
          const r = payload.new as ReadRow;
          setReads(prev => {
            const next = new Map(prev);
            const arr = next.get(r.message_id) || [];
            if (!arr.some(x => x.user_id === r.user_id)) arr.push(r);
            next.set(r.message_id, arr);
            return next;
          });
        })
      .on('postgres_changes', { event: '*', schema: 'public', table: 'chat_groups' }, () => reload())
      .subscribe();
    return () => { supabase.removeChannel(ch); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeId, me, reload]);

  // â”€â”€ Sending â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  async function sendText() {
    if (!activeId || !draft.trim() || busy) return;
    setBusy(true);
    const text = draft.trim();
    setDraft('');
    const { error } = await supabase.from('chat_messages').insert({
      group_id: activeId, sender_id: me, sender_name: user!.full_name || 'Me',
      kind: 'text', body: text,
    });
    if (error) { toast.error('Message not sent.'); setDraft(text); }
    setBusy(false);
  }

  async function uploadFile(path: string, blob: Blob) {
    const { error } = await supabase.storage.from('chat-attachments').upload(path, blob, { upsert: false });
    if (error) throw error;
  }

  function peerIdOfDm(g: ChatGroup): string | null {
    if (!g.is_dm) return null;
    const ids = collab.members.map(m => m.user_id).filter(id => id !== me);
    return ids[0] || null;
  }

  async function sendFile(file: File) {
    if (!activeGroup || !collab.hostId) return;
    setBusy(true);
    try {
      const path = `${collab.hostId}/${crypto.randomUUID()}-${file.name}`.replace(/\s+/g, '_');
      await uploadFile(path, file);
      await supabase.from('chat_messages').insert({
        group_id: activeGroup.id, sender_id: me, sender_name: user!.full_name || 'Me',
        kind: 'file', body: null, file_path: path, file_name: file.name,
        file_size: file.size, file_type: file.type || 'application/octet-stream',
      });
    } catch { toast.error('Upload failed.'); }
    setBusy(false);
  }

  async function sendTranscript() {
    if (!activeGroup) return;
    const text = window.prompt('Paste the transcript:');
    if (!text?.trim()) return;
    await supabase.from('chat_messages').insert({
      group_id: activeGroup.id, sender_id: me, sender_name: user!.full_name || 'Me',
      kind: 'transcript', body: text.trim(),
    });
  }

  async function startRecording() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const rec = new MediaRecorder(stream);
      chunksRef.current = [];
      rec.ondataavailable = (e) => chunksRef.current.push(e.data);
      rec.onstop = async () => {
        stream.getTracks().forEach(t => t.stop());
        const blob = new Blob(chunksRef.current, { type: 'audio/webm' });
        if (activeGroup && collab.hostId) {
          const path = `${collab.hostId}/${crypto.randomUUID()}-voice.webm`;
          try {
            await uploadFile(path, blob);
            await supabase.from('chat_messages').insert({
              group_id: activeGroup.id, sender_id: me, sender_name: user!.full_name || 'Me',
              kind: 'voice', file_path: path, file_name: 'Voice message',
              file_size: blob.size, file_type: 'audio/webm', body: null,
            });
          } catch { toast.error('Voice message failed.'); }
        }
      };
      rec.start();
      recorderRef.current = rec;
      setRecording(true);
    } catch { toast.error('Microphone access denied.'); }
  }

  function stopRecording() {
    recorderRef.current?.stop();
    recorderRef.current = null;
    setRecording(false);
  }

  async function sendPoll() {
    if (!activeGroup) return;
    const q = window.prompt('Poll question:');
    if (!q?.trim()) return;
    const optsRaw = window.prompt('Options (separate with commas):', 'Yes, No');
    if (!optsRaw?.trim()) return;
    const options = optsRaw.split(',').map(o => o.trim()).filter(Boolean);
    if (options.length < 2) return toast.error('At least 2 options needed.');
    await supabase.from('chat_messages').insert({
      group_id: activeGroup.id, sender_id: me, sender_name: user!.full_name || 'Me',
      kind: 'poll', poll_question: q.trim(), poll_options: options, poll_votes: {},
    });
  }

  // â”€â”€ Deletes â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  async function deleteForMe(m: ChatMessage) {
    await supabase.from('chat_message_hides').insert({ message_id: m.id, user_id: me });
    setMessages(prev => prev.filter(x => x.id !== m.id));
    setMenuFor(null);
    toast.success('Deleted for you');
  }

  async function deleteForEveryone(m: ChatMessage) {
    const { error } = await supabase.from('chat_messages')
      .update({ deleted_for_everyone: true, body: null }).eq('id', m.id).eq('sender_id', me);
    if (error) return toast.error('Only your own messages can be deleted for everyone.');
    setMessages(prev => prev.map(x => (x.id === m.id ? { ...x, deleted_for_everyone: true, body: null } : x)));
    setMenuFor(null);
    toast.success('Deleted for everyone');
  }

  // â”€â”€ Group actions â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  async function renameGroup() {
    if (!activeGroup) return;
    if (activeGroup.host_id !== me) return toast.error('Only the host can rename the group.');
    const name = window.prompt('New group name:', activeGroup.name);
    if (!name?.trim() || name.trim() === activeGroup.name) return;
    const { error } = await supabase.from('chat_groups').update({ name: name.trim() }).eq('id', activeGroup.id);
    if (error) return toast.error('Rename failed.');
    await supabase.from('chat_messages').insert({
      group_id: activeGroup.id, sender_id: me, sender_name: user!.full_name || 'Host',
      kind: 'system', body: `${user!.full_name || 'Host'} changed the group name to â€œ${name.trim()}â€`,
    });
    reload();
  }

  async function deleteGroup() {
    if (!activeGroup) return;
    if (activeGroup.host_id !== me) return toast.error('Only the host can delete the group.');
    if (activeGroup.is_default) return toast.error('Cannot delete the default group.');
    if (!window.confirm(`Delete "${activeGroup.name}"? All messages will be lost.`)) return;
    const { error } = await supabase.from('chat_groups').delete().eq('id', activeGroup.id);
    if (error) return toast.error('Delete failed.');
    setActiveId(null);
    reload();
    toast.success('Group deleted');
  }

  async function uploadGroupPhoto(file: File) {
    if (!activeGroup) return;
    if (activeGroup.host_id !== me) return toast.error('Only the host can set the group photo.');
    try {
      const path = `groupphotos/${activeGroup.id}-${Date.now()}-${file.name}`.replace(/\s+/g, '_');
      await uploadFile(path, file);
      await supabase.from('chat_groups').update({ photo_path: path }).eq('id', activeGroup.id);
      reload();
    } catch { toast.error('Photo upload failed.'); }
  }

  async function setNickname() {
    if (!activeGroup?.is_dm) return;
    const peer = peerIdOfDm(activeGroup);
    if (!peer) return;
    const current = memberships.get(activeGroup.id)?.nickname || '';
    const nick = window.prompt(`Set nickname (visible to both of you):`, current);
    if (nick === null) return;
    await supabase.from('chat_group_members').update({ nickname: nick.trim() || null })
      .eq('group_id', activeGroup.id).eq('user_id', peer);
    reload();
  }

  async function createNewGroup(name: string, selected: string[]) {
    if (!collab.hostId || !collab.sessionId) return;
    const { data: g, error } = await supabase.from('chat_groups').insert({
      host_id: collab.hostId, session_id: collab.sessionId,
      name: name.trim() || 'New Group', is_default: false, is_dm: false, created_by: me,
    }).select().single();
    if (error || !g) return toast.error('Could not create group.');
    const rows = [{ group_id: g.id, user_id: me }, ...selected.map(id => ({ group_id: g.id, user_id: id }))];
    await supabase.from('chat_group_members').insert(rows);
    await supabase.from('chat_messages').insert({
      group_id: g.id, sender_id: me, sender_name: user!.full_name || 'Host',
      kind: 'system', body: `${user!.full_name || 'Host'} created the group â€œ${name.trim() || 'New Group'}â€`,
    });
    setNewGroupOpen(false);
    reload();
    toast.success('Group created!');
  }

  // â”€â”€ Helpers â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  async function signedUrl(path: string): Promise<string> {
    const cached = signedCache.current.get(path);
    if (cached) return cached;
    const { data } = await supabase.storage.from('chat-attachments').createSignedUrl(path, 604800);
    const url = data?.signedUrl || '';
    if (url) signedCache.current.set(path, url);
    return url;
  }

  function displayNameOf(userId: string): string {
    const m = memberMap.get(userId);
    return m?.display_name || 'Friend';
  }

  function dmDisplayName(g: ChatGroup): string {
    const peerId = collab.members.find(mm => mm.user_id !== me)?.user_id;
    if (!peerId) return g.name;
    const nick = memberships.get(g.id)?.nickname;
    return nick || displayNameOf(peerId);
  }

  function titleOf(g: ChatGroup): string {
    return g.is_dm ? dmDisplayName(g) : g.name;
  }

  function isMsgRead(m: ChatMessage): boolean {
    if (m.sender_id !== me) return false;
    const arr = reads.get(m.id) || [];
    return arr.some(r => r.user_id !== me);
  }

  function peerOfActiveDm(): CollabMember | null {
    if (!activeGroup?.is_dm) return null;
    return collab.members.find(mm => mm.user_id !== me) || null;
  }

  const peer = peerOfActiveDm();

  // â”€â”€ Render â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  return (
    <div className="fixed right-0 top-14 md:top-16 bottom-0 w-full sm:w-[400px] z-40 flex flex-col bg-[var(--surface-0)] border-l border-t border-[var(--border)] shadow-2xl animate-slide-left">
      {/* 7-day security notice */}
      {showBanner && (
        <div className="flex items-start gap-2 px-3 py-2 bg-amber-500/10 border-b border-amber-500/25">
          <ShieldAlert size={13} className="text-amber-500 mt-0.5 flex-shrink-0" />
          <p className="text-[10px] leading-snug text-[var(--text-secondary)] flex-1">
            For security reasons, chats are kept for <b>7 days</b> and then automatically deleted. Copy important info.
          </p>
          <button onClick={() => setShowBanner(false)} className="text-[var(--text-muted)] hover:text-[var(--text-primary)]">
            <XCircle size={13} />
          </button>
        </div>
      )}

      <div className="flex flex-1 min-h-0">
        {/* â”€â”€ Chat list â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        <div className={`${mobileView === 'chat' ? 'hidden sm:flex' : 'flex'} w-full sm:w-36 flex-col border-r border-[var(--border)] min-h-0`}>
          <div className="flex items-center justify-between px-3 py-3 border-b border-[var(--border)]">
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)]">Chats</span>
            <div className="flex items-center gap-0.5">
              <button onClick={() => setInviteOpen(true)} title="Add people"
                className="p-1.5 rounded-lg hover:bg-[var(--surface-2)] text-[var(--text-muted)] hover:text-emerald-500 transition-colors">
                <UserPlus size={14} />
              </button>
              <button onClick={() => setNewGroupOpen(true)} title="New group"
                className="p-1.5 rounded-lg hover:bg-[var(--surface-2)] text-[var(--text-muted)] hover:text-blue-500 transition-colors">
                <CirclePlus size={14} />
              </button>
              <button onClick={onClose} title="Close chat"
                className="p-1.5 rounded-lg hover:bg-[var(--surface-2)] text-[var(--text-muted)] hover:text-red-500 transition-colors">
                <X size={14} />
              </button>
            </div>
          </div>
          <div className="flex-1 overflow-y-auto flex flex-col items-center justify-center px-3">
            <span className="px-2.5 py-1 rounded-full bg-[var(--surface-2)] border border-[var(--border)] text-[10px] font-bold uppercase tracking-wider text-[var(--text-muted)]">
              Coming soon
            </span>
          </div>
        </div>

        {/* â”€â”€ Conversation â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        <div className={`${mobileView === 'list' ? 'hidden sm:flex' : 'flex'} flex-1 flex-col min-h-0`}>
          {activeGroup ? (
            <>
              <div className="flex items-center gap-2 px-3 py-2.5 border-b border-[var(--border)]">
                <button onClick={() => setMobileView('list')} className="sm:hidden p-1 text-[var(--text-muted)]">
                  <ChevronLeft size={16} />
                </button>
                {activeGroup.is_dm
                  ? <DmAvatar peer={peer} />
                  : <GroupAvatar group={activeGroup} getSigned={signedUrl} />}
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-bold text-[var(--text-primary)] truncate">{titleOf(activeGroup)}</p>
                  <p className="text-[9px] text-[var(--text-muted)] truncate">
                    {activeGroup.is_dm
                      ? (peer ? (isMemberOnline(peer.last_seen_at) ? 'online' : lastActiveLabel(peer.last_seen_at)) : '')
                      : `${collab.members.length} friends`}
                  </p>
                </div>
                {activeGroup.is_dm && (
                  <button onClick={setNickname} title="Set nickname"
                    className="p-1.5 rounded-lg hover:bg-[var(--surface-2)] text-[var(--text-muted)] hover:text-blue-500 transition-colors">
                    <Pencil size={12} />
                  </button>
                )}
                {!activeGroup.is_dm && activeGroup.host_id === me && (
                  <>
                    <button onClick={() => photoRef.current?.click()} title="Group photo"
                      className="p-1.5 rounded-lg hover:bg-[var(--surface-2)] text-[var(--text-muted)] hover:text-blue-500 transition-colors">
                      <ImageIcon size={12} />
                    </button>
                    <button onClick={renameGroup} title="Rename group"
                      className="p-1.5 rounded-lg hover:bg-[var(--surface-2)] text-[var(--text-muted)] hover:text-blue-500 transition-colors">
                      <Pencil size={12} />
                    </button>
                    <button onClick={deleteGroup} title="Delete group"
                      className="p-1.5 rounded-lg hover:bg-[var(--surface-2)] text-[var(--text-muted)] hover:text-red-500 transition-colors">
                      <Trash2 size={12} />
                    </button>
                  </>
                )}
                {activeGroup.is_dm && collab.role === 'invitee' && (
                  <button onClick={async () => { await collab.leaveSession(); onClose(); }}
                    title="Leave session"
                    className="p-1.5 rounded-lg hover:bg-[var(--surface-2)] text-[var(--text-muted)] hover:text-red-500 transition-colors">
                    <LogOut size={12} />
                  </button>
                )}
              </div>

              <input ref={photoRef} type="file" accept="image/*" hidden
                onChange={(e) => { const f = e.target.files?.[0]; if (f) uploadGroupPhoto(f); e.target.value = ''; }} />

              {/* Messages */}
              <div className="flex-1 overflow-y-auto px-3 py-3 space-y-1.5">
                {messages.map(m => {
                  if (m.kind === 'system') {
                    return (
                      <p key={m.id} className="text-center text-[10px] text-[var(--text-muted)] italic py-1">{m.body}</p>
                    );
                  }
                  const own = m.sender_id === me;
                  const read = isMsgRead(m);
                  return (
                    <div key={m.id} className={`group flex flex-col ${own ? 'items-end' : 'items-start'}`}>
                      {!own && !activeGroup.is_dm && (
                        <span className="text-[9px] font-bold text-blue-500 px-1 mb-0.5">{m.sender_name}</span>
                      )}
                      <div className={`relative max-w-[85%] rounded-xl px-2.5 py-1.5 text-xs ${own ? 'bg-blue-600 text-white rounded-br-sm' : 'bg-[var(--surface-2)] text-[var(--text-primary)] rounded-bl-sm'}`}>
                        <MessageBody msg={m} getSigned={signedUrl} onVote={async (idx) => {
                          const votes = { ...(m.poll_votes as Record<string, number> || {}), [me]: idx };
                          await supabase.from('chat_messages').update({ poll_votes: votes }).eq('id', m.id);
                          setMessages(prev => prev.map(x => (x.id === m.id ? { ...x, poll_votes: votes } : x)));
                        }} />
                        <div className={`flex items-center gap-1 mt-0.5 ${own ? 'justify-end' : ''}`}>
                          <span className={`text-[8px] ${own ? 'text-blue-200' : 'text-[var(--text-muted)]'}`}>{fmtTime(m.created_at)}</span>
                          {own && (
                            read
                              ? <CheckCheck size={11} className="text-sky-300" />
                              : <CheckCheck size={11} className="text-blue-200/70" />
                          )}
                        </div>
                        <button onClick={() => setMenuFor(menuFor === m.id ? null : m.id)}
                          className={`absolute -top-1 ${own ? '-left-5' : '-right-5'} p-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity text-[var(--text-muted)] hover:text-[var(--text-primary)]`}>
                          <MoreVertical size={12} />
                        </button>
                        {menuFor === m.id && (
                          <div className={`absolute z-50 top-4 ${own ? 'right-0' : 'left-0'} w-44 rounded-xl border border-[var(--border)] bg-[var(--surface-0)] shadow-2xl py-1 text-[var(--text-primary)]`}>
                            <button onClick={() => deleteForMe(m)}
                              className="w-full flex items-center gap-2 px-3 py-2 text-xs hover:bg-[var(--surface-2)] transition-colors">
                              <Trash2 size={12} /> Delete for me
                            </button>
                            {own && (
                              <button onClick={() => deleteForEveryone(m)}
                                className="w-full flex items-center gap-2 px-3 py-2 text-xs text-red-500 hover:bg-red-500/10 transition-colors">
                                <Trash2 size={12} /> Delete for everyone
                              </button>
                            )}
                            <button onClick={() => { setInfoMsg(m); setMenuFor(null); }}
                              className="w-full flex items-center gap-2 px-3 py-2 text-xs hover:bg-[var(--surface-2)] transition-colors">
                              <Info size={12} /> Info
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
                <div ref={bottomRef} />
              </div>

              {/* Composer */}
              <div className="border-t border-[var(--border)] p-2">
                {plusOpen && (
                  <div className="absolute bottom-16 left-3 w-44 rounded-xl border border-[var(--border)] bg-[var(--surface-0)] shadow-2xl py-1 z-50">
                    <button onClick={() => { fileRef.current?.click(); setPlusOpen(false); }}
                      className="w-full flex items-center gap-2 px-3 py-2 text-xs text-[var(--text-primary)] hover:bg-[var(--surface-2)]">
                      <Paperclip size={12} /> Attachment
                    </button>
                    <button onClick={() => { sendPoll(); setPlusOpen(false); }}
                      className="w-full flex items-center gap-2 px-3 py-2 text-xs text-[var(--text-primary)] hover:bg-[var(--surface-2)]">
                      <BarChart3 size={12} /> Poll
                    </button>
                    <button onClick={() => { sendTranscript(); setPlusOpen(false); }}
                      className="w-full flex items-center gap-2 px-3 py-2 text-xs text-[var(--text-primary)] hover:bg-[var(--surface-2)]">
                      <FileText size={12} /> Transcript
                    </button>
                  </div>
                )}
                <div className="flex items-end gap-1.5">
                  <button onClick={() => setPlusOpen(!plusOpen)}
                    className="p-2 rounded-lg hover:bg-[var(--surface-2)] text-[var(--text-muted)] hover:text-blue-500 transition-colors">
                    <Plus size={16} />
                  </button>
                  {recording ? (
                    <button onClick={stopRecording}
                      className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-red-500/15 border border-red-500/40 text-red-500 text-xs font-semibold animate-pulse">
                      <Square size={12} /> Recordingâ€¦ tap to send
                    </button>
                  ) : (
                    <textarea
                      value={draft}
                      onChange={(e) => setDraft(e.target.value)}
                      onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendText(); } }}
                      placeholder="Messageâ€¦"
                      rows={1}
                      className="flex-1 resize-none rounded-xl border border-[var(--border)] bg-[var(--surface-1)] px-3 py-2 text-xs text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-blue-500/30 max-h-24"
                    />
                  )}
                  {!recording && (
                    <button onClick={startRecording} title="Voice message"
                      className="p-2 rounded-lg hover:bg-[var(--surface-2)] text-[var(--text-muted)] hover:text-blue-500 transition-colors">
                      <Mic size={16} />
                    </button>
                  )}
                  <button onClick={sendText} disabled={!draft.trim() || busy}
                    className="p-2 rounded-lg bg-blue-600 hover:bg-blue-700 disabled:opacity-40 text-white transition-colors">
                    <Send size={14} />
                  </button>
                </div>
              </div>

              <input ref={fileRef} type="file" hidden
                onChange={(e) => { const f = e.target.files?.[0]; if (f) sendFile(f); e.target.value = ''; }} />
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center text-xs text-[var(--text-muted)]">
              Select a chat
            </div>
          )}
        </div>
      </div>

      {/* Info modal */}
      {infoMsg && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setInfoMsg(null)} />
          <div className="relative w-full max-w-xs rounded-2xl border border-[var(--border)] bg-[var(--surface-0)] shadow-2xl p-5">
            <button onClick={() => setInfoMsg(null)} className="absolute top-3 right-3 p-1 text-[var(--text-muted)] hover:text-[var(--text-primary)]">
              <X size={14} />
            </button>
            <p className="text-sm font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2"><Info size={14} className="text-blue-500" /> Message info</p>
            <div className="space-y-2 text-xs text-[var(--text-secondary)]">
              <p className="flex items-center gap-2"><Check size={13} className="text-[var(--text-muted)]" /> Sent: {fmtDateTime(infoMsg.created_at)}</p>
              <p className="flex items-center gap-2"><CheckCheck size={13} className="text-[var(--text-muted)]" /> Delivered: {fmtDateTime(infoMsg.created_at)}</p>
              <p className="flex items-center gap-2">
                <CheckCheck size={13} className="text-sky-500" />
                {(() => {
                  const arr = (reads.get(infoMsg.id) || []).filter(r => r.user_id !== me);
                  if (arr.length === 0) return <span className="text-[var(--text-muted)]">Not seen yet</span>;
                  return <span>Seen by {arr.map(r => displayNameOf(r.user_id)).join(', ')} â€” {fmtDateTime(arr[0].read_at)}</span>;
                })()}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* New group modal */}
      {newGroupOpen && (
        <NewGroupModal
          members={collab.members.filter(m => m.user_id !== me)}
          onClose={() => setNewGroupOpen(false)}
          onCreate={createNewGroup}
        />
      )}

      {/* Invite modal */}
      {inviteOpen && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setInviteOpen(false)} />
          <div className="relative w-full max-w-sm rounded-2xl border border-[var(--border)] bg-[var(--surface-0)] shadow-2xl p-6">
            <button onClick={() => setInviteOpen(false)} className="absolute top-3 right-3 p-1 text-[var(--text-muted)] hover:text-[var(--text-primary)]">
              <X size={14} />
            </button>
            <div className="flex items-center gap-2 mb-3">
              <span className="grid size-10 place-items-center rounded-xl bg-emerald-500/15 text-emerald-500"><UserPlus size={18} /></span>
              <h3 className="text-base font-bold text-[var(--text-primary)]">Invite friends</h3>
            </div>
            <p className="text-xs text-[var(--text-muted)] mb-4">Share your invite link. Friends join and study inside your account.</p>
            <div className="grid grid-cols-2 gap-2">
              <button onClick={() => doInvite(true)} disabled={busy}
                className="gold-btn text-xs py-2.5 px-3 justify-center rounded-xl font-bold">
                {busy ? <Loader2 size={13} className="animate-spin" /> : <Share2 size={13} />} Share link
              </button>
              <button onClick={() => doInvite(false)} disabled={busy}
                className="gold-btn text-xs py-2.5 px-3 justify-center rounded-xl font-bold">
                {busy ? <Loader2 size={13} className="animate-spin" /> : <Copy size={13} />} Copy link
              </button>
            </div>
            <p className="text-[10px] text-[var(--text-muted)] mt-4 text-center">
              {collab.maxFriends === 10 ? 'Premium — up to 10 friends can join.' : 'Free plan — up to 5 friends. Invite link works for 24 hours.'}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

// â”€â”€ Sub-components â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

function DmAvatar({ peer }: { peer: CollabMember | null }) {
  const initials = (peer?.display_name || '?').slice(0, 2).toUpperCase();
  const colors = getInitialsColor(initials);
  const online = peer ? isMemberOnline(peer.last_seen_at) : false;
  return (
    <span className="relative flex-shrink-0">
      <span className="w-8 h-8 rounded-full grid place-items-center text-[10px] font-bold text-white"
        style={{ background: colors.fg }}>
        {initials}
      </span>
      <span className={`absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full border-2 border-[var(--surface-0)] ${online ? 'bg-emerald-500' : 'bg-gray-400'}`} />
    </span>
  );
}

function GroupAvatar({ group, getSigned }: { group: ChatGroup; getSigned: (p: string) => Promise<string> }) {
  const [url, setUrl] = useState<string | null>(null);
  useEffect(() => {
    let live = true;
    if (group.photo_path) getSigned(group.photo_path).then(u => { if (live) setUrl(u); });
    return () => { live = false; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [group.photo_path]);
  const initials = group.name.slice(0, 2).toUpperCase();
  return url ? (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={url} alt={group.name} className="w-8 h-8 rounded-full object-cover flex-shrink-0" />
  ) : (
    <span className="w-8 h-8 rounded-full grid place-items-center text-[10px] font-bold text-white bg-gradient-to-br from-blue-500 to-indigo-600 flex-shrink-0">
      {initials}
    </span>
  );
}

function MessageBody({ msg, getSigned, onVote }: {
  msg: ChatMessage;
  getSigned: (p: string) => Promise<string>;
  onVote: (idx: number) => void;
}) {
  if (msg.deleted_for_everyone) {
    return <p className="italic opacity-60">This message was deleted</p>;
  }
  if (msg.kind === 'poll' && msg.poll_question) {
    const options = (msg.poll_options as string[]) || [];
    const votes = (msg.poll_votes as Record<string, number>) || {};
    const total = Object.keys(votes).length || 0;
    return (
      <div className="min-w-[180px]">
        <p className="font-semibold mb-1.5 flex items-center gap-1"><BarChart3 size={11} /> {msg.poll_question}</p>
        <div className="space-y-1">
          {options.map((opt, i) => {
            const count = Object.values(votes).filter(v => v === i).length;
            const pct = total ? Math.round((count / total) * 100) : 0;
            return (
              <button key={i} onClick={() => onVote(i)}
                className="w-full text-left px-2 py-1 rounded-lg bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 transition-colors relative overflow-hidden">
                <span className="absolute inset-y-0 left-0 bg-blue-500/25" style={{ width: `${pct}%` }} />
                <span className="relative flex items-center justify-between gap-2">
                  <span className="truncate">{opt}{votes[msg.sender_id] === i ? '' : ''}</span>
                  <span className="text-[9px] opacity-80">{pct}%</span>
                </span>
              </button>
            );
          })}
        </div>
        <p className="text-[9px] opacity-70 mt-1">{total} vote{total === 1 ? '' : 's'} â€” tap to vote</p>
      </div>
    );
  }
  if (msg.kind === 'voice' && msg.file_path) {
    return <VoiceBubble path={msg.file_path} getSigned={getSigned} />;
  }
  if (msg.kind === 'file' && msg.file_path) {
    return <FileBubble msg={msg} getSigned={getSigned} />;
  }
  if (msg.kind === 'transcript') {
    return (
      <div className="min-w-[200px] max-w-[280px]">
        <p className="text-[9px] font-bold uppercase tracking-wider opacity-70 mb-1 flex items-center gap-1"><FileText size={9} /> Transcript</p>
        <p className="whitespace-pre-wrap break-words max-h-40 overflow-y-auto leading-relaxed">{msg.body}</p>
      </div>
    );
  }
  return <p className="whitespace-pre-wrap break-words">{msg.body}</p>;
}

function VoiceBubble({ path, getSigned }: { path: string; getSigned: (p: string) => Promise<string> }) {
  const [url, setUrl] = useState<string | null>(null);
  useEffect(() => { getSigned(path).then(setUrl); }, [path, getSigned]);
  return (
    <div className="flex items-center gap-1.5 min-w-[160px]">
      <Mic size={12} className="opacity-70" />
      {url ? <audio controls src={url} className="h-8 max-w-[200px]" /> : <Loader2 size={12} className="animate-spin" />}
    </div>
  );
}

function FileBubble({ msg, getSigned }: { msg: ChatMessage; getSigned: (p: string) => Promise<string> }) {
  const [url, setUrl] = useState<string | null>(null);
  useEffect(() => { if (msg.file_path) getSigned(msg.file_path).then(setUrl); }, [msg.file_path, getSigned]);
  const isImage = (msg.file_type || '').startsWith('image/');
  return (
    <div className="min-w-[160px] max-w-[240px]">
      {isImage && url && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={url} alt={msg.file_name || 'attachment'} className="rounded-lg mb-1.5 max-h-48 object-cover" />
      )}
      <a href={url || '#'} target="_blank" rel="noreferrer"
        className="flex items-center gap-1.5 underline underline-offset-2 hover:opacity-80 transition-opacity">
        {isImage ? <ImageIcon size={11} /> : <Download size={11} />}
        <span className="truncate">{msg.file_name}</span>
        <span className="opacity-60 text-[9px]">{fmtSize(msg.file_size)}</span>
      </a>
    </div>
  );
}

function NewGroupModal({ members, onClose, onCreate }: {
  members: CollabMember[];
  onClose: () => void;
  onCreate: (name: string, selected: string[]) => void;
}) {
  const [name, setName] = useState('');
  const [selected, setSelected] = useState<string[]>([]);
  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-xs rounded-2xl border border-[var(--border)] bg-[var(--surface-0)] shadow-2xl p-5">
        <button onClick={onClose} className="absolute top-3 right-3 p-1 text-[var(--text-muted)] hover:text-[var(--text-primary)]">
          <X size={14} />
        </button>
        <p className="text-sm font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2"><Users size={14} className="text-blue-500" /> New group</p>
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Group name"
          className="input-field w-full mb-3 text-xs" />
        <div className="space-y-1 max-h-44 overflow-y-auto mb-3">
          {members.map(m => (
            <label key={m.user_id} className="flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-[var(--surface-2)] cursor-pointer text-xs text-[var(--text-primary)]">
              <input
                type="checkbox"
                checked={selected.includes(m.user_id)}
                onChange={(e) => setSelected(prev => e.target.checked ? [...prev, m.user_id] : prev.filter(id => id !== m.user_id))}
                className="accent-blue-600"
              />
              <span className="truncate">{m.display_name}{m.is_host ? ' (host)' : ''}</span>
            </label>
          ))}
        </div>
        <button
          onClick={() => onCreate(name, selected)}
          disabled={!name.trim() || selected.length === 0}
          className="btn-primary w-full justify-center text-xs">
          Create group
        </button>
      </div>
    </div>
  );
}
