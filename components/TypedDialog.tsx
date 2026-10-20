'use client'

import { useEffect, useState } from 'react'

const STEP_MS = 28
const CHARS_PER_STEP = 2

// Game-style dialog that types itself out; a click shows the rest at once.
// The full text is always in the HTML: screen readers get it from the hidden
// copy, and an invisible copy keeps the box at its final size while typing.
// Without JavaScript the <noscript> style shows that copy instead.
export function TypedDialog({ text }: { text: string }) {
  const [shown, setShown] = useState(0)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setShown(text.length)
      return
    }
    setShown(0)
    const id = window.setInterval(() => {
      setShown((n) => {
        if (n + CHARS_PER_STEP >= text.length) window.clearInterval(id)
        return Math.min(n + CHARS_PER_STEP, text.length)
      })
    }, STEP_MS)
    return () => window.clearInterval(id)
  }, [text])

  const done = shown >= text.length

  return (
    <div className={`window dialog${done ? ' dialog--done' : ''}`} onClick={() => setShown(text.length)}>
      <noscript>
        <style>{'.dialog__ghost{visibility:visible}'}</style>
      </noscript>
      <p className="sr-only">{text}</p>
      <div className="dialog__text" aria-hidden="true">
        <span className="dialog__ghost">{text}</span>
        <span className="dialog__typed">{text.slice(0, shown)}</span>
      </div>
      <span className="dialog__more" aria-hidden="true">
        ▼
      </span>
    </div>
  )
}
