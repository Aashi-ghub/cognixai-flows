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
  Layout,
  CheckCircle2
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
    description: "Eliminate repetitive manual tasks across campaigns, sales, and operations. We design automations for data entry, approvals, reporting, and notifications—so your team spends less time on routine work and more on results.",
    highlight: "Eliminate 90% of Manual Work",
    features: [
      "CRM and sales pipeline sync",
      "Scheduled email/campaign automation",
      "Real-time data extraction and update bots",
      "Integration with Zapier, Make, n8n, and custom APIs"
    ],
    examples: ["Data entry automation", "Approval workflows", "Report generation"],
    platforms: ["Gmail / Microsoft 365", "HubSpot / Salesforce", "Slack / Teams"],
    industries: ["Agencies and B2B Services", "E‑commerce and Retail", "Startups and SMBs"],
  },
  {
    icon: BarChart3,
    title: "AI-Driven Reporting & Analytics",
    description: "Transform raw data into actionable insights. Our AI-powered pipelines automate report creation, consolidate data across platforms, and deliver smart dashboards—helping you track KPIs and identify opportunities instantly.",
    highlight: "Turn Data Into Insights Instantly",
    features: [
      "Automated cross-platform reports",
      "Smart alerting and anomaly detection",
      "Custom interactive dashboards",
      "Data visualization and export"
    ],
    examples: ["KPI dashboards", "Anomaly detection", "Cross-platform analytics"],
    platforms: ["BigQuery / Snowflake / PostgreSQL", "Looker / Power BI / Metabase", "Segment / GA4"],
    industries: ["Marketing and Growth", "Product and Operations", "E‑commerce and Retail"],
  },
  {
    icon: MessageSquare,
    title: "Chatbot Solutions",
    description: "Increase engagement and automate customer conversations. We build chatbots for websites, CRMs, and messaging apps to qualify leads, answer FAQs, and provide instant support—24/7.",
    highlight: "Automate Your Lead Conversations",
    features: [
      "AI chatbot setup (OpenAI, Dialogflow, Rasa, etc.)",
      "Lead qualification and scheduling",
      "Support and onboarding flows",
      "Custom integration with existing tools"
    ],
    examples: ["Lead qualification", "FAQ automation", "Support chatbots"],
    platforms: ["Web / WhatsApp / Messenger", "HubSpot / Intercom / Zendesk", "Slack / Teams"],
    industries: ["Agencies", "Customer Support", "SaaS and B2B"],
  },
  {
    icon: Lightbulb,
    title: "Consulting & Automation Strategy",
    description: "Not sure where to start? Our experts audit your workflows, uncover automation gaps, and map an ROI-focused plan using industry best practices.",
    highlight: "Get Your Free Automation Roadmap",
    features: [
      "Automation opportunity assessment",
      "Workflow audits and process mapping",
      "Implementation roadmaps",
      "Proof-of-concept demos"
    ],
    examples: ["Process audits", "ROI analysis", "Implementation planning"],
    platforms: ["OpenAI / Anthropic / Azure AI", "LangChain / LlamaIndex", "Vector DBs (Pinecone, pgvector)"],
    industries: ["SaaS and B2B", "Consumer Apps", "Enterprise IT"],
  },
  {
    icon: Cpu,
    title: "AI-Powered IoT Solutions",
    description: "Connect and automate industrial systems with AI-powered IoT solutions, PLC programming, and Energy Management Systems (EMS). We design, program, and deploy intelligent IoT solutions that leverage AI for real-time monitoring, predictive analytics, control, and optimization of manufacturing processes and energy consumption.",
    highlight: "Optimize Your Systems With AI IoT",
    features: [
      "AI-powered IoT solutions and intelligent automation",
      "PLC programming and integration (Siemens, Allen-Bradley, etc.)",
      "Energy Management Systems (EMS) design and implementation",
      "Sensor networks and data acquisition systems",
      "Real-time monitoring dashboards and SCADA systems",
      "Predictive maintenance and AI-driven analytics"
    ],
    technologies: ["PLCs (Siemens, Allen-Bradley)", "EMS & Smart Meters", "IoT Sensors & Gateways", "SCADA Systems", "MQTT / Modbus / OPC-UA"],
    industries: ["Manufacturing", "Energy & Utilities", "Smart Buildings", "Agriculture & Smart Farming"],
  },
  {
    icon: Database,
    title: "ERP & CRM Development",
    description: "Build custom Enterprise Resource Planning (ERP) and Customer Relationship Management (CRM) systems tailored to your business needs. We develop comprehensive solutions that streamline operations, improve customer relationships, and provide real-time insights across your organization.",
    highlight: "Build a Custom ERP/CRM for Your Team",
    features: [
      "Custom ERP system development and integration",
      "CRM platform design and implementation",
      "Multi-module business management systems",
      "Data migration and system integration",
      "User training and ongoing support"
    ],
    capabilities: ["Inventory Management", "Sales & Order Processing", "Financial Management", "HR & Payroll Systems", "Reporting & Analytics"],
    industries: ["Manufacturing", "Retail & E-commerce", "Professional Services", "Healthcare"],
  },
  {
    icon: Layout,
    title: "Landing Pages & Conversion Optimization",
    description: "Build high-converting landing pages using proven frameworks and conversion optimization techniques. We create fast, mobile-first pages that turn visitors into customers with strategic design, persuasive copywriting, and data-driven optimization.",
    highlight: "Boost Your Page Conversions",
    features: [
      "Conversion-focused landing page design",
      "A/B testing and conversion rate optimization (CRO)",
      "SEO-optimized, fast-loading pages",
      "Analytics integration and performance tracking",
      "Proven frameworks (Unbounce, Instapage, custom builds)"
    ],
    techniques: ["Conversion-Focused Design", "Persuasive Copywriting", "Social Proof & Testimonials", "Mobile-First Approach", "Speed & Performance"],
    useCases: ["Lead Generation", "Product Launches", "Sales Funnels", "E-commerce", "Event Registration"],
  },
];

