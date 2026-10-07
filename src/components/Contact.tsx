"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight, Send, CheckCircle2 } from "lucide-react";
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
    "group grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-x-4 gap-y-1.5 border-b border-border py-5 sm:grid-cols-[7rem_minmax(0,1fr)_auto] sm:py-6";

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
            <div className="border-t border-border">
              <a href={`mailto:${siteConfig.email}`} className={rowClass}>
                <span className="label-mono col-span-2 sm:col-span-1">Email</span>
                <span className="min-w-0 text-base font-medium break-all text-text transition-colors group-hover:text-accent sm:text-lg">
                  {siteConfig.email}
                </span>
                <ArrowUpRight
                  size={16}
                  className="text-text-dim transition-colors group-hover:text-accent"
                  aria-hidden
                />
              </a>

              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={rowClass}
              >
                <span className="label-mono col-span-2 sm:col-span-1">LinkedIn</span>
                <span className="min-w-0 text-base font-medium break-words text-text transition-colors group-hover:text-accent sm:text-lg">
                  {siteConfig.linkedinDisplay}
                </span>
                <ArrowUpRight
                  size={16}
                  className="text-text-dim transition-colors group-hover:text-accent"
                  aria-hidden
                />
              </a>

              <div className={rowClass}>
                <span className="label-mono col-span-2 sm:col-span-1">Location</span>
                <span className="min-w-0 text-base font-medium text-text sm:text-lg">
                  {siteConfig.location}
                </span>
                <span aria-hidden />
              </div>

              {siteConfig.phone ? (
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className={rowClass}
                >
                  <span className="label-mono col-span-2 sm:col-span-1">Phone</span>
                  <span className="min-w-0 text-base font-medium text-text transition-colors group-hover:text-accent sm:text-lg">
                    {siteConfig.phone}
                  </span>
                  <ArrowUpRight
                    size={16}
                    className="text-text-dim transition-colors group-hover:text-accent"
                    aria-hidden
                  />
                </a>
              ) : null}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={160}>
            <form onSubmit={handleSubmit} className="panel p-5 sm:p-8">
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
