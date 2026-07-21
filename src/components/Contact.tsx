"use client";

import { FormEvent, useState } from "react";
import {
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  CheckCircle2,
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

  const contactCardClass =
    "card-surface flex items-start gap-4 p-4 sm:p-5";

  return (
    <section
      id="contact"
      className="scroll-mt-20 border-t border-border/80 bg-bg-elevated/50 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Contact"
            title="Let's connect"
            description="Open to opportunities, collaborations, and technical discussions."
          />
        </ScrollReveal>

        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:gap-10">
          <ScrollReveal delay={80}>
            <div className="space-y-3.5">
              <a
                href={`mailto:${siteConfig.email}`}
                className={contactCardClass}
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-dim text-accent ring-1 ring-accent/25">
                  <Mail size={19} />
                </div>
                <div>
                  <p className="text-sm font-medium text-text-dim">Email</p>
                  <p className="mt-0.5 text-base font-semibold text-text break-all">
                    {siteConfig.email}
                  </p>
                </div>
              </a>

              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={contactCardClass}
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-blue-dim text-accent-blue ring-1 ring-accent-blue/25">
                  <Linkedin size={19} />
                </div>
                <div>
                  <p className="text-sm font-medium text-text-dim">LinkedIn</p>
                  <p className="mt-0.5 text-base font-semibold text-text">
                    {siteConfig.linkedinDisplay}
                  </p>
                </div>
              </a>

              <div className={`${contactCardClass} hover:transform-none`}>
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-dim text-accent ring-1 ring-accent/25">
                  <MapPin size={19} />
                </div>
                <div>
                  <p className="text-sm font-medium text-text-dim">Location</p>
                  <p className="mt-0.5 text-base font-semibold text-text">
                    {siteConfig.location}
                  </p>
                </div>
              </div>

              {siteConfig.phone ? (
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className={contactCardClass}
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-blue-dim text-accent-blue ring-1 ring-accent-blue/25">
                    <Phone size={19} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-text-dim">Phone</p>
                    <p className="mt-0.5 text-base font-semibold text-text">
                      {siteConfig.phone}
                    </p>
                  </div>
                </a>
              ) : null}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={160}>
            <form
              onSubmit={handleSubmit}
              className="card-surface-static p-5 sm:p-7"
            >
              <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
                <div className="sm:col-span-1">
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-sm font-medium text-text-muted"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Your name"
                    className="w-full rounded-xl border border-border bg-bg px-4 py-2.5 text-sm text-text placeholder:text-text-dim outline-none transition duration-300 focus:border-accent/50 focus:ring-2 focus:ring-accent/20"
                  />
                </div>
                <div className="sm:col-span-1">
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-sm font-medium text-text-muted"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-border bg-bg px-4 py-2.5 text-sm text-text placeholder:text-text-dim outline-none transition duration-300 focus:border-accent/50 focus:ring-2 focus:ring-accent/20"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-sm font-medium text-text-muted"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="How can I help you?"
                    className="w-full resize-y rounded-xl border border-border bg-bg px-4 py-2.5 text-sm text-text placeholder:text-text-dim outline-none transition duration-300 focus:border-accent/50 focus:ring-2 focus:ring-accent/20"
                  />
                </div>
              </div>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <button type="submit" className="btn btn-primary">
                  <Send size={16} />
                  Send Message
                </button>
                {status === "sent" && (
                  <p className="inline-flex items-center gap-2 text-sm text-accent">
                    <CheckCircle2 size={16} />
                    Opening your email client…
                  </p>
                )}
              </div>
              <p className="mt-3.5 text-xs text-text-dim">
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
