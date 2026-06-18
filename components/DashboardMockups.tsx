"use client";
import { motion } from "framer-motion";

const bars = [62, 88, 48, 72, 96, 58, 81];

export function EnterpriseDashboard() {
  return (
    <motion.div initial={{ opacity: 0, x: 40, rotateY: -8 }} animate={{ opacity: 1, x: 0, rotateY: 0 }} transition={{ duration: .9 }} className="relative mx-auto w-full max-w-2xl rounded-[2rem] border border-white/80 bg-white/75 p-3 shadow-glow backdrop-blur-2xl">
      <div className="rounded-[1.5rem] border border-slate-100 bg-slate-950/[.02] p-4">
        <div className="mb-4 flex items-center justify-between"><div><p className="text-xs font-semibold text-brand-600">BAMS COMMAND CENTER</p><h3 className="text-xl font-bold">Enterprise Pulse</h3></div><div className="rounded-full bg-mint/15 px-3 py-1 text-xs font-bold text-emerald-700">AI Live</div></div>
        <div className="grid gap-3 sm:grid-cols-3">
          {["Revenue", "Headcount", "Tasks"].map((item, i) => <div key={item} className="rounded-2xl bg-white p-4 shadow-card"><p className="text-xs text-muted">{item}</p><p className="mt-2 text-2xl font-black">{["$8.4M", "2,418", "91%"][i]}</p><span className="text-xs font-semibold text-emerald-600">▲ {[12,8,23][i]}%</span></div>)}
        </div>
        <div className="mt-3 grid gap-3 md:grid-cols-[1.2fr_.8fr]">
          <div className="rounded-2xl bg-white p-4 shadow-card"><div className="flex h-40 items-end gap-3">{bars.map((h,i)=><motion.div key={i} initial={{height:20}} animate={{height:h+"%"}} transition={{duration:.8,delay:i*.08,repeat:Infinity,repeatType:"reverse",repeatDelay:2}} className="flex-1 rounded-t-xl bg-gradient-to-t from-brand-600 to-violet/70" />)}</div></div>
          <div className="space-y-3 rounded-2xl bg-white p-4 shadow-card">{["Payroll anomaly resolved", "12 candidates ranked", "CEO brief generated"].map((t,i)=><div key={t} className="flex items-center gap-3"><span className="grid h-8 w-8 place-items-center rounded-xl bg-brand-50 text-sm font-black text-brand-600">{i+1}</span><p className="text-sm font-semibold">{t}</p></div>)}</div>
        </div>
      </div>
      <motion.div animate={{ y: [-8, 8, -8] }} transition={{ duration: 5, repeat: Infinity }} className="absolute -left-8 top-16 hidden rounded-2xl bg-white p-4 shadow-card md:block"><p className="text-xs text-muted">AI Forecast</p><p className="font-black text-brand-600">+18% capacity</p></motion.div>
      <motion.div animate={{ y: [8, -8, 8] }} transition={{ duration: 4, repeat: Infinity }} className="absolute -right-6 bottom-16 hidden rounded-2xl bg-white p-4 shadow-card md:block"><p className="text-xs text-muted">Risk</p><p className="font-black text-amber-600">Low attrition</p></motion.div>
    </motion.div>
  );
}
