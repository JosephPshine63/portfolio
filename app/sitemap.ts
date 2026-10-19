import type { MetadataRoute } from 'next'
import { getDictionary, locales } from '@/content'
import { projectPath } from '@/lib/seo'
import { site } from '@/content/shared'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(locales.map((l) => [l, `${site.url}/${l}/`]))
  const home = locales.map((locale) => ({
    url: `${site.url}/${locale}/`,
    lastModified: new Date(),
    alternates: { languages },
  }))
  const projects = getDictionary('en').projects.items.flatMap(({ slug }) => {
    const projectLanguages = Object.fromEntries(locales.map((l) => [l, `${site.url}${projectPath(l, slug)}`]))
    return locales.map((locale) => ({
      url: `${site.url}${projectPath(locale, slug)}`,
      lastModified: new Date(),
      alternates: { languages: projectLanguages },
    }))
  })
  return [...home, ...projects]
}
