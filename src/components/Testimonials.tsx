"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";

const ease = [0.22, 1, 0.36, 1] as const;

function StarRating({ count = 5 }: { count?: number }) {
  return (
    <div className="flex items-center gap-0.5 mb-4">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-gold" aria-hidden>
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function useVisibleCols() {
  const [cols, setCols] = useState(1);
  useEffect(() => {
    const update = () => {
      if (window.innerWidth >= 1024) setCols(3);
      else if (window.innerWidth >= 640) setCols(2);
      else setCols(1);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return cols;
}

function chunkArray<T>(arr: T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

export default function Testimonials() {
  const cols = useVisibleCols();
  const pages = chunkArray(TESTIMONIALS, cols);
  const totalPages = pages.length;
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(1);
  const paused = useRef(false);

  const go = useCallback(
    (dir: number) => {
      setDirection(dir);
      setPage((p) => (p + dir + totalPages) % totalPages);
    },
    [totalPages]
  );

  // Reset page index when cols change
  useEffect(() => { setPage(0); }, [cols]);

  // Auto-advance
  useEffect(() => {
    const id = setInterval(() => {
      if (!paused.current) go(1);
    }, 5000);
    return () => clearInterval(id);
  }, [go]);

  const variants = {
    enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 56 : -56 }),
    center: { opacity: 1, x: 0, transition: { duration: 0.55, ease } },
    exit: (dir: number) => ({
      opacity: 0,
      x: dir > 0 ? -56 : 56,
      transition: { duration: 0.35, ease },
    }),
  };

  return (
    <>
      {/* Testimonials section */}
      <section
        id="testimonials"
        className="section-padding bg-navy overflow-hidden"
        onMouseEnter={() => { paused.current = true; }}
        onMouseLeave={() => { paused.current = false; }}
      >
        <div className="container-max">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="text-center mb-14"
          >
            <p className="section-label mb-3">Client Stories</p>
            <h2 className="font-serif text-display-md text-white font-bold mb-4">
              What Our Clients Say
            </h2>
            <div className="gold-divider" />
          </motion.div>

          {/* Carousel viewport */}
          <div className="relative overflow-hidden" style={{ minHeight: "280px" }}>
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={`${page}-${cols}`}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {(pages[page] ?? []).map((t) => (
                  <div
                    key={t.id}
                    className="flex flex-col bg-white/5 border border-white/10 rounded-sm p-8"
                  >
                    <StarRating count={t.rating} />
                    <blockquote className="text-warm-200 text-sm leading-relaxed flex-1 mb-6 italic">
                      &ldquo;{t.quote}&rdquo;
                    </blockquote>
                    <div className="flex items-center gap-3 pt-5 border-t border-white/10">
                      <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/30 flex items-center justify-center flex-shrink-0">
                        <span className="font-serif text-gold text-sm font-bold">
                          {t.name
                            .split(" ")
                            .map((n: string) => n[0])
                            .slice(0, 2)
                            .join("")}
                        </span>
                      </div>
                      <div>
                        <p className="text-white text-sm font-semibold leading-none">{t.name}</p>
                        <p className="text-warm-400 text-xs mt-0.5">{t.designation}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-5 mt-10">
            <button
              onClick={() => go(-1)}
              aria-label="Previous testimonials"
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-warm-300 hover:text-gold hover:border-gold/50 transition-all duration-200"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex items-center gap-2">
              {pages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > page ? 1 : -1); setPage(i); }}
                  aria-label={`Go to page ${i + 1}`}
                  className={`rounded-full transition-all duration-300 ${
                    i === page ? "w-6 h-2 bg-gold" : "w-2 h-2 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => go(1)}
              aria-label="Next testimonials"
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-warm-300 hover:text-gold hover:border-gold/50 transition-all duration-200"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Gold CTA strip */}
      <section className="bg-gold py-14">
        <div className="container-max flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-serif text-navy text-2xl font-bold leading-snug">
              Have a legal question?
            </h3>
            <p className="text-navy/70 mt-1">
              Let&apos;s discuss your case and explore your options.
            </p>
          </div>
          <button
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
            className="btn-navy flex-shrink-0"
          >
            Schedule a Free Consultation
          </button>
        </div>
      </section>
    </>
  );
}
