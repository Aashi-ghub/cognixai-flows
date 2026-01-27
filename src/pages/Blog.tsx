import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { CTASection } from "@/components/landing/CTASection";
import { motion } from "framer-motion";

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
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
                CognixAI Labs Insight
              </p>

              <h1 className="text-3xl md:text-4xl lg:text-[44px] font-bold tracking-[0.18em] uppercase text-[#333]">
                AI Isn't the Future of Business. It's the Difference Between
                Scale and Stagnation.
              </h1>

              <p className="text-base md:text-lg text-muted-foreground max-w-3xl leading-relaxed">
                Why the next decade will be defined not by who has the most
                people, but by who removes the most friction from how decisions
                are made.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16">
          {/* Responsive double column container */}
          <div className="container mx-auto px-4 max-w-6xl">
            <motion.article
              className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Left Column */}
              <div className="space-y-12">
                {/* Opening Statement */}
                <div className="space-y-4">
                  <p className="text-lg md:text-xl leading-relaxed text-foreground/90 font-light">
                    For years, businesses optimized people.
                  </p>
                  <p className="text-lg md:text-xl leading-relaxed font-medium">
                    Now, the businesses that win optimize <span className="text-primary font-semibold">decisions</span>.
                  </p>
                  <p className="text-base md:text-lg leading-relaxed text-muted-foreground pt-3">
                    Artificial Intelligence is no longer a futuristic experiment
                    locked inside research labs or Big Tech. It's a practical,
                    operational force already reshaping how companies sell, operate,
                    analyze, and grow.
                  </p>
                </div>
                
                {/* Key Quote */}
                <div className="my-12 py-6 px-6 md:px-10 border-l-4 border-primary bg-primary/5 rounded-r-lg">
                  <p className="text-lg md:text-xl font-semibold leading-relaxed">
                    AI is not replacing businesses — businesses using AI are
                    replacing those that don't.
                  </p>
                </div>

                {/* Section 1 */}
                <div className="space-y-6 pt-8">
                  <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                    The Quiet Shift Most Businesses Missed
                  </h2>
                  <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                    AI didn't arrive with a bang. It slipped in quietly.
                  </p>
                  <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                    First, it automated repetitive tasks. Then it improved analytics.
                    Now, it's making operational decisions faster than humans ever
                    could.
                  </p>
                  <div className="space-y-4 pt-4">
                    <h3 className="text-lg md:text-xl font-semibold text-foreground/90">
                      What this looks like in real businesses
                    </h3>
                    <div className="grid gap-4 pl-4 border-l-2 border-border">
                      <div className="flex items-start gap-3">
                        <span className="text-primary font-bold text-base mt-1">→</span>
                        <p className="text-base md:text-lg leading-relaxed">
                          Reduce manual work by{" "}
                          <span className="font-bold text-primary">60–80%</span>
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-primary font-bold text-base mt-1">→</span>
                        <p className="text-base md:text-lg leading-relaxed">
                          Respond to customers in{" "}
                          <span className="font-bold text-primary">seconds</span>, not hours
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-primary font-bold text-base mt-1">→</span>
                        <p className="text-base md:text-lg leading-relaxed">
                          Detect problems{" "}
                          <span className="font-bold text-primary">before</span> they become losses
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-primary font-bold text-base mt-1">→</span>
                        <p className="text-base md:text-lg leading-relaxed">
                          Scale without increasing headcount
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-12">
                {/* Section 2 */}
                <div className="space-y-6">
                  <div className="space-y-3">
                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                      AI Is Not About Replacing Humans
                    </h2>
                    <h3 className="text-xl md:text-2xl font-light text-primary">
                      It's About Removing Friction
                    </h3>
                  </div>
                  <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                    Let's clear the biggest myth.
                  </p>
                  <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                    AI doesn't eliminate people. It eliminates{" "}
                    <em className="text-foreground font-medium">wasted effort</em>.
                  </p>
                  <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                    Humans struggle with repetitive tasks, constant monitoring, and
                    processing massive datasets without fatigue. AI excels at
                    exactly those things.
                  </p>
                  <p className="text-base md:text-lg leading-relaxed pt-1.5">
                    The result isn't fewer people. The result is{" "}
                    <span className="font-bold text-foreground">better people doing higher-value work</span>.
                  </p>
                </div>
                
                {/* Final Section */}
                <div className="space-y-6 pt-4 pb-8">
                  <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                    Final Thought
                  </h2>
                  <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                    The real question is not:
                  </p>
                  <div className="py-5 px-6 md:px-10 bg-muted/30 rounded-lg">
                    <p className="text-lg md:text-xl italic text-muted-foreground">
                      "Should my business use AI?"
                    </p>
                  </div>
                  <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                    The real question is:
                  </p>
                  <div className="py-6 px-6 md:px-10 border-2 border-primary bg-primary/5 rounded-lg">
                    <p className="text-lg md:text-xl font-bold leading-relaxed">
                      "How much inefficiency am I willing to tolerate?"
                    </p>
                  </div>
                  <p className="text-base md:text-lg leading-relaxed text-muted-foreground pt-3">
                    Businesses that win the next decade won't have the biggest teams
                    or the flashiest tech stacks. They'll have the clearest systems —
                    and the least friction between insight and action.
                  </p>
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

export default Blog;