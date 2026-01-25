import { Navbar } from "@/components/landing/Navbar";
import { HeroSection } from "@/components/landing/HeroSection";
import { ProductCards } from "@/components/landing/ProductCards";
import { WhySection } from "@/components/landing/WhySection";
import { UseCasesSection } from "@/components/landing/UseCasesSection";
import { ResearchSection } from "@/components/landing/ResearchSection";
import { CTASection } from "@/components/landing/CTASection";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <ProductCards />
        <WhySection />
        <UseCasesSection />
        <ResearchSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
