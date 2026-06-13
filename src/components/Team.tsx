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

const cardAccents = [
  { from: "#0A1F44", via: "#0d2a5c", to: "#1a3f7a" },
  { from: "#0f2a5c", via: "#0A1F44", to: "#071629" },
  { from: "#071629", via: "#0d2550", to: "#0A1F44" },
];

export default function Team() {
  return (
    <section id="team" className="relative overflow-hidden bg-navy py-24 px-4 sm:px-6 lg:px-8">

      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(201,169,97,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,97,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
        aria-hidden
      />
      {/* Gold glow top-left */}
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-gold/5 blur-3xl pointer-events-none" aria-hidden />
      {/* Gold glow bottom-right */}
      <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-gold/5 blur-3xl pointer-events-none" aria-hidden />

      <div className="container-max relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease }}
          className="text-center mb-16"
        >
          <p className="section-label mb-3">Meet the Attorneys</p>
          <h2 className="font-serif text-display-md text-white font-bold mb-4">Our Legal Team</h2>
          <div className="gold-divider" />
          <p className="text-warm-300 text-lg max-w-2xl mx-auto mt-5 leading-relaxed">
            Experienced practitioners dedicated to delivering exceptional counsel and
            protecting your interests at every turn.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {TEAM_MEMBERS.map((member, i) => {
            const accent = cardAccents[i % cardAccents.length];
            return (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.12, ease }}
                className="group relative"
              >
                {/* Gold top border accent that grows on hover */}
                <div className="absolute top-0 inset-x-0 h-[3px] bg-gold/30 rounded-t-sm overflow-hidden z-10">
                  <div className="h-full w-0 bg-gold group-hover:w-full transition-all duration-500 ease-out" />
                </div>

                <div className="bg-white/[0.04] border border-white/10 rounded-sm overflow-hidden transition-all duration-300 group-hover:border-gold/30 group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.4),0_0_0_1px_rgba(201,169,97,0.15)]">

                  {/* Portrait area */}
                  <div
                    className="relative overflow-hidden"
                    style={{
                      aspectRatio: "3/4",
                      background: `linear-gradient(160deg, ${accent.from}, ${accent.via}, ${accent.to})`,
                    }}
                  >
                    {/* Decorative rings */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="absolute w-48 h-48 rounded-full border border-gold/8" />
                      <div className="absolute w-36 h-36 rounded-full border border-gold/12" />
                      <div className="absolute w-24 h-24 rounded-full border border-gold/20" />
                    </div>

                    {/* Subtle diagonal lines texture */}
                    <div
                      className="absolute inset-0 opacity-[0.03]"
                      style={{
                        backgroundImage: "repeating-linear-gradient(45deg, #C9A961 0px, #C9A961 1px, transparent 0px, transparent 50%)",
                        backgroundSize: "20px 20px",
                      }}
                    />

                    {/* Initials */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 transition-transform duration-500 group-hover:scale-105">
                      <div className="w-20 h-20 rounded-full bg-gold/15 border border-gold/35 flex items-center justify-center shadow-[0_0_30px_rgba(201,169,97,0.15)]">
                        <span className="font-serif text-gold text-xl font-bold tracking-wide">
                          {member.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                        </span>
                      </div>
                      {/* Specialization tag */}
                      <span className="text-warm-400 text-[10px] tracking-[0.2em] uppercase font-medium opacity-70">
                        {member.specialization}
                      </span>
                    </div>

                    {/* Hover social overlay */}
                    <div className="absolute inset-0 bg-navy/75 backdrop-blur-sm flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a
                        href={member.linkedin}
                        aria-label={`${member.name} LinkedIn`}
                        onClick={(e) => e.stopPropagation()}
                        className="w-11 h-11 rounded-full bg-white/10 border border-white/25 flex items-center justify-center text-white hover:bg-gold hover:text-navy hover:border-gold transition-all duration-200"
                      >
                        <IconLinkedIn className="w-4 h-4" />
                      </a>
                      <a
                        href={`mailto:${member.email}`}
                        aria-label={`Email ${member.name}`}
                        onClick={(e) => e.stopPropagation()}
                        className="w-11 h-11 rounded-full bg-white/10 border border-white/25 flex items-center justify-center text-white hover:bg-gold hover:text-navy hover:border-gold transition-all duration-200"
                      >
                        <Mail size={16} />
                      </a>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-6 border-t border-white/8">
                    {/* Title badge */}
                    <span className="inline-block bg-gold/15 text-gold text-[10px] font-bold tracking-[0.18em] uppercase px-2.5 py-1 rounded-sm mb-3">
                      {member.title}
                    </span>
                    <h3 className="font-serif text-white text-xl font-bold leading-tight mb-1">
                      {member.name}
                    </h3>
                    <p className="text-warm-400 text-xs font-medium mb-4 tracking-wide">
                      {member.role}
                    </p>
                    <p className="text-warm-400 text-sm leading-relaxed line-clamp-2">
                      {member.bio}
                    </p>

                    {/* Divider + email link */}
                    <div className="mt-5 pt-4 border-t border-white/8 flex items-center justify-between">
                      <a
                        href={`mailto:${member.email}`}
                        className="text-warm-500 text-xs hover:text-gold transition-colors duration-200 truncate"
                      >
                        {member.email}
                      </a>
                      <div className="w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 ml-2 group-hover:bg-gold/20 transition-colors duration-200">
                        <Mail size={11} className="text-gold" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
