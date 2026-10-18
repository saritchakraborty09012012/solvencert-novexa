'use client'

import { Check, ChevronDown, Crown, History, Layers, LogOut, Menu, MessageCircleQuestion, Monitor, Moon, Search, Settings, Sun, User, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Modal } from './Modal'
import { SolveNCERTLogo } from '@/components/ui/Logo'
import AuthModal from '@/components/auth/AuthModal'
import QueryModal from '@/components/features/QueryModal'
import { useAuthStore } from '@/store/authStore'
import { useUIStore } from '@/store/uiStore'
import { useThemeStore } from '@/store/themeStore'
import FadeNotice, { LIGHT_THEME_NOTICE } from '@/components/ui/FadeNotice'
import { getInitialsColor } from '@/utils/helpers'
import { NAV } from './data'

const POPULAR = ['Polynomials', 'Atoms and Molecules', 'The Fun They Had', 'Motion', 'Tissues']

const UI_OPTIONS = [
  { id: 'ui1' as const, label: 'UI-1', name: 'Classic Nerdy',     desc: 'Clean, academic & focused' },
  { id: 'ui2' as const, label: 'UI-2', name: 'Aesthetic Vintage', desc: 'Warm, timeless & elegant' },
  { id: 'ui3' as const, label: 'UI-3', name: 'Signature Noir',    desc: 'Bold, cinematic & premium' },
]

const THEME_OPTIONS = [
  { id: 'system' as const, icon: Monitor, label: 'System' },
  { id: 'light'  as const, icon: Sun,     label: 'Light'  },
  { id: 'dark'   as const, icon: Moon,    label: 'Dark'   },
]

function ThemeRow({ ui, theme, onPick }: {
  ui: string
  theme: string
  onPick: (id: 'system' | 'light' | 'dark', blocked: boolean) => void
}) {
  return (
    <div className="flex items-center gap-1">
      {THEME_OPTIONS.map(({ id, icon: Icon, label }) => {
        const blocked = id === 'light' && ui === 'ui3'
        return (
          <button
            key={id}
            type="button"
            onClick={() => onPick(id, blocked)}
            title={blocked ? 'Not supported in Signature Noir' : label}
            className={`flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-semibold transition-colors ${
              theme === id ? 'bg-primary/15 text-primary' : 'text-foreground/70 hover:bg-primary/10 hover:text-primary'
            } ${blocked ? 'opacity-40 cursor-not-allowed' : ''}`}
          >
            <Icon className="size-3.5" /> {label}
          </button>
        )
      })}
    </div>
  )
}

