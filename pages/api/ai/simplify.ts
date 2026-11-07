import type { NextApiRequest, NextApiResponse } from 'next';
import { simplifyAnswer } from '@/lib/groq';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error:'Method not allowed' });
  const { question, answer, subject = 'Mathematics' } = req.body;
  if (!question || !answer) return res.status(400).json({ error:'Question and answer required' });
  try {
    const simplified = await simplifyAnswer(question, answer, subject);
    return res.status(200).json({ simplified });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error:'Simplification service unavailable.' });
  }
}
