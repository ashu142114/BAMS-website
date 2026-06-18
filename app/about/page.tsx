import type { Metadata } from "next";
import { WhyBams, TrustedCompanies, FinalCTA } from "@/components/Sections";
import { PageHero } from "@/components/Sections";

export const metadata: Metadata = { title: "About", description: "BAMS is building the AI powered company operating system." };

export default function Page() {
  return <main className="noise overflow-hidden"><PageHero eyebrow="BAMS About" title="About" text="BAMS is building the AI powered company operating system." />
      <WhyBams />
      <TrustedCompanies />
      <FinalCTA />
    </main>;
}
