"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

const schema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  practiceArea: z.string().min(1, "Please select a practice area"),
  message: z.string().min(20, "Please describe your matter in at least 20 characters"),
  consent: z.literal(true, { message: "You must agree to continue" }),
});

type FormData = z.infer<typeof schema>;

const practiceAreas = [
  "Corporate Law",
  "Civil Litigation",
  "Real Estate",
  "Employment Law",
  "Estate Planning",
  "Intellectual Property",
  "Other",
];

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    await new Promise((r) => setTimeout(r, 1200));
    console.log("Form submitted:", data);
    setStatus("success");
    reset();
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center py-16 text-center"
      >
        <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mb-4">
          <CheckCircle2 size={32} className="text-gold" />
        </div>
        <h3 className="font-serif text-navy text-2xl font-bold mb-2">Message Received</h3>
        <p className="text-warm-500 max-w-sm">
          Thank you for reaching out. An attorney will contact you within one business day to
          discuss your matter.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-gold text-sm font-semibold underline underline-offset-4 hover:text-gold-dark transition-colors"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      {/* Name row */}
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-navy text-sm font-medium mb-1.5">
            First Name <span className="text-red-500">*</span>
          </label>
          <input
            {...register("firstName")}
            placeholder="Jonathan"
            className={`input-field ${errors.firstName ? "input-error" : ""}`}
          />
          {errors.firstName && (
            <p className="mt-1 text-red-500 text-xs flex items-center gap-1">
              <AlertCircle size={12} /> {errors.firstName.message}
            </p>
          )}
        </div>
        <div>
          <label className="block text-navy text-sm font-medium mb-1.5">
            Last Name <span className="text-red-500">*</span>
          </label>
          <input
            {...register("lastName")}
            placeholder="Smith"
            className={`input-field ${errors.lastName ? "input-error" : ""}`}
          />
          {errors.lastName && (
            <p className="mt-1 text-red-500 text-xs flex items-center gap-1">
              <AlertCircle size={12} /> {errors.lastName.message}
            </p>
          )}
        </div>
      </div>

      {/* Email & phone row */}
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-navy text-sm font-medium mb-1.5">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            {...register("email")}
            type="email"
            placeholder="you@example.com"
            className={`input-field ${errors.email ? "input-error" : ""}`}
          />
          {errors.email && (
            <p className="mt-1 text-red-500 text-xs flex items-center gap-1">
              <AlertCircle size={12} /> {errors.email.message}
            </p>
          )}
        </div>
        <div>
          <label className="block text-navy text-sm font-medium mb-1.5">
            Phone <span className="text-warm-400 font-normal">(optional)</span>
          </label>
          <input
            {...register("phone")}
            type="tel"
            placeholder="(555) 000-0000"
            className="input-field"
          />
        </div>
      </div>

      {/* Practice area */}
      <div>
        <label className="block text-navy text-sm font-medium mb-1.5">
          Practice Area <span className="text-red-500">*</span>
        </label>
        <select
          {...register("practiceArea")}
          className={`input-field ${errors.practiceArea ? "input-error" : ""}`}
          defaultValue=""
        >
          <option value="" disabled>Select a practice area...</option>
          {practiceAreas.map((a) => (
            <option key={a} value={a}>{a}</option>
          ))}
        </select>
        {errors.practiceArea && (
          <p className="mt-1 text-red-500 text-xs flex items-center gap-1">
            <AlertCircle size={12} /> {errors.practiceArea.message}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label className="block text-navy text-sm font-medium mb-1.5">
          Describe Your Matter <span className="text-red-500">*</span>
        </label>
        <textarea
          {...register("message")}
          rows={5}
          placeholder="Please briefly describe your legal matter and how we can assist you..."
          className={`input-field resize-none ${errors.message ? "input-error" : ""}`}
        />
        {errors.message && (
          <p className="mt-1 text-red-500 text-xs flex items-center gap-1">
            <AlertCircle size={12} /> {errors.message.message}
          </p>
        )}
      </div>

      {/* Consent */}
      <div>
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            {...register("consent")}
            type="checkbox"
            className="mt-0.5 w-4 h-4 accent-gold rounded"
          />
          <span className="text-warm-500 text-xs leading-relaxed">
            I understand that submitting this form does not create an attorney-client relationship.
            Sending a message is not confidential. I agree to be contacted by {" "}
            <span className="text-navy font-medium">Harrington & Associates</span> regarding my inquiry.
          </span>
        </label>
        {errors.consent && (
          <p className="mt-1 text-red-500 text-xs flex items-center gap-1">
            <AlertCircle size={12} /> {errors.consent.message}
          </p>
        )}
      </div>

      {status === "error" && (
        <div className="bg-red-50 border border-red-200 rounded-sm px-4 py-3 text-red-700 text-sm">
          Something went wrong. Please try again or call us directly.
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full justify-center text-base disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <div className="w-4 h-4 border-2 border-navy/30 border-t-navy rounded-full animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Send Message
            <Send size={17} />
          </>
        )}
      </button>
    </form>
  );
}
