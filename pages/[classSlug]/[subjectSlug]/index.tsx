import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { GetStaticPaths, GetStaticProps } from 'next';
import { CLASS_9_SUBJECTS, getSubject } from '@/lib/content';

// /class-9/maths   →  308 permanent redirect →  /class-9/maths/ganita-manjari
// /class-9/science →  308 permanent redirect →  /class-9/science/exploration
// Keeps old links & any existing backlinks working, consolidates SEO onto deeper URL.
// NOTE: 'it', 'sanskrit' and 'hindi' are deliberately excluded — they have two
// books/parts (IT: Employability Skills / Information Technology; Sanskrit:
// Sharda / Iravati; Hindi: Ganga / Reva) sharing one slug, each served by its own
// dedicated /class-9/<subject> landing page instead of a single-book redirect.
// The Set below collapses subjects that share a slug (e.g. Ganita Manjari Part I
// and Part II both use 'maths') down to one redirect, which lands on Part I.
export default function SubjectRedirectPage({ destination }: { destination: string }) {
  const router = useRouter();
  useEffect(() => {
    if (destination) router.replace(destination);
  }, [destination, router]);
  return null; // redirect fires on the client after hydration
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: Array.from(new Set(
    CLASS_9_SUBJECTS
      .filter(s => s.slug !== 'it' && s.slug !== 'sanskrit' && s.slug !== 'hindi')
      .map(s => s.slug),
  )).map(subjectSlug => ({ params: { classSlug: 'class-9', subjectSlug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const subjectSlug = params?.subjectSlug as string;
  const classSlug   = params?.classSlug   as string;
  const subject     = getSubject(subjectSlug);

  if (!subject) return { notFound: true };

  return {
    props: { destination: `/${classSlug}/${subjectSlug}/${subject.bookSlug}` },
  };
};
