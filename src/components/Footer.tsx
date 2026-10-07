import { Linkedin, Mail } from "lucide-react";
import { navLinks, siteConfig } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg pt-14 pb-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <a
              href="#home"
              className="font-display text-4xl leading-none text-text sm:text-5xl"
            >
              {siteConfig.name}
            </a>
            <p className="label-mono mt-4">
              Senior Telecommunications Engineer · Data & Automation Team Lead
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border-strong text-text-muted transition hover:border-accent hover:text-accent"
              aria-label="Email"
            >
              <Mail size={17} />
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border-strong text-text-muted transition hover:border-accent hover:text-accent"
              aria-label="LinkedIn"
            >
              <Linkedin size={17} />
            </a>
          </div>
        </div>

        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-[11px] tracking-[0.12em] text-text-dim uppercase transition hover:text-text"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="border-t border-border pt-6">
          <p className="text-sm text-text-dim">
            © {siteConfig.copyrightYear} {siteConfig.copyrightName}
          </p>
        </div>
      </div>
    </footer>
  );
}
