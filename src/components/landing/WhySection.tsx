import { motion } from "framer-motion";
import { Shield, Database, Globe, Zap } from "lucide-react";

const pillars = [
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description: "SOC2 Type II certified with end-to-end encryption and role-based access control.",
  },
  {
    icon: Database,
    title: "Deep ERP Integration",
    description: "Native connectors for SAP, Oracle, Microsoft Dynamics, and 100+ enterprise systems.",
  },
  {
    icon: Zap,
    title: "Agents That Understand",
    description: "AI that speaks your data, not just your language — context-aware automation.",
  },
  {
    icon: Globe,
    title: "Indian-Built, Globally Ready",
    description: "Developed in India for global enterprises. Local expertise, world-class quality.",
  },
];

export const WhySection = () => {
  return (
    <section className="py-24 bg-card/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
            Why <span className="text-gradient-accent">CognixAI Labs</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Enterprise AI automation built for reliability, security, and scale.
          </p>
        </motion.div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              {/* Icon Container */}
              <div className="w-16 h-16 mx-auto rounded-2xl bg-secondary/50 border border-border/50 flex items-center justify-center mb-6">
                <pillar.icon className="w-8 h-8 text-primary" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold font-display mb-3 text-foreground">
                {pillar.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
