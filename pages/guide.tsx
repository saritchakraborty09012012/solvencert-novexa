import React from 'react';
import Link from 'next/link';
import {
  Menu, Home, Search, Layers, ChevronDown, Download, BookOpen,
  MessageCircleQuestion, Sparkles, BookMarked, History, Award, Users,
  Smartphone, Monitor, Tablet, Laptop, Crown, Heart, Flag, Feather, Zap,
  FileText, PenTool, CheckCircle2, HelpCircle, ArrowRight, Info,
  ListChecks, Gift, Star, LayoutGrid, Usb, Lightbulb, PanelTop,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Layout from '@/components/layout/Layout';

const ROUTES: Record<string, { name: string; desc: string; need?: string; href?: string }[]> = {
  solutions: [
    { name: 'Mathematics', desc: 'Ganita Manjari — solved answers for all 8 chapters', href: '/class-9/maths/ganita-manjari' },
    { name: 'Science', desc: 'Exploration — solved answers, parts & exercises', href: '/class-9/science/exploration' },
    { name: 'English', desc: 'Kaveri — sections with literature answers', href: '/class-9/english/kaveri' },
    { name: 'Social Science', desc: 'Understanding Society — Geography, History, Civics, Economics', href: '/class-9/sst/understanding-society-india-and-beyond' },
    { name: 'IT Part A', desc: 'Employability Skills', href: '/class-9/it' },
    { name: 'IT Part B', desc: 'IT Code 402', href: '/class-9/it' },
    { name: 'Advanced Mathematics', desc: 'Optional advanced set/log/polynomials', href: '/class-9/advanced-maths/advanced-mathematics' },
    { name: 'Advanced Science', desc: 'Optional advanced science units', href: '/class-9/advanced-science/science-advanced' },
    { name: 'Sanskrit', desc: 'Sharda & Iravati readers', href: '/class-9/sanskrit' },
    { name: 'Hindi', desc: 'Ganga & Reva readers', href: '/class-9/hindi' },
  ],
  ai: [
    { name: 'Ask Anything', desc: 'Ask anything — even beyond your textbook, any subject, any doubt', href: '/ask-anything', need: 'Account (sign in)' },
    { name: 'AI Learn', desc: 'Step-by-step AI tutor for solving & doubts', href: '/ai-learn', need: 'Account (sign in)' },
    { name: 'Doubt Solver', desc: 'Instant doubt solutions (AI Learn)', href: '/ai-learn', need: 'Account (sign in)' },
    { name: 'Notes Generator', desc: 'One-click chapter revision notes', href: '/notes', need: 'Account (sign in)' },
    { name: 'Answer Checker', desc: 'Check your written answers against board pattern', href: '/answer-checker', need: 'Account (sign in)' },
    { name: 'Flash Cards', desc: 'Quick revision cards per chapter', href: '/flash-cards', need: 'Account (sign in)' },
    { name: 'Quizzes', desc: 'Chapter-wise MCQs with instant results', href: '/quizzes', need: 'Account (sign in)' },
    { name: 'Practice Papers', desc: 'Subjective board-style practice papers', href: '/practice', need: 'Account (sign in)' },
    { name: 'Mock Tests', desc: 'Mixed MCQ + subjective timed tests', href: '/mock-tests', need: 'Account (sign in)' },
    { name: 'AI Follow-up', desc: 'On any solution — ask AI to explain/simplify/repeat', href: undefined, need: 'Account (sign in)' },
  ],
};

function SectionCard({ icon: Icon, title, children }: { icon: LucideIcon; title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface-0)] p-5 mb-4">
      <h3 className="flex items-center gap-2 font-serif font-bold text-[var(--text-primary)] mb-3">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/10 text-blue-500">
          <Icon size={16} />
        </span>
        {title}
      </h3>
      <div className="text-sm text-[var(--text-secondary)] leading-relaxed space-y-3">{children}</div>
    </div>
  );
}

function Step({ n, children }: { n: number; children: React.ReactNode }) {
  return (
    <li className="flex gap-3">
      <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-500 text-white text-xs font-bold">{n}</span>
      <span>{children}</span>
    </li>
  );
}

