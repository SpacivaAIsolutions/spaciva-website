import Hero from "@/components/Hero";
import TrustBanner from "@/components/TrustBanner";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <TrustBanner />
      <Services />
      <Portfolio />
      <Process />
      <Testimonials />
      <CTASection />
    </main>
  );
}
