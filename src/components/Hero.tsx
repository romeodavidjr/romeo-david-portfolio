import { ArrowDown, Download, FolderKanban, Mail } from "lucide-react";
import { siteConfig } from "@/data/portfolio";

/**
 * Profile photo:
 * 1. Save your image as `public/profile.jpg` (lowercase .jpg recommended)
 * 2. Path is configured in `src/data/portfolio.ts` → siteConfig.profilePhoto
 */
export default function Hero() {
  const photoSrc = siteConfig.profilePhoto;

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-mesh pt-20 pb-14 sm:pb-16"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-35" />
      <div className="pointer-events-none absolute top-1/4 right-0 h-80 w-80 rounded-full bg-accent/10 blur-3xl animate-pulse-glow" />
      <div className="pointer-events-none absolute bottom-1/4 left-0 h-64 w-64 rounded-full bg-accent-blue/10 blur-3xl animate-pulse-glow animation-delay-300" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1.15fr_auto] lg:gap-14 lg:px-8">
        <div className="order-2 lg:order-1">
          <p className="mb-3 animate-fade-in-up text-xs font-semibold tracking-[0.2em] text-accent uppercase opacity-0 sm:text-sm">
            Portfolio
          </p>
          <h1 className="animate-fade-in-up animation-delay-100 text-[2.35rem] font-extrabold leading-[1.08] tracking-tight text-text opacity-0 sm:text-5xl lg:text-[3.5rem] lg:leading-[1.05]">
            {siteConfig.name}
          </h1>
          <p className="mt-4 max-w-xl animate-fade-in-up animation-delay-200 text-base font-semibold leading-snug text-accent-blue opacity-0 sm:mt-5 sm:text-xl sm:leading-snug">
            {siteConfig.title}
          </p>
          <p className="mt-4 max-w-xl animate-fade-in-up animation-delay-300 text-[0.95rem] leading-relaxed text-text-muted opacity-0 sm:mt-5 sm:text-lg">
            {siteConfig.tagline}
          </p>

          <div className="mt-7 flex animate-fade-in-up animation-delay-400 flex-wrap gap-3 opacity-0 sm:mt-8">
            <a href="#projects" className="btn btn-primary">
              <FolderKanban size={17} strokeWidth={2.25} />
              View Projects
            </a>
            <a href="#contact" className="btn btn-ghost">
              <Mail size={17} strokeWidth={2.25} />
              Contact
            </a>
            <a
              href={siteConfig.cvPath}
              download
              className="btn btn-secondary"
            >
              <Download size={17} strokeWidth={2.25} />
              Download CV
            </a>
          </div>

          <div className="mt-8 animate-fade-in-up animation-delay-500 opacity-0 sm:mt-9">
            <a
              href="#about"
              className="inline-flex items-center gap-2 text-sm text-text-dim transition-colors duration-300 hover:text-accent"
            >
              Scroll to explore
              <ArrowDown size={15} className="animate-bounce" />
            </a>
          </div>
        </div>

        {/* Profile photo */}
        <div className="order-1 flex justify-center animate-fade-in-up animation-delay-200 opacity-0 lg:order-2 lg:justify-end">
          <div className="relative">
            {/* Soft multi-layer glow behind photo */}
            <div
              className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-accent/30 via-accent-blue/15 to-transparent blur-2xl animate-photo-glow"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -inset-3 rounded-[1.75rem] bg-gradient-to-tr from-accent/20 to-accent-blue/20 opacity-70 blur-xl"
              aria-hidden
            />
            <div className="relative h-52 w-52 overflow-hidden rounded-[1.35rem] border border-accent/20 bg-bg-card shadow-[0_20px_50px_-15px_rgba(0,0,0,0.7),0_0_40px_-12px_rgba(45,212,191,0.35)] ring-1 ring-white/5 sm:h-64 sm:w-64 lg:h-[17.5rem] lg:w-[17.5rem]">
              {/* eslint-disable-next-line @next/next/no-img-element -- plain img avoids optimizer 500s if sharp/path fails */}
              <img
                src={photoSrc}
                alt={siteConfig.name}
                className="h-full w-full object-cover"
                width={288}
                height={288}
                decoding="async"
                fetchPriority="high"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/35 via-transparent to-white/5"
                aria-hidden
              />
            </div>
            <div className="absolute -right-2 -bottom-2 rounded-xl border border-accent/25 bg-bg-elevated/95 px-3 py-1.5 text-xs font-medium text-accent shadow-lg shadow-black/30 backdrop-blur-sm sm:text-sm">
              Open to opportunities
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
