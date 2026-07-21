"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, siteConfig } from "@/data/portfolio";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);

      const sections = navLinks.map((l) => l.href.slice(1));
      let current = "";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top <= 120) current = id;
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleNav = () => setOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-border bg-bg/90 shadow-lg shadow-black/20 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:h-[4.5rem] sm:px-6 lg:px-8">
        <a
          href="#home"
          className="group flex items-center gap-2 text-lg font-bold tracking-tight text-text"
          onClick={handleNav}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-dim text-sm font-bold text-accent ring-1 ring-accent/30 transition group-hover:ring-accent/60">
            RD
          </span>
          <span className="hidden sm:inline">
            {siteConfig.name.split(" ").slice(0, 2).join(" ")}
          </span>
        </a>

        <ul className="hidden items-center gap-0.5 lg:flex">
          {navLinks.map((link) => {
            const id = link.href.slice(1);
            const isActive = active === id;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`rounded-lg px-2.5 py-2 text-[13px] font-medium transition-colors xl:px-3 xl:text-sm ${
                    isActive
                      ? "bg-accent-dim text-accent"
                      : "text-text-muted hover:bg-bg-card hover:text-text"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        <a
          href="#contact"
          className="btn btn-primary hidden !px-4 !py-2 text-sm lg:inline-flex"
        >
          Get in Touch
        </a>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg p-2 text-text-muted transition hover:bg-bg-card hover:text-text lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`border-t border-border bg-bg/95 backdrop-blur-xl transition-all duration-300 lg:hidden ${
          open
            ? "max-h-[min(100vh,560px)] overflow-y-auto opacity-100"
            : "pointer-events-none max-h-0 overflow-hidden opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-4 py-4">
          {navLinks.map((link) => {
            const id = link.href.slice(1);
            const isActive = active === id;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={handleNav}
                  className={`block rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                    isActive
                      ? "bg-accent-dim text-accent"
                      : "text-text-muted hover:bg-bg-card hover:text-text"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
          <li className="pt-2">
            <a
              href="#contact"
              onClick={handleNav}
              className="btn btn-primary w-full py-3 text-base"
            >
              Get in Touch
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
