import { motion } from "framer-motion";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { CTASection } from "@/components/landing/CTASection";
import { OrganizationSchema, ServiceSchema } from "@/components/SeoSchemas";
import { useContactPopup } from "@/contexts/ContactPopupContext";

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
          <div className="grid gap-10 lg:grid-cols-[1.6fr,1fr] items-start">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-xs font-medium tracking-[0.2em] text-primary mb-4">
                HIRING AGENT · TALENT AUTOMATION
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-6">
                Cut candidate screening
                <br />
                time by up to 70%.
              </h1>
              <p className="text-base md:text-lg text-muted-foreground max-w-xl mb-6">
                Hiring Agent reads resumes, scores candidates against your role criteria, and
                runs structured pre-screening interviews—so recruiters spend their time with
                top-fit talent instead of sifting through applications.
              </p>
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <button
                  onClick={handleDemoClick}
                  className="btn-primary"
                >
                  See Hiring Agent live ✦
                </button>
                <a
                  href="#how-it-works"
                  className="btn-outline"
                >
                  How it works
                </a>
              </div>
              <p className="text-xs text-muted-foreground/80">
                Typically reduces time-to-shortlist by 50–70% · Fits into your ATS · Keeps your
                existing hiring process, just runs it faster.
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
                IMPACT PEOPLE TEAMS TARGET
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="text-3xl font-semibold text-foreground mb-1">70%</p>
                  <p className="text-xs text-muted-foreground">
                    reduction in manual screening time per role.
                  </p>
                </div>
                <div>
                  <p className="text-3xl font-semibold text-foreground mb-1">2–3x</p>
                  <p className="text-xs text-muted-foreground">
                    more qualified candidates surfaced for every opening.
                  </p>
                </div>
                <div>
                  <p className="text-3xl font-semibold text-foreground mb-1">24/7</p>
                  <p className="text-xs text-muted-foreground">
                    automated pre-screening across time zones and schedules.
                  </p>
                </div>
                <div>
                  <p className="text-3xl font-semibold text-foreground mb-1">0</p>
                  <p className="text-xs text-muted-foreground">
                    time wasted on obviously unqualified applications.
                  </p>
                </div>
              </div>
              <div className="space-y-3 text-xs text-muted-foreground">
                <p>Built for high-volume hiring teams, staffing firms, and distributed workforces.</p>
                <p>Integrates with your ATS and HR stack for sourcing, notes, and status updates.</p>
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
              How Hiring Agent fits into your funnel.
            </h2>
            <p className="text-muted-foreground">
              We turn your existing job descriptions, scorecards, and interview scripts into an
              AI-powered screening engine that can handle applications at any scale.
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
              <p className="text-xs font-semibold text-primary mb-2">01 · PARSE</p>
              <h3 className="text-base font-semibold mb-2">
                Read resumes & profiles automatically.
              </h3>
              <p className="text-sm text-muted-foreground">
                Ingest resumes, LinkedIn profiles, and application forms, structuring skills,
                experience, education, and signals into a consistent candidate profile.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.05 }}
              className="rounded-2xl border border-border bg-card/70 p-6"
            >
              <p className="text-xs font-semibold text-primary mb-2">02 · SCORE</p>
              <h3 className="text-base font-semibold mb-2">
                Rank candidates against your scorecard.
              </h3>
              <p className="text-sm text-muted-foreground">
                Compare candidates to your must-haves and nice-to-haves, producing transparent
                scores and reasons you can share with hiring managers.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.1 }}
              className="rounded-2xl border border-border bg-card/70 p-6"
            >
              <p className="text-xs font-semibold text-primary mb-2">03 · PRE-SCREEN</p>
              <h3 className="text-base font-semibold mb-2">
                Run structured pre-screening interviews.
              </h3>
              <p className="text-sm text-muted-foreground">
                Conduct async or live pre-screens with standardized questions, summarizing
                answers and red flags so humans can make faster, fairer decisions.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Use cases */}
        <section className="container mx-auto px-4 lg:px-8 mt-20">
          <div className="grid gap-10 lg:grid-cols-[1.4fr,1.1fr] items-start">
            <div>
              <h2 className="text-2xl md:text-3xl text-foreground mb-4">
                Where Hiring Agent creates leverage.
              </h2>
              <p className="text-muted-foreground mb-6">
                Any role with repeatable criteria and high applicant volume is a candidate for
                automation—without sacrificing candidate experience.
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-xl border border-border bg-card/70 p-4">
                  <p className="text-xs font-semibold text-primary mb-1">
                    VOLUME HIRING
                  </p>
                  <p className="text-sm font-medium mb-1">
                    Support, sales, and operations roles
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Handle thousands of applicants per month while maintaining consistent
                    screening quality and SLAs.
                  </p>
                </div>
                <div className="rounded-xl border border-border bg-card/70 p-4">
                  <p className="text-xs font-semibold text-primary mb-1">
                    CAMPUS & EARLY CAREERS
                  </p>
                  <p className="text-sm font-medium mb-1">
                    Fair, structured evaluation at scale
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Standardize how you compare freshers and interns using rubrics instead of
                    rushed, subjective screens.
                  </p>
                </div>
                <div className="rounded-xl border border-border bg-card/70 p-4">
                  <p className="text-xs font-semibold text-primary mb-1">
                    SPECIALIST ROLES
                  </p>
                  <p className="text-sm font-medium mb-1">
                    Skills-first shortlisting
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Pull out specific skills, projects, and domain exposure that matter to your
                    hiring managers.
                  </p>
                </div>
                <div className="rounded-xl border border-border bg-card/70 p-4">
                  <p className="text-xs font-semibold text-primary mb-1">
                    STAFFING & RPO
                  </p>
                  <p className="text-sm font-medium mb-1">
                    Multi-client, multi-role pipelines
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Keep client pipelines full of high-fit candidates while your team focuses on
                    relationship-building.
                  </p>
                </div>
              </div>
            </div>

            {/* Compliance / fairness */}
            <div className="rounded-2xl border border-border bg-muted/40 p-6 lg:p-7">
              <p className="text-xs font-semibold tracking-[0.18em] text-muted-foreground mb-3">
                DESIGNED FOR FAIR, GOVERNED HIRING
              </p>
              <h3 className="text-lg font-semibold mb-3">
                Keep humans in control, automate the busywork.
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Hiring Agent doesn&apos;t replace recruiters—it gives them superpowers. Every
                recommendation is explainable, auditable, and aligned with your policies.
              </p>
              <ul className="space-y-2 text-xs text-muted-foreground">
                <li>• Transparent scoring criteria you can review and adjust.</li>
                <li>• Configurable guardrails to respect legal and DEI requirements.</li>
                <li>• Logs of every decision for compliance and calibration.</li>
                <li>• Easy opt-out to send any candidate directly to a human.</li>
              </ul>
              <button
                onClick={handleDemoClick}
                className="mt-6 btn-primary w-full md:w-auto"
              >
                Walk through your hiring funnel
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
                  From resume piles to a structured hiring engine.
                </h2>
                <p className="text-sm text-muted-foreground mb-4">
                  Most teams already know what a great hire looks like—they just can&apos;t
                  screen every applicant with that level of attention. We help you codify that
                  know-how into a scalable, AI-supported process.
                </p>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li>
                    <span className="font-medium text-foreground">Start with one priority role.</span>{" "}
                    We pilot on a single, high-volume role to validate impact quickly.
                  </li>
                  <li>
                    <span className="font-medium text-foreground">Co-design with talent leaders.</span>{" "}
                    Scorecards, question banks, and workflows are built together with your TA
                    and HR leadership.
                  </li>
                  <li>
                    <span className="font-medium text-foreground">Scale across locations and teams.</span>{" "}
                    Once tuned, we replicate the model to other roles and geographies.
                  </li>
                </ul>
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

