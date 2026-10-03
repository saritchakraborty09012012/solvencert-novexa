'use client'

import Head from 'next/head'
import FloatingDock from '@/components/features/FloatingDock'
import { SiteHeader } from './SiteHeader'
import { HeroSection } from './HeroSection'
import { TrustStrip } from './TrustStrip'
import { SubjectsSection } from './SubjectsSection'
import { WhyStudents } from './WhyStudents'
import { StudyTools } from './StudyTools'
import { StatsStrip } from './StatsStrip'
import { JourneyCta } from './JourneyCta'
import { SiteFooter } from './SiteFooter'
import { SITE_ALTERNATE_NAME, SITE_ALTERNATE_NAME_NDE, BRAND_KEYWORDS, SITE_URL } from '@/lib/site'

const BASE_URL = SITE_URL

export function HomePage({
  title = 'SolveNCERT — NCERT Solutions for CBSE Class 9',
  description = 'SolveNCERT — Free NCERT solutions for CBSE Class 9 as per 2026 Revised Syllabus. Maths (Ganita Manjari), Science (Exploration), English (Kaveri). Human-verified, AI-powered.',
  canonical = '/',
  schema,
}: {
  title?: string
  description?: string
  canonical?: string
  schema?: object | object[]
}) {
  const canonUrl = `${BASE_URL}${canonical}`
  const schemaArr = schema ? (Array.isArray(schema) ? schema : [schema]) : null

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonUrl} />
        <meta property="og:site_name" content="SolveNCERT · NDe · NoirDemons" />
        <meta name="author" content={`${SITE_ALTERNATE_NAME} · ${SITE_ALTERNATE_NAME_NDE}`} />
        <meta name="keywords" content={BRAND_KEYWORDS} />
        {schemaArr?.map((s, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
          />
        ))}
      </Head>

      <div className="min-h-screen bg-background">
        <SiteHeader />
        <main>
          <HeroSection />
          <TrustStrip />
          <SubjectsSection />
          <WhyStudents />
          <StudyTools />
          <StatsStrip />
          <JourneyCta />
        </main>
        <SiteFooter />
      </div>

      <FloatingDock />
    </>
  )
}
