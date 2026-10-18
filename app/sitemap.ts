import type { MetadataRoute } from 'next'
import { locales } from '@/content'
import { site } from '@/content/shared'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(locales.map((l) => [l, `${site.url}/${l}/`]))
  return locales.map((locale) => ({
    url: `${site.url}/${locale}/`,
    lastModified: new Date(),
    alternates: { languages },
  }))
}
