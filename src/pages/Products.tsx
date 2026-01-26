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
        <section className="pt-44 pb-20 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.15] mb-6">
                Our Products
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A comprehensive suite of AI-powered tools designed to transform how enterprises handle voice communications and workflow automation.
              </p>
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
