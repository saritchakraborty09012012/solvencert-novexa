import React, { useRef, useState } from 'react';
import { Camera, Loader2, Save } from 'lucide-react';
import SettingsShell from '@/components/settings/SettingsShell';
import { useAuthStore } from '@/store/authStore';
import { supabase } from '@/lib/supabase';
import { generateInitials } from '@/utils/helpers';
import toast from 'react-hot-toast';

export default function ProfileSettingsPage() {
  const { user, fetchProfile } = useAuthStore();
  const [loading, setLoading] = useState(false);

  const [fullName, setFullName] = useState(user?.full_name || '');
  const [phone,    setPhone]    = useState(user?.phone     || '');
  const [dob,      setDob]      = useState(user?.dob       || '');
  const [bio,      setBio]      = useState(user?.bio       || '');

  const fileRef = useRef<HTMLInputElement>(null);

  async function saveProfile() {
    if (!user) return;
    setLoading(true);
    try {
      const initials = generateInitials(fullName);
      const { error } = await supabase
        .from('profiles')
        .update({ full_name: fullName, phone, dob, bio, initials, updated_at: new Date().toISOString() })
        .eq('id', user.id);
      if (error) throw error;
      await fetchProfile(user.id);
      toast.success('Profile updated!');
    } catch {
      toast.error('Failed to save. Try again.');
    } finally {
      setLoading(false);
    }
  }

  async function uploadAvatar(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file || !user) return;
    const ext      = file.name.split('.').pop();
    const path     = `avatars/${user.id}.${ext}`;
    const { error: upErr } = await supabase.storage.from('avatars').upload(path, file, { upsert: true });
    if (upErr) return toast.error('Upload failed.');
    const url = supabase.storage.from('avatars').getPublicUrl(path).data.publicUrl;
    await supabase.from('profiles').update({ avatar_url: url }).eq('id', user.id);
    await fetchProfile(user.id);
    toast.success('Avatar updated!');
  }

  return (
    <SettingsShell active="profile">
      <div className="card p-6 space-y-5">
        <h2 className="font-display font-semibold text-[var(--text-primary)]">Profile Information</h2>

        {/* Avatar */}
        <div className="flex items-center gap-4">
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center text-lg font-bold text-white shadow-soft cursor-pointer relative group"
            style={{ background: '#3478f6' }}
            onClick={() => fileRef.current?.click()}
          >
            {user?.avatar_url
              ? <img src={user.avatar_url} className="w-full h-full rounded-2xl object-cover" alt="Your profile photo" />
              : (user?.initials || 'SN')
            }
            <div className="absolute inset-0 bg-black/40 rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <Camera size={16} className="text-white" />
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold text-[var(--text-primary)]">{user?.full_name}</p>
            <button onClick={() => fileRef.current?.click()} className="text-xs text-blue-500 hover:underline mt-0.5">Change photo</button>
          </div>
          <input ref={fileRef} type="file" accept="image/*" onChange={uploadAvatar} className="hidden" />
        </div>

        {/* Fields */}
        <div className="space-y-3">
          <div>
            <label className="block text-xs font-semibold text-[var(--text-muted)] mb-1.5 uppercase tracking-wider">Full Name</label>
            <input value={fullName} onChange={e => setFullName(e.target.value)} className="input-field" placeholder="Your name" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-[var(--text-muted)] mb-1.5 uppercase tracking-wider">Email</label>
            <input value={user?.email || ''} disabled className="input-field opacity-60 cursor-not-allowed" />
            <p className="text-xs text-[var(--text-muted)] mt-1">Email cannot be changed.</p>
          </div>
          <div>
            <label className="block text-xs font-semibold text-[var(--text-muted)] mb-1.5 uppercase tracking-wider">Phone</label>
            <input value={phone} onChange={e => setPhone(e.target.value)} className="input-field" placeholder="Optional" type="tel" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-[var(--text-muted)] mb-1.5 uppercase tracking-wider">Date of Birth</label>
            <input value={dob} onChange={e => setDob(e.target.value)} className="input-field" type="date" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-[var(--text-muted)] mb-1.5 uppercase tracking-wider">Bio</label>
            <textarea value={bio} onChange={e => setBio(e.target.value)} className="input-field resize-none" rows={3} placeholder="Tell us about yourself..." />
          </div>
        </div>

        <button onClick={saveProfile} disabled={loading} className="btn-primary text-sm">
          {loading ? <Loader2 size={15} className="animate-spin" /> : <><Save size={14} /> Save Changes</>}
        </button>
      </div>
    </SettingsShell>
  );
}
