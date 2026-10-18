// Shared route + image lookups for the UI-3 landing. Keeps nav, hero orbit
// and subject cards pointing at the same real destination routes.

import type { ComponentType } from 'react'
import {
  Atom, BookOpen, Code2, Cpu, Dna, Globe2, Languages, Sigma, SquareSigma,
} from 'lucide-react'

export type Ui3SubjectLink = {
  id: string
  name: string
  meta: string
  href: string
  image?: string
  icon: ComponentType<{ className?: string }>
}

export const SUBJECT_LINKS: Ui3SubjectLink[] = [
  { id: 'maths',            name: 'Mathematics',          meta: 'Ganita Manjari',       href: '/class-9/maths/ganita-manjari',                    image: '/ui3-images/subject-mathematics.png',      icon: Sigma },
  { id: 'science',          name: 'Science',              meta: 'Exploration',          href: '/class-9/science/exploration',                    image: '/ui3-images/subject-science.png',          icon: Atom },
  { id: 'english',          name: 'English',              meta: 'Kaveri',               href: '/class-9/english/kaveri',                         image: '/ui3-images/subject-english.png',          icon: BookOpen },
  { id: 'sst',              name: 'Social Science',       meta: 'Understanding Society', href: '/class-9/sst/understanding-society-india-and-beyond', image: '/ui3-images/subject-social-science.png',  icon: Globe2 },
  { id: 'it-part-a',        name: 'IT Part A',            meta: 'Employability Skills', href: '/class-9/it',                                     image: '/ui3-images/subject-it-a.png',             icon: Cpu },
  { id: 'it-part-b',        name: 'IT Part B',            meta: 'IT Code 402',          href: '/class-9/it',                                     icon: Code2 },
  { id: 'advanced-maths',   name: 'Advanced Mathematics', meta: 'Optional',             href: '/class-9/advanced-maths/advanced-mathematics',    image: '/ui3-images/subject-advanced-math.png',    icon: SquareSigma },
  { id: 'advanced-science', name: 'Advanced Science',     meta: 'Optional',             href: '/class-9/advanced-science/science-advanced',      image: '/ui3-images/subject-advanced-science.png', icon: Dna },
  { id: 'sanskrit',         name: 'Sanskrit',              meta: 'R1/R2 Sharda · R3 Iravati', href: '/class-9/sanskrit',                              image: '/ui3-images/subject-sanskrit.png',         icon: Languages },
  { id: 'hindi',            name: 'Hindi',                meta: 'R1/R2 Ganga · R3 Reva', href: '/class-9/hindi',                                  image: '/ui3-images/subject-hindi.png',            icon: Languages },
]

/** Simple name → route map used by the nav "Solutions" dropdown. */
export const SOLUTIONS_DROPDOWN = [
  { label: 'Mathematics',          href: '/class-9/maths/ganita-manjari',    desc: 'Ganita Manjari' },
  { label: 'Science',              href: '/class-9/science/exploration',     desc: 'Exploration' },
  { label: 'English',              href: '/class-9/english/kaveri',          desc: 'Kaveri' },
  { label: 'Social Science',       href: '/class-9/sst/understanding-society-india-and-beyond', desc: 'Understanding Society' },
  { label: 'IT Part A',            href: '/class-9/it',                      desc: 'Employability Skills' },
  { label: 'IT Part B',            href: '/class-9/it',                      desc: 'IT Code 402' },
  { label: 'Advanced Mathematics', href: '/class-9/advanced-maths/advanced-mathematics', desc: 'Optional' },
  { label: 'Advanced Science',     href: '/class-9/advanced-science/science-advanced',   desc: 'Optional' },
  { label: 'Sanskrit',             href: '/class-9/sanskrit',                desc: 'Sharda & Iravati' },
  { label: 'Hindi',                href: '/class-9/hindi',                   desc: 'Ganga & Reva' },
]

export type NavItem = {
  label: string
  badge?: string
  href?: string
  authOnly?: boolean
  items?: { label: string; href: string; badge?: string; desc?: string }[]
}

/** Shared header nav — used by every UI (ui3 SiteHeader + ui1/ui2 Header). */
export const NAV: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Solutions', items: SOLUTIONS_DROPDOWN },
  { label: 'Books', href: '/books' },
  {
    label: 'AI Tools',
    badge: 'New',
    items: [
      { label: 'Ask Anything', href: '/ask-anything', badge: 'New', desc: 'ask anything — even beyond your textbooks' },
      { label: 'AI Learn', href: '/ai-learn', desc: 'step-by-step AI tutor' },
      { label: 'Doubt Solver', href: '/ai-learn', desc: 'instant doubt solutions' },
      { label: 'Whiteboard', href: '/study-room', desc: 'draw & solve together live' },
      { label: 'Notes Generator', href: '/notes', badge: 'New', desc: 'one-click chapter notes' },
      { label: 'Answer Checker', href: '/answer-checker', badge: 'New', desc: 'board-exam answer checking' },
      { label: 'Flash Cards', href: '/flash-cards', desc: 'quick revision cards' },
      { label: 'Quizzes', href: '/quizzes', desc: 'chapter-wise MCQs' },
      { label: 'Practice Papers', href: '/practice', desc: 'subjective board practice' },
      { label: 'Mock Tests', href: '/mock-tests', desc: 'mixed MCQ + subjective test' },
    ],
  },
  { label: 'Study Room', badge: 'New', href: '/study-room' },
  {
    label: 'Pricing',
    authOnly: true,
    href: '/pricing',
  },
  {
    label: 'More',
    items: [
      { label: 'Settings', href: '/settings/profile', desc: 'account & appearance' },
      { label: 'History', href: '/history' },
      { label: 'Syllabus', href: '/answers' },
      { label: 'User Guide', href: '/guide' },
      { label: 'About Us', href: '/about' },
      { label: 'Contact Us', href: '/contact' },
    ],
  },
]
