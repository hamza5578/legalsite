"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, Clock, CheckCircle2, Send } from "lucide-react";
import { FIRM_PHONE, FIRM_EMAIL, FIRM_ADDRESS, PRACTICE_AREAS } from "@/lib/constants";

const ease = [0.22, 1, 0.36, 1] as const;

const schema = z.object({
  name: z.string().min(2, "Full name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  subject: z.string().min(3, "Subject is required"),
  practiceArea: z.string().min(1, "Please select a practice area"),
  message: z.string().min(20, "Message must be at least 20 characters"),
  consent: z.literal(true, { message: "You must agree to continue" }),
});

type ContactForm = z.infer<typeof schema>;

function FieldError({ msg }: { msg?: string }) {
  if (!msg) return null;
  return (
    <AnimatePresence>
      <motion.p
        initial={{ opacity: 0, y: -4 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        className="text-red-500 text-xs mt-1"
      >
        {msg}
      </motion.p>
    </AnimatePresence>
  );
}

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactForm>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async () => {
    await new Promise((r) => setTimeout(r, 800));
    setSubmitted(true);
    reset();
  };

  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy py-24 overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(rgba(201,169,97,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,97,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
          aria-hidden
        />
        <div className="absolute left-0 top-1/3 w-1 h-40 bg-gradient-to-b from-transparent via-gold to-transparent opacity-60" aria-hidden />
        <div className="container-max text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease }}
          >
            <p className="section-label mb-3">We Are Here to Help</p>
            <h1 className="font-serif text-white font-bold mb-4" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
              Get in Touch
            </h1>
            <div className="gold-divider" />
            <p className="text-warm-300 mt-5 max-w-xl mx-auto leading-relaxed">
              Whether you have an urgent matter or a general enquiry, our team is ready to assist. Complete the form and we will respond within one business day.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Two-column layout */}
      <section className="section-padding bg-warm-100">
        <div className="container-max">
          <div className="grid lg:grid-cols-5 gap-12">

            {/* Left: contact info + map */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, ease, delay: 0.15 }}
              className="lg:col-span-2 space-y-8"
            >
              <div>
                <h2 className="font-serif text-navy text-2xl font-bold mb-6">Contact Information</h2>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <MapPin size={16} className="text-gold" />
                    </div>
                    <div>
                      <p className="text-navy font-semibold text-sm mb-1">Office Address</p>
                      <p className="text-warm-500 text-sm leading-relaxed whitespace-pre-line">{FIRM_ADDRESS}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Phone size={16} className="text-gold" />
                    </div>
                    <div>
                      <p className="text-navy font-semibold text-sm mb-1">Phone</p>
                      <a href={`tel:${FIRM_PHONE}`} className="text-warm-500 text-sm hover:text-gold transition-colors duration-200">
                        {FIRM_PHONE}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Mail size={16} className="text-gold" />
                    </div>
                    <div>
                      <p className="text-navy font-semibold text-sm mb-1">Email</p>
                      <a href={`mailto:${FIRM_EMAIL}`} className="text-warm-500 text-sm hover:text-gold transition-colors duration-200 break-all">
                        {FIRM_EMAIL}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Clock size={16} className="text-gold" />
                    </div>
                    <div>
                      <p className="text-navy font-semibold text-sm mb-1">Office Hours</p>
                      <p className="text-warm-500 text-sm">Mon - Fri: 9:00 AM - 6:00 PM</p>
                      <p className="text-warm-500 text-sm">Sat: 10:00 AM - 2:00 PM</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Map placeholder */}
              <div className="rounded-sm overflow-hidden border border-warm-200 shadow-card">
                <div className="bg-gradient-to-br from-navy to-navy-light aspect-video flex flex-col items-center justify-center text-center p-8">
                  <MapPin size={32} className="text-gold mb-3 opacity-80" />
                  <p className="font-serif text-white text-lg font-bold">House No 500, Street 8</p>
                  <p className="text-warm-400 text-sm mt-1">F-10/2, Islamabad</p>
                  <a
                    href="https://www.google.com/maps/place/33%C2%B041'41.1%22N+72%C2%B059'53.1%22E/@33.6947556,72.9955178,871m/data=!3m1!1e3!4m4!3m3!8m2!3d33.6947556!4d72.9980927"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 text-gold text-xs font-semibold underline underline-offset-2 hover:text-gold-light transition-colors duration-200"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right: form */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, ease, delay: 0.25 }}
              className="lg:col-span-3"
            >
              <div className="bg-white rounded-sm border border-warm-200 shadow-card p-8 sm:p-10">
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4, ease }}
                      className="flex flex-col items-center text-center py-12"
                    >
                      <div className="w-16 h-16 rounded-full bg-green-50 border border-green-200 flex items-center justify-center mb-6">
                        <CheckCircle2 size={32} className="text-green-500" />
                      </div>
                      <h3 className="font-serif text-navy text-2xl font-bold mb-3">
                        Message Received
                      </h3>
                      <p className="text-warm-500 leading-relaxed max-w-sm mb-6">
                        Thank you for reaching out. A member of our team will be in touch within one business day.
                      </p>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="btn-primary text-sm"
                      >
                        Send Another Message
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit(onSubmit)}
                      className="space-y-5"
                    >
                      <div>
                        <h2 className="font-serif text-navy text-2xl font-bold mb-1">Send Us a Message</h2>
                        <p className="text-warm-400 text-sm">All fields marked * are required.</p>
                      </div>

                      {/* Name + Email */}
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-navy text-sm font-medium mb-1.5">
                            Full Name <span className="text-gold">*</span>
                          </label>
                          <input
                            {...register("name")}
                            placeholder="Your full name"
                            className="input-field"
                          />
                          <FieldError msg={errors.name?.message} />
                        </div>
                        <div>
                          <label className="block text-navy text-sm font-medium mb-1.5">
                            Email Address <span className="text-gold">*</span>
                          </label>
                          <input
                            {...register("email")}
                            type="email"
                            placeholder="you@example.com"
                            className="input-field"
                          />
                          <FieldError msg={errors.email?.message} />
                        </div>
                      </div>

                      {/* Phone + Subject */}
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-navy text-sm font-medium mb-1.5">
                            Phone Number
                          </label>
                          <input
                            {...register("phone")}
                            type="tel"
                            placeholder="+92 300 0000000"
                            className="input-field"
                          />
                        </div>
                        <div>
                          <label className="block text-navy text-sm font-medium mb-1.5">
                            Subject <span className="text-gold">*</span>
                          </label>
                          <input
                            {...register("subject")}
                            placeholder="Brief subject"
                            className="input-field"
                          />
                          <FieldError msg={errors.subject?.message} />
                        </div>
                      </div>

                      {/* Practice Area */}
                      <div>
                        <label className="block text-navy text-sm font-medium mb-1.5">
                          Practice Area <span className="text-gold">*</span>
                        </label>
                        <select {...register("practiceArea")} className="input-field">
                          <option value="">Select a practice area...</option>
                          {PRACTICE_AREAS.map((pa) => (
                            <option key={pa.slug} value={pa.slug}>
                              {pa.title}
                            </option>
                          ))}
                          <option value="other">Other / Not Sure</option>
                        </select>
                        <FieldError msg={errors.practiceArea?.message} />
                      </div>

                      {/* Message */}
                      <div>
                        <label className="block text-navy text-sm font-medium mb-1.5">
                          Your Message <span className="text-gold">*</span>
                        </label>
                        <textarea
                          {...register("message")}
                          rows={5}
                          placeholder="Please describe your matter..."
                          className="input-field resize-none"
                        />
                        <FieldError msg={errors.message?.message} />
                      </div>

                      {/* Consent */}
                      <div>
                        <label className="flex items-start gap-3 cursor-pointer">
                          <input
                            {...register("consent")}
                            type="checkbox"
                            className="mt-0.5 w-4 h-4 accent-gold flex-shrink-0"
                          />
                          <span className="text-warm-500 text-xs leading-relaxed">
                            I understand that submitting this form does not create an attorney-client relationship,
                            and that any information submitted is not confidential until a formal engagement is agreed.{" "}
                            <span className="text-gold">*</span>
                          </span>
                        </label>
                        <FieldError msg={errors.consent?.message} />
                      </div>

                      {/* Submit */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-primary w-full justify-center py-4 text-base disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <span className="inline-flex items-center gap-2">
                            <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden>
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                            </svg>
                            Sending...
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-2">
                            <Send size={16} />
                            Send Message
                          </span>
                        )}
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
