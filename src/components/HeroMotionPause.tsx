"use client";

import { useEffect, useRef } from "react";

/**
 * Pauses the hero background animations (network pulses, signal waves,
 * drifting lights) while the hero section is off-screen.
 * Renders an empty SVG group so it can live inside the network <svg>.
 */
export default function HeroMotionPause() {
  const ref = useRef<SVGGElement>(null);

  useEffect(() => {
    const hero = ref.current?.closest("section");
    if (!hero || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(([entry]) => {
      hero.toggleAttribute("data-hero-paused", !entry.isIntersecting);
    });
    io.observe(hero);
    return () => io.disconnect();
  }, []);

  return <g ref={ref} />;
}
