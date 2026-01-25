import { motion } from "framer-motion";

// AI agents, services, and products for scrolling marquee
const aiServices = [
  "Voice Agent",
  "Call Orchestrator",
  "Speech Analytics",
  "Intent Detection",
  "Sentiment Analysis",
  "Real-time Transcription",
  "Multilingual Support",
  "CRM Integration",
  "Smart Routing",
  "Conversation AI",
  "Call Insights",
  "Agent Assist",
];

export const HeroSection = () => {
  return (
    <section className="pt-44 pb-16 bg-background relative">
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Main Headline - Serif font like Sarvam */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.15] mb-6">
            Building the voice AI layer
            <br />
            for enterprise calls
          </h1>

          {/* Subheadline */}
          <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-2xl mx-auto">
            A full-stack Voice AI platform that empowers enterprises 
            to automate support, collections, and sales calls across India
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="#" className="btn-primary">
              BUILD WITH COGNIXAI
              <span>✦</span>
            </a>
            <a href="#" className="btn-outline">
              REQUEST A DEMO
            </a>
          </div>
        </motion.div>

        {/* AI Services Scrolling Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 pt-12 border-t border-border overflow-hidden"
        >
          <div className="marquee-container">
            <div className="marquee-content">
              {[...aiServices, ...aiServices].map((service, index) => (
                <span
                  key={`${service}-${index}`}
                  className="inline-flex items-center gap-3 text-sm font-medium text-muted-foreground/70 tracking-wide whitespace-nowrap"
                >
                  <span className="text-primary">✦</span>
                  {service}
                </span>
              ))}
            </div>
            <div className="marquee-content" aria-hidden="true">
              {[...aiServices, ...aiServices].map((service, index) => (
                <span
                  key={`${service}-dup-${index}`}
                  className="inline-flex items-center gap-3 text-sm font-medium text-muted-foreground/70 tracking-wide whitespace-nowrap"
                >
                  <span className="text-primary">✦</span>
                  {service}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
