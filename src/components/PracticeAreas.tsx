"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  Briefcase, Scale, Shield, Heart, DollarSign, Building2, ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { PRACTICE_AREAS } from "@/lib/constants";

const ICON_MAP: Record<string, LucideIcon> = {
  Briefcase,
  Scale,
  Shield,
  Heart,
  DollarSign,
  Building2,
};

const ease = [0.22, 1, 0.36, 1] as const;

export default function PracticeAreas() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="practice-areas" className="section-padding bg-warm-100">
      <div className="container-max">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="text-center mb-14"
        >
          <p className="section-label mb-3">What We Do</p>
          <h2 className="font-serif text-display-md text-navy font-bold mb-4">Our Practice Areas</h2>
          <div className="gold-divider" />
          <p className="text-warm-500 text-lg max-w-2xl mx-auto mt-5 leading-relaxed">
            Comprehensive legal services delivered by specialists who understand the nuances
            of your matter and the stakes involved.
          </p>
        </motion.div>

        {/* Grid */}
        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {PRACTICE_AREAS.map((area, i) => {
            const Icon = ICON_MAP[area.icon] ?? Briefcase;
            return (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 32 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.08, ease }}
              >
                <Link
                  href={`/practice-areas/${area.slug}`}
                  className="group flex flex-col bg-white rounded-sm p-8 shadow-card border border-warm-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(10,31,68,0.12)] h-full"
                >
                  {/* Icon circle */}
                  <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-gold/20 flex-shrink-0">
                    <Icon size={24} className="text-gold" />
                  </div>

                  {/* Title */}
                  <h3
                    className="font-serif text-navy font-bold mb-3 group-hover:text-navy transition-colors duration-200"
                    style={{ fontSize: "1.375rem", lineHeight: 1.25 }}
                  >
                    {area.title}
                  </h3>

                  {/* Description */}
                  <p className="text-warm-500 text-sm leading-relaxed flex-1 mb-5">
                    {area.shortDesc}
                  </p>

                  {/* Learn more */}
                  <span className="inline-flex items-center gap-1.5 text-gold text-sm font-semibold group-hover:gap-3 transition-all duration-300">
                    Learn more <ArrowRight size={15} />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
