import Section from "./Section";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";
import { projects } from "@/data/portfolio";

/** Projects as full-width "case records" with numbered editorial lists. */
export default function Projects() {
  return (
    <Section id="projects">
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
          const list = project.features
            ? {
                heading: "Key capabilities",
                rows: project.features.map((f) => ({ name: f, description: undefined as string | undefined })),
              }
            : project.items
              ? { heading: "Tool suite", rows: project.items }
              : null;

          return (
            <ScrollReveal key={project.title} delay={60}>
              <article className="panel panel-hover overflow-hidden">
                {/* Record header */}
                <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border-b border-border px-5 py-4 sm:px-8 lg:px-10">
                  <div className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
                    <span className="label-mono !text-text">Case {caseNo}</span>
                  </div>
                  {project.period ? (
                    <span className="label-mono">{project.period}</span>
                  ) : null}
                </div>

                <div className="grid gap-10 px-5 py-8 sm:px-8 sm:py-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)] lg:gap-14 lg:px-10 lg:py-12">
                  {/* Summary */}
                  <div className="min-w-0">
                    <h3 className="font-display text-[2.6rem] leading-none text-text sm:text-6xl">
                      {project.title}
                    </h3>
                    {project.subtitle ? (
                      <p className="mt-4 text-base font-medium leading-snug text-accent sm:text-lg">
                        {project.subtitle}
                      </p>
                    ) : null}
                    <p className="mt-5 text-[0.98rem] leading-relaxed text-text-body sm:text-[1.0625rem]">
                      {project.description}
                    </p>

                    {project.technologies ? (
                      <div className="mt-8 border-t border-border pt-5">
                        <p className="label-mono mb-3">Stack</p>
                        <ul className="flex list-none flex-wrap gap-2 p-0">
                          {project.technologies.map((tech) => (
                            <li
                              key={tech}
                              className="rounded-full border border-border-strong px-3 py-1 font-mono text-[11.5px] tracking-wide text-text-muted"
                            >
                              {tech}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </div>

                  {/* Numbered list */}
                  {list ? (
                    <div className="min-w-0">
                      <div className="flex items-center gap-3">
                        <p className="label-mono">{list.heading}</p>
                        <span className="h-px flex-1 bg-border" aria-hidden />
                        <span className="label-mono">
                          {String(list.rows.length).padStart(2, "0")}
                        </span>
                      </div>
                      <ol className="mt-2 list-none p-0">
                        {list.rows.map((row, r) => (
                          <li
                            key={row.name}
                            className="row-link grid grid-cols-[2.25rem_minmax(0,1fr)] gap-3 border-b border-border py-4 last:border-b-0 sm:grid-cols-[2.75rem_minmax(0,1fr)] sm:py-5"
                          >
                            <span className="row-index font-display text-xl leading-none text-text-dim transition-colors sm:text-2xl">
                              {String(r + 1).padStart(2, "0")}
                            </span>
                            <div className="min-w-0">
                              <p
                                className={
                                  row.description
                                    ? "text-[0.98rem] font-semibold leading-snug text-text sm:text-base"
                                    : "text-[0.98rem] leading-relaxed text-text-body sm:text-base"
                                }
                              >
                                {row.name}
                              </p>
                              {row.description ? (
                                <p className="mt-1.5 text-sm leading-relaxed text-text-muted sm:text-[0.95rem]">
                                  {row.description}
                                </p>
                              ) : null}
                            </div>
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
