'use client'

import { useEffect, useState } from 'react'

type Theme = 'day' | 'night'

export function ThemeToggle({ toDay, toNight }: { toDay: string; toNight: string }) {
  const [theme, setTheme] = useState<Theme>('day')

  // The pre-paint script in the layout has already set data-theme; sync to it.
  useEffect(() => {
    setTheme(document.documentElement.dataset.theme === 'night' ? 'night' : 'day')
  }, [])

  function toggle() {
    const next: Theme = theme === 'night' ? 'day' : 'night'
    document.documentElement.dataset.theme = next
    try {
      localStorage.setItem('theme', next)
    } catch {}
    setTheme(next)
  }

  return (
    <button type="button" className="chip-button" onClick={toggle} aria-label={theme === 'night' ? toDay : toNight}>
      {theme === 'night' ? '☀' : '☾'}
    </button>
  )
}
