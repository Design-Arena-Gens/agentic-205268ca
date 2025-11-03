import type { HttpVersion } from "@/lib/http-data";

type VersionCardProps = {
  version: HttpVersion;
};

export function VersionCard({ version }: VersionCardProps) {
  return (
    <article className="flex h-full flex-col gap-4 rounded-2xl border border-slate-200 bg-gradient-to-br from-white via-white to-slate-100 p-6 shadow-sm dark:border-slate-700 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800">
      <div>
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            {version.version}
          </h3>
          <span className="text-xs font-semibold uppercase tracking-widest text-slate-500">
            {version.releaseYear}
          </span>
        </div>
        <p className="text-sm text-slate-600 dark:text-slate-300">
          The key capabilities introduced with this revision.
        </p>
      </div>
      <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-200">
        {version.highlights.map((highlight) => (
          <li
            key={highlight}
            className="flex items-start gap-2 rounded-xl bg-white/70 p-3 text-left shadow-sm dark:bg-slate-800/70"
          >
            <span className="mt-1 h-2 w-2 rounded-full bg-blue-500" />
            <span>{highlight}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
