/**
 * ─────────────────────────────────────────────────────────────────────────────
 * What's New — the site's update log
 * ─────────────────────────────────────────────────────────────────────────────
 * This is a *code-defined* list, not a database table. To announce a front-end
 * change (a single question, a new diagram, a correction, a new feature, a new
 * chapter/book/part/class/subject, …) add a new entry at the TOP of `UPDATES`
 * with a fresh unique `id` and the date it goes live.
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
  /** Mark beta features/books so the UI can show a Beta chip. */
  beta?: boolean;
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
    id: 'maths-ch10-reflect-answer',
    date: '2026-11-08',
    type: 'content',
    title: 'Think & Reflect answer in Maths Ch10',
    summary: 'Why Method 1 fails — now added with the full answer.',
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
    summary: 'Social Science Part II solutions are now available in beta.',
    href: '/class-9/sst/sst-part-2',
    hrefLabel: 'View Part II',
    beta: true,
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
    summary: 'Ganita Manjari Part II solutions are now available in beta.',
    href: '/class-9/maths/ganita-manjari#part-2',
    hrefLabel: 'View Part II',
    beta: true,
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
