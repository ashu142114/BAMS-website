"use client";
import { motion } from "framer-motion";

const bars = [62, 88, 48, 72, 96, 58, 81];

export function EnterpriseDashboard() {
  return (
    <motion.div initial={{ opacity: 0, x: 40, rotateY: -8 }} animate={{ opacity: 1, x: 0, rotateY: 0 }} transition={{ duration: .9 }} className="relative mx-auto w-full max-w-2xl rounded-[2rem] border border-white/80 bg-white/75 p-3 shadow-glow backdrop-blur-2xl">
      <div className="rounded-[1.5rem] border border-slate-100 bg-slate-950/[.02] p-4">
        <div className="mb-4 flex items-center justify-between"><div><p className="text-xs font-semibold text-brand-600">BAMS EXECUTIVE OS</p><h3 className="text-xl font-bold">Live Company Control Room</h3></div><div className="rounded-full bg-mint/15 px-3 py-1 text-xs font-bold text-emerald-700">AI Reading Signals</div></div>
        <div className="grid gap-3 sm:grid-cols-4">
          {["Revenue", "Profit", "Attrition", "Hiring"].map((item, i) => <div key={item} className="rounded-2xl bg-white p-4 shadow-card"><p className="text-xs text-muted">{item}</p><p className="mt-2 text-xl font-black">{["$84.2M", "21.4%", "7.8%", "64"][i]}</p><span className="text-xs font-semibold text-emerald-600">{["▲ 18%", "▲ 3.1%", "▼ 1.2%", "+12 roles"][i]}</span></div>)}
        </div>
        <div className="mt-3 grid gap-3 md:grid-cols-[1.2fr_.8fr]">
          <div className="rounded-2xl bg-white p-4 shadow-card"><p className="mb-3 text-sm font-black">Operating trend</p><div className="flex h-40 items-end gap-3">{bars.map((h,i)=><motion.div key={i} initial={{height:20}} animate={{height:h+"%"}} transition={{duration:.8,delay:i*.08,repeat:Infinity,repeatType:"reverse",repeatDelay:2}} className="flex-1 rounded-t-xl bg-gradient-to-t from-brand-600 to-violet/70" />)}</div></div>
          <div className="space-y-3 rounded-2xl bg-white p-4 shadow-card"><p className="text-sm font-black">AI recommendations</p>{["Open 3 backend roles", "Review overtime variance", "Protect margin on 2 accounts"].map((t,i)=><div key={t} className="flex items-center gap-3"><span className="grid h-8 w-8 place-items-center rounded-xl bg-brand-50 text-sm font-black text-brand-600">{i+1}</span><p className="text-sm font-semibold">{t}</p></div>)}</div>
        </div>
      </div>
      <motion.div animate={{ y: [-8, 8, -8] }} transition={{ duration: 5, repeat: Infinity }} className="absolute -left-8 top-16 hidden rounded-2xl bg-white p-4 shadow-card md:block"><p className="text-xs text-muted">Sales productivity</p><p className="font-black text-amber-600">▼ 6%</p></motion.div>
      <motion.div animate={{ y: [8, -8, 8] }} transition={{ duration: 4, repeat: Infinity }} className="absolute -right-6 bottom-16 hidden rounded-2xl bg-white p-4 shadow-card md:block"><p className="text-xs text-muted">Revenue</p><p className="font-black text-brand-600">▲ 18%</p></motion.div>
    </motion.div>
  );
}
