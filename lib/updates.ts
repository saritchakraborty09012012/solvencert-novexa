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
  title: string;
  /** One or two sentences shown in the popup and the Settings list. */
  summary: string;
  /** Optional extra detail, shown below the summary. */
  body?: string;
  /** Optional link to the thing that changed. */
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
    id: 'whats-new',
    date: '2026-11-06',
    type: 'feature',
    title: "Introducing What's New",
    summary:
      "From now on, whenever we ship something — a new solution, diagram, subject, feature or fix — you'll see a short note here the first time you visit.",
    body:
      "Signed-in users can revisit the full history any time from Settings → Updates. That list only shows what shipped after you created your account.",
  },
  {
    id: 'sst-part-2',
    date: '2026-10-31',
    type: 'release',
    title: 'Social Science Part II is live',
    summary:
      'Understanding Society Part II is now available in beta — 6 chapters on oceans and life, life on earth, resistance and resilience, governance and public policy, personal finances, and startups.',
    body: 'Every chapter includes complete solutions. Open Social Science and pick Part I or Part II.',
    href: '/class-9/sst/sst-part-2',
    hrefLabel: 'Open Part II',
    beta: true,
  },
  {
    id: 'sst-part-chooser',
    date: '2026-10-31',
    type: 'feature',
    title: 'A clearer Social Science start',
    summary:
      'Opening Social Science now shows a Part I / Part II chooser — just like Hindi and Sanskrit show their books — instead of jumping straight into Part I.',
    href: '/class-9/sst',
    hrefLabel: 'Choose a part',
  },
  {
    id: 'chapter-tab-restore',
    date: '2026-10-31',
    type: 'fix',
    title: 'Chapter tabs stay put',
    summary:
      'Fixed the chapter navigation tabs so a fast click is no longer overwritten when the page restores your last reading position.',
    body: 'You can now switch chapters immediately after opening a solution.',
  },
  {
    id: 'maths-part-2',
    date: '2026-10-30',
    type: 'release',
    title: 'Ganita Manjari Part II is here',
    summary:
      'Chapters 9–14 of the revised Class 9 Maths book are live in beta — propositions, understanding data, algorithms, quadrilaterals, linear equations, and surface area & volume.',
    href: '/class-9/maths/ganita-manjari#part-2',
    hrefLabel: 'Open Part II',
    beta: true,
  },
  {
    id: 'maths-ch9-corrections',
    date: '2026-10-30',
    type: 'fix',
    title: 'Chapter 9 answers matched to the book',
    summary:
      'Reworked the Chapter 9 Think-and-Reflect questions and solutions so the wording and grouping match the NCERT book page by page.',
    href: '/class-9/maths/ganita-manjari/0904ch09/propositions-and-their-converses',
    hrefLabel: 'Open Chapter 9',
  },
  {
    id: 'maths-ch9-fig-9-2',
    date: '2026-10-19',
    type: 'content',
    title: 'New diagram in Maths Chapter 9',
    summary: 'Added a redrawn Fig. 9.2 for Q17, styled to match the textbook diagram.',
    href: '/class-9/maths/ganita-manjari/0904ch09/propositions-and-their-converses',
    hrefLabel: 'Open Chapter 9',
  },
  {
    id: 'settings-pages',
    date: '2026-10-18',
    type: 'feature',
    title: 'Settings, split into clear pages',
    summary:
      'Profile, account, notifications and appearance now each have their own page with a shared sidebar — easier to find and change a setting.',
    href: '/settings/profile',
    hrefLabel: 'Open Settings',
  },
  {
    id: 'theme-controls',
    date: '2026-10-18',
    type: 'feature',
    title: 'Theme and mood controls everywhere',
    summary:
      'System, light and dark themes plus the three interface moods can now be switched from the header on every page.',
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
