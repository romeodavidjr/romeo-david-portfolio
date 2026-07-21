import { Award, GraduationCap } from "lucide-react";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";
import { certifications, education } from "@/data/portfolio";

export default function Education() {
  return (
    <section id="education" className="scroll-mt-20 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Credentials"
            title="Education & Certifications"
            description="Academic foundation and professional engineering credentials."
          />
        </ScrollReveal>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
          <ScrollReveal delay={80}>
            <div>
              <div className="mb-4 flex items-center gap-2 text-xs font-semibold tracking-[0.14em] text-accent uppercase sm:text-sm">
                <GraduationCap size={17} />
                Education
              </div>
              <div className="space-y-3.5">
                {education.map((item) => (
                  <div key={item.title} className="card-surface p-5 sm:p-6">
                    <h3 className="text-base font-semibold leading-snug text-text sm:text-lg">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-text-muted">
                      {item.institution}
                    </p>
                    {item.details ? (
                      <p className="mt-2 text-xs font-medium leading-relaxed text-accent sm:text-sm">
                        {item.details}
                      </p>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={160}>
            <div>
              <div className="mb-4 flex items-center gap-2 text-xs font-semibold tracking-[0.14em] text-accent uppercase sm:text-sm">
                <Award size={17} />
                Certifications & Licenses
              </div>
              <div className="space-y-3.5">
                {certifications.map((item) => (
                  <div key={item.title} className="card-surface p-5 sm:p-6">
                    <h3 className="text-base font-semibold leading-snug text-text sm:text-lg">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-text-muted">
                      {item.institution}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
