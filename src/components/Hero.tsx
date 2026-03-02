import ScrollReveal from "./ScrollReveal";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-grid">
      {/* Glow */}
      <div className="absolute inset-0 glow-teal-top pointer-events-none" />

      <div className="relative mx-auto max-w-5xl px-4 pt-24 pb-20 text-center sm:px-6 lg:px-8">
        <ScrollReveal>
          <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary mb-6">
            Independent Agents Only
          </span>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <h1 className="font-[family-name:var(--font-outfit)] text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-text-heading mb-6">
            Grow Your Insurance Business{" "}
            <span className="text-primary">With Proven Producers</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <p className="mx-auto max-w-2xl text-lg sm:text-xl text-text-muted leading-relaxed mb-10">
            Work directly with Tyler and Jessica — top producers who built their
            agency from the ground up. Get the same tools, strategies, and
            mentorship they use every day. All free.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <a
            href="/apply"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-base font-bold text-bg transition-all hover:brightness-110 hover:shadow-[0_0_30px_rgba(46,196,165,0.4)] hover:-translate-y-0.5"
          >
            Apply to Join MAC Partners
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </ScrollReveal>

        {/* Stats */}
        <ScrollReveal delay={400}>
          <div className="mt-16 grid grid-cols-3 gap-4 sm:gap-8 mx-auto max-w-2xl">
            {[
              { value: "$1,000+", label: "Per Client Revenue" },
              { value: "#1", label: "Local Google Ranking" },
              { value: "$0", label: "Cost to You" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-border bg-bg-card/50 px-4 py-5 sm:px-6 sm:py-6 backdrop-blur"
              >
                <div className="font-[family-name:var(--font-outfit)] text-2xl sm:text-3xl font-bold text-primary">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs sm:text-sm text-text-muted">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
