import { create } from 'zustand';

export type UI = 'ui1' | 'ui2' | 'ui3';

interface UIState {
  ui:    UI;
  setUi: (ui: UI) => void;
}

const UIS = ['ui1', 'ui2', 'ui3'] as const;

function applyUI(ui: UI) {
  if (typeof document === 'undefined') return;
  const root = document.documentElement;
  root.setAttribute('data-ui', ui);
  // UI-3 (Signature Noir) is a dark-only interface: the light/dark theme
  // must never leak into it. Force the dark class while UI-3 is active,
  // and restore the user's real theme when leaving it.
  if (ui === 'ui3') {
    root.classList.remove('light');
    root.classList.add('dark');
  } else {
    let resolved: 'light' | 'dark' = 'light';
    try {
      const t = localStorage.getItem('sn_theme') || 'system';
      resolved = t === 'dark' ? 'dark' : t === 'light' ? 'light'
        : (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    } catch { /* keep default */ }
    root.classList.remove('light', 'dark');
    root.classList.add(resolved);
  }
}

export const useUIStore = create<UIState>((set) => ({
  ui: 'ui3',

  setUi: (ui) => {
    applyUI(ui);
    if (typeof localStorage !== 'undefined') localStorage.setItem('sn_ui', ui);
    set({ ui });
  },
}));

export function initUI() {
  const saved = (typeof localStorage !== 'undefined' ? localStorage.getItem('sn_ui') : null) as UI | null;
  const ui = saved && (UIS as readonly string[]).includes(saved) ? saved : 'ui3';
  applyUI(ui);
  useUIStore.setState({ ui });
}

/** Apply a UI variant WITHOUT persisting it — used for collab mirroring. */
export function applyUIOnly(ui: UI) {
  applyUI(ui);
  useUIStore.setState({ ui });
}

/** Restore the user's own saved UI (leaving a collab session). */
export function restoreOwnUI() {
  const saved = (typeof localStorage !== 'undefined' ? localStorage.getItem('sn_ui') : null) as UI | null;
  applyUIOnly(saved && (UIS as readonly string[]).includes(saved) ? saved : 'ui3');
}