function DeviceSection({ icon: Icon, title, points }: { icon: LucideIcon; title: string; points: string[] }) {
  return (
    <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface-0)] p-5">
      <h4 className="flex items-center gap-2 font-serif font-bold text-[var(--text-primary)] mb-3">
        <Icon size={16} className="text-blue-500" /> {title}
      </h4>
      <ul className="space-y-2 text-sm text-[var(--text-secondary)] leading-relaxed">
        {points.map((p, i) => <li key={i} className="flex gap-2"><CheckCircle2 size={15} className="mt-0.5 text-green-500 flex-shrink-0" />{p}</li>)}
      </ul>
    </div>
  );
}

/** Inline SVG schematic of the desktop header (top bar) with labelled regions. */
function HeaderDiagram() {
  return (
    <svg viewBox="0 0 760 90" className="w-full h-auto rounded-xl border border-[var(--border)]" role="img" aria-label="Desktop header layout">
      <rect x="0" y="0" width="760" height="90" fill="#1b1b22" rx="12" />
      <text x="26" y="30" font-size="11" fill="#8b8f9a" font-family="sans-serif">☰</text>
      <text x="40" y="30" font-size="12" fill="#ffffff" font-family="sans-serif" font-weight="600">SolveNCERT</text>
      {['Home', 'Solutions ▾', 'Books', 'AI Tools ▾', 'Study Room'].map((l, i) => (
        <text key={i} x={150 + i * 92} y={30} font-size="11" fill="#c9ccd6" font-family="sans-serif">{l}</text>
      ))}
      <text x={545} y={30} font-size="11" fill="#c9ccd6" font-family="sans-serif">🔍</text>
      <text x={575} y={30} font-size="11" fill="#8b8f9a" font-family="sans-serif">Moods</text>
      <text x={640} y={30} font-size="11" fill="#8b8f9a" font-family="sans-serif">☀ ▢ 🌙</text>
      <text x={705} y={30} font-size="11" fill="#ffffff" font-family="sans-serif" font-weight="600">Sign Up</text>
      {/* callout labels */}
      {[['45','55','30','30','28','Blocks'],['40','50','12','28','Left'],['520','55','30','34','Search'],['560','55','34','24','Moods'],['625','55','40','28','Theme']].map(([x,y,w,h,t],i)=>(
        <g key={i}>
          <rect x={Number(x)} y={Number(y)} width={Number(w)} height={Number(h)} fill="none" stroke="#3b82f6" stroke-width="1" stroke-dasharray="3 2" rx="3" />
          <text x={Number(x)} y={Number(y)-4} font-size="8.5" fill="#60a5fa" font-family="sans-serif">{t}</text>
        </g>
      ))}
    </svg>
  );
}

