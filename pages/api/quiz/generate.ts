import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '@/lib/supabase';
import { generateQuiz } from '@/lib/quiz/generator';
import type { QuizConfig, QuizQuestion } from '@/types/quiz';

const guestUsage = new Map<string, { count: number; resetAt: number }>();
const freeUserCooldown = new Map<string, number>();

function getGuestKey(req: NextApiRequest): string {
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'unknown';
  const ua = req.headers['user-agent'] || 'unknown';
  return `${ip}:${ua}`.slice(0, 100);
}

function checkGuestLimit(key: string): { allowed: boolean; remaining: number } {
  const now = Date.now();
  const usage = guestUsage.get(key);
  if (!usage || now > usage.resetAt) {
    guestUsage.set(key, { count: 1, resetAt: now + 86400000 });
    return { allowed: true, remaining: 4 };
  }
  if (usage.count >= 5) return { allowed: false, remaining: 0 };
  usage.count++;
  return { allowed: true, remaining: 5 - usage.count };
}

function checkFreeUserLimit(userId: string): { allowed: boolean; waitSeconds?: number } {
  const now = Date.now();
  const lastCall = freeUserCooldown.get(userId) || 0;
  const elapsed = now - lastCall;
  if (elapsed < 60000) {
    return { allowed: false, waitSeconds: Math.ceil((60000 - elapsed) / 1000) };
  }
  freeUserCooldown.set(userId, now);
  return { allowed: true };
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { config, userId } = req.body as { config: QuizConfig; userId?: string };
  if (!config?.subject || !config?.difficulty) {
    return res.status(400).json({ error: 'Missing required quiz config fields' });
  }

  const numQuestions = config.numQuestions || 10;

  let uid = userId || 'guest';
  let isPremium = false;
  let isGuest = uid.startsWith('guest');

  if (!isGuest && uid !== 'guest') {
    const { data: { user } } = await supabase.auth.getUser();
    if (user) {
      uid = user.id;
      isGuest = false;
      const { data: profile } = await supabase.from('profiles').select('plan').eq('id', user.id).single();
      isPremium = profile?.plan === 'premium' || profile?.plan === 'trial';
    }
  }

  if (!isPremium) {
    if (isGuest || uid === 'guest') {
      const key = getGuestKey(req);
      const { allowed, remaining } = checkGuestLimit(key);
      if (!allowed) {
        return res.status(429).json({
          error: 'Daily quiz limit reached (5/day for guests). Sign up for more!',
          limitReached: true,
          upgrade: true,
        });
      }
      res.setHeader('X-Quiz-Remaining', String(remaining));
    } else {
      const { allowed, waitSeconds } = checkFreeUserLimit(uid);
      if (!allowed) {
        return res.status(429).json({
          error: `Please wait ${waitSeconds}s before generating another quiz.`,
          waitSeconds,
        });
      }
    }
  }

  try {
    const questions = await generateQuiz(
      { ...config, numQuestions },
      isGuest ? undefined : uid
    );

    const attemptId = crypto.randomUUID();

    const insertData: any = {
      id: attemptId,
      user_id: uid,
      class_num: config.classNum,
      subject: config.subject,
      book: config.book,
      book_slug: config.bookSlug,
      chapter: config.chapter || null,
      chapter_slug: config.chapterSlug || null,
      difficulty: config.difficulty,
      total_questions: questions.length,
      time_limit_seconds: questions.length * 60,
      status: 'in_progress',
    };

    const { error: insertErr } = await supabase.from('quiz_attempts').insert(insertData);
    if (insertErr) {
      console.error('Failed to save quiz attempt:', insertErr.message);
    }

    if (questions.length > 0) {
      const { error: qErr } = await supabase.from('quiz_questions').insert(
        questions.map((q: QuizQuestion, i: number) => ({
          id: q.id,
          attempt_id: attemptId,
          question_index: i,
          question_type: q.type,
          question_text: q.text,
          options: q.options || null,
          correct_answer: q.correctAnswer,
          explanation: q.explanation,
          related_concept: q.relatedConcept,
          revision_tip: q.revisionTip,
          difficulty: q.difficulty,
          topic: q.topic,
          marks: q.marks,
        }))
      );
      if (qErr) {
        console.error('Failed to save quiz questions:', qErr.message);
      }
    }

    return res.status(200).json({ questions, attemptId, guest: isGuest });
  } catch (err: any) {
    console.error('Quiz generate error:', err.message || err);
    return res.status(500).json({ error: err.message || 'Failed to generate quiz' });
  }
}
