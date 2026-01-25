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
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Build with CognixAI
          </h2>

          <p className="text-lg text-muted-foreground mb-10">
            Talk to our team to launch your first voice agent
          </p>

          <a href="#" className="btn-primary text-base px-8 py-4">
            REQUEST A DEMO
            <span>✦</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
