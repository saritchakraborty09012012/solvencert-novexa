import React from 'react';
import SettingsShell from '@/components/settings/SettingsShell';

export default function NotificationSettingsPage() {
  return (
    <SettingsShell active="notifications">
      <div className="card p-6 space-y-4">
        <h2 className="font-display font-semibold text-[var(--text-primary)]">Notification Preferences</h2>
        {[
          { label: 'New chapter solutions added',    key: 'chapters' },
          { label: 'Study room invites',             key: 'rooms'    },
          { label: 'Referral updates',               key: 'referral' },
          { label: 'Premium & plan reminders',       key: 'plan'     },
        ].map(({ label, key }) => (
          <div key={key} className="flex items-center justify-between py-2">
            <p className="text-sm text-[var(--text-secondary)]">{label}</p>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" defaultChecked className="sr-only peer" />
              <div className="w-9 h-5 bg-[var(--surface-3)] peer-checked:bg-blue-600 rounded-full transition-colors after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-4" />
            </label>
          </div>
        ))}
      </div>
    </SettingsShell>
  );
}
