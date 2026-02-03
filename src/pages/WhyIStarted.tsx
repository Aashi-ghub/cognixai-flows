import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { CTASection } from "@/components/landing/CTASection";
import { motion } from "framer-motion";
import { Linkedin, ArrowRight } from "lucide-react";
import { useContactPopup } from "@/contexts/ContactPopupContext";
import { useEffect } from "react";
import { FounderSchema } from "@/components/SeoSchemas";

const WhyIStarted = () => {
  const { openPopup } = useContactPopup();

  // Add metadata and JSON-LD structured data
  useEffect(() => {
    // Update document title and meta tags
    document.title = "Why I Started CognixAI Labs: Automating 80–90% of Operations with AI Agents | CognixAI Labs";
    
    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Gaurav Singh and Aashi Raghuwanshi, founders of CognixAI Labs, share the story behind building custom AI agents that automate 80–90% of repetitive business operations for SMBs and mid-market companies.');

    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://www.cognixai.com/blog/why-i-started-cognixai-labs');

    // Update Open Graph tags
    const updateOGTag = (property: string, content: string) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    updateOGTag('og:title', 'Why I Started CognixAI Labs: Automating 80–90% of Operations with AI Agents');
    updateOGTag('og:description', 'Gaurav Singh and Aashi Raghuwanshi, founders of CognixAI Labs, share the story behind building custom AI agents that automate 80–90% of repetitive business operations.');
    updateOGTag('og:type', 'article');
    updateOGTag('og:url', 'https://www.cognixai.com/blog/why-i-started-cognixai-labs');

    // Article schema with Person and Organization
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Why I Started CognixAI Labs: Automating 80–90% of Operations with AI Agents",
      "description": "Gaurav Singh and Aashi Raghuwanshi, founders of CognixAI Labs, share the story behind building custom AI agents that automate 80–90% of repetitive business operations for SMBs and mid-market companies.",
      "author": [
        {
          "@type": "Person",
          "name": "Gaurav Singh",
          "jobTitle": "Founder",
          "worksFor": {
            "@type": "Organization",
            "name": "CognixAI Labs"
          },
          "sameAs": "https://www.linkedin.com/in/gaurav-singh-5392a7272/"
        },
        {
          "@type": "Person",
          "name": "Aashi Raghuwanshi",
          "jobTitle": "Founder",
          "worksFor": {
            "@type": "Organization",
            "name": "CognixAI Labs"
          },
          "sameAs": "https://www.linkedin.com/in/aashi-raghuwanshi/"
        }
      ],
      "publisher": {
        "@type": "Organization",
        "name": "CognixAI Labs",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.cognixai.com/favicon-dark.png"
        }
      },
      "datePublished": "2025-01-01",
      "dateModified": "2025-01-01",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.cognixai.com/blog/why-i-started-cognixai-labs"
      }
    };

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
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "IN"
      }
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
    const articleScript = document.createElement("script");
    articleScript.type = "application/ld+json";
    articleScript.text = JSON.stringify(articleSchema);
    articleScript.id = "article-schema";

    const orgScript = document.createElement("script");
    orgScript.type = "application/ld+json";
    orgScript.text = JSON.stringify(organizationSchema);
    orgScript.id = "organization-schema-founder-story";

    const gauravScript = document.createElement("script");
    gauravScript.type = "application/ld+json";
    gauravScript.text = JSON.stringify(gauravSchema);
    gauravScript.id = "gaurav-schema-founder-story";

    const aashiScript = document.createElement("script");
    aashiScript.type = "application/ld+json";
    aashiScript.text = JSON.stringify(aashiSchema);
    aashiScript.id = "aashi-schema-founder-story";

    // Remove existing scripts if they exist
    const existingArticle = document.getElementById("article-schema");
    const existingOrg = document.getElementById("organization-schema-founder-story");
    const existingGaurav = document.getElementById("gaurav-schema-founder-story");
    const existingAashi = document.getElementById("aashi-schema-founder-story");
    
    if (existingArticle) existingArticle.remove();
    if (existingOrg) existingOrg.remove();
    if (existingGaurav) existingGaurav.remove();
    if (existingAashi) existingAashi.remove();

    // Append to head
    document.head.appendChild(articleScript);
    document.head.appendChild(orgScript);
    document.head.appendChild(gauravScript);
    document.head.appendChild(aashiScript);

    // Cleanup
    return () => {
      const article = document.getElementById("article-schema");
      const org = document.getElementById("organization-schema-founder-story");
      const gaurav = document.getElementById("gaurav-schema-founder-story");
      const aashi = document.getElementById("aashi-schema-founder-story");
      if (article) article.remove();
      if (org) org.remove();
      if (gaurav) gaurav.remove();
      if (aashi) aashi.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <FounderSchema
        name="Gaurav Singh"
        linkedinUrl="https://www.linkedin.com/in/gaurav-singh-5392a7272/"
      />
      <FounderSchema
        name="Aashi Raghuwanshi"
        linkedinUrl="https://www.linkedin.com/in/aashi-raghuwanshi/"
      />
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="pt-36 pb-16 border-b border-border/50">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[10px] md:text-xs font-semibold tracking-[0.25em] text-primary uppercase mb-6 opacity-90">
                Founder Story
              </p>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-normal leading-[1.2] mb-6 text-foreground" style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}>
                Why I Started CognixAI Labs: Automating 80–90% of Operations with AI Agents
              </h1>

              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
                <div className="flex items-center gap-2">
                  <span>Gaurav Singh & Aashi Raghuwanshi</span>
                </div>
                <span>•</span>
                <span>Founders</span>
                <span>•</span>
                <span>2025</span>
              </div>

              <p className="text-base md:text-lg text-muted-foreground max-w-3xl leading-relaxed">
                The story behind building custom AI agents that transform how businesses operate, scale, and compete.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.article
              className="prose prose-lg max-w-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Opening Paragraph with All Key Facts */}
              <div className="space-y-6 mb-12">
                <p className="text-lg md:text-xl leading-relaxed text-foreground font-light">
                  I'm <strong className="font-semibold text-foreground">Gaurav Singh</strong>, founder of CognixAI Labs, an AI automation studio based in <strong className="font-semibold text-foreground">India</strong>. Alongside <strong className="font-semibold text-foreground">Aashi Raghuwanshi</strong>, also a founder, we started CognixAI Labs in <strong className="font-semibold text-foreground">2025</strong> to build custom AI agents that automate 80–90% of repetitive operations work for SMBs and mid-market companies.
                </p>
                <p className="text-lg md:text-xl leading-relaxed text-foreground font-light">
                  Since 2025, we've been building custom AI agents that connect to CRM systems, helpdesks, telephony platforms, and internal tools to automate sales, support, and back-office workflows. Our agents handle lead qualification, follow-ups, ticket triage, routine reporting, and countless other repetitive tasks that consume hours of human time every day.
                </p>
              </div>

              {/* The Problem We Saw */}
              <div className="space-y-6 mb-12">
                <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4" style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}>
                  The Problem We Saw
                </h2>
                <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                  Before starting CognixAI Labs, we worked with dozens of growing companies that were drowning in repetitive work. Sales teams spent hours qualifying leads that could be automated. Support teams manually routed tickets that AI could handle instantly. Operations teams generated reports that could be produced automatically.
                </p>
                <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                  The pattern was always the same: talented people stuck doing busywork instead of high-value work. Companies were hiring more people to handle growth, but the real bottleneck wasn't headcount—it was the volume of repetitive tasks that humans shouldn't be doing.
                </p>
                <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                  We realized that generic automation tools weren't solving this. They required too much configuration, didn't integrate well with existing systems, and couldn't adapt to how each business actually worked. What companies needed were <strong className="text-foreground font-semibold">custom AI agents</strong>—intelligent systems built specifically for their workflows.
                </p>
              </div>

              {/* Why AI Agents */}
              <div className="space-y-6 mb-12">
                <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4" style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}>
                  Why AI Agents, Not Just Automation
                </h2>
                <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                  Traditional automation follows rigid rules. AI agents understand context, learn from interactions, and make decisions. They don't just execute tasks—they handle edge cases, adapt to new situations, and improve over time.
                </p>
                <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                  When we deploy an AI agent for lead qualification, it doesn't just ask the same questions to every lead. It adapts its approach based on the lead's responses, identifies high-intent prospects, and routes them appropriately. When we build an agent for ticket triage, it doesn't just categorize—it understands urgency, context, and can even resolve common issues autonomously.
                </p>
                <div className="my-8 py-6 px-6 md:px-10 border-l-4 border-primary bg-primary/5 rounded-r-lg">
                  <p className="text-lg md:text-xl font-semibold leading-relaxed text-foreground">
                    The difference between automation and AI agents is the difference between a script and a colleague who learns.
                  </p>
                </div>
              </div>

              {/* The 80–90% Promise */}
              <div className="space-y-6 mb-12">
                <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4" style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}>
                  The 80–90% Promise
                </h2>
                <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                  When we say our agents automate 80–90% of repetitive work, we're not being hyperbolic. We're being specific about what's possible when you build custom agents that understand your business.
                </p>
                <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                  For a sales team handling 500 leads per week, an AI agent can qualify 400–450 of them autonomously, leaving the team to focus on the 50–100 that need human expertise. For a support team processing 1,000 tickets weekly, an agent can route, categorize, and even resolve 800–900 tickets, freeing the team for complex issues that require judgment.
                </p>
                <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                  This isn't about replacing people. It's about <strong className="text-foreground font-semibold">removing the friction</strong> between your team and the work that actually matters. When 80–90% of repetitive tasks run autonomously, your team can focus on strategy, relationships, and decisions that drive growth.
                </p>
              </div>

              {/* Building in India, Serving Globally */}
              <div className="space-y-6 mb-12">
                <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4" style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}>
                  Building in India, Serving Globally
                </h2>
                <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                  We're based in India, but our focus is global. India's tech talent, combined with our understanding of operational challenges faced by growing companies worldwide, positions us uniquely to build AI agents that work.
                </p>
                <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                  Our team works remotely from across the world, bringing diverse perspectives to how we design and deploy AI agents. This global perspective helps us build agents that work for companies in India, the US, Europe, and beyond—because operational challenges are universal, even if the solutions need to be customized.
                </p>
              </div>

              {/* What We've Learned */}
              <div className="space-y-6 mb-12">
                <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4" style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}>
                  What We've Learned
                </h2>
                <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                  In building CognixAI Labs, we've learned that the companies that succeed with AI automation aren't the ones with the biggest budgets or the most advanced tech stacks. They're the ones willing to start with one workflow, prove the value, and scale systematically.
                </p>
                <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                  We typically deliver focused pilots in 6–8 weeks. We start with one workflow—maybe lead qualification or ticket routing—demonstrate results, and then expand to other areas. This approach reduces risk, builds confidence, and creates a clear path to 80–90% automation across operations.
                </p>
                <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                  The key insight: <strong className="text-foreground font-semibold">custom beats generic every time</strong>. An AI agent built specifically for how your business works will always outperform a generic tool that requires you to change how you work.
                </p>
              </div>

              {/* The Future We're Building */}
              <div className="space-y-6 mb-12">
                <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4" style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}>
                  The Future We're Building
                </h2>
                <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                  We believe that in the next decade, companies that automate 80–90% of repetitive operations will have a massive competitive advantage. They'll scale faster, operate more efficiently, and free their teams to focus on innovation and growth.
                </p>
                <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                  At CognixAI Labs, we're not just building AI agents. We're building the infrastructure for autonomous operations—systems that run 24/7, learn continuously, and adapt to your business as it evolves.
                </p>
                <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                  If you're a founder, COO, or operations leader at a growing company, and you're tired of watching your team drown in repetitive work, we should talk. Let's build AI agents that transform how you operate.
                </p>
              </div>

              {/* Author Bio */}
              <div className="mt-16 pt-12 border-t border-border">
                <div className="flex items-start gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <h3 className="text-xl font-semibold text-foreground">Gaurav Singh & Aashi Raghuwanshi</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      Founders of CognixAI Labs
                    </p>
                    <p className="text-base text-muted-foreground leading-relaxed mb-4">
                      Gaurav Singh and Aashi Raghuwanshi founded CognixAI Labs in 2025 to build custom AI agents that automate 80–90% of repetitive business operations. Based in India with a global focus, CognixAI Labs helps SMBs and mid-market companies scale without adding headcount.
                    </p>
                    <div className="flex items-center gap-4">
                      <a
                        href="https://www.linkedin.com/in/gaurav-singh-5392a7272/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Linkedin className="w-4 h-4" />
                        <span>Gaurav Singh on LinkedIn</span>
                      </a>
                      <span className="text-muted-foreground">•</span>
                      <a
                        href="https://www.linkedin.com/in/aashi-raghuwanshi/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Linkedin className="w-4 h-4" />
                        <span>Aashi Raghuwanshi on LinkedIn</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          </div>
        </section>

        <CTASection />
      </main>

      <Footer />
    </div>
  );
};

export default WhyIStarted;
