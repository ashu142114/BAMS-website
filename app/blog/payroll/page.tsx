import type { Metadata } from "next";
import { BlogGrid, FinalCTA, PageHero } from "@/components/Sections";

export const metadata: Metadata = { title: "Payroll Blog", description: "BAMS insights for Payroll." };

export default function Page() {
  return <main className="noise overflow-hidden"><PageHero eyebrow="BAMS Blog" title="Payroll operating insights" text="Practical guidance for modern teams improving payroll with connected workflows and AI." /><BlogGrid /><FinalCTA /></main>;
}
