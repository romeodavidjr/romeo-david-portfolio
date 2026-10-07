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
import Section from "./Section";
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
    <Section id="technologies">
      <ScrollReveal>
        <SectionHeading
          index="05"
          eyebrow="Technologies"
          title="Tools & platforms"
          description="Technologies used across telecom operations, automation, analytics, and modern web development."
        />
      </ScrollReveal>

      <ScrollReveal delay={80}>
        <ul className="grid list-none grid-cols-2 border-t border-l border-border p-0 md:grid-cols-5">
          {technologies.map((tech, i) => {
            const Icon = iconMap[tech.icon] ?? Code2;
            return (
              <li
                key={tech.name}
                className="row-link flex min-h-[8.5rem] flex-col justify-between gap-6 border-r border-b border-border p-4 sm:min-h-[9.5rem] sm:p-5"
              >
                <div className="flex items-center justify-between">
                  <span className="row-index label-mono transition-colors" aria-hidden>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <Icon
                    size={17}
                    strokeWidth={1.5}
                    className="text-text-dim"
                    aria-hidden
                  />
                </div>
                <span className="text-[0.95rem] font-medium leading-snug text-text sm:text-base">
                  {tech.name}
                </span>
              </li>
            );
          })}
        </ul>
      </ScrollReveal>
    </Section>
  );
}
