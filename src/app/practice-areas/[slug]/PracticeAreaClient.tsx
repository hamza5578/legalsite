"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import type { FaqItem } from "@/lib/practice-area-data";

const ease = [0.22, 1, 0.36, 1] as const;

export default function PracticeAreaClient({ faqs }: { faqs: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="bg-white rounded-sm border border-warm-200 shadow-card p-8">
      <h2 className="font-serif text-navy text-2xl font-bold mb-6">
        Frequently Asked Questions
      </h2>
      <div className="space-y-3">
        {faqs.map((faq, i) => (
          <div key={i} className="border border-warm-200 rounded-sm overflow-hidden">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
              aria-expanded={open === i}
            >
              <span className="font-medium text-navy text-sm leading-snug">{faq.question}</span>
              <motion.div
                animate={{ rotate: open === i ? 180 : 0 }}
                transition={{ duration: 0.25, ease }}
                className="flex-shrink-0"
              >
                <ChevronDown size={16} className="text-gold" />
              </motion.div>
            </button>
            <AnimatePresence initial={false}>
              {open === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-5 border-t border-warm-100">
                    <p className="text-warm-500 text-sm leading-relaxed pt-4">{faq.answer}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
