"use client";

import { useEffect } from "react";

/**
 * Cursor spotlight for cards and tiles (.surface / .tile).
 * Sets --x/--y on the hovered card (rAF-throttled) and toggles .spot-on;
 * the light itself is a CSS radial-gradient pseudo-element.
 * Only for fine pointers with hover; off under prefers-reduced-motion.
 */
export default function SpotlightManager() {
  useEffect(() => {
    const ok =
      window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!ok) return;

    let current: HTMLElement | null = null;
    let pending: PointerEvent | null = null;
    let raf = 0;

    const clear = () => {
      if (current) current.classList.remove("spot-on");
      current = null;
    };

    const update = () => {
      raf = 0;
      const e = pending;
      pending = null;
      if (!e) return;
      const target =
        e.target instanceof Element
          ? (e.target.closest(".tile, .surface") as HTMLElement | null)
          : null;
      if (target !== current) {
        clear();
        current = target;
        if (current) current.classList.add("spot-on");
      }
      if (current) {
        const r = current.getBoundingClientRect();
        current.style.setProperty("--x", `${e.clientX - r.left}px`);
        current.style.setProperty("--y", `${e.clientY - r.top}px`);
      }
    };

    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse" && e.pointerType !== "pen") return;
      pending = e;
      if (!raf) raf = requestAnimationFrame(update);
    };
    const onLeave = () => clear();

    document.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    window.addEventListener("blur", onLeave);

    return () => {
      document.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("blur", onLeave);
      cancelAnimationFrame(raf);
      clear();
    };
  }, []);

  return null;
}
