import Section from "./Section";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";
import { achievements } from "@/data/portfolio";

export default function Achievements() {
  return (
    <Section id="achievements">
      <ScrollReveal>
        <SectionHeading
          index="02"
          eyebrow="Key Achievements"
          title="Impact by the numbers"
          description="Operational excellence, automation delivery, and measurable results across telecom O&M."
        />
      </ScrollReveal>

      <ol className="grid list-none border-t border-border p-0 md:grid-cols-2 md:gap-x-12 lg:gap-x-16">
        {achievements.map((item, index) => (
          <li key={item.label} className="border-b border-border">
            <ScrollReveal delay={(index % 2) * 80}>
              <article className="grid grid-cols-[minmax(0,7.5rem)_minmax(0,1fr)] gap-5 py-7 sm:grid-cols-[minmax(0,10rem)_minmax(0,1fr)] sm:gap-8 sm:py-9">
                <p className="font-display text-[2.25rem] leading-none text-text sm:text-[3.4rem]">
                  {item.value}
                </p>
                <div className="min-w-0 pt-1">
                  <p className="label-mono !text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 text-base font-semibold text-text sm:text-lg">
                    {item.label}
                  </h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-text-muted">
                    {item.description}
                  </p>
                </div>
              </article>
            </ScrollReveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
