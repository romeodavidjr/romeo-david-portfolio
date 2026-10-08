"use client";

import { useEffect } from "react";

/**
 * Touch devices have no hover, so the company logos in the Experience cards
 * would stay soft white. On no-hover / coarse-pointer devices (phones, iPad
 * touch) each card gets `data-logo-lit` once it is ~35% in view, which fades
 * its logo to full colour (same look as the desktop hover state).
 * Under prefers-reduced-motion every logo is shown in colour at once.
 * Desktop (hover + fine pointer) is untouched.
 */
export default function ExperienceLogoReveal() {
  useEffect(() => {
    const touch = window.matchMedia("(hover: none), (pointer: coarse)");
    if (!touch.matches) return;

    const cards = Array.from(
      document.querySelectorAll<HTMLElement>("#experience article"),
    );
    const light = (el: Element) => el.setAttribute("data-logo-lit", "");

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced.matches || !("IntersectionObserver" in window)) {
      cards.forEach(light);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          // ~35% of the card in view; very tall cards (taller than ~3
          // screens on small phones) count once they fill 35% of the screen.
          const inView =
            entry.intersectionRatio >= 0.35 ||
            entry.intersectionRect.height >= window.innerHeight * 0.35;
          if (entry.isIntersecting && inView) {
            light(entry.target);
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: [0, 0.1, 0.2, 0.35] },
    );
    cards.forEach((card) => io.observe(card));
    return () => io.disconnect();
  }, []);

  return null;
}
