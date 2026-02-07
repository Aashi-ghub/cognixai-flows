import { motion } from "framer-motion";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { CTASection } from "@/components/landing/CTASection";
import { OrganizationSchema, ServiceSchema } from "@/components/SeoSchemas";
import { useContactPopup } from "@/contexts/ContactPopupContext";
import { FileText, Link, TrendingUp } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const AICallingAgent = () => {
  const { openPopup } = useContactPopup();

  const handleDemoClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    e.preventDefault();
    openPopup();
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <OrganizationSchema />
      <ServiceSchema
        name="AI Calling Agent"
        description="CognixAI Labs builds AI calling agents that handle outbound and inbound calls end-to-end—qualifying leads, booking meetings, and resolving routine support queries so your humans focus on high-value conversations."
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
              AI CALLING AGENT · VOICE-FIRST AUTOMATION
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-8">
              Never miss a revenue
              <br />
              call again.
            </h1>
            <button
              onClick={handleDemoClick}
              className="btn-primary"
            >
              Try AI Agent Free →
            </button>
          </motion.div>
        </section>

        {/* Research-backed call stats */}
        <section className="container mx-auto px-4 lg:px-8 mt-12">
          <div className="rounded-2xl border border-border bg-card/70 p-6 lg:p-7">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <p className="text-3xl font-semibold text-foreground mb-1">21×</p>
                <p className="text-xs text-muted-foreground">
                  faster response
                </p>
              </div>
              <div>
                <p className="text-3xl font-semibold text-foreground mb-1">7×</p>
                <p className="text-xs text-muted-foreground">
                  higher qualification
                </p>
              </div>
              <div>
                <p className="text-3xl font-semibold text-foreground mb-1">35–50%</p>
                <p className="text-xs text-muted-foreground">
                  deals go to first responder
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
              How the AI calling agent works.
            </h2>
            <p className="text-muted-foreground">
              We design the agent around your exact call flows—scripts, objections,
              qualification criteria, and routing rules—then integrate it with your existing
              tools so it behaves like a trained team member from day one.
            </p>
          </div>

          <div className="grid gap-8 md:gap-12 lg:grid-cols-3 justify-items-center">
            {/* Step 01 - Design */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35 }}
              className="relative"
            >
              {/* Offset border circle */}
              <div className="absolute top-0 right-0 w-52 h-52 md:w-56 md:h-56 rounded-full border-2 border-foreground/80" />
              {/* Main gradient circle */}
              <div className="relative w-52 h-52 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-[#8fa882] via-[#7a9a6e] to-[#6b8a5e] flex flex-col items-center justify-center text-center p-6 -translate-x-2 translate-y-2">
                {/* Icon */}
                <FileText className="w-8 h-8 text-white/90 mb-3" strokeWidth={1.5} />
                {/* Description */}
                <p className="text-white/80 text-xs leading-relaxed mb-3">
                  Map your scripts & rules
                </p>
                {/* Step title */}
                <h3 className="text-white text-lg font-semibold">Step 01</h3>
              </div>
              {/* Dotted decoration */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 flex flex-col gap-1">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="w-1 h-1 rounded-full bg-[#7a9a6e]/60" />
                ))}
              </div>
            </motion.div>

            {/* Step 02 - Integrate */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.1 }}
              className="relative"
            >
              {/* Offset border circle */}
              <div className="absolute top-0 right-0 w-52 h-52 md:w-56 md:h-56 rounded-full border-2 border-foreground/80" />
              {/* Main gradient circle */}
              <div className="relative w-52 h-52 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-[#7a9a6e] via-[#6b8a5e] to-[#5c7a50] flex flex-col items-center justify-center text-center p-6 -translate-x-2 translate-y-2">
                {/* Icon */}
                <Link className="w-8 h-8 text-white/90 mb-3" strokeWidth={1.5} />
                {/* Description */}
                <p className="text-white/80 text-xs leading-relaxed mb-3">
                  Connect telephony + CRM
                </p>
                {/* Step title */}
                <h3 className="text-white text-lg font-semibold">Step 02</h3>
              </div>
              {/* Dotted decoration */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 flex flex-col gap-1">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="w-1 h-1 rounded-full bg-[#6b8a5e]/60" />
                ))}
              </div>
            </motion.div>

            {/* Step 03 - Optimize */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.2 }}
              className="relative"
            >
              {/* Offset border circle */}
              <div className="absolute top-0 right-0 w-52 h-52 md:w-56 md:h-56 rounded-full border-2 border-foreground/80" />
              {/* Main gradient circle */}
              <div className="relative w-52 h-52 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-[#5c6650] via-[#4a5840] to-[#3d4a35] flex flex-col items-center justify-center text-center p-6 -translate-x-2 translate-y-2">
                {/* Icon */}
                <TrendingUp className="w-8 h-8 text-white/90 mb-3" strokeWidth={1.5} />
                {/* Description */}
                <p className="text-white/80 text-xs leading-relaxed mb-3">
                  Improve with every call
                </p>
                {/* Step title */}
                <h3 className="text-white text-lg font-semibold">Step 03</h3>
              </div>
              {/* Dotted decoration */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 flex flex-col gap-1">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="w-1 h-1 rounded-full bg-[#4a5840]/60" />
                ))}
              </div>
            </motion.div>
          </div>
        </section>


        {/* Proof / why now */}
        <section className="container mx-auto px-4 lg:px-8 mt-20">
          <div className="rounded-2xl border border-border bg-card/70 p-6 lg:p-8">
            <div className="grid gap-8 lg:grid-cols-[1.6fr,1.1fr] items-start">
              <div>
                <h2 className="text-2xl md:text-3xl text-foreground mb-4">
                  Why teams choose CognixAI for voice agents.
                </h2>
                <p className="text-sm text-muted-foreground mb-2">
                  Custom AI calling agents built around your exact workflows and CRM.
                </p>
                <p className="text-sm text-muted-foreground">
                  Context-aware voice automation that qualifies leads and books meetings automatically.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-background/80 p-5">
                <p className="text-xs font-semibold tracking-[0.18em] text-muted-foreground mb-2">
                  NEXT STEP
                </p>
                <h3 className="text-lg font-semibold mb-2">
                  Get a tailored AI call-flow plan.
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Share your current call volumes, use cases, and tools. We&apos;ll come
                  back with a concrete automation plan and ROI model before you commit.
                </p>
                <button
                  onClick={handleDemoClick}
                  className="btn-primary w-full"
                >
                  Schedule a 30‑minute discovery
                </button>
                <p className="mt-3 text-[11px] text-muted-foreground/80">
                  No obligation, no generic sales deck—just a working session to see if an
                  AI calling agent makes sense for your operations.
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
                  What is an AI calling agent?
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  An automated voice assistant that makes and handles phone calls like a human rep.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border border-border rounded-xl mb-3 px-5 bg-card/70">
                <AccordionTrigger className="text-base font-medium text-foreground hover:no-underline">
                  Does it sound natural?
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  Yes. Uses neural voice synthesis and LLM reasoning.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border border-border rounded-xl mb-3 px-5 bg-card/70">
                <AccordionTrigger className="text-base font-medium text-foreground hover:no-underline">
                  Can it book meetings?
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  Yes. It qualifies leads and schedules directly to your calendar.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="border border-border rounded-xl mb-3 px-5 bg-card/70">
                <AccordionTrigger className="text-base font-medium text-foreground hover:no-underline">
                  Does it integrate with CRM?
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  Yes. HubSpot, Zoho, Salesforce and others.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className="border border-border rounded-xl px-5 bg-card/70">
                <AccordionTrigger className="text-base font-medium text-foreground hover:no-underline">
                  Is it compliant?
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  Yes. Guardrails for scripts, consent, and logging.
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

export default AICallingAgent;
