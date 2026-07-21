import {
  Network,
  Bot,
  ClipboardCheck,
  Users,
  type LucideIcon,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";
import { skillGroups } from "@/data/portfolio";

const icons: LucideIcon[] = [Network, Bot, ClipboardCheck, Users];

export default function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-20 border-t border-border/80 bg-bg-elevated/50 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Skills"
            title="Core competencies"
            description="Technical depth across networks, automation, operations, and leadership."
          />
        </ScrollReveal>

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
          {skillGroups.map((group, index) => {
            const Icon = icons[index] ?? Network;
            return (
              <ScrollReveal key={group.title} delay={index * 70}>
                <div className="card-surface group h-full p-5 sm:p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-dim text-accent ring-1 ring-accent/25 transition duration-300 group-hover:ring-accent/50 group-hover:shadow-[0_0_14px_-4px_rgba(45,212,191,0.4)]">
                      <Icon size={19} />
                    </div>
                    <h3 className="text-base font-bold text-text sm:text-lg">
                      {group.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg border border-border bg-bg/45 px-3 py-1.5 text-sm text-text-muted transition duration-300 hover:border-accent/35 hover:text-text"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
