import { create } from 'zustand';

export type Theme = 'light' | 'dark' | 'system';

interface ThemeState {
  theme:    Theme;
  resolved: 'light' | 'dark';
  setTheme: (t: Theme) => void;
}

function resolveTheme(theme: Theme): 'light' | 'dark' {
  if (theme === 'system') {
    if (typeof window === 'undefined') return 'light';
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  return theme;
}

function applyTheme(resolved: 'light' | 'dark') {
  if (typeof document === 'undefined') return;
  const root = document.documentElement;
  root.classList.remove('light', 'dark');
  root.classList.add(resolved);
}

export const useThemeStore = create<ThemeState>((set) => ({
  theme:    'system',
  resolved: 'light',

  setTheme: (theme) => {
    const resolved = resolveTheme(theme);
    applyTheme(resolved);
    if (typeof localStorage !== 'undefined') localStorage.setItem('sn_theme', theme);
    set({ theme, resolved });
  },
}));

export function initTheme() {
  const saved = (typeof localStorage !== 'undefined' ? localStorage.getItem('sn_theme') : null) as Theme | null;
  const theme = saved || 'system';
  const resolved = resolveTheme(theme);
  applyTheme(resolved);
  useThemeStore.setState({ theme, resolved });

  // Listen for system theme changes
  if (typeof window !== 'undefined') {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
      const current = useThemeStore.getState().theme;
      if (current === 'system') {
        const r = resolveTheme('system');
        applyTheme(r);
        useThemeStore.setState({ resolved: r });
      }
    });
  }
}

/** Apply a theme WITHOUT persisting it — used for collab mirroring. */
export function applyThemeOnly(theme: Theme) {
  const resolved = resolveTheme(theme);
  applyTheme(resolved);
  useThemeStore.setState({ theme, resolved });
}

/** Restore the user's own saved theme (leaving a collab session). */
export function restoreOwnTheme() {
  const saved = (typeof localStorage !== 'undefined' ? localStorage.getItem('sn_theme') : null) as Theme | null;
  applyThemeOnly(saved || 'system');
}
