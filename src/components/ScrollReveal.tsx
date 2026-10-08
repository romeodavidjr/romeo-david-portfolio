import type { ReactNode } from "react";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  /** Stagger delay in ms (applied only when the reveal animation runs) */
  delay?: number;
};

/**
 * Server-rendered wrapper that marks content for the scroll reveal.
 * Renders fully visible; RevealManager (client) animates it on first view.
 */
export default function ScrollReveal({
  children,
  className = "",
  delay,
}: ScrollRevealProps) {
  return (
    <div
      data-reveal=""
      data-reveal-delay={delay !== undefined ? String(delay) : undefined}
      className={className}
    >
      {children}
    </div>
  );
}
