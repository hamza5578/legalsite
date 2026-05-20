import Link from "next/link";
import {
  Briefcase, Scale, Shield, Heart, DollarSign, Building2, ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { PRACTICE_AREAS } from "@/lib/constants";

const ICON_MAP: Record<string, LucideIcon> = {
  Briefcase,
  Scale,
  Shield,
  Heart,
  DollarSign,
  Building2,
};

export const metadata = {
  title: "Practice Areas | Shafi Law Associates",
  description:
    "Comprehensive legal services in corporate law, civil litigation, criminal defense, family law, tax, and property law — delivered from Islamabad.",
};

export default function PracticeAreasPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(rgba(201,169,97,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,97,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
          aria-hidden
        />
        <div className="container-max relative z-10 text-center">
          <p className="section-label mb-3">What We Do</p>
          <h1 className="font-serif text-white font-bold mb-4" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            Our Practice Areas
          </h1>
          <div className="gold-divider" />
          <p className="text-warm-300 mt-5 max-w-2xl mx-auto leading-relaxed">
            Comprehensive legal services across six core disciplines, delivered by specialists who understand the nuances of your matter and the stakes involved.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="section-padding bg-warm-100">
        <div className="container-max">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRACTICE_AREAS.map((area) => {
              const Icon = ICON_MAP[area.icon] ?? Briefcase;
              return (
                <Link
                  key={area.id}
                  href={`/practice-areas/${area.slug}`}
                  className="group flex flex-col bg-white rounded-sm p-8 shadow-card border border-warm-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(10,31,68,0.12)] h-full"
                >
                  <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-gold/20 flex-shrink-0">
                    <Icon size={24} className="text-gold" />
                  </div>
                  <h2
                    className="font-serif text-navy font-bold mb-3"
                    style={{ fontSize: "1.375rem", lineHeight: 1.25 }}
                  >
                    {area.title}
                  </h2>
                  <p className="text-warm-500 text-sm leading-relaxed flex-1 mb-5">
                    {area.shortDesc}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-gold text-sm font-semibold group-hover:gap-3 transition-all duration-300">
                    Learn more <ArrowRight size={15} />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-16">
        <div className="container-max text-center">
          <h2 className="font-serif text-white text-3xl font-bold mb-4">
            Not sure which area applies to your matter?
          </h2>
          <p className="text-warm-300 mb-8 max-w-lg mx-auto leading-relaxed">
            Our lawyers can help you identify the right approach. Book a confidential consultation and we will assess your situation.
          </p>
          <Link href="/contact" className="btn-primary text-base px-9 py-4">
            Book a Consultation <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
