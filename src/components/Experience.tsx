import { MapPin, Wrench } from "lucide-react";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";
import { experience } from "@/data/portfolio";

/**
 * Experience timeline layout:
 * - mobile (<768px): stacked cards only (no timeline)
 * - tablet (768–1023px): CSS grid rail [1.875rem | content] + continuous line
 * - desktop (≥1024px): wider rail [7.5rem | content] matching original spacing
 *
 * Nested tools stay inside the card flow so they cannot escape the timeline.
 */
export default function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-20 border-t border-border/80 bg-bg-elevated/50 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Experience"
            title="Professional journey"
            description="Two decades of leadership across telecom operations, public safety networks, and automation."
          />
        </ScrollReveal>

        <div className="relative">
          {/*
            Continuous timeline line sits in the rail column center.
            md: 1.875rem rail → center at 0.9375rem
            lg: 7.5rem rail → center at 3.75rem
          */}
          <div
            className="pointer-events-none absolute top-2 bottom-2 left-[0.9375rem] z-0 hidden w-[3px] -translate-x-1/2 rounded-full bg-gradient-to-b from-accent via-accent/50 to-border md:block lg:left-[3.75rem]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute top-2 bottom-2 left-[0.9375rem] z-0 hidden w-[3px] -translate-x-1/2 rounded-full bg-accent/20 blur-[2px] md:block lg:left-[3.75rem]"
            aria-hidden
          />

          <ol className="relative z-[1] m-0 list-none space-y-6 p-0 md:space-y-8">
            {experience.map((job, index) => (
              <li
                key={job.company}
                className="grid grid-cols-1 md:grid-cols-[1.875rem_minmax(0,1fr)] md:gap-x-5 lg:grid-cols-[7.5rem_minmax(0,1fr)] lg:gap-x-6"
              >
                {/* Timeline rail + dot (tablet & desktop only) */}
                <div
                  className="relative hidden md:block"
                  aria-hidden
                >
                  <span className="absolute top-8 left-1/2 z-10 h-3.5 w-3.5 -translate-x-1/2 rounded-full border-[2.5px] border-accent bg-bg shadow-[0_0_0_4px_rgba(45,212,191,0.12),0_0_16px_rgba(45,212,191,0.55)]" />
                </div>

                {/* Card column — minmax(0,1fr) prevents nested grids from overflowing */}
                <ScrollReveal delay={index * 70} className="min-w-0">
                  <article className="card-surface isolate min-w-0 p-5 sm:p-7">
                    <div className="flex flex-col gap-3 border-b border-border/70 pb-4 sm:flex-row sm:items-start sm:justify-between sm:pb-5">
                      <div className="min-w-0">
                        <h3 className="text-base font-bold leading-snug text-text sm:text-lg md:text-xl">
                          {job.role}
                        </h3>
                        <p className="mt-1.5 text-sm font-semibold text-accent sm:text-base">
                          {job.company}
                        </p>
                        {job.companyNote ? (
                          <p className="mt-1.5 max-w-xl text-xs leading-relaxed text-text-dim sm:text-[13px]">
                            {job.companyNote}
                          </p>
                        ) : null}
                      </div>
                      <div className="flex shrink-0 flex-col gap-1.5 sm:items-end">
                        <span className="inline-flex w-fit rounded-full bg-accent-dim px-3 py-1 text-[11px] font-semibold tracking-wide text-accent ring-1 ring-accent/25 sm:text-xs">
                          {job.period}
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs text-text-dim">
                          <MapPin size={12} />
                          {job.location}
                        </span>
                      </div>
                    </div>

                    <ul className="mt-4 space-y-2.5 sm:mt-5 sm:space-y-3">
                      {job.bullets.map((bullet, i) => (
                        <li
                          key={i}
                          className="flex gap-3 text-sm leading-relaxed text-text-muted sm:text-[0.95rem]"
                        >
                          <span
                            className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-accent-blue shadow-[0_0_6px_rgba(56,189,248,0.6)]"
                            aria-hidden
                          />
                          <span className="min-w-0">{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {job.nestedTools && job.nestedTools.length > 0 && (
                      <div className="mt-5 min-w-0 rounded-xl border border-accent/15 bg-bg/40 p-4 sm:mt-6 sm:p-5">
                        <div className="mb-3 flex items-center gap-2">
                          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-accent-dim text-accent ring-1 ring-accent/20">
                            <Wrench size={14} />
                          </span>
                          <p className="text-xs font-semibold tracking-wide text-accent uppercase sm:text-[13px]">
                            Custom automation tools
                          </p>
                        </div>
                        {/*
                          Tablet (md only): single column for nested tools avoids
                          cramped 2-col overflow inside the already-narrow card.
                          2×2 resumes from lg (desktop) and also works from sm on
                          wide phones — use sm:grid-cols-2 for phones in landscape
                          and lg stays 2-col. For iPad portrait (~768–1024), md is
                          active; keep 2 cols but force min-w-0 so nothing escapes.
                        */}
                        <div className="grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2">
                          {job.nestedTools.map((tool) => (
                            <div
                              key={tool.name}
                              className="card-nested min-w-0 break-words p-3.5 sm:p-4"
                            >
                              <p className="text-sm font-semibold leading-snug text-text">
                                {tool.name}
                              </p>
                              <p className="mt-1.5 text-xs leading-relaxed break-words text-text-dim">
                                {tool.description}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </article>
                </ScrollReveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
