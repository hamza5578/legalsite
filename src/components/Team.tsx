"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { TEAM_MEMBERS } from "@/lib/constants";

const ease = [0.22, 1, 0.36, 1] as const;

function IconLinkedIn({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function Team() {
  return (
    <section id="team" className="section-padding bg-warm-100">
      <div className="container-max">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="text-center mb-14"
        >
          <p className="section-label mb-3">Meet the Attorneys</p>
          <h2 className="font-serif text-display-md text-navy font-bold mb-4">Our Legal Team</h2>
          <div className="gold-divider" />
          <p className="text-warm-500 text-lg max-w-2xl mx-auto mt-5">
            Experienced practitioners dedicated to delivering exceptional counsel and protecting
            your interests at every turn.
          </p>
        </motion.div>

        {/* Grid — 1 col / 2 col / 4 col */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM_MEMBERS.map((member, i) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.1, ease }}
              className="group bg-white rounded-sm overflow-hidden border border-warm-200 transition-all duration-300 hover:shadow-[0_12px_40px_rgba(10,31,68,0.12)]"
            >
              {/* Square portrait */}
              <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-navy-light to-navy">
                {/* Initials placeholder */}
                <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                  <div className="w-24 h-24 rounded-full bg-gold/20 border-2 border-gold/40 flex items-center justify-center">
                    <span className="font-serif text-gold text-2xl font-bold">
                      {member.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                    </span>
                  </div>
                </div>

                {/* Hover overlay with social icons */}
                <div className="absolute inset-0 bg-navy/70 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={member.linkedin}
                    aria-label={`${member.name} LinkedIn`}
                    onClick={(e) => e.stopPropagation()}
                    className="w-10 h-10 rounded-full bg-white/10 border border-white/30 flex items-center justify-center text-white hover:bg-gold hover:text-navy hover:border-gold transition-all duration-200"
                  >
                    <IconLinkedIn className="w-4 h-4" />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    aria-label={`Email ${member.name}`}
                    onClick={(e) => e.stopPropagation()}
                    className="w-10 h-10 rounded-full bg-white/10 border border-white/30 flex items-center justify-center text-white hover:bg-gold hover:text-navy hover:border-gold transition-all duration-200"
                  >
                    <Mail size={16} />
                  </a>
                </div>

                {/* Role badge */}
                <div className="absolute bottom-0 inset-x-0 bg-navy/75 backdrop-blur-sm px-4 py-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-gold text-xs font-semibold tracking-wide truncate">{member.role}</p>
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="font-serif text-navy text-[1.1rem] font-bold leading-snug mb-0.5">
                  {member.name}
                </h3>
                <p className="text-gold text-xs font-semibold uppercase tracking-wider mb-3">
                  {member.title}
                </p>
                <p className="text-warm-500 text-sm leading-relaxed line-clamp-2">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
