import type { CSSProperties } from "react";

/**
 * Signal waves: a broadcasting "tower" node with three faint concentric
 * rings rippling outward (6s cycle), like a TETRA / microwave site.
 * Sits behind the copy, to the right of the name (between the name and the
 * portrait on desktop), so the headline stays fully legible.
 * Static node only under prefers-reduced-motion.
 */
export default function SignalWaves() {
  return (
    <div
      aria-hidden
      className="signal-waves pointer-events-none absolute -right-[50px] -top-[40px] -z-10 h-[220px] w-[220px] sm:right-0 sm:-top-[70px] sm:h-[280px] sm:w-[280px] lg:-right-[100px] lg:-top-[90px] lg:h-[320px] lg:w-[320px]"
    >
      <svg viewBox="-160 -160 320 320" className="h-full w-full overflow-visible">
        <defs>
          <radialGradient id="signal-glow">
            <stop offset="0" stopColor="#5fe0cc" stopOpacity="0.2" />
            <stop offset="1" stopColor="#5fe0cc" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle r="56" fill="url(#signal-glow)" />
        <g fill="none" stroke="rgba(95,224,204,0.5)" strokeWidth="1">
          {[0, 1, 2].map((i) => (
            <circle
              key={i}
              r="150"
              vectorEffect="non-scaling-stroke"
              className="net-wave"
              style={{ animationDelay: `${i * 2}s` } as CSSProperties}
            />
          ))}
        </g>
        <circle r="3.4" fill="#8ff0e1" className="net-tower" />
      </svg>
    </div>
  );
}
