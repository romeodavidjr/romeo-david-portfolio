import type { SVGProps } from "react";

/**
 * Traffic-light glyph in the same line style as the Lucide tool icons
 * (24px grid, round caps/joins, currentColor stroke): rounded housing
 * with three stacked lamps and small side visors.
 */
export default function TrafficLightIcon({
  size = 24,
  strokeWidth = 1.6,
  ...props
}: SVGProps<SVGSVGElement> & { size?: number; strokeWidth?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      focusable="false"
      {...props}
    >
      <rect x="7" y="1.5" width="10" height="21" rx="3.2" />
      <circle cx="12" cy="6.75" r="2" />
      <circle cx="12" cy="12" r="2" />
      <circle cx="12" cy="17.25" r="2" />
      <path d="M7 6 4.5 5M7 11.25 4.5 10.25" />
      <path d="M17 6 19.5 5M17 11.25 19.5 10.25" />
    </svg>
  );
}
