/** @type {import('next').NextConfig} */
const nextConfig = {
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
