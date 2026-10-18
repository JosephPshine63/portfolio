// Original 16×16 pixel sprite, drawn as one rect per horizontal run of a color.
// Each row lists [x, width, color] runs; the row index is the y coordinate.

const H = '#383030' // hair
const S = '#f8c8a0' // skin
const E = '#202020' // eyes, shoes
const M = '#c87860' // mouth
const B = '#3068c8' // hoodie
const D = '#2850a0' // hoodie shadow
const W = '#f8f8f8' // hoodie strings
const P = '#404858' // trousers

type Run = [x: number, width: number, color: string]

const rows: Run[][] = [
  [],
  [[5, 6, H]],
  [[4, 8, H]],
  [[3, 10, H]],
  [[3, 2, H], [5, 6, S], [11, 2, H]],
  [[3, 1, H], [4, 8, S], [12, 1, H]],
  [[4, 8, S], [6, 1, E], [9, 1, E]],
  [[4, 8, S]],
  [[5, 6, S], [7, 2, M]],
  [[3, 10, B], [7, 2, W]],
  [[2, 12, B]],
  [[2, 1, S], [3, 10, B], [13, 1, S]],
  [[3, 10, D]],
  [[4, 3, P], [9, 3, P]],
  [[4, 3, P], [9, 3, P]],
  [[3, 4, E], [9, 4, E]],
]

export function PixelAvatar({ label, size = 96 }: { label: string; size?: number }) {
  return (
    <svg
      className="pixel-avatar"
      width={size}
      height={size}
      viewBox="0 0 16 16"
      shapeRendering="crispEdges"
      role="img"
      aria-label={label}
    >
      {rows.flatMap((runs, y) =>
        runs.map(([x, width, color], i) => <rect key={`${y}-${i}`} x={x} y={y} width={width} height={1} fill={color} />),
      )}
    </svg>
  )
}
