import type { CSSProperties } from "react";
import { Award, BadgeCheck, GraduationCap, ShieldCheck } from "lucide-react";
import Section from "./Section";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";
import { certifications, education } from "@/data/portfolio";

const certIcons = [BadgeCheck, BadgeCheck, Award, ShieldCheck];

export default function Education() {
  return (
    <Section id="education" ambient="right">
      <ScrollReveal>
        <SectionHeading
          index="07"
          eyebrow="Credentials"
          title="Education & Certifications"
          description="Academic foundation and professional engineering credentials."
        />
      </ScrollReveal>

      <div className="grid gap-5 lg:grid-cols-2 lg:gap-6">
        <ScrollReveal delay={80} className="h-full">
          <div
            className="surface surface-light h-full p-5 sm:p-8"
            style={{ "--light-x": "0%", "--light-y": "0%" } as CSSProperties}
          >
            <div className="mb-6 flex items-center gap-4">
              <span className="chip h-12 w-12" aria-hidden>
                <GraduationCap size={21} strokeWidth={1.6} />
              </span>
              <p className="label-mono !text-text">Education</p>
              <span className="h-px flex-1 bg-border" aria-hidden />
            </div>
            <ul className="flex list-none flex-col gap-3 p-0">
              {education.map((item) => (
                <li key={item.title} data-reveal="" className="tile p-5 sm:p-6">
                  <h3 className="font-display text-[1.65rem] leading-[1.12] text-text sm:text-[1.9rem]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[0.98rem] text-text-body">
                    {item.institution}
                  </p>
                  {item.details ? (
                    <p className="mt-3 inline-block rounded-lg border border-accent/20 bg-accent/[0.06] px-2.5 py-1.5 font-mono text-[12px] leading-relaxed tracking-wide text-accent">
                      {item.details}
                    </p>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={160} className="h-full">
          <div
            className="surface surface-light h-full p-5 sm:p-8"
            style={{ "--light-x": "100%", "--light-y": "0%" } as CSSProperties}
          >
            <div className="mb-6 flex items-center gap-4">
              <span className="chip h-12 w-12" aria-hidden>
                <Award size={21} strokeWidth={1.6} />
              </span>
              <p className="label-mono !text-text">Certifications & Licenses</p>
              <span className="h-px flex-1 bg-border" aria-hidden />
            </div>
            <ul className="flex list-none flex-col gap-3 p-0">
              {certifications.map((item, i) => {
                const Icon = certIcons[i] ?? BadgeCheck;
                return (
                  <li
                    key={item.title}
                    data-reveal=""
                    className="tile tile-hover group grid grid-cols-[2.5rem_minmax(0,1fr)] items-start gap-4 p-4 sm:p-5"
                  >
                    <span className="chip h-10 w-10" aria-hidden>
                      <Icon size={17} strokeWidth={1.7} />
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-base font-semibold leading-snug text-text sm:text-[1.0625rem]">
                        {item.title}
                      </h3>
                      <p className="label-mono mt-1.5 text-pretty !leading-[1.6]">{item.institution}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </ScrollReveal>
      </div>
    </Section>
  );
}
