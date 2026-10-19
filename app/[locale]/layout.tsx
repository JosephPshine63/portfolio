import type { Metadata } from 'next'
import { DM_Sans, Pixelify_Sans } from 'next/font/google'
import { notFound } from 'next/navigation'
import type { ReactNode } from 'react'
import { isLocale, locales } from '@/content'
import { localeMetadata } from '@/lib/seo'
import '../globals.css'

// next/font downloads the fonts at build time and serves them from the site,
// so the page makes no requests to Google at runtime.
const pixel = Pixelify_Sans({ subsets: ['latin'], variable: '--font-pixel', display: 'swap' })
const sans = DM_Sans({ subsets: ['latin'], variable: '--font-sans', display: 'swap' })

export const dynamicParams = false

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

type Props = { children: ReactNode; params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Omit<Props, 'children'>): Promise<Metadata> {
  const { locale } = await params
  return isLocale(locale) ? localeMetadata(locale) : {}
}

// Runs before first paint so the saved day/night theme never flashes.
const themeScript = `(function () {
  try {
    var t = localStorage.getItem('theme');
    if (t !== 'day' && t !== 'night') t = matchMedia('(prefers-color-scheme: dark)').matches ? 'night' : 'day';
    document.documentElement.dataset.theme = t;
  } catch (e) {}
})();`

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()

  return (
    <html lang={locale} data-theme="day" className={`${pixel.variable} ${sans.variable}`} suppressHydrationWarning>
      <head>
        {/* The site has its own night theme: ask Dark Reader not to restyle it
            (its edits also break React hydration of the pixel SVGs). */}
        <meta name="darkreader-lock" />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  )
}
