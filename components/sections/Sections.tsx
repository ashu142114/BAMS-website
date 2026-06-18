import { MotionDiv, Reveal } from "@/components/Motion";
import { aiCopilots, executiveDashboards, faqs, industries, integrations, modules } from "@/lib/site-data";
import { SectionHeader } from "./SectionHeader";

export function TrustSection() {
  return <section className="px-6 py-20"><Reveal className="mx-auto max-w-7xl"><p className="text-center text-sm font-bold uppercase tracking-[.2em] text-muted">Trusted by operating teams scaling globally</p><div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-6">{["Aster", "Northstar", "Helio", "Vertex", "Kinetic", "Mosaic"].map((l) => <div className="glass rounded-2xl py-6 text-center text-xl font-black text-slate-500" key={l}>{l}</div>)}</div><div className="mt-8 grid gap-4 md:grid-cols-3">{[["42%", "faster HR resolution"], ["3.8x", "recruiting throughput"], ["99.9%", "workflow uptime"]].map((s) => <div key={s[0]} className="rounded-3xl bg-ink p-8 text-white"><b className="text-4xl">{s[0]}</b><p className="mt-2 text-white/65">{s[1]}</p></div>)}</div></Reveal></section>;
}

export function ProblemSection() {
  return <section className="px-6 py-24"><SectionHeader eyebrow="The fragmentation tax" title="Companies do not fail from lack of tools. They fail from disconnected work." text="BAMS replaces scattered approvals, duplicate records, hidden documents, manual payroll checks and leadership guesswork with one intelligent operating layer." /><div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">{["Data trapped in silos", "Manual approvals everywhere", "Leaders see lagging reports"].map((p, i) => <Reveal delay={i * .08} key={p} className="card-hover rounded-[2rem] border border-slate-100 bg-white p-8 shadow-card"><span className="text-4xl">{["🧩", "⏳", "📉"][i]}</span><h3 className="mt-6 text-2xl font-black">{p}</h3><p className="mt-3 text-muted">Teams lose context switching between HR, finance, sales and service systems.</p></Reveal>)}</div></section>;
}

export function OperatingSystemSection() {
  return <section id="platform" className="px-6 py-24"><SectionHeader eyebrow="Operating system visual" title="One AI architecture for every business function." text="A permission-aware intelligence fabric connects people, workflows, documents and decisions across the company." /><Reveal className="mx-auto max-w-6xl rounded-[2.5rem] bg-gradient-to-br from-white to-brand-50 p-6 shadow-glow"><div className="grid gap-4 md:grid-cols-4">{aiCopilots.map((a, i) => <MotionDiv whileHover={{ scale: 1.04 }} key={a.title} className="rounded-3xl bg-white p-6 shadow-card"><p className="text-sm font-black text-brand-600">0{i + 1}</p><h3 className="mt-8 text-2xl font-black">{a.title}</h3><p className="mt-3 text-sm text-muted">{a.copy}</p></MotionDiv>)}</div><div className="mt-5 rounded-3xl bg-ink p-8 text-center text-white"><p className="text-sm uppercase tracking-[.25em] text-white/50">Unified company graph</p><h3 className="mt-3 text-4xl font-black">People + Money + Customers + Knowledge</h3></div></Reveal></section>;
}

export function ModulesSection() {
  return <section id="modules" className="px-6 py-24"><SectionHeader eyebrow="Complete suite" title="Every module feels native because every module shares the same brain." text="Launch with one workflow or transform the entire back office, from hire to retire and lead to cash." /><div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">{modules.map((m, i) => <Reveal delay={(i % 4) * .05} key={m} className="card-hover rounded-3xl border border-slate-100 bg-white p-6 shadow-card"><div className="mb-10 h-12 w-12 rounded-2xl bg-gradient-to-br from-brand-100 to-violet/20" /><h3 className="text-xl font-black">{m}</h3><p className="mt-2 text-sm text-muted">Automated workflows, approvals, analytics and AI guidance.</p></Reveal>)}</div></section>;
}

