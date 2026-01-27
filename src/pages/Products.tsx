import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { CTASection } from "@/components/landing/CTASection";
import { motion } from "framer-motion";
import { Phone, Workflow, BarChart3, Zap, Shield, Globe, Calendar, Users, FileText, TrendingUp, MessageSquare, CheckCircle } from "lucide-react";

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
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-32 lg:pt-40 lg:pb-40 overflow-hidden">
          {/* Warm gradient background */}
          <div 
            className="absolute inset-0 z-0"
            style={{
              background: 'linear-gradient(180deg, hsl(20 60% 92%) 0%, hsl(35 30% 94%) 50%, hsl(var(--background)) 100%)'
            }}
          />
          
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
                  className="inline-flex items-center justify-center px-10 py-4 bg-transparent text-foreground text-sm font-medium tracking-wide rounded-lg border-2 border-foreground hover:bg-foreground hover:text-background transition-all duration-300"
                >
                  EXPLORE PRODUCTS
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>
        
        {/* Detailed Product Sections */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="space-y-24">
              {products.map((product, index) => (
                <motion.div
                  key={product.id}
                  id={product.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="scroll-mt-24"
                >
                  <div className="max-w-5xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                      <span className="text-xs font-medium tracking-widest text-primary uppercase mb-4 block">
                        {product.tagline}
                      </span>
                      <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground mb-4">
                        {product.title}
                      </h2>
                      {product.highlight && (
                        <p className="text-lg font-medium text-primary mb-4">
                          {product.highlight}
                        </p>
                      )}
                      <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        {product.description}
                      </p>
                    </div>

                    {/* Image and Features Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                      {/* Image */}
                      <div className="order-2 lg:order-1">
                        <div className="relative rounded-2xl overflow-hidden border-2 border-foreground aspect-[4/3]">
                          <img
                            src={product.image}
                            alt={product.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>

                      {/* Features */}
                      <div className="order-1 lg:order-2">
                        <h3 className="text-xl font-serif text-foreground mb-6">
                          Key Features
                        </h3>
                        <div className="space-y-4">
                          {product.features.map((feature) => (
                            <div
                              key={feature.label}
                              className="flex items-start gap-4 p-4 rounded-lg bg-background border border-border hover:border-primary transition-colors"
                            >
                              <div className="p-2 rounded-lg bg-primary/10">
                                <feature.icon className="w-5 h-5 text-primary" />
                              </div>
                              <div>
                                <h4 className="font-medium text-foreground mb-1">
                                  {feature.label}
                                </h4>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
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
