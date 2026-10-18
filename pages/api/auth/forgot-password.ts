import type { NextApiRequest, NextApiResponse } from 'next';
import { createAdminClient } from '@/lib/supabase';
import { sendViaResend, defaultFromAddress } from '@/lib/serverEmail';
import { SITE_URL } from '@/lib/site';

const COOLDOWN_MS = 60_000;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// Best-effort per-email cooldown (in-memory). The client also enforces the
// same 60-second window for the faded resend button.
const cooldowns = new Map<string, number>();

function pruneCooldowns(now: number) {
  if (cooldowns.size < 5000) return;
  for (const [key, until] of cooldowns) {
    if (until <= now) cooldowns.delete(key);
  }
}

// Is the configured `from` domain verified in Resend? Cached for 60 seconds.
// Checking FIRST matters: admin.generateLink consumes GoTrue's per-user 60s
// email window (proven: recovery_sent_at is set), so we must not call it
// unless the Resend send has a real chance of succeeding — otherwise the
// Supabase fallback would 429 and the user would get NO email at all.
let domainCheck: { from: string; verified: boolean; at: number } | null = null;

async function isResendFromVerified(): Promise<boolean> {
  const from = defaultFromAddress();
  if (domainCheck && domainCheck.from === from && Date.now() - domainCheck.at < 60_000) {
    return domainCheck.verified;
  }
  const m = from.match(/<[^>]*@([^>]+)>/) || from.match(/@([^\s>]+)/);
  const domain = m ? m[1] : '';
  let verified = false;
  if (domain && process.env.RESEND_API_KEY) {
    try {
      const res = await fetch('https://api.resend.com/domains', {
        headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}` },
      });
      if (res.ok) {
        const body = await res.json();
        verified = Array.isArray(body?.data) && body.data.some((d: any) => d?.name === domain && d?.status === 'verified');
      }
    } catch { /* treat as not verified */ }
  }
  domainCheck = { from, verified, at: Date.now() };
  return verified;
}

/** Same-origin only: the reset link must come back to this deployment (or localhost in dev). */
function resolveBaseUrl(req: NextApiRequest): string {
  const fallback = process.env.NEXT_PUBLIC_APP_URL || SITE_URL;
  const raw = (req.headers.origin as string) || (req.headers.referer as string) || '';
  try {
    if (raw) {
      const u = new URL(raw);
      const isLocal = u.hostname === 'localhost' || u.hostname === '127.0.0.1';
      const isSite = (() => { try { return u.hostname === new URL(fallback).hostname; } catch { return false; } })();
      if (isLocal || isSite) return u.origin;
    }
  } catch { /* fall through */ }
  return fallback;
}

function resetEmailHtml(link: string): string {
  const href = link.replace(/&/g, '&amp;');
  // Site theme · UI-3 "Obsidian Gold": #0d0c0a bg, #17120c card, #ebaa2d gold
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="color-scheme" content="dark" />
  <title>Reset your password</title>
</head>
<body style="margin:0;padding:0;background-color:#0d0c0a;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:#0d0c0a;">
    <tr>
      <td align="center" style="padding:32px 16px;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width:500px;background-color:#17120c;border:1px solid #382d1d;border-radius:14px;">
          <tr>
            <td align="center" style="padding:26px 32px 18px;border-bottom:1px solid #382d1d;">
              <span style="font-family:Georgia,'Times New Roman',serif;font-size:23px;font-weight:700;color:#ebaa2d;letter-spacing:0.4px;">SolveNCERT</span>
            </td>
          </tr>
          <tr>
            <td style="padding:26px 32px 30px;">
              <h1 style="margin:0 0 14px;font-family:Georgia,'Times New Roman',serif;font-size:21px;font-weight:700;color:#f4f1ed;">Reset your password</h1>
              <p style="margin:0 0 20px;font-size:15px;line-height:1.65;color:#9d9791;">We received a request to reset your password. Follow the link below to choose a new one.</p>
              <p style="margin:0 0 20px;"><a href="${href}" style="font-size:15px;font-weight:600;color:#ebaa2d;text-decoration:underline;">Reset password</a></p>
              <p style="margin:0;font-size:13px;line-height:1.6;color:#8e8578;">If you didn't request this, you can safely ignore this email.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function resetEmailText(link: string): string {
  return [
    'Reset your password',
    '',
    'We received a request to reset your password. Follow the link below to choose a new one.',
    '',
    link,
    '',
    "If you didn't request this, you can safely ignore this email.",
  ].join('\n');
}

// ── Resend send with retries (up to 3 attempts). Only a SUCCESSFUL Resend   ──
// ── send sets delivered=true — the Supabase fallback runs exclusively when  ──
// ── every attempt failed, so the user always receives exactly ONE email.    ──
const MAX_RESEND_ATTEMPTS = 3;
const RETRY_DELAYS_MS = [300, 900];
const RETRY_WINDOW_MS = 4500;

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

/** 4xx (except 429) = Resend definitively rejected it — retrying cannot help. */
function isDefinitiveFailure(r: { status?: number }): boolean {
  return typeof r.status === 'number' && r.status >= 400 && r.status < 500 && r.status !== 429;
}

async function sendResetLinkViaResend(to: string, link: string): Promise<boolean> {
  const started = Date.now();
  let lastErr = 'unknown error';
  for (let attempt = 1; attempt <= MAX_RESEND_ATTEMPTS; attempt++) {
    if (attempt > 1 && Date.now() - started > RETRY_WINDOW_MS) break;
    if (attempt > 1) await sleep(RETRY_DELAYS_MS[attempt - 2] ?? 500);
    const result = await sendViaResend({
      to,
      subject: 'Reset your password',
      html: resetEmailHtml(link),
      text: resetEmailText(link),
    });
    if (result.ok) {
      console.log(
        `[forgot-password] reset email sent via Resend${attempt > 1 ? ` (attempt ${attempt})` : ''}`,
      );
      return true;
    }
    lastErr = `HTTP ${result.status ?? 'network'} ${result.error ?? ''}`.trim();
    if (isDefinitiveFailure(result)) break;
  }
  console.warn(
    `[forgot-password] Resend failed after up to ${MAX_RESEND_ATTEMPTS} attempt(s): ${lastErr} — falling back to Supabase email`,
  );
  return false;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed.' });
  }

  const email = (typeof req.body?.email === 'string' ? req.body.email : '').trim().toLowerCase();
  if (!EMAIL_REGEX.test(email)) {
    return res.status(400).json({ error: 'Enter a valid email address.' });
  }

  const now = Date.now();
  pruneCooldowns(now);
  const until = cooldowns.get(email);
  if (until && now < until) {
    const retryAfter = Math.ceil((until - now) / 1000);
    return res.status(429).json({
      error: `Please wait ${retryAfter} second${retryAfter === 1 ? '' : 's'} before requesting another reset email.`,
      retryAfter,
    });
  }
  cooldowns.set(email, now + COOLDOWN_MS);

  const baseUrl = resolveBaseUrl(req);
  // The callback URL is already part of the Supabase redirect allow-list
  // (signup verification uses the same target); it forwards recovery links
  // to the reset page via the PASSWORD_RECOVERY auth event.
  const redirectTo = `${baseUrl}/auth/callback`;

  let delivered = false;
  const resendReady = await isResendFromVerified();

  // ── Primary path: branded email via Resend — tried first, up to 3 times   ──
  // ── (skipped only when the from-domain is not verified in Resend, where   ──
  // ── every send would 403 anyway and would burn the fallback's rate window).──
  if (resendReady) {
    try {
      const admin = createAdminClient();
      const { data, error } = await admin.auth.admin.generateLink({
        type: 'recovery',
        email,
        options: { redirectTo },
      });

      const link = data?.properties?.action_link;
      if (!error && link) {
        delivered = await sendResetLinkViaResend(email, link);
      } else {
        console.warn('[forgot-password] generateLink failed (user may not exist):', error?.message);
      }
    } catch (err) {
      console.error('[forgot-password] Resend path error:', err);
    }
  } else {
    console.log('[forgot-password] Resend from-domain not verified — using Supabase built-in email');
  }

  // ── Fallback: ONLY when Resend did not deliver (never both emails). The   ──
  // ── Same 60s window applies: if generateLink just ran, GoTrue may 429     ──
  // ── here; the in-app "Resend email" button re-enables after 60s then.    ──
  if (!delivered) {
    try {
      const resp = await fetch(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/auth/v1/recover`, {
        method: 'POST',
        headers: {
          apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      if (resp.ok) {
        delivered = true;
        console.log('[forgot-password] reset email sent via Supabase fallback');
      } else {
        const detail = await resp.text().catch(() => '');
        if (resp.status === 429) {
          console.warn(
            '[forgot-password] Supabase fallback rate-limited (generateLink consumed GoTrue\'s 60s email window); user can resend in ~60s',
          );
        } else {
          console.warn('[forgot-password] Supabase fallback failed:', resp.status, detail);
        }
      }
    } catch (err) {
      console.error('[forgot-password] Supabase fallback error:', err);
    }
  }

  // Always succeed from the client's point of view — never reveal whether
  // the account exists (anti-enumeration).
  if (!delivered) {
    console.warn('[forgot-password] no delivery path succeeded for a valid-looking request');
  }
  return res.status(200).json({ ok: true });
}
