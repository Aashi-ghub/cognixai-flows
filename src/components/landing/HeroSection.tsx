import { motion } from "framer-motion";

// AI services marquee items
const services = ["Voice Agent", "Call Orchestrator", "Workflow Automation", "Smart Analytics", "Intent Recognition", "Speech Synthesis", "Conversation AI", "Process Intelligence"];
export const HeroSection = () => {
  return <section className="pt-44 pb-16 bg-background relative">
      {/* Decorative asterisks on sides */}
      <div className="absolute left-8 lg:left-16 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4">
        <span className="decorative-asterisk">✳</span>
        <span className="decorative-asterisk">✳</span>
      </div>
      <div className="absolute right-8 lg:right-16 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4">
        <span className="decorative-asterisk">✳</span>
        <span className="decorative-asterisk">✳</span>
      </div>

      <div className="container mx-auto">
        {/* Centered Hero Content */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6
      }} className="max-w-4xl mx-auto text-center">
          {/* Main Headline - Serif font like Sarvam */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.15] mb-6">
            Building the foundation for
            <br />
            AI-driven business automation
          </h1>

          {/* Subheadline */}
          <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-2xl mx-auto">A unified platform for voice automation, workflow intelligence, and system integration, designed for enterprises. Enabling companies to scale revenue, reduce costs, and operate autonomously.</p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="#" className="btn-primary">Explore ✦<span>✦</span>
            </a>
            <a href="#" className="btn-outline">
              REQUEST A DEMO
            </a>
          </div>
        </motion.div>

        {/* AI Services Marquee */}
        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        duration: 0.6,
        delay: 0.4
      }} className="mt-20 pt-12 border-t border-border">
          <div className="marquee-container">
            <div className="marquee-content">
              {services.map((service, index) => (
                <span key={index} className="text-lg italic text-muted-foreground/50 font-serif whitespace-nowrap">
                  {service}
                </span>
              ))}
            </div>
            <div className="marquee-content" aria-hidden="true">
              {services.map((service, index) => (
                <span key={`dup-${index}`} className="text-lg italic text-muted-foreground/50 font-serif whitespace-nowrap">
                  {service}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>;
};
