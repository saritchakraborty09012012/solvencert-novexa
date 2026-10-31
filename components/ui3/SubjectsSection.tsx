'use client'

import Link from 'next/link'
import {
  ArrowRight,
  Atom,
  BookOpen,
  ChevronRight,
  Code2,
  Cpu,
  Dna,
  Globe2,
  Languages,
  Palette,
  Sigma,
  Sprout,
  SquareSigma,
} from 'lucide-react'
import type { ComponentType } from 'react'
import { useState } from 'react'
import { Modal } from './Modal'

type Subject = {
  name: string
  meta: string
  image: string
  href?: string
  icon: ComponentType<{ className?: string }>
}

const SUBJECTS: Subject[] = [
  { name: 'Mathematics', meta: '8 Chapters', image: '/ui3-images/subject-mathematics.png', href: '/class-9/maths/ganita-manjari', icon: Sigma },
  { name: 'Science', meta: '13 Chapters', image: '/ui3-images/subject-science.png', href: '/class-9/science/exploration', icon: Atom },
  { name: 'English', meta: '8 Chapters', image: '/ui3-images/subject-english.png', href: '/class-9/english/kaveri', icon: BookOpen },
  { name: 'Social Science', meta: 'Parts I & II', image: '/ui3-images/subject-social-science.png', href: '/class-9/sst', icon: Globe2 },
  { name: 'IT Part A', meta: '5 Units', image: '/ui3-images/subject-it-a.png', href: '/class-9/it/employability-skills', icon: Cpu },
  { name: 'IT Part B', meta: '5 Units', image: '/ui3-images/subject-it-b.png', href: '/class-9/it/information-technology', icon: Code2 },
  { name: 'Advanced Mathematics', meta: '6 Chapters', image: '/ui3-images/subject-advanced-math.png', href: '/class-9/advanced-maths/advanced-mathematics', icon: SquareSigma },
  { name: 'Advanced Science', meta: '10 Chapters', image: '/ui3-images/subject-advanced-science.png', href: '/class-9/advanced-science/science-advanced', icon: Dna },
  { name: 'Sanskrit', meta: 'R1, R2 and R3', image: '/ui3-images/subject-sanskrit.png', href: '/class-9/sanskrit', icon: Languages },
  { name: 'Hindi', meta: 'R1, R2 and R3', image: '/ui3-images/subject-hindi.png', href: '/class-9/hindi', icon: Languages },
]

const WIDE = [
  { name: 'Arts', meta: '17 Chapters', image: '/ui3-images/subject-arts.png', href: '/class-9/arts/madhurima', icon: Palette },
  { name: 'Kaushal Vikas', meta: '10 Chapters', image: '/ui3-images/subject-kaushal-vikas.png', href: '/class-9/kaushal-vikas/kaushal-vikas', icon: Sprout },
]

