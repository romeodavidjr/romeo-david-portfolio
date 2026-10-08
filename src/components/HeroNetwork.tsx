import type { CSSProperties } from "react";

/**
 * Faint telecom-style network behind the hero (inline SVG, CSS-animated
 * with transform/opacity only). Masked to fade out toward the name (left)
 * and the KPI strip (bottom). Detail layers are hidden on small screens.
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
const pulses = [2, 7, 11, 4];
const travellers: { from: number; to: number; dur: string; delay: string }[] = [
  { from: 5, to: 6, dur: "11s", delay: "0s" },
  { from: 7, to: 8, dur: "13s", delay: "3s" },
  { from: 11, to: 12, dur: "15s", delay: "6s" },
];

export default function HeroNetwork() {
  return (
    <svg
      className="hero-network right-0 top-0 h-[46%] w-full opacity-60 sm:h-[60%] sm:opacity-80 lg:h-[78%] lg:w-[64%] lg:opacity-100"
      viewBox="0 0 1000 700"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
      focusable="false"
    >
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

      <g fill="rgba(95,224,204,0.45)">
        {nodes.map(([x, y], i) => (
          <circle
            key={i}
            cx={x}
            cy={y}
            r={pulses.includes(i) ? 3.2 : 2.2}
            className={pulses.includes(i) ? "net-node-glow" : undefined}
            style={
              pulses.includes(i)
                ? ({ animationDelay: `${pulses.indexOf(i) * 1.3}s` } as CSSProperties)
                : undefined
            }
          />
        ))}
      </g>

      <g fill="none" stroke="rgba(95,224,204,0.5)" strokeWidth="1">
        {pulses.map((n, i) => (
          <circle
            key={n}
            cx={nodes[n][0]}
            cy={nodes[n][1]}
            r="12"
            vectorEffect="non-scaling-stroke"
            className="net-pulse"
            style={{ animationDelay: `${i * 1.3}s` } as CSSProperties}
          />
        ))}
      </g>

      <g fill="#8ff0e1" className="max-sm:hidden">
        {travellers.map((t, i) => {
          const [x1, y1] = nodes[t.from];
          const [x2, y2] = nodes[t.to];
          return (
            <circle
              key={i}
              cx={x1}
              cy={y1}
              r="2.6"
              className="net-travel"
              style={
                {
                  "--dx": `${x2 - x1}px`,
                  "--dy": `${y2 - y1}px`,
                  "--dur": t.dur,
                  "--delay": t.delay,
                } as CSSProperties
              }
            />
          );
        })}
      </g>
    </svg>
  );
}
