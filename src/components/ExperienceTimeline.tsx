"use client";

import { useEffect, useState, type ReactNode } from "react";

/**
 * Desktop-only timeline chrome.
 * iPads often report portrait width as 1024px — use 1025px+ only.
 * Below that, nothing is rendered (not merely hidden).
 */
function useIsLargeDesktop() {
  const [isLargeDesktop, setIsLargeDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1025px)");
    const apply = () => setIsLargeDesktop(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  return isLargeDesktop;
}

export function ExperienceTimelineShell({
  children,
}: {
  children: (ctx: { showTimeline: boolean }) => ReactNode;
}) {
  const showTimeline = useIsLargeDesktop();

  return (
    <div
      className={
        showTimeline
          ? "relative pl-[9.5rem]"
          : "relative pl-0"
      }
    >
      {showTimeline ? (
        <>
          <div
            className="pointer-events-none absolute top-2 bottom-2 left-[3.75rem] z-0 w-[3px] -translate-x-1/2 rounded-full bg-gradient-to-b from-accent via-accent/50 to-border"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute top-2 bottom-2 left-[3.75rem] z-0 w-[3px] -translate-x-1/2 rounded-full bg-accent/20 blur-[2px]"
            aria-hidden
          />
        </>
      ) : null}
      {children({ showTimeline })}
    </div>
  );
}

export function ExperienceTimelineDot({
  showTimeline,
}: {
  showTimeline: boolean;
}) {
  if (!showTimeline) return null;

  return (
    <span
      className="pointer-events-none absolute top-8 left-[3.75rem] z-10 h-3.5 w-3.5 -translate-x-1/2 rounded-full border-[2.5px] border-accent bg-bg shadow-[0_0_0_4px_rgba(45,212,191,0.12),0_0_12px_rgba(45,212,191,0.45)]"
      aria-hidden
    />
  );
}