/** Inline SVG schematic of the chapter solution page with annotated areas. */
function ChapterDiagram() {
  return (
    <svg viewBox="0 0 760 300" className="w-full h-auto rounded-xl border border-[var(--border)]" role="img" aria-label="Chapter solution page layout">
      <rect x="0" y="0" width="760" height="300" fill="#f6f4ee" rx="12" />
      <text x="24" y="30" font-size="13" fill="#1f2937" font-family="serif" font-weight="700">Chapter 2 — Linear Polynomials</text>
      <text x="24" y="48" font-size="9" fill="#6b7280" font-family="sans-serif">Exercise tabs · Bookmark · Thumbs · AI Follow-up · Download PDF</text>
      {/* exercise tabs */}
      <rect x="24" y="60" width="110" height="26" fill="#3b82f6" rx="6" />
      <text x="42" y="77" font-size="10" fill="#fff" font-family="sans-serif">Exercise 2.1</text>
      <rect x="140" y="60" width="110" height="26" fill="#e5e7eb" rx="6" />
      <text x="170" y="77" font-size="10" fill="#4b5563" font-family="sans-serif">Exercise 2.2</text>
      {/* a question card */}
      <rect x="24" y="104" width="712" height="150" fill="#ffffff" rx="10" stroke="#d1d5db" />
      <text x="40" y="130" font-size="11" fill="#111827" font-family="sans-serif" font-weight="600">1. Solve x + 3 = 5</text>
      <text x="40" y="156" font-size="11" fill="#4b5563" font-family="sans-serif">x + 3 = 5</text>
      <text x="56" y="176" font-size="11" fill="#4b5563" font-family="sans-serif">⇒ x = 5 − 3</text>
      <text x="56" y="196" font-size="11" fill="#111827" font-family="sans-serif">⇒ x = 2</text>
      <text x="40" y="226" font-size="11" fill="#059669" font-family="sans-serif" font-weight="700">□ Answer: x = 2</text>
      {/* action buttons on the card */}
      <g>
        <rect x="520" y="120" width="86" height="24" rx="6" fill="#eef2ff" stroke="#c7d2fe" />
        <text x="532" y="136" font-size="9" fill="#4f46e5" font-family="sans-serif">Meta (AI)</text>
        <rect x="618" y="120" width="86" height="24" rx="6" fill="#f0fdf5" stroke="#bbf7d0" />
        <text x="628" y="136" font-size="9" fill="#15803d" font-family="sans-serif">✓ Read</text>
        <rect x="24" y="104" width="0" height="0" />
      </g>
      <g>
        <rect x="615" y="152" width="80" height="22" rx="6" fill="#fef3c7" stroke="#fde68a" />
        <text x="626" y="167" font-size="9" fill="#b45309" font-family="sans-serif">✓ Bookmark</text>
        <rect x="697" y="152" width="0" height="0" />
      </g>
      {/* arrows to nav */}
      <g font-family="sans-serif" font-size="9" fill="#3b82f6" font-weight="600">
        <line x1="168" y1="62" x2="205" y2="38" stroke="#ef4444" stroke-width="2" marker-end="url(#arrR)" />
        <text x="206" y="32" fill="#ef4444">Switch exercise</text>
        <line x1="120" y1="96" x2="72" y2="72" stroke="#ef4444" stroke-width="2" marker-end="url(#arrR)" />
        <text x="20" y="94" fill="#ef4444">Pick a tab</text>
        <line x1="240" y1="120" x2="400" y2="130" stroke="#ef4444" stroke-width="2" marker-end="url(#arrR)" />
        <text x="250" y="118" fill="#ef4444">Read solution here</text>
      </g>
      <defs>
        <marker id="arrR" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#ef4444" />
        </marker>
      </defs>
    </svg>
  );
}

