"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { FIRM_PHONE } from "@/lib/constants";

const ease = [0.22, 1, 0.36, 1] as const;

export default function CTAStrip() {
  return (
    <section className="relative overflow-hidden bg-gold py-16">
      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(10,31,68,1) 1px, transparent 1px), linear-gradient(90deg, rgba(10,31,68,1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
        aria-hidden
      />
      {/* Decorative § */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 font-serif text-[140px] font-bold text-navy/10 leading-none select-none pointer-events-none" aria-hidden>
        §
      </div>

      <div className="container-max relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="flex flex-col md:flex-row items-center justify-between gap-8"
        >
          {/* Text */}
          <div className="text-center md:text-left">
            <h2 className="font-serif text-navy text-3xl sm:text-4xl font-bold leading-tight mb-2">
              Have a legal question?
            </h2>
            <p className="text-navy/70 text-lg font-medium">
              Let&apos;s discuss your case. First consultation is free.
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center gap-4 flex-shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-navy text-white font-semibold px-8 py-4 rounded-sm transition-all duration-300 hover:bg-navy-light hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(10,31,68,0.35)] text-base"
            >
              Book a Consultation
              <ArrowRight size={18} />
            </Link>
            <a
              href={`tel:${FIRM_PHONE}`}
              className="inline-flex items-center gap-2 border-2 border-navy text-navy font-semibold px-8 py-4 rounded-sm transition-all duration-300 hover:bg-navy hover:text-white hover:-translate-y-0.5 text-base"
            >
              <Phone size={16} />
              {FIRM_PHONE}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
