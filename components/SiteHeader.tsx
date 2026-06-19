import { navItems } from "@/data/site";
import { Button } from "@/components/ui/Button";

export function SiteHeader() {
  return <header className="fixed left-1/2 top-4 z-50 w-[calc(100%-2rem)] max-w-7xl -translate-x-1/2 rounded-full border border-white/80 bg-white/80 px-4 py-3 shadow-card backdrop-blur-2xl"><nav className="flex items-center justify-between"><a className="flex items-center gap-2 font-black" href="/"><span className="grid h-9 w-9 place-items-center rounded-full bg-ink text-white">B</span>BAMS</a><div className="hidden gap-6 text-sm font-semibold text-slate-600 lg:flex">{navItems.map((item)=><a className="hover:text-ink" href={item.href} key={item.href}>{item.label}</a>)}</div><div className="flex gap-2"><a className="hidden rounded-full px-4 py-2 text-sm font-bold text-slate-600 sm:block" href="/contact">Contact</a><Button href="/book-demo" variant="dark" className="px-5 py-2">Book Demo</Button></div></nav></header>;
}
