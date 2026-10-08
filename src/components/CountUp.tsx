"use client";

import { useEffect, useRef } from "react";

type CountUpProps = {
  /** Final display value exactly as in the data, e.g. "372", "97.6%", "22.1h", "100+" */
  value: string;
  duration?: number;
  className?: string;
};

const NUMERIC = /^(\d+(?:\.\d+)?)(\D*)$/;

/**
 * Counts a KPI up from 0 the first time it scrolls into view.
 * The server HTML always contains the exact final value; width is locked to
 * it (hidden sizer) so counting never shifts layout. Non-numeric values
 * ("Zero", "ATMS", "65–80%") render as-is. Skipped under reduced motion.
 */
export default function CountUp({ value, duration = 1400, className = "" }: CountUpProps) {
  const liveRef = useRef<HTMLSpanElement>(null);
  const match = NUMERIC.exec(value);

  useEffect(() => {
    const el = liveRef.current;
    const match = NUMERIC.exec(value);
    if (!el || !match) return;
    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const target = parseFloat(match[1]);
    const decimals = match[1].includes(".") ? match[1].split(".")[1].length : 0;
    const suffix = match[2];
    let raf = 0;
    let started = false;

    const run = () => {
      const t0 = performance.now();
      const tick = (now: number) => {
        const p = Math.min((now - t0) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        if (p < 1) {
          el.textContent = (target * eased).toFixed(decimals) + suffix;
          raf = requestAnimationFrame(tick);
        } else {
          el.textContent = value; // exact final string from the data
        }
      };
      el.textContent = (0).toFixed(decimals) + suffix;
      raf = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          started = true;
          observer.disconnect();
          run();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
      el.textContent = value;
    };
  }, [value, duration]);

  if (!match) return <span className={className}>{value}</span>;

  return (
    <span className={`count-box ${className}`}>
      <span className="sr-only">{value}</span>
      <span className="count-sizer" aria-hidden>
        {value}
      </span>
      <span ref={liveRef} className="count-live" aria-hidden data-count-final={value}>
        {value}
      </span>
    </span>
  );
}
