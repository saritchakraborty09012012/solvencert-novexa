'use client'

import { ArrowRight, BookOpen, Globe, Sigma } from 'lucide-react'
import { useState } from 'react'
import { useRouter } from 'next/router'
import AuthModal from '@/components/auth/AuthModal'
import { useAuthStore } from '@/store/authStore'

export function JourneyCta() {
  const router = useRouter()
  const { isGuest, loading } = useAuthStore()
  const [authModal, setAuthModal] = useState<'login' | 'signup' | null>(null)

  function handleClick() {
    if (loading) return
    if (isGuest) setAuthModal('signup')
    else router.push('/answers')
  }

  return (
    <section className="mx-auto max-w-7xl px-4 pb-10 lg:px-8">
      <div className="panel relative grid overflow-hidden rounded-2xl border border-primary/25 lg:grid-cols-2">
        <div className="relative z-10 p-6 sm:p-10">
          <h2 className="gold-text text-2xl leading-tight font-extrabold tracking-tight text-balance sm:text-3xl">
            Your Journey to
            <br />
            Excellence Starts Here.
          </h2>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Join thousands of students who are already learning smarter with SolveNCERT.
          </p>
          <button
            type="button"
            onClick={handleClick}
            className="gold-btn group mt-7 inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-bold transition-transform hover:scale-[1.03] active:scale-95"
          >
            Get Started Free
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        <div className="relative h-56 sm:h-72 lg:h-80">
          <div className="absolute inset-0 animate-floaty">
            <img
              src="/ui3-images/trophy-steps.png"
              alt="Golden trophy at the top of ascending steps"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                objectPosition: 'center',
                padding: '0.5rem',
              }}
              className="mix-blend-screen"
            />
          </div>
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 mx-auto max-w-md">
            <BookOpen className="absolute top-6 left-2 size-6 text-primary/45 sm:size-7" />
            <BookOpen className="absolute top-6 right-2 size-6 text-primary/45 sm:size-7" />
            <Sigma className="absolute bottom-16 left-0 size-6 text-primary/35 sm:size-7" />
            <Globe className="absolute right-0 bottom-16 size-6 text-primary/35 sm:size-7" />
          </div>
        </div>
      </div>

      {authModal && <AuthModal mode={authModal} onClose={() => setAuthModal(null)} onSwitch={setAuthModal} />}
    </section>
  )
}
