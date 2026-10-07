import Section from "./Section";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";
import { about } from "@/data/portfolio";

export default function About() {
  return (
    <Section id="about">
      <ScrollReveal>
        <SectionHeading
          index="01"
          eyebrow="About Me"
          title="Engineering excellence in telecom & automation"
          description="A career built on operational reliability, multi-vendor expertise, and practical automation."
        />
      </ScrollReveal>

      <div className="grid gap-12 lg:grid-cols-[minmax(0,15rem)_minmax(0,1fr)] lg:gap-12">
        <div className="hidden lg:block" aria-hidden />
        <div className="grid gap-12 xl:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] xl:gap-16">
          <ScrollReveal delay={100}>
            <div className="space-y-6 text-[1.0625rem] leading-[1.75] text-text-body sm:text-lg">
              {about.paragraphs.map((p, i) => (
                <p key={i} className={i === 0 ? "text-text" : undefined}>
                  {p}
                </p>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <dl className="grid grid-cols-2 border-t border-l border-border">
              {about.highlights.map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col gap-3 border-r border-b border-border p-5 sm:p-6"
                >
                  <dt className="label-mono">{item.label}</dt>
                  <dd className="font-display order-first m-0 text-[2.75rem] leading-none text-text sm:text-5xl">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </ScrollReveal>
        </div>
      </div>
    </Section>
  );
}
