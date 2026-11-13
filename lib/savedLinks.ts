import { CLASS_9_SUBJECTS } from '@/lib/content';

/**
 * ─────────────────────────────────────────────────────────────────────────────
 * Saved (bookmarked) solution links
 * ─────────────────────────────────────────────────────────────────────────────
 * When a user presses Save on a question, `bookmarks` stores the subject,
 * chapter code/slug and a `question_id` of `${exerciseOrSectionId}-${questionId}`.
 * Question blocks on the chapter page carry the DOM id `q-<question_id>`, so a
 * saved row maps to "open the chapter page and scroll to that exact solution"
 * simply by appending `#q-${question_id}` — HashScrollHandler does the scrolling.
 */

/** Canonical chapter route for a saved row's subject/chapter. */
export function savedChapterHref(subjectSlug: string, chapterCode: string, chapterSlug: string): string {
  // Books with their own hand-built routes.
  if (subjectSlug === 'science') return `/class-9/science/exploration/${chapterCode}/${chapterSlug}`;
  if (subjectSlug === 'english') return `/class-9/english/kaveri/${chapterCode}/${chapterSlug}`;
  // Ganita Manjari — both parts live under the same book route.
  if (subjectSlug === 'maths') return `/class-9/maths/ganita-manjari/${chapterCode}/${chapterSlug}`;

  // Some subjects (e.g. IT) share one slug across parts — pick the part that
  // actually contains this chapter code.
  const candidates = CLASS_9_SUBJECTS.filter(s => s.slug === subjectSlug);
  const subject = candidates.length > 1
    ? candidates.find(s => s.chapters.some(c => c.code === chapterCode)) || candidates[0]
    : candidates[0];
  const bookSlug = subject?.bookSlug || subjectSlug;
  return `/class-9/${subjectSlug}/${bookSlug}/${chapterCode}/${chapterSlug}`;
}

export interface SavedLinkInput {
  subject: string;
  chapter_code: string;
  chapter_slug: string;
  question_id: string;
}

/** Full link (chapter URL + question anchor) that reopens a saved solution. */
export function savedQuestionHref(row: SavedLinkInput): string {
  const base = savedChapterHref(row.subject, row.chapter_code, row.chapter_slug);
  return row.question_id ? `${base}#q-${row.question_id}` : base;
}
