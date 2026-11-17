-- ═══════════════════════════════════════════════════════════════════════════
-- FIX_PLAN_FREEMIUM — profiles.plan: trial → freemium / free / premium
-- RUN ONCE in Supabase SQL Editor (project elbvuwnlfagngpbgcmkm).
--
-- Scope (strict): ONLY the `plan` column of public.profiles.
--   • No rows deleted, no other table/column touched.
--   • Keeps 'trial' allowed in the CHECK so legacy code paths never break.
--   • Trigger updated so NEW signups write 'freemium' (same column only).
--
-- Classification (33 rows at time of writing):
--   plan='trial' AND trial_ends_at > now()  → 'freemium'  (active trial)
--   plan='trial' AND trial_ends_at <= now() → 'free'      (trial ended)
--   plan='premium'                         → unchanged    (paid)
-- ═══════════════════════════════════════════════════════════════════════════

-- ── 1. Relax the CHECK on profiles.plan to accept 'freemium' ────────────────
-- (constraint name confirmed live via error 23514: profiles_plan_check)
ALTER TABLE public.profiles DROP CONSTRAINT IF EXISTS profiles_plan_check;
ALTER TABLE public.profiles ADD CONSTRAINT profiles_plan_check
  CHECK (plan IN ('free', 'trial', 'premium', 'freemium'));

-- Default for inserts that omit plan (same column; new users = freemium trial)
ALTER TABLE public.profiles ALTER COLUMN plan SET DEFAULT 'freemium';

-- ── 2. One-time data fix — UPDATE plan ONLY, guarded, zero deletes ──────────
-- Active trials (default 1-month or referral-earned) → freemium
UPDATE public.profiles
   SET plan = 'freemium'
 WHERE plan = 'trial'
   AND trial_ends_at IS NOT NULL
   AND trial_ends_at > now();

-- Expired / missing trial → free
UPDATE public.profiles
   SET plan = 'free'
 WHERE plan = 'trial'
   AND (trial_ends_at IS NULL OR trial_ends_at <= now());

-- plan='premium' rows: untouched by design.

-- ── 3. Signup trigger: new users get 'freemium' (was 'trial') ───────────────
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name, initials, plan, trial_ends_at, referral_code, email_verified)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'full_name', split_part(NEW.email, '@', 1)),
    UPPER(LEFT(COALESCE(NEW.raw_user_meta_data->>'full_name', 'SN'), 2)),
    'freemium',
    NOW() + INTERVAL '30 days',
    'SN' || UPPER(LEFT(REPLACE(NEW.id::text, '-', ''), 6)),
    false
  )
  ON CONFLICT (id) DO NOTHING;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- ── 4. Verify ───────────────────────────────────────────────────────────────
SELECT plan, count(*) AS rows
  FROM public.profiles
 GROUP BY plan
 ORDER BY plan;
