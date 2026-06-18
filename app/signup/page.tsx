import type { Metadata } from "next";
import { FAQ, FinalCTA, PageHero, Pricing } from "@/components/Sections";

export const metadata: Metadata = { title: "Signup", description: "Start your BAMS trial." };

export default function Page() {
  return <main className="noise overflow-hidden"><PageHero eyebrow="Start BAMS" title="Start your operating system rollout" text="Create a pilot workspace for HR, payroll, recruitment, CRM, learning, collaboration and AI." primary="Start Free Trial" href="/contact?intent=signup" /><Pricing /><FAQ /><FinalCTA /></main>;
}
