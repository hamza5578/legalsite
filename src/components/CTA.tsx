"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { FIRM_PHONE } from "@/lib/constants";

export default function CTA() {
  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative py-20 bg-hero-gradient overflow-hidden">
      {/* Subtle pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            #C9A961,
            #C9A961 1px,
            transparent 1px,
            transparent 60px
          )`,
        }}
      />

      {/* Gold accent lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gold/30" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gold/30" />

      <div className="container-max px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="section-label mb-4">Don&apos;t Wait</p>
          <h2 className="font-serif text-display-lg text-white font-bold mb-4">
            Your Legal Matter Needs
            <span className="text-gold"> Experienced Counsel</span>
          </h2>
          <p className="text-warm-300 text-lg mb-10">
            Every day counts in legal matters. Contact us today for a confidential,
            no-obligation consultation with one of our attorneys.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollTo("#contact")}
              className="btn-primary text-base justify-center"
            >
              Schedule a Free Consultation
              <ArrowRight size={18} />
            </button>
            <a
              href={`tel:${FIRM_PHONE}`}
              className="btn-outline text-base justify-center"
            >
              <Phone size={17} />
              {FIRM_PHONE}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
