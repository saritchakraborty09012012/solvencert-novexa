import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateInitials(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export function generateReferralCode(userId: string): string {
  return 'SN' + userId.slice(0, 6).toUpperCase();
}

export function formatDate(date: string | Date): string {
  return new Intl.DateTimeFormat('en-IN', {
    day: '2-digit', month: 'short', year: 'numeric',
  }).format(new Date(date));
}

export function slugify(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

export function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.includes('.com');
}

// Date of birth is compulsory for NEW email sign-ups (non-OAuth) from this
// change onwards — existing users are never asked again. Returns an error
// message, or null when the value is acceptable.
export function validateDob(dob: string): string | null {
  if (!dob) return 'Date of birth is required.';
  const t = new Date(dob).getTime();
  if (Number.isNaN(t)) return 'Enter a valid date of birth.';
  if (t > Date.now()) return 'Date of birth cannot be in the future.';
  if (t < new Date('1900-01-01').getTime()) return 'Enter a valid date of birth.';
  return null;
}

export function validateUTR(utr: string): boolean {
  return /^\d{12}$/.test(utr);
}

export function maskEmail(email: string): string {
  const [user, domain] = email.split('@');
  return user.slice(0, 2) + '***@' + domain;
}

const INITIALS_COLORS = [
  ['#1d4ed8', '#dbeafe'],
  ['#7c3aed', '#ede9fe'],
  ['#be123c', '#ffe4e6'],
  ['#065f46', '#d1fae5'],
  ['#92400e', '#fef3c7'],
  ['#1e40af', '#dbeafe'],
  ['#6b21a8', '#f3e8ff'],
  ['#0f766e', '#ccfbf1'],
];

export function getInitialsColor(initials: string): { bg: string; fg: string } {
  const idx = (initials.charCodeAt(0) + (initials.charCodeAt(1) || 0)) % INITIALS_COLORS.length;
  const [fg, bg] = INITIALS_COLORS[idx];
  return { bg, fg };
}

/**
 * Returns the subject-themed background image for a solution page, or null when
 * there is no matching image. `subjectId` is the content subject id (e.g. 'maths',
 * 'advanced-maths', 'sst', 'it-part-a'); `chapterNumber` disambiguates SST branches.
 */
export function getSubjectBackground(subjectId: string, chapterNumber?: number): string | null {
  const base = '/subject-logos';
  switch (subjectId) {
    case 'maths':            return `${base}/maths.png`;
    case 'advanced-maths':   return `${base}/advanced-mathematics.png`;
    case 'advanced-science': return `${base}/advanced-science.png`;
    case 'science':          return `${base}/science.png`;
    case 'english':          return `${base}/english.png`;
    case 'hindi':
    case 'hindi-reva':       return `${base}/hindi.png`;
    case 'sanskrit-sharda':
    case 'sanskrit-reva':    return `${base}/sanskrit.png`;
    case 'it-part-a':        return `${base}/it-part-a.png`;
    case 'it-part-b':        return `${base}/it-part-b.png`;
    case 'sst': {
      if (chapterNumber === 1 || chapterNumber === 8 || chapterNumber === 9) return `${base}/economics.png`;
      if (chapterNumber === 2 || chapterNumber === 3)                        return `${base}/geography.png`;
      if (chapterNumber === 4 || chapterNumber === 5)                        return `${base}/history.png`;
      if (chapterNumber === 6 || chapterNumber === 7)                        return `${base}/political-science.png`;
      return null;
    }
    default: return null;
  }
}
