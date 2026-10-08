"use client";

import { FormEvent, useState, type CSSProperties } from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";
import { siteConfig } from "@/data/portfolio";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    // Client-side mailto fallback — works without a backend.
    // For production, wire this to a form API (Formspree, Resend, etc.).
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
    form.reset();
  };

  const rowClass =
    "group grid grid-cols-[2.75rem_minmax(0,1fr)_auto] items-center gap-x-3 border-b sm:gap-x-4 border-border py-5 last:border-b-0 sm:py-6";

  return (
    <section
      id="contact"
      className="stage-light-low relative scroll-mt-20 pt-14 pb-20 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="rule-fade mb-10 sm:mb-14" aria-hidden />
        <ScrollReveal>
          <SectionHeading
            index="08"
            eyebrow="Contact"
            title="Let's connect"
            description="Open to opportunities, collaborations, and technical discussions."
          />
        </ScrollReveal>

        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-16">
          <ScrollReveal delay={80}>
            <div className="surface px-4 sm:px-7">
              <a href={`mailto:${siteConfig.email}`} className={rowClass}>
                <span className="chip h-11 w-11" aria-hidden>
                  <Mail size={18} strokeWidth={1.7} />
                </span>
                <span className="min-w-0">
                  <span className="label-mono block">Email</span>
                <span className="mt-1 block text-[0.95rem] font-medium break-all text-text transition-colors group-hover:text-accent sm:text-lg">
                  {siteConfig.email}
                </span>
                </span>
                <ArrowUpRight
                  size={16}
                  className="hidden text-text-dim transition-colors group-hover:text-accent sm:block"
                  aria-hidden
                />
              </a>

              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={rowClass}
              >
                <span className="chip h-11 w-11" aria-hidden>
                  <Linkedin size={18} strokeWidth={1.7} />
                </span>
                <span className="min-w-0">
                  <span className="label-mono block">LinkedIn</span>
                <span className="mt-1 block text-[0.95rem] font-medium break-words text-text transition-colors group-hover:text-accent sm:text-lg">
                  {siteConfig.linkedinDisplay}
                </span>
                </span>
                <ArrowUpRight
                  size={16}
                  className="hidden text-text-dim transition-colors group-hover:text-accent sm:block"
                  aria-hidden
                />
              </a>

              <div className={rowClass}>
                <span className="chip h-11 w-11" aria-hidden>
                  <MapPin size={18} strokeWidth={1.7} />
                </span>
                <span className="min-w-0">
                  <span className="label-mono block">Location</span>
                <span className="mt-1 block text-[0.95rem] font-medium text-text sm:text-lg">
                  {siteConfig.location}
                </span>
                </span>
                <span aria-hidden />
              </div>

              {siteConfig.phone ? (
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className={rowClass}
                >
                  <span className="chip h-11 w-11" aria-hidden>
                  <Phone size={18} strokeWidth={1.7} />
                </span>
                <span className="min-w-0">
                  <span className="label-mono block">Phone</span>
                  <span className="mt-1 block text-[0.95rem] font-medium text-text transition-colors group-hover:text-accent sm:text-lg">
                    {siteConfig.phone}
                  </span>
                </span>
                  <ArrowUpRight
                    size={16}
                    className="hidden text-text-dim transition-colors group-hover:text-accent sm:block"
                    aria-hidden
                  />
                </a>
              ) : null}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={160}>
            <form
              onSubmit={handleSubmit}
              className="surface surface-light p-5 sm:p-8"
              style={{ "--light-x": "100%", "--light-y": "0%" } as CSSProperties}
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <label htmlFor="name" className="label-mono mb-2 block">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Your name"
                    className="field"
                  />
                </div>
                <div className="sm:col-span-1">
                  <label htmlFor="email" className="label-mono mb-2 block">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="you@example.com"
                    className="field"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="label-mono mb-2 block">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="How can I help you?"
                    className="field resize-y"
                  />
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <button type="submit" className="btn btn-primary">
                  <Send size={15} aria-hidden />
                  Send Message
                </button>
                {status === "sent" && (
                  <p
                    className="inline-flex items-center gap-2 text-sm text-accent"
                    role="status"
                  >
                    <CheckCircle2 size={16} aria-hidden />
                    Opening your email client…
                  </p>
                )}
              </div>
              <p className="mt-4 text-[13px] leading-relaxed text-text-dim">
                Submitting opens your email client with a pre-filled message. No
                data is stored on this site.
              </p>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
