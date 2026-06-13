"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
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
              <Image
                src="/images/isb-high-court.jpg"
                alt="Islamabad High Court"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Gradient overlay at bottom for label readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
              {/* Label */}
              <div className="absolute bottom-0 inset-x-0 p-6">
                <p className="font-serif text-white text-lg font-semibold leading-none">
                  Islamabad High Court
                </p>
                <p className="text-warm-300 text-xs mt-1">Where we practice — IHC, Islamabad</p>
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
