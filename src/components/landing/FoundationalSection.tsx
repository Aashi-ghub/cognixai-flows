import { motion } from "framer-motion";
import { Zap, Globe, Shield } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Production-Grade Latency",
    description: "Sub-second response times for natural, real-time voice conversations that keep customers engaged.",
  },
  {
    icon: Globe,
    title: "Deep India-First Integrations",
    description: "Native connectors for Indian telephony, CRMs, ERPs, and payment systems built from day one.",
  },
  {
    icon: Shield,
    title: "Data Privacy & Compliance",
    description: "Enterprise-grade security with data residency options and full regulatory compliance built-in.",
  },
];

export const FoundationalSection = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Foundational Voice AI companies can rely on
          </h2>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="feature-card text-center"
            >
              {/* Icon */}
              <div className="icon-circle mx-auto mb-6">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