export function SiteHeader() {
  const router = useRouter()
  const { user, isGuest, signOut } = useAuthStore()
  const { ui, setUi } = useUIStore()
  const { theme, setTheme } = useThemeStore()
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [queryOpen, setQueryOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [authModal, setAuthModal] = useState<'login' | 'signup' | null>(null)
  const [profileOpen, setProfileOpen] = useState(false)
  const [uiOpen, setUIOpen] = useState(false)
  const [themeNotice, setThemeNotice] = useState<string | null>(null)
  const navRef = useRef<HTMLDivElement>(null)
  const profileRef = useRef<HTMLDivElement>(null)
  const uiRef = useRef<HTMLDivElement>(null)

  const pickTheme = (id: 'system' | 'light' | 'dark', blocked: boolean) => {
    if (blocked) {
      setThemeNotice(LIGHT_THEME_NOTICE)
      window.setTimeout(() => setThemeNotice(null), 3200)
      return
    }
    setTheme(id)
  }

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpenMenu(null)
      if (profileRef.current && !profileRef.current.contains(e.target as Node)) setProfileOpen(false)
      if (uiRef.current && !uiRef.current.contains(e.target as Node)) setUIOpen(false)
    }
    document.addEventListener('mousedown', onDocClick)
    return () => document.removeEventListener('mousedown', onDocClick)
  }, [])

  const submitSearch = () => {
    setSearchOpen(false)
    if (query.trim()) router.push(`/search?q=${encodeURIComponent(query.trim())}`)
  }

  const initials = user ? (user.initials || user.full_name?.slice(0, 2).toUpperCase() || 'SN') : ''
  const colors = user ? getInitialsColor(initials) : { fg: '#e2c37a' }
  const trialActive = !!user && user.plan === 'trial' && !!user.trial_ends_at && new Date(user.trial_ends_at) > new Date()

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-2 px-3 lg:gap-4 lg:px-8">
          <Link href="/" className="flex shrink-0 items-center gap-2.5">
            <SolveNCERTLogo size={30} withText textSize="text-[15px]" />
          </Link>

          <div ref={navRef} className="hidden items-center gap-1 lg:flex">
            {NAV.filter(n => !n.authOnly || !isGuest).map((item, i) => (
              <div key={item.label} className="relative">
                {item.items ? (
                  <button
                    type="button"
                    id={item.label === 'AI Tools' ? 'nav-ai-tools' : undefined}
                    onClick={() => setOpenMenu(openMenu === item.label ? null : item.label)}
                    aria-expanded={openMenu === item.label}
                    className={`flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                      openMenu === item.label ? 'text-primary' : 'text-foreground/80 hover:text-primary'
                    }`}
                  >
                    {item.label}
                    {item.badge ? (
                      <span className="ml-0.5 rounded-sm bg-primary px-1 py-px text-[9px] font-bold uppercase text-primary-foreground">
                        {item.badge}
                      </span>
                    ) : null}
                    <ChevronDown className="size-3.5 opacity-70" />
                  </button>
                ) : (
                  <Link
                    href={item.href ?? '/'}
                    onClick={() => setOpenMenu(null)}
                    className={`flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                      i === 0 ? 'text-primary' : 'text-foreground/80 hover:text-primary'
                    }`}
                  >
                    {item.label}
                    {item.badge ? (
                      <span className="ml-0.5 rounded-sm bg-primary px-1 py-px text-[9px] font-bold uppercase text-primary-foreground">
                        {item.badge}
                      </span>
                    ) : null}
                  </Link>
                )}

                {item.items && openMenu === item.label ? (
                  <div className="panel absolute left-0 top-full mt-2 w-80 rounded-xl border border-primary/20 p-1.5 shadow-2xl">
                    {item.items.map((sub) => (
                      <Link
                        key={sub.label}
                        href={sub.href}
                        onClick={() => setOpenMenu(null)}
                        className="flex items-center w-full rounded-lg px-3 py-2 text-left text-sm text-foreground/85 transition-colors hover:bg-primary/10 hover:text-primary"
                      >
                        <span className="flex w-36 flex-shrink-0 items-center gap-1.5">
                          {sub.label}
                          {sub.badge && (
                            <span className="rounded-sm bg-primary/20 px-1 py-px text-[9px] font-bold uppercase text-primary">{sub.badge}</span>
                          )}
                        </span>
                        {sub.desc && (
                          <span className="text-[10px] leading-snug text-muted-foreground">- {sub.desc}</span>
                        )}
                      </Link>
                    ))}
                    {item.label === 'More' ? (
                      <div className="mt-1 border-t border-border px-3 pt-2 pb-1">
                        <p className="py-1 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Theme</p>
                        <ThemeRow ui={ui} theme={theme} onPick={pickTheme} />
                      </div>
                    ) : null}
                  </div>
                ) : null}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-1 sm:gap-1.5">
            <button
              type="button"
              id="header-query-btn"
              onClick={() => setQueryOpen(true)}
              aria-label="Send a query"
              title="Send a query"
              className="rounded-md p-1.5 text-red-500 transition-colors hover:bg-red-500/10 hover:text-red-400 sm:p-2"
            >
              <MessageCircleQuestion className="size-5" />
            </button>

            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              aria-label="Search solutions"
              className="rounded-md p-1.5 text-foreground/80 transition-colors hover:text-primary sm:p-2"
            >
              <Search className="size-5" />
            </button>

            <div className="relative" ref={uiRef}>
              <button
                type="button"
                onClick={() => setUIOpen((v) => !v)}
                aria-expanded={uiOpen}
                aria-label="Switch interface"
                title="Switch interface"
                className="flex items-center gap-1.5 rounded-md border border-primary/20 bg-primary/10 px-2 py-2 text-xs font-semibold text-foreground/85 transition-colors hover:border-primary/50 hover:text-primary sm:px-2.5"
              >
                <Layers className="size-4 text-primary" />
                <span className="hidden lg:inline">{UI_OPTIONS.find((o) => o.id === ui)?.name}</span>
                <ChevronDown className={`hidden size-3.5 opacity-70 transition-transform sm:inline ${uiOpen ? 'rotate-180' : ''}`} />
              </button>

              {uiOpen ? (
                <div className="panel absolute right-0 top-full mt-2 w-64 rounded-xl border border-primary/20 p-1.5 shadow-2xl">
                  <p className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                    Moods
                  </p>
                  {UI_OPTIONS.map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => {
                        setUi(opt.id)
                        setUIOpen(false)
                      }}
                      className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left transition-colors hover:bg-primary/10"
                    >
                      <span className="flex-1">
                        <span className="block text-sm font-semibold">{opt.name}</span>
                        <span className="block text-[11px] text-muted-foreground">{opt.desc}</span>
                      </span>
                      {ui === opt.id ? <Check className="size-4 text-primary" /> : null}
                    </button>
                  ))}
                </div>
              ) : null}
            </div>

            {isGuest ? (
              <>
                <button
                  type="button"
                  onClick={() => setAuthModal('login')}
                  className="hidden rounded-md px-3 py-2 text-sm font-medium text-foreground/85 transition-colors hover:text-primary sm:block"
                >
                  Login
                </button>
                <button
                  type="button"
                  onClick={() => setAuthModal('signup')}
                  className="gold-btn rounded-lg px-3 py-2 text-sm font-semibold transition-transform hover:scale-[1.03] active:scale-95 sm:px-4"
                >
                  Sign Up
                </button>
              </>
            ) : (
              <div className="relative" ref={profileRef}>
                <button
                  type="button"
                  onClick={() => setProfileOpen((v) => !v)}
                  aria-expanded={profileOpen}
                  className="flex items-center gap-1.5 rounded-full border border-primary/40 bg-primary/10 py-1 pr-2 pl-1 transition-colors hover:border-primary/70"
                >
                  <span
                    className="grid size-6 place-items-center rounded-full text-[10px] font-bold"
                    style={{ background: colors.fg, color: '#fff' }}
                  >
                    {initials}
                  </span>
                  <ChevronDown className="size-3.5 text-foreground/70" />
                </button>
                {profileOpen ? (
                  <div className="panel absolute right-0 top-full mt-2 w-56 rounded-xl border border-primary/20 p-1.5 shadow-2xl">
                    <div className="px-3 py-2">
                      <p className="truncate text-sm font-semibold">{user?.full_name}</p>
                      <p className="truncate text-[11px] text-muted-foreground">{user?.email}</p>
                    </div>
                    <Link
                      href="/profile"
                      onClick={() => setProfileOpen(false)}
                      className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-foreground/85 transition-colors hover:bg-primary/10 hover:text-primary"
                    >
                      <User className="size-4" /> Profile
                    </Link>
                    <Link
                      href="/settings/profile"
                      onClick={() => setProfileOpen(false)}
                      className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-foreground/85 transition-colors hover:bg-primary/10 hover:text-primary"
                    >
                      <Settings className="size-4" /> Settings
                    </Link>
                    <Link
                      href="/history"
                      onClick={() => setProfileOpen(false)}
                      className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-foreground/85 transition-colors hover:bg-primary/10 hover:text-primary"
                    >
                      <History className="size-4" /> History
                    </Link>
                    {!isGuest && user?.plan !== 'premium' && !trialActive && (
                      <Link
                        href="/premium"
                        onClick={() => setProfileOpen(false)}
                        className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-amber-400 transition-colors hover:bg-amber-400/10 hover:text-amber-300"
                      >
                        <Crown className="size-4" /> {user?.plan === 'free' ? 'Free Trial' : 'Upgrade'}
                      </Link>
                    )}
                    <button
                      type="button"
                      onClick={() => {
                        setProfileOpen(false)
                        signOut()
                      }}
                      className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-destructive transition-colors hover:bg-destructive/10"
                    >
                      <LogOut className="size-4" /> Sign Out
                    </button>
                  </div>
                ) : null}
              </div>
            )}

            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileOpen}
              className="rounded-md p-1.5 text-foreground/80 transition-colors hover:text-primary sm:p-2 lg:hidden"
            >
              {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {mobileOpen ? (
          <div className="border-t border-border bg-background px-4 py-3 lg:hidden">
            <ul className="flex flex-col">
              {NAV.filter(n => !n.authOnly || !isGuest).map((item) => (
                <li key={item.label} className="border-b border-border last:border-0">
                  {item.items ? (
                    <>
                      <button
                        type="button"
                        onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                        className="flex w-full items-center justify-between py-3 text-sm font-medium"
                      >
                        <span className="flex items-center gap-2">
                          {item.label}
                          {item.badge ? (
                            <span className="rounded-sm bg-primary px-1 py-px text-[9px] font-bold uppercase text-primary-foreground">
                              {item.badge}
                            </span>
                          ) : null}
                        </span>
                        <ChevronDown
                          className={`size-4 transition-transform ${
                            mobileExpanded === item.label ? 'rotate-180 text-primary' : 'opacity-60'
                          }`}
                        />
                      </button>
                      {mobileExpanded === item.label ? (
                        <div className="pb-3 pl-3">
                          {item.items.map((sub) => (
                            <Link
                              key={sub.label}
                              href={sub.href}
                              onClick={() => {
                                setMobileExpanded(null)
                                setMobileOpen(false)
                              }}
                              className="flex w-full items-center py-2 text-left text-sm text-muted-foreground hover:text-primary"
                            >
                              <span className="flex w-36 flex-shrink-0 items-center gap-1.5">
                                {sub.label}
                                {sub.badge && (
                                  <span className="rounded-sm bg-primary/20 px-1 py-px text-[9px] font-bold uppercase text-primary">{sub.badge}</span>
                                )}
                              </span>
                              {sub.desc && (
                                <span className="text-[10px] leading-snug opacity-70">- {sub.desc}</span>
                              )}
                            </Link>
                          ))}
                          {item.label === 'More' ? (
                            <div className="mt-1 border-t border-border pt-2">
                              <p className="py-1 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Theme</p>
                              <ThemeRow ui={ui} theme={theme} onPick={pickTheme} />
                            </div>
                          ) : null}
                        </div>
                      ) : null}
                    </>
                  ) : (
                    <Link
                      href={item.href ?? '/'}
                      onClick={() => setMobileOpen(false)}
                      className="flex w-full items-center gap-2 py-3 text-sm font-medium"
                    >
                      {item.label}
                      {item.badge ? (
                        <span className="rounded-sm bg-primary px-1 py-px text-[9px] font-bold uppercase text-primary-foreground">
                          {item.badge}
                        </span>
                      ) : null}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </header>

      <FadeNotice text={themeNotice} />

      <Modal
        open={searchOpen}
        onClose={() => setSearchOpen(false)}
        title="Search solutions"
        subtitle="Find any chapter, exercise or question across Class 9."
      >
        <form
          onSubmit={(e) => {
            e.preventDefault()
            submitSearch()
          }}
        >
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="e.g. Number Systems Exercise 1.2"
            className="w-full rounded-lg border border-input bg-background/60 px-4 py-3 text-sm outline-none focus:border-primary/60"
          />
        </form>
        <p className="mt-4 mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Popular searches
        </p>
        <div className="flex flex-wrap gap-2">
          {POPULAR.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setQuery(t)}
              className="rounded-full border border-border px-3 py-1.5 text-xs transition-colors hover:border-primary/50 hover:text-primary"
            >
              {t}
            </button>
          ))}
        </div>
      </Modal>

      {authModal && <AuthModal mode={authModal} onClose={() => setAuthModal(null)} onSwitch={setAuthModal} />}

      <QueryModal open={queryOpen} onClose={() => setQueryOpen(false)} />
    </>
  )
}
