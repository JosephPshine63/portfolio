import type { CSSProperties } from 'react'
import type { IconName } from '@/content/types'

// Original pixel icons (no logos), drawn as SVG grids, one character per pixel:
// o = outline, # = category color (--c), d = darker shade, w = highlight, y = yellow detail.

const FILL: Record<string, string> = {
  o: 'var(--line)',
  '#': 'var(--c)',
  d: 'color-mix(in srgb, var(--c) 65%, #000)',
  w: 'rgba(255, 255, 255, 0.75)',
  y: 'var(--yellow)',
}

// 12×12 icons used around the page.
const ICONS: Record<IconName, string[]> = {
  gear: ['....o..o....', '..o.o##o.o..', '.o#o####o#o.', '..o######o..', 'oo###oo###oo', 'o###o..o###o',
         'o###o..o###o', 'oo###oo###oo', '..o######o..', '.o#o####o#o.', '..o.o##o.o..', '....o..o....'],
  monitor: ['............', 'oooooooooooo', 'o##########o', 'o#ww#######o', 'o#w########o', 'o##########o',
            'o##########o', 'oooooooooooo', '.....oo.....', '....o##o....', '..oooooooo..', '............'],
  cylinder: ['..oooooooo..', '.o########o.', 'o#ww#######o', 'oo########oo', 'o#oooooooo#o', 'o##########o',
             'oo########oo', 'o#oooooooo#o', 'o##########o', 'o##########o', '.o########o.', '..oooooooo..'],
  container: ['............', '............', 'oooooooooooo', 'o##########o', 'o#o#o##o#o#o', 'o#o#o##o#o#o',
              'o#o#o##o#o#o', 'o##########o', 'oooooooooooo', '............', '.oo..oo..oo.', 'o..oo..oo..o'],
  layers: ['............', '..oooooooo..', '..o######o..', '..oooooooo..', '............', '.oooooooooo.',
           '.o########o.', '.oooooooooo.', '............', 'oooooooooooo', 'o##########o', 'oooooooooooo'],
  plug: ['...o....o...', '...o....o...', '..oooooooo..', '.o#w######o.', '.o########o.', '.o########o.',
         '..o######o..', '...o####o...', '....o##o....', '.....oo.....', '.....oo.....', '......oo....'],
  sparkle: ['.....oo.....', '....o##o....', '....o##o....', '...o#w##o...', '.oo######oo.', 'o##########o',
            '.oo######oo.', '...o####o...', '....o##o....', '....o##o....', '.....oo.....', '............'],
  beaker: ['...oooooo...', '....owwo....', '....owwo....', '....owwo....', '...owwwwo...', '..o######o..',
           '.o###w####o.', '.o########o.', 'o##########o', 'o##########o', 'oooooooooooo', '............'],
  brackets: ['............', '............', '...oo..oo...', '..o#o..o#o..', '.o#o....o#o.', 'o#o......o#o',
             '.o#o....o#o.', '..o#o..o#o..', '...oo..oo...', '............', '............', '............'],
  server: ['oooooooooooo', 'o#w#####yo#o', 'o##########o', 'oooooooooooo', 'o#w#####yo#o', 'o##########o',
           'oooooooooooo', 'o#w#####yo#o', 'o##########o', 'oooooooooooo', '.o........o.', '.oo......oo.'],
  pin: ['....oooo....', '...o####o...', '..o#w####o..', '..o##oo##o..', '..o#o..o#o..', '..o##oo##o..',
        '...o####o...', '...o####o...', '....o##o....', '....o##o....', '.....oo.....', '............'],
  star: ['.....oo.....', '....o##o....', '....o##o....', 'oooo#ww#oooo', 'o####w#####o', '.o########o.',
         '..o######o..', '..o##oo##o..', '.o##o..o##o.', '.o#o....o#o.', '.oo......oo.', '............'],
  shield: ['oooooooooooo', 'o#w########o', 'o#w########o', 'o##########o', 'o####yy####o', 'o####yy####o',
           '.o########o.', '.o########o.', '..o######o..', '...o####o...', '....oooo....', '............'],
  flag: ['.o..........', '.ooooooooo..', '.o#w######o.', '.o########o.', '.o#######o..', '.o########o.',
         '.oooooooooo.', '.o..........', '.o..........', '.o..........', 'ooo.........', '............'],
  briefcase: ['............', '....oooo....', '...o....o...', 'oooooooooooo', 'o#w########o', 'o##########o',
              'oddddooddddo', 'o####yy####o', 'o##########o', 'o##########o', 'oooooooooooo', '............'],
  book: ['............', '............', '.oooo..oooo.', 'o####oo####o', 'o#ww#oo####o', 'o####oo####o',
         'o#ww#oo####o', 'o####oo####o', 'o####oo####o', 'oooooooooooo', '............', '............'],
  cap: ['............', '.....oo.....', '...oo##oo...', '.oo######oo.', 'o##########o', '.oo######oo.',
        '..oo####ooy.', '..o######oy.', '..o######oy.', '...oooooo.y.', '..........y.', '............'],
  folder: ['............', '.oooo.......', 'o####oooooo.', 'o#ww#######o', 'oooooooooooo', 'o##########o',
           'o##########o', 'o##########o', 'o##########o', 'oooooooooooo', '............', '............'],
  mail: ['............', '............', 'oooooooooooo', 'oo########oo', 'o#o######o#o', 'o##oo##oo##o',
         'o####oo####o', 'o##########o', 'o##########o', 'oooooooooooo', '............', '............'],
  phone: ['...oooooo...', '...o####o...', '...owwwwo...', '...owwwwo...', '...owwwwo...', '...owwwwo...',
          '...owwwwo...', '...o####o...', '...o#oo#o...', '...o####o...', '...oooooo...', '............'],
  card: ['............', 'oooooooooooo', 'o##########o', 'o#ww#oooo##o', 'o#ww#######o', 'o#ww#ooo###o',
         'owwww######o', 'o##########o', 'oooooooooooo', '............', '............', '............'],
  branch: ['..oo....oo..', '.o##o..o##o.', '.o##o..o##o.', '..oo....oo..', '...o.....o..', '...o....o...',
           '...o..oo....', '...ooo......', '...o........', '..oo........', '.o##o.......', '.o##o.......'],
  floppy: ['ooooooooooo.', 'o#owwwwo##oo', 'o#owwwwo###o', 'o#oooooo###o', 'o##########o', 'o#oooooooo#o',
           'o#owwwwwwo#o', 'o#owwwwwwo#o', 'o#owwwwwwo#o', 'o#owwwwwwo#o', 'oooooooooooo', '............'],
}

