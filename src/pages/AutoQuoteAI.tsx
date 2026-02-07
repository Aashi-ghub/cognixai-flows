import { motion } from "framer-motion";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { CTASection } from "@/components/landing/CTASection";
import { OrganizationSchema, ServiceSchema } from "@/components/SeoSchemas";
import { useContactPopup } from "@/contexts/ContactPopupContext";
import { WorkflowsSection } from "@/components/products/WorkflowsSection";
import { FileSearch, Calculator, Send } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const AutoQuoteAI = () => {
  const { openPopup } = useContactPopup();

  const handleDemoClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    e.preventDefault();
    openPopup();
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <OrganizationSchema />
      <ServiceSchema
        name="AutoQuote AI"
        description="AutoQuote AI automates quote generation from inbound inquiries—extracting requirements, applying your pricing logic, and generating ready-to-send quotes in seconds."
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
              AUTOQUOTE AI · REVENUE OPERATIONS
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-8">
              Send 3x more quotes
              <br />
              without hiring.
            </h1>
            <button
              onClick={handleDemoClick}
              className="btn-primary"
            >
              Try AutoQuote AI Free →
            </button>
          </motion.div>
        </section>

        {/* Stats section */}
        <section className="container mx-auto px-4 lg:px-8 mt-12">
          <div className="rounded-2xl border border-border bg-card/70 p-6 lg:p-7">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <p className="text-3xl font-semibold text-foreground mb-1">5 min</p>
                <p className="text-xs text-muted-foreground">
                  response wins more deals
                </p>
              </div>
              <div>
                <p className="text-3xl font-semibold text-foreground mb-1">60 sec</p>
                <p className="text-xs text-muted-foreground">
                  to generate compliant quotes
                </p>
              </div>
              <div>
                <p className="text-3xl font-semibold text-foreground mb-1">3×</p>
                <p className="text-xs text-muted-foreground">
                  throughput without new hires
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
              How AutoQuote AI works.
            </h2>
            <p className="text-muted-foreground">
              We turn your existing pricing spreadsheet, CPQ rules, and approval paths into an
              AI-powered quote engine that reads inquiries, structures requirements, and
              produces compliant quotes automatically.
            </p>
          </div>

          <div className="grid gap-8 md:gap-12 lg:grid-cols-3 justify-items-center">
            {/* Step 01 - Capture */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35 }}
              className="relative"
            >
              <div className="absolute top-0 right-0 w-52 h-52 md:w-56 md:h-56 rounded-full border-2 border-foreground/80" />
              <div className="relative w-52 h-52 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-[#8fa882] via-[#7a9a6e] to-[#6b8a5e] flex flex-col items-center justify-center text-center p-6 -translate-x-2 translate-y-2">
                <FileSearch className="w-8 h-8 text-white/90 mb-3" strokeWidth={1.5} />
                <p className="text-white/80 text-xs leading-relaxed mb-3">
                  Ingest inquiries & extract
                </p>
                <h3 className="text-white text-lg font-semibold">Step 01</h3>
              </div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 flex flex-col gap-1">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="w-1 h-1 rounded-full bg-[#7a9a6e]/60" />
                ))}
              </div>
            </motion.div>

            {/* Step 02 - Calculate */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.1 }}
              className="relative"
            >
              <div className="absolute top-0 right-0 w-52 h-52 md:w-56 md:h-56 rounded-full border-2 border-foreground/80" />
              <div className="relative w-52 h-52 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-[#7a9a6e] via-[#6b8a5e] to-[#5c7a50] flex flex-col items-center justify-center text-center p-6 -translate-x-2 translate-y-2">
                <Calculator className="w-8 h-8 text-white/90 mb-3" strokeWidth={1.5} />
                <p className="text-white/80 text-xs leading-relaxed mb-3">
                  Apply pricing & discounts
                </p>
                <h3 className="text-white text-lg font-semibold">Step 02</h3>
              </div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 flex flex-col gap-1">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="w-1 h-1 rounded-full bg-[#6b8a5e]/60" />
                ))}
              </div>
            </motion.div>

            {/* Step 03 - Generate */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute top-0 right-0 w-52 h-52 md:w-56 md:h-56 rounded-full border-2 border-foreground/80" />
              <div className="relative w-52 h-52 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-[#5c6650] via-[#4a5840] to-[#3d4a35] flex flex-col items-center justify-center text-center p-6 -translate-x-2 translate-y-2">
                <Send className="w-8 h-8 text-white/90 mb-3" strokeWidth={1.5} />
                <p className="text-white/80 text-xs leading-relaxed mb-3">
                  Generate ready-to-send quotes
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
          headline="Making Quotes Work for You"
          description="This AI agent generates quotes end-to-end—extracting requirements, applying pricing logic, and producing compliant quotes with minimal manual intervention."
          items={[
            {
              title: "Self-Learning Agents",
              description: "The agent improves with every quote, adapting to outcomes, applying feedback, and self-correcting using Constitutional AI.",
              previewText: "Extract customer details, request category, and missing information from submitted forms."
            },
            {
              title: "Up to 98% Accuracy",
              description: "As a result of constant feedback loops, our quote agents refine their approach with every cycle, leading to 98% accuracy across flows.",
              previewText: "Route request using the most optimal model based on task complexity and data confidence."
            },
            {
              title: "Smart Model Switching",
              description: "Dynamically switches between AI models based on quote complexity and required precision for optimal pricing accuracy.",
              previewText: "Switch to high-context model for complex multi-product quotes requiring custom discounts."
            }
          ]}
        />

        {/* Why choose section */}
        <section className="container mx-auto px-4 lg:px-8 mt-20">
          <div className="rounded-2xl border border-border bg-card/70 p-6 lg:p-8">
            <div className="grid gap-8 lg:grid-cols-[1.6fr,1.1fr] items-start">
              <div>
                <h2 className="text-2xl md:text-3xl text-foreground mb-4">
                  Why teams choose CognixAI for quote automation.
                </h2>
                <p className="text-sm text-muted-foreground mb-2">
                  Custom AI quote agents built around your exact pricing logic and CPQ rules.
                </p>
                <p className="text-sm text-muted-foreground">
                  Governed, auditable quotes generated in seconds—not hours.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-background/80 p-5">
                <p className="text-xs font-semibold tracking-[0.18em] text-muted-foreground mb-2">
                  NEXT STEP
                </p>
                <h3 className="text-lg font-semibold mb-2">
                  Get a quote-automation blueprint.
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Share how you generate quotes today—tools, volumes, and pain points. We&apos;ll
                  map out an automation blueprint and expected ROI before you decide to build.
                </p>
                <button
                  onClick={handleDemoClick}
                  className="btn-primary w-full"
                >
                  Schedule a 30‑minute discovery
                </button>
                <p className="mt-3 text-[11px] text-muted-foreground/80">
                  No obligation. If we don&apos;t see at least a 2–3x throughput improvement on
                  paper, we&apos;ll tell you upfront.
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
                  What is AutoQuote AI?
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  An AI-powered quote engine that generates ready-to-send quotes from inbound inquiries in seconds.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border border-border rounded-xl mb-3 px-5 bg-card/70">
                <AccordionTrigger className="text-base font-medium text-foreground hover:no-underline">
                  Does it use my existing pricing rules?
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  Yes. We codify your pricing spreadsheets, CPQ logic, and discount tiers.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border border-border rounded-xl mb-3 px-5 bg-card/70">
                <AccordionTrigger className="text-base font-medium text-foreground hover:no-underline">
                  Can I review quotes before sending?
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  Yes. Quotes can route through approval paths or go fully automated.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="border border-border rounded-xl mb-3 px-5 bg-card/70">
                <AccordionTrigger className="text-base font-medium text-foreground hover:no-underline">
                  Does it integrate with CRM?
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  Yes. HubSpot, Salesforce, Zoho, and custom systems.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className="border border-border rounded-xl px-5 bg-card/70">
                <AccordionTrigger className="text-base font-medium text-foreground hover:no-underline">
                  Is there an audit trail?
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  Yes. Full logs of inputs, calculations, and outputs for compliance.
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

export default AutoQuoteAI;
