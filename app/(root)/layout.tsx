import type { ReactNode } from 'react'

// Root layout for "/" only. The localized pages have their own root layout in
// app/[locale]/layout.tsx so that <html lang> matches the page language.
export default function RedirectLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
