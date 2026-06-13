"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { STATS, ABOUT_PARAGRAPHS, FIRM_FOUNDED } from "@/lib/constants";

const ease = [0.22, 1, 0.36, 1] as const;

function useCountUp(end: number, duration = 1800) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  useEffect(() => {
    if (inView && !started) setStarted(true);
  }, [inView, started]);

  useEffect(() => {
    if (!started) return;
    let raf: number;
    let startTime: number | null = null;

    const step = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * end));
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [started, end, duration]);

  return { count, ref };
}

function StatCard({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { count, ref } = useCountUp(value);
  return (
    <div ref={ref} className="text-center sm:text-left">
      <p className="font-serif text-navy text-4xl font-bold leading-none">
        {count}{suffix}
      </p>
      <p className="text-warm-500 text-sm mt-1">{label}</p>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: stacked image collage */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease }}
            className="relative"
          >
            {/* Main image block — Islamabad High Court */}
            <div className="relative rounded-sm overflow-hidden aspect-[4/3] shadow-navy">
              <svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full">
                {/* Sky */}
                <defs>
                  <linearGradient id="skyG" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#1a3a6b"/>
                    <stop offset="100%" stopColor="#2d5fa6"/>
                  </linearGradient>
                  <linearGradient id="groundG" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#0e2444"/>
                    <stop offset="100%" stopColor="#071629"/>
                  </linearGradient>
                </defs>
                <rect width="800" height="600" fill="url(#skyG)"/>
                {/* Subtle clouds */}
                <ellipse cx="150" cy="80" rx="90" ry="22" fill="white" opacity="0.06"/>
                <ellipse cx="600" cy="60" rx="110" ry="18" fill="white" opacity="0.05"/>
                {/* Ground */}
                <rect x="0" y="480" width="800" height="120" fill="url(#groundG)"/>
                {/* Steps */}
                <rect x="50" y="460" width="700" height="20" rx="2" fill="#0a1f44"/>
                <rect x="80" y="445" width="640" height="18" rx="2" fill="#0d2550"/>
                <rect x="110" y="430" width="580" height="17" rx="2" fill="#0f2a5a"/>
                {/* Main building body */}
                <rect x="120" y="200" width="560" height="232" fill="#0d2655"/>
                {/* Central portico / pediment */}
                <polygon points="280,130 520,130 540,200 260,200" fill="#0a1f44"/>
                {/* Pediment detail line */}
                <polygon points="290,138 510,138 528,196 272,196" fill="none" stroke="#C9A961" strokeWidth="1.5" opacity="0.6"/>
                {/* Columns row */}
                {[170,230,290,350,410,470,530,590].map((x, i) => (
                  <g key={i}>
                    <rect x={x} y="200" width="18" height="230" fill="#0a1e44" rx="2"/>
                    {/* Column capital */}
                    <rect x={x-3} y="197" width="24" height="8" fill="#0d2550" rx="1"/>
                    {/* Column base */}
                    <rect x={x-3} y="426" width="24" height="8" fill="#0d2550" rx="1"/>
                  </g>
                ))}
                {/* Central arch / entrance */}
                <path d="M340,430 L340,310 Q400,270 460,310 L460,430 Z" fill="#071629"/>
                <path d="M345,428 L345,315 Q400,278 455,315 L455,428 Z" fill="#050f1e" opacity="0.8"/>
                {/* Arch highlight */}
                <path d="M340,310 Q400,270 460,310" fill="none" stroke="#C9A961" strokeWidth="2" opacity="0.5"/>
                {/* Windows upper floor */}
                {[150,220,290,490,560,630].map((x, i) => (
                  <g key={i}>
                    <rect x={x} y="240" width="40" height="60" rx="2" fill="#071629"/>
                    <rect x={x+2} y="242" width="36" height="56" rx="1" fill="#0a1635" opacity="0.7"/>
                    {/* Window arch top */}
                    <path d={`M${x},260 Q${x+20},242 ${x+40},260`} fill="#071629"/>
                    <line x1={x} y1="270" x2={x+40} y2="270" stroke="#C9A961" strokeWidth="0.5" opacity="0.3"/>
                    <line x1={x+20} y1="242" x2={x+20} y2="300" stroke="#C9A961" strokeWidth="0.5" opacity="0.3"/>
                  </g>
                ))}
                {/* Windows lower floor */}
                {[150,220,490,560].map((x, i) => (
                  <g key={i}>
                    <rect x={x} y="340" width="40" height="70" rx="2" fill="#071629"/>
                    <rect x={x+2} y="342" width="36" height="66" rx="1" fill="#0a1635" opacity="0.6"/>
                    <line x1={x+20} y1="342" x2={x+20} y2="410" stroke="#C9A961" strokeWidth="0.5" opacity="0.3"/>
                    <line x1={x} y1="377" x2={x+40} y2="377" stroke="#C9A961" strokeWidth="0.5" opacity="0.3"/>
                  </g>
                ))}
                {/* Roofline detail */}
                <rect x="120" y="196" width="560" height="8" fill="#0a1f44"/>
                <rect x="115" y="192" width="570" height="6" fill="#C9A961" opacity="0.15"/>
                {/* Flag pole */}
                <rect x="397" y="80" width="6" height="55" fill="#C9A961" opacity="0.7"/>
                {/* Flag */}
                <rect x="403" y="82" width="30" height="18" fill="#C9A961" opacity="0.5"/>
                {/* Stars/lights */}
                {[[200,90],[600,100],[100,120],[680,85]].map(([cx,cy],i)=>(
                  <circle key={i} cx={cx} cy={cy} r="1.5" fill="white" opacity="0.4"/>
                ))}
                {/* Golden overlay at bottom */}
                <rect x="0" y="530" width="800" height="70" fill="#0A1F44" opacity="0.7"/>
              </svg>
              {/* Label overlay */}
              <div className="absolute inset-0 flex items-end p-6">
                <div>
                  <p className="font-serif text-gold text-4xl font-bold opacity-25 leading-none mb-1">§</p>
                  <p className="font-serif text-white text-lg font-semibold">Islamabad High Court</p>
                  <p className="text-warm-400 text-xs">Established legal presence since 1999</p>
                </div>
              </div>
            </div>

            {/* Smaller offset "team" image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35, ease }}
              className="absolute -bottom-8 -right-6 w-48 h-36 rounded-sm overflow-hidden border-4 border-white shadow-card"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gold-dark via-gold to-gold-light" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-navy p-4 text-center">
                <p className="font-serif text-2xl font-bold leading-none">Est.</p>
                <p className="font-serif text-4xl font-bold leading-none">{FIRM_FOUNDED}</p>
              </div>
            </motion.div>

            {/* Decorative corner */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-gold/25 rounded-sm -z-10" />
          </motion.div>

          {/* Right: copy + stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease }}
          >
            <p className="section-label mb-3">About the Firm</p>
            <h2 className="font-serif text-display-md text-navy font-bold mb-2">
              A Legacy Built on
            </h2>
            <h2 className="font-serif text-display-md text-gold font-bold mb-5">
              Results &amp; Trust
            </h2>
            <div className="gold-divider-left" />

            <div className="mt-6 space-y-4">
              {ABOUT_PARAGRAPHS.map((p, i) => (
                <p key={i} className="text-warm-500 leading-relaxed">{p}</p>
              ))}
            </div>

            <div className="mt-8 flex items-start gap-6">
              {[
                "Islamabad High Court advocates",
                "Supreme Court experience",
                "Bilingual counsel (Urdu/English)",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-gold mt-0.5 flex-shrink-0" />
                  <span className="text-navy text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* Stats count-up row */}
            <div className="mt-10 pt-8 border-t border-warm-200 grid grid-cols-2 sm:grid-cols-4 gap-6">
              {STATS.map((s) => (
                <StatCard key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
