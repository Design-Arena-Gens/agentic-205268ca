import type { LifecycleStep } from "@/lib/http-data";

type LifecycleTimelineProps = {
  steps: LifecycleStep[];
};

export function LifecycleTimeline({ steps }: LifecycleTimelineProps) {
  return (
    <ol className="relative grid gap-8">
      {steps.map((step, index) => (
        <li
          key={step.title}
          className="grid gap-3 rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur dark:border-slate-700 dark:bg-slate-900/70"
        >
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
              {index + 1}
            </span>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              {step.title}
            </h3>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            {step.detail}
          </p>
          <div className="rounded-xl bg-slate-100 p-4 text-xs text-slate-600 dark:bg-slate-800 dark:text-slate-300">
            <span className="font-semibold text-slate-800 dark:text-slate-100">
              Builder tip:
            </span>{" "}
            {step.developerNote}
          </div>
        </li>
      ))}
    </ol>
  );
}
