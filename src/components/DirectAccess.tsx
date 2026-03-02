import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function DirectAccess() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 glow-teal pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <span className="inline-block text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            What Makes Us Different
          </span>
          <h2 className="font-[family-name:var(--font-outfit)] text-3xl sm:text-4xl font-bold text-text-heading mb-4">
            Direct Access to Proven Producers
          </h2>
          <p className="max-w-2xl text-lg text-text-muted mb-16">
            Most uplines hand you a contract and disappear. We work alongside
            you — teaching you exactly how we built our agency.
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - text */}
          <ScrollReveal>
            <div className="rounded-2xl border border-border bg-bg-card p-8 sm:p-10">
              <h3 className="font-[family-name:var(--font-outfit)] text-2xl font-bold text-text-heading mb-4">
                Not just an upline. A real partnership.
              </h3>
              <p className="text-text-muted leading-relaxed">
                When you join MAC Partners, you don&apos;t get shuffled to a
                support team or stuck in a Facebook group hoping someone answers
                your question. You work directly with Tyler and Jessica — the
                same people running the agency, closing deals, and testing new
                strategies every single day. What works for us, we teach to you.
              </p>
            </div>
          </ScrollReveal>

          {/* Right - Tyler & Jessica card */}
          <ScrollReveal delay={100}>
            <div className="rounded-2xl border border-border bg-bg-card overflow-hidden hover:border-border-hover transition-colors">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/tyler-jessica.jpg"
                  alt="Tyler and Jessica McDaniel"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <h4 className="font-[family-name:var(--font-outfit)] text-xl font-bold text-text-heading">
                  Tyler &amp; Jessica McDaniel
                </h4>
                <p className="text-sm text-primary mb-3">
                  Managing Partners, MAC Insurance
                </p>
                <p className="text-sm text-text-muted leading-relaxed">
                  Built the agency&apos;s tech stack, marketing systems, and
                  growth strategies from the ground up. Hands-on with agent
                  development, sales strategy, and the day-to-day systems that
                  drive results.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
