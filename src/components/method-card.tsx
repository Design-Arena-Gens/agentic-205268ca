import type { HttpMethod } from "@/lib/http-data";

type MethodCardProps = {
  method: HttpMethod;
};

export function MethodCard({ method }: MethodCardProps) {
  return (
    <div className="flex h-full flex-col gap-3 rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900/70">
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold uppercase tracking-wide text-blue-600">
          {method.name}
        </span>
        <span className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
          {method.safe ? "Safe" : "Unsafe"}
          <span aria-hidden="true">•</span>
          {method.idempotent ? "Idempotent" : "Non-idempotent"}
        </span>
      </div>
      <p className="text-sm text-slate-600 dark:text-slate-300">
        {method.description}
      </p>
      <div className="mt-auto rounded-xl bg-blue-50 p-4 text-xs text-blue-900 dark:bg-blue-950/40 dark:text-blue-200">
        <span className="font-semibold">Typical use:</span> {method.typicalUse}
      </div>
    </div>
  );
}
