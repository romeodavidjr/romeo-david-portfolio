import type { CSSProperties } from "react";
import Section from "./Section";
import ToolIcon from "./ToolIcon";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";
import { experience } from "@/data/portfolio";

/**
 * Experience — editorial ledger.
 * Horizontal hairlines only: no timeline line, dots, left rail or markers.
 */
export default function Experience() {
  return (
    <Section id="experience" ambient="right">
      <ScrollReveal>
        <SectionHeading
          index="03"
          eyebrow="Experience"
          title="Professional journey"
          description="Two decades of leadership across telecom operations, public safety networks, and automation."
        />
      </ScrollReveal>

      <div className="experience-stack flex w-full flex-col gap-5 sm:gap-6">
        {experience.map((job, index) => (
          <ScrollReveal key={job.company} delay={60} className="w-full">
            <article
              className={`surface grid w-full gap-6 px-5 py-8 sm:px-8 sm:py-10 lg:grid-cols-[minmax(0,15.5rem)_minmax(0,1fr)] lg:gap-12 lg:px-10 lg:py-12 ${
                index === 0 ? "surface-light" : ""
              }`}
              style={
                index === 0
                  ? ({ "--light-x": "100%", "--light-y": "0%" } as CSSProperties)
                  : undefined
              }
            >
              {/* Meta column */}
              <div className="flex flex-wrap items-baseline gap-x-5 gap-y-2 lg:flex-col lg:gap-3">
                <span
                  className="font-display text-5xl leading-none text-white/15 lg:text-6xl"
                  aria-hidden
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="font-mono text-[13px] tracking-wide text-text lg:whitespace-nowrap">
                  {job.period}
                </p>
                <p className="label-mono">{job.location}</p>
              </div>

              {/* Body */}
              <div className="min-w-0">
                <h3 className="font-display text-[1.85rem] leading-[1.08] text-text sm:text-4xl lg:text-[2.6rem]">
                  {job.role}
                </h3>
                <p className="mt-3 text-base font-medium text-accent sm:text-[1.0625rem]">
                  {job.company}
                </p>
                {job.companyNote ? (
                  <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-text-dim">
                    {job.companyNote}
                  </p>
                ) : null}

                <ul className="mt-7 max-w-3xl list-none space-y-4 p-0">
                  {job.bullets.map((bullet, i) => (
                    <li
                      key={i}
                      className="grid grid-cols-[1.25rem_minmax(0,1fr)] gap-3 text-[0.98rem] leading-relaxed text-text-body sm:text-[1.0625rem]"
                    >
                      <span
                        className="mt-[0.8em] h-px w-3 bg-text-dim"
                        aria-hidden
                      />
                      <span className="min-w-0">{bullet}</span>
                    </li>
                  ))}
                </ul>

                {job.nestedTools && job.nestedTools.length > 0 ? (
                  <div className="mt-10">
                    <div className="flex items-center gap-3">
                      <p className="label-mono">Custom automation tools</p>
                      <span className="h-px flex-1 bg-border" aria-hidden />
                      <span className="label-mono">
                        {String(job.nestedTools.length).padStart(2, "0")}
                      </span>
                    </div>
                    <ol className="mt-4 grid list-none grid-cols-1 gap-3 p-0 md:grid-cols-2">
                      {job.nestedTools.map((tool, t) => (
                        <li
                          key={tool.name}
                          data-reveal=""
                          className="tile tile-hover group grid min-w-0 grid-cols-[2.75rem_minmax(0,1fr)] gap-4 p-4 sm:p-5"
                        >
                          <span className="chip h-11 w-11">
                            <ToolIcon name={tool.name} size={19} />
                          </span>
                          <div className="min-w-0">
                            <p className="flex items-baseline gap-2 text-[0.98rem] font-semibold leading-snug text-text">
                              <span className="label-mono !text-accent" aria-hidden>
                                T{String(t + 1).padStart(2, "0")}
                              </span>
                              <span>{tool.name}</span>
                            </p>
                            <p className="mt-1.5 text-sm leading-relaxed break-words text-text-muted sm:text-[0.95rem]">
                              {tool.description}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ol>
                  </div>
                ) : null}
              </div>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
}
