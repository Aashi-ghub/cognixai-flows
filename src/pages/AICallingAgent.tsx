import { motion } from "framer-motion";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { CTASection } from "@/components/landing/CTASection";
import { OrganizationSchema, ServiceSchema } from "@/components/SeoSchemas";
import { useContactPopup } from "@/contexts/ContactPopupContext";

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
                <p className="text-3xl font-semibold text-foreground mb-1">21x</p>
                <p className="text-xs text-muted-foreground">
                  more qualified leads when teams respond to new calls within ~5 minutes instead of 30.
                </p>
                <p className="mt-1 text-[10px] text-muted-foreground/70">
                  Based on widely cited speed‑to‑lead benchmarks.
                </p>
              </div>
              <div>
                <p className="text-3xl font-semibold text-foreground mb-1">7x</p>
                <p className="text-xs text-muted-foreground">
                  higher chance of qualifying a prospect when follow‑up happens within an hour.
                </p>
                <p className="mt-1 text-[10px] text-muted-foreground/70">
                  Reflects research on contact timing vs. conversion.
                </p>
              </div>
              <div>
                <p className="text-3xl font-semibold text-foreground mb-1">35–50%</p>
                <p className="text-xs text-muted-foreground">
                  of deals typically go to the first responder when multiple vendors compete.
                </p>
                <p className="mt-1 text-[10px] text-muted-foreground/70">
                  Aggregated from industry sales and RFQ studies.
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

          <div className="grid gap-5 lg:grid-cols-3">
            {/* Design Card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35 }}
              className="rounded-xl border border-border/60 bg-card overflow-hidden flex flex-col"
            >
              {/* Top content area */}
              <div className="p-6 pb-8 flex-1">
                <div className="flex items-start justify-between mb-8">
                  <h3 className="text-lg font-normal text-foreground">
                    Design
                  </h3>
                  <div className="w-7 h-7 rounded-md border border-border/80 flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We map your scripts, qualification questions, objection handling, and hand-off rules into a structured agent design—aligned with your ICP, quotas, and SLAs.
                </p>
              </div>
              {/* Gradient bottom area */}
              <div className="mx-3 mb-3 h-44 rounded-lg bg-gradient-to-br from-[#7a8a6e] via-[#6b7d5c] to-[#5c6650] flex items-end p-5">
                <span className="text-white text-base font-medium tracking-wider uppercase">Design</span>
              </div>
            </motion.div>

            {/* Integrate Card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.05 }}
              className="rounded-xl border border-border/60 bg-card overflow-hidden flex flex-col"
            >
              {/* Top content area */}
              <div className="p-6 pb-8 flex-1">
                <div className="flex items-start justify-between mb-8">
                  <h3 className="text-lg font-normal text-foreground">
                    Integrate
                  </h3>
                  <div className="w-7 h-7 rounded-md border border-border/80 flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We connect the agent to your dialer, IVR, CRM, and ticketing so it can place calls, update records, trigger workflows, and escalate to humans in real time.
                </p>
              </div>
              {/* Gradient bottom area */}
              <div className="mx-3 mb-3 h-44 rounded-lg bg-gradient-to-br from-[#6b7d5c] via-[#5c6650] to-[#4a5840] flex items-end p-5">
                <span className="text-white text-base font-medium tracking-wider uppercase">Integrate</span>
              </div>
            </motion.div>

            {/* Optimize Card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.1 }}
              className="rounded-xl border border-border/60 bg-card overflow-hidden flex flex-col"
            >
              {/* Top content area */}
              <div className="p-6 pb-8 flex-1">
                <div className="flex items-start justify-between mb-8">
                  <h3 className="text-lg font-normal text-foreground">
                    Optimize
                  </h3>
                  <div className="w-7 h-7 rounded-md border border-border/80 flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We review transcripts, tweak prompts and routing rules, and A/B test call flows to steadily increase connect rates, qualification accuracy, and bookings.
                </p>
              </div>
              {/* Gradient bottom area */}
              <div className="mx-3 mb-3 h-44 rounded-lg bg-gradient-to-br from-[#5c6650] via-[#4a5840] to-[#3d4a35] flex items-end p-5">
                <span className="text-white text-base font-medium tracking-wider uppercase">Optimize</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Use cases */}
        <section className="container mx-auto px-4 lg:px-8 mt-20">
          <div className="grid gap-10 lg:grid-cols-[1.4fr,1.1fr] items-start">
            <div>
              <h2 className="text-2xl md:text-3xl text-foreground mb-4">
                Where AI calling agents create the most leverage.
              </h2>
              <p className="text-muted-foreground mb-6">
                Any high-volume, repeatable conversation is a candidate for automation. We
                focus on workflows where speed, consistency, and context matter more than a
                human voice on every single call.
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-xl border border-border bg-card/70 p-4">
                  <p className="text-xs font-semibold text-primary mb-1">
                    REVENUE TEAMS
                  </p>
                  <p className="text-sm font-medium mb-1">
                    Outbound qualification & follow-ups
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Auto-dial inbound leads in minutes, qualify, nurture, and hand over
                    only sales-ready prospects with full context in your CRM.
                  </p>
                </div>
                <div className="rounded-xl border border-border bg-card/70 p-4">
                  <p className="text-xs font-semibold text-primary mb-1">
                    CUSTOMER OPERATIONS
                  </p>
                  <p className="text-sm font-medium mb-1">
                    First-line support & status calls
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Answer FAQs, authenticate customers, give order or case updates, and
                    route complex issues to the right agents with notes attached.
                  </p>
                </div>
                <div className="rounded-xl border border-border bg-card/70 p-4">
                  <p className="text-xs font-semibold text-primary mb-1">
                    COLLECTIONS & REMINDERS
                  </p>
                  <p className="text-sm font-medium mb-1">
                    Payment, renewal & policy calls
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Run large-scale reminder campaigns, capture promises-to-pay, and
                    escalate edge cases to your team without burning out agents.
                  </p>
                </div>
                <div className="rounded-xl border border-border bg-card/70 p-4">
                  <p className="text-xs font-semibold text-primary mb-1">
                    INTERNAL OPS
                  </p>
                  <p className="text-sm font-medium mb-1">
                    Field-force & partner coordination
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Keep partners, field reps, and vendors updated on schedules, stock,
                    or tasks using automated check-in and broadcast calls.
                  </p>
                </div>
              </div>
            </div>

            {/* Integration highlights */}
            <div className="rounded-2xl border border-border bg-muted/40 p-6 lg:p-7">
              <p className="text-xs font-semibold tracking-[0.18em] text-muted-foreground mb-3">
                BUILT TO FIT YOUR STACK
              </p>
              <h3 className="text-lg font-semibold mb-3">
                Works with your existing telephony, not against it.
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                We integrate with modern cloud telephony and CRMs so you keep your numbers,
                reporting, and compliance posture—while the AI agent handles the repetitive
                conversations.
              </p>
              <ul className="space-y-2 text-xs text-muted-foreground">
                <li>• Connect to leading dialers, IVR platforms, and SIP providers.</li>
                <li>• Bi-directional sync with CRMs and helpdesks (notes, tasks, tickets).</li>
                <li>• Configurable guardrails for language, compliance, and escalation.</li>
                <li>• Analytics on answer rates, outcomes, and script performance.</li>
              </ul>
              <button
                onClick={handleDemoClick}
                className="mt-6 btn-primary w-full md:w-auto"
              >
                Get 3x More Qualified Calls →
              </button>
            </div>
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
                <p className="text-sm text-muted-foreground mb-4">
                  Generic “AI dialers” promise a lot but rarely match your processes. We
                  build custom AI calling agents that are tightly aligned with your
                  operations—so they sound on-brand, respect your constraints, and actually
                  move pipeline.
                </p>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li>
                    <span className="font-medium text-foreground">Agentic workflows, not static scripts.</span>{" "}
                    We use modern agent frameworks so calls stay contextual and adaptive
                    instead of reading from a rigid, brittle script.
                  </li>
                  <li>
                    <span className="font-medium text-foreground">Deep operational focus.</span>{" "}
                    We specialise in sales, service, and operations use cases—not generic
                    chatbots—so we know where AI creates real leverage.
                  </li>
                  <li>
                    <span className="font-medium text-foreground">Founders and ops leaders as partners.</span>{" "}
                    You work directly with builders who understand both LLMs and B2B
                    operations, not a rotating bench of implementers.
                  </li>
                </ul>
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

