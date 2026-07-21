import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";
import { achievements } from "@/data/portfolio";

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="scroll-mt-20 border-t border-border/80 bg-bg-elevated/40 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Key Achievements"
            title="Impact by the numbers"
            description="Operational excellence, automation delivery, and measurable results across telecom O&M."
          />
        </ScrollReveal>

        <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((item, index) => (
            <ScrollReveal key={item.label} delay={index * 60}>
              <article
                className={`card-surface group relative h-full overflow-hidden p-5 sm:p-6 ${
                  item.emphasis === "highlight" ? "sm:col-span-1" : ""
                }`}
              >
                <div
                  className="pointer-events-none absolute -top-10 -right-10 h-28 w-28 rounded-full bg-accent/10 blur-2xl transition duration-300 group-hover:bg-accent/20"
                  aria-hidden
                />
                <p className="relative text-3xl font-extrabold tracking-tight text-accent sm:text-[2rem]">
                  {item.value}
                </p>
                <h3 className="relative mt-2 text-sm font-semibold text-text sm:text-base">
                  {item.label}
                </h3>
                <p className="relative mt-2 text-sm leading-relaxed text-text-muted">
                  {item.description}
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
