/**
 * ─────────────────────────────────────────────────────────────────────────────
 * What's New — the site's update log
 * ─────────────────────────────────────────────────────────────────────────────
 * This is a *code-defined* list, not a database table. To announce a front-end
 * change (a single question, a new diagram, a correction, a new feature, a new
 * chapter/book/part/class/subject, …) add a new entry at the TOP of `UPDATES`
 * with a fresh unique `id` and the date it goes live.
 *
 * IMPORTANT — for question-level updates (any single question, diagram or
 * answer change), the `title` and `summary` MUST name the exact location:
 * section/exercise name + question number, e.g. "Think & Reflect, Page 8,
 * Q1 in Maths Ch10". For Think & Reflect / Pause and Ponder boxes in Maths
 * and Science, ALWAYS include the book page number too. Generic summaries
 * like "questions now match the book" are not allowed.
 *
 * Two things read this list:
 *   1. components/features/WhatsNewPopup.tsx — the dismissible popup shown to
 *      every visitor (guest, free, premium) on their first visit after an update.
 *   2. pages/settings/updates.tsx — the Updates page inside Settings, which only
 *      shows entries dated on/after the logged-in user's signup date.
 *
 * Keep `UPDATES` sorted newest-first. Dates are plain `YYYY-MM-DD` strings so
 * they compare correctly and never depend on the server's timezone.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export type UpdateType = 'feature' | 'content' | 'fix' | 'release';

export interface UpdateEntry {
  /** Stable unique id. Changing it makes the popup appear again — use a new id for a new update. */
  id: string;
  /** Date the update went live, `YYYY-MM-DD`. */
  date: string;
  type: UpdateType;
  /** Short headline, ideally under 40 characters. */
  title: string;
  /** One short value point (about 90 characters max), shown in the popup and Settings. */
  summary: string;
  /** Optional extra detail. Keep it short; the popup shows one update at a time. */
  body?: string;
  /**
   * Link to the thing that changed. Append `#anchor` to land exactly on a
   * question or section, e.g.
   * `/class-9/maths/ganita-manjari/0904ch09/...#q-ex9.1-q17`.
   */
  href?: string;
  hrefLabel?: string;
  /** Mark Part II books so the UI can show a Part II tag. */
  partTwo?: boolean;
}

export const UPDATE_TYPE_LABEL: Record<UpdateType, string> = {
  feature: 'New feature',
  content: 'New content',
  fix: 'Correction',
  release: 'Release',
};

