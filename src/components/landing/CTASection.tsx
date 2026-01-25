import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/50 via-background to-background" />
      <div className="absolute inset-0 mesh-bg opacity-50" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Icon */}
          <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-primary to-secondary-foreground flex items-center justify-center mb-8 glow-primary">
            <Sparkles className="w-8 h-8 text-primary-foreground" />
          </div>

          {/* Headline */}
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
            Ready to automate your workflows with{" "}
            <span className="text-gradient-primary">AI agents</span>?
          </h2>

          {/* Subtext */}
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            Join leading enterprises transforming their operations with CognixAI Labs. 
            Get started with a personalized demo today.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-10 py-6 text-lg glow-accent"
            >
              Book a Demo
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-border/50 hover:bg-secondary/50 text-foreground px-10 py-6 text-lg hover-glow"
            >
              Contact Sales
            </Button>
          </div>

          {/* Trust Text */}
          <p className="mt-8 text-sm text-muted-foreground">
            No credit card required · Enterprise trials available
          </p>
        </motion.div>
      </div>
    </section>
  );
};