export function ExecutiveSection() {
  return <section className="px-6 py-24"><SectionHeader eyebrow="Executive dashboards" title="Board-ready clarity for every leader." text="Personalized command centers for strategic, financial, operational and people decisions." /><div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2">{executiveDashboards.map((e, i) => <Reveal delay={i * .06} key={e} className="card-hover rounded-[2rem] bg-white p-7 shadow-card"><p className="font-black text-brand-600">{e} Dashboard</p><div className="mt-5 h-48 rounded-3xl bg-gradient-to-br from-slate-50 via-brand-50 to-white p-5"><div className="h-24 rounded-2xl bg-white shadow-card" /><div className="mt-4 grid grid-cols-3 gap-3"><span className="h-10 rounded-xl bg-brand-100" /><span className="h-10 rounded-xl bg-violet/20" /><span className="h-10 rounded-xl bg-mint/20" /></div></div></Reveal>)}</div></section>;
}

export function IndustrySection() {
  return <section className="px-6 py-24"><SectionHeader eyebrow="Industries" title="Purpose-built for complex operating models." text="Configurable templates make BAMS fit regulated, distributed and high-growth environments." /><div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-3">{industries.map((x) => <div key={x} className="glass card-hover rounded-3xl p-7 text-2xl font-black">{x}</div>)}</div></section>;
}

export function IntegrationsSection() {
  return <section className="px-6 py-24"><SectionHeader eyebrow="Integrations" title="Connect the systems your teams already trust." text="BAMS becomes the intelligent control plane across productivity, accounting, payments and messaging." /><div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-4">{integrations.map((x) => <span key={x} className="rounded-full border border-slate-200 bg-white px-6 py-4 font-black shadow-card">{x}</span>)}</div></section>;
}

export function PricingSection() {
  return <section id="pricing" className="px-6 py-24"><SectionHeader eyebrow="Pricing" title="Start focused. Scale into the full operating system." text="Transparent packages for teams modernizing operations, with enterprise controls when you need them." /><div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">{["Starter", "Growth", "Enterprise"].map((p, i) => <Reveal delay={i * .08} key={p} className={`card-hover rounded-[2rem] p-8 shadow-card ${i === 1 ? "bg-ink text-white" : "bg-white"}`}><h3 className="text-2xl font-black">{p}</h3><p className="mt-6 text-5xl font-black">{i === 2 ? "Custom" : ["$9", "$19"][i]}</p><p className={`mt-3 ${i === 1 ? "text-white/60" : "text-muted"}`}>per employee / month</p><button className={`mt-8 w-full rounded-full py-4 font-black ${i === 1 ? "bg-white text-ink" : "bg-brand-600 text-white"}`}>Choose {p}</button></Reveal>)}</div></section>;
}

export function TestimonialsSection() {
  return <section className="px-6 py-24"><SectionHeader eyebrow="Customers" title="Operators finally get one source of truth." text="High-growth companies use BAMS to make work visible, measurable and intelligently automated." /><div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">{["BAMS turned our HR, finance and sales reviews into one weekly operating ritual.", "The AI copilot saves managers hours every week and keeps approvals moving.", "It feels like Linear for company operations: fast, elegant and deeply connected."].map((q, i) => <div key={q} className="rounded-3xl bg-white p-8 shadow-card"><p className="text-lg leading-8">“{q}”</p><p className="mt-6 font-black">{["Maya Rao", "Ethan Cole", "Sara Lin"][i]}</p><p className="text-sm text-muted">COO, demo customer</p></div>)}</div></section>;
}

export function FaqSection() {
  return <section className="px-6 py-24"><SectionHeader eyebrow="FAQ" title="Questions before your operating system upgrade?" text="Everything you need to know for a confident pilot." /><div className="mx-auto max-w-4xl space-y-4">{faqs.map((f) => <details key={f} className="rounded-3xl bg-white p-6 shadow-card"><summary className="cursor-pointer text-lg font-black">{f}</summary><p className="mt-4 text-muted">Yes. BAMS is modular, configurable and designed around secure roles, data boundaries and enterprise implementation paths.</p></details>)}</div></section>;
}

export function FinalCta() {
  return <section id="demo" className="px-6 py-24"><Reveal className="mx-auto max-w-6xl rounded-[3rem] bg-gradient-to-br from-ink to-brand-700 p-10 text-center text-white shadow-glow md:p-20"><p className="font-black uppercase tracking-[.25em] text-white/50">Final CTA</p><h2 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">Build a company that runs itself smarter every day.</h2><p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">Book a demo and experience the AI powered operating system for modern enterprises.</p><a className="mt-9 inline-flex rounded-full bg-white px-8 py-4 font-black text-ink" href="mailto:demo@bams.ai">Book Demo</a></Reveal></section>;
}
