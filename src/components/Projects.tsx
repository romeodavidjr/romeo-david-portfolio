import type { CSSProperties } from "react";
import Section from "./Section";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";
import ToolIcon from "./ToolIcon";
import { projects, type Project } from "@/data/portfolio";

function RecordHeader({ caseNo, period }: { caseNo: string; period?: string }) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border-b border-white/[0.07] px-5 py-4 sm:px-8 lg:px-10">
      <div className="flex items-center gap-3">
        <span className="relative flex h-2 w-2" aria-hidden>
          <span className="absolute inset-0 rounded-full bg-accent opacity-40 blur-[3px]" />
          <span className="relative h-2 w-2 rounded-full bg-accent" />
        </span>
        <span className="label-mono !text-text">Case {caseNo}</span>
      </div>
      {period ? <span className="label-mono">{period}</span> : null}
    </div>
  );
}

function Stack({ technologies }: { technologies?: string[] }) {
  if (!technologies) return null;
  return (
    <div>
      <p className="label-mono mb-3">Stack</p>
      <ul className="flex list-none flex-wrap gap-2 p-0">
        {technologies.map((tech) => (
          <li
            key={tech}
            className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-[11.5px] tracking-wide text-text-muted shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
          >
            {tech}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Summary({ project, large }: { project: Project; large?: boolean }) {
  return (
    <>
      <h3
        className={`font-display num-sheen leading-[0.95] ${
          large ? "text-[3rem] sm:text-7xl" : "text-[2.75rem] sm:text-6xl"
        }`}
      >
        {project.title}
      </h3>
      {project.subtitle ? (
        <p className="mt-4 text-base font-medium leading-snug text-accent sm:text-lg">
          {project.subtitle}
        </p>
      ) : null}
      <p className="mt-5 max-w-2xl text-[0.98rem] leading-relaxed text-text-body sm:text-[1.0625rem]">
        {project.description}
      </p>
    </>
  );
}

/** Projects as layered "case records". */
export default function Projects() {
  return (
    <Section id="projects" ambient="left">
      <ScrollReveal>
        <SectionHeading
          index="04"
          eyebrow="Projects"
          title="Selected work"
          description="Automation systems and tools that improve field operations, reporting, and decision-making."
        />
      </ScrollReveal>

      <div className="flex flex-col gap-8 sm:gap-10">
        {projects.map((project, index) => {
          const caseNo = String(index + 1).padStart(2, "0");

          /* Tool-suite record: summary on top, six dimensional tool tiles */
          if (project.items) {
            return (
              <ScrollReveal key={project.title} delay={60}>
                <article
                  className="surface surface-light overflow-hidden"
                  style={{ "--light-x": "100%", "--light-y": "0%" } as CSSProperties}
                >
                  <RecordHeader caseNo={caseNo} period={project.period} />
                  <div className="px-5 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
                    <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:items-end lg:gap-14">
                      <div className="min-w-0">
                        <Summary project={project} />
                      </div>
                      <Stack technologies={project.technologies} />
                    </div>

                    <div className="mt-10 mb-5 flex items-center gap-3">
                      <p className="label-mono">Tool suite</p>
                      <span className="h-px flex-1 bg-border" aria-hidden />
                      <span className="label-mono">
                        {String(project.items.length).padStart(2, "0")}
                      </span>
                    </div>
                    <ol className="grid list-none gap-3 p-0 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
                      {project.items.map((item, r) => (
                        <li
                          key={item.name}
                          data-reveal=""
                          className="tile tile-hover group relative flex flex-col overflow-hidden p-5 sm:p-6"
                        >
                          <span
                            className="font-display pointer-events-none absolute -top-3 right-3 text-[5.5rem] leading-none text-white/[0.045] transition-colors duration-500 group-hover:text-accent/[0.09]"
                            aria-hidden
                          >
                            {String(r + 1).padStart(2, "0")}
                          </span>
                          <span className="chip h-12 w-12">
                            <ToolIcon name={item.name} size={21} />
                          </span>
                          <p className="label-mono mt-5">
                            Tool {String(r + 1).padStart(2, "0")}
                          </p>
                          <p className="mt-1.5 text-[1.05rem] font-semibold leading-snug text-text">
                            {item.name}
                          </p>
                          {item.description ? (
                            <p className="mt-2 text-[0.94rem] leading-relaxed text-text-muted">
                              {item.description}
                            </p>
                          ) : null}
                        </li>
                      ))}
                    </ol>
                  </div>
                </article>
              </ScrollReveal>
            );
          }

          /* Product record: summary left, capabilities panel right */
          return (
            <ScrollReveal key={project.title} delay={60}>
              <article
                className="surface surface-light overflow-hidden"
                style={{ "--light-x": "0%", "--light-y": "0%" } as CSSProperties}
              >
                <RecordHeader caseNo={caseNo} period={project.period} />
                <div className="grid gap-10 px-5 py-8 sm:px-8 sm:py-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:gap-12 lg:px-10 lg:py-12">
                  <div className="flex min-w-0 flex-col">
                    <Summary project={project} large />
                    <div className="mt-8 border-t border-border pt-6 lg:mt-auto">
                      <Stack technologies={project.technologies} />
                    </div>
                  </div>

                  {project.features ? (
                    <div className="tile min-w-0 p-5 sm:p-7">
                      <div className="flex items-center gap-3">
                        <p className="label-mono">Key capabilities</p>
                        <span className="h-px flex-1 bg-border" aria-hidden />
                        <span className="label-mono">
                          {String(project.features.length).padStart(2, "0")}
                        </span>
                      </div>
                      <ol className="mt-2 list-none p-0">
                        {project.features.map((feature, r) => (
                          <li
                            key={feature}
                            className="row-link grid grid-cols-[2.5rem_minmax(0,1fr)] gap-3 border-b border-border py-4 last:border-b-0 sm:grid-cols-[3rem_minmax(0,1fr)]"
                          >
                            <span className="row-index font-display text-2xl leading-none text-text-dim transition-colors sm:text-[1.75rem]">
                              {String(r + 1).padStart(2, "0")}
                            </span>
                            <p className="text-[0.98rem] leading-relaxed text-text-body sm:text-base">
                              {feature}
                            </p>
                          </li>
                        ))}
                      </ol>
                    </div>
                  ) : null}
                </div>
              </article>
            </ScrollReveal>
          );
        })}
      </div>
    </Section>
  );
}
