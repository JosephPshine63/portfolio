'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'

type Labels = { list: string; prev: string; next: string; goTo: string }

// Scrolling and snapping are plain CSS, so the cards work without JavaScript.
// This component only adds the d-pad arrows, the counter and the slot dots.
// Also used for the screenshots of a case study, with className="carousel--screens".
export function ProjectCarousel({
  names,
  labels,
  className,
  children,
}: {
  names: string[]
  labels: Labels
  className?: string
  children: ReactNode
}) {
  const track = useRef<HTMLUListElement>(null)
  const [current, setCurrent] = useState(0)
  const count = names.length

  useEffect(() => {
    const el = track.current
    if (!el) return
    function update() {
      if (!el) return
      const items = Array.from(el.children).slice(0, count) as HTMLElement[]
      const atEnd = el.scrollLeft >= el.scrollWidth - el.clientWidth - 2
      let index = 0
      items.forEach((item, i) => {
        if (Math.abs(item.offsetLeft - el.scrollLeft) < Math.abs(items[index].offsetLeft - el.scrollLeft)) index = i
      })
      setCurrent(atEnd ? count - 1 : index)
    }
    update()
    el.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      el.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [count])

  // The cards are rendered on the server, so mark the current one on the DOM.
  useEffect(() => {
    Array.from(track.current?.children ?? []).forEach((item, i) => {
      ;(item as HTMLElement).toggleAttribute('data-current', i === current)
    })
  }, [current])

  function goTo(index: number) {
    const el = track.current
    const item = el?.children[index] as HTMLElement | undefined
    if (!el || !item) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    el.scrollTo({ left: item.offsetLeft, behavior: reduce ? 'auto' : 'smooth' })
    setCurrent(index)
  }

  // D-pad arrows on both sides of the cards, slot dots and counter below.
  const arrow = (step: -1 | 1) => (
    <button
      type="button"
      className="dpad"
      aria-label={step < 0 ? labels.prev : labels.next}
      disabled={step < 0 ? current === 0 : current === count - 1}
      onClick={() => goTo(current + step)}
    >
      <span>{step < 0 ? '◀' : '▶'}</span>
    </button>
  )

  return (
    <div className={className ? `carousel ${className}` : 'carousel'}>
      <div className="carousel__stage">
        {arrow(-1)}
        <ul ref={track} className="carousel__track" tabIndex={0} aria-label={labels.list}>
          {children}
        </ul>
        {arrow(1)}
      </div>
      <div className="carousel__bar">
        <ul className="carousel__dots">
          {names.map((name, i) => (
            <li key={name}>
              <button
                type="button"
                className="carousel__dot"
                aria-label={`${labels.goTo} ${name}`}
                aria-current={i === current ? 'true' : undefined}
                onClick={() => goTo(i)}
              >
                {i === current ? '■' : '□'}
              </button>
            </li>
          ))}
        </ul>
        <span className="carousel__count" aria-live="polite">
          {current + 1} / {count}
        </span>
      </div>
    </div>
  )
}
