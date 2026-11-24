/**
 * Client helper for signup-only Reoon verification.
 * Calls our own server route — the Reoon API key is never sent to the browser.
 */
export type EmailVerificationResult = { ok: true } | { ok: false; error: string };

export async function verifySignupEmail(email: string): Promise<EmailVerificationResult> {
  try {
    const res = await fetch('/api/auth/verify-signup-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });
    const data = await res.json().catch(() => null) as { ok?: boolean; error?: string } | null;
    if (!res.ok || !data?.ok) {
      return { ok: false, error: data?.error || 'Could not verify your email. Please try again.' };
    }
    return { ok: true };
  } catch {
    return { ok: false, error: 'Could not verify your email right now. Please try again.' };
  }
}
