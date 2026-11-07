import React from 'react';
import { Loader2 } from 'lucide-react';

/** Official Google "G" mark (four-colour). */
export function GoogleLogo({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true">
      <path fill="#FFC107" d="M43.6 20.1H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 8 3l5.7-5.7C34.3 6.1 29.4 4 24 4 13 4 4 13 4 24s9 20 20 20 20-9 20-20c0-1.3-.1-2.6-.4-3.9z" />
      <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 8 3l5.7-5.7C34.3 6.1 29.4 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
      <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z" />
      <path fill="#1976D2" d="M43.6 20.1H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C36.9 39.2 44 34 44 24c0-1.3-.1-2.6-.4-3.9z" />
    </svg>
  );
}

interface Props {
  label: string;
  loading: boolean;
  disabled?: boolean;
  onClick: () => void;
}

/**
 * Google sign-in button, styled with the site's theme variables so it
 * matches the AuthModal design system in every theme/mood.
 */
export default function GoogleButton({ label, loading, disabled, onClick }: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={loading || disabled}
      className="w-full flex items-center justify-center gap-3 px-4 py-2.5 rounded-xl border border-[var(--border)] bg-[var(--surface-1)] hover:bg-[var(--surface-2)] text-sm font-semibold text-[var(--text-primary)] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
    >
      {loading ? (
        <Loader2 size={16} className="animate-spin" />
      ) : (
        <GoogleLogo size={18} />
      )}
      {label}
    </button>
  );
}
