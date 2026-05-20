"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import ContactForm from "./ContactForm";
import { FIRM_NAME, FIRM_PHONE, FIRM_EMAIL, FIRM_ADDRESS } from "@/lib/constants";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: FIRM_PHONE,
    href: `tel:${FIRM_PHONE}`,
  },
  {
    icon: Mail,
    label: "Email",
    value: FIRM_EMAIL,
    href: `mailto:${FIRM_EMAIL}`,
  },
  {
    icon: MapPin,
    label: "Office",
    value: FIRM_ADDRESS,
    href: "#",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon–Fri: 8:30 AM – 6:00 PM\nUrgent: 24/7 available",
    href: "#",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-section-gradient">
      <div className="container-max">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-3">Get in Touch</p>
          <h2 className="font-serif text-display-md text-navy font-bold mb-4">
            Schedule a Consultation
          </h2>
          <div className="gold-divider" />
          <p className="text-warm-500 text-lg max-w-xl mx-auto mt-4">
            Your first consultation is complimentary. Our attorneys are ready to evaluate
            your matter and discuss your legal options.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Left: contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2"
          >
            <div className="bg-navy rounded-sm p-8 h-full">
              <h3 className="font-serif text-white text-xl font-bold mb-2">
                {FIRM_NAME}
              </h3>
              <p className="text-warm-400 text-sm mb-8">
                Trusted legal counsel for over three decades.
              </p>

              <div className="space-y-6">
                {contactInfo.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex gap-4">
                    <div className="w-10 h-10 bg-gold/10 rounded-sm flex items-center justify-center flex-shrink-0">
                      <Icon size={18} className="text-gold" />
                    </div>
                    <div>
                      <p className="text-warm-400 text-xs uppercase tracking-wider mb-1">{label}</p>
                      {href !== "#" ? (
                        <a
                          href={href}
                          className="text-white text-sm hover:text-gold transition-colors duration-200 whitespace-pre-line"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-white text-sm whitespace-pre-line">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Disclaimer */}
              <div className="mt-10 pt-6 border-t border-gold/15">
                <p className="text-warm-500 text-xs leading-relaxed">
                  <span className="text-gold font-semibold">Attorney Advertising.</span>{" "}
                  Prior results do not guarantee a similar outcome. This website is for
                  informational purposes only and does not constitute legal advice.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-sm border border-warm-200 p-8 shadow-card">
              <h3 className="font-serif text-navy text-xl font-bold mb-6">
                Tell Us About Your Matter
              </h3>
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
