import {
  Antenna,
  BarChart3,
  Code2,
  Database,
  FileCode2,
  GitBranch,
  Radio,
  Server,
  Signal,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";
import { technologies } from "@/data/portfolio";

const iconMap: Record<string, LucideIcon> = {
  Code2,
  BarChart3,
  Sparkles,
  Server,
  FileCode2,
  Database,
  Radio,
  Signal,
  Antenna,
  GitBranch,
};

export default function Technologies() {
  return (
    <section
      id="technologies"
      className="scroll-mt-20 border-t border-border/80 bg-bg-elevated/40 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Technologies"
            title="Tools & platforms"
            description="Technologies used across telecom operations, automation, analytics, and modern web development."
          />
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
            {technologies.map((tech) => {
              const Icon = iconMap[tech.icon] ?? Code2;
              return (
                <div
                  key={tech.name}
                  className="card-surface group flex flex-col items-center justify-center gap-2.5 px-3 py-5 text-center"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-dim text-accent ring-1 ring-accent/20 transition duration-300 group-hover:ring-accent/45 group-hover:shadow-[0_0_16px_-4px_rgba(45,212,191,0.4)]">
                    <Icon size={20} strokeWidth={1.75} />
                  </span>
                  <span className="text-xs font-medium leading-snug text-text-muted transition duration-300 group-hover:text-text sm:text-sm">
                    {tech.name}
                  </span>
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
