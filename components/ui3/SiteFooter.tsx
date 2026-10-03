'use client'

import { Heart } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { SolveNCERTLogo, NovexaLogo } from '@/components/ui/Logo'

const COLUMNS: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: 'Study',
    links: [
      { label: 'Solved Answers', href: '/answers' },
      { label: 'Get Books', href: '/books' },
      { label: 'Ask Anything', href: '/ask-anything' },
      { label: 'AI Learn', href: '/ai-learn' },
      { label: 'Notes Generator', href: '/notes' },
      { label: 'Answer Checker', href: '/answer-checker' },
      { label: 'Flash Cards', href: '/flash-cards' },
      { label: 'Quizzes', href: '/quizzes' },
      { label: 'Practice Papers', href: '/practice' },
      { label: 'Mock Tests', href: '/mock-tests' },
    ],
  },
  {
    title: 'Class 9',
    links: [
      { label: 'Mathematics', href: '/class-9/maths/ganita-manjari' },
      { label: 'Science', href: '/class-9/science/exploration' },
      { label: 'English', href: '/class-9/english/kaveri' },
      { label: 'Social Science', href: '/class-9/sst/understanding-society-india-and-beyond' },
      { label: 'IT', href: '/class-9/it' },
      { label: 'Advanced Mathematics', href: '/class-9/advanced-maths/advanced-mathematics' },
      { label: 'Advanced Science', href: '/class-9/advanced-science/science-advanced' },
      { label: 'Sanskrit', href: '/class-9/sanskrit' },
      { label: 'Hindi', href: '/class-9/hindi' },
      { label: 'Arts', href: '/class-9/arts/madhurima' },
      { label: 'Kaushal Vikas', href: '/class-9/kaushal-vikas/kaushal-vikas' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Contact', href: '/contact' },
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Use', href: '/terms' },
      { label: 'Refund Policy', href: '/refund-policy' },
      { label: 'Premium', href: '/premium' },
    ],
  },
]

const SOCIALS = [
  { src: '/ui3-logos/instagram.svg', label: 'Instagram' },
  { src: '/ui3-logos/x.svg', label: 'X' },
  { src: '/ui3-logos/youtube.svg', label: 'YouTube' },
  { src: '/ui3-logos/facebook.svg', label: 'Facebook' },
  { src: '/ui3-logos/telegram.svg', label: 'Telegram' },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card/40">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3 lg:grid-cols-8">
          <div className="lg:col-span-2">
            <SolveNCERTLogo size={30} withText textSize="text-[15px]" />
            <p className="mt-4 max-w-xs text-xs leading-relaxed text-muted-foreground">
              AI-powered NCERT solutions for CBSE Class 9 — human-verified, board-pattern
              answers. Learn smarter. Score higher. Updated for the 2026 revised syllabus.
            </p>
            <div className="mt-5 flex gap-2">
              {SOCIALS.map(({ src, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="grid size-8 place-items-center rounded-lg border border-border opacity-70 transition-all hover:border-primary/50 hover:opacity-100"
                >
                  <Image src={src} alt="" width={16} height={16} className="size-4 brightness-0 invert" />
                </a>
              ))}
            </div>
          </div>

          {COLUMNS.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3 className="text-xs font-bold tracking-wide uppercase">{col.title}</h3>
              <ul className="mt-4 flex flex-col gap-2.5">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-xs text-muted-foreground transition-colors hover:text-primary">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div className="lg:col-span-1">
            <h3 className="text-xs font-bold tracking-wide uppercase">NDe</h3>
            <p className="mt-1 text-[11px] font-medium tracking-[0.14em] text-[var(--text-muted)]">formerly NOVEXA</p>
            <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
              SolveNCERT by NDE — built by NDe (formerly NOVEXA) for students — free NCERT solutions, AI learning tools and a
              distraction-free study room.
            </p>
            <div className="mt-5">
              <NovexaLogo size={20} withText />
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 sm:flex-row">
          <p className="text-[11px] text-muted-foreground">
            © {new Date().getFullYear()} SolveNCERT for CBSE. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
            Made with <Heart className="size-3 fill-primary text-primary" /> for students
          </p>
        </div>
      </div>
    </footer>
  )
}
