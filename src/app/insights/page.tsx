import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { POSTS } from "@/lib/posts";

export const metadata = {
  title: "Legal Insights | Shafi Law Associates",
  description:
    "Legal analysis, updates, and practical guidance from the team at Shafi Law Associates, Islamabad.",
};

const CATEGORY_COLORS: Record<string, string> = {
  "Corporate Law": "bg-blue-50 text-blue-700",
  "Property Law": "bg-green-50 text-green-700",
  "Tax Law": "bg-amber-50 text-amber-700",
  "Family Law": "bg-pink-50 text-pink-700",
  "Dispute Resolution": "bg-purple-50 text-purple-700",
  "Criminal Law": "bg-red-50 text-red-700",
  "Employment Law": "bg-orange-50 text-orange-700",
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function InsightsPage({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const perPage = 9;
  const currentPage = Math.max(1, parseInt(searchParams.page ?? "1", 10));
  const totalPages = Math.ceil(POSTS.length / perPage);
  const pagePosts = POSTS.slice((currentPage - 1) * perPage, currentPage * perPage);

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
          <p className="section-label mb-3">Knowledge &amp; Analysis</p>
          <h1 className="font-serif text-white font-bold mb-4" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            Legal Insights
          </h1>
          <div className="gold-divider" />
          <p className="text-warm-300 mt-5 max-w-xl mx-auto leading-relaxed">
            Practical legal analysis and updates from our team, covering the areas that matter most to our clients.
          </p>
        </div>
      </section>

      {/* Posts grid */}
      <section className="section-padding bg-warm-100">
        <div className="container-max">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pagePosts.map((post) => (
              <Link
                key={post.slug}
                href={`/insights/${post.slug}`}
                className="group flex flex-col bg-white rounded-sm border border-warm-200 shadow-card overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(10,31,68,0.12)]"
              >
                {/* Card header strip */}
                <div className="h-2 bg-gradient-to-r from-navy to-navy-light" />

                <div className="p-7 flex flex-col flex-1">
                  {/* Category + read time */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span
                      className={`text-xs font-semibold px-2.5 py-1 rounded-sm ${
                        CATEGORY_COLORS[post.category] ?? "bg-warm-100 text-warm-500"
                      }`}
                    >
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-warm-400 text-xs">
                      <Clock size={11} />
                      {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="font-serif text-navy font-bold text-[1.1rem] leading-snug mb-3 group-hover:text-navy transition-colors duration-200 line-clamp-3">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-warm-500 text-sm leading-relaxed flex-1 line-clamp-3 mb-5">
                    {post.excerpt}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-warm-100">
                    <span className="text-warm-400 text-xs">{formatDate(post.date)}</span>
                    <span className="inline-flex items-center gap-1 text-gold text-xs font-semibold group-hover:gap-2 transition-all duration-300">
                      Read more <ArrowRight size={12} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-12">
              {currentPage > 1 && (
                <Link
                  href={`/insights?page=${currentPage - 1}`}
                  className="px-4 py-2 rounded-sm border border-warm-200 bg-white text-warm-500 text-sm hover:border-gold hover:text-gold transition-all duration-200"
                >
                  Previous
                </Link>
              )}
              {Array.from({ length: totalPages }).map((_, i) => {
                const p = i + 1;
                return (
                  <Link
                    key={p}
                    href={`/insights?page=${p}`}
                    className={`w-9 h-9 rounded-sm flex items-center justify-center text-sm font-medium transition-all duration-200 ${
                      p === currentPage
                        ? "bg-gold text-navy"
                        : "bg-white border border-warm-200 text-warm-500 hover:border-gold hover:text-gold"
                    }`}
                  >
                    {p}
                  </Link>
                );
              })}
              {currentPage < totalPages && (
                <Link
                  href={`/insights?page=${currentPage + 1}`}
                  className="px-4 py-2 rounded-sm border border-warm-200 bg-white text-warm-500 text-sm hover:border-gold hover:text-gold transition-all duration-200"
                >
                  Next
                </Link>
              )}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
