import type { NextApiRequest, NextApiResponse } from 'next';
import { CLASS_9_SUBJECTS } from '@/lib/content';
import { ENGLISH_CHAPTERS } from '@/lib/content-english';
import { SITE_URL } from '@/lib/site';

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  const base = SITE_URL;

  const staticPages = [
    '', '/answers', '/books', '/premium', '/search',
    '/privacy', '/terms', '/about', '/contact', '/class-9/it', '/class-9/sanskrit',
  ];

  const chapterUrls: string[] = [];
  for (const subject of CLASS_9_SUBJECTS) {
    // Use the SEO-canonical book-level URL (e.g. /class-9/maths/ganita-manjari)
    chapterUrls.push(`/class-9/${subject.slug}/${subject.bookSlug}`);

    if (subject.slug === 'english') {
      // English has two independently-routable contents (story/play + poem) per
      // chapter, plus a chapter-code hub page — not the generic single-slug pattern.
      for (const chapter of ENGLISH_CHAPTERS) {
        chapterUrls.push(`/class-9/english/kaveri/${chapter.code}`);
        for (const content of chapter.contents) {
          chapterUrls.push(`/class-9/english/kaveri/${chapter.code}/${content.slug}`);
        }
      }
      continue;
    }

    for (const chapter of subject.chapters) {
      chapterUrls.push(
        `/class-9/${subject.slug}/${subject.bookSlug}/${chapter.code}/${chapter.slug}`
      );
    }
  }

  const allUrls = [...staticPages, ...chapterUrls];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<!--
  SolveNCERT — by NOVEXA · Now NDe · NoirDemons
  NDe is the public-facing short name of NoirDemons (also searched as NDE, nde,
  nDe, NdE, nDE, Noir Demons, NOVEXA). Same brand, same site:
  ${base}
  Search-phrase parity — both spellings published verbatim:
  SolveNCERT by NOVEXA / solve ncert by novexa
  SolveNCERT by NDE / solve ncert by nde / solve ncert by NDE / solve ncert by NDe
  ncert by nde / NDE ncert solutions / nde ncert
-->
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls.map(url => `  <url>
    <loc>${base}${url}</loc>
    <changefreq>${url === '' ? 'daily' : url.includes('class-9') ? 'weekly' : 'monthly'}</changefreq>
    <priority>${url === '' ? '1.0' : url.includes('class-9') ? '0.9' : '0.6'}</priority>
  </url>`).join('\n')}
</urlset>`;

  res.setHeader('Content-Type', 'text/xml');
  res.setHeader('Cache-Control', 's-maxage=86400');
  res.send(sitemap);
}
