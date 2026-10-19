'use client'

import { useEffect, useState, type MouseEvent, type ReactNode } from 'react'

const INSERT_MS = 900

// A normal link that first plays a "cartridge goes into the slot" animation.
// Modified clicks (new tab etc.) and reduced motion skip straight to the page.
export function CartridgeLink({
  href,
  name,
  status,
  className,
  children,
}: {
  href: string
  name: string
  status: string
  className?: string
  children: ReactNode
}) {
  const [inserting, setInserting] = useState(false)

  // Coming back with the browser's back button can restore this page from
  // the cache with the overlay still up.
  useEffect(() => {
    const reset = () => setInserting(false)
    window.addEventListener('pageshow', reset)
    return () => window.removeEventListener('pageshow', reset)
  }, [])

  function onClick(event: MouseEvent<HTMLAnchorElement>) {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    event.preventDefault()
    setInserting(true)
    window.setTimeout(() => window.location.assign(href), INSERT_MS)
  }

  return (
    <>
      <a className={className} href={href} onClick={onClick}>
        {children}
      </a>
      {inserting && (
        <div className="cartridge-overlay" role="status">
          <div className="cartridge-overlay__console" aria-hidden="true">
            <div className="cartridge">
              <span className="cartridge__label">{name}</span>
            </div>
            <div className="cartridge-overlay__slot" />
          </div>
          <p className="pixel">{status}</p>
        </div>
      )}
    </>
  )
}
