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
    { name: 'Social Science', desc: 'Understanding Society - Geography, History, Civics, Economics', href: '/class-9/sst' },
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

/** Real product screenshot with a caption underneath. */
function Shot({ src, alt, caption, priority = false }: { src: string; alt: string; caption: string; priority?: boolean }) {
  return (
    <figure className="mb-4">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        className="w-full h-auto rounded-xl border border-[var(--border)] shadow-soft"
      />
      <figcaption className="text-[11px] text-[var(--text-muted)] mt-2 leading-relaxed">{caption}</figcaption>
    </figure>
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
            <li><Link href="#explain-simplify" className="no-underline hover:text-blue-500">Explain &amp; Simplify buttons</Link></li>
            <li><Link href="#saved" className="no-underline hover:text-blue-500">Saved solutions list</Link></li>
            <li><Link href="#whats-new" className="no-underline hover:text-blue-500">What&rsquo;s New pop-ups</Link></li>
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

        <Shot
          src="/guide/header-desktop.png"
          alt="SolveNCERT desktop header with menu, search, theme controls and Sign Up"
          caption="Desktop header — menu on the left (Home, Solutions, Books, AI Tools, Study Room), search / moods / theme and Sign Up on the right."
          priority
        />

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
          Every chapter lists its questions with full, step-by-step solutions. Each question card opens with an
          <strong> Answer Key</strong> and the full <strong>School Level Solution</strong>, plus one-tap actions:
        </p>
        <Shot
          src="/guide/solution-card.png"
          alt="Question card with Answer Key, School Level Solution and Save, Read, Explain and Simplify actions"
          caption="A question card — Answer Key first, then the board-pattern School Level Solution, with Save, Read / Copy, Explain, Simplify and AI Follow-up actions underneath."
        />
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 mb-8">
          {[
            { i: <BookOpen size={14} />, t: 'Exercises', d: 'Tab/tap to switch between exercises of a chapter.' },
            { i: <Layers size={14} />, t: 'Moods & Theme', d: 'Change the look of the whole site anytime.' },
            { i: <BookMarked size={14} />, t: 'Save', d: 'Keep any solution in your Saved list — Settings → Saved.' },
            { i: <MessageCircleQuestion size={14} />, t: 'Explain & Simplify', d: 'One tap: plain-language walkthrough or a short SIMPLIFIED version.' },
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
                ['Ad-free experience', '✓', '✓', '✓'],
                ['Priority AI responses', '✗', '✗', '✓'],
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

        <h3 id="explain-simplify" className="font-serif font-bold text-lg text-[var(--text-primary)] mb-3 flex items-center gap-2"><MessageCircleQuestion size={16} className="text-violet-500" /> Explain &amp; Simplify (one tap under any solution)</h3>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          Stuck on a heavy solution? Two buttons sit right under every answer. <strong>Explain</strong> opens an
          <strong> Expert Explanation</strong> — the same steps rewritten as a plain-language walkthrough. <strong>Simplify</strong> returns a
          short <strong>SIMPLIFIED</strong> version with the minimum you need to understand the idea. Nothing to type; ask follow-ups
          from <strong>AI Follow-up</strong> if you still want more.
        </p>
        <Shot
          src="/guide/explain-panel.png"
          alt="Expert Explanation panel opened under a solution"
          caption="Explain — the Expert Explanation panel expands under the question with a step-by-step, plain-language walkthrough."
        />
        <Shot
          src="/guide/simplify-panel.png"
          alt="Simplified version of a solution"
          caption="Simplify — a short SIMPLIFIED version of the same answer, for a quick re-read before the exam."
        />

        <h3 id="saved" className="font-serif font-bold text-lg text-[var(--text-primary)] mb-3 flex items-center gap-2"><BookMarked size={16} className="text-blue-500" /> Saved Solutions (your kept answers)</h3>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          Tap <strong>Save</strong> on any solution card and it is stored in your account — subject, chapter, date and a jump link.
          Open the list anytime from <strong>Settings → Saved</strong>: every card shows <em>Open &amp; scroll to solution</em>, which takes
          you back to the exact question. Saved solutions follow your account on every device.
        </p>
        <Shot
          src="/guide/saved-list.png"
          alt="Settings Saved page listing a saved maths solution"
          caption="Settings → Saved — every solution you kept, with subject, chapter, date and a one-tap jump back to the question."
        />

        <h3 id="whats-new" className="font-serif font-bold text-lg text-[var(--text-primary)] mb-3 flex items-center gap-2"><Sparkles size={16} className="text-amber-500" /> What&rsquo;s New pop-ups</h3>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          When we ship something big, a <strong>What&rsquo;s New</strong> pop-up appears once — it walks you through the update one card at a
          time (<em>Update 1 of …</em>) with a <strong>Next update</strong> button. You can close it any time; it never blocks the site and
          will not show the same update twice. Revisit old announcements any time from <strong>Settings → Updates</strong>.
        </p>
        <Shot
          src="/guide/whats-new.png"
          alt="What's New announcement pop-up"
          caption="What&rsquo;s New — a one-time card-per-update announcement; close it and it stays closed."
        />

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

        <p className="text-xs text-[var(--text-muted)] mt-8 pt-6 border-t border-[var(--border)]">Last updated: November 2026</p>
      </div>
    </Layout>
  );
}
