import { notFound } from "next/navigation";
import Link from "next/link";
import { PRACTICE_AREAS } from "@/lib/constants";
import { PRACTICE_AREA_DETAILS } from "@/lib/practice-area-data";
import PracticeAreaClient from "./PracticeAreaClient";

export function generateStaticParams() {
  return PRACTICE_AREAS.map((pa) => ({ slug: pa.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const detail = PRACTICE_AREA_DETAILS.find((d) => d.slug === params.slug);
  if (!detail) return {};
  return {
    title: `${detail.title} | Shafi Law Associates`,
    description: detail.overview.slice(0, 155),
  };
}

export default function PracticeAreaPage({ params }: { params: { slug: string } }) {
  const area = PRACTICE_AREAS.find((a) => a.slug === params.slug);
  const detail = PRACTICE_AREA_DETAILS.find((d) => d.slug === params.slug);

  if (!area || !detail) notFound();

  const related = PRACTICE_AREAS.filter((a) => a.slug !== params.slug).slice(0, 3);

  return (
    <>
      {/* Breadcrumb + hero */}
      <section className="bg-navy py-20 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(rgba(201,169,97,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,97,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
          aria-hidden
        />
        <div className="container-max relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-warm-400 text-xs mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-gold transition-colors duration-200">Home</Link>
            <span className="text-warm-600">/</span>
            <Link href="/practice-areas" className="hover:text-gold transition-colors duration-200">Practice Areas</Link>
            <span className="text-warm-600">/</span>
            <span className="text-warm-200">{area.title}</span>
          </nav>
          <p className="section-label mb-3">Practice Area</p>
          <h1 className="font-serif text-white font-bold mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}>
            {area.title}
          </h1>
          <div className="gold-divider-left" />
        </div>
      </section>

      {/* Main content */}
      <section className="section-padding bg-warm-100">
        <div className="container-max">
          <div className="grid lg:grid-cols-3 gap-10">

            {/* Main col */}
            <div className="lg:col-span-2 space-y-10">
              {/* Overview */}
              <div className="bg-white rounded-sm border border-warm-200 shadow-card p-8">
                <h2 className="font-serif text-navy text-2xl font-bold mb-5">Overview</h2>
                <p className="text-warm-500 leading-relaxed">{detail.overview}</p>
              </div>

              {/* Services */}
              <div className="bg-white rounded-sm border border-warm-200 shadow-card p-8">
                <h2 className="font-serif text-navy text-2xl font-bold mb-5">Our Services</h2>
                <ul className="space-y-3">
                  {detail.services.map((svc) => (
                    <li key={svc} className="flex items-start gap-3">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                      <span className="text-warm-500 text-sm leading-relaxed">{svc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Approach */}
              <div className="bg-white rounded-sm border border-warm-200 shadow-card p-8">
                <h2 className="font-serif text-navy text-2xl font-bold mb-5">Our Approach</h2>
                <p className="text-warm-500 leading-relaxed">{detail.approach}</p>
              </div>

              {/* FAQ accordion (client component) */}
              <PracticeAreaClient faqs={detail.faqs} />
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Sticky contact card */}
              <div className="sticky top-24 space-y-6">
                <div className="bg-navy rounded-sm p-7 text-center">
                  <p className="font-serif text-gold text-5xl font-bold opacity-20 leading-none mb-4">&sect;</p>
                  <h3 className="font-serif text-white text-xl font-bold mb-2">
                    Need Legal Advice?
                  </h3>
                  <p className="text-warm-300 text-sm leading-relaxed mb-6">
                    Speak to one of our specialists about your matter. Initial consultations are confidential.
                  </p>
                  <Link href="/contact" className="btn-primary w-full justify-center text-sm">
                    Book a Consultation
                  </Link>
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <a
                      href="tel:03349133334"
                      className="text-warm-300 text-sm hover:text-gold transition-colors duration-200"
                    >
                      Or call: 0334-9133334
                    </a>
                  </div>
                </div>

                {/* Related areas */}
                <div className="bg-white rounded-sm border border-warm-200 shadow-card p-6">
                  <h4 className="text-navy font-semibold text-sm uppercase tracking-wider mb-4">
                    Related Practice Areas
                  </h4>
                  <ul className="space-y-3">
                    {related.map((r) => (
                      <li key={r.slug}>
                        <Link
                          href={`/practice-areas/${r.slug}`}
                          className="group flex items-center gap-2 text-warm-500 text-sm hover:text-gold transition-colors duration-200"
                        >
                          <span className="block w-0 h-px bg-gold transition-all duration-300 group-hover:w-3 flex-shrink-0" />
                          {r.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Mini enquiry prompt */}
                <div className="bg-gold/10 border border-gold/25 rounded-sm p-5">
                  <p className="text-navy font-semibold text-sm mb-1">Quick Enquiry</p>
                  <p className="text-warm-500 text-xs leading-relaxed mb-3">
                    Have a quick question about {area.title.toLowerCase()}? Email us directly.
                  </p>
                  <a
                    href="mailto:info@shafilaw.com"
                    className="text-gold text-xs font-semibold hover:underline"
                  >
                    info@shafilaw.com
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
