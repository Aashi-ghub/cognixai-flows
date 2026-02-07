import { motion } from "framer-motion";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { CTASection } from "@/components/landing/CTASection";
import { OrganizationSchema, ServiceSchema } from "@/components/SeoSchemas";
import { useContactPopup } from "@/contexts/ContactPopupContext";
import { WorkflowsSection } from "@/components/products/WorkflowsSection";
import { UseCasesSection } from "@/components/products/UseCasesSection";
import { FeatureShowcaseSection } from "@/components/products/FeatureShowcaseSection";
import { StartTodaySection } from "@/components/products/StartTodaySection";
import { FileText, Users, CheckCircle, Sparkles, TrendingUp, Zap } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const HiringAgent = () => {
  const { openPopup } = useContactPopup();

  const handleDemoClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    e.preventDefault();
    openPopup();
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <OrganizationSchema />
      <ServiceSchema
        name="Hiring Agent"
        description="Hiring Agent is an AI-driven recruiter that screens, evaluates, and shortlists candidates automatically—reading resumes, ranking talent, and running structured pre-screening interviews."
      />

      <Navbar />

      <main className="pt-32 lg:pt-40 pb-20">
        {/* Hero */}
        <section className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center text-center max-w-3xl mx-auto"
          >
            <p className="text-xs font-medium tracking-[0.2em] text-primary mb-4">
              HIRING AGENT · TALENT AUTOMATION
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-8">
              Screen 70% faster,
              <br />
              hire 2x better.
            </h1>
            <button
              onClick={handleDemoClick}
              className="btn-primary"
            >
              Try Hiring Agent Free →
            </button>
          </motion.div>
        </section>

        {/* Stats section */}
        <section className="container mx-auto px-4 lg:px-8 mt-12">
          <div className="rounded-2xl border border-border bg-card/70 p-6 lg:p-7">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <p className="text-3xl font-semibold text-foreground mb-1">$4,129</p>
                <p className="text-xs text-muted-foreground">
                  average cost per hire
                </p>
              </div>
              <div>
                <p className="text-3xl font-semibold text-foreground mb-1">42 days</p>
                <p className="text-xs text-muted-foreground">
                  average time to fill a role
                </p>
              </div>
              <div>
                <p className="text-3xl font-semibold text-foreground mb-1">75%</p>
                <p className="text-xs text-muted-foreground">
                  hires underperform when rushed
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section
          id="how-it-works"
          className="container mx-auto px-4 lg:px-8 mt-20"
        >
          <div className="max-w-3xl mb-10">
            <h2 className="text-2xl md:text-3xl text-foreground mb-3">
              How the Hiring Agent works.
            </h2>
            <p className="text-muted-foreground">
              We turn your existing job descriptions, scorecards, and interview scripts into an
              AI-powered screening engine that can handle applications at any scale.
            </p>
          </div>

          <div className="grid gap-8 md:gap-12 lg:grid-cols-3 justify-items-center">
            {/* Step 01 - Parse */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35 }}
              className="relative"
            >
              <div className="absolute top-0 right-0 w-52 h-52 md:w-56 md:h-56 rounded-full border-2 border-foreground/80" />
              <div className="relative w-52 h-52 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-[#8fa882] via-[#7a9a6e] to-[#6b8a5e] flex flex-col items-center justify-center text-center p-6 -translate-x-2 translate-y-2">
                <FileText className="w-8 h-8 text-white/90 mb-3" strokeWidth={1.5} />
                <p className="text-white/80 text-xs leading-relaxed mb-3">
                  Read resumes & profiles
                </p>
                <h3 className="text-white text-lg font-semibold">Step 01</h3>
              </div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 flex flex-col gap-1">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="w-1 h-1 rounded-full bg-[#7a9a6e]/60" />
                ))}
              </div>
            </motion.div>

            {/* Step 02 - Score */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.1 }}
              className="relative"
            >
              <div className="absolute top-0 right-0 w-52 h-52 md:w-56 md:h-56 rounded-full border-2 border-foreground/80" />
              <div className="relative w-52 h-52 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-[#7a9a6e] via-[#6b8a5e] to-[#5c7a50] flex flex-col items-center justify-center text-center p-6 -translate-x-2 translate-y-2">
                <Users className="w-8 h-8 text-white/90 mb-3" strokeWidth={1.5} />
                <p className="text-white/80 text-xs leading-relaxed mb-3">
                  Rank against scorecard
                </p>
                <h3 className="text-white text-lg font-semibold">Step 02</h3>
              </div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 flex flex-col gap-1">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="w-1 h-1 rounded-full bg-[#6b8a5e]/60" />
                ))}
              </div>
            </motion.div>

            {/* Step 03 - Pre-screen */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute top-0 right-0 w-52 h-52 md:w-56 md:h-56 rounded-full border-2 border-foreground/80" />
              <div className="relative w-52 h-52 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-[#5c6650] via-[#4a5840] to-[#3d4a35] flex flex-col items-center justify-center text-center p-6 -translate-x-2 translate-y-2">
                <CheckCircle className="w-8 h-8 text-white/90 mb-3" strokeWidth={1.5} />
                <p className="text-white/80 text-xs leading-relaxed mb-3">
                  Run structured interviews
                </p>
                <h3 className="text-white text-lg font-semibold">Step 03</h3>
              </div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 flex flex-col gap-1">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="w-1 h-1 rounded-full bg-[#4a5840]/60" />
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Workflows Section */}
        <WorkflowsSection
          headline="Making Hiring Work for You"
          description="This AI agent screens candidates end-to-end—reading resumes, ranking talent, and running structured pre-screens with minimal manual intervention."
          items={[
            {
              title: "Self-Learning Agents",
              description: "The agent improves with every hire, adapting to outcomes, applying feedback, and self-correcting using Constitutional AI.",
              previewText: "Extract candidate details, match against scorecard criteria, and rank applicants automatically."
            },
            {
              title: "Up to 98% Accuracy",
              description: "As a result of constant feedback loops, our hiring agents refine their approach with every cycle, leading to 98% accuracy across screenings.",
              previewText: "Route candidate using the most optimal evaluation model based on role complexity and seniority."
            },
            {
              title: "Smart Model Switching",
              description: "Dynamically switches between AI models based on role complexity and screening requirements for optimal candidate evaluation.",
              previewText: "Switch to high-context model for senior roles requiring nuanced experience assessment."
            }
          ]}
        />

        {/* Use Cases Section */}
        <UseCasesSection
          badge="Use Cases"
          headline="What Can Your New AI Recruiting Team Accomplish?"
          description="Primed for excellence in routine hiring tasks, your new team of AI Agents can execute entire screening workflows without a fault."
          ctaText="See all use cases"
        />

        {/* Feature Showcase Section */}
        <FeatureShowcaseSection
          badge="TALENT ACQUISITION"
          headline="Resume-to-Interview Automation with AI Agents"
          description="Speed up your hiring pipeline. Our agents screen resumes, rank candidates, and conduct pre-screens so nothing slips through the cracks."
          features={[
            {
              icon: Sparkles,
              title: "Improved Candidate Experience",
              description: "Faster response times and consistent screening improve the candidate experience and employer brand."
            },
            {
              icon: TrendingUp,
              title: "Better Quality of Hire",
              description: "Standardized evaluation reduces bias and improves hiring decisions."
            },
            {
              icon: Zap,
              title: "Scalability",
              description: "AI handles increased application volumes seamlessly without extra cost."
            }
          ]}
        />

        {/* Start Today Section */}
        <StartTodaySection
          headline="Start Building Custom AI Agents to Automate Hiring"
          description="Join our platform and start building AI agents for various types of recruitment automations."
          ctaText="Request access"
        />

        {/* Why choose section */}
        <section className="container mx-auto px-4 lg:px-8 mt-20">
          <div className="rounded-2xl border border-border bg-card/70 p-6 lg:p-8">
            <div className="grid gap-8 lg:grid-cols-[1.6fr,1.1fr] items-start">
              <div>
                <h2 className="text-2xl md:text-3xl text-foreground mb-4">
                  Why teams choose CognixAI for hiring automation.
                </h2>
                <p className="text-sm text-muted-foreground mb-2">
                  Custom AI hiring agents built around your exact scorecards and workflows.
                </p>
                <p className="text-sm text-muted-foreground">
                  Fair, explainable screening that qualifies candidates and runs pre-screens automatically.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-background/80 p-5">
                <p className="text-xs font-semibold tracking-[0.18em] text-muted-foreground mb-2">
                  NEXT STEP
                </p>
                <h3 className="text-lg font-semibold mb-2">
                  Get a hiring-automation blueprint.
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Share your current roles, volumes, and bottlenecks. We&apos;ll outline where
                  AI screening can help and what a responsible rollout looks like for your org.
                </p>
                <button
                  onClick={handleDemoClick}
                  className="btn-primary w-full"
                >
                  Schedule a 30‑minute discovery
                </button>
                <p className="mt-3 text-[11px] text-muted-foreground/80">
                  No obligation—just a practical look at how to bring AI into your hiring
                  process safely.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="container mx-auto px-4 lg:px-8 mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl text-foreground mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="max-w-3xl mx-auto">
              <AccordionItem value="item-1" className="border border-border rounded-xl mb-3 px-5 bg-card/70">
                <AccordionTrigger className="text-base font-medium text-foreground hover:no-underline">
                  What is a Hiring Agent?
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  An AI-powered recruiter that screens, evaluates, and shortlists candidates automatically.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border border-border rounded-xl mb-3 px-5 bg-card/70">
                <AccordionTrigger className="text-base font-medium text-foreground hover:no-underline">
                  Is the screening fair and unbiased?
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  Yes. We use transparent scoring criteria and configurable guardrails for DEI compliance.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border border-border rounded-xl mb-3 px-5 bg-card/70">
                <AccordionTrigger className="text-base font-medium text-foreground hover:no-underline">
                  Can it run pre-screening interviews?
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  Yes. It conducts async or live pre-screens with standardized questions and summarizes answers.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="border border-border rounded-xl mb-3 px-5 bg-card/70">
                <AccordionTrigger className="text-base font-medium text-foreground hover:no-underline">
                  Does it integrate with ATS systems?
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  Yes. Greenhouse, Lever, Workday, and others.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className="border border-border rounded-xl px-5 bg-card/70">
                <AccordionTrigger className="text-base font-medium text-foreground hover:no-underline">
                  Are decisions auditable?
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  Yes. Full logs of every decision for compliance and calibration.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
        </section>

        {/* Global CTA reused */}
        <div className="mt-20">
          <CTASection />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HiringAgent;
