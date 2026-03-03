import ScrollReveal from "./ScrollReveal";
import TrackedApplyLink from "./TrackedApplyLink";

export default function CTASection() {
  return (
    <section id="apply" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 glow-teal pointer-events-none" />

      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <h2 className="font-[family-name:var(--font-outfit)] text-3xl sm:text-4xl lg:text-5xl font-bold text-text-heading mb-6">
            Ready to <span className="text-primary">Grow?</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <p className="text-lg text-text-muted mb-10 max-w-xl mx-auto">
            Apply to MAC Partners today. No cost. No gimmicks. Just the tools
            and mentorship to build a real business.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <TrackedApplyLink
            location="cta_bottom"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-10 py-4 text-lg font-bold text-bg transition-all hover:brightness-110 hover:shadow-[0_0_40px_rgba(46,196,165,0.4)] hover:-translate-y-0.5"
          >
            Apply Now
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </TrackedApplyLink>
        </ScrollReveal>
      </div>
    </section>
  );
}
