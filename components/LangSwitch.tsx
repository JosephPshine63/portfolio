'use client'

import type { Locale } from '@/content'

// A plain link to the other locale; it also remembers the choice so that
// "/" forwards to the same language next time.
export function LangSwitch({ target, label }: { target: Locale; label: string }) {
  return (
    <a
      className="chip-button"
      href={`/${target}/`}
      hrefLang={target}
      aria-label={label}
      onClick={() => {
        try {
          localStorage.setItem('lang', target)
        } catch {}
      }}
    >
      {target.toUpperCase()}
    </a>
  )
}
