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
          <div className="grid gap-10 lg:grid-cols-[1.6fr,1fr] items-start">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-xs font-medium tracking-[0.2em] text-primary mb-4">
                AI CALLING AGENT · VOICE-FIRST AUTOMATION
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-6">
                Turn every phone call
                <br />
                into a qualified opportunity.
              </h1>
              <p className="text-base md:text-lg text-muted-foreground max-w-xl mb-6">
                A 24/7 AI voice agent that sounds natural, follows your playbooks, and plugs
                into your CRM and telephony stack. It dials, qualifies, routes, and books
                meetings—so your team only talks to people who are ready.
              </p>
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <button
                  onClick={handleDemoClick}
                  className="btn-primary"
                >
                  Book a live call demo ✦
                </button>
                <a
                  href="#how-it-works"
                  className="btn-outline"
                >
                  See how it works
                </a>
              </div>
              <p className="text-xs text-muted-foreground/80">
                Typically live in 4–6 weeks · Works with your existing telephony & CRM · No
                extra headcount.
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
                RESULTS OUR CLIENTS TARGET
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="text-3xl font-semibold text-foreground mb-1">60–80%</p>
                  <p className="text-xs text-muted-foreground">
                    reduction in manual outbound calling workload.
                  </p>
                </div>
                <div>
                  <p className="text-3xl font-semibold text-foreground mb-1">3–5x</p>
                  <p className="text-xs text-muted-foreground">
                    more conversations with qualified, ready-to-buy prospects.
                  </p>
                </div>
                <div>
                  <p className="text-3xl font-semibold text-foreground mb-1">&lt;30s</p>
                  <p className="text-xs text-muted-foreground">
                    avg. time to first response for inbound calls.
                  </p>
                </div>
                <div>
                  <p className="text-3xl font-semibold text-foreground mb-1">24/7</p>
                  <p className="text-xs text-muted-foreground">
                    coverage across time zones and campaigns.
                  </p>
                </div>
              </div>
              <div className="space-y-3 text-xs text-muted-foreground">
                <p>Designed for high-volume sales, collections, service, and support teams.</p>
                <p>We plug into your dialer, IVR, CRM, and helpdesk—no rip-and-replace needed.</p>
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
              How the AI calling agent works.
            </h2>
            <p className="text-muted-foreground">
              We design the agent around your exact call flows—scripts, objections,
              qualification criteria, and routing rules—then integrate it with your existing
              tools so it behaves like a trained team member from day one.
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
              <p className="text-xs font-semibold text-primary mb-2">01 · DESIGN</p>
              <h3 className="text-base font-semibold mb-2">
                Capture your ideal call playbook.
              </h3>
              <p className="text-sm text-muted-foreground">
                We map your scripts, qualification questions, objection handling, and hand-off
                rules into a structured agent design—aligned with your ICP, quotas, and SLAs.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.05 }}
              className="rounded-2xl border border-border bg-card/70 p-6"
            >
              <p className="text-xs font-semibold text-primary mb-2">02 · INTEGRATE</p>
              <h3 className="text-base font-semibold mb-2">
                Plug into your telephony & CRM.
              </h3>
              <p className="text-sm text-muted-foreground">
                We connect the agent to your dialer, IVR, CRM, and ticketing so it can place
                calls, update records, trigger workflows, and escalate to humans in real time.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.1 }}
              className="rounded-2xl border border-border bg-card/70 p-6"
            >
              <p className="text-xs font-semibold text-primary mb-2">03 · OPTIMIZE</p>
              <h3 className="text-base font-semibold mb-2">
                Improve with every conversation.
              </h3>
              <p className="text-sm text-muted-foreground">
                We review transcripts, tweak prompts and routing rules, and A/B test call
                flows to steadily increase connect rates, qualification accuracy, and bookings.
              </p>
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
                Talk through your stack
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

