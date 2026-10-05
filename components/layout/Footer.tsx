import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Twitter, Instagram, Youtube, Mail } from 'lucide-react';
import { BrandLogo, NovexaLogo } from '@/components/ui/Logo';
import { useAuthStore } from '@/store/authStore';
import { FeedbackStars } from '@/components/features/FeedbackWidget';

export default function Footer() {
  const user = useAuthStore(s => s.user);
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  return (
    <footer className="relative mt-12 bg-[var(--surface-0)] border-t border-[var(--border)] overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--brand-gold)]/40 to-transparent pointer-events-none" />
      <div className="max-w-screen-xl mx-auto px-6 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          <div className="col-span-2 md:col-span-1">
            <BrandLogo size={36} className="mb-3" />
            <p className="text-xs text-[var(--text-muted)] leading-relaxed mb-4 max-w-[200px]">
              AI-powered NCERT solutions for CBSE Class 9. Human-verified, board-pattern answers. <strong className="text-[var(--text-secondary)]">2026 Revised Syllabus.</strong>
            </p>
            <div className="flex gap-2.5">
              {[Twitter, Instagram, Youtube, Mail].map((Icon, i) => (
                <a key={i} href={Icon === Mail ? 'mailto:nde.noirdemons@proton.me' : '#'}
                  className="w-7 h-7 rounded-lg bg-[var(--surface-2)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-3)] hover:-translate-y-0.5 transition-all border border-[var(--border-subtle)]">
                  <Icon size={13} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-serif font-bold uppercase tracking-[0.18em] text-[var(--text-muted)] mb-3">Study</h4>
            <ul className="space-y-2">
              {[['Solved Answers','/answers'],['Get Books','/books'],['Ask Anything','/ask-anything'],['AI Learn','/ai-learn'],['Notes Generator','/notes'],['Answer Checker','/answer-checker'],['Flash Cards','/flash-cards'],['Quizzes','/quizzes'],['Practice Papers','/practice'],['Mock Tests','/mock-tests']].map(([l,h])=>(
                <li key={h}><Link href={h} className="text-xs text-[var(--text-secondary)] hover:text-[var(--brand-primary)] hover:pl-0.5 transition-all">{l}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-serif font-bold uppercase tracking-[0.18em] text-[var(--text-muted)] mb-3">Class 9</h4>
            <ul className="space-y-2">
              {[['Mathematics','/class-9/maths/ganita-manjari'],['Science','/class-9/science/exploration'],['English','/class-9/english/kaveri'],['Social Science','/class-9/sst/understanding-society-india-and-beyond'],['IT','/class-9/it'],['Advanced Mathematics','/class-9/advanced-maths/advanced-mathematics'],['Advanced Science','/class-9/advanced-science/science-advanced'],['Sanskrit','/class-9/sanskrit'],['Hindi','/class-9/hindi'],['Arts','/class-9/arts/madhurima'],['Kaushal Vikas','/class-9/kaushal-vikas/kaushal-vikas']].map(([l,h])=>(
                <li key={h}><Link href={h} className="text-xs text-[var(--text-secondary)] hover:text-[var(--brand-primary)] hover:pl-0.5 transition-all">{l}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-serif font-bold uppercase tracking-[0.18em] text-[var(--text-muted)] mb-3">Company</h4>
            <ul className="space-y-2">
              {[['About Us','/about'],['User Guide','/guide'],['Contact','/contact'],['Privacy Policy','/privacy'],['Terms of Use','/terms'],['Refund Policy','/refund-policy'],['Premium','/premium']].map(([l,h])=>(
                <li key={h}><Link href={h} className="text-xs text-[var(--text-secondary)] hover:text-[var(--brand-primary)] hover:pl-0.5 transition-all">{l}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="border-[var(--border)] my-7" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[var(--text-muted)]">
          <p>© {new Date().getFullYear()} SolveNCERT for CBSE. All rights reserved.</p>
          {mounted && user && <FeedbackStars />}
          <div className="flex items-center gap-2">
            <span>Powered by</span>
            <NovexaLogo size={20} withText />
          </div>
        </div>
      </div>
    </footer>
  );
}
