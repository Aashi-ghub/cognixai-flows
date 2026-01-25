import { motion } from "framer-motion";

const industries = ["BFSI", "E-commerce", "Logistics", "SaaS"];

export const IndustriesSection = () => {
  return (
    <section id="solutions" className="section-padding bg-background">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8 text-balance">
            Transforming business calls across industries
          </h2>

          {/* Industry Chips */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {industries.map((industry) => (
              <span
                key={industry}
                className="px-5 py-2.5 bg-card border border-border rounded-full text-sm font-medium text-foreground"
              >
                {industry}
              </span>
            ))}
          </div>

          {/* Tagline */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Automate 60–80% of routine calls while keeping humans for edge cases.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