// One icon per skill category, in the order of content skills.groups.
const SKILL_ICONS: IconName[] = [
  'gear', 'monitor', 'cylinder', 'container', 'layers', 'plug', 'sparkle', 'beaker', 'brackets', 'server',
]

// 24×20 bag with a handle, buckle and front pocket.
const BAG = [
  '........oooooooo........', '.......o########o.......', '......o#oooooooo#o......', '......o#o......o#o......',
  '...oooooooooooooooooo...', '..o##################o..', '..o#ww###############o..', '..o#w################o..',
  '..oddddddddddddddddddo..', '..o#########yy#######o..', '..o#########yy#######o..', '..oooooooooooooooooooo..',
  '..o##################o..', '..o##oooooooooooo####o..', '..o##o##########o####o..', '..o##o##########o####o..',
  '..o##oooooooooooo####o..', '..o##################o..', '..oddddddddddddddddddo..', '...oooooooooooooooooo...',
]

function Pixels({ rows }: { rows: string[] }) {
  return (
    <svg className="px" viewBox={`0 0 ${rows[0].length} ${rows.length}`} shapeRendering="crispEdges" aria-hidden="true">
      {rows.flatMap((row, y) =>
        [...row].map((ch, x) => FILL[ch] && <rect key={`${x}-${y}`} x={x} y={y} width={1} height={1} fill={FILL[ch]} />),
      )}
    </svg>
  )
}

// Takes its color from --c: pass `color` (a CSS color) or set --c on a parent.
export function PixelIcon({ name, color }: { name: IconName; color?: string }) {
  return (
    <span className="px-icon" style={color ? ({ '--c': color } as CSSProperties) : undefined}>
      <Pixels rows={ICONS[name]} />
    </span>
  )
}

// Categories beyond the drawn ones reuse the icons in order.
export function SkillIcon({ index }: { index: number }) {
  return <Pixels rows={ICONS[SKILL_ICONS[index % SKILL_ICONS.length]]} />
}

export function BagSprite() {
  return <Pixels rows={BAG} />
}
