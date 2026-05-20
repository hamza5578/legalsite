import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { POSTS, getPostBySlug } from "@/lib/posts";

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: `${post.title} | Shafi Law Insights`,
    description: post.excerpt.slice(0, 155),
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function renderContent(content: string) {
  const paragraphs = content.split("\n\n").filter(Boolean);
  return paragraphs.map((para, i) => {
    if (para.startsWith("**") && para.endsWith("**")) {
      const text = para.slice(2, -2);
      return (
        <h3 key={i} className="font-serif text-navy text-xl font-bold mt-8 mb-3">
          {text}
        </h3>
      );
    }
    // Inline bold conversion
    const parts = para.split(/(\*\*[^*]+\*\*)/g);
    return (
      <p key={i} className="text-warm-500 leading-relaxed">
        {parts.map((part, j) => {
          if (part.startsWith("**") && part.endsWith("**")) {
            return <strong key={j} className="text-navy font-semibold">{part.slice(2, -2)}</strong>;
          }
          return part;
        })}
      </p>
    );
  });
}

export default function InsightPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const related = POSTS.filter((p) => p.slug !== params.slug && p.category === post.category).slice(0, 3);

  return (
    <>
      {/* Hero */}
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
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-warm-400 text-sm hover:text-gold transition-colors duration-200 mb-8"
          >
            <ArrowLeft size={14} />
            Back to Insights
          </Link>
          <div className="flex items-center gap-3 mb-5">
            <span className="bg-gold/20 text-gold text-xs font-semibold px-3 py-1 rounded-sm">
              {post.category}
            </span>
            <span className="flex items-center gap-1.5 text-warm-400 text-xs">
              <Clock size={11} />
              {post.readTime}
            </span>
          </div>
          <h1
            className="font-serif text-white font-bold mb-5 max-w-3xl"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", lineHeight: 1.2 }}
          >
            {post.title}
          </h1>
          <div className="flex items-center gap-2 text-warm-400 text-xs">
            <Calendar size={11} />
            <span>{formatDate(post.date)}</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-warm-100">
        <div className="container-max">
          <div className="grid lg:grid-cols-3 gap-10">

            {/* Article */}
            <article className="lg:col-span-2">
              <div className="bg-white rounded-sm border border-warm-200 shadow-card p-8 sm:p-10">
                <p className="text-warm-500 text-lg leading-relaxed font-medium border-l-4 border-gold pl-5 mb-8 italic">
                  {post.excerpt}
                </p>
                <div className="space-y-4">
                  {renderContent(post.content)}
                </div>
              </div>

              {/* Disclaimer */}
              <div className="mt-6 bg-gold/8 border border-gold/25 rounded-sm p-5">
                <p className="text-warm-500 text-xs leading-relaxed">
                  <strong className="text-navy">Disclaimer:</strong> This article is for general informational purposes only and does not constitute legal advice. For advice specific to your situation, please{" "}
                  <Link href="/contact" className="text-gold underline underline-offset-2 hover:no-underline">
                    contact our team
                  </Link>
                  .
                </p>
              </div>
            </article>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="sticky top-24 space-y-6">
                {/* CTA */}
                <div className="bg-navy rounded-sm p-7 text-center">
                  <h3 className="font-serif text-white text-lg font-bold mb-2">
                    Have a legal question?
                  </h3>
                  <p className="text-warm-300 text-sm leading-relaxed mb-5">
                    Our team is ready to assist. Book a confidential consultation today.
                  </p>
                  <Link href="/contact" className="btn-primary w-full justify-center text-sm">
                    Book a Consultation
                  </Link>
                </div>

                {/* Related posts */}
                {related.length > 0 && (
                  <div className="bg-white rounded-sm border border-warm-200 shadow-card p-6">
                    <h4 className="text-navy font-semibold text-sm uppercase tracking-wider mb-4">
                      Related Articles
                    </h4>
                    <ul className="space-y-4">
                      {related.map((r) => (
                        <li key={r.slug} className="border-b border-warm-100 last:border-0 pb-4 last:pb-0">
                          <Link
                            href={`/insights/${r.slug}`}
                            className="group text-sm text-navy font-medium hover:text-gold transition-colors duration-200 leading-snug block"
                          >
                            {r.title}
                          </Link>
                          <span className="text-warm-400 text-xs mt-1 block">{formatDate(r.date)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* All insights link */}
                <Link
                  href="/insights"
                  className="flex items-center gap-2 text-gold text-sm font-semibold hover:gap-3 transition-all duration-300"
                >
                  <ArrowLeft size={14} />
                  All Insights
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
