type SectionHeadingProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mb-9 max-w-2xl md:mb-11">
      {eyebrow && (
        <p className="mb-2.5 text-xs font-semibold tracking-[0.18em] text-accent uppercase sm:text-sm">
          {eyebrow}
        </p>
      )}
      <h2 className="text-[1.65rem] font-bold tracking-tight text-text sm:text-3xl md:text-[2.1rem]">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-[0.95rem] leading-relaxed text-text-muted sm:text-base">
          {description}
        </p>
      )}
      <div className="mt-4 h-[3px] w-14 rounded-full bg-gradient-to-r from-accent to-accent-blue" />
    </div>
  );
}
