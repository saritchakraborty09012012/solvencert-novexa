import type { NextApiRequest, NextApiResponse } from 'next';
import { createAdminClient } from '@/lib/supabase';
import { SITE_NAME } from '@/lib/site';

const MAX_MESSAGE_LENGTH = 4000;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed.' });
  }

  // Auth: verify the caller's session token so their email/name can be read
  // server-side. The client can never dictate who they are.
  const authHeader = req.headers.authorization || '';
  const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7).trim() : '';
  if (!token) {
    return res.status(401).json({ error: 'Please log in to contact us.' });
  }

  const admin = createAdminClient();
  const { data, error } = await admin.auth.getUser(token);
  if (error || !data?.user) {
    return res.status(401).json({ error: 'Your session has expired. Please log in again.' });
  }
  const user = data.user;

  // Message comes from the client (content only).
  const message = (typeof req.body?.message === 'string' ? req.body.message : '').trim();
  if (!message) {
    return res.status(400).json({ error: 'Message cannot be empty.' });
  }
  if (message.length > MAX_MESSAGE_LENGTH) {
    return res.status(400).json({ error: `Message must be ${MAX_MESSAGE_LENGTH} characters or fewer.` });
  }

  // Registered details from the server-side profiles table.
  const { data: profile } = await admin.from('profiles').select('full_name, email').eq('id', user.id).single();
  const userName = profile?.full_name || user.user_metadata?.full_name || 'SolveNCERT User';
  const userEmail = profile?.email || user.email || '';
  if (!userEmail) {
    return res.status(500).json({ error: 'Could not find your registered email. Please contact us another way.' });
  }

  const product = SITE_NAME || 'SolveNCERT';
  const destination = process.env.CONTACT_EMAIL;
  const apiKey = process.env.RESEND_API_KEY;
  if (!destination || !apiKey) {
    return res.status(500).json({ error: 'Contact form is not configured yet. Please try again later.' });
  }

  const emailBody = [
    `Product: ${product}`,
    `User Name: ${userName}`,
    `Registered Email: ${userEmail}`,
    '',
    message,
  ].join('\n');

  try {
    const resendRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: `SolveNCERT <no-reply@${destination.split('@')[1]}>`,
        to: [destination],
        reply_to: [userEmail],
        subject: `[Contact Us] ${product} — ${userName}`,
        text: emailBody,
      }),
    });
    if (!resendRes.ok) throw new Error(`Resend returned HTTP ${resendRes.status}`);
  } catch (err) {
    console.error('[contact] send failed:', err);
    return res.status(502).json({ error: "We couldn't send your message right now. Please try again later." });
  }

  return res.status(200).json({ ok: true, message: "Message sent! We'll get back to you soon." });
}