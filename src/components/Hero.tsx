import type { CSSProperties } from "react";
import { ArrowDown, ArrowUpRight, Download } from "lucide-react";
import { siteConfig } from "@/data/portfolio";
import CountUp from "./CountUp";
import HeroNetwork from "./HeroNetwork";

/**
 * KPI strip — figures mirror the O&M results stated in portfolio.ts
 * (372 tickets, 97.6% YTD SLA, 22.1h MTTR, zero overdue, 100% restoration).
 */
const heroStats = [
  { value: "372", label: "O&M tickets" },
  { value: "97.6%", label: "YTD SLA compliance" },
  { value: "22.1h", label: "Average MTTR" },
  { value: "Zero", label: "Overdue tickets" },
  { value: "100%", label: "Restoration rate" },
];

/**
 * Profile photo:
 * Path is configured in `src/data/portfolio.ts` → siteConfig.profilePhoto
 */
export default function Hero() {
  const photoSrc = siteConfig.profilePhoto;
  const [titleLead, titleRest] = siteConfig.title.split(" | ");
  const nameWords = siteConfig.name.split(" ");
  const nameFirst = nameWords.slice(0, 2).join(" ");
  const nameLast = nameWords.slice(2).join(" ");

  return (
    <section
      id="home"
      className="stage-light relative overflow-hidden pt-24 pb-6 sm:pt-32 sm:pb-12 lg:flex lg:min-h-[100svh] lg:flex-col lg:justify-end lg:pt-36 lg:pb-16"
    >
      <div className="hero-light hero-light-a" aria-hidden />
      <div className="hero-light hero-light-b" aria-hidden />
      <HeroNetwork />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-16">
          {/* Copy */}
          <div className="order-2 min-w-0 lg:order-1">
            <div className="animate-fade-in-up flex items-center gap-3 opacity-0">
              <span
                className="h-1.5 w-1.5 rounded-full bg-accent"
                aria-hidden
              />
              <p className="label-mono">Portfolio</p>
            </div>

            <h1 className="font-display animate-fade-in-up animation-delay-100 mt-6 text-[4.4rem] leading-[0.92] text-text opacity-0 sm:text-[5.5rem] lg:text-[6.25rem] xl:text-[7.25rem]">
              <span className="block">{nameFirst}</span>
              {nameLast ? (
                <span className="block italic text-text-body">{nameLast}</span>
              ) : null}
            </h1>

            <p className="animate-fade-in-up animation-delay-200 mt-8 text-[clamp(0.8rem,4.3vw,1.375rem)] leading-snug font-medium tracking-[-0.01em] text-text opacity-0 sm:mt-10">
              <span className="block whitespace-nowrap">
                {titleLead} <span className="text-accent">|</span>
              </span>
              {titleRest ? (
                <span className="block whitespace-nowrap text-text-body">
                  {titleRest}
                </span>
              ) : null}
            </p>

            <p className="animate-fade-in-up animation-delay-300 mt-5 max-w-xl text-base leading-relaxed text-text-muted opacity-0 sm:text-lg">
              {siteConfig.tagline}
            </p>

            <div className="animate-fade-in-up animation-delay-400 mt-9 flex flex-wrap gap-3 opacity-0">
              <a href="#projects" className="btn btn-primary">
                View Projects
                <ArrowUpRight size={16} strokeWidth={2} aria-hidden />
              </a>
              <a href="#contact" className="btn btn-ghost">
                Contact
              </a>
              <a href={siteConfig.cvPath} download className="btn btn-ghost">
                <Download size={16} strokeWidth={2} aria-hidden />
                Download CV
              </a>
            </div>
          </div>

          {/* Portrait */}
          <figure className="animate-fade-in-up animation-delay-200 relative isolate order-1 m-0 opacity-0 lg:order-2">
            <div
              className="pointer-events-none absolute -inset-10 -z-10 rounded-[3rem] bg-[radial-gradient(closest-side,rgba(95,224,204,0.14),transparent)] blur-2xl"
              aria-hidden
            />
            <div className="relative">
            <div
              className="pointer-events-none absolute inset-0 translate-x-3 translate-y-3 rounded-[1.25rem] border border-white/[0.08] max-lg:hidden"
              aria-hidden
            />
            <div className="portrait-frame aspect-[4/3] w-full sm:aspect-[16/10] lg:aspect-[4/5] lg:w-[21rem] xl:w-[24rem]">
              {/* eslint-disable-next-line @next/next/no-img-element -- plain img avoids optimizer 500s if sharp/path fails */}
              <img
                src={photoSrc}
                alt={siteConfig.name}
                className="h-full w-full object-cover object-[50%_28%]"
                width={1248}
                height={832}
                decoding="async"
                fetchPriority="high"
              />
            </div>
            </div>
            <figcaption className="mt-3 flex items-center justify-between gap-4 lg:mt-6">
              <span className="label-mono">{siteConfig.location}</span>
            </figcaption>
          </figure>
        </div>

        {/* KPI strip */}
        <div className="surface animate-fade-in-up animation-delay-500 mt-14 opacity-0 sm:mt-20">
          <span
            className="glow-ring"
            style={{ "--glow-duration": "10s" } as CSSProperties}
            aria-hidden
          />
          <dl className="m-0 grid grid-cols-2 px-5 sm:grid-cols-3 sm:px-8 lg:grid-cols-5 lg:px-2">
          {heroStats.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex flex-col gap-3 py-6 pr-4 sm:py-7 lg:px-7 ${
                i < heroStats.length - 1 ? "border-b border-border lg:border-b-0" : ""
              } ${i >= 3 ? "sm:border-b-0" : ""
              } ${i % 2 === 1 ? "pl-4 sm:pl-0" : ""} ${
                i === heroStats.length - 1 ? "col-span-2 sm:col-span-1" : ""
              } ${i > 0 ? "lg:border-l lg:border-border" : ""}`}
            >
              <dt className="label-mono">{stat.label}</dt>
              <dd className="font-display num-sheen order-first m-0 text-[2.75rem] leading-none sm:text-5xl xl:text-[3.75rem]">
                <CountUp value={stat.value} />
              </dd>
            </div>
          ))}
          </dl>
        </div>

        <div className="animate-fade-in-up animation-delay-500 mt-8 hidden opacity-0 sm:block">
          <a
            href="#about"
            className="label-mono inline-flex items-center gap-2 transition-colors hover:!text-text"
          >
            Scroll to explore
            <ArrowDown size={13} aria-hidden />
          </a>
        </div>
      </div>
    </section>
  );
}