/** Newest first. Add new updates at the top. */
export const UPDATES: UpdateEntry[] = [
  {
    id: 'ai-chat-history-saved',
    date: '2026-11-24',
    type: 'feature',
    title: 'Your AI chats are saved now',
    summary: 'AI chats and question follow-ups stay for 30 days and open on any of your devices.',
    body: 'Tap the history button in the AI window to see your past chats and follow-ups. Rename them, download as PDF, or delete them any time. Saved chats are for signed-in users and sync across your phone, tablet and computer. Free accounts keep them for up to 30 days from the last message.',
    href: '/settings/ai',
    hrefLabel: 'AI Settings',
  },
  {
    id: 'missing-book-figures-added',
    date: '2026-11-20',
    type: 'content',
    title: 'Missing Pictures Now Added',
    summary: 'Errors corrected and missing questions and diagrams added — everything now matches the book.',
    body: 'Social Science Part II and Skill Education questions now show the maps, graphs, tables and diagrams printed beside them in the book. 61 book figures were added.',
    href: '/class-9/sst/sst-part-2',
    hrefLabel: 'Open Solutions',
  },
  {
    id: 'all-subjects-solutions-better',
    date: '2026-11-19',
    type: 'content',
    title: 'Solutions Updated Across All Subjects',
    summary: 'Errors corrected and missing questions added — everything now matches the book.',
    body: 'Every subject was checked page by page against the NCERT books. Wrong wordings, missing questions and diagrams were fixed across Maths, Science, Social Science, Hindi, Sanskrit, IT, Arts and Skill Education.',
    href: '/answers',
    hrefLabel: 'See all Solutions',
  },
  {
    id: 'arts-solutions-better',
    date: '2026-11-19',
    type: 'content',
    title: 'Arts Solutions Improved',
    summary: 'Errors corrected and missing questions added — everything now matches the book',
    body: 'Music, dance, theatre and visual arts questions were checked again against the book. Four missing music questions were added and wrong wordings were fixed.',
    href: '/class-9/arts/madhurima',
    hrefLabel: 'Open Arts',
  },
  {
    id: 'more-subjects-solutions-better',
    date: '2026-11-19',
    type: 'content',
    title: 'More Subject Solutions Improved',
    summary: 'Errors corrected and missing questions added — everything now matches the book.',
    body: 'Social Science Part II, Sanskrit (Sharda and Iravati) and IT solutions were checked again against the book. Wrong wordings and dropped questions were fixed.',
    href: '/class-9/sst/sst-part-2',
    hrefLabel: 'Open Solutions',
  },
  {
    id: 'sst-it-solutions-better',
    date: '2026-11-18',
    type: 'content',
    title: 'Social Science & IT Solutions Improved',
    summary: 'Errors corrected and missing questions and diagrams added — everything now matches the book.',
    body: 'Questions in Social Science Part I and IT Part B were checked again against the book. Wrong wordings, missing options and dropped figures were fixed.',
    href: '/class-9/sst/understanding-society-india-and-beyond',
    hrefLabel: 'Open Social Science',
  },
  {
    id: 'science-exact-wording-figures',
    date: '2026-11-18',
    type: 'content',
    title: 'Science Solutions Are Even Better Now',
    summary: 'Errors corrected and missing questions and diagrams added — everything now matches the book.',
    body: 'Answer keys checked again, wrong options fixed, and all the pictures, graphs and tables from the book are now shown with the questions.',
    href: '/class-9/science/exploration',
    hrefLabel: 'Open Science',
  },
  {
    id: 'maths-part1-think-reflect-added',
    date: '2026-11-18',
    type: 'content',
    title: 'Maths Part I Solutions Improved',
    summary: 'Errors corrected and missing questions and diagrams added — everything now matches the book.',
    body: 'All the Think and Reflect questions from the book are now included in their chapters, with the right wording and diagrams.',
    href: '/class-9/maths/ganita-manjari/0904ch01/orienting-yourself-the-use-of-coordinates',
    hrefLabel: 'See Chapter 1',
  },
  {
    id: 'maths-part2-think-reflect-complete',
    date: '2026-11-18',
    type: 'content',
    title: 'Maths Chapters 12 & 13 Are Better Now',
    summary: 'Errors corrected and missing questions and diagrams added — everything now matches the book.',
    body: 'All the missing reflection questions and their diagrams are now on the site. Wrong and repeated questions were removed.',
    href: '/class-9/maths/ganita-manjari/0904ch13/two-variables-one-line/ex13.reflect',
    hrefLabel: 'See Chapter 13',
  },
  {
    id: 'maths-part2-ch12-ch14-book-exact',
    date: '2026-11-17',
    type: 'content',
    title: 'Maths Chapters 12–14 Improved',
    summary: 'Errors corrected and missing questions and diagrams added — everything now matches the book.',
    body: 'All the questions and diagrams from the book are now in place. Reflection questions, missing pictures and starred questions were fixed.',
    href: '/class-9/maths/ganita-manjari/0904ch12/quadrilaterals/ex12.end',
    hrefLabel: 'See Chapter 12',
  },
  {
    id: 'maths-ch10-ex10-4-charts-visible',
    date: '2026-11-15',
    type: 'fix',
    title: 'Charts visible again in Exercise Set 10.4, Ch10',
    summary: 'Q1 IUCN stacked column chart and Q2 both stacked-bar charts were showing as blank space — they render now.',
    href: '/class-9/maths/ganita-manjari/0904ch10/how-quantities-combine-understanding-data/ex10.4#q-ex10.4-q1',
    hrefLabel: 'View Q1',
  },
  {
    id: 'settings-saved-list',
    date: '2026-11-13',
    type: 'feature',
    title: 'Your Saved solutions are back',
    summary: 'Everything you kept with the Save button now has a list in Settings — tap one to jump straight to it.',
    href: '/settings/saved',
    hrefLabel: 'Open Saved',
  },
  {
    id: 'maths-ch10-exercise-10-4',
    date: '2026-11-11',
    type: 'content',
    title: 'Exercise Set 10.4 fixed in Ch10',
    summary: 'Q1 IUCN chart and Q2 table + both stacked-bar charts now on the page.',
    href: '/class-9/maths/ganita-manjari/0904ch10/how-quantities-combine-understanding-data/ex10.4#q-ex10.4-q1',
    hrefLabel: 'View questions',
  },
  {
    id: 'maths-ch10-exercise-10-3',
    date: '2026-11-11',
    type: 'content',
    title: 'Exercise Set 10.3 fixed in Ch10',
    summary: 'Q1–Q8 now match the book, with the Q3 options and Q6–Q8 tables (pp. 15–18).',
    href: '/class-9/maths/ganita-manjari/0904ch10/how-quantities-combine-understanding-data/ex10.3#q-ex10.3-q6',
    hrefLabel: 'View questions',
  },
  {
    id: 'page-loader-holds-until-loaded',
    date: '2026-11-11',
    type: 'fix',
    title: 'Page loader now waits for the page',
    summary: 'The solar loader stays until the next page has actually painted.',
    body: 'It now appears only if a page takes more than a moment, then stays on screen while the next page loads in the background and leaves the instant that page is ready. A “Loading” label with three bouncing dots sits under the planets.',
  },
  {
    id: 'exercise-pages',
    date: '2026-11-08',
    type: 'feature',
    title: 'Every exercise has its own page',
    summary: 'Open any exercise or section as a dedicated page now.',
    href: '/class-9/maths/ganita-manjari/0904ch10/how-quantities-combine-understanding-data/ex10.1',
    hrefLabel: 'View an example',
  },
  {
    id: 'maths-ch10-exercise-10-2',
    date: '2026-11-08',
    type: 'content',
    title: 'Exercise Set 10.2 Q1 fixed in Ch10',
    summary: 'Savitri Kashmiri question now has the book sub-parts (i)–(iv).',
    href: '/class-9/maths/ganita-manjari/0904ch10/how-quantities-combine-understanding-data#q-ex10.2-q1',
    hrefLabel: 'View question',
  },
  {
    id: 'maths-ch10-exercise-10-1',
    date: '2026-11-08',
    type: 'content',
    title: 'Exercise Set 10.1 fixed in Ch10',
    summary: 'Q1–Q5 now match the book wordings, with full answers.',
    href: '/class-9/maths/ganita-manjari/0904ch10/how-quantities-combine-understanding-data#q-ex10.1-q1',
    hrefLabel: 'View questions',
  },
  {
    id: 'maths-ch10-reflect-zakir',
    date: '2026-11-08',
    type: 'content',
    title: 'Think & Reflect, Page 30 fixed in Ch10',
    summary: "Zakir's week Q1–Q3 now match the book, with full answers.",
    href: '/class-9/maths/ganita-manjari/0904ch10/how-quantities-combine-understanding-data#q-ex10.reflect-q6',
    hrefLabel: 'View questions',
  },
  {
    id: 'maths-ch10-reflect-strip-say',
    date: '2026-11-08',
    type: 'content',
    title: 'Think & Reflect, Page 28 fixed in Ch10',
    summary: "What Can A Strip Say? Q1 now matches the book, with the answer.",
    href: '/class-9/maths/ganita-manjari/0904ch10/how-quantities-combine-understanding-data#q-ex10.reflect-q5',
    hrefLabel: 'View question',
  },
  {
    id: 'maths-ch10-reflect-time-use',
    date: '2026-11-08',
    type: 'content',
    title: 'Think & Reflect, Page 27 fixed in Ch10',
    summary: 'Time Use Survey Q1–Q4 now match the book, with full answers.',
    href: '/class-9/maths/ganita-manjari/0904ch10/how-quantities-combine-understanding-data#q-ex10.reflect-q4',
    hrefLabel: 'View questions',
  },
  {
    id: 'maths-ch10-reflect-stacked-bars',
    date: '2026-11-08',
    type: 'content',
    title: 'Think & Reflect, Page 26 fixed in Ch10',
    summary: 'Stacked bars Q1–Q4 now match the book, with full answers.',
    href: '/class-9/maths/ganita-manjari/0904ch10/how-quantities-combine-understanding-data#q-ex10.reflect-q3',
    hrefLabel: 'View questions',
  },
  {
    id: 'maths-ch10-reflect-answer',
    date: '2026-11-08',
    type: 'content',
    title: 'Think & Reflect, Page 8 answer in Ch10',
    summary: 'Why Method 1 fails (Q1) — now added with the full answer.',
    href: '/class-9/maths/ganita-manjari/0904ch10/how-quantities-combine-understanding-data#q-ex10.reflect-q1',
    hrefLabel: 'View answer',
  },
  {
    id: 'simplify-button',
    date: '2026-11-07',
    type: 'feature',
    title: 'Simplify button on every solution',
    summary: 'Tap Simplify to get any solution explained in the simplest words.',
    href: '/class-9/maths/ganita-manjari/0904ch05/im-up-and-down-and-round-and-round#q-ex5.eoc-q2',
    hrefLabel: 'Try it',
  },
  {
    id: 'maths-ch5-diagrams',
    date: '2026-11-06',
    type: 'content',
    title: 'Diagrams in Maths Chapter 5',
    summary: 'Circle diagrams added to Chapter 5 solutions.',
    href: '/class-9/maths/ganita-manjari/0904ch05/im-up-and-down-and-round-and-round#q-ex5.eoc-q2',
    hrefLabel: 'View diagrams',
  },
  {
    id: 'whats-new',
    date: '2026-11-06',
    type: 'feature',
    title: "What's New is here",
    summary: 'A quick popup now tells you what changed on SolveNCERT.',
    href: '/settings/updates',
    hrefLabel: 'See all updates',
  },
  {
    id: 'sst-part-2',
    date: '2026-10-31',
    type: 'release',
    title: 'SST Part II is live',
    summary: 'Social Science Part II solutions are now available.',
    href: '/class-9/sst/sst-part-2',
    hrefLabel: 'View Part II',
    partTwo: true,
  },
  {
    id: 'sst-part-chooser',
    date: '2026-10-31',
    type: 'feature',
    title: 'Pick your SST part',
    summary: 'Social Science now opens with a Part I / Part II chooser.',
    href: '/class-9/sst',
    hrefLabel: 'Choose a part',
  },
  {
    id: 'chapter-tab-restore',
    date: '2026-10-31',
    type: 'fix',
    title: 'Chapter tabs fixed',
    summary: 'Switching chapters right after opening a solution now works.',
  },
  {
    id: 'maths-part-2',
    date: '2026-10-30',
    type: 'release',
    title: 'Maths Part II is live',
    summary: 'Ganita Manjari Part II solutions are now available.',
    href: '/class-9/maths/ganita-manjari#part-2',
    hrefLabel: 'View Part II',
  },
  {
    id: 'maths-ch9-corrections',
    date: '2026-10-30',
    type: 'fix',
    title: 'Chapter 9 answers updated',
    summary: 'Think-and-Reflect answers now match the NCERT book.',
    href: '/class-9/maths/ganita-manjari/0904ch09/propositions-and-their-converses',
    hrefLabel: 'View Chapter 9',
  },
  {
    id: 'maths-ch9-fig-9-2',
    date: '2026-10-19',
    type: 'content',
    title: 'New diagram in Maths Ch 9',
    summary: 'Fig. 9.2 added for Q17, redrawn to match the textbook.',
    href: '/class-9/maths/ganita-manjari/0904ch09/propositions-and-their-converses#q-ex9.1-q17',
    hrefLabel: 'View Q17',
  },
  {
    id: 'settings-pages',
    date: '2026-10-18',
    type: 'feature',
    title: 'Settings, split into pages',
    summary: 'Profile, account, notifications and appearance now have their own pages.',
    href: '/settings/profile',
    hrefLabel: 'Open Settings',
  },
  {
    id: 'theme-controls',
    date: '2026-10-18',
    type: 'feature',
    title: 'Theme controls everywhere',
    summary: 'Switch theme and mood from the header on every page.',
  },
];

/** The most recent update, or null when the log is empty. */
export function latestUpdate(): UpdateEntry | null {
  return UPDATES[0] ?? null;
}

/**
 * Updates dated on/after a signup timestamp. `createdAt` may be a full ISO
 * timestamp (Supabase) or a plain `YYYY-MM-DD`; null/undefined means "no
 * cutoff" (a guest, or a profile that has not loaded yet).
 */
export function getUpdatesForSignup(createdAt: string | null | undefined): UpdateEntry[] {
  if (!createdAt) return UPDATES;
  const signupDay = createdAt.slice(0, 10);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(signupDay)) return UPDATES;
  return UPDATES.filter((u) => u.date >= signupDay);
}

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

/** Deterministic `6 Nov 2026` formatting (safe for SSR and hydration). */
export function formatUpdateDate(iso: string): string {
  const [year, month, day] = iso.slice(0, 10).split('-').map(Number);
  if (!year || !month || !day || month < 1 || month > 12) return iso;
  return `${day} ${MONTHS[month - 1]} ${year}`;
}
