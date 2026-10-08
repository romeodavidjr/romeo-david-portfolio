import type { CSSProperties } from "react";
import { Bot, ClipboardCheck, Network, Users, type LucideIcon } from "lucide-react";
import Section from "./Section";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";
import { skillGroups } from "@/data/portfolio";

const icons: LucideIcon[] = [Network, Bot, ClipboardCheck, Users];

export default function Skills() {
  return (
    <Section id="skills" ambient="left">
      <ScrollReveal>
        <SectionHeading
          index="06"
          eyebrow="Skills"
          title="Core competencies"
          description="Technical depth across networks, automation, operations, and leadership."
        />
      </ScrollReveal>

      <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
        {skillGroups.map((group, index) => {
          const Icon = icons[index] ?? Network;
          return (
            <ScrollReveal key={group.title} delay={index * 70} className="h-full">
              <div
                className="surface surface-light surface-hover group flex h-full flex-col p-6 sm:p-8"
                style={
                  { "--light-x": "0%", "--light-y": "0%" } as CSSProperties
                }
              >
                <div className="flex items-start justify-between">
                  <span className="chip chip-lit h-16 w-16 rounded-[1.1rem]" aria-hidden>
                    <Icon size={28} strokeWidth={1.5} />
                  </span>
                  <span className="font-display text-5xl leading-none text-white/[0.12] transition-colors duration-500 group-hover:text-accent/25" aria-hidden>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="font-display mt-8 text-[2rem] leading-[1.05] text-text">
                  {group.title}
                </h3>
                <ul className="mt-6 flex list-none flex-wrap gap-2 border-t border-border p-0 pt-5">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.015))] px-3.5 py-1.5 text-[0.9rem] leading-snug text-text-body shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_6px_14px_-10px_rgba(0,0,0,0.9)] transition-colors duration-300 group-hover:border-white/15"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </Section>
  );
}
