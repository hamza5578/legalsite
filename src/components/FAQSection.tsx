"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const FAQS = [
  {
    q: "How do I know if I need a lawyer?",
    a: "If you are facing a legal dispute, have received a notice from a court, regulatory authority or the FBR, are entering a significant contract, or need to protect your rights in any matter — you need a lawyer. Early legal advice almost always saves time and money compared with addressing problems after they escalate.",
  },
  {
    q: "What happens during an initial consultation?",
    a: "We listen carefully to the facts of your matter, ask clarifying questions, and give you an honest assessment of your legal position and the options available. There is no obligation to engage us after the consultation. We believe you should feel fully informed before making any decision.",
  },
  {
    q: "How does Shafi Law Associates charge for its services?",
    a: "Our fee structure depends on the nature of the matter. We offer fixed fees for defined tasks (such as drafting contracts or company incorporation), retainer arrangements for ongoing advisory work, and time-based billing for complex litigation. We are transparent about costs from the outset and provide written engagement letters in every case.",
  },
  {
    q: "Can you represent me in courts outside Islamabad?",
    a: "Our principal practice is before the Islamabad High Court and the Supreme Court of Pakistan. For matters in other provincial High Courts, we work with trusted correspondent counsel to ensure seamless representation across Pakistan.",
  },
  {
    q: "How long does it take to resolve a legal matter?",
    a: "Timelines vary significantly depending on the type of matter. Simple contracts and incorporations can be completed in days. Court proceedings can take months to years depending on complexity and the court's docket. We give you a realistic timeline at the outset and keep you updated at every stage.",
  },
  {
    q: "Is my information kept confidential?",
    a: "Absolutely. Everything you share with us is protected by attorney-client privilege and our strict professional obligations. We do not share client information with any third party without your express consent.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container-max">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="text-center mb-14"
        >
          <p className="section-label mb-3">Quick Answers</p>
          <h2 className="font-serif text-display-md text-navy font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <div className="gold-divider" />
          <p className="text-warm-500 text-lg max-w-2xl mx-auto mt-5 leading-relaxed">
            Answers to the questions we hear most often. If yours isn&apos;t here,{" "}
            <a href="/contact" className="text-gold font-semibold hover:underline underline-offset-2">
              get in touch
            </a>
            .
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="max-w-3xl mx-auto space-y-3">
          {FAQS.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.07, ease }}
              className="border border-warm-200 rounded-sm overflow-hidden shadow-card"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-white hover:bg-warm-50 transition-colors duration-200"
                aria-expanded={open === i}
              >
                <span className="font-serif text-navy font-semibold text-base leading-snug">
                  {faq.q}
                </span>
                <motion.div
                  animate={{ rotate: open === i ? 180 : 0 }}
                  transition={{ duration: 0.25, ease }}
                  className="flex-shrink-0"
                >
                  <ChevronDown size={18} className="text-gold" />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.32, ease }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 pt-1 bg-warm-50 border-t border-warm-200">
                      <p className="text-warm-500 text-sm leading-relaxed">{faq.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
