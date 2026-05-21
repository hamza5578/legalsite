"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FIRM_NAME, FIRM_PHONE, NAV_LINKS } from "@/lib/constants";

const overlayVariants = {
  hidden: { opacity: 0, y: "-100%" },
  visible: { opacity: 1, y: "0%", transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const } },
  exit:    { opacity: 0, y: "-100%", transition: { duration: 0.35, ease: [0.55, 0, 0.78, 0] as const } },
};

const linkItem = {
  hidden:  { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.35, delay: 0.12 + i * 0.07, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "py-3 bg-navy/95 backdrop-blur-md shadow-[0_2px_24px_rgba(10,31,68,0.4)]"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

          {/* Logo — full logo, no duplicate text */}
          <Link href="/" className="group flex-shrink-0" aria-label="Shafi Law Associates — Home">
            <Image
              src="/images/logo_transparent.png"
              alt="Shafi Law Associates"
              width={690}
              height={441}
              className="h-14 w-auto brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity duration-200"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Primary navigation">
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="relative text-sm font-medium text-warm-200 hover:text-gold transition-colors duration-200 group"
              >
                {label}
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Phone + CTA */}
          <div className="hidden lg:flex items-center gap-5">
            <a
              href={`tel:${FIRM_PHONE}`}
              className="flex items-center gap-1.5 text-sm text-warm-300 hover:text-gold transition-colors duration-200"
            >
              <Phone size={13} />
              {FIRM_PHONE}
            </a>
            <Link href="/contact" className="btn-primary py-2.5 px-6 text-sm">
              Free Consultation
            </Link>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="lg:hidden relative z-[60] w-10 h-10 flex items-center justify-center text-white hover:text-gold transition-colors duration-200"
          >
            <AnimatePresence mode="wait" initial={false}>
              {menuOpen ? (
                <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.18 }}>
                  <X size={24} />
                </motion.span>
              ) : (
                <motion.span key="m" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.18 }}>
                  <Menu size={24} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="overlay"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-40 bg-navy flex flex-col lg:hidden"
          >
            <div className="h-1 w-full bg-gold-gradient" />

            <div className="flex-1 flex flex-col justify-center px-8 pb-16">
              <nav>
                {NAV_LINKS.map(({ label, href }, i) => (
                  <motion.div key={href} custom={i} variants={linkItem} initial="hidden" animate="visible" className="border-b border-navy-light/40">
                    <Link
                      href={href}
                      onClick={() => setMenuOpen(false)}
                      className="w-full flex items-center justify-between py-5 font-serif text-white text-3xl font-semibold hover:text-gold transition-colors duration-200 group"
                    >
                      {label}
                      <ChevronRight size={20} className="text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.58, ease: [0.22, 1, 0.36, 1] as const }}
                className="mt-10 flex flex-col gap-4"
              >
                <Link href="/contact" onClick={() => setMenuOpen(false)} className="btn-primary justify-center text-base py-4">
                  Free Consultation
                </Link>
                <a href={`tel:${FIRM_PHONE}`} className="flex items-center justify-center gap-2 text-warm-400 text-sm hover:text-gold transition-colors duration-200">
                  <Phone size={14} /> {FIRM_PHONE}
                </a>
              </motion.div>
            </div>

            <div className="px-8 pb-8 text-warm-500 text-xs">
              &copy; {new Date().getFullYear()} {FIRM_NAME}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
