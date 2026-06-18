import { ScrollOrb } from "@/components/Motion";
import { Hero } from "@/components/sections/Hero";
import {
  AiOperatingSystemSection,
  ExecutiveSection,
  FaqSection,
  FinalCta,
  IndustrySection,
  IntegrationsSection,
  OutcomesSection,
  PlatformSection,
  PricingSection,
  ProblemSection,
  ProductEcosystemSection,
  TrustSection
} from "@/components/sections/Sections";

export default function Home() {
  return (
    <main className="noise relative overflow-hidden">
      <ScrollOrb />
      <nav className="fixed left-1/2 top-4 z-50 w-[calc(100%-2rem)] max-w-6xl -translate-x-1/2 rounded-full border border-white/80 bg-white/75 px-4 py-3 shadow-card backdrop-blur-2xl">
        <div className="flex items-center justify-between">
          <a className="flex items-center gap-2 font-black" href="#"><span className="grid h-9 w-9 place-items-center rounded-full bg-ink text-white">B</span>BAMS</a>
          <div className="hidden gap-7 text-sm font-semibold text-slate-600 md:flex"><a href="#platform">Platform</a><a href="#modules">Modules</a><a href="#pricing">Pricing</a></div>
          <div className="flex items-center gap-2"><a className="hidden rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-ink shadow-card sm:inline-flex" href="#tour">Product Tour</a><a className="rounded-full bg-ink px-5 py-2 text-sm font-bold text-white shadow-card" href="#demo">Book Demo</a></div>
        </div>
      </nav>
      <Hero />
      <TrustSection />
      <ProblemSection />
      <PlatformSection />
      <AiOperatingSystemSection />
      <ProductEcosystemSection />
      <ExecutiveSection />
      <IndustrySection />
      <IntegrationsSection />
      <OutcomesSection />
      <PricingSection />
      <FaqSection />
      <FinalCta />
    </main>
  );
}
