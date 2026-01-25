import { Navbar } from "@/components/landing/Navbar";
import { HeroSection } from "@/components/landing/HeroSection";
import { FoundationalSection } from "@/components/landing/FoundationalSection";
import { ProductSection } from "@/components/landing/ProductSection";
import { BuildSection } from "@/components/landing/BuildSection";
import { IndustriesSection } from "@/components/landing/IndustriesSection";
import { InsightsSection } from "@/components/landing/InsightsSection";
import { CTASection } from "@/components/landing/CTASection";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <FoundationalSection />
        <ProductSection />
        <BuildSection />
        <IndustriesSection />
        <InsightsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
