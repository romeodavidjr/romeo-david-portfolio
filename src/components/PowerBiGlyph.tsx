import type { SVGProps } from "react";

/**
 * Simple ascending-bars glyph used for Power BI
 * (no official mark is available in the icon sets).
 */
export default function PowerBiGlyph({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      {...props}
    >
      <rect x="3" y="13" width="5" height="9" rx="1.6" opacity="0.55" />
      <rect x="9.5" y="8" width="5" height="14" rx="1.6" opacity="0.8" />
      <rect x="16" y="2" width="5" height="20" rx="1.6" />
    </svg>
  );
}
