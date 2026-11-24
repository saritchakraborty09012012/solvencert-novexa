import type { NextApiRequest, NextApiResponse } from 'next';

/**
 * Server-side Reoon email verification for EMAIL SIGNUP only.
 *
 * The Reoon API key is read from `REOON_API_KEY` and never leaves the server.
 * This route is called BEFORE `supabase.auth.signUp`, so no Supabase user is
 * created unless Reoon confirms the address is safe.
 */
export const config = { api: { bodyParser: { sizeLimit: '4kb' } } };
export const maxDuration = 60; // Vercel: allow enough time for Reoon Power Mode.

const REOON_URL = 'https://emailverifier.reoon.com/api/v1/verify';
const FETCH_TIMEOUT_MS = 50_000; // stay under the 60s function limit

type Result = { ok: true } | { ok: false; error: string };

function reject(res: NextApiResponse<Result>, status: number, error: string) {
  // Never echo the API key, request URL, or upstream response body to the client.
  return res.status(status).json({ ok: false, error });
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Result>) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return reject(res, 405, 'Invalid request.');
  }

  const email = typeof req.body?.email === 'string' ? req.body.email.trim().toLowerCase() : '';
  if (!email || email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return reject(res, 400, 'Enter a valid email address.');
  }

  const apiKey = process.env.REOON_API_KEY;
  if (!apiKey) {
    // Fails closed: never create a Supabase user without a Reoon verdict.
    // The deployment must set REOON_API_KEY (server-only, never NEXT_PUBLIC_*).
    console.error('[verify-signup-email] REOON_API_KEY is not configured');
    return reject(res, 503, 'Email verification is temporarily unavailable. Please try again later.');
  }

  // URLSearchParams handles encoding of the email and the key safely.
  const params = new URLSearchParams({ email, key: apiKey, mode: 'power' });
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);

  try {
    const upstream = await fetch(`${REOON_URL}?${params.toString()}`, {
      method: 'GET',
      headers: { Accept: 'application/json' },
      signal: controller.signal,
      cache: 'no-store',
    });

    if (!upstream.ok) {
      console.error('[verify-signup-email] Reoon HTTP error:', upstream.status);
      if (upstream.status === 401 || upstream.status === 403) {
        return reject(res, 503, 'Email verification is temporarily unavailable. Please try again later.');
      }
      return reject(res, 502, 'Could not verify your email right now. Please try again.');
    }

    const data = await upstream.json().catch(() => null) as Record<string, unknown> | null;
    if (!data || typeof data !== 'object') {
      return reject(res, 502, 'Could not verify your email right now. Please try again.');
    }

    const status = String(data.status ?? '').toLowerCase();
    const safe = status === 'safe' && data.is_safe_to_send !== false;

    if (safe) return res.status(200).json({ ok: true });

    // User-friendly, non-technical rejection messages. No upstream details leak.
    if (['invalid', 'disabled', 'spamtrap', 'disposable', 'inbox_full'].includes(status)) {
      return reject(res, 400, 'This email address cannot be used. Please use another email address.');
    }
    if (status === 'catch_all' || status === 'role_account' || status === 'unknown' || !status) {
      return reject(res, 400, 'We could not verify this email address. Please use a different one or try again.');
    }
    return reject(res, 400, 'This email address could not be verified. Please use another email address.');
  } catch (err) {
    const aborted = err instanceof Error && (err.name === 'AbortError' || /abort/i.test(err.message));
    if (aborted) {
      return reject(res, 504, 'Verification took too long. Please try again.');
    }
    console.error('[verify-signup-email] network/parse failure:', err instanceof Error ? err.name : 'unknown');
    return reject(res, 502, 'Could not verify your email right now. Please check your connection and try again.');
  } finally {
    clearTimeout(timer);
  }
}
