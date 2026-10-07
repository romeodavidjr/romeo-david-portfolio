type SectionHeadingProps = {
  id?: string;
  index?: string;
  eyebrow?: string;
  title: string;
  description?: string;
};

/**
 * Editorial section header: mono index + eyebrow on the left,
 * serif display title and supporting line on the right.
 */
export default function SectionHeading({
  index,
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mb-10 grid gap-5 md:mb-14 lg:grid-cols-[minmax(0,15rem)_minmax(0,1fr)] lg:gap-12">
      <div className="flex items-center gap-3 lg:items-start lg:pt-4">
        {index ? (
          <span className="label-mono !text-accent" aria-hidden>
            {index}
          </span>
        ) : null}
        {index && eyebrow ? (
          <span className="h-px w-8 bg-border-strong" aria-hidden />
        ) : null}
        {eyebrow ? <p className="label-mono">{eyebrow}</p> : null}
      </div>
      <div className="max-w-3xl">
        <h2 className="font-display text-[2.4rem] leading-[1.02] text-text sm:text-5xl md:text-[3.5rem]">
          {title}
        </h2>
        {description ? (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-text-muted sm:text-[1.0625rem]">
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}
