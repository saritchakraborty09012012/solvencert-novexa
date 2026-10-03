import React, { useState } from 'react';
import Link from 'next/link';
import {
  BookOpen, Download, Brain, Zap, FileText,
  ClipboardCheck, ArrowRight, ArrowUpRight,
  Star, Shield, Users, Lock, CheckCircle, Sparkles, X, BadgeCheck, Layers, StickyNote
} from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { NovexaLogo } from '@/components/ui/Logo';
import { useAuthStore } from '@/store/authStore';
import { useUIStore } from '@/store/uiStore';
import AuthModal from '@/components/auth/AuthModal';
import SubjectDropdowns from '@/components/features/SubjectDropdowns';
import { HomePage } from '@/components/ui3/HomePage';
import { cn } from '@/utils/helpers';
import { PUBLISHER_NAME, SITE_ALTERNATE_NAMES, SITE_NAME, SITE_URL } from '@/lib/site';

const HOME_TITLE = 'NCERT Solutions for CBSE Class 9 — Free, AI-Powered, 2026 Revised Syllabus';
const HOME_DESC = 'SolveNCERT — Free NCERT solutions for CBSE Class 9 as per 2026 Revised Syllabus. Maths (Ganita Manjari), Science (Exploration), English (Kaveri). Human-verified, AI-powered.';

const HOME_SCHEMA = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    alternateName: SITE_ALTERNATE_NAMES,
    url: SITE_URL,
    description: 'Free NCERT solutions for CBSE Class 9 — 2026 Revised Syllabus',
    potentialAction: {
      '@type': 'SearchAction',
      target: { '@type': 'EntryPoint', urlTemplate: `${SITE_URL}/search?q={search_term_string}` },
      'query-input': 'required name=search_term_string',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'EducationalOrganization'],
    name: SITE_NAME,
    alternateName: SITE_ALTERNATE_NAMES,
    url: SITE_URL,
    logo: `${SITE_URL}/solvencert-logo-256.png`,
    parentOrganization: {
      '@type': 'Organization',
      name: PUBLISHER_NAME,
      alternateName: [
        'NDe', 'NDE', 'nde', 'NoirDemons', 'Noir Demons',
        'SolveNCERT by NDE', 'solve ncert by nde', 'solve ncert by NDE',
        'SolveNCERT by NOVEXA', 'solve ncert by novexa',
      ],
    },
  },
];

const CTA_CARDS = [
  { id:'answers',  label:'Get Solved Answers', icon:BookOpen,       desc:'Chapter-wise NCERT solutions',  href:'/answers',       active:true,  color:'blue',   badge:'Free'        },
  { id:'books',    label:'Get Book',            icon:Download,       desc:'Download NCERT books free',     href:'/books',         active:true,  color:'indigo', badge:'Free'        },
  { id:'ai',       label:'AI Learn',            icon:Brain,          desc:'AI tutor that explains topics step by step', href:'/ai-learn',      active:true,  color:'violet', badge:'Try Now' },
  { id:'notes',    label:'Generate Notes',      icon:StickyNote,     desc:'Chapter notes & key concepts in one click', href:'/notes',         active:true,  color:'emerald',badge:'New' },
  { id:'flash',    label:'Flash Cards',         icon:Layers,         desc:'Flip Q&A cards for quick revision',          href:'/flash-cards',    active:true,  color:'cyan',   badge:'New' },
  { id:'quizzes',  label:'Quizzes',             icon:Zap,            desc:'MCQ questions to test every chapter',        href:'/quizzes',       active:true,  color:'amber',  badge:'Try Now' },
  { id:'practice', label:'Practice Papers',     icon:FileText,       desc:'Subjective questions for board-pattern practice', href:'/practice',      active:false, color:'green',  badge:'Coming Soon' },
  { id:'mock',     label:'Mock Tests',          icon:ClipboardCheck, desc:'Full-length timed test with mixed MCQ + subjective questions', href:'/mock-tests',    active:false, color:'rose',   badge:'Coming Soon' },
];

