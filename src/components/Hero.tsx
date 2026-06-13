"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Shield, Scale, Award } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const seq = (i: number) => ({
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, delay: 0.2 + i * 0.18, ease },
  },
});

const badges = [
  { icon: Shield, text: "Criminal Defense" },
  { icon: Scale,  text: "Civil Litigation" },
  { icon: Award,  text: "Supreme Court" },
];

export default function Hero() {
  const scrollDown = () =>
    document.getElementById("practice-areas")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      className="relative w-full min-h-[90vh] flex flex-col items-center justify-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Courthouse SVG background */}
      <div
        className="absolute inset-0 bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero.svg')" }}
        aria-hidden
      />

      {/* Deep navy base */}
      <div className="absolute inset-0 bg-navy/80" aria-hidden />

      {/* Radial gold glow from centre */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 45%, rgba(201,169,97,0.07) 0%, transparent 70%)",
        }}
        aria-hidden
      />

      {/* Bottom fade to navy */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(10,31,68,1) 0%, rgba(10,31,68,0.5) 40%, rgba(10,31,68,0.3) 100%)",
        }}
        aria-hidden
      />

      {/* Subtle gold grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(201,169,97,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,97,1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
        aria-hidden
      />

      {/* Left gold accent bar */}
      <div className="absolute left-0 top-1/4 w-1 h-64 bg-gradient-to-b from-transparent via-gold to-transparent opacity-60" aria-hidden />
      {/* Right gold accent bar */}
      <div className="absolute right-0 top-1/3 w-1 h-48 bg-gradient-to-b from-transparent via-gold to-transparent opacity-40" aria-hidden />

      {/* Decorative corner brackets */}
      <div className="absolute top-28 left-8 w-16 h-16 border-l-2 border-t-2 border-gold/20" aria-hidden />
      <div className="absolute top-28 right-8 w-16 h-16 border-r-2 border-t-2 border-gold/20" aria-hidden />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center pt-28 pb-24">

        {/* Eyebrow */}
        <motion.div
          variants={seq(0)}
          initial="hidden"
          animate="visible"
          className="flex items-center gap-4 mb-8"
        >
          <span className="h-px w-12 bg-gradient-to-r from-transparent to-gold" />
          <span className="section-label tracking-[0.3em]">Islamabad &middot; Est. 2008</span>
          <span className="h-px w-12 bg-gradient-to-l from-transparent to-gold" />
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={seq(1)}
          initial="hidden"
          animate="visible"
          className="font-serif font-bold text-white mb-6"
          style={{ fontSize: "clamp(2.8rem, 6vw, 4.5rem)", lineHeight: 1.06, letterSpacing: "-0.02em", maxWidth: "820px" }}
        >
          Trusted Legal Counsel.
          <br />
          <span className="text-gold">Proven Results.</span>
        </motion.h1>

        {/* Decorative divider */}
        <motion.div
          variants={seq(2)}
          initial="hidden"
          animate="visible"
          className="flex items-center gap-3 mb-7"
        >
          <span className="h-px w-20 bg-gold/40" />
          <span className="w-1.5 h-1.5 rounded-full bg-gold" />
          <span className="h-px w-20 bg-gold/40" />
        </motion.div>

        {/* Subheadline */}
        <motion.p
          variants={seq(3)}
          initial="hidden"
          animate="visible"
          className="text-warm-200 leading-relaxed mb-10 max-w-2xl"
          style={{ fontSize: "1.15rem" }}
        >
          For over 15 years, Shafi Law Associates has delivered unwavering
          legal representation to corporations, institutions, and individuals
          across Pakistan who demand excellence when the stakes are highest.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={seq(4)}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row items-center gap-4 mb-14"
        >
          <button
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
            className="btn-primary text-base px-10 py-4 shadow-[0_8px_30px_rgba(201,169,97,0.25)]"
          >
            Book a Consultation
            <ArrowRight size={18} />
          </button>
          <button
            onClick={() =>
              document.getElementById("practice-areas")?.scrollIntoView({ behavior: "smooth" })
            }
            className="btn-outline text-base px-10 py-4"
          >
            Our Practice Areas
          </button>
        </motion.div>

        {/* Practice badges */}
        <motion.div
          variants={seq(5)}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap justify-center items-center gap-4"
        >
          {badges.map(({ icon: Icon, text }) => (
            <div
              key={text}
              className="flex items-center gap-2 bg-white/5 border border-white/10 backdrop-blur-sm px-4 py-2.5 rounded-sm"
            >
              <Icon size={13} className="text-gold flex-shrink-0" />
              <span className="text-warm-300 text-xs font-medium tracking-wide">{text}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
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
