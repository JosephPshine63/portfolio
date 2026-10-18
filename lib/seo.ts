import type { Metadata } from 'next'
import { getDictionary, type Locale } from '@/content'
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
