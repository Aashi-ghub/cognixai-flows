import { motion } from "framer-motion";
import voiceAgentUI from "@/assets/voice-agent-ui.png";

export const HeroSection = () => {
  return (
    <section className="pt-36 pb-20 lg:pt-44 lg:pb-28 bg-background">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Eyebrow */}
            <p className="text-sm font-medium text-muted-foreground mb-4">
              Enterprise Voice AI Agents for India & beyond
            </p>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] mb-6 text-balance">
              Building the voice AI layer for enterprise calls
            </h1>

            {/* Description */}
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
              CognixAI Labs powers sovereign voice agents for support, collections, 
              and sales – deeply integrated with your CRM, ERP, and Indian business stack.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a href="#" className="pill-button-primary text-base">
                Book a Live Demo ✦
              </a>
              <a href="#" className="pill-button-outline text-base">
                Listen to Sample Call
              </a>
            </div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Main Image */}
              <img
                src={voiceAgentUI}
                alt="AI Voice Agent Interface"
                className="w-full max-w-md rounded-3xl shadow-2xl shadow-primary/10"
              />
              
              {/* Decorative dots */}
              <div className="absolute -top-4 -right-4 w-24 h-24 dots-pattern opacity-30 rounded-2xl" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 dots-pattern opacity-30 rounded-2xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
