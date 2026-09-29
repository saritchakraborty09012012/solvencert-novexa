# SolveNCERT

Free, AI-assisted, **human-verified NCERT solutions** for CBSE Class 9 — built for the
**2026 Revised Syllabus**.

Every question in every textbook chapter has its own static, directly readable answer
page written and verified by teachers following CBSE board marking patterns. AI is used
for follow-up learning (doubts, notes, flashcards, quizzes), never for generating the
core solutions.

**Live:** https://solvencert-novexa.vercel.app

---

## Table of contents

- [Features](#features)
- [Tech stack](#tech-stack)
- [Brand](#brand)
- [Quick start](#quick-start)
- [Environment variables](#environment-variables)
- [Database setup](#database-setup)
- [Search (Algolia)](#search-algolia)
- [Scripts](#scripts)
- [Testing](#testing)
- [Project structure](#project-structure)
- [SEO & AI surfaces](#seo--ai-surfaces)
- [Deployment](#deployment)
- [Adding content](#adding-content)
- [Payments](#payments)
- [Roadmap](#roadmap)
- [Security notes](#security-notes)

---

## Features

**Solutions (the core product)**
- Chapter-wise answers for Maths (Ganita Manjari), Science (Exploration), English
  (Kaveri), Social Science, Hindi (Khoj / Reva), Sanskrit (Sharda / Iravati), Arts,
  Kaushal Vikas, Information Technology, plus Advanced Maths & Advanced Science
- In-text questions **and** end-of-chapter exercises — both fully answered
- KaTeX-rendered maths, labelled diagrams, boxed final answers in CBSE format
- Answer keys + full school-method solutions
- Chapter PDF downloads and free NCERT book PDF downloads

**AI tools (support layer, not the core)**
- **Ask Anything** — doubt chatbot for questions beyond the textbook
- **AI Learn** — step-by-step concept tutor
- **Answer Checker** — grades your written answer like a board examiner
- **Notes Generator** — one-click chapter notes
- **Flash Cards** — automatic quick-revision cards
- **Quizzes, Practice Papers & Mock Tests** — chapter-wise and full-length

**Study & collaboration**
- Study Room — realtime whiteboard + chat with friends (invite links, host OTP)
- Guest access with a free signup tier, plus a Premium plan
- Bookmarks, reading history, referral rewards, dark/light + three UI themes

**Platform**
- Supabase auth, profiles, RLS-secured data, avatars, payment verification
- Algolia search with a local-search fallback when the free-tier quota is hit
- PostHog product analytics
- Responsive (phone/laptop/tablet), SEO-complete, and PWA-capable

---

## Tech stack

| Layer | Choice |
|---|---|
| Framework | Next.js **16** (Pages Router) + React 18 |
| Language | TypeScript 5.5 |
| Styling | Tailwind CSS 3.4 + CSS variables / design tokens |
| State | Zustand |
| Backend / Auth / DB | Supabase (Postgres + Auth + Storage + Realtime) |
| AI | Google Gemini (primary), Groq (fallback / search & verification) |
| Search | Algolia (free tier, quota-protected, local fallback) |
| Analytics | PostHog |
| PDF generation | jsPDF |
| Math rendering | KaTeX (self-hosted — no CDN, so tracker blockers can't break it) |
| Tests | Playwright |
| Hosting | Vercel, or Cloudflare Pages via `@opennextjs/cloudflare` |
| Node | 20 |

---

## Brand

```
NDe
formerly NOVEXA
```

- **NDe** — the public-facing short name. Easy to say, spell, type and remember.
  Also indexed as `NDE`, `nde`, `nDe`, `NdE`, `nDE`.
- **NDe: NoirDemons** — the full brand form, used on the company pages
  (About, Contact, Privacy, Terms, Refund, Premium) and in structured data.
  Also written `Noir Demons` / `noirdemons`.
- **NOVEXA** — previous / parent name, always credited as *formerly NOVEXA*.
- **SolveNCERT** — the product.

Shared constants live in `lib/site.ts` (`BRAND_SHORT`, `BRAND_FULL`,
`BRAND_LOCKUP`, `SITE_ALTERNATE_NAMES`, `BRAND_KEYWORDS`).

| Surface | Form used |
|---|---|
| Visible UI (logo, footers, PDF footer) | `NDe` / `formerly NOVEXA` |
| Company pages | `NDe: NoirDemons` |
| Meta tags, JSON-LD, `robots.txt`, `llm.txt`, `sitemap.xml` | `NDe · NoirDemons` (+ all spellings) |

---

## Quick start

**Prerequisites:** Node.js 20+, npm 10+, a Supabase project.

```bash
git clone https://github.com/saritchakraborty09012012/SolveNCERT.git
cd SolveNCERT
npm install
cp .env.example .env.local   # then fill in your own values (see below)
npm run dev
# → http://localhost:3000
```

> `.env.local` is gitignored. Never commit it, and never paste real values into
> the README or any other tracked file.

---

## Environment variables

Create `.env.local` in the project root. **Names only are documented here — fill in
your own values from your own dashboards.**

```env
# Supabase (required)
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

# AI (at least one provider key is required)
GEMINI_API_KEY=
GEMINI_FLASHCARD_KEY=
GROQ_API_KEY=
GROQ_AI_SEARCH_KEY=
GROQ_PAYMENT_VERIFY_KEY=

# Search (optional — falls back to local search if unset)
NEXT_PUBLIC_ALGOLIA_APP_ID=
NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY=

# Analytics (optional)
NEXT_PUBLIC_POSTHOG_KEY=
NEXT_PUBLIC_POSTHOG_HOST=

# Contact form (optional — Resend)
RESEND_API_KEY=
CONTACT_EMAIL=

# SEO (optional)
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=
```

| Variable | Exposed to browser? | Purpose |
|---|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | yes | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | yes | Supabase anon (RLS-scoped) key |
| `SUPABASE_SERVICE_ROLE_KEY` | **no** | Server-only — admin writes, payment verification |
| `GEMINI_API_KEY` | **no** | Primary AI model for all AI endpoints |
| `GEMINI_FLASHCARD_KEY` | **no** | Optional second Gemini key (rate-limit split) |
| `GROQ_API_KEY` | **no** | Groq fallback model |
| `GROQ_AI_SEARCH_KEY` | **no** | Groq-powered semantic search |
| `GROQ_PAYMENT_VERIFY_KEY` | **no** | Groq key reserved for payment verification |
| `NEXT_PUBLIC_ALGOLIA_APP_ID` | yes | Algolia application id |
| `NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY` | yes | Algolia **search-only** key (safe to expose) |
| `NEXT_PUBLIC_POSTHOG_KEY` | yes | PostHog project key |
| `NEXT_PUBLIC_POSTHOG_HOST` | yes | PostHog host |
| `RESEND_API_KEY` | **no** | Sends contact-form mail |
| `CONTACT_EMAIL` | **no** | Inbox that receives contact-form mail |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | yes | Google Search Console verification |

Anything prefixed `NEXT_PUBLIC_` is baked into the client bundle — never put a
secret behind that prefix.

---

## Database setup

SQL lives in `supabase/`. Run files **in numeric order** in the Supabase SQL Editor:

1. `schema.sql` — baseline: `profiles`, `invitee_profiles`, `study_sessions`,
   `payments`, `ai_chats`, storage buckets (`avatars`, `payment-screenshots`),
   RLS policies, and the auto-profile-creation trigger.
2. `migrations_v9.sql` → `v17_ALL_IN_ONE_RUN_THIS.sql` — feature migrations
   (activity history, notes & flashcards, practice papers, feedback, collab chat,
   host OTP, quizzes).
3. Fixups when needed: `FIX_SIGNUP_ERROR.sql`, `v18_FIX_TRIGGER_AND_GROUPS.sql`,
   `mock-tests-migration.sql` + `mock-tests-rls-safe.sql`.

---

## Search (Algolia)

1. Create an index named `solvencert_content`.
2. Set `NEXT_PUBLIC_ALGOLIA_APP_ID` and `NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY`.
3. The app self-limits to the free tier (~300 searches/day) and silently falls back
   to local search when the quota is exhausted, so users never see an error.

---

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Start the dev server on `http://localhost:3000` |
| `npm run build` | Production build |
| `npm start` | Serve the production build |
| `npm run deploy` | `opennextjs-cloudflare build` + `deploy` |
| `npm run preview` | Build and preview the Cloudflare worker locally |
| `npx tsc --noEmit` | Typecheck (use this — `next lint` is not yet configured for Next 16) |
| `npx playwright test` | Run the end-to-end suite |

---

## Testing

Playwright is configured in `playwright.config.ts`:

- Tests in `tests/` (`solvencert.spec.ts`, `answer-verification.spec.ts`)
- Starts `npm run dev` automatically and targets `http://localhost:3000`
- Chromium only, single worker, traces on first retry, screenshots/video on failure
- HTML report → `playwright-report/`, JSON → `test-results.json`

```bash
npx playwright install chromium   # first run only
npx playwright test
npx playwright show-report
```

---

## Project structure

```
solvencert/
├── components/
│   ├── ai-learn/        AI tutor UI
│   ├── auth/            AuthModal, sign-in flows
│   ├── avatar/          Avatar picker
│   ├── collab/          Study-room collaboration
│   ├── features/        Subject dropdowns, notes viewer, quiz UI, feedback, dock
│   ├── flashcards/      Flash-card deck UI
│   ├── layout/          Layout (SEO head), Header, Footer, CompanyLayout, Dashboard
│   ├── mock-test/       Timed mock-test UI
│   ├── practice/        Practice-paper UI
│   ├── quiz/            Quiz player
│   ├── ui/              Brand logos (NDe lockup), shared primitives
│   └── ui3/             Current interface (SiteHeader, SiteFooter, HomePage, hero…)
├── hooks/               Reusable React hooks
├── lib/
│   ├── content*.ts      All chapter content (one file per subject/stream)
│   ├── site.ts          Site URL + brand constants (single source of truth)
│   ├── supabase.ts      Browser/server Supabase clients
│   ├── groq.ts, gemini.ts  AI providers
│   ├── algolia.ts       Search client + local fallback
│   ├── analytics.ts     PostHog
│   ├── pdf.ts           jsPDF chapter export
│   ├── history.ts, feedback.ts, guestLimits.ts, book-images.ts
│   └── ai-learn/ flashcards/ mock-tests/ practice/ quiz/ avatar/
├── pages/
│   ├── api/
│   │   ├── ai/          ask, ask-anything, explain, search
│   │   ├── ai-learn/ answer-checker/ flashcards/ notes/ practice/
│   │   ├── mock-test/ quiz/ payment/
│   │   ├── contact.ts   Contact form (Resend)
│   │   └── sitemap.ts   Generated sitemap (rewritten to /sitemap.xml)
│   ├── class-9/         Static subject routes (english, maths, science…)
│   ├── [classSlug]/…    Generic dynamic chapter routes
│   ├── _document.tsx    Global head: brand, keywords, favicons, theme/UI bootstrap
│   ├── index.tsx        Homepage (+ Organization/WebSite JSON-LD)
│   ├── answers.tsx books.tsx search.tsx guide.tsx about.tsx contact.tsx
│   ├── privacy.tsx terms.tsx refund-policy.tsx
│   ├── premium.tsx pricing.tsx referral.tsx invite.tsx
│   ├── notes.tsx flashcards.tsx flash-cards.tsx quizzes.tsx mock-tests.tsx
│   ├── practice.tsx answer-checker.tsx ask-anything.tsx ai-learn.tsx
│   ├── study-room.tsx profile.tsx settings.tsx bookmarks.tsx history.tsx
│   ├── collab/join/[code].tsx   flash-cards/share/[token].tsx
│   ├── notes/shared/[token].tsx quizzes/[id].tsx quizzes/[id]/results.tsx
│   ├── 404.tsx _app.tsx
│   └── auth/callback.tsx
├── store/               Zustand stores (auth, theme, ui, collab, bookmarks, …)
├── styles/              globals.css (tokens + self-hosted KaTeX)
├── supabase/            schema.sql + ordered migrations
├── tests/               Playwright specs
├── types/ utils/        Shared types and helpers
├── public/
│   ├── robots.txt       Crawl rules + brand aliases
│   ├── llm.txt          Full site brief for AI assistants
│   ├── manifest.json    PWA manifest
│   └── ebooks/          NCERT book PDFs served at /ebooks (gitignored)
├── .env.example         Env var names, no values
├── next.config.js       Security headers, legacy redirects, sitemap rewrite
├── playwright.config.ts
└── wrangler.jsonc       Cloudflare Workers (OpenNext) config
```

---

## SEO & AI surfaces

| Surface | Purpose |
|---|---|
| `public/robots.txt` | Crawl rules, sitemap pointer, brand alias list |
| `public/llm.txt` | Complete plain-text product brief for AI assistants |
| `/sitemap.xml` | Rewritten to `pages/api/sitemap.ts`, generated from the content tree |
| `_document.tsx` | Site-wide `keywords`, `application-name`, `og:site_name`, favicons |
| `components/layout/Layout.tsx` | Per-page title/description/canonical/OG/Twitter + JSON-LD |
| `pages/index.tsx` | `WebSite` + `Organization` structured data with `alternateName` variants |
| Chapter pages | `Article` JSON-LD with author/publisher |

Headers set in `next.config.js`: `X-Frame-Options`, `X-Content-Type-Options`,
`X-XSS-Protection`, `Referrer-Policy`; `llm.txt` served as `text/plain`; the sitemap
and ebook PDFs get long-lived cache headers.

---

## Deployment

### Vercel

```bash
vercel
```

Set the environment variables from the table above in the project settings.

### Cloudflare Pages (OpenNext)

```bash
npm run preview     # local worker preview
npm run deploy      # opennextjs-cloudflare build && deploy
```

`wrangler.jsonc` defines the worker (`nodejs_compat` on, assets from
`.open-next/assets`).

**Dashboard build settings (if you connect the repo directly):**

- Build command: `npm run build`
- Output directory: `.next`
- Node version: `20`

### After every deploy

- Submit `/sitemap.xml` in Google Search Console
- Confirm `llm.txt` returns `text/plain`
- Set the env vars on the platform — `.env.local` is **not** uploaded

---

## Adding content

All chapter content lives in `lib/content*.ts`, one file per subject/stream
(`content-maths-full.ts`, `content-science.ts`, `content-english.ts`,
`content-hindi-reva.ts`, `content-iravati.ts`, `content-kaushal*.ts`, …).

To add material:

1. Add or edit the chapter object and its exercise questions/answers.
2. Mark tricky questions with `isHard: true` and add `trickMethod` /
   `conceptualMethod`.
3. `lib/content.ts` re-exports the active set used by routes and the sitemap
   generator — the sitemap picks new chapters up automatically on the next build.

---

## Payments

Premium activation is manual today:

1. Supabase → Table Editor → `payments` → set `status = 'verified'`.
2. Supabase → `profiles` → set `plan = 'premium'` and `premium_ends_at`.

Automating this with a Supabase Edge Function is on the roadmap.

---

## Roadmap

- [ ] UPI QR on `/premium`
- [ ] Move book PDFs into Supabase storage
- [ ] More chapter solutions across all streams
- [ ] OAuth providers in Supabase Auth
- [ ] Script to populate the Algolia index
- [ ] Supabase Realtime for Study Room sync
- [ ] Automated payment verification
- [ ] Configure ESLint for Next 16 (replace the removed `next lint`)

---

## Security notes

- `.env.local` is listed in `.gitignore` — keep it that way.
- Server-only keys (`SUPABASE_SERVICE_ROLE_KEY`, `GEMINI_*`, `GROQ_*`,
  `RESEND_API_KEY`, `CONTACT_EMAIL`) must never be prefixed with `NEXT_PUBLIC_`.
- Supabase access is guarded by RLS; the service-role key is used only from API
  routes.
- Algolia uses a **search-only** key in the browser.
- Found a leak in a commit or PR? Rotate the key first, then open an issue.
