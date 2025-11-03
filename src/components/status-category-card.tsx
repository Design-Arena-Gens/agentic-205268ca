import type { StatusCategory } from "@/lib/http-data";

type StatusCategoryCardProps = {
  category: StatusCategory;
};

export function StatusCategoryCard({ category }: StatusCategoryCardProps) {
  return (
    <div className="flex h-full flex-col gap-4 rounded-2xl border border-emerald-200 bg-emerald-50/70 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-emerald-800 dark:bg-emerald-900/50">
      <div>
        <h3 className="text-lg font-semibold text-emerald-900 dark:text-emerald-200">
          {category.name}
        </h3>
        <p className="mt-1 text-sm text-emerald-800/80 dark:text-emerald-200/80">
          {category.description}
        </p>
      </div>
      <ul className="space-y-3 text-sm">
        {category.codes.map((code) => (
          <li
            key={code.code}
            className="rounded-xl bg-white/80 p-3 shadow-sm dark:bg-emerald-950/60"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-widest text-emerald-500">
                {code.code}
              </span>
              <span className="text-sm font-medium text-emerald-900 dark:text-emerald-100">
                {code.label}
              </span>
            </div>
            <p className="mt-1 text-xs text-emerald-800/80 dark:text-emerald-200/70">
              {code.detail}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
