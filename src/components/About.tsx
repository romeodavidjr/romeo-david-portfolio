import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";
import { about } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            eyebrow="About Me"
            title="Engineering excellence in telecom & automation"
            description="A career built on operational reliability, multi-vendor expertise, and practical automation."
          />
        </ScrollReveal>

        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:gap-10">
          <ScrollReveal delay={100}>
            <div className="space-y-4 text-[0.95rem] leading-relaxed text-text-muted sm:text-base md:text-[1.05rem]">
              {about.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="grid grid-cols-2 gap-3">
              {about.highlights.map((item) => (
                <div
                  key={item.label}
                  className="card-surface p-4 sm:p-5"
                >
                  <p className="text-2xl font-extrabold tracking-tight text-accent sm:text-3xl">
                    {item.value}
                  </p>
                  <p className="mt-1 text-xs font-medium text-text-dim sm:text-sm">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
