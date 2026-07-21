import { Calendar, Code2, Wrench } from "lucide-react";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";
import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Projects"
            title="Selected work"
            description="Automation systems and tools that improve field operations, reporting, and decision-making."
          />
        </ScrollReveal>

        <div className="grid gap-5 lg:grid-cols-2">
          {projects.map((project, index) => (
            <ScrollReveal key={project.title} delay={index * 90}>
              <article className="card-surface group flex h-full flex-col p-5 sm:p-7">
                <div className="mb-4 flex items-start justify-between gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-dim text-accent ring-1 ring-accent/25 transition duration-300 group-hover:ring-accent/50 group-hover:shadow-[0_0_16px_-4px_rgba(45,212,191,0.45)]">
                    {index === 0 ? <Code2 size={21} /> : <Wrench size={21} />}
                  </div>
                  {project.period && (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-bg/40 px-2.5 py-1 text-xs text-text-dim">
                      <Calendar size={12} />
                      {project.period}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-text sm:text-xl">
                  {project.title}
                </h3>
                {project.subtitle && (
                  <p className="mt-1 text-sm font-medium text-accent-blue">
                    {project.subtitle}
                  </p>
                )}
                <p className="mt-3 text-sm leading-relaxed text-text-muted sm:text-[0.95rem]">
                  {project.description}
                </p>

                {project.features && (
                  <div className="mt-5">
                    <p className="mb-2.5 text-xs font-semibold tracking-wide text-accent uppercase">
                      Key capabilities
                    </p>
                    <ul className="space-y-2.5">
                      {project.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex gap-2.5 text-sm leading-relaxed text-text-muted"
                        >
                          <span
                            className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent shadow-[0_0_6px_rgba(45,212,191,0.55)]"
                            aria-hidden
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.items && (
                  <div className="mt-5">
                    <p className="mb-2.5 text-xs font-semibold tracking-wide text-accent uppercase">
                      Tool suite
                    </p>
                    <div className="space-y-2.5">
                      {project.items.map((item) => (
                        <div
                          key={item.name}
                          className="card-nested px-3.5 py-3.5"
                        >
                          <p className="text-sm font-semibold text-text">
                            {item.name}
                          </p>
                          {item.description && (
                            <p className="mt-1.5 text-xs leading-relaxed text-text-dim sm:text-[13px]">
                              {item.description}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {project.technologies && (
                  <div className="mt-auto flex flex-wrap gap-2 border-t border-border/60 pt-5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-accent-blue-dim px-2.5 py-1 text-xs font-medium text-accent-blue ring-1 ring-accent-blue/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
