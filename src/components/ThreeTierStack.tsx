import ScrollReveal from "./ScrollReveal";

const tiers = [
  {
    name: "MAC Partners",
    tagline: "Your Direct Team",
    description:
      "The tools and mentorship we built our agency on.",
    items: [
      { label: "Direct access to Tyler & Jessica" },
      { label: "Professional SEO-optimized website" },
      { label: "AI-powered caller system" },
      { label: "MACPartners.io CRM" },
      { label: "Pre-built email & SMS automations" },
      { label: "Cross-selling strategy training" },
      { label: "GBP & SEO domination training" },
    ],
    highlight: true,
  },
  {
    name: "Christian Brindle | Everything Senior Insurance",
    tagline: "Upline Support",
    description:
      "Top-level training, resources, and heavy discounts from our upline.",
    items: [
      { label: "Premier agent program" },
      { label: "Free access to Seven Figure University", href: "https://sevenfigureu.com/" },
      { label: "Discounted Lead Heroes leads", href: "https://leadheroes.com/" },
      { label: "Discounted VAs through Hire Heroes", href: "https://hireheroes.com/" },
      { label: "Weekly training from a multi-seven-figure agency builder" },
      { label: "Exclusive top producer trips" },
    ],
    highlight: false,
  },
  {
    name: "Integrity",
    tagline: "National Platform",
    description:
      "Industry-leading tech, carriers, and resources.",
    items: [
      { label: "IntegrityCONNECT platform" },
      { label: "MedicareCENTER" },
      { label: "Sunfire enrollment" },
      { label: "Connecture plan comparison" },
      { label: "CSG Medigap quoting" },
      { label: "Integrity Leads" },
      { label: "Top-level commissions" },
      { label: "E&O discounts up to 50%" },
      { label: "Exclusive carrier access & bonuses" },
    ],
    highlight: false,
  },
];

export default function ThreeTierStack() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 glow-teal pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-14">
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-primary mb-3">
              The Full Picture
            </span>
            <h2 className="font-[family-name:var(--font-outfit)] text-3xl sm:text-4xl font-bold text-text-heading mb-4">
              Three Layers of Support No Other Upline Can Match
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-text-muted">
              You&apos;re not just getting one company behind you. You&apos;re
              getting three.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((tier, i) => (
            <ScrollReveal key={tier.name} delay={i * 100}>
              <div
                className={`rounded-2xl border p-8 h-full flex flex-col ${
                  tier.highlight
                    ? "border-primary/40 bg-bg-card shadow-[0_0_40px_rgba(46,196,165,0.08)]"
                    : "border-border bg-bg-card"
                } hover:border-border-hover transition-colors`}
              >
                <h3 className="font-[family-name:var(--font-outfit)] text-xl font-bold text-text-heading">
                  {tier.name}
                </h3>
                <p className="text-sm text-primary mb-2">{tier.tagline}</p>
                <p className="text-sm text-text-muted mb-6">
                  {tier.description}
                </p>
                <ul className="space-y-3 mt-auto">
                  {tier.items.map((item) => (
                    <li key={item.label} className="flex items-start gap-3">
                      <svg
                        className="w-4 h-4 text-primary flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {item.href ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-primary hover:underline inline-flex items-center gap-1"
                        >
                          {item.label}
                          <svg
                            className="w-3 h-3 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </a>
                      ) : (
                        <span className="text-sm text-text-muted">{item.label}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
