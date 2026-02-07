import { Navbar } from "@/components/landing/Navbar";
import { HeroSection } from "@/components/landing/HeroSection";
import { FoundationalSection } from "@/components/landing/FoundationalSection";
import { ProductSection } from "@/components/landing/ProductSection";
import { BuildSection } from "@/components/landing/BuildSection";
import { IndustriesSection } from "@/components/landing/IndustriesSection";
import { AIBenefitsSection } from "@/components/landing/AIBenefitsSection";
import { InsightsSection } from "@/components/landing/InsightsSection";
import { CTASection } from "@/components/landing/CTASection";
import { FAQSection } from "@/components/landing/FAQSection";
import { SeoFaqSchema } from "@/components/SeoFaqSchema";
import { OrganizationSchema, FaqSchema } from "@/components/SeoSchemas";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  const faqItems = [
    {
      question: "Can AI agents really automate 80–90% of my operations?",
      answer: "In practice we usually see 60–90% of well-defined workflows automated—like lead routing, follow-ups, ticket triage, and reporting. The exact percentage depends on process complexity and how clean your data and tools are. Our custom AI agents are built specifically for your workflows, which is why we can achieve higher automation rates than generic tools."
    },
    {
      question: "How long does it take to go live with an AI agent?",
      answer: "Most clients see their first agent in production within 4–6 weeks, with 2–3 iterations over the following month to reach target automation levels. We start with a focused pilot on one workflow, demonstrate results, and then scale based on proven ROI."
    },
    {
      question: "Do I need to replace my existing tools to use your AI agents?",
      answer: "No. Our AI agents are designed to plug into your existing tools and workflows. They connect to your CRM, helpdesk, telephony systems, and internal tools without requiring you to replace your current infrastructure. This ensures a smooth integration and minimal disruption to your operations."
    },
    {
      question: "Which workflows can CognixAI Labs automate?",
      answer: "We build AI agents for sales operations (lead qualification, follow-ups, appointment booking), customer support (ticket routing, initial responses, escalation), and back-office workflows (data entry, reporting, system updates). Our agents integrate with your CRM, helpdesk, telephony, and internal tools to create end-to-end automation across your operations."
    },
    {
      question: "Who is CognixAI Labs a good fit for?",
      answer: "We work with founders and COOs of growing SMBs and mid-market companies, heads of Operations and Customer Experience (CX), and Sales and RevOps leaders running large lead or ticket volumes. We initially focus on India and global English-speaking markets, helping companies automate repetitive operations to scale without adding headcount."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <OrganizationSchema />
      <FaqSchema items={faqItems} />
      <SeoFaqSchema items={faqItems} />
      <Navbar />
      <main>
        <HeroSection />
        <div className="section-gradient-separator" />
        <FoundationalSection />
        <div className="section-gradient-separator-bottom" />
        <ProductSection />
        <BuildSection />
        <IndustriesSection />
        <AIBenefitsSection />
        <InsightsSection />
        <CTASection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