export function SubjectsSection() {
  const [active, setActive] = useState<string | null>(null)

  return (
    <section id="subjects" className="mx-auto max-w-7xl px-4 py-14 lg:px-8 lg:py-20">
      <div className="panel rounded-2xl border border-primary/15 p-4 sm:p-6 lg:p-8">
        <div className="mb-6 flex items-center justify-between gap-4">
          <h2 className="gold-text text-xl font-bold tracking-tight sm:text-2xl">
            Explore All Subjects
          </h2>
          <button
            type="button"
            onClick={() => setActive('All Subjects')}
            className="group inline-flex items-center gap-1.5 rounded-full border border-primary/50 bg-primary/10 px-3.5 py-1.5 text-xs font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground sm:text-sm"
          >
            View All Subjects
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {SUBJECTS.map(({ name, meta, image, href, icon: Icon }) =>
            href ? (
              <Link
                key={name}
                href={href}
                className="group relative overflow-hidden rounded-xl border border-border bg-card text-left transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_12px_30px_-12px_var(--gold)]"
              >
                <div className="relative w-full overflow-hidden" style={{ aspectRatio: '16 / 11' }}>
                  <div
                    aria-hidden="true"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background:
                        'radial-gradient(80% 80% at 50% 30%, color-mix(in oklch, var(--gold) 22%, transparent), transparent 72%)',
                    }}
                  />
                  <img
                    src={image}
                    alt={name}
                    loading="lazy"
                    onLoad={(e) => e.currentTarget.classList.add('loaded')}
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                    className="transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                </div>
                <div className="flex items-center gap-2 px-3 pt-1 pb-3">
                  <Icon className="size-4 shrink-0 text-primary" />
                  <span className="min-w-0 leading-tight">
                    <span className="block truncate text-[12px] font-semibold">{name}</span>
                    <span className="block text-[10px] text-muted-foreground">{meta}</span>
                  </span>
                </div>
              </Link>
            ) : (
              <button
                key={name}
                type="button"
                onClick={() => setActive(name)}
                className="group relative overflow-hidden rounded-xl border border-border bg-card text-left transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_12px_30px_-12px_var(--gold)]"
              >
                <div className="relative w-full overflow-hidden" style={{ aspectRatio: '16 / 11' }}>
                  <div
                    aria-hidden="true"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background:
                        'radial-gradient(80% 80% at 50% 30%, color-mix(in oklch, var(--gold) 22%, transparent), transparent 72%)',
                    }}
                  />
                  <img
                    src={image}
                    alt={name}
                    loading="lazy"
                    onLoad={(e) => e.currentTarget.classList.add('loaded')}
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                    className="transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                </div>
                <div className="flex items-center gap-2 px-3 pt-1 pb-3">
                  <Icon className="size-4 shrink-0 text-primary" />
                  <span className="min-w-0 leading-tight">
                    <span className="block truncate text-[12px] font-semibold">{name}</span>
                    <span className="block text-[10px] text-muted-foreground">{meta}</span>
                  </span>
                </div>
              </button>
            )
          )}
        </div>

        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {WIDE.map(({ name, meta, image, href, icon: Icon }) => {
            const inner = (
              <>
                <div
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background:
                      'radial-gradient(70% 90% at 40% 50%, color-mix(in oklch, var(--gold) 18%, transparent), transparent 72%)',
                  }}
                />
                <img
                  src={image}
                  alt={name}
                  loading="lazy"
                  onLoad={(e) => e.currentTarget.classList.add('loaded')}
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                  className="transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-card via-card/55 to-card/85" />
                <div className="relative flex w-full items-center justify-between gap-3 px-4">
                  <span className="flex items-center gap-2.5">
                    <Icon className="size-5 text-primary" />
                    <span className="leading-tight">
                      <span className="block text-sm font-semibold">{name}</span>
                      <span className="block text-[11px] text-muted-foreground">{meta}</span>
                    </span>
                  </span>
                  <span className="grid size-7 place-items-center rounded-full border border-primary/40 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <ChevronRight className="size-4" />
                  </span>
                </div>
              </>
            );
            return href ? (
              <Link
                key={name}
                href={href}
                className="group relative flex h-24 items-center overflow-hidden rounded-xl border border-border text-left transition-all hover:border-primary/50"
              >
                {inner}
              </Link>
            ) : (
              <button
                key={name}
                type="button"
                onClick={() => setActive(name)}
                className="group relative flex h-24 items-center overflow-hidden rounded-xl border border-border text-left transition-all hover:border-primary/50"
              >
                {inner}
              </button>
            );
          })}
        </div>
      </div>

      <Modal
        open={active !== null}
        onClose={() => setActive(null)}
        title={active ?? ''}
        subtitle="Pick a chapter to open its step-by-step NCERT solutions."
      >
        <ul className="flex flex-col gap-2">
          {[
            'Chapter 1 — Fundamentals',
            'Chapter 2 — Key Concepts',
            'Chapter 3 — Problem Solving',
            'Chapter 4 — Revision & Extra Questions',
          ].map((c) => (
            <li key={c}>
              <button
                type="button"
                className="flex w-full items-center justify-between rounded-lg border border-border px-4 py-3 text-sm transition-colors hover:border-primary/50 hover:text-primary"
              >
                {c}
                <ChevronRight className="size-4" />
              </button>
            </li>
          ))}
        </ul>
      </Modal>
    </section>
  )
}