import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { CTASection } from "@/components/landing/CTASection";
import { motion } from "framer-motion";
import { useContactPopup } from "@/contexts/ContactPopupContext";
import { 
  Workflow, 
  BarChart3, 
  MessageSquare, 
  Lightbulb, 
  Cpu, 
  Database, 
  Layout
} from "lucide-react";

const stats = [
  { value: "7+", label: "Core Service Lines" },
  { value: "200+", label: "Automations Shipped" },
  { value: "40%", label: "Avg. Cost Reduction" },
  { value: "6–8 wks", label: "Typical Delivery" },
];

const services = [
  {
    icon: Workflow,
    title: "Workflow Automation",
    tagline: "Eliminate 90% of Manual Work",
    description: "Eliminate repetitive manual tasks across campaigns, sales, and operations. We design automations for data entry, approvals, reporting, and notifications—so your team spends less time on routine work and more on results.",
    features: ["CRM & Pipeline Sync", "Email Automation", "Custom API Integration"],
  },
  {
    icon: BarChart3,
    title: "AI-Driven Reporting & Analytics",
    tagline: "Turn Data Into Insights Instantly",
    description: "Transform raw data into actionable insights. Our AI-powered pipelines automate report creation, consolidate data across platforms, and deliver smart dashboards—helping you track KPIs and identify opportunities instantly.",
    features: ["Cross-platform Reports", "Anomaly Detection", "Interactive Dashboards"],
  },
  {
    icon: MessageSquare,
    title: "Chatbot Solutions",
    tagline: "Automate Your Lead Conversations",
    description: "Increase engagement and automate customer conversations. We build chatbots for websites, CRMs, and messaging apps to qualify leads, answer FAQs, and provide instant support—24/7.",
    features: ["Lead Qualification", "FAQ Automation", "Multi-platform Support"],
  },
  {
    icon: Lightbulb,
    title: "Consulting & Automation Strategy",
    tagline: "Get Your Free Automation Roadmap",
    description: "Not sure where to start? Our experts audit your workflows, uncover automation gaps, and map an ROI-focused plan using industry best practices.",
    features: ["Process Audits", "ROI Analysis", "Implementation Planning"],
  },
  {
    icon: Cpu,
    title: "AI-Powered IoT Solutions",
    tagline: "Optimize Your Systems With AI IoT",
    description: "Connect and automate industrial systems with AI-powered IoT solutions, PLC programming, and Energy Management Systems (EMS). We design, program, and deploy intelligent IoT solutions that leverage AI for real-time monitoring, predictive analytics, control, and optimization.",
    features: ["PLC Integration", "Energy Management", "Predictive Analytics"],
  },
  {
    icon: Database,
    title: "ERP & CRM Development",
    tagline: "Build a Custom ERP/CRM for Your Team",
    description: "Build custom Enterprise Resource Planning (ERP) and Customer Relationship Management (CRM) systems tailored to your business needs. We develop comprehensive solutions that streamline operations, improve customer relationships, and provide real-time insights.",
    features: ["Custom Development", "Data Migration", "System Integration"],
  },
  {
    icon: Layout,
    title: "Landing Pages & Conversion Optimization",
    tagline: "Boost Your Page Conversions",
    description: "Build high-converting landing pages using proven frameworks and conversion optimization techniques. We create fast, mobile-first pages that turn visitors into customers with strategic design, persuasive copywriting, and data-driven optimization.",
    features: ["Conversion-Focused Design", "A/B Testing", "SEO Optimization"],
  },
];

const Services = () => {
  const { openPopup } = useContactPopup();

  const handleConsultationClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    openPopup();
  };

  const handleDemoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    openPopup();
  };

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
              className="max-w-4xl mx-auto text-center"
            >
              <h1 
                className="text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.15] mb-6"
                style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
              >
                Our Services
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Bespoke AI Automation for Agencies & Businesses
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                CognixAI Labs delivers tailor-made automation solutions to help marketing agencies, startups, and business teams scale faster, reduce manual workload, and unlock new growth. We blend the speed of AI with proven consulting to accelerate your operations.
              </p>
              <a
                href="#"
                onClick={handleConsultationClick}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Book Free Consultation
              </a>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-card border-y border-border">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-serif text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Detail Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="space-y-20 md:space-y-32">
              {services.map((service, index) => {
                const isEven = index % 2 === 0;
                const ServiceIcon = service.icon;
                
                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="scroll-mt-24"
                  >
                    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center`}>
                      {/* Icon Side */}
                      <div className={`${isEven ? 'order-1' : 'order-1 lg:order-2'}`}>
                        <div className="flex items-center justify-center aspect-square max-w-md mx-auto bg-secondary/30 rounded-2xl md:rounded-3xl border border-border">
                          <ServiceIcon className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 text-primary/60" strokeWidth={1} />
                        </div>
                      </div>

                      {/* Content Side */}
                      <div className={`${isEven ? 'order-2' : 'order-2 lg:order-1'}`}>
                        {/* Tagline */}
                        <span className="text-xs font-medium tracking-widest text-primary uppercase mb-3 md:mb-4 block">
                          {service.tagline}
                        </span>
                        
                        {/* Title */}
                        <h2 
                          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 md:mb-6 leading-tight"
                          style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
                        >
                          {service.title}
                        </h2>
                        
                        {/* Description */}
                        <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                          {service.description}
                        </p>
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

export default Services;
