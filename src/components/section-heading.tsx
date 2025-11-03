type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-500">
        {eyebrow}
      </span>
      <h2 className="text-2xl font-semibold text-slate-900 dark:text-white md:text-3xl">
        {title}
      </h2>
      <p className="max-w-3xl text-sm text-slate-600 md:text-base dark:text-slate-300">
        {description}
      </p>
    </div>
  );
}
