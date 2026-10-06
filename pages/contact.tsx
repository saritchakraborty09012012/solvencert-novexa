import React, { useState } from 'react';
import { Mail, MessageSquare, MapPin, Send } from 'lucide-react';
import CompanyLayout from '@/components/layout/CompanyLayout';
import { FeedbackStars } from '@/components/features/FeedbackWidget';
import { useAuthStore } from '@/store/authStore';
import AuthModal from '@/components/auth/AuthModal';

const SUPPORT_EMAIL = 'nde.noirdemons@atomicmail.io';

export default function ContactPage() {
  const user = useAuthStore(s => s.user);
  const [authModal, setAuthModal] = useState<{ mode: 'login' | 'signup' } | null>(null);

  function openEmailClient() {
    const name = user?.full_name?.trim() || '';
    const body = `Name: ${name}\n`;
    const href = `mailto:${SUPPORT_EMAIL}?body=${encodeURIComponent(body)}`;
    window.location.href = href;
  }

  return (
    <CompanyLayout title="Contact Us" description="Contact the SolveNCERT team for support, feedback or partnership queries. We respond within 24 hours." canonical="/contact" breadcrumb="Contact">
      <h1>Contact Us</h1>
      <p className="lead">We'd love to hear from you — feedback, suggestions, or support. Click Contact Us and your email app will open with your name filled in, ready to type.</p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6 not-prose">
        {[
          { icon: Mail,          title: 'Email',    value: 'Checked daily', sub: 'For support & billing'               },
          { icon: MessageSquare, title: 'Feedback', value: 'Open now',      sub: 'Share suggestions & ideas'            },
          { icon: MapPin,        title: 'Based in', value: 'India',       sub: 'Serving CBSE students nationwide'     },
        ].map(({ icon: Icon, title, value, sub }) => (
          <div key={title} className="card p-4">
            <Icon size={16} className="text-blue-500 mb-2" />
            <p className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider mb-0.5">{title}</p>
            <p className="text-sm font-semibold text-[var(--text-primary)]">{value}</p>
            <p className="text-xs text-[var(--text-muted)] mt-0.5">{sub}</p>
          </div>
        ))}
      </div>

      <div className="card p-6 not-prose my-6 text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-violet-600 shadow-lg shadow-blue-500/30 mb-4">
          <Send size={20} className="text-white" />
        </div>
        <h2 className="font-display font-bold text-[var(--text-primary)] mb-2">Send us a message</h2>
        <p className="text-sm text-[var(--text-muted)] max-w-xl mx-auto">
          Tell us what's on your mind — a missing answer, a correction, feedback or a partnership idea. We respond within 24 hours.
        </p>
        <button
          type="button"
          onClick={() => { if (user) openEmailClient(); else setAuthModal({ mode: 'login' }); }}
          className="mt-5 inline-flex items-center justify-center gap-2 rounded-xl bg-blue-500 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition-colors hover:bg-blue-600"
        >
          <Send size={15} />
          Contact Us
        </button>
      </div>

      <div className="card p-6 not-prose my-6">
        <h2 className="font-display font-bold text-[var(--text-primary)] mb-1">Rate your experience</h2>
        <p className="text-sm text-[var(--text-muted)] mb-4">Tell us how SolveNCERT is working for you.</p>
        <FeedbackStars />
      </div>

{authModal && (
        <AuthModal
          mode={authModal.mode}
          onClose={() => setAuthModal(null)}
          onSwitch={(mode) => setAuthModal({ mode })}
        />
      )}
    </CompanyLayout>
  );
}