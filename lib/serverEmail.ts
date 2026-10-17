/**
 * Server-only transactional email helper backed by the Resend HTTP API
 * (same raw-fetch approach as pages/api/contact.ts — no SDK).
 *
 * Requires RESEND_API_KEY in the environment. The `from` address must sit on a
 * domain verified in Resend (EMAIL_FROM, defaulting to no-reply@<CONTACT_EMAIL domain>).
 */

export interface SendEmailInput {
  to: string;
  subject: string;
  html: string;
  text: string;
  from?: string;
  replyTo?: string;
}

export interface SendEmailResult {
  ok: boolean;
  status?: number;
  error?: string;
}

export function defaultFromAddress(): string {
  if (process.env.EMAIL_FROM) return process.env.EMAIL_FROM;
  const contact = process.env.CONTACT_EMAIL || '';
  const domain = contact.includes('@') ? contact.split('@')[1] : '';
  return domain ? `SolveNCERT <no-reply@${domain}>` : 'SolveNCERT <no-reply@resend.dev>';
}

export async function sendViaResend(input: SendEmailInput): Promise<SendEmailResult> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return { ok: false, error: 'RESEND_API_KEY is not configured' };

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: input.from || defaultFromAddress(),
        to: [input.to],
        ...(input.replyTo ? { reply_to: [input.replyTo] } : {}),
        subject: input.subject,
        html: input.html,
        text: input.text,
      }),
    });

    if (!res.ok) {
      let msg = `Resend returned HTTP ${res.status}`;
      try {
        const body = await res.json();
        if (body?.message) msg = body.message;
      } catch { /* keep generic message */ }
      return { ok: false, status: res.status, error: msg };
    }
    return { ok: true, status: res.status };
  } catch (err) {
    return { ok: false, error: err instanceof Error ? err.message : String(err) };
  }
}