const Services = () => {
  const { openPopup } = useContactPopup();

  const handleConsultationClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.15] mb-6">
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
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="space-y-32">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
                >
                  {/* Left Column - Content */}
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="icon-sarvam">
                        <service.icon className="w-6 h-6 text-foreground" />
                      </div>
                      <h2 className="text-3xl md:text-4xl lg:text-5xl text-foreground leading-[1.1]">
                        {service.title}
                      </h2>
                    </div>
                    
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {service.highlight && (
                      <div className="mb-6">
                        <span className="text-base font-semibold text-primary">
                          {service.highlight}
                        </span>
                      </div>
                    )}

                    {/* Features */}
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right Column - Details */}
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <div className="foundational-card">
                      <div className="card-dots" />
                      
                      {/* Examples, Platforms, Industries */}
                      {service.examples && (
                        <div className="mb-6">
                          <h4 className="text-xs font-medium tracking-widest text-muted-foreground uppercase mb-3">
                            Examples
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {service.examples.map((example) => (
                              <span
                                key={example}
                                className="px-3 py-1.5 text-xs bg-secondary border border-border rounded-full text-foreground"
                              >
                                {example}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {service.platforms && (
                        <div className="mb-6">
                          <h4 className="text-xs font-medium tracking-widest text-muted-foreground uppercase mb-3">
                            Platforms
                          </h4>
                          <div className="space-y-2">
                            {service.platforms.map((platform) => (
                              <div
                                key={platform}
                                className="text-sm text-foreground"
                              >
                                {platform}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {service.technologies && (
                        <div className="mb-6">
                          <h4 className="text-xs font-medium tracking-widest text-muted-foreground uppercase mb-3">
                            Technologies
                          </h4>
                          <div className="space-y-2">
                            {service.technologies.map((tech) => (
                              <div
                                key={tech}
                                className="text-sm text-foreground"
                              >
                                {tech}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {service.capabilities && (
                        <div className="mb-6">
                          <h4 className="text-xs font-medium tracking-widest text-muted-foreground uppercase mb-3">
                            Capabilities
                          </h4>
                          <div className="space-y-2">
                            {service.capabilities.map((capability) => (
                              <div
                                key={capability}
                                className="text-sm text-foreground"
                              >
                                {capability}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {service.techniques && (
                        <div className="mb-6">
                          <h4 className="text-xs font-medium tracking-widest text-muted-foreground uppercase mb-3">
                            Techniques
                          </h4>
                          <div className="space-y-2">
                            {service.techniques.map((technique) => (
                              <div
                                key={technique}
                                className="text-sm text-foreground"
                              >
                                {technique}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {service.useCases && (
                        <div className="mb-6">
                          <h4 className="text-xs font-medium tracking-widest text-muted-foreground uppercase mb-3">
                            Use Cases
                          </h4>
                          <div className="space-y-2">
                            {service.useCases.map((useCase) => (
                              <div
                                key={useCase}
                                className="text-sm text-foreground"
                              >
                                {useCase}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {service.industries && (
                        <div>
                          <h4 className="text-xs font-medium tracking-widest text-muted-foreground uppercase mb-3">
                            Industries
                          </h4>
                          <div className="space-y-2">
                            {service.industries.map((industry) => (
                              <div
                                key={industry}
                                className="text-sm text-foreground"
                              >
                                {industry}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
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

export default Services;
