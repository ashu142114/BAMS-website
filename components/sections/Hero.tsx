import { EnterpriseDashboard } from "@/components/DashboardMockups";
import { Reveal } from "@/components/Motion";

export function Hero() {
  return (
    <section className="relative bg-[radial-gradient(circle_at_18%_18%,#d9edff,transparent_28%),radial-gradient(circle_at_80%_8%,rgba(139,92,246,.20),transparent_24%),linear-gradient(180deg,#ffffff_0%,#f7f9fc_100%)] px-6 pb-24 pt-36 md:pt-44">
      <div className="absolute inset-0 bg-grid bg-[length:44px_44px] opacity-60" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[.86fr_1.14fr]">
        <Reveal>
          <div className="mb-5 inline-flex rounded-full border border-brand-100 bg-white/70 px-4 py-2 text-sm font-bold text-brand-700 shadow-card">
            Enterprise Workforce Operating System
          </div>
          <h1 className="gradient-text text-5xl font-black tracking-[-.055em] md:text-7xl">
            Run Your Entire Company From One Operating System.
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-9 text-muted">
            BAMS unifies workforce management, payroll, recruitment, collaboration, analytics, and AI into a single operating platform.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a className="rounded-full bg-brand-600 px-7 py-4 text-center font-black text-white shadow-glow" href="#demo">Book Demo</a>
            <a className="rounded-full border border-slate-200 bg-white px-7 py-4 text-center font-black text-ink shadow-card" href="#tour">Watch Product Tour</a>
          </div>
          <p className="mt-5 text-sm font-semibold text-slate-500">Built for leaders who need one view of people, money, customers, and execution.</p>
        </Reveal>
        <EnterpriseDashboard />
      </div>
    </section>
  );
}