const COLOR_MAP: Record<string,{tile:string;text:string;badge:string;glow:string}> = {
  blue:    { tile:'bg-gradient-to-br from-blue-500/15 to-blue-600/5',    text:'text-blue-600 dark:text-blue-400',     badge:'bg-blue-100 dark:bg-blue-500/15 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-500/30',    glow:'group-hover:shadow-blue-500/30' },
  indigo:  { tile:'bg-gradient-to-br from-indigo-500/15 to-indigo-600/5',text:'text-indigo-600 dark:text-indigo-400',  badge:'bg-indigo-100 dark:bg-indigo-500/15 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-500/30',glow:'group-hover:shadow-indigo-500/30' },
  violet:  { tile:'bg-gradient-to-br from-violet-500/15 to-violet-600/5',text:'text-violet-600 dark:text-violet-400',  badge:'bg-violet-100 dark:bg-violet-500/15 text-violet-700 dark:text-violet-300 border-violet-200 dark:border-violet-500/30',glow:'group-hover:shadow-violet-500/30' },
  amber:   { tile:'bg-gradient-to-br from-amber-400/20 to-amber-500/5',  text:'text-amber-600 dark:text-amber-400',    badge:'bg-amber-100 dark:bg-amber-500/15 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-500/30',  glow:'group-hover:shadow-amber-500/30' },
  green:   { tile:'bg-gradient-to-br from-green-500/15 to-green-600/5',  text:'text-green-600 dark:text-green-400',    badge:'bg-green-100 dark:bg-green-500/15 text-green-700 dark:text-green-300 border-green-200 dark:border-green-500/30',  glow:'group-hover:shadow-green-500/30' },
  emerald: { tile:'bg-gradient-to-br from-emerald-500/15 to-emerald-600/5',text:'text-emerald-600 dark:text-emerald-400',badge:'bg-emerald-100 dark:bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-500/30',glow:'group-hover:shadow-emerald-500/30' },
  cyan:    { tile:'bg-gradient-to-br from-cyan-500/15 to-cyan-600/5',   text:'text-cyan-600 dark:text-cyan-400',      badge:'bg-cyan-100 dark:bg-cyan-500/15 text-cyan-700 dark:text-cyan-300 border-cyan-200 dark:border-cyan-500/30',    glow:'group-hover:shadow-cyan-500/30' },
  rose:    { tile:'bg-gradient-to-br from-rose-500/15 to-rose-600/5',    text:'text-rose-600 dark:text-rose-400',      badge:'bg-rose-100 dark:bg-rose-500/15 text-rose-700 dark:text-rose-300 border-rose-200 dark:border-rose-500/30',      glow:'group-hover:shadow-rose-500/30' },
  teal:    { tile:'bg-gradient-to-br from-teal-500/15 to-teal-600/5',    text:'text-teal-600 dark:text-teal-400',      badge:'bg-teal-100 dark:bg-teal-500/15 text-teal-700 dark:text-teal-300 border-teal-200 dark:border-teal-500/30',      glow:'group-hover:shadow-teal-500/30' },
};

