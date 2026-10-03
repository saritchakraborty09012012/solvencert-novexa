import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import FloatingDock from '@/components/features/FloatingDock';
import SelectionAI from '@/components/features/SelectionAI';
import { FeedbackReprompt } from '@/components/features/FeedbackWidget';
import AiToolRating from '@/components/features/AiToolRating';
import { SiteHeader } from '@/components/ui3/SiteHeader';
import { useAuthStore } from '@/store/authStore';
import { useUIStore } from '@/store/uiStore';
import { useCollabStore } from '@/store/collabStore';
import { supabase } from '@/lib/supabase';
import { describePath } from '@/lib/history';
import { SITE_ALTERNATE_NAME, SITE_ALTERNATE_NAME_NDE, BRAND_KEYWORDS, BRAND_LOCKUP, SITE_URL } from '@/lib/site';

interface LayoutProps {
  children:      React.ReactNode;
  title?:        string;
  description?:  string;
  canonical?:    string;
  ogImage?:      string;   // custom per-page OG image (absolute URL or /public path)
  ogType?:       string;   // 'website' | 'article' — default 'website'
  schema?:       object | object[];  // JSON-LD structured data, injected as <script>
  noFooter?:     boolean;
  noDock?:       boolean;
  bgImage?:      string | null; // /public path of a fixed, viewport-cropped page backdrop (subject themed)
  keywords?:     string;        // per-page SEO keywords (overrides default)
}

const BASE_URL   = SITE_URL;
const DEFAULT_OG = `${BASE_URL}/solvencert-logo-256.png`;
const DEFAULT_DESC = 'SolveNCERT — Free NCERT solutions for CBSE Class 9 as per 2026 Revised Syllabus. Maths, Science, English — AI-powered, human-verified answers.';

export default function Layout({
  children, title, description, canonical, ogImage, ogType = 'website', schema, noFooter, noDock, bgImage, keywords,
}: LayoutProps) {
  const pageTitle = title ? `${title} | SolveNCERT` : 'SolveNCERT — NCERT Solutions for CBSE Class 9';
  const pageDesc  = description || DEFAULT_DESC;
  const canonUrl  = canonical ? `${BASE_URL}${canonical}` : BASE_URL;
  // ogImage can be a full URL or a /public path
  const ogImg     = ogImage
    ? (ogImage.startsWith('http') ? ogImage : `${BASE_URL}${ogImage}`)
    : DEFAULT_OG;

  // Support single object or array of schema objects
  const schemaArr = schema
    ? (Array.isArray(schema) ? schema : [schema])
    : null;

  // ── Every-5th-visit feedback re-prompt ──
  // Logged-in users: server-side counter via RPC
  const { user, isGuest } = useAuthStore();
  const { ui } = useUIStore();
  const [showReprompt, setShowReprompt] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (isGuest || !user) return;
    if (sessionStorage.getItem('sn_visit_counted') === '1') return;
    sessionStorage.setItem('sn_visit_counted', '1');

    supabase.rpc('bump_visit_and_check_feedback', { p_user_id: user.id })
      .then(({ data }) => { if (data === true) setShowReprompt(true); }, () => {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.id, isGuest]);

  // Auto-log EVERY page visit to History — logged-in users only (activity is
  // account-bound so it syncs across devices). Guests are never logged.
  // During collaboration, visits land in the HOST's account, tagged with the
  // invitee's name (done_by) so everyone can see who browsed what.
  const collabActive = useCollabStore((s) => s.active);
  const collabRole = useCollabStore((s) => s.role);
  const collabHostId = useCollabStore((s) => s.hostId);

  useEffect(() => {
    if (isGuest || !user || !canonical) return;
    const mirroring = collabActive && collabRole === 'invitee' && collabHostId;
    supabase.rpc('log_page_visit', {
      p_user_id: mirroring ? collabHostId : user.id,
      p_url: canonical,
      p_label: title || describePath(canonical),
      p_done_by: mirroring ? (user.full_name || 'Friend') : null,
    }).then(() => {}, () => {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [canonical, user?.id, isGuest, collabActive, collabRole, collabHostId]);

  return (
    <>
      <Head>
        {/* ── Core ── */}
        <title>{pageTitle}</title>
        <meta name="description"  content={pageDesc} />
        <meta name="viewport"     content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <link rel="canonical"     href={canonUrl} />

        {/* ── Open Graph (Facebook, WhatsApp, LinkedIn) ── */}
        <meta property="og:type"        content={ogType} />
        <meta property="og:site_name"   content={`SolveNCERT · ${BRAND_LOCKUP}`} />
        <meta property="og:title"       content={pageTitle} />
        <meta property="og:description" content={pageDesc} />
        <meta property="og:url"         content={canonUrl} />
        <meta property="og:image"       content={ogImg} />
        <meta property="og:image:width"  content="256" />
        <meta property="og:image:height" content="256" />
        <meta property="og:locale"      content="en_IN" />

        {/* ── Twitter / X Card ── */}
        <meta name="twitter:card"        content="summary" />
        <meta name="twitter:site"        content="@solvencert" />
        <meta name="twitter:title"       content={pageTitle} />
        <meta name="twitter:description" content={pageDesc} />
        <meta name="twitter:image"       content={ogImg} />

        {/* ── Extra SEO signals ── */}
        <meta name="robots"    content="index, follow, max-snippet:-1, max-image-preview:large" />
        <meta name="author"    content={`${SITE_ALTERNATE_NAME} · ${SITE_ALTERNATE_NAME_NDE}`} />
        <meta name="owner"     content={`${BRAND_LOCKUP} · ${SITE_ALTERNATE_NAME_NDE} (NOVEXA)`} />
        {/* Site-wide defaults live in _document; only emit when a page adds its own */}
        {keywords && <meta name="keywords" content={`${BRAND_KEYWORDS}, ${keywords}`} />}

        {/* ── Structured data (JSON-LD) ── */}
        {schemaArr && schemaArr.map((s, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
          />
        ))}
      </Head>

      <div className="min-h-screen flex flex-col bg-[var(--surface-1)] isolate">
        {bgImage && (
          <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat opacity-[0.18]"
            style={{ backgroundImage: `url(${bgImage})` }} />
        )}
        {ui === 'ui3' ? <SiteHeader /> : <Header />}
        <main className="flex-1 animate-fade-in">
          {children}
        </main>
        {!noFooter && <Footer />}
      </div>

      {!noDock && <FloatingDock />}
      {!noDock && <SelectionAI />}
      {showReprompt && <FeedbackReprompt onClose={() => setShowReprompt(false)} />}
      <AiToolRating />
    </>
  );
}
