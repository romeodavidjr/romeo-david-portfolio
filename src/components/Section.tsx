import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  children: ReactNode;
  className?: string;
};

/** Shared section shell: consistent rhythm, max width and hairline divider. */
export default function Section({ id, children, className = "" }: SectionProps) {
  return (
    <section
      id={id}
      className={`relative scroll-mt-20 py-14 sm:py-20 lg:py-24 ${className}`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="rule-fade mb-10 sm:mb-14" aria-hidden />
        {children}
      </div>
    </section>
  );
}
