import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { CTASection } from "@/components/landing/CTASection";
import { motion } from "framer-motion";
import { Phone, Workflow, BarChart3, Zap, Shield, Globe } from "lucide-react";

import productVoiceAgent from "@/assets/product-voice-agent.png";
import productOrchestrator from "@/assets/product-orchestrator.png";
import productInsights from "@/assets/product-insights.png";

const products = [
  {
    id: "voice-agent",
    title: "Voice Agent",
    tagline: "AI-Powered Conversations",
    description: "Deploy intelligent voice agents that handle customer calls with human-like understanding. Our agents support multiple languages and dialects, providing 24/7 availability for support, sales, and collections.",
    image: productVoiceAgent,
    features: [
      { icon: Phone, label: "Natural Conversations" },
      { icon: Globe, label: "Multi-language Support" },
      { icon: Zap, label: "Real-time Processing" },
    ],
  },
  {
    id: "orchestrator",
    title: "Orchestrator",
    tagline: "Workflow Intelligence",
    description: "Seamlessly connect your voice agents with existing business systems. Deep integrations with leading ERPs and CRMs ensure your automation works within your established workflows.",
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

        {/* Products Detail Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="space-y-32">
              {products.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Image */}
                  <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                    <div className="relative rounded-2xl overflow-hidden border-3 border-foreground aspect-[4/3]">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <span className="text-xs font-medium tracking-widest text-primary uppercase mb-4 block">
                      {product.tagline}
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl text-foreground leading-[1.1] mb-6">
                      {product.title}
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-4 mb-8">
                      {product.features.map((feature) => (
                        <div
                          key={feature.label}
                          className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border"
                        >
                          <feature.icon className="w-4 h-4 text-primary" />
                          <span className="text-sm font-medium text-foreground">
                            {feature.label}
                          </span>
                        </div>
                      ))}
                    </div>

                    <a
                      href="#"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                    >
                      Learn More
                    </a>
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
