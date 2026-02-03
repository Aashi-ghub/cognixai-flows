import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { motion } from "framer-motion";
import { useContactPopup } from "@/contexts/ContactPopupContext";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Linkedin, ArrowRight, MapPin, Sparkles } from "lucide-react";
import { useEffect } from "react";
import { OrganizationSchema } from "@/components/SeoSchemas";

const About = () => {
  const { openPopup } = useContactPopup();

  // Add JSON-LD structured data
  useEffect(() => {
    // Organization schema
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "CognixAI Labs",
      "alternateName": "CognixAI Labs automation studio",
      "url": "https://www.cognixai.com",
      "logo": "https://www.cognixai.com/favicon-dark.png",
      "description": "CognixAI Labs builds custom AI agents that automate 80–90% of repetitive business operations so teams close more deals, resolve tickets faster, and run on autopilot.",
      "foundingDate": "2025",
      "founder": [
        {
          "@type": "Person",
          "name": "Gaurav Singh",
          "sameAs": "https://www.linkedin.com/in/gaurav-singh-5392a7272/"
        },
        {
          "@type": "Person",
          "name": "Aashi Raghuwanshi",
          "sameAs": "https://www.linkedin.com/in/aashi-raghuwanshi/"
        }
      ],
      "sameAs": [
        "https://www.linkedin.com/company/cognixai-labs"
      ]
    };

    // Person schemas for founders
    const gauravSchema = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Gaurav Singh",
      "jobTitle": "Founder",
      "worksFor": {
        "@type": "Organization",
        "name": "CognixAI Labs"
      },
      "sameAs": "https://www.linkedin.com/in/gaurav-singh-5392a7272/"
    };

    const aashiSchema = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Aashi Raghuwanshi",
      "jobTitle": "Founder",
      "worksFor": {
        "@type": "Organization",
        "name": "CognixAI Labs"
      },
      "sameAs": "https://www.linkedin.com/in/aashi-raghuwanshi/"
    };

    // Create and inject script tags
    const orgScript = document.createElement("script");
    orgScript.type = "application/ld+json";
    orgScript.text = JSON.stringify(organizationSchema);
    orgScript.id = "organization-schema";

    const gauravScript = document.createElement("script");
    gauravScript.type = "application/ld+json";
    gauravScript.text = JSON.stringify(gauravSchema);
    gauravScript.id = "gaurav-schema";

    const aashiScript = document.createElement("script");
    aashiScript.type = "application/ld+json";
    aashiScript.text = JSON.stringify(aashiSchema);
    aashiScript.id = "aashi-schema";

    // Remove existing scripts if they exist
    const existingOrg = document.getElementById("organization-schema");
    const existingGaurav = document.getElementById("gaurav-schema");
    const existingAashi = document.getElementById("aashi-schema");
    
    if (existingOrg) existingOrg.remove();
    if (existingGaurav) existingGaurav.remove();
    if (existingAashi) existingAashi.remove();

    // Append to head
    document.head.appendChild(orgScript);
    document.head.appendChild(gauravScript);
    document.head.appendChild(aashiScript);

    // Cleanup
    return () => {
      const org = document.getElementById("organization-schema");
      const gaurav = document.getElementById("gaurav-schema");
      const aashi = document.getElementById("aashi-schema");
      if (org) org.remove();
      if (gaurav) gaurav.remove();
      if (aashi) aashi.remove();
    };
  }, []);

  const faqs = [
    {
      question: "What are AI agents and how do they automate business operations?",
      answer: "AI agents are intelligent systems that connect to your existing tools (CRM, helpdesk, telephony, etc.) and handle repetitive tasks autonomously. Our custom AI agents automate 80–90% of manual work such as lead qualification, follow-ups, ticket triage, and routine reporting, allowing your team to focus on high-value decisions instead of busywork."
    },
    {
      question: "What types of workflows can CognixAI Labs automate?",
      answer: "We build AI agents for sales operations (lead qualification, follow-ups, appointment booking), customer support (ticket routing, initial responses, escalation), and back-office workflows (data entry, reporting, system updates). Our agents integrate with your CRM, helpdesk, telephony, and internal tools to create end-to-end automation across your operations."
    },
    {
      question: "How long does it take to deploy AI agents?",
      answer: "Deployment timelines vary based on complexity, but we typically deliver focused pilots in 6–8 weeks. We start with one workflow to automate, demonstrate results, and then scale based on proven ROI. For comprehensive automation strategies, we work with you to create a custom roadmap and deployment plan."
    },
    {
      question: "Do I need to replace my existing tools to use your AI agents?",
      answer: "No. Our AI agents are designed to plug into your existing tools and workflows. They connect to your CRM, helpdesk, telephony systems, and internal tools without requiring you to replace your current infrastructure. This ensures a smooth integration and minimal disruption to your operations."
    },
    {
      question: "What kind of companies does CognixAI Labs serve?",
      answer: "We work with founders and COOs of growing SMBs and mid-market companies, heads of Operations and Customer Experience (CX), and Sales and RevOps leaders running large lead or ticket volumes. We initially focus on India and global English-speaking markets, helping companies automate repetitive operations to scale without adding headcount."
    },
    {
      question: "What results can I expect from AI automation?",
      answer: "Our clients typically see automation of 80–90% of repetitive manual work, reduced handling time and errors in operations, faster turnaround time (TAT) for sales and support, increased revenue without adding headcount, and always-on, autonomous operations. The exact results depend on your specific workflows and use cases."
    },
    {
      question: "How do you ensure the AI agents work correctly?",
      answer: "We design, deploy, and maintain AI agents with rigorous testing and monitoring. Our agents are built to handle edge cases, learn from interactions, and improve over time. We provide ongoing maintenance and support to ensure your automation runs smoothly and adapts to your evolving business needs."
    },
    {
      question: "What makes CognixAI Labs different from other automation providers?",
      answer: "We don't sell off-the-shelf tools. We build custom AI agents tailored to how your business actually works. Our agents are designed to take over repetitive operational work end-to-end, connecting seamlessly with your existing systems. We focus on outcomes: faster turnaround times, fewer errors, and leaner operations without adding headcount."
    }
  ];

  const founders = [
    {
      name: "Gaurav Singh",
      role: "Founder",
      linkedin: "https://www.linkedin.com/in/gaurav-singh-5392a7272/",
      image: "/gaurav-profilepic.png",
      bio: "Gaurav Singh is a Founder of CognixAI Labs, focused on building AI automation solutions that transform how businesses operate. With expertise in AI agents and business operations, he leads the development of custom automation systems for SMBs and mid-market companies."
    },
    {
      name: "Aashi Raghuwanshi",
      role: "Founder",
      linkedin: "https://www.linkedin.com/in/aashi-raghuwanshi/",
      image: "/aashi-profilepic.png",
      bio: "Aashi Raghuwanshi is a Founder of CognixAI Labs, specializing in AI-driven workflow automation and process orchestration. She works with growing companies to deploy AI agents that automate repetitive operations and scale business efficiency."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <OrganizationSchema />
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
          {/* Subtle background gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/95 pointer-events-none"></div>
          
          <div className="container mx-auto px-4 max-w-5xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-card/30 backdrop-blur-sm mb-8"
              >
                <Sparkles className="w-3.5 h-3.5 text-primary" />
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  About Us
                </span>
              </motion.div>

              <h1 
                className="text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.05] mb-12 text-foreground"
                style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
              >
                We are building AI to automate business operations through intelligent agents.
              </h1>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <button
                  onClick={openPopup}
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg text-sm font-medium bg-foreground text-background hover:bg-foreground/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02]"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <a
                  href="#careers"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg text-sm font-medium border-2 border-border bg-background hover:bg-secondary/30 transition-all duration-300 hover:border-primary/30"
                >
                  View Careers
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="relative py-20 md:py-32 border-y border-border/50">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/5 to-transparent"></div>
          
          <div className="container mx-auto px-4 max-w-4xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-8"
            >
              <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed font-light">
                CognixAI Labs was founded by Gaurav Singh and Aashi Raghuwanshi in 2025 and is based in India. We build custom AI agents that automate 80–90% of repetitive business operations for B2B companies, so teams can scale without adding headcount.
              </p>
              <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed font-light">
                Our agents connect to your CRM, helpdesk, telephony, and internal tools to handle lead qualification, follow-ups, ticket triage, and routine reporting. We bring expertise in AI automation, business operations, and workflow orchestration to help companies automate repetitive operations and focus on high-value work.
              </p>
              <div className="pt-8">
                <a
                  href="/blog/why-i-started-cognixai-labs"
                  className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-primary/30 bg-primary/5 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 text-base md:text-lg text-foreground font-medium"
                >
                  Read our full founder story
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 
                className="text-3xl md:text-4xl lg:text-5xl font-normal mb-10 text-foreground"
                style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
              >
                Our Approach
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-3xl font-light">
                We believe that AI agents are at the frontier of business automation. Generic automation tools alone won't solve the operational challenges of growing companies. Real progress requires agents that understand your specific workflows, integrate with your existing tools, and learn from your business context. Our custom AI agents offer the most clear path to autonomous operations that scale with your business.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Founders Section */}
        <section className="relative py-20 md:py-32 border-y border-border/50">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/5 to-transparent"></div>
          
          <div className="container mx-auto px-4 max-w-6xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 
                className="text-3xl md:text-4xl lg:text-5xl font-normal mb-16 text-foreground"
                style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
              >
                Our Founders
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-20">
                {founders.map((founder, index) => (
                  <motion.div
                    key={founder.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                    className="group"
                  >
                    <div className="space-y-6">
                      <div className="flex items-start gap-6">
                        <div className="relative">
                          <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-border group-hover:border-primary/50 transition-colors duration-300 shadow-lg group-hover:shadow-xl">
                            <img 
                              src={founder.image} 
                              alt={founder.name}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                          <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-primary/20 backdrop-blur-sm border-2 border-background flex items-center justify-center">
                            <Linkedin className="w-4 h-4 text-primary" />
                          </div>
                        </div>
                        <div className="flex-1 pt-3">
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          {founder.name}
                        </h3>
                        <p className="text-sm font-medium text-primary mb-5 uppercase tracking-wider">
                          {founder.role}
                        </p>
                        <a
                          href={founder.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group/link"
                        >
                          <Linkedin className="w-4 h-4 group-hover/link:scale-110 transition-transform" />
                          <span>Connect on LinkedIn</span>
                        </a>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                      {founder.bio}
                    </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Location */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-start gap-4 p-8 rounded-2xl border border-border/50 bg-card/20 hover:bg-card/30 transition-colors duration-300"
            >
              <div className="p-3 rounded-full bg-primary/10 border border-primary/20">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-lg md:text-xl text-foreground mb-2 font-medium">
                  We are based in India with a global focus.
                </p>
                <p className="text-muted-foreground text-base">
                  With team members working remotely from all over the world.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="relative py-20 md:py-32 border-y border-border/50" id="faq">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/5 to-transparent"></div>
          
          <div className="container mx-auto px-4 max-w-4xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 
                className="text-3xl md:text-4xl lg:text-5xl font-normal mb-16 text-foreground"
                style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
              >
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-1">
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                    >
                      <AccordionItem 
                        value={`item-${index}`} 
                        className="border-b border-border/50 py-5 group hover:bg-card/20 transition-colors duration-300 rounded-lg px-4 -mx-4"
                      >
                        <AccordionTrigger className="text-left text-base md:text-lg font-medium text-foreground hover:no-underline py-2 group-hover:text-primary transition-colors">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed pt-2 pb-4 text-base">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    </motion.div>
                  ))}
                </Accordion>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Careers Section */}
        <section className="py-20 md:py-32" id="careers">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 
                className="text-3xl md:text-4xl lg:text-5xl font-normal mb-12 text-foreground"
                style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
              >
                Open Roles
              </h2>
              <div className="p-8 rounded-2xl border-2 border-border/50 bg-card/20 hover:bg-card/30 hover:border-primary/30 transition-all duration-300 group">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      We're always looking for talented people
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Engineering, Product, Sales, Operations
                    </p>
                  </div>
                  <a
                    href="mailto:hello@cognixailabs.com"
                    className="group/btn inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg text-sm font-medium border-2 border-border bg-background hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02]"
                  >
                    Get in Touch
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-20 md:py-32 border-t border-border/50">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/5 to-transparent"></div>
          
          <div className="container mx-auto px-4 max-w-4xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-center"
            >
              <h2 
                className="text-3xl md:text-4xl lg:text-5xl font-normal mb-8 text-foreground"
                style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
              >
                Ready to automate your operations?
              </h2>
              <p className="text-base md:text-lg text-muted-foreground mb-10 max-w-2xl mx-auto font-light">
                Let's discuss how our AI agents can transform your business operations.
              </p>
              <button
                onClick={openPopup}
                className="group inline-flex items-center justify-center gap-2 px-10 py-5 rounded-lg text-sm font-medium bg-foreground text-background hover:bg-foreground/90 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-[1.02]"
              >
                Get Started
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
