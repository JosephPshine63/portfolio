import type { Metadata } from 'next'
import { site } from '@/content/shared'
import { googleVerification } from '@/lib/seo'

// "/" picks a language and forwards to /it/ or /en/. A static export has no
// server-side redirects, so this runs in the browser: saved choice first, then
// the browser language, falling back to English.
export const metadata: Metadata = {
  title: site.name,
  robots: { index: false, follow: true },
  verification: { google: googleVerification },
}

const redirectScript = `(function () {
  var lang = (navigator.language || '').toLowerCase().indexOf('it') === 0 ? 'it' : 'en';
  try {
    var saved = localStorage.getItem('lang');
    if (saved === 'it' || saved === 'en') lang = saved;
  } catch (e) {}
  location.replace('/' + lang + '/' + location.hash);
})();`

export default function RootRedirect() {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: redirectScript }} />
      <p>
        <a href="/it/">Italiano</a> · <a href="/en/">English</a>
      </p>
    </>
  )
}