export default function Home() {
  const { isGuest } = useAuthStore();
  const ui = useUIStore(s => s.ui);
  const [authModal,   setAuthModal]   = useState<'login'|'signup'|null>(null);
  const [signupPopup, setSignupPopup] = useState(false);

  if (ui === 'ui3') {
    return <HomePage title={HOME_TITLE} description={HOME_DESC} canonical="/" schema={HOME_SCHEMA} />;
  }

  function handleLockedCard() {
    setSignupPopup(true);
    setTimeout(() => setSignupPopup(false), 4000);
  }

  return (
    <Layout
      title={HOME_TITLE}
      description={HOME_DESC}
      canonical="/"
      schema={HOME_SCHEMA}
    >
      {/* Signup popup toast */}
      {signupPopup && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 bg-[var(--surface-0)] border border-blue-300/50 dark:border-blue-500/40 rounded-xl px-5 py-3 shadow-soft-lg flex items-center gap-3 animate-slide-down whitespace-nowrap">
          <Lock size={14} className="text-blue-500 flex-shrink-0" />
          <p className="text-sm text-[var(--text-secondary)]">
            <button onClick={() => { setSignupPopup(false); setAuthModal('signup'); }} className="text-blue-500 font-semibold hover:underline">Sign up free</button>
            {' '}to access this feature.
          </p>
          <button onClick={() => setSignupPopup(false)} className="text-[var(--text-muted)] hover:text-[var(--text-primary)]"><X size={14} /></button>
        </div>
      )}

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="hero-panel relative overflow-hidden bg-gradient-mesh dark:bg-gradient-mesh-dark">
          {/* Aurora orbs */}
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-blue-500/20 blur-[90px] animate-aurora pointer-events-none" />
          <div className="absolute top-1/4 -right-28 w-80 h-80 rounded-full bg-violet-500/20 blur-[90px] animate-aurora pointer-events-none" style={{ animationDelay:'-6s' }} />
          <div className="absolute -bottom-32 left-1/3 w-96 h-96 rounded-full bg-gold-400/15 blur-[100px] animate-aurora pointer-events-none" style={{ animationDelay:'-10s' }} />

          {/* Dot grid */}
          <div className="absolute inset-0 opacity-[0.035] dark:opacity-[0.05]"
            style={{ backgroundImage:'radial-gradient(circle at 1px 1px, var(--text-primary) 1px, transparent 0)', backgroundSize:'36px 36px' }} />

          <div className="page-intro relative max-w-screen-xl mx-auto px-6 pt-12 pb-0 md:pt-14">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-end">

              {/* Left */}
              <div className="space-y-6 pb-12 md:pb-16 animate-fade-up">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="badge-2026">NCERT 2026 Revised Syllabus</span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-500/10 to-violet-500/10 border border-blue-300/40 dark:border-blue-500/30 text-blue-600 dark:text-blue-400 text-xs font-semibold">
                    <Sparkles size={11} /> CBSE Class 9
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-[3.2rem] font-display font-extrabold text-[var(--text-primary)] leading-[1.08] tracking-tight">
                  Solve NCERT <br className="hidden sm:block" />
                  <span className="text-gold">Smarter</span>
                </h1>

                <p className="text-base md:text-lg text-[var(--text-secondary)] leading-relaxed max-w-md">
                  AI-powered NCERT learning — solved answers, books, practice papers, quizzes, and smart study tools. Built for CBSE Class 9 students, updated for the <strong className="text-[var(--text-primary)]">2026 revised curriculum</strong>.
                </p>

                <div className="relative p-3.5 rounded-2xl overflow-hidden bg-gradient-to-br from-emerald-500/10 to-teal-500/5 border border-emerald-300/30 dark:border-emerald-500/25 shadow-sm">
                  <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-emerald-400/10 blur-2xl pointer-events-none" />
                  <div className="relative flex items-start gap-2.5">
                    <Shield size={16} className="text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-[var(--text-secondary)]">
                      <strong className="text-[var(--text-primary)]">Human-made, multi-sourced, 100% accurate</strong>,
                      {' '}board-pattern answers. AI used for follow-up learning only — not for generating solutions.
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link href="/answers" className="btn-primary text-sm">
                    Get Solved Answers <ArrowRight size={14} />
                  </Link>
                  {isGuest && (
                    <button onClick={() => setAuthModal('signup')} className="btn-ghost text-sm">
                      Sign Up Free
                    </button>
                  )}
                </div>

                <div className="flex items-center gap-5 pt-1">
                  {[
                    { icon:CheckCircle, text:'4 Subjects',     color:'text-emerald-500' },
                    { icon:Shield,      text:'Human Verified', color:'text-blue-500'  },
                    { icon:Star,        text:'Board Pattern',  color:'text-gold-500'  },
                  ].map(({ icon:Icon, text, color }) => (
                    <div key={text} className="flex items-center gap-1.5 text-xs text-[var(--text-muted)]">
                      <Icon size={13} className={color} /> {text}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: hero image */}
              <div className="hidden md:flex justify-end items-end relative">
                <div className="relative w-64 lg:w-72">
                  <div className="rounded-t-3xl overflow-hidden shadow-soft-xl border border-[var(--border)] border-b-0"
                    style={{ aspectRatio:'9/12', boxShadow:'0 30px 80px -20px rgba(47,75,208,0.3), 0 10px 30px -10px rgba(34,42,66,0.3)' }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/hero-students.jpg" alt="CBSE Class 9 student studying NCERT solutions"
                      style={{ width:'100%', height:'100%', objectFit:'cover', objectPosition:'top', display:'block' }} />
                  </div>

                  {/* Floating badges */}
                  <div className="absolute -top-3 -left-10 bg-[var(--surface-0)] rounded-2xl px-3.5 py-2.5 shadow-soft-lg border border-[var(--border)] animate-float">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-500/15 to-blue-600/5 flex items-center justify-center">
                        <Brain size={14} className="text-blue-600" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-[var(--text-primary)]">AI-Powered</p>
                        <p className="text-[9px] text-[var(--text-muted)]">Smart Learning</p>
                      </div>
                    </div>
                  </div>

                  <div className="absolute -bottom-3 -left-8 bg-[var(--surface-0)] rounded-2xl px-3.5 py-2.5 shadow-soft-lg border border-[var(--border)] animate-float" style={{ animationDelay:'1.5s' }}>
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-emerald-500/15 to-emerald-600/5 flex items-center justify-center">
                        <BadgeCheck size={14} className="text-emerald-600" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-[var(--text-primary)]">Human Verified</p>
                        <p className="text-[9px] text-[var(--text-muted)]">100% Accurate</p>
                      </div>
                    </div>
                  </div>

                  <div className="absolute top-1/3 -right-10 bg-[var(--surface-0)] rounded-2xl px-3.5 py-2.5 shadow-soft-lg border border-[var(--border)] animate-float" style={{ animationDelay:'0.8s' }}>
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-gold-400/20 to-gold-500/5 flex items-center justify-center">
                        <Star size={14} className="text-gold-600" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-[var(--text-primary)]">2026 Syllabus</p>
                        <p className="text-[9px] text-[var(--text-muted)]">CBSE Updated</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </section>

      {/* ── CTA CARDS ─────────────────────────────────────────────────── */}
      <section className="max-w-screen-xl mx-auto px-6 py-12 md:py-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <h2 className="text-xl md:text-2xl font-display font-bold text-[var(--text-primary)]">
                Everything You Need to Ace CBSE
              </h2>
            </div>
            <p className="text-sm text-[var(--text-muted)] mt-1">All study tools in one place — structured, accurate, exam-ready.</p>
          </div>
          <Link href="/answers" className="hidden sm:flex items-center gap-1.5 text-sm text-blue-500 hover:text-blue-600 font-medium group">
            Browse all <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-3 md:gap-4">
          {CTA_CARDS.map(card => {
            const Icon   = card.icon;
            const colors = COLOR_MAP[card.color];
            return card.active ? (
              <Link key={card.id} href={card.href}
                className="card p-4 md:p-5 flex flex-col gap-3 cursor-pointer group hover:scale-[1.02] active:scale-[0.99]">
                <div className="flex items-center justify-between">
                  <div className={cn('w-10 h-10 rounded-xl flex items-center justify-center border border-[var(--border)] shadow-sm transition-transform group-hover:scale-110', colors.tile)}>
                    <Icon size={17} className={colors.text} />
                  </div>
                  <ArrowUpRight size={14} className="text-[var(--text-muted)] opacity-0 group-hover:opacity-100 transition-all group-hover:text-blue-500" />
                </div>
                <div>
                  <p className="text-sm font-semibold font-display text-[var(--text-primary)] leading-tight">{card.label}</p>
                  <p className="text-xs text-[var(--text-muted)] mt-0.5 hidden sm:block">{card.desc}</p>
                </div>
                <span className={cn('self-start px-2 py-0.5 rounded-full text-[10px] font-bold border', colors.badge)}>{card.badge}</span>
              </Link>
            ) : (
              <button key={card.id} onClick={handleLockedCard}
                className="card p-4 md:p-5 flex flex-col gap-3 text-left opacity-60 hover:opacity-90 transition-opacity group">
                <div className="flex items-center justify-between">
                  <div className={cn('w-10 h-10 rounded-xl flex items-center justify-center border border-[var(--border)] shadow-sm', colors.tile)}>
                    <Icon size={17} className={colors.text} />
                  </div>
                  <Lock size={13} className="text-[var(--text-muted)]" />
                </div>
                <div>
                  <p className="text-sm font-semibold font-display text-[var(--text-primary)] leading-tight">{card.label}</p>
                  <p className="text-xs text-[var(--text-muted)] mt-0.5 hidden sm:block">{card.desc}</p>
                </div>
                <span className={cn('self-start px-2 py-0.5 rounded-full text-[10px] font-bold border', colors.badge)}>{card.badge}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* ── SUBJECT DROPDOWNS ─────────────────────────────────────────── */}
      <section className="relative bg-[var(--surface-0)] border-y border-[var(--border)]">
        <div className="max-w-screen-xl mx-auto px-6 py-14">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <div className="accent-divider mx-auto mb-4" />
              <h2 className="text-2xl md:text-3xl font-display font-bold text-[var(--text-primary)] mb-2">Get Solved Answers</h2>
              <p className="text-sm text-[var(--text-muted)]">Select your class, subject, and chapter to view detailed solutions — updated for <strong className="text-[var(--text-secondary)]">2026 NCERT Revised Syllabus</strong>.</p>
            </div>
            <SubjectDropdowns />
          </div>
        </div>
      </section>

      {/* ── FEATURES ──────────────────────────────────────────────────── */}
      <section className="max-w-screen-xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            { icon:Shield,   title:'100% Accurate',  desc:'Every solution is human-written and cross-checked against the CBSE 2026 board patterns.',    color:'from-emerald-500/15 to-emerald-600/5',   text:'text-emerald-600' },
            { icon:Brain,    title:'AI Follow-up',   desc:'Highlight any text and ask AI for explanations, alternate methods, or doubts.',              color:'from-blue-500/15 to-violet-500/5',      text:'text-blue-500'  },
            { icon:Star,     title:'Board-Ready',    desc:'Answers structured exam-style — school method, quick tricks, and conceptual understanding.', color:'from-gold-400/20 to-gold-500/5',        text:'text-gold-600'  },
          ].map(({ icon:Icon, title, desc, color, text }) => (
            <div key={title} className="card p-6 group">
              <div className={cn('w-11 h-11 rounded-xl bg-gradient-to-br flex items-center justify-center border border-[var(--border)] mb-4 transition-transform group-hover:scale-110', color)}>
                <Icon size={20} className={text} />
              </div>
              <h3 className="font-display font-semibold text-[var(--text-primary)] mb-1.5">{title}</h3>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Powered by NDe (formerly NOVEXA) ───────────────────────────── */}
      <section className="border-t border-[var(--border)] bg-[var(--surface-0)]">
        <div className="max-w-screen-xl mx-auto px-6 py-5 flex items-center justify-center gap-3">
          <p className="text-xs text-[var(--text-muted)]">Powered by</p>
          <NovexaLogo size={22} withText />
        </div>
      </section>

      {authModal && <AuthModal mode={authModal} onClose={() => setAuthModal(null)} onSwitch={setAuthModal} />}
    </Layout>
  );
}
