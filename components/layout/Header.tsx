import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  Settings, History, Users, Menu, X,
  Sun, Moon, Monitor, ChevronDown,
  LogIn, UserPlus, LogOut, User,
  Search, Crown, Sparkles, Layers, Check, Zap, MessageCircleQuestion
} from 'lucide-react';
import { SolveNCERTLogo } from '@/components/ui/Logo';
import { useAuthStore } from '@/store/authStore';
import { useThemeStore } from '@/store/themeStore';
import { useUIStore } from '@/store/uiStore';
import { getInitialsColor } from '@/utils/helpers';
import AuthModal from '@/components/auth/AuthModal';
import QueryModal from '@/components/features/QueryModal';
import Dashboard from '@/components/layout/Dashboard';
import { cn } from '@/utils/helpers';
import toast from 'react-hot-toast';
import FadeNotice, { LIGHT_THEME_NOTICE } from '@/components/ui/FadeNotice';
import { NAV } from '@/components/ui3/data';

const POPULAR = ['Polynomials', 'Atoms and Molecules', 'The Fun They Had', 'Motion', 'Tissues'];

export default function Header() {
  const router = useRouter();
  const { user, isGuest, signOut } = useAuthStore();
  const { theme, setTheme } = useThemeStore();
  const { ui, setUi } = useUIStore();

  const [dashOpen,     setDashOpen]     = useState(false);
  const [authModal,    setAuthModal]    = useState<'login'|'signup'|null>(null);
  const [profileOpen,  setProfileOpen]  = useState(false);
  const [premiumPopup, setPremiumPopup] = useState(false);
  const [uiOpen,       setUIOpen]       = useState(false);
  const [openMenu,     setOpenMenu]     = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [mobileOpen,   setMobileOpen]   = useState(false);
  const [searchOpen,   setSearchOpen]   = useState(false);
  const [queryOpen,    setQueryOpen]    = useState(false);
  const [query,        setQuery]        = useState('');
  const [themeNotice,  setThemeNotice]  = useState<string | null>(null);
  const navRef      = useRef<HTMLDivElement>(null);
  const profileRef  = useRef<HTMLDivElement>(null);
  const uiRef       = useRef<HTMLDivElement>(null);

  const flashThemeNotice = (msg: string) => {
    setThemeNotice(msg);
    window.setTimeout(() => setThemeNotice(null), 3200);
  };

  const UI_OPTIONS = [
    { id: 'ui1' as const, label: 'UI-1', name: 'Classic Nerdy',       desc: 'Clean, academic & focused' },
    { id: 'ui2' as const, label: 'UI-2', name: 'Aesthetic Vintage',   desc: 'Warm, timeless & elegant' },
    { id: 'ui3' as const, label: 'UI-3', name: 'Signature Noir',      desc: 'Bold, cinematic & premium' },
  ];

  // ── Trial / upgrade popup ──
  // plan 'free'            → offer the FREE TRIAL first
  // plan 'trial', active   → nothing (enjoy!)
  // plan 'trial', expired  → pay / upgrade now
  useEffect(() => {
    if (!isGuest && user && user.plan !== 'premium') {
      const trialActive = user.plan === 'trial' && user.trial_ends_at && new Date(user.trial_ends_at) > new Date();
      if (trialActive) return;
      const dismissed = sessionStorage.getItem('sn_premium_dismissed');
      if (!dismissed) {
        const t = setTimeout(() => setPremiumPopup(true), 2500);
        return () => clearTimeout(t);
      }
    }
  }, [isGuest, user]);

  const trialActive = !!user && user.plan === 'trial' && !!user.trial_ends_at && new Date(user.trial_ends_at) > new Date();
  const trialExpired = !!user && user.plan === 'trial' && !!user.trial_ends_at && new Date(user.trial_ends_at) <= new Date();

  useEffect(() => {
    function handle(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpenMenu(null);
      if (profileRef.current && !profileRef.current.contains(e.target as Node)) setProfileOpen(false);
      if (uiRef.current && !uiRef.current.contains(e.target as Node)) setUIOpen(false);
    }
    document.addEventListener('mousedown', handle);
    return () => document.removeEventListener('mousedown', handle);
  }, []);

  const submitSearch = () => {
    setSearchOpen(false);
    if (query.trim()) router.push(`/search?q=${encodeURIComponent(query.trim())}`);
  };

  const initials = user ? (user.initials || user.full_name?.slice(0,2).toUpperCase() || 'SN') : '';
  const colors   = user ? getInitialsColor(initials) : { fg: '#2b4ea6' };

  return (
    <>
      <header className="ribbon-bg sticky top-0 z-40 w-full">
        <div className="max-w-screen-xl mx-auto flex h-14 items-center justify-between gap-3 px-3 md:px-5">

          {/* LEFT — dashboard menu + logo */}
          <div className="flex items-center gap-1 flex-shrink-0">
            <button onClick={() => setDashOpen(true)}
              className="p-2 rounded-lg hover:bg-white/10 text-white/80 hover:text-white transition-colors" aria-label="Menu">
              <Menu size={19} />
            </button>
            <SolveNCERTLogo size={28} withText textSize="text-[16px]" linkToHome />
          </div>

          {/* CENTRE — shared nav with dropdowns */}
          <nav ref={navRef} className="hidden items-center gap-0.5 lg:flex">
            {NAV.filter(n => !n.authOnly || !isGuest).map((item, i) => (
              <div key={item.label} className="relative">
                {item.items ? (
                  <button type="button" id={item.label === 'AI Tools' ? 'nav-ai-tools' : undefined}
                    onClick={() => setOpenMenu(openMenu === item.label ? null : item.label)}
                    aria-expanded={openMenu === item.label}
                    className={`flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                      openMenu === item.label ? 'text-white' : 'text-white/80 hover:text-white'}`}>
                    {item.label}
                    {item.badge && (
                      <span className="ml-0.5 rounded-sm bg-white/20 px-1 py-px text-[9px] font-bold uppercase text-white">{item.badge}</span>
                    )}
                    <ChevronDown size={13} className="opacity-70" />
                  </button>
                ) : (
                  <Link href={item.href ?? '/'} onClick={() => setOpenMenu(null)}
                    className={`flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                      i === 0 ? 'text-white' : 'text-white/80 hover:text-white'}`}>
                    {item.label}
                    {item.badge && (
                      <span className="ml-0.5 rounded-sm bg-white/20 px-1 py-px text-[9px] font-bold uppercase text-white">{item.badge}</span>
                    )}
                  </Link>
                )}

                {item.items && openMenu === item.label && (
                  <div className="dropdown-content absolute left-0 top-full mt-2 w-80 py-2 z-50">
                    {item.items.map((sub) => (
                      <Link key={sub.label} href={sub.href} onClick={() => setOpenMenu(null)}
                        className="sidebar-item mx-1 my-0.5 text-sm flex items-center">
                        <span className="flex w-36 flex-shrink-0 items-center gap-1.5">
                          {sub.label}
                          {sub.badge && (
                            <span className="rounded-sm bg-white/20 px-1 py-px text-[9px] font-bold uppercase text-white">{sub.badge}</span>
                          )}
                        </span>
                        {sub.desc && (
                          <span className="text-[10px] leading-snug text-[var(--text-muted)]">- {sub.desc}</span>
                        )}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* RIGHT */}
          <div className="flex items-center gap-1 flex-shrink-0">
            {!isGuest && user?.plan !== 'premium' && !trialActive && (
              <button onClick={() => setPremiumPopup(true)}
                className="hidden md:flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-amber-500/20 border border-amber-400/30 hover:border-amber-300/70 hover:bg-amber-400/25 text-amber-300 text-xs font-semibold transition-all">
                <Crown size={12} /><span>{user?.plan === 'free' ? 'Free Trial' : 'Upgrade'}</span>
              </button>
            )}

            <button onClick={() => setQueryOpen(true)}
              id="header-query-btn"
              aria-label="Send a query" title="Send a query"
              className="p-2 rounded-lg text-red-400 hover:bg-white/10 hover:text-red-300 transition-colors">
              <MessageCircleQuestion size={17} />
            </button>

            <button onClick={() => setSearchOpen(true)}
              className="p-2 rounded-lg hover:bg-white/10 text-white/70 hover:text-white transition-colors" aria-label="Search solutions">
              <Search size={17} />
            </button>

            {/* UI switcher */}
            <div className="relative" ref={uiRef}>
              <button onClick={() => setUIOpen(!uiOpen)}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-all" aria-label="Switch interface" title="Switch interface">
                <Layers size={13} />
                <span className="hidden sm:inline">{UI_OPTIONS.find((o) => o.id === ui)?.name}</span>
                <ChevronDown size={12} className={cn('transition-transform', uiOpen && 'rotate-180')} />
              </button>

              {uiOpen && (
                <div className="dropdown-content absolute right-0 top-11 w-64 py-2 z-50">
                  <p className="px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)]">Moods</p>
                  {UI_OPTIONS.map((opt) => (
                    <button key={opt.id} onClick={() => { setUi(opt.id); setUIOpen(false); }}
                      className="sidebar-item mx-1 my-0.5 text-sm w-[calc(100%-8px)]">
                      <span className="flex-1 text-left">
                        <span className="block text-sm font-semibold text-[var(--text-primary)]">{opt.name}</span>
                        <span className="block text-[11px] font-normal text-[var(--text-muted)]">{opt.desc}</span>
                      </span>
                      {ui === opt.id && <Check size={14} className="text-[var(--brand-primary)] flex-shrink-0" />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Theme */}
            <div className="flex items-center gap-0.5 ml-1 pl-2 border-l border-white/10">
              {([
                { id:'system' as const, icon:<Monitor size={13}/>, label:'System' },
                { id:'light'  as const, icon:<Sun     size={13}/>, label:'Light'  },
                { id:'dark'   as const, icon:<Moon    size={13}/>, label:'Dark'   },
              ]).map(({ id, icon, label }) => {
                const blocked = id === 'light' && ui === 'ui3';
                return (
                  <button key={id}
                    onClick={() => (blocked ? flashThemeNotice(LIGHT_THEME_NOTICE) : setTheme(id))}
                    title={blocked ? 'Not supported in Signature Noir' : label}
                    className={cn('p-1.5 rounded-md transition-all',
                      blocked && 'opacity-40 cursor-not-allowed',
                      theme === id ? 'bg-white/20 text-white shadow-inner' : 'text-white/40 hover:text-white/80 hover:bg-white/10')}>
                    {icon}
                  </button>
                );
              })}
            </div>
            <FadeNotice text={themeNotice} />

            {/* Auth */}
            {isGuest ? (
              <div className="flex items-center gap-1">
                <button onClick={() => setAuthModal('login')}
                  className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/25 hover:bg-white/10 text-white text-xs font-semibold transition-all">
                  <LogIn size={13} /><span>Log In</span>
                </button>
                <button onClick={() => setAuthModal('signup')}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/15 hover:bg-white/25 text-white text-xs font-semibold transition-all">
                  <UserPlus size={13} /><span className="hidden sm:inline">Sign Up</span>
                </button>
              </div>
            ) : (
              <div className="relative" ref={profileRef}>
                <button onClick={() => setProfileOpen(!profileOpen)} className="flex items-center gap-1.5 group">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ring-2 ring-white/25 group-hover:ring-[var(--ribbon-accent)] transition-all overflow-hidden flex-shrink-0"
                    style={{ background: colors.fg, color:'#fff' }}>
                    {user?.avatar_url
                      ? <img src={user.avatar_url} alt={initials} className="w-full h-full object-cover" />
                      : <span>{initials}</span>}
                  </div>
                  <ChevronDown size={12} className="text-white/60 group-hover:text-white hidden sm:block" />
                </button>

                {profileOpen && (
                  <div className="dropdown-content absolute right-0 top-11 w-56 py-2 z-50">
                    <div className="px-4 py-3 border-b border-[var(--border)]">
                      <p className="text-sm font-semibold text-[var(--text-primary)] truncate">{user?.full_name}</p>
                      <p className="text-xs text-[var(--text-muted)] truncate">{user?.email}</p>
                      <span className={cn('mt-1 inline-block px-2 py-0.5 rounded-full text-[10px] font-semibold',
                        user?.plan === 'premium' ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400' :
                        user?.plan === 'trial'   ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' :
                                                   'bg-gray-100 text-gray-600 dark:bg-white/10 dark:text-gray-300')}>
                        {user?.plan === 'trial' ? 'Free Trial' : user?.plan === 'premium' ? 'Premium' : 'Free'}
                      </span>
                    </div>
                    <Link href="/profile"  onClick={() => setProfileOpen(false)} className="sidebar-item mx-1 my-0.5 text-sm"><User size={14} /><span>Profile</span></Link>
                    <Link href="/settings/profile" onClick={() => setProfileOpen(false)} className="sidebar-item mx-1 my-0.5 text-sm"><Settings size={14} /><span>Settings</span></Link>
                    <Link href="/history"  onClick={() => setProfileOpen(false)} className="sidebar-item mx-1 my-0.5 text-sm"><History size={14} /><span>History</span></Link>
                    {user?.plan !== 'premium' && (
                      <button onClick={() => { setProfileOpen(false); setPremiumPopup(true); }}
                        className="sidebar-item mx-1 my-0.5 text-sm w-[calc(100%-8px)] text-amber-400 hover:bg-amber-400/10">
                        <Crown size={14} /><span>Upgrade</span>
                      </button>
                    )}
                    <Link href="/quizzes"  onClick={() => setProfileOpen(false)} className="sidebar-item mx-1 my-0.5 text-sm"><Zap size={14} /><span>Quizzes</span></Link>
                    <hr className="border-[var(--border)] my-1 mx-3" />
                    <button onClick={() => { signOut(); setProfileOpen(false); toast.success('Signed out'); }}
                      className="sidebar-item mx-1 my-0.5 text-sm w-[calc(100%-8px)] text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20">
                      <LogOut size={14} /><span>Sign Out</span>
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Mobile menu toggle */}
            <button onClick={() => setMobileOpen(!mobileOpen)}
              className="rounded-md p-2 text-white/80 hover:text-white transition-colors lg:hidden" aria-label="Toggle navigation menu" aria-expanded={mobileOpen}>
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="border-t border-white/10 px-4 py-3 lg:hidden">
            <ul className="flex flex-col">
              {NAV.filter(n => !n.authOnly || !isGuest).map((item) => (
                <li key={item.label} className="border-b border-white/10 last:border-0">
                  {item.items ? (
                    <>
                      <button type="button" onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                        className="flex w-full items-center justify-between py-3 text-sm font-medium text-white">
                        <span className="flex items-center gap-2">
                          {item.label}
                          {item.badge && (
                            <span className="rounded-sm bg-white/20 px-1 py-px text-[9px] font-bold uppercase text-white">{item.badge}</span>
                          )}
                        </span>
                        <ChevronDown size={14} className={cn('transition-transform', mobileExpanded === item.label && 'rotate-180')} />
                      </button>
                      {mobileExpanded === item.label && (
                        <div className="pb-3 pl-3" style={{ pointerEvents: 'auto' }}>
                          {item.items.map((sub) => (
                            <Link key={sub.label} href={sub.href}
                              onClick={() => { setMobileExpanded(null); setMobileOpen(false); }}
                              className="flex items-center gap-1.5 w-full py-2 text-left text-sm text-white/70 hover:text-white">
                              {sub.label}
                              {sub.badge && (
                                <span className="rounded-sm bg-white/20 px-1 py-px text-[9px] font-bold uppercase text-white">{sub.badge}</span>
                              )}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link href={item.href ?? '/'} onClick={() => setMobileOpen(false)}
                      className="flex w-full items-center gap-2 py-3 text-sm font-medium text-white">
                      {item.label}
                      {item.badge && (
                        <span className="rounded-sm bg-white/20 px-1 py-px text-[9px] font-bold uppercase text-white">{item.badge}</span>
                      )}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>

      {/* Search modal */}
      {searchOpen && (
        <div className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setSearchOpen(false)} />
          <div className="relative w-full max-w-lg bg-[var(--surface-0)] rounded-3xl border border-[var(--border)] shadow-soft-xl overflow-hidden animate-scale-in">
            <div className="flex items-center justify-between px-5 pt-5 pb-3">
              <h3 className="text-lg font-serif font-bold text-[var(--text-primary)]">Search solutions</h3>
              <button onClick={() => setSearchOpen(false)} className="p-1.5 rounded-lg hover:bg-[var(--surface-2)] text-[var(--text-muted)]"><X size={15} /></button>
            </div>
            <form onSubmit={(e) => { e.preventDefault(); submitSearch(); }} className="px-5 pb-5">
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="e.g. Number Systems Exercise 1.2"
                className="input-field w-full px-4 py-3 text-sm"
              />
              <p className="mt-4 mb-2 text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">Popular searches</p>
              <div className="flex flex-wrap gap-2">
                {POPULAR.map((t) => (
                  <button key={t} type="button" onClick={() => setQuery(t)}
                    className="chip px-3 py-1.5 text-xs">
                    {t}
                  </button>
                ))}
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Premium popup */}
      {premiumPopup && (
        <div className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => { setPremiumPopup(false); sessionStorage.setItem('sn_premium_dismissed','1'); }} />
          <div className="relative w-full max-w-sm bg-[var(--surface-0)] rounded-3xl border border-amber-200/70 dark:border-amber-800/50 shadow-soft-xl overflow-hidden animate-scale-in">
            <div className="h-1.5 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500" />
            <div className="absolute -top-16 -right-16 w-44 h-44 rounded-full bg-amber-400/10 blur-3xl pointer-events-none" />
            <button onClick={() => { setPremiumPopup(false); sessionStorage.setItem('sn_premium_dismissed','1'); }}
              className="absolute top-3 right-3 p-1.5 rounded-lg hover:bg-[var(--surface-2)] text-[var(--text-muted)]"><X size={15} /></button>
            <div className="p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 mb-4 animate-pulse-soft shadow-lg shadow-amber-500/30">
                <Crown size={22} className="text-white" />
              </div>
              <h3 className="text-lg font-serif font-bold text-[var(--text-primary)] mb-1">
                {user?.plan === 'free' ? 'Try Premium Free for 1 Month' : 'Your free trial has ended'}
              </h3>
              <p className="text-sm text-[var(--text-muted)] mb-5">
                {user?.plan === 'free'
                  ? 'No card required. Unlock AI Learn, quizzes, mock tests, study rooms & more.'
                  : 'Loved it? Upgrade to keep everything unlocked — AI tools, mock tests, study rooms & more.'}
              </p>
              <div className="flex gap-2">
                <Link href="/premium" onClick={() => { setPremiumPopup(false); sessionStorage.setItem('sn_premium_dismissed','1'); }}
                  className="btn-primary flex-1 justify-center text-sm">
                  {user?.plan === 'free' ? <><Sparkles size={13} /> Activate Free Trial</> : <><Crown size={13} /> Upgrade & Pay</>}
                </Link>
                <button onClick={() => { setPremiumPopup(false); sessionStorage.setItem('sn_premium_dismissed','1'); }}
                  className="btn-ghost text-sm px-4">Later</button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Dashboard open={dashOpen} onClose={() => setDashOpen(false)} onAuthRequest={setAuthModal} />
      {authModal && <AuthModal mode={authModal} onClose={() => setAuthModal(null)} onSwitch={m => setAuthModal(m)} />}
      <QueryModal open={queryOpen} onClose={() => setQueryOpen(false)} />
    </>
  );
}
