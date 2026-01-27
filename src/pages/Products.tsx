import { useEffect } from "react";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { CTASection } from "@/components/landing/CTASection";
import { motion } from "framer-motion";
import { Phone, Workflow, BarChart3, Zap, Shield, Globe, Calendar, Users, FileText, TrendingUp, MessageSquare, CheckCircle } from "lucide-react";
import { useContactPopup } from "@/contexts/ContactPopupContext";

import productVoiceAgent from "@/assets/product-voice-agent.png";
import productOrchestrator from "@/assets/product-orchestrator.png";
import productInsights from "@/assets/product-insights.png";

const products = [
  {
    id: "call-agent",
    title: "Call Agent",
    tagline: "Launch AI Call Agent",
    description: "Automate outbound and inbound calls with human-like voice AI. Handles scheduling, reminders, lead qualification, and feedback collection.",
    highlight: "Human-like voice. Instant scheduling. CRM sync.",
    image: productVoiceAgent,
    features: [
      { icon: Phone, label: "Human-like Voice" },
      { icon: Calendar, label: "Instant Scheduling" },
      { icon: Workflow, label: "CRM Sync" },
    ],
  },
  {
    id: "hiring-agent",
    title: "Hiring Agent",
    tagline: "Cut Screening Time by 70%",
    description: "AI-driven recruiter that screens, evaluates, and shortlists candidates automatically. Reads resumes, ranks talent, and conducts structured pre-screening interviews.",
    highlight: "Resume parsing, ranking, structured pre-screens—built for ATS",
    image: productOrchestrator,
    features: [
      { icon: FileText, label: "Resume Parsing" },
      { icon: TrendingUp, label: "Talent Ranking" },
      { icon: Users, label: "Structured Pre-screens" },
    ],
  },
  {
    id: "autoquote-ai",
    title: "AutoQuote AI",
    tagline: "Generate Quotes in Seconds",
    description: "Automate quote generation from inquiries, instantly and accurately. Extracts customer requirements, applies pricing logic, and generates ready-to-send quotes in seconds.",
    highlight: "Extracts requirements, applies pricing logic, ready to send",
    image: productInsights,
    features: [
      { icon: Zap, label: "Instant Generation" },
      { icon: FileText, label: "Requirement Extraction" },
      { icon: CheckCircle, label: "Ready to Send" },
    ],
  },
  {
    id: "sales-agent",
    title: "Sales Agent",
    tagline: "Automate Follow-ups & Bookings",
    description: "Your AI-powered closer that engages leads, follows up, and books meetings automatically. Personalizes outreach, nurtures prospects, and syncs updates directly into your CRM.",
    highlight: "Personalized outreach, multi-touch nurture, CRM updates",
    image: productVoiceAgent,
    features: [
      { icon: MessageSquare, label: "Personalized Outreach" },
      { icon: TrendingUp, label: "Multi-touch Nurture" },
      { icon: Workflow, label: "CRM Updates" },
    ],
  },
  {
    id: "orchestrator",
    title: "Orchestrator",
    tagline: "Workflow Intelligence",
    description: "Seamlessly connect your voice agents with existing business systems. Deep integrations with leading ERPs and CRMs ensure your automation works within your established workflows.",
    highlight: "ERP Integration, Enterprise Security, Real-time Sync",
    image: productOrchestrator,
    features: [
      { icon: Workflow, label: "ERP Integration" },
      { icon: Shield, label: "Enterprise Security" },
      { icon: Zap, label: "Real-time Sync" },
    ],
  },
  {
    id: "insights",
    title: "Insights",
    tagline: "Analytics & Intelligence",
    description: "Gain deep visibility into every customer interaction. Our analytics platform provides actionable insights to optimize agent performance, identify trends, and drive business decisions.",
    highlight: "Real-time Analytics, Automated Reports, Data Security",
    image: productInsights,
    features: [
      { icon: BarChart3, label: "Real-time Analytics" },
      { icon: Zap, label: "Automated Reports" },
      { icon: Shield, label: "Data Security" },
    ],
  },
];

const Products = () => {
  const { openPopup } = useContactPopup();

  useEffect(() => {
    const handleOpenPopup = () => openPopup();
    document.addEventListener('open-contact-popup', handleOpenPopup);
    return () => document.removeEventListener('open-contact-popup', handleOpenPopup);
  }, [openPopup]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-32 lg:pt-40 lg:pb-40 bg-background overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-5xl mx-auto text-center"
            >
              {/* Small badge */}
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="inline-block text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase mb-8"
              >
                ✦ AI-Powered Enterprise Solutions ✦
              </motion.span>
              
              {/* Large serif headline */}
              <h1 
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-foreground leading-[1.1] mb-8"
                style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
              >
                Enterprise AI Agents, Built
                <br />
                To Work Like Humans
              </h1>
              
              {/* Description */}
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12">
                Deploy production-grade AI agents that work round the clock,
                automate every workflow, and integrate seamlessly with your
                existing enterprise systems.
              </p>
              
              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <a 
                  href="#call-agent"
                  className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium tracking-wide rounded-md border-2 border-primary text-primary hover:text-white transition-all duration-300"
                  style={{
                    background: 'linear-gradient(135deg, transparent 0%, transparent 100%)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(142 40% 35%) 100%)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, transparent 0%, transparent 100%)';
                  }}
                >
                  EXPLORE PRODUCTS
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>
        
        {/* Detailed Product Sections */}
        <section className="py-16 md:py-20 lg:py-24" style={{ backgroundColor: '#d3dad1' }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-20 md:space-y-28 lg:space-y-32">
              {products.map((product, index) => {
                const isEven = index % 2 === 0;
                return (
                  <motion.div
                    key={product.id}
                    id={product.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="scroll-mt-24"
                  >
                    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center`}>
                      {/* Image Side */}
                      <div className={`${isEven ? 'order-1' : 'order-1 lg:order-2'}`}>
                        <div className="relative rounded-2xl overflow-hidden border border-border aspect-[4/3] shadow-lg bg-white">
                          <img
                            src={product.image}
                            alt={product.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>

                      {/* Content Side */}
                      <div className={`${isEven ? 'order-2' : 'order-2 lg:order-1'}`}>
                        {/* Tagline */}
                        <span className="text-xs font-medium tracking-widest text-primary uppercase mb-3 md:mb-4 block">
                          {product.tagline}
                        </span>
                        
                        {/* Title */}
                        <h2 
                          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 md:mb-6 leading-tight"
                          style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
                        >
                          {product.title}
                        </h2>
                        
                        {/* Description */}
                        <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6 md:mb-8">
                          {product.description}
                        </p>
                        
                        {/* Features - Horizontal with bullets */}
                        <div className="flex flex-wrap items-center gap-x-2 gap-y-2 text-sm text-foreground mb-6 md:mb-8">
                          {product.features.map((feature, featureIndex) => (
                            <span key={feature.label} className="flex items-center gap-2">
                              {featureIndex > 0 && (
                                <span className="text-primary text-lg">·</span>
                              )}
                              <span className="font-medium">{feature.label}</span>
                            </span>
                          ))}
                        </div>
                        
                        {/* Request Demo Button */}
                        <a 
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            // Will trigger contact popup
                            document.dispatchEvent(new CustomEvent('open-contact-popup'));
                          }}
                          className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium tracking-wide rounded-md text-white transition-all duration-300 hover:opacity-90 hover:shadow-lg"
                          style={{
                            background: 'linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(142 40% 35%) 100%)',
                          }}
                        >
                          Request Demo
                        </a>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Products;
