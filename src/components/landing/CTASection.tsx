import { motion } from "framer-motion";

export const CTASection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Build with CognixAI
          </h2>

          <p className="text-lg text-muted-foreground mb-8">
            Talk to our team to launch your first voice agent.
          </p>

          <a href="#" className="pill-button-primary text-lg px-8 py-4 inline-flex items-center gap-2">
            Book a Demo
            <span>✦</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
