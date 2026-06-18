import { AIOperatingSystem, CustomerStories, DashboardShowcase, ExecutiveDashboards, FAQ, FinalCTA, IndustrySolutions, Integrations, Pricing, ProblemStory, ProductEcosystem, TrustedCompanies, WhyBams } from "@/components/Sections";
import { Button } from "@/components/ui/Button";
import { EnterpriseDashboard } from "@/components/DashboardMockups";
import { Reveal, ScrollOrb } from "@/components/Motion";

export default function Home() {
  return (
    <main className="noise relative overflow-hidden">
      <ScrollOrb />
      <section className="relative bg-[radial-gradient(circle_at_20%_20%,#d9edff,transparent_28%),radial-gradient(circle_at_80%_10%,rgba(139,92,246,.20),transparent_24%)] px-6 pb-24 pt-36 md:pt-44">
        <div className="absolute inset-0 bg-grid bg-[length:44px_44px] opacity-60" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[.9fr_1.1fr]">
          <Reveal><div className="mb-5 inline-flex rounded-full border border-brand-100 bg-white/70 px-4 py-2 text-sm font-bold text-brand-700 shadow-card">AI Powered Company Operating System</div><h1 className="gradient-text text-5xl font-black tracking-[-.05em] md:text-7xl">Run Your Entire Company From One Operating System</h1><p className="mt-6 max-w-2xl text-xl leading-9 text-muted">HR, Payroll, Recruitment, CRM, Learning, Collaboration and AI — unified into a single operating system.</p><div className="mt-8 flex flex-col gap-3 sm:flex-row"><Button href="/book-demo">Book Demo</Button><Button variant="secondary" href="/signup?plan=starter">Start Free Trial</Button></div></Reveal>
          <EnterpriseDashboard />
        </div>
      </section>
      <TrustedCompanies />
      <ProblemStory />
      <WhyBams />
      <AIOperatingSystem />
      <ProductEcosystem />
      <DashboardShowcase />
      <ExecutiveDashboards />
      <IndustrySolutions />
      <Integrations />
      <Pricing />
      <CustomerStories />
      <FAQ />
      <FinalCTA />
    </main>
  );
}
