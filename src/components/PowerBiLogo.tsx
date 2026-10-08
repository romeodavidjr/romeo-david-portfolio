import type { SVGProps } from "react";

/**
 * Power BI mark, recreated as a small inline SVG: three rounded vertical
 * bars of increasing height in the brand yellow/gold gradient. Always
 * renders in brand colour (fills are fixed, not currentColor).
 * Gradient ids are static; repeated instances reuse identical defs.
 */
export default function PowerBiLogo({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden
      focusable="false"
      {...props}
    >
      <defs>
        <linearGradient id="pbi-back" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#F2C811" />
          <stop offset="1" stopColor="#E09B00" />
        </linearGradient>
        <linearGradient id="pbi-mid" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#F8D63C" />
          <stop offset="1" stopColor="#E8A600" />
        </linearGradient>
        <linearGradient id="pbi-front" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#FFE680" />
          <stop offset="1" stopColor="#F2C811" />
        </linearGradient>
        <filter id="pbi-shadow" x="-30%" y="-10%" width="160%" height="130%">
          <feDropShadow
            dx="0.7"
            dy="0"
            stdDeviation="0.55"
            floodColor="#7a4f00"
            floodOpacity="0.45"
          />
        </filter>
      </defs>
      {/* tallest bar sits behind; shorter bars overlap in front */}
      <rect x="13.4" y="1" width="7.6" height="22" rx="1.7" fill="url(#pbi-back)" />
      <rect
        x="8.2"
        y="6.6"
        width="7.6"
        height="16.4"
        rx="1.7"
        fill="url(#pbi-mid)"
        filter="url(#pbi-shadow)"
      />
      <rect
        x="3"
        y="12.2"
        width="7.6"
        height="10.8"
        rx="1.7"
        fill="url(#pbi-front)"
        filter="url(#pbi-shadow)"
      />
    </svg>
  );
}
