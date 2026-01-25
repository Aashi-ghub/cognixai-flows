import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { CTASection } from "@/components/landing/CTASection";
import { motion } from "framer-motion";
import { Phone, Headphones, TrendingUp, Settings, Users, Shield, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Phone,
    title: "Voice AI Deployment",
    description: "End-to-end deployment of custom voice agents tailored to your business needs. From design to launch, we handle everything.",
    features: ["Custom Voice Design", "Multi-language Setup", "Integration Support", "Training & Handoff"],
  },
  {
    icon: Headphones,
    title: "Customer Support Automation",
    description: "Transform your support operations with AI agents that resolve queries instantly, 24/7, while maintaining the human touch.",
    features: ["24/7 Availability", "Ticket Resolution", "Escalation Workflows", "Satisfaction Tracking"],
  },
  {
    icon: TrendingUp,
    title: "Sales & Collections",
    description: "Boost revenue with AI-powered outbound calling. Automate lead qualification, follow-ups, and payment reminders.",
    features: ["Lead Qualification", "Payment Reminders", "Follow-up Sequences", "Performance Analytics"],
  },
  {
    icon: Settings,
    title: "System Integration",
    description: "Connect CognixAI with your existing tech stack. Deep integrations with leading ERPs, CRMs, and business tools.",
    features: ["ERP Integration", "CRM Sync", "API Development", "Data Migration"],
  },
  {
    icon: Users,
    title: "Managed Services",
    description: "Let our experts manage and optimize your voice AI operations. Focus on your business while we handle the technology.",
    features: ["Dedicated Support", "Performance Monitoring", "Continuous Optimization", "Monthly Reviews"],
  },
  {
    icon: Shield,
    title: "Enterprise Consulting",
    description: "Strategic guidance on implementing voice AI at scale. Our experts help you navigate the journey from pilot to production.",
    features: ["Strategy Planning", "ROI Analysis", "Change Management", "Compliance Advisory"],
  },
];

const processSteps = [
  { step: "01", title: "Discovery", description: "We understand your business needs and define success metrics." },
  { step: "02", title: "Design", description: "Our team designs custom voice flows and integrations." },
  { step: "03", title: "Deploy", description: "Seamless deployment with thorough testing and validation." },
  { step: "04", title: "Optimize", description: "Continuous monitoring and improvement based on real data." },
];

const Services = () => {
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
                Our Services
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From strategy to implementation, we partner with enterprises to transform their voice operations with AI-powered automation.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="foundational-card group hover:border-primary transition-colors"
                >
                  <div className="card-dots" />
                  
                  <div className="icon-sarvam mb-6">
                    <service.icon className="w-7 h-7 text-foreground" />
                  </div>

                  <h3 className="text-xl font-serif text-foreground mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="section-gradient-separator" />
        <section className="py-20 foundational-section-bg">
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
                Our Process
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A proven methodology to ensure successful voice AI implementation
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <span className="text-5xl font-serif text-primary/30 block mb-4">
                    {step.step}
                  </span>
                  <h3 className="text-xl font-serif text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {step.description}
                  </p>
                  {index < processSteps.length - 1 && (
                    <ArrowRight className="w-6 h-6 text-muted-foreground/30 mx-auto mt-6 hidden lg:block" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <section className="section-gradient-separator-bottom" />

        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
