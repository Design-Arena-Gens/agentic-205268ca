import { SectionHeading } from "@/components/section-heading";
import { LifecycleTimeline } from "@/components/lifecycle-timeline";
import { MethodCard } from "@/components/method-card";
import { StatusCategoryCard } from "@/components/status-category-card";
import { VersionCard } from "@/components/version-card";
import {
  cachingStrategies,
  headerHighlights,
  httpMethods,
  httpVersions,
  lifecycle,
  statusCategories,
  securityPractices,
} from "@/lib/http-data";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-950 text-white">
      <main className="flex flex-1 flex-col">
        <section className="relative isolate overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 px-6 py-24 sm:px-12 md:px-16">
          <div className="mx-auto flex max-w-5xl flex-col gap-10">
            <div className="space-y-6">
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-blue-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-blue-200">
                HTTP
              </span>
              <h1 className="text-balance text-4xl font-bold tracking-tight md:text-6xl">
                Hypertext Transfer Protocol demystified for modern builders
              </h1>
              <p className="max-w-3xl text-lg text-blue-100/80 md:text-xl">
                HTTP is the application-layer protocol of the web. Every site,
                API, and microservice you build rides on top of it. This
                interactive guide gives you the mental model, vocabulary, and
                operational insight you need to design reliable, secure HTTP
                systems.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl bg-white/10 p-4 text-sm backdrop-blur">
                <p className="font-semibold text-white">Request → Response</p>
                <p className="mt-1 text-blue-100/80">
                  Stateless exchanges over persistent or ephemeral connections.
                </p>
              </div>
              <div className="rounded-2xl bg-white/10 p-4 text-sm backdrop-blur">
                <p className="font-semibold text-white">Method semantics</p>
                <p className="mt-1 text-blue-100/80">
                  Safe, idempotent, and cache-aware operations.
                </p>
              </div>
              <div className="rounded-2xl bg-white/10 p-4 text-sm backdrop-blur">
                <p className="font-semibold text-white">Transport evolution</p>
                <p className="mt-1 text-blue-100/80">
                  From HTTP/1.1 to HTTP/3 riding on QUIC.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 px-6 py-24 text-slate-900 dark:bg-slate-950 dark:text-white sm:px-12 md:px-16">
          <div className="mx-auto flex max-w-5xl flex-col gap-12">
            <SectionHeading
              eyebrow="Mental model"
              title="What happens when you load a page?"
              description="HTTP is stateless: every request is independent, yet the combination of DNS, transport, headers, and payloads creates the illusion of a continuous session. Follow the lifecycle from your browser’s address bar to the server’s response."
            />
            <LifecycleTimeline steps={lifecycle} />
          </div>
        </section>

        <section className="bg-white px-6 py-24 text-slate-900 dark:bg-slate-900 dark:text-white sm:px-12 md:px-16">
          <div className="mx-auto flex max-w-6xl flex-col gap-12">
            <SectionHeading
              eyebrow="Semantics"
              title="HTTP methods communicate intent"
              description="Each verb signals how the server should treat the target resource. Leverage the concepts of safety and idempotence to design resilient APIs and caching layers."
            />
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {httpMethods.map((method) => (
                <MethodCard key={method.name} method={method} />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-50 px-6 py-24 text-slate-900 dark:bg-slate-950 dark:text-white sm:px-12 md:px-16">
          <div className="mx-auto flex max-w-6xl flex-col gap-12">
            <SectionHeading
              eyebrow="Feedback loop"
              title="Status codes describe the outcome"
              description="The status line pairs a numeric code with a textual phrase to capture success, redirection, client issues, or server faults. Downstream clients can automate retry, fallback, or logging strategies based on the category."
            />
            <div className="grid gap-6 lg:grid-cols-2">
              {statusCategories.map((category) => (
                <StatusCategoryCard key={category.name} category={category} />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-24 text-slate-900 dark:bg-slate-900 dark:text-white sm:px-12 md:px-16">
          <div className="mx-auto flex max-w-6xl flex-col gap-12">
            <SectionHeading
              eyebrow="Protocol versions"
              title="How HTTP evolved to keep up with the web"
              description="Performance and reliability improvements arrive through iterative protocol versions layered on top of new transport innovations. Understanding the differences helps you configure servers, CDNs, and browsers for optimal delivery."
            />
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {httpVersions.map((version) => (
                <VersionCard key={version.version} version={version} />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-50 px-6 py-24 text-slate-900 dark:bg-slate-950 dark:text-white sm:px-12 md:px-16">
          <div className="mx-auto flex max-w-5xl flex-col gap-12">
            <SectionHeading
              eyebrow="Headers"
              title="Headers are control planes for behavior"
              description="Metadata in headers controls content negotiation, security policies, caching, and authentication. Treat them as knobs you can tune for performance and safety."
            />
            <div className="grid gap-6 md:grid-cols-2">
              {headerHighlights.map((header) => (
                <div
                  key={header.header}
                  className="rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900/70"
                >
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    {header.header}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                    {header.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-24 text-slate-900 dark:bg-slate-900 dark:text-white sm:px-12 md:px-16">
          <div className="mx-auto flex max-w-5xl flex-col gap-12">
            <SectionHeading
              eyebrow="Security"
              title="Secure HTTP in hostile networks"
              description="Transport encryption, token management, and browser controls reduce attack surface. Combine multiple layers for defense-in-depth."
            />
            <div className="grid gap-6 md:grid-cols-2">
              {securityPractices.map((practice) => (
                <div
                  key={practice.title}
                  className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 p-6 text-white shadow-md dark:border-slate-700"
                >
                  <h3 className="text-lg font-semibold">{practice.title}</h3>
                  <p className="mt-2 text-sm text-slate-100/90">
                    {practice.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-950 px-6 py-24 text-white sm:px-12 md:px-16">
          <div className="mx-auto flex max-w-5xl flex-col gap-12">
            <SectionHeading
              eyebrow="Performance"
              title="Caching strategies amplify efficiency"
              description="Caching reduces latency and vehicle load by reusing responses when possible. Make freshness guarantees explicit and revalidate when uncertain."
            />
            <div className="grid gap-6 md:grid-cols-2">
              {cachingStrategies.map((strategy) => (
                <div
                  key={strategy.title}
                  className="rounded-2xl border border-blue-500/40 bg-blue-500/10 p-6 shadow-md backdrop-blur"
                >
                  <h3 className="text-lg font-semibold text-white">
                    {strategy.title}
                  </h3>
                  <p className="mt-2 text-sm text-blue-100/80">
                    {strategy.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
