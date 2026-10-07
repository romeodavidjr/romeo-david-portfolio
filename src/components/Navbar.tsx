"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/portfolio";

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
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-300 ${
        scrolled || open
          ? "border-b border-border bg-bg/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:h-[4.5rem] sm:px-8 lg:px-12">
        <a
          href="#home"
          className="group flex items-center gap-3 text-text"
          onClick={handleNav}
        >
          <span className="font-display flex h-9 w-9 items-center justify-center rounded-full border border-border-strong text-[1.05rem] leading-none text-text transition group-hover:border-accent">
            RD
          </span>
          <span className="hidden text-sm font-medium tracking-tight sm:inline">
            Romeo David Jr.
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const id = link.href.slice(1);
            const isActive = active === id;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={isActive ? "true" : undefined}
                  className={`relative px-2 py-2 font-mono text-[11px] tracking-[0.12em] uppercase transition-colors xl:px-3 ${
                    isActive ? "text-text" : "text-text-dim hover:text-text"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute inset-x-2 -bottom-0.5 h-px bg-accent transition-opacity xl:inset-x-3 ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                    aria-hidden
                  />
                </a>
              </li>
            );
          })}
        </ul>

        <a
          href="#contact"
          className="btn btn-ghost hidden !px-4 !py-2 text-[13px] lg:inline-flex"
        >
          Get in Touch
        </a>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-border-strong p-2 text-text transition hover:border-border-hover lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`border-t border-border bg-bg/95 backdrop-blur-md transition-all duration-300 lg:hidden ${
          open
            ? "max-h-[min(100vh,600px)] overflow-y-auto opacity-100"
            : "pointer-events-none max-h-0 overflow-hidden opacity-0"
        }`}
      >
        <ul className="flex flex-col px-5 py-4 sm:px-8">
          {navLinks.map((link, i) => {
            const id = link.href.slice(1);
            const isActive = active === id;
            return (
              <li key={link.href} className="border-b border-border last:border-b-0">
                <a
                  href={link.href}
                  onClick={handleNav}
                  className={`flex items-baseline gap-4 py-3.5 transition-colors ${
                    isActive ? "text-text" : "text-text-muted hover:text-text"
                  }`}
                >
                  <span className="label-mono w-6" aria-hidden>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-2xl leading-none">
                    {link.label}
                  </span>
                </a>
              </li>
            );
          })}
          <li className="pt-4">
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
