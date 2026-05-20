"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const seq = (i: number) => ({
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, delay: 0.2 + i * 0.18, ease },
  },
});

export default function Hero() {
  const scrollDown = () =>
    document.getElementById("practice-areas")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      className="relative w-full min-h-[85vh] flex flex-col items-center justify-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero.svg')" }}
        aria-hidden
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-navy/70" aria-hidden />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(10,31,68,0.95) 0%, rgba(10,31,68,0.4) 50%, rgba(10,31,68,0.6) 100%)",
        }}
        aria-hidden
      />
      {/* Left-edge gold accent */}
      <div
        className="absolute left-0 top-1/4 w-1 h-56 bg-gold-gradient opacity-70"
        aria-hidden
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center pt-24 pb-20">

        {/* Eyebrow */}
        <motion.div
          variants={seq(0)}
          initial="hidden"
          animate="visible"
          className="flex items-center gap-3 mb-8"
        >
          <span className="h-px w-10 bg-gold" />
          <span className="section-label">New York &middot; Est. 1987</span>
          <span className="h-px w-10 bg-gold" />
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={seq(1)}
          initial="hidden"
          animate="visible"
          className="font-serif font-bold text-white text-balance mb-6"
          style={{ fontSize: "clamp(2.5rem, 5.5vw, 4rem)", lineHeight: 1.08, letterSpacing: "-0.02em" }}
        >
          Trusted Legal Counsel.
          <br />
          <span className="text-gold">Proven Results.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={seq(2)}
          initial="hidden"
          animate="visible"
          className="text-warm-200 leading-relaxed mb-10 max-w-2xl"
          style={{ fontSize: "1.125rem" }}
        >
          For over 25 years, Shafi Law Associates has delivered unwavering
          legal representation to corporations, institutions, and individuals
          who demand excellence when the stakes are highest.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={seq(3)}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <button
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
            className="btn-primary text-base px-9 py-4"
          >
            Book a Consultation
            <ArrowRight size={18} />
          </button>
          <button
            onClick={() =>
              document.getElementById("practice-areas")?.scrollIntoView({ behavior: "smooth" })
            }
            className="btn-outline text-base px-9 py-4"
          >
            Our Practice Areas
          </button>
        </motion.div>

        {/* Trust micro-bar */}
        <motion.div
          variants={seq(4)}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap justify-center items-center gap-6 mt-14"
        >
          {[
            "Chambers USA Ranked",
            "Super Lawyers Recognized",
            "37+ Years of Excellence",
            "2,400+ Matters Resolved",
          ].map((badge) => (
            <span
              key={badge}
              className="flex items-center gap-2 text-warm-400 text-xs tracking-wide"
            >
              <span className="w-1 h-1 rounded-full bg-gold inline-block flex-shrink-0" />
              {badge}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        onClick={scrollDown}
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-warm-400 hover:text-gold transition-colors duration-200 group"
      >
        <span className="text-[10px] tracking-[0.25em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={20} className="group-hover:text-gold transition-colors duration-200" />
        </motion.div>
      </motion.button>
    </section>
  );
}
