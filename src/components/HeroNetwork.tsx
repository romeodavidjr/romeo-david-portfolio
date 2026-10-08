import type { CSSProperties } from "react";
import HeroMotionPause from "./HeroMotionPause";

/**
 * Telecom-style hero background (inline SVG, CSS-animated with
 * transform/opacity only):
 *  - faint network of sites (nodes) and links (lines)
 *  - network pulses: soft points of light travel link by link along a few
 *    routes, like data packets between sites; the receiving node glows
 *    briefly when a pulse arrives
 *  (the broadcasting tower lives in SignalWaves, next to the name)
 * Masked to fade toward the name (left) and the KPI strip (bottom).
 * Detail layers are hidden on phones; everything stops under
 * prefers-reduced-motion (static lines and nodes only) and pauses while the
 * hero is off-screen.
 */
const nodes: [number, number][] = [
  [120, 90], [300, 40], [480, 130], [690, 60], [900, 140],
  [210, 260], [420, 300], [620, 240], [820, 330], [965, 430],
  [330, 470], [560, 500], [760, 570], [140, 420],
];
const edges: [number, number][] = [
  [0, 1], [1, 2], [2, 3], [3, 4], [0, 5], [5, 6], [6, 2], [6, 7],
  [7, 3], [7, 8], [8, 4], [8, 9], [6, 10], [10, 11], [11, 7], [11, 12],
  [12, 8], [12, 9], [5, 13], [13, 10], [1, 5],
];
/** Edges hidden on phones to simplify the pattern */
const detailEdges = new Set([3, 8, 12, 15, 17, 18, 19, 20]);

/**
 * Packet routes: three hops each. A hop takes `hop` seconds; the route
 * repeats every 4 hops (3 travelling + 1 resting), so at most a few pulses
 * are visible at once. `mobile: false` routes are hidden on phones.
 */
const routes: { path: number[]; hop: number; offset: number; mobile: boolean }[] = [
  { path: [13, 5, 6, 7], hop: 5, offset: 0, mobile: true },
  { path: [1, 2, 3, 4], hop: 6, offset: 2.5, mobile: true },
  { path: [9, 8, 7, 3], hop: 5.5, offset: 7, mobile: false },
  { path: [10, 11, 12, 9], hop: 7, offset: 4, mobile: false },
];

type Hop = {
  from: number;
  to: number;
  cycle: number;
  delay: number;
  mobile: boolean;
};

const hops: Hop[] = routes.flatMap((r) => {
  const cycle = r.hop * 4;
  return r.path.slice(0, -1).map((from, k) => ({
    from,
    to: r.path[k + 1],
    cycle,
    // negative delay = already mid-flow on first paint
    delay: ((r.offset + k * r.hop) % cycle) - cycle,
    mobile: r.mobile,
  }));
});

const timing = (h: Hop) =>
  ({
    "--cycle": `${h.cycle}s`,
    "--delay": `${h.delay.toFixed(2)}s`,
  }) as CSSProperties;

export default function HeroNetwork() {
  return (
    <svg
      className="hero-network right-0 top-0 h-[46%] w-full opacity-60 sm:h-[60%] sm:opacity-80 lg:h-[78%] lg:w-[64%] lg:opacity-100"
      viewBox="0 0 1000 700"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
      focusable="false"
    >
      <defs>
        <radialGradient id="net-packet-glow">
          <stop offset="0" stopColor="#a8f6ec" stopOpacity="0.55" />
          <stop offset="1" stopColor="#5fe0cc" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Links */}
      <g
        stroke="rgba(95,224,204,0.16)"
        strokeWidth="1"
        vectorEffect="non-scaling-stroke"
        fill="none"
      >
        {edges.map(([a, b], i) => (
          <line
            key={i}
            x1={nodes[a][0]}
            y1={nodes[a][1]}
            x2={nodes[b][0]}
            y2={nodes[b][1]}
            vectorEffect="non-scaling-stroke"
            className={detailEdges.has(i) ? "max-sm:hidden" : undefined}
          />
        ))}
      </g>

      {/* Sites */}
      <g fill="rgba(95,224,204,0.45)">
        {nodes.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="2.2" />
        ))}
      </g>

      {/* Arrival glow on the receiving node */}
      {hops.map((h, i) => {
        const [x, y] = nodes[h.to];
        return (
          <g key={i} className={h.mobile ? undefined : "max-sm:hidden"}>
            <circle
              cx={x}
              cy={y}
              r="11"
              fill="none"
              stroke="rgba(143,240,225,0.55)"
              strokeWidth="1"
              vectorEffect="non-scaling-stroke"
              className="net-arrive"
              style={timing(h)}
            />
            <circle
              cx={x}
              cy={y}
              r="3.2"
              fill="#a8f6ec"
              className="net-arrive-core"
              style={timing(h)}
            />
          </g>
        );
      })}

      {/* Packets */}
      {hops.map((h, i) => {
        const [x1, y1] = nodes[h.from];
        const [x2, y2] = nodes[h.to];
        return (
          <g
            key={i}
            className={`net-packet ${h.mobile ? "" : "max-sm:hidden"}`}
            style={
              {
                ...timing(h),
                "--dx": `${x2 - x1}px`,
                "--dy": `${y2 - y1}px`,
              } as CSSProperties
            }
          >
            <circle cx={x1} cy={y1} r="9" fill="url(#net-packet-glow)" />
            <circle cx={x1} cy={y1} r="2.2" fill="#c4fbf3" />
          </g>
        );
      })}
      <HeroMotionPause />
    </svg>
  );
}
