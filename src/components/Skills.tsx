import Section from "./Section";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";
import { skillGroups } from "@/data/portfolio";

export default function Skills() {
  return (
    <Section id="skills">
      <ScrollReveal>
        <SectionHeading
          index="06"
          eyebrow="Skills"
          title="Core competencies"
          description="Technical depth across networks, automation, operations, and leadership."
        />
      </ScrollReveal>

      <div className="grid border-t border-border sm:grid-cols-2 xl:grid-cols-4">
        {skillGroups.map((group, index) => (
          <ScrollReveal
            key={group.title}
            delay={index * 70}
            className={`border-b border-border py-8 sm:py-10 xl:border-b-0 ${
              index % 2 === 0 ? "sm:pr-6" : "sm:border-l sm:pl-6"
            } ${index === 0 ? "xl:pr-7" : "xl:border-l xl:px-7"}`}
          >
            <div className="h-full">
              <p className="label-mono !text-accent" aria-hidden>
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="font-display mt-3 text-[1.9rem] leading-tight text-text">
                {group.title}
              </h3>
              <ul className="mt-5 list-none space-y-2.5 p-0">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-[0.98rem] leading-snug text-text-body"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
}
