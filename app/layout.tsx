import type { Metadata } from "next";
import { MotionProvider } from "@/components/MotionProvider";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { faqs } from "@/data/site";
import "./globals.css";

const baseUrl = "https://bams.ai";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "BAMS | AI Powered Company Operating System",
    template: "%s | BAMS"
  },
  description: "Run HR, Payroll, Recruitment, CRM, Learning, Collaboration and AI from one company operating system.",
  openGraph: {
    title: "BAMS | AI Powered Company Operating System",
    description: "Unify HR, Payroll, Recruitment, CRM, Learning, Collaboration and AI.",
    url: baseUrl,
    siteName: "BAMS",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "BAMS | AI Powered Company Operating System",
    description: "The AI Powered Company Operating System for modern enterprises."
  }
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "BAMS",
  url: baseUrl,
  description: "AI Powered Company Operating System",
  sameAs: ["https://www.linkedin.com/company/bams-ai"]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(([name, text]) => ({ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text } }))
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <MotionProvider>
          <SiteHeader />
          {children}
          <SiteFooter />
        </MotionProvider>
      </body>
    </html>
  );
}