export default function GuidePage() {
  return (
    <Layout
      title="SolveNCERT User Guide — How to Use the Site Effectively"
      description="The complete SolveNCERT guide for students — how to operate the site on phone, laptop and tablet, where everything is, which access you need, and which tool is best for which task."
      canonical="/guide"
      schema={{
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'SolveNCERT User Guide',
        description: 'Complete guide to using the SolveNCERT learning platform.',
      }}
    >
      <div className="max-w-screen-lg mx-auto px-5 py-10">

        {/* Hero */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-violet-600 mb-4 shadow-lg shadow-blue-500/30">
            <BookOpen size={24} className="text-white" />
          </div>
          <h1 className="text-3xl md:text-4xl font-display font-bold text-[var(--text-primary)]">SolveNCERT User Guide</h1>
          <p className="lead text-[var(--text-muted)] max-w-2xl mx-auto mt-3">
            Everything you need — how to operate the site on your phone, laptop or tablet, where every feature lives,
            which access you need, and which tool is the best pick for each task.
          </p>
        </div>

        {/* Table of contents */}
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface-0)] p-5 mb-8">
          <h2 className="flex items-center gap-2 font-serif font-bold text-[var(--text-primary)] mb-3"><ListChecks size={18} className="text-blue-500" /> What&rsquo;s in this guide</h2>
          <ol className="grid sm:grid-cols-2 gap-x-6 gap-y-1 text-sm text-[var(--text-secondary)] list-decimal list-inside">
            <li><Link href="#quickstart" className="no-underline hover:text-blue-500">Quick start (5 steps)</Link></li>
            <li><Link href="#nav" className="no-underline hover:text-blue-500">Getting around the site</Link></li>
            <li><Link href="#devices" className="no-underline hover:text-blue-500">Phone / laptop / tablet</Link></li>
            <li><Link href="#access" className="no-underline hover:text-blue-500">What needs login / premium</Link></li>
            <li><Link href="#features" className="no-underline hover:text-blue-500">Every feature explained</Link></li>
            <li><Link href="#tools" className="no-underline hover:text-blue-500">Best tool for each task</Link></li>
            <li><Link href="#subjects" className="no-underline hover:text-blue-500">Subject-by-subject</Link></li>
            <li><Link href="#tips" className="no-underline hover:text-blue-500">Pro tips</Link></li>
          </ol>
        </div>

        {/* Quickstart */}
        <h2 id="quickstart" className="font-serif font-bold text-2xl text-[var(--text-primary)] mb-4 flex items-center gap-2"><Lightbulb size={20} className="text-amber-500" /> Quick Start</h2>
        <ol className="space-y-3 mb-8">
          <Step n={1}>Open the site on any device — no app install needed. Everything works in the browser.</Step>
          <Step n={2}><strong>Browse solutions for free:</strong> open a subject → pick a chapter → pick an exercise → read the solution. You can read a limited number of solutions as a guest.</Step>
          <Step n={3}><strong>Sign up free:</strong> tap <em>Sign Up</em> in the top-right (or use the ☰ menu on mobile). Signing in unlocks unlimited AI tools.</Step>
          <Step n={4}><strong>Get 1 month free trial:</strong> every new account gets a <strong>free 1-month Premium trial</strong> — no card required. This unlocks offline-free downloads, mock tests, study room and more.</Step>
          <Step n={5}><strong>Pick a Mood (UI/theme):</strong> use the <em>Moods</em> / <em>Layers</em> button in the header to choose UI-1, UI-2 or UI-3, and the ☀/▢/🌙 buttons for light/dark/system look. Your choice is remembered.</Step>
        </ol>

        {/* Navigation */}
        <h2 id="nav" className="font-serif font-bold text-2xl text-[var(--text-primary)] mb-4 flex items-center gap-2"><PanelTop size={20} className="text-blue-500" /> Getting Around the Site</h2>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          The main navigation bar (header) is the same on every page. On a laptop it shows the menu across the top;
          on a phone it is tucked behind the ☰ (three-line) menu button.
        </p>

        <div className="mb-3"><HeaderDiagram /></div>
        <p className="text-[11px] text-[var(--text-muted)] mb-6">Desktop header — menu on the left, search / moods / theme on the right.</p>

        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <SectionCard icon={Home} title="On a laptop / tablet (wide screens)">
            <ul className="list-disc list-inside">
              <li><strong>Home</strong> — the landing page with all subjects.</li>
              <li><strong>Solutions</strong> ▾ — dropdown of every subject&rsquo;s solved answers.</li>
              <li><strong>Books</strong> — browse all Class 9 books &amp; chapters.</li>
              <li><strong>AI Tools</strong> ▾ — all AI features in one dropdown.</li>
              <li><strong>Study Room</strong> — live collaborative whiteboard.</li>
              <li><strong>More</strong> ▾ — History, Syllabus, About, Contact.</li>
            </ul>
          </SectionCard>
          <SectionCard icon={Menu} title="On a phone (narrow screens)">
            <ul className="list-disc list-inside">
              <li>Tap the <strong>☰ (three-line) button</strong> bottom-right of the header to open the full menu.</li>
              <li>Tap a top-level item once to jump, or tap the <strong>▾ arrow</strong> on <em>Solutions</em> / <em>AI Tools</em> to expand sub-menus.</li>
              <li>Tap any option to go to that page; the menu closes automatically.</li>
              <li><strong>Search</strong>, <strong>Moods</strong> and <strong>Sign Up</strong> stay visible as icons even on mobile.</li>
            </ul>
          </SectionCard>
        </div>

        <h3 className="font-serif font-bold text-lg text-[var(--text-primary)] mb-3">Inside a chapter (solution page)</h3>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          Every chapter lists its questions with full, step-by-step solutions. Here&rsquo;s the layout:
        </p>
        <div className="mb-6"><ChapterDiagram /></div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 mb-8">
          {[
            { i: <BookOpen size={14} />, t: 'Exercises', d: 'Tab/tap to switch between exercises of a chapter.' },
            { i: <Layers size={14} />, t: 'Moods & Theme', d: 'Change the look of the whole site anytime.' },
            { i: <BookMarked size={14} />, t: 'Bookmark', d: 'Save questions to read later — see Bookmarks page.' },
            { i: <Heart size={14} />, t: 'Thumbs rating', d: 'Rate how helpful a solution was.' },
            { i: <MessageCircleQuestion size={14} />, t: 'AI Follow-up', d: 'Ask AI to explain, simplify or extend any answer.' },
            { i: <Download size={14} />, t: 'Download PDF', d: 'Save the chapter/exercise as a formatted PDF.' },
            { i: <Feather size={14} />, t: 'Read Aloud', d: 'Listen to the solution (text-to-speech).' },
            { i: <Flag size={14} />, t: 'Report', d: 'Flag an issue in a question or answer.' },
          ].map(({ i, t, d }) => (
            <div key={t} className="rounded-xl border border-[var(--border)] bg-[var(--surface-0)] p-3">
              <div className="flex items-center gap-2 font-semibold text-[var(--text-primary)] text-sm"><span className="text-blue-500">{i}</span>{t}</div>
              <p className="text-xs text-[var(--text-muted)] mt-1">{d}</p>
            </div>
          ))}
        </div>

        {/* Devices */}
        <h2 id="devices" className="font-serif font-bold text-2xl text-[var(--text-primary)] mb-4 flex items-center gap-2"><Monitor size={20} className="text-blue-500" /> Phone · Laptop · Tablet</h2>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          The site adapts automatically to your screen. The same account and progress work on every device.
        </p>
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <DeviceSection icon={Smartphone} title="Phone" points={[
            'Open the browser — no app needed.',
            'Use the ☰ menu to reach every feature.',
            'Tap anything; buttons are large and thumb-friendly.',
            'Rotate to landscape for wider study-room whiteboard views.',
            'Great for quick doubts, quizzes and flash cards on the go.',
          ]} />
          <DeviceSection icon={Laptop} title="Laptop / Desktop" points={[
            'Full menu visible across the top — no menu hunting.',
            'Best for typing long doubts, writing practice papers and notes.',
            'Use keyboard shortcuts and faster multi-tab browsing.',
            'Best for the Study Room whiteboard with a mouse.',
            'Download PDFs for offline study.',
          ]} />
          <DeviceSection icon={Tablet} title="Tablet" points={[
            'Acts like a laptop in landscape, a phone in portrait.',
            'Great for reading long solutions comfortably.',
            'Good for study-room sketching with a stylus.',
            'Everything is touch-friendly.',
          ]} />
        </div>

        {/* Access */}
        <h2 id="access" className="font-serif font-bold text-2xl text-[var(--text-primary)] mb-4 flex items-center gap-2"><Crown size={20} className="text-amber-500" /> What Needs Login / Premium</h2>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          There are three access levels: <strong>Guest</strong> (no account), <strong>Free account</strong>, and <strong>Premium</strong> (or free trial). Here&rsquo;s the map:
        </p>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="text-left text-[var(--text-muted)]">
                <th className="border-b border-[var(--border)] p-3 font-semibold">Feature</th>
                <th className="border-b border-[var(--border)] p-3 font-semibold">Guest</th>
                <th className="border-b border-[var(--border)] p-3 font-semibold">Free account</th>
                <th className="border-b border-[var(--border)] p-3 font-semibold">Premium / trial</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text-secondary)]">
              {[
                ['Browse chapters & subjects', '✓', '✓', '✓'],
                ['Read solved answers', '✓ (limited)', '✓', '✓'],
                ['AI tools (Ask Anything, AI Learn, Notes...)', '✗', '✓', '✓'],
                ['Quizzes & Flash Cards', '✗', '✓', '✓'],
                ['Mock Tests & Practice Papers', '✗', '✗', '✓'],
                ['Study Room (live whiteboard)', '✗', '✗', '✓'],
                ['Download PDF solutions', '✗', '✗', '✓'],
                ['Ad-free & priority AI', '✗', '✗', '✓'],
              ].map((r, i) => (
                <tr key={i} className="border-b border-[var(--border-subtle)]">
                  <td className="p-3 text-[var(--text-primary)] font-medium">{r[0]}</td>
                  <td className="p-3">{r[1]}</td>
                  <td className="p-3">{r[2]}</td>
                  <td className="p-3">{r[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="rounded-xl border border-amber-200/70 bg-amber-50 dark:bg-amber-950/30 dark:border-amber-800/50 p-4 mb-8 flex gap-3">
          <Info size={18} className="text-amber-500 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-amber-800 dark:text-amber-300">
            <strong>No card, no payment needed to start.</strong> Every new account automatically receives a
            <strong> 1-month free Premium trial</strong>. When it ends, keep the free account or upgrade to Premium
            (Rs. 99/month) — see <Link href="/premium">Premium</Link> and <Link href="/pricing">Pricing</Link>.
          </p>
        </div>

        {/* Features */}
        <h2 id="features" className="font-serif font-bold text-2xl text-[var(--text-primary)] mb-4 flex items-center gap-2"><LayoutGrid size={20} className="text-blue-500" /> Every Feature Explained</h2>

        <h3 className="font-serif font-bold text-lg text-[var(--text-primary)] mb-3 flex items-center gap-2"><BookOpen size={16} className="text-blue-500" /> Solutions (Solved Answers)</h3>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          The core of the site. Every NCERT chapter has <strong>step-by-step solved answers</strong> in the official board pattern:
          Given / To Find / Solution, numbered steps, formulas, and the final answer boxed. Each solution has <strong>Read Aloud</strong>,
          <strong> Bookmark</strong>, <strong>Rate</strong>, <strong>AI Follow-up</strong>, and <strong>Download PDF</strong>.
        </p>

        <SectionCard icon={Sparkles} title="AI Tools — what each one is for">
          <ul className="list-disc list-inside space-y-1.5">
            {ROUTES.ai.map(a => (
              <li key={a.name}>
                <strong>{a.name}{a.href ? ' — ' : ''}</strong>
                {a.href ? <Link href={a.href} className="no-underline">{a.href}</Link> : ''}
                <span className="text-[var(--text-muted)]"> · {a.desc}</span>
              </li>
            ))}
          </ul>
        </SectionCard>

        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <SectionCard icon={Download} title="Download PDF">
            <p>Open any chapter/exercise and tap <strong>Download</strong>. The site generates a neatly formatted PDF
            (headings, spacing and lists) you can save or print for offline study.</p>
          </SectionCard>
          <SectionCard icon={BookMarked} title="Bookmarks">
            <p>Tap the bookmark on a question to save it. Revisit everything later from the <Link href="/bookmarks" className="no-underline">Bookmarks</Link> page — perfect for revision lists.</p>
          </SectionCard>
          <SectionCard icon={History} title="History">
            <p>Every question you open is recorded. Jump back to anything you&rsquo;ve studied from the <Link href="/history" className="no-underline">History</Link> page.</p>
          </SectionCard>
          <SectionCard icon={Award} title="Quizzes & Mock Tests">
            <p><Link href="/quizzes" className="no-underline">Quizzes</Link> check your chapter understanding with MCQs.
            <Link href="/mock-tests" className="no-underline">Mock Tests</Link> mix MCQs with subjective questions in a timed test.</p>
          </SectionCard>
          <SectionCard icon={PenTool} title="Practice Papers">
            <p><Link href="/practice" className="no-underline">Practice Papers</Link> give board-style subjective questions. Export or print them, then use <Link href="/answer-checker" className="no-underline">Answer Checker</Link> to mark your attempt.</p>
          </SectionCard>
          <SectionCard icon={Users} title="Study Room (Whiteboard)">
            <p><Link href="/study-room" className="no-underline">Study Room</Link> is a live collaborative whiteboard — draw, solve and share with up to 10 friends in real time. Share an invite link.</p>
          </SectionCard>
          <SectionCard icon={Gift} title="Referral">
            <p>Invite friends through the <Link href="/referral" className="no-underline">Referral</Link> page and earn rewards when they join.</p>
          </SectionCard>
          <SectionCard icon={Search} title="Search">
            <p>Use the 🔍 icon in the header to jump straight to any chapter or question by typing a keyword (e.g. “Quadrilaterals 8.2”).</p>
          </SectionCard>
        </div>

        {/* Tools */}
        <h2 id="tools" className="font-serif font-bold text-2xl text-[var(--text-primary)] mb-4 flex items-center gap-2"><Zap size={20} className="text-amber-500" /> Best Tool for Each Task</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="text-left text-[var(--text-muted)]">
                <th className="border-b border-[var(--border)] p-3 font-semibold">Task</th>
                <th className="border-b border-[var(--border)] p-3 font-semibold">Best tool</th>
                <th className="border-b border-[var(--border)] p-3 font-semibold">Why / tips</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text-secondary)]">
              {[
                ['See the official answer to a question', 'Solved Answers (Solutions)', 'Matches the NCERT board pattern exactly.'],
                ['I didn’t understand a step', 'AI Follow-up → Explain', 'On the solution page, ask AI to explain/simplify.'],
                ['Quick doubt on anything, even beyond textbooks', 'Ask Anything', 'Ask any question, any subject — instant answer, no limits.'],
                ['Learn a topic step by step', 'AI Learn (Doubt Solver)', 'Guided step-by-step AI tutor.'],
                ['Revise a chapter fast', 'Notes Generator + Flash Cards', 'Notes for one-click summary; cards for recall.'],
                ['Check my written answer', 'Answer Checker', 'Upload/paste your answer, get board-pattern marking.'],
                ['Test chapter knowledge', 'Quizzes', 'MCQs with instant feedback.'],
                ['Practice for the exam', 'Practice Papers + Mock Tests', 'Timed subjective + MCQ, export & print.'],
                ['Study with friends', 'Study Room (Whiteboard)', 'Live collaborative solving.'],
                ['Read solutions offline', 'Download PDF', 'Save as PDF for offline reading.'],
                ['Save questions to revise later', 'Bookmark / History', 'Bookmark manually; History auto-logs.'],
                ['Listen instead of read', 'Read Aloud', 'Text-to-speech on any solution.'],
              ].map((r, i) => (
                <tr key={i} className="border-b border-[var(--border-subtle)]">
                  <td className="p-3 text-[var(--text-primary)] font-medium">{r[0]}</td>
                  <td className="p-3">{r[1]}</td>
                  <td className="p-3">{r[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Subjects */}
        <h2 id="subjects" className="font-serif font-bold text-2xl text-[var(--text-primary)] mb-4 flex items-center gap-2"><FileText size={20} className="text-blue-500" /> Subject-by-Subject</h2>
        <div className="grid md:grid-cols-2 gap-3 mb-8">
          {ROUTES.solutions.map(s => (
            <Link key={s.name} href={s.href ?? '#'} className="rounded-xl border border-[var(--border)] hover:border-blue-400 p-3 flex items-start gap-3 bg-[var(--surface-0)] no-underline group">
              <div className="flex-1">
                <div className="flex items-center gap-2 font-semibold text-[var(--text-primary)] text-sm group-hover:text-blue-500">
                  {s.name} <ArrowRight size={13} className="text-blue-500" />
                </div>
                <p className="text-xs text-[var(--text-muted)] mt-0.5">{s.desc}</p>
              </div>
            </Link>
          ))}
        </div>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-8">
          Every subject page lists its chapters as cards; each chapter opens its solutions. On <Link href="/books" className="no-underline">Books</Link> you can browse every book at once.
          A <Link href="/answers" className="no-underline">Syllabus</Link> overview is available too.
        </p>

        {/* Tips */}
        <h2 id="tips" className="font-serif font-bold text-2xl text-[var(--text-primary)] mb-4 flex items-center gap-2"><Star size={20} className="text-amber-400" /> Pro Tips</h2>
        <SectionCard icon={CheckCircle2} title="Make the most of SolveNCERT">
          <ul className="list-disc list-inside space-y-1.5">
            <li><strong>Claim the free 1-month trial</strong> right after signing up to unlock everything immediately.</li>
            <li><strong>Sign in on every device</strong> so your bookmarks, history and progress follow you.</li>
            <li><strong>Use Download PDF</strong> before your data plan runs out — study offline anywhere.</li>
            <li><strong>Use Notes + Flash Cards</strong> the night before an exam for fast revision.</li>
            <li><strong>Keep a consistent UI</strong> (pick a Mood once) so the site looks the same every time.</li>
            <li><strong>Report issues</strong> with the flag button — wrong/hard-to-read solutions get fixed quickly.</li>
            <li><strong>Contact the team</strong> anytime via the <Link href="/contact" className="no-underline">Contact</Link> page if something isn&rsquo;t clear.</li>
          </ul>
        </SectionCard>

        <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface-0)] p-6 mt-8 flex items-start gap-4">
          <HelpCircle size={22} className="text-blue-500 flex-shrink-0 mt-0.5" />
          <div className="text-sm text-[var(--text-secondary)] leading-relaxed">
            <p className="font-semibold text-[var(--text-primary)] mb-1">Need more help?</p>
            <p>Head to <Link href="/contact" className="no-underline">Contact Us</Link>, or read our
            <Link href="/about" className="no-underline"> About</Link>, <Link href="/terms" className="no-underline">Terms</Link> and
            <Link href="/privacy" className="no-underline">Privacy Policy</Link> pages.
            This guide is also linked from the footer under Company.</p>
          </div>
        </div>

        <p className="text-xs text-[var(--text-muted)] mt-8 pt-6 border-t border-[var(--border)]">Last updated: August 2026</p>
      </div>
    </Layout>
  );
}
