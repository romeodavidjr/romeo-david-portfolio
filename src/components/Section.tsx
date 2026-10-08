import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  children: ReactNode;
  className?: string;
  /** Soft ambient teal light behind the section */
  ambient?: "left" | "right";
};

/** Shared section shell: consistent rhythm, max width and hairline divider. */
export default function Section({
  id,
  children,
  className = "",
  ambient,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`relative isolate scroll-mt-20 overflow-x-clip py-14 sm:py-20 lg:py-24 ${className}`}
    >
      {ambient ? (
        <div
          className={ambient === "left" ? "ambient-left" : "ambient-right"}
          aria-hidden
        />
      ) : null}
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="rule-fade mb-10 sm:mb-14" aria-hidden />
        {children}
      </div>
    </section>
  );
}
