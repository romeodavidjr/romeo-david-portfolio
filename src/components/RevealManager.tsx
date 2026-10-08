"use client";

import { useEffect } from "react";

const DURATION = 600;
const STEP = 70;
const MAX_STAGGER = 6;

/**
 * One observer for every [data-reveal] element on the page.
 * - Content is visible in the server HTML; only elements that start below
 *   the fold are hidden (by adding .reveal-pending) after hydration.
 * - Each element animates once, then its classes are cleaned up.
 * - Does nothing under prefers-reduced-motion or without IntersectionObserver.
 */
export default function RevealManager() {
  useEffect(() => {
    if (
      typeof window === "undefined" ||
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const timers: number[] = [];
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          observer.unobserve(el);
          el.classList.add("reveal-in");
          const delay = parseInt(el.style.getPropertyValue("--reveal-delay")) || 0;
          timers.push(
            window.setTimeout(() => {
              el.classList.remove("reveal-pending", "reveal-in");
              el.style.removeProperty("--reveal-delay");
            }, delay + DURATION + 80)
          );
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );

    const fold = window.innerHeight * 0.94;
    const els = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]")
    );

    for (const el of els) {
      // Already on screen (or above): leave it exactly as rendered.
      if (el.getBoundingClientRect().top < fold) continue;

      let delay: number;
      if (el.dataset.revealDelay !== undefined) {
        delay = Number(el.dataset.revealDelay) || 0;
      } else {
        const siblings = el.parentElement
          ? Array.from(el.parentElement.children).filter((c) =>
              c.hasAttribute("data-reveal")
            )
          : [el];
        delay = Math.min(Math.max(siblings.indexOf(el), 0), MAX_STAGGER) * STEP;
      }

      el.style.setProperty("--reveal-delay", `${delay}ms`);
      el.classList.add("reveal-pending");
      observer.observe(el);
    }

    return () => {
      observer.disconnect();
      timers.forEach((t) => window.clearTimeout(t));
    };
  }, []);

  return null;
}
