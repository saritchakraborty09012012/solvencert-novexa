import React, { useState } from 'react';
import { Check, Monitor, Moon, Sun } from 'lucide-react';
import SettingsShell from '@/components/settings/SettingsShell';
import { useThemeStore } from '@/store/themeStore';
import { useUIStore } from '@/store/uiStore';
import { cn } from '@/utils/helpers';
import FadeNotice, { LIGHT_THEME_NOTICE } from '@/components/ui/FadeNotice';

// Same Moods (UI) list as the header — Header.tsx / SiteHeader.tsx keep their own copies.
const UI_OPTIONS = [
  { id: 'ui1' as const, label: 'UI-1', name: 'Classic Nerdy',     desc: 'Clean, academic & focused' },
  { id: 'ui2' as const, label: 'UI-2', name: 'Aesthetic Vintage', desc: 'Warm, timeless & elegant' },
  { id: 'ui3' as const, label: 'UI-3', name: 'Signature Noir',    desc: 'Bold, cinematic & premium' },
];

export default function AppearanceSettingsPage() {
  const { theme, setTheme } = useThemeStore();
  const { ui, setUi } = useUIStore();
  const [themeNotice, setThemeNotice] = useState<string | null>(null);

  const flashThemeNotice = (msg: string) => {
    setThemeNotice(msg);
    window.setTimeout(() => setThemeNotice(null), 3200);
  };

  return (
    <SettingsShell active="appearance">
      <div className="card p-6">
        <h2 className="font-display font-semibold text-[var(--text-primary)] mb-1">Appearance</h2>
        <p className="text-[15px] text-[var(--text-secondary)] mb-6">
          Same controls as the header — changes apply on all pages.
        </p>

        {/* Moods (UI) — mirrors the header Moods dropdown */}
        <p className="text-xs font-bold uppercase tracking-widest text-[var(--text-secondary)] mb-2.5">Mood</p>
        <div className="grid sm:grid-cols-3 gap-2 mb-7">
          {UI_OPTIONS.map((opt) => (
            <button
              key={opt.id}
              onClick={() => setUi(opt.id)}
              className={cn(
                'text-left px-3.5 py-3.5 rounded-xl border transition-all',
                ui === opt.id
                  ? 'border-[var(--brand-primary)] bg-[var(--surface-2)]'
                  : 'border-[var(--border)] bg-[var(--surface-1)] hover:border-[var(--text-muted)]',
              )}
            >
              <span className="flex items-center justify-between gap-2">
                <span className="text-[15px] font-semibold text-[var(--text-primary)]">{opt.name}</span>
                {ui === opt.id && <Check size={15} className="text-[var(--brand-primary)] flex-shrink-0" />}
              </span>
              <span className="block text-xs text-[var(--text-secondary)] mt-1">{opt.desc}</span>
            </button>
          ))}
        </div>

        {/* Theme — mirrors the header System / Light / Dark buttons */}
        <p className="text-xs font-bold uppercase tracking-widest text-[var(--text-secondary)] mb-2.5">Theme</p>
        <div className="inline-flex items-center gap-1 p-1.5 rounded-xl bg-[var(--surface-1)] border border-[var(--border)]">
          {([
            { id: 'system' as const, icon: <Monitor size={15} />, label: 'System' },
            { id: 'light'  as const, icon: <Sun     size={15} />, label: 'Light'  },
            { id: 'dark'   as const, icon: <Moon    size={15} />, label: 'Dark'   },
          ]).map(({ id, icon, label }) => {
            const blocked = id === 'light' && ui === 'ui3';
            return (
              <button
                key={id}
                onClick={() => (blocked ? flashThemeNotice(LIGHT_THEME_NOTICE) : setTheme(id))}
                title={blocked ? 'Not supported in Signature Noir' : label}
                className={cn(
                  'flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-semibold transition-all',
                  blocked && 'opacity-40 cursor-not-allowed',
                  theme === id
                    ? 'bg-[var(--surface-3)] text-[var(--brand-primary)] shadow-inner'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-2)]',
                )}
              >
                {icon}{label}
              </button>
            );
          })}
        </div>
        <FadeNotice text={themeNotice} />
      </div>
    </SettingsShell>
  );
}
