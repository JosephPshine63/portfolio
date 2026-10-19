import type { Metadata } from 'next'
import { getDictionary, locales, type Locale } from '@/content'
import type { Project } from '@/content/types'
import { site } from '@/content/shared'

// Search Console verification carried over from the old index.html.
export const googleVerification = 'ucWLCbVLIzvAGL1uKAOIdKPYga7b288GO60p-8z55rc'

const ogLocale: Record<Locale, string> = { it: 'it_IT', en: 'en_US' }

export function localeMetadata(locale: Locale): Metadata {
  const dict = getDictionary(locale)
  const path = `/${locale}/`
  return {
    metadataBase: new URL(site.url),
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: {
      canonical: path,
      languages: { it: '/it/', en: '/en/', 'x-default': '/en/' },
    },
    openGraph: {
      type: 'website',
      url: path,
      siteName: site.name,
      title: dict.meta.title,
      description: dict.meta.description,
      locale: ogLocale[locale],
    },
    icons: { icon: '/assets/portfolio-logo.png' },
    verification: { google: googleVerification },
  }
}

export function projectPath(locale: Locale, slug: string) {
  return `/${locale}/projects/${slug}/`
}

// Case study pages reuse the locale metadata with their own title, description and URLs.
export function projectMetadata(locale: Locale, project: Project): Metadata {
  const base = localeMetadata(locale)
  const path = projectPath(locale, project.slug)
  const title = `${project.name} — ${project.tagline} · ${site.name}`
  return {
    ...base,
    title,
    description: project.description,
    alternates: {
      canonical: path,
      languages: {
        ...Object.fromEntries(locales.map((l) => [l, projectPath(l, project.slug)])),
        'x-default': projectPath('en', project.slug),
      },
    },
    openGraph: { ...base.openGraph, type: 'article', url: path, title, description: project.description },
  }
}

// ProfilePage + Person structured data, as Google documents for "about me" pages.
export function profileJsonLd(locale: Locale) {
  const dict = getDictionary(locale)
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    inLanguage: locale,
    url: `${site.url}/${locale}/`,
    mainEntity: {
      '@type': 'Person',
      name: site.name,
      jobTitle: dict.hero.role,
      description: dict.meta.description,
      url: site.url,
      email: `mailto:${site.email}`,
      address: { '@type': 'PostalAddress', addressLocality: 'Napoli', addressCountry: 'IT' },
      worksFor: { '@type': 'Organization', name: 'Accenture' },
      sameAs: [site.linkedin, site.github],
    },
  }
}
