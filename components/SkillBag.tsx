'use client'

import { useRef, useState, type CSSProperties, type KeyboardEvent } from 'react'
import type { SkillGroup } from '@/content/types'
import { BagSprite, SkillIcon } from './PixelIcons'

type Labels = { list: string; count: string; pocket: string; hint: string; prev: string; next: string }

const color = (i: number) => ({ '--c': `var(--t-${(i % 10) + 1})` }) as CSSProperties

// Bag-style menu: categories as pockets on the left, the open pocket on the right.
// Every pocket is rendered in the HTML; without JavaScript the <noscript> style
// shows them all, so nothing is lost for search engines or old browsers.
export function SkillBag({ groups, labels }: { groups: SkillGroup[]; labels: Labels }) {
  const [current, setCurrent] = useState(0)
  const tabs = useRef<(HTMLButtonElement | null)[]>([])

  function select(index: number, focus = true) {
    const next = (index + groups.length) % groups.length
    setCurrent(next)
    if (focus) tabs.current[next]?.focus()
  }

  // Arrow keys work on the category list and on the ↑ ↓ buttons.
  function onKeyDown(e: KeyboardEvent) {
    const step = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 }[e.key]
    if (e.key === 'Home') select(0)
    else if (e.key === 'End') select(groups.length - 1)
    else if (step) select(current + step)
    else return
    e.preventDefault()
  }

  return (
    <div className="window bag" onKeyDown={onKeyDown}>
      <noscript>
        <style>{'.bag [role=tabpanel][hidden]{display:flex}.bag .bag__side{display:none}'}</style>
      </noscript>
      <div className="bag__side">
        {/* The key remounts the sprite, so it wiggles again on every switch. */}
        <div key={current} className="bag__sprite" style={color(current)} aria-hidden="true">
          <BagSprite />
          <span className="pixel">
            {labels.pocket.toUpperCase()} {current + 1}/{groups.length}
          </span>
        </div>
        <div className="bag__tabs" role="tablist" aria-label={labels.list} aria-orientation="vertical">
          {groups.map((g, i) => (
            <button
              key={g.type}
              ref={(el) => {
                tabs.current[i] = el
              }}
              type="button"
              role="tab"
              id={`bag-tab-${i}`}
              aria-selected={i === current}
              aria-controls={`bag-pocket-${i}`}
              tabIndex={i === current ? 0 : -1}
              style={color(i)}
              onClick={() => select(i)}
            >
              <SkillIcon index={i} />
              {g.type.toUpperCase()}
              <span className="bag__n">×{g.items.length}</span>
            </button>
          ))}
        </div>
      </div>
      <div className="bag__pockets">
        {groups.map((g, i) => (
          <div
            key={g.type}
            className="bag__pocket"
            role="tabpanel"
            id={`bag-pocket-${i}`}
            aria-labelledby={`bag-tab-${i}`}
            hidden={i !== current}
            style={color(i)}
          >
            <div className="bag__head">
              <SkillIcon index={i} />
              <span className="type">{g.type.toUpperCase()}</span>
              <span className="muted pixel">
                {g.items.length} {labels.count.toUpperCase()}
              </span>
            </div>
            <ul className="chips">
              {g.items.map((s, n) => (
                <li key={s} style={{ '--i': n } as CSSProperties}>
                  {s}
                </li>
              ))}
            </ul>
            <p className="bag__foot pixel">
              <button type="button" aria-label={labels.prev} onClick={() => select(i - 1, false)}>
                ↑
              </button>
              <button type="button" aria-label={labels.next} onClick={() => select(i + 1, false)}>
                ↓
              </button>
              <span aria-hidden="true">
                {labels.hint} · {i + 1}/{groups.length}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
