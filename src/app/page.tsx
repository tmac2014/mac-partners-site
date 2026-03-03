import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DirectAccess from "@/components/DirectAccess";
import WhoThisIsFor from "@/components/WhoThisIsFor";
import ValueCard from "@/components/ValueCard";
import ThreeTierStack from "@/components/ThreeTierStack";
import HowItWorks from "@/components/HowItWorks";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ScrollRevealInit from "@/components/ScrollRevealInit";

export default function Home() {
  return (
    <>
      <ScrollRevealInit />
      <Navbar />
      <main>
        <Hero />
        <DirectAccess />
        <WhoThisIsFor />

        {/* Value 01 — Website */}
        <ValueCard
          number="01"
          title="A Professional Website That Actually Ranks on Google"
          text="We rank #1 in our local market — and it brings us a steady flow of new clients every month at zero cost. It won't blow up your business overnight, but it's consistent and free once it's built. We build the same type of site for you — free."
          badge="Rank on Google and attract clients organically"
          features={[
            "SEO optimized to rank in your local market",
            "Local business schema so Google understands your business",
            "Blazing fast load speed",
            "Mobile optimized for every device",
            "Your own domain and branding",
            "Service pages tailored to what you sell",
          ]}
        />

        {/* Value 02 — AI Caller */}
        <ValueCard
          number="02"
          title="AI-Powered Caller That Books Appointments For You"
          text="When a lead comes in, our AI caller contacts them immediately and books appointments — automatically. We also call alongside it, but the AI increases our appointment count significantly. Most places charge a minimum of $750/month plus usage. Our agents only pay for what they use — no monthly fee, no contracts."
          badge="We set it all up for you"
          features={[
            "Calls leads automatically when they come in",
            "Books appointments directly on your calendar",
            "Works 24/7 — nights, weekends, holidays",
            "Follows up with old or unresponsive leads",
            "Works alongside your own outreach",
          ]}
          savings={{
            othersCharge: "$750+/month",
            youPay: "Usage only — no monthly fee",
          }}
        />

        {/* Value 03 — Cross-Selling */}
        <ValueCard
          number="03"
          title="Turn Every Client Into $1,000+ in First Year Commission"
          text="Most agents write a Medicare policy and move on. We use online webinars and live seminars to educate clients on the gaps in their Medicare coverage and how to fill them with ancillary products. The result? $1,000–$1,200 per client instead of just the Medicare commission alone. This is how we reinvest heavily back into our business — and we teach you exactly how to do the same."
          badge="Same number of clients, 3–4x the revenue"
          features={[
            "Online webinar strategy for client education",
            "Live seminar framework you can replicate",
            "Ancillary product cross-selling system",
            "Commission reinvestment strategy for growth",
            "Hands-on training from people who do it daily",
          ]}
        />

        <ThreeTierStack />
        <HowItWorks />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
