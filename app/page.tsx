import HeroSection from "@/components/home/hero-section"
import IntroducingSection from "@/components/home/introducing-section"
import ServicesOverview from "@/components/home/services-overview"
import USACoverage from "@/components/home/usa-coverage"
import BillingCtaBanner from "@/components/home/billing-cta-banner"

export default function Home() {
  return (
    <>
      <HeroSection />
      <IntroducingSection />
      <ServicesOverview />
      <USACoverage />
      <BillingCtaBanner />
    </>
  )
}
