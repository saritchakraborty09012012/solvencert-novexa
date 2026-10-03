import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;
  return (
    // en-IN signals to Google this is India-targeted content
    // suppressHydrationWarning: the pre-paint scripts below set data-ui and the
    // dark/light class on <html> before React hydrates — without this flag
    // React 19 treats those attribute differences as a hydration failure.
    <Html lang="en-IN" suppressHydrationWarning>
      <Head>
        <meta charSet="utf-8" />

        {/* Google Search Console site verification */}
        <meta name="google-site-verification" content="eR1-y-o7eXGMskKYVWwEvKGatkNGdUM5sdrGeDAisjg" />

        {/* Theme colour — shown in Chrome address bar on mobile */}
        <meta name="theme-color" content="#141318" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#fbf9f3" media="(prefers-color-scheme: light)" />

        {/* Mobile web-app capable */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="SolveNCERT" />
        {/*
          Brand identity — "NDe" is the public-facing short name of the company,
          "NoirDemons" is the full name. Both always ship together so that typing
          NDe / NDE / nde / nDe / NdE / Noir Demons into Google resolves here.
        */}
        <meta name="application-name" content="SolveNCERT by NDe · NDE · NoirDemons" />
        {/* Search-phrase parity: "solve ncert by novexa" and "solve ncert by nde"
            both published verbatim so either query resolves to this site.
            (author meta is emitted per-page by Layout with both phrases) */}
        <meta name="keywords" content="NDe, NDE, nde, nDe, NdE, NoirDemons, Noir Demons, NOVEXA, SolveNCERT, solve ncert by novexa, solve ncert by nde, solve ncert by NDE, SolveNCERT by NOVEXA, SolveNCERT by NDE, NCERT solutions class 9, CBSE 2026, ganita manjari solutions, exploration science solutions, kaveri english solutions" />
        {googleVerification && <meta name="google-site-verification" content={googleVerification} />}

        {/* Favicons */}
        <link rel="icon" href="/solvencert-logo-32.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/solvencert-logo-64.png" type="image/png" sizes="64x64" />
        <link rel="apple-touch-icon" href="/solvencert-logo-256.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Fonts — preconnected above; single stylesheet with display=swap.
            Fraunces (display serif) + DM Sans (body) + Plus Jakarta (UI) + JetBrains Mono */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=DM+Sans:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@600;700;800&family=JetBrains+Mono:wght@400;500&family=Kalam:wght@400;700&family=Caveat:wght@600;700&display=swap"
        />

        {/* Default robots — individual pages can override via Layout */}
        <meta name="robots" content="index, follow" />

        {/* Site-wide OG type (individual pages override title/desc/url via Layout) */}
        <meta property="og:type"      content="website" />
        <meta property="og:site_name" content="SolveNCERT · NDe · NoirDemons" />

        {/* Twitter card type */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@solvencert" />

        {/* KaTeX is self-hosted: CSS comes bundled via styles/globals.css
            (@import 'katex/dist/katex.min.css'); the JS runtime is loaded on
            demand by MathRenderer via a dynamic import. No CDN requests, so
            browser tracking prevention never blocks math rendering. */}

        {/* UI init — restore selected interface (ui1/ui2/ui3) before paint */}
        <script dangerouslySetInnerHTML={{ __html: `
          (function(){
            try{
              var u=localStorage.getItem('sn_ui');
              if(u!=='ui1'&&u!=='ui2'&&u!=='ui3') u='ui3';
              document.documentElement.setAttribute('data-ui',u);
              if(u==='ui2'){
                var parts=location.pathname||'';
                parts=parts.split('/').filter(Boolean);
                var i=-1;
                for(var k=0;k<parts.length;k++){ if(/^class-\\d+$/.test(parts[k])){ i=k; break; } }
                var slug=i>=0?parts[i+1]:'';
                if(/^(maths|advanced-maths|science|advanced-science|english|hindi|sanskrit|sst|it)$/.test(slug))
                  document.documentElement.setAttribute('data-subject',slug);
              }
            }catch(e){}
          })();
        `}} />

        {/* Theme init — no flash of wrong theme */}
        <script dangerouslySetInnerHTML={{ __html: `
          (function(){
            try{
              var t=localStorage.getItem('sn_theme')||'system';
              var r=t==='dark'?'dark':t==='light'?'light':
                (window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');
              document.documentElement.classList.add(r);
            }catch(e){}
          })();
        `}} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
