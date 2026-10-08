import type { ComponentType, CSSProperties } from "react";
import { RadioTower, SatelliteDish, Sparkles, Code2 } from "lucide-react";
import { TbBroadcast } from "react-icons/tb";
import {
  SiFlask,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiPython,
  SiSqlite,
} from "react-icons/si";
import Section from "./Section";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";
import PowerBiLogo from "./PowerBiLogo";
import { technologies } from "@/data/portfolio";

type IconComp = ComponentType<{ size?: number; className?: string }>;
type GroupKey = "automation" | "telecom" | "web";

/**
 * Presentation-only metadata keyed by the technology names in portfolio.ts.
 * Brand logos come from Simple Icons (react-icons/si); telecom items use
 * line glyphs. `brand` is the hover tint.
 */
const meta: Record<
  string,
  { icons: IconComp[]; brand: string; group: GroupKey }
> = {
  Python: { icons: [SiPython], brand: "#5a9fd6", group: "automation" },
  "Power BI": { icons: [PowerBiLogo], brand: "#f2c811", group: "automation" },
  "Generative AI": { icons: [Sparkles], brand: "#5fe0cc", group: "automation" },
  SQLite: { icons: [SiSqlite], brand: "#5fb4e6", group: "automation" },
  TETRA: { icons: [TbBroadcast], brand: "#5fe0cc", group: "telecom" },
  "GSM/UMTS/LTE": { icons: [RadioTower], brand: "#5fe0cc", group: "telecom" },
  "Microwave Transmission": {
    icons: [SatelliteDish],
    brand: "#5fe0cc",
    group: "telecom",
  },
  Flask: { icons: [SiFlask], brand: "#ffffff", group: "web" },
  "HTML/CSS/JavaScript": {
    icons: [SiHtml5, SiJavascript],
    brand: "#f0db4f",
    group: "web",
  },
  Git: { icons: [SiGit], brand: "#f1502f", group: "web" },
};

const groups: { key: GroupKey; code: string; title: string }[] = [
  { key: "automation", code: "A", title: "Automation & data" },
  { key: "telecom", code: "B", title: "Telecom & networks" },
  { key: "web", code: "C", title: "Web & tooling" },
];

const indexOf = (name: string) =>
  String(technologies.findIndex((t) => t.name === name) + 1).padStart(2, "0");

function Chip({
  name,
  size,
  iconSize,
}: {
  name: string;
  size: string;
  iconSize: number;
}) {
  const m = meta[name];
  const icons = m?.icons ?? [Code2];
  return (
    <span
      className={`chip ${size}`}
      style={{ "--brand": m?.brand ?? "#5fe0cc" } as CSSProperties}
      aria-hidden
    >
      <span className="flex items-center gap-1.5">
        {icons.map((Icon, i) => (
          <Icon
            key={i}
            size={icons.length > 1 ? Math.round(iconSize * 0.72) : iconSize}
          />
        ))}
      </span>
    </span>
  );
}

function GroupHeader({
  code,
  title,
  count,
}: {
  code: string;
  title: string;
  count: number;
}) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <span className="label-mono !text-accent">{code}</span>
      <h3 className="label-mono !text-text">{title}</h3>
      <span className="h-px flex-1 bg-border" aria-hidden />
      <span className="label-mono">{String(count).padStart(2, "0")}</span>
    </div>
  );
}

export default function Technologies() {
  const byGroup = (g: GroupKey) =>
    technologies.filter((t) => (meta[t.name]?.group ?? "web") === g);
  const automation = byGroup("automation");
  const telecom = byGroup("telecom");
  const web = byGroup("web");

  return (
    <Section id="technologies" ambient="right">
      <ScrollReveal>
        <SectionHeading
          index="05"
          eyebrow="Technologies"
          title="Tools & platforms"
          description="Technologies used across telecom operations, automation, analytics, and modern web development."
        />
      </ScrollReveal>

      <div className="grid gap-4 sm:gap-5 lg:grid-cols-12">
        {/* A — Automation & data (core stack, largest) */}
        <ScrollReveal className="lg:col-span-7">
          <div
            className="surface surface-light h-full p-4 sm:p-6"
            style={{ "--light-x": "0%", "--light-y": "0%" } as CSSProperties}
          >
            <GroupHeader
              code={groups[0].code}
              title={groups[0].title}
              count={automation.length}
            />
            <ul className="grid list-none gap-3 p-0 sm:grid-cols-2 lg:h-[calc(100%-2.5rem)] lg:grid-rows-2">
              {automation.map((tech) => (
                <li
                  key={tech.name}
                  data-reveal=""
                  className="tile tile-hover group flex items-center gap-5 p-4 sm:flex-col sm:items-start sm:justify-between sm:gap-6 sm:p-5"
                >
                  <Chip
                    name={tech.name}
                    size="h-14 w-14 sm:h-16 sm:w-16"
                    iconSize={28}
                  />
                  <div className="min-w-0">
                    <span className="label-mono block">{indexOf(tech.name)}</span>
                    <span className="font-display mt-1 block text-[1.35rem] leading-[1.05] text-text sm:text-[1.9rem]">
                      {tech.name}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>

        {/* B — Telecom & networks */}
        <ScrollReveal className="lg:col-span-5" delay={80}>
          <div
            className="surface surface-light h-full p-4 sm:p-6"
            style={{ "--light-x": "100%", "--light-y": "0%" } as CSSProperties}
          >
            <GroupHeader
              code={groups[1].code}
              title={groups[1].title}
              count={telecom.length}
            />
            <ul className="grid list-none gap-3 p-0 lg:h-[calc(100%-2.5rem)] lg:grid-rows-3">
              {telecom.map((tech) => (
                <li
                  key={tech.name}
                  data-reveal=""
                  className="tile tile-hover group flex items-center gap-5 p-4 sm:p-5"
                >
                  <Chip
                    name={tech.name}
                    size="h-14 w-14 sm:h-16 sm:w-16"
                    iconSize={28}
                  />
                  <div className="min-w-0">
                    <span className="label-mono block">{indexOf(tech.name)}</span>
                    <span className="font-display mt-1 block text-[1.35rem] leading-[1.05] text-text sm:text-[1.9rem]">
                      {tech.name}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>

        {/* C — Web & tooling */}
        <ScrollReveal className="lg:col-span-12" delay={120}>
          <div
            className="surface surface-light p-4 sm:p-6"
            style={{ "--light-x": "50%", "--light-y": "120%" } as CSSProperties}
          >
            <GroupHeader
              code={groups[2].code}
              title={groups[2].title}
              count={web.length}
            />
            <ul className="grid list-none gap-3 p-0 sm:grid-cols-3">
              {web.map((tech) => (
                <li
                  key={tech.name}
                  data-reveal=""
                  className="tile tile-hover group flex items-center gap-4 p-4"
                >
                  <Chip
                    name={tech.name}
                    size={
                      (meta[tech.name]?.icons.length ?? 1) > 1
                        ? "h-14 w-[4.75rem]"
                        : "h-14 w-14"
                    }
                    iconSize={26}
                  />
                  <div className="min-w-0">
                    <span className="label-mono block">{indexOf(tech.name)}</span>
                    <span className="font-display mt-1 block text-[1.35rem] leading-[1.05] text-text sm:text-[1.65rem]">
                      {tech.name}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      </div>
    </Section>
  );
}
