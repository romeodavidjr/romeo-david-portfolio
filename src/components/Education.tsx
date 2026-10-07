import { Award, GraduationCap } from "lucide-react";
import Section from "./Section";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";
import { certifications, education } from "@/data/portfolio";

export default function Education() {
  return (
    <Section id="education">
      <ScrollReveal>
        <SectionHeading
          index="07"
          eyebrow="Credentials"
          title="Education & Certifications"
          description="Academic foundation and professional engineering credentials."
        />
      </ScrollReveal>

      <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
        <ScrollReveal delay={80}>
          <div>
            <div className="mb-2 flex items-center gap-3">
              <GraduationCap size={15} className="text-accent" aria-hidden />
              <p className="label-mono">Education</p>
              <span className="h-px flex-1 bg-border" aria-hidden />
            </div>
            <ul className="list-none p-0">
              {education.map((item) => (
                <li key={item.title} className="border-b border-border py-7">
                  <h3 className="font-display text-[1.75rem] leading-[1.12] text-text sm:text-[2rem]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[0.98rem] text-text-body">
                    {item.institution}
                  </p>
                  {item.details ? (
                    <p className="mt-2 font-mono text-[12.5px] leading-relaxed tracking-wide text-accent">
                      {item.details}
                    </p>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={160}>
          <div>
            <div className="mb-2 flex items-center gap-3">
              <Award size={15} className="text-accent" aria-hidden />
              <p className="label-mono">Certifications & Licenses</p>
              <span className="h-px flex-1 bg-border" aria-hidden />
            </div>
            <ul className="list-none p-0">
              {certifications.map((item) => (
                <li
                  key={item.title}
                  className="grid gap-1.5 border-b border-border py-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-baseline sm:gap-6"
                >
                  <h3 className="text-base font-semibold leading-snug text-text sm:text-[1.0625rem]">
                    {item.title}
                  </h3>
                  <p className="label-mono sm:max-w-[14rem] sm:text-right">
                    {item.institution}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      </div>
    </Section>
  );
}
