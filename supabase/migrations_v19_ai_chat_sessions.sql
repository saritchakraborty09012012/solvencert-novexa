-- AI chat history: session-based, synced across devices, per-user retention.
-- New tables only. No existing table or user data is modified.
-- Applied via Supabase MCP on 2026-11-24.

create table if not exists public.ai_chat_sessions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  title text not null default 'New Session',
  kind text not null default 'bubble' check (kind in ('bubble', 'followup')),
  context_label text,
  messages jsonb not null default '[]'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists ai_chat_sessions_user_updated_idx
  on public.ai_chat_sessions (user_id, updated_at desc);

create table if not exists public.ai_chat_settings (
  user_id uuid primary key references public.profiles(id) on delete cascade,
  history_enabled boolean not null default true,
  retention_days integer not null default 30 check (retention_days between 1 and 30),
  auto_delete boolean not null default true,
  updated_at timestamptz not null default now()
);

alter table public.ai_chat_sessions enable row level security;
alter table public.ai_chat_settings enable row level security;

drop policy if exists "Users manage own AI chat sessions" on public.ai_chat_sessions;
create policy "Users manage own AI chat sessions" on public.ai_chat_sessions
  for all to authenticated
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

drop policy if exists "Users manage own AI chat settings" on public.ai_chat_settings;
create policy "Users manage own AI chat settings" on public.ai_chat_settings
  for all to authenticated
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

grant usage on schema public to authenticated;
grant select, insert, update, delete on public.ai_chat_sessions to authenticated;
grant select, insert, update, delete on public.ai_chat_settings to authenticated;
revoke all on public.ai_chat_sessions from anon;
revoke all on public.ai_chat_settings from anon;

-- Hourly cleanup. Retention is counted from the session's LAST EDIT (updated_at).
-- Free users: 1-30 days. Premium: no auto-delete unless they set a retention day.
do $$
declare jid bigint;
begin
  select jobid into jid from cron.job where jobname = 'expire-ai-chat-sessions';
  if jid is not null then perform cron.unschedule(jid); end if;
  perform cron.schedule(
    'expire-ai-chat-sessions',
    '0 * * * *',
    $cmd$
      delete from public.ai_chat_sessions s
      using public.profiles p
      left join public.ai_chat_settings st on st.user_id = p.id
      where s.user_id = p.id
        and (p.plan <> 'premium' or coalesce(st.auto_delete, false))
        and s.updated_at < now() - make_interval(days => coalesce(st.retention_days, 30));
    $cmd$
  );
end $$;
