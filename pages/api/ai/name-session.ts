import type { NextApiRequest, NextApiResponse } from 'next';
import { nameChatSession } from '@/lib/groq';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const prompt = typeof req.body?.prompt === 'string' ? req.body.prompt.trim() : '';
  if (!prompt) return res.status(400).json({ error: 'Prompt required' });
  try {
    return res.status(200).json({ title: await nameChatSession(prompt) });
  } catch {
    return res.status(200).json({ title: '' });
  }
}
