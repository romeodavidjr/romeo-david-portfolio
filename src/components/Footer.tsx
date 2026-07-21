import { Linkedin, Mail } from "lucide-react";
import { navLinks, siteConfig } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-border/80 bg-bg py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <a
              href="#home"
              className="flex items-center gap-2 text-lg font-bold text-text"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-dim text-xs font-bold text-accent ring-1 ring-accent/30">
                RD
              </span>
              {siteConfig.name}
            </a>
            <p className="mt-2 max-w-sm text-sm text-text-dim">
              Senior Telecommunications Engineer · Data & Automation Team Lead
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-border text-text-muted transition duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:bg-accent-dim hover:text-accent hover:shadow-[0_0_16px_-4px_rgba(45,212,191,0.4)]"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-border text-text-muted transition duration-300 hover:-translate-y-0.5 hover:border-accent-blue/40 hover:bg-accent-blue-dim hover:text-accent-blue hover:shadow-[0_0_16px_-4px_rgba(56,189,248,0.35)]"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        <div className="flex flex-wrap gap-x-5 gap-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-text-dim transition hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="border-t border-border pt-6">
          <p className="text-center text-sm text-text-dim">
            © {siteConfig.copyrightYear} {siteConfig.copyrightName}
          </p>
        </div>
      </div>
    </footer>
  );
}
