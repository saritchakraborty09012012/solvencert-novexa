import type { Profile } from '@/types/database';

/**
 * Plan helpers — single source of truth for trial/premium checks.
 *
 * `profiles.plan` values:
 *   'freemium' → active 1-month trial (new signups & referral-earned)
 *   'trial'    → legacy trial rows written before the freemium rename
 *   'free'     → trial over (or never had one)
 *   'premium'  → paid
 *
 * The DB flips 'freemium' → 'free' on login (see store/authStore.ts), but the
 * end date is authoritative here so the UI never disagrees with `trial_ends_at`.
 */
export type PlanUser = Pick<Profile, 'plan' | 'trial_ends_at'> | null | undefined;

/** Premium features are unlocked while the freemium/legacy trial is running. */
export function isTrialActive(user: PlanUser): boolean {
  if (!user) return false;
  if (user.plan !== 'freemium' && user.plan !== 'trial') return false;
  return !!user.trial_ends_at && new Date(user.trial_ends_at).getTime() > Date.now();
}

/** The trial ran out — never true for paying users, whatever their end date. */
export function isTrialExpired(user: PlanUser): boolean {
  if (!user || user.plan === 'premium') return false;
  return !!user.trial_ends_at && new Date(user.trial_ends_at).getTime() <= Date.now();
}
