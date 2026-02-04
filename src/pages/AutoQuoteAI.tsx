import { motion } from "framer-motion";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { CTASection } from "@/components/landing/CTASection";
import { OrganizationSchema, ServiceSchema } from "@/components/SeoSchemas";
import { useContactPopup } from "@/contexts/ContactPopupContext";

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
          <div className="grid gap-10 lg:grid-cols-[1.6fr,1fr] items-start">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-xs font-medium tracking-[0.2em] text-primary mb-4">
                AUTOQUOTE AI · REVENUE OPERATIONS
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-6">
                Generate complex quotes
                <br />
                in seconds, not days.
              </h1>
              <p className="text-base md:text-lg text-muted-foreground max-w-xl mb-6">
                AutoQuote AI sits between your inbound inquiries and your pricing engine.
                It captures requirements from emails, forms, or chats, applies your pricing
                rules, and produces consistent, ready-to-send quotes—so your team focuses on
                closing, not formatting spreadsheets.
              </p>
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <button
                  onClick={handleDemoClick}
                  className="btn-primary"
                >
                  See AutoQuote AI in action ✦
                </button>
                <a
                  href="#how-it-works"
                  className="btn-outline"
                >
                  How it works
                </a>
              </div>
              <p className="text-xs text-muted-foreground/80">
                Typical response time &lt; 60 seconds · Fully auditable quotes · Fits into your
                existing CRM and pricing stack.
              </p>
            </motion.div>

            {/* Right rail stats card */}
            <motion.aside
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-2xl border border-border bg-card/60 backdrop-blur-xl p-6 lg:p-7 shadow-[0_18px_60px_rgba(15,23,42,0.35)]"
            >
              <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground mb-3">
                IMPACT REVOPS TEAMS TARGET
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="text-3xl font-semibold text-foreground mb-1">3–5x</p>
                  <p className="text-xs text-muted-foreground">
                    more quotes sent per rep without adding headcount.
                  </p>
                </div>
                <div>
                  <p className="text-3xl font-semibold text-foreground mb-1">&lt;60s</p>
                  <p className="text-xs text-muted-foreground">
                    average time from inquiry to first draft quote.
                  </p>
                </div>
                <div>
                  <p className="text-3xl font-semibold text-foreground mb-1">0</p>
                  <p className="text-xs text-muted-foreground">
                    manual copy-paste between emails, sheets, and CRM.
                  </p>
                </div>
                <div>
                  <p className="text-3xl font-semibold text-foreground mb-1">98%</p>
                  <p className="text-xs text-muted-foreground">
                    consistency on pricing logic and discount rules.
                  </p>
                </div>
              </div>
              <div className="space-y-3 text-xs text-muted-foreground">
                <p>Ideal for SaaS, services, insurance, manufacturing, and B2B marketplaces.</p>
                <p>We plug into your CRM, CPQ, and billing tools—no rip-and-replace required.</p>
              </div>
            </motion.aside>
          </div>
        </section>

        {/* How it works */}
        <section
          id="how-it-works"
          className="container mx-auto px-4 lg:px-8 mt-20"
        >
          <div className="max-w-3xl mb-10">
            <h2 className="text-2xl md:text-3xl text-foreground mb-3">
              How AutoQuote AI fits into your quote flow.
            </h2>
            <p className="text-muted-foreground">
              We turn your existing pricing spreadsheet, CPQ rules, and approval paths into an
              AI-powered quote engine that reads inquiries, structures requirements, and
              produces compliant quotes automatically.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35 }}
              className="rounded-2xl border border-border bg-card/70 p-6"
            >
              <p className="text-xs font-semibold text-primary mb-2">01 · CAPTURE</p>
              <h3 className="text-base font-semibold mb-2">
                Ingest inquiries from every channel.
              </h3>
              <p className="text-sm text-muted-foreground">
                Parse emails, web forms, chats, and CRM tasks to extract customer requirements,
                SKUs, quantities, and constraints into a structured brief.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.05 }}
              className="rounded-2xl border border-border bg-card/70 p-6"
            >
              <p className="text-xs font-semibold text-primary mb-2">02 · CALCULATE</p>
              <h3 className="text-base font-semibold mb-2">
                Apply your pricing & discount logic.
              </h3>
              <p className="text-sm text-muted-foreground">
                Map requirements to your product catalog, tiers, and rules, computing prices,
                discounts, taxes, and terms exactly the way your team does today.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.1 }}
              className="rounded-2xl border border-border bg-card/70 p-6"
            >
              <p className="text-xs font-semibold text-primary mb-2">03 · GENERATE</p>
              <h3 className="text-base font-semibold mb-2">
                Produce ready-to-send quotes.
              </h3>
              <p className="text-sm text-muted-foreground">
                Generate quote PDFs or email drafts with full line items, terms, and
                justifications, ready for a quick human review or fully automated send.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Use cases */}
        <section className="container mx-auto px-4 lg:px-8 mt-20">
          <div className="grid gap-10 lg:grid-cols-[1.4fr,1.1fr] items-start">
            <div>
              <h2 className="text-2xl md:text-3xl text-foreground mb-4">
                Where AutoQuote AI delivers the most value.
              </h2>
              <p className="text-muted-foreground mb-6">
                Any team drowning in inbound RFQs, RFPs, or custom pricing requests can turn
                quote generation into a fast, reliable, and measurable process.
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-xl border border-border bg-card/70 p-4">
                  <p className="text-xs font-semibold text-primary mb-1">
                    B2B SAAS
                  </p>
                  <p className="text-sm font-medium mb-1">
                    Multi-tier subscriptions & add-ons
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Turn complex subscription structures, usage tiers, and add-ons into
                    consistent quotes aligned with your pricing policy.
                  </p>
                </div>
                <div className="rounded-xl border border-border bg-card/70 p-4">
                  <p className="text-xs font-semibold text-primary mb-1">
                    SERVICES & AGENCIES
                  </p>
                  <p className="text-sm font-medium mb-1">
                    Proposal-ready cost breakdowns
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Generate scoped estimates with effort, rate cards, and milestones pulled
                    from your existing templates.
                  </p>
                </div>
                <div className="rounded-xl border border-border bg-card/70 p-4">
                  <p className="text-xs font-semibold text-primary mb-1">
                    MANUFACTURING & DISTRIBUTION
                  </p>
                  <p className="text-sm font-medium mb-1">
                    SKU-based & volume pricing
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Automate catalog lookups, MoQ rules, and volume discounts across thousands
                    of SKUs.
                  </p>
                </div>
                <div className="rounded-xl border border-border bg-card/70 p-4">
                  <p className="text-xs font-semibold text-primary mb-1">
                    INSURANCE & FINANCIAL PRODUCTS
                  </p>
                  <p className="text-sm font-medium mb-1">
                    Policy & premium calculations
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Capture risk parameters, run premium logic, and generate compliant quote
                    documents for review.
                  </p>
                </div>
              </div>
            </div>

            {/* Integration / governance */}
            <div className="rounded-2xl border border-border bg-muted/40 p-6 lg:p-7">
              <p className="text-xs font-semibold tracking-[0.18em] text-muted-foreground mb-3">
                CONTROLLED, GOVERNED, AUDITABLE
              </p>
              <h3 className="text-lg font-semibold mb-3">
                Your rules, your approvals—just executed faster.
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                AutoQuote AI doesn&apos;t replace your governance; it codifies it. Every quote
                can be logged, versioned, and run through approval paths before it reaches the
                customer.
              </p>
              <ul className="space-y-2 text-xs text-muted-foreground">
                <li>• Role-based guardrails around discounts and exceptions.</li>
                <li>• Full audit trail of inputs, calculations, and outputs.</li>
                <li>• Integration hooks for approvals in CRM or chat tools.</li>
                <li>• Sandbox mode for testing new pricing experiments safely.</li>
              </ul>
              <button
                onClick={handleDemoClick}
                className="mt-6 btn-primary w-full md:w-auto"
              >
                Walk through your quote flow
              </button>
            </div>
          </div>
        </section>

        {/* Next step */}
        <section className="container mx-auto px-4 lg:px-8 mt-20">
          <div className="rounded-2xl border border-border bg-card/70 p-6 lg:p-8">
            <div className="grid gap-8 lg:grid-cols-[1.6fr,1.1fr] items-start">
              <div>
                <h2 className="text-2xl md:text-3xl text-foreground mb-4">
                  From spreadsheet pricing to an always-on quoting engine.
                </h2>
                <p className="text-sm text-muted-foreground mb-4">
                  Most teams already have pricing encoded in sheets, playbooks, and tribal
                  knowledge. We turn that into a robust, AI-powered quoting layer that your
                  sales and operations teams can trust.
                </p>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li>
                    <span className="font-medium text-foreground">Start with one high-volume segment.</span>{" "}
                    We focus on your most repeatable quote type first to prove value fast.
                  </li>
                  <li>
                    <span className="font-medium text-foreground">Iterate with your revenue leaders.</span>{" "}
                    We co-design prompts, guardrails, and approvals with your RevOps / Finance.
                  </li>
                  <li>
                    <span className="font-medium text-foreground">Expand to new products and regions.</span>{" "}
                    Once trust is built, we roll out to additional lines of business and geos.
                  </li>
                </ul>
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

