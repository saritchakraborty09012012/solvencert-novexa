/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { cpus: 3 },
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'elbvuwnlfagngpbgcmkm.supabase.co' },
      { protocol: 'https', hostname: 'lh3.googleusercontent.com' },
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff'                        },
          { key: 'X-Frame-Options',        value: 'DENY'                           },
          { key: 'X-XSS-Protection',       value: '1; mode=block'                 },
          { key: 'Referrer-Policy',        value: 'strict-origin-when-cross-origin'},
        ],
      },
      // AI crawlers - serve llm.txt as plain text
      {
        source: '/llm.txt',
        headers: [
          { key: 'Content-Type',  value: 'text/plain; charset=utf-8' },
          { key: 'Cache-Control', value: 's-maxage=86400'            },
        ],
      },
      // Sitemap caching
      {
        source: '/api/sitemap',
        headers: [
          { key: 'Cache-Control', value: 's-maxage=86400, stale-while-revalidate' },
        ],
      },
      // E-book PDFs are static files in /public/ebooks — long-lived cache
      {
        source: '/ebooks/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
          { key: 'Content-Type',  value: 'application/pdf' },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // Legacy short subject URLs → canonical book-level URLs (308 = permanent)
      { source: '/class-9/maths',   destination: '/class-9/maths/ganita-manjari', permanent: true },
      { source: '/class-9/science', destination: '/class-9/science/exploration',  permanent: true },
      { source: '/class-9/english', destination: '/class-9/english/kaveri',       permanent: true },
      // These four subject slugs were served by a client-side-only redirect page
      // that renders `null`, so crawlers saw an empty URL ("Crawled – currently
      // not indexed"). Server-side 308 sends them straight to the canonical book
      // page and keeps only that URL in the index.
      { source: '/class-9/advanced-maths',   destination: '/class-9/advanced-maths/advanced-mathematics', permanent: true },
      { source: '/class-9/advanced-science', destination: '/class-9/advanced-science/science-advanced',    permanent: true },
      { source: '/class-9/arts',             destination: '/class-9/arts/madhurima',                      permanent: true },
      { source: '/class-9/kaushal-vikas',    destination: '/class-9/kaushal-vikas/kaushal-vikas',         permanent: true },
      // Ganita Manjari Part II lives on the shared book page (anchored section)
      { source: '/class-9/maths/ganita-manjari-part-2', destination: '/class-9/maths/ganita-manjari', permanent: true },
    ];
  },
  async rewrites() {
    return [
      // Serve the generated sitemap at the standard /sitemap.xml URL too
      { source: '/sitemap.xml', destination: '/api/sitemap' },
    ];
  },
};

module.exports = nextConfig;
