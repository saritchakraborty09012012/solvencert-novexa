import React from 'react';
import Link from 'next/link';
import { BookOpen, Brain, Shield, Users, Sparkles, ArrowRight } from 'lucide-react';
import CompanyLayout from '@/components/layout/CompanyLayout';
import { BrandLogo, NovexaLogo } from '@/components/ui/Logo';

export default function AboutPage() {
  return (
    <CompanyLayout title="About SolveNCERT" description="Learn about SolveNCERT — India's free AI-assisted NCERT solutions platform for CBSE Class 9. SolveNCERT by NDE and SolveNCERT by NOVEXA — built by NDe: NoirDemons, updated for the 2026 Revised Syllabus." canonical="/about" breadcrumb="About Us">
      <div className="flex items-start gap-4 mb-6 not-prose">
        <BrandLogo size={52} />
      </div>

      <h1>About SolveNCERT</h1>
      <p className="lead">India's premium NCERT solutions platform — where human expertise meets AI-powered learning. Now updated for the <strong>2026 Revised NCERT Syllabus</strong>.</p>

      <p>SolveNCERT was built with one mission: to give every CBSE student access to accurate, structured, and deeply understandable NCERT solutions — completely free.</p>
      <p>Every answer is written and verified by experienced teachers following <strong>CBSE board patterns and the 2026 revised curriculum</strong>. AI is used exclusively for follow-up learning — never for generating core solutions.</p>

      <h2>What Makes Us Different</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6 not-prose">
        {[
          { icon:Shield,   title:'Human Verified',       desc:'Every solution written by experienced CBSE teachers. Not AI-generated.', color:'text-green-500', bg:'bg-green-50 dark:bg-green-950/30' },
          { icon:Brain,    title:'AI-Assisted Learning', desc:'AI helps students understand concepts, ask doubts, and explore alternate methods.', color:'text-blue-500', bg:'bg-blue-50 dark:bg-blue-950/30' },
          { icon:BookOpen, title:'2026 Revised Syllabus',desc:'All content updated to the latest NCERT 2026 revised curriculum.', color:'text-indigo-500', bg:'bg-indigo-50 dark:bg-indigo-950/30' },
          { icon:Users,    title:'Student-First',        desc:'Clear language, helpful tricks, collaborative study rooms — built for students.', color:'text-amber-500', bg:'bg-amber-50 dark:bg-amber-950/30' },
        ].map(({ icon:Icon, title, desc, color, bg }) => (
          <div key={title} className="card p-5">
            <div className={`w-9 h-9 rounded-xl flex items-center justify-center mb-3 ${bg}`}><Icon size={17} className={color} /></div>
            <p className="text-sm font-semibold text-[var(--text-primary)] mb-1">{title}</p>
            <p className="text-xs text-[var(--text-muted)] leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>

      <h2>Our Story</h2>
      <p>SolveNCERT was founded by a team passionate about transforming how Indian students study. High-quality, structured NCERT solutions were either hidden behind paywalls or based on outdated syllabi. We built a single, trustworthy platform — free, accurate, and now fully updated for 2026.</p>

      <h2>Powered by NDe: NoirDemons — SolveNCERT by NDE</h2>
      <div className="flex items-center gap-3 p-4 rounded-xl bg-[var(--surface-1)] border border-[var(--border)] my-4 not-prose">
        <NovexaLogo size={40} withText={false} />
        <div>
          <p className="text-sm font-semibold text-[var(--text-primary)]">NDe: NoirDemons</p>
          <p className="text-xs text-[var(--text-muted)]">Advanced AI technology powering SolveNCERT's intelligent features.</p>
          <p className="text-xs text-[var(--text-muted)]">Visit Us at: <a href="https://noir-demons.vercel.app" className="text-blue-500 hover:underline">noir-demons.vercel.app</a></p>
        </div>
      </div>

      <p className="text-sm text-[var(--text-muted)]">
        <strong className="text-[var(--text-primary)]">NDe: NoirDemons</strong> — NDe is the short name of the
        company, quick to say, spell and remember. Searching <strong>SolveNCERT by NDE</strong>,
        <strong> solve ncert by nde</strong> or <strong>solve ncert by novexa</strong> (the former name) all
        lead to this same site.
      </p>

      <div className="not-prose mt-6">
        <Link href="/answers" className="btn-primary text-sm inline-flex">Start Learning <ArrowRight size={14} /></Link>
      </div>
    </CompanyLayout>
  );
}
