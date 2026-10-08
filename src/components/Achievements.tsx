import type { CSSProperties } from "react";
import {
  Activity,
  Gauge,
  Layers,
  MapPinned,
  RadioTower,
  Timer,
  type LucideIcon,
} from "lucide-react";
import Section from "./Section";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";
import { achievements } from "@/data/portfolio";
import CountUp from "./CountUp";

/** Presentation per position: bento span, glyph, optional meter. */
const layout: {
  span: string;
  icon: LucideIcon;
  size: "xl" | "md" | "wide";
  meter?: { from: number; to: number };
}[] = [
  { span: "sm:col-span-2 lg:col-span-6 lg:row-span-2", icon: Gauge, size: "xl", meter: { from: 0, to: 97.6 } },
  { span: "lg:col-span-3", icon: Timer, size: "md" },
  { span: "lg:col-span-3", icon: MapPinned, size: "md" },
  { span: "sm:col-span-2 lg:col-span-6", icon: Activity, size: "wide", meter: { from: 65, to: 80 } },
  { span: "sm:col-span-2 lg:col-span-6", icon: RadioTower, size: "wide" },
  { span: "sm:col-span-2 lg:col-span-6", icon: Layers, size: "wide" },
];

export default function Achievements() {
  return (
    <Section id="achievements" ambient="left">
      <ScrollReveal>
        <SectionHeading
          index="02"
          eyebrow="Key Achievements"
          title="Impact by the numbers"
          description="Operational excellence, automation delivery, and measurable results across telecom O&M."
        />
      </ScrollReveal>

      <ol className="grid list-none gap-4 p-0 sm:grid-cols-2 sm:gap-5 lg:grid-cols-12">
        {achievements.map((item, index) => {
          const l = layout[index] ?? layout[layout.length - 1];
          const Icon = l.icon;
          const isXL = l.size === "xl";
          return (
            <li key={item.label} className={l.span}>
              <ScrollReveal delay={(index % 3) * 70} className="h-full">
                <article
                  className={`surface surface-hover group flex h-full flex-col p-6 sm:p-7 ${
                    isXL ? "surface-light lg:p-10" : ""
                  } ${l.size === "wide" ? "sm:flex-row sm:items-center sm:gap-8" : ""}`}
                  style={
                    isXL
                      ? ({ "--light-x": "0%", "--light-y": "0%" } as CSSProperties)
                      : undefined
                  }
                >
                  {isXL ? <span className="glow-ring" aria-hidden /> : null}
                  <div
                    className={`flex items-start justify-between gap-4 ${
                      l.size === "wide" ? "sm:w-[13rem] sm:shrink-0 sm:flex-col sm:justify-start" : ""
                    }`}
                  >
                    <p
                      className={`font-display num-sheen leading-[0.9] ${
                        isXL
                          ? "text-[4.5rem] sm:text-[6rem] lg:text-[8.5rem]"
                          : "text-[3.25rem] sm:text-[3.75rem]"
                      }`}
                    >
                      <CountUp value={item.value} />
                    </p>
                    <span
                      className={`chip ${isXL ? "h-12 w-12 sm:h-14 sm:w-14" : "h-11 w-11"} ${
                        l.size === "wide" ? "sm:order-first sm:mb-4" : ""
                      }`}
                      aria-hidden
                    >
                      <Icon size={isXL ? 22 : 19} strokeWidth={1.6} />
                    </span>
                  </div>

                  <div className={`min-w-0 ${isXL ? "mt-auto pt-10" : "mt-6"} ${l.size === "wide" ? "sm:mt-0" : ""}`}>
                    {l.meter ? (
                      <div className="mb-6">
                        <div className="meter" aria-hidden>
                          <span
                            style={{
                              left: `${l.meter.from}%`,
                              width: `${l.meter.to - l.meter.from}%`,
                            }}
                          />
                        </div>
                        <div className="mt-2 flex justify-between font-mono text-[10.5px] tracking-wider text-text-dim" aria-hidden>
                          <span>0</span>
                          <span>100</span>
                        </div>
                      </div>
                    ) : null}
                    <p className="label-mono !text-accent">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3
                      className={`mt-2 font-semibold text-text ${
                        isXL ? "text-xl sm:text-2xl" : "text-base sm:text-lg"
                      }`}
                    >
                      {item.label}
                    </h3>
                    <p
                      className={`mt-2 leading-relaxed text-text-muted ${
                        isXL ? "max-w-md text-base sm:text-[1.0625rem]" : "text-[0.95rem]"
                      }`}
                    >
                      {item.description}
                    </p>
                  </div>
                </article>
              </ScrollReveal>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
