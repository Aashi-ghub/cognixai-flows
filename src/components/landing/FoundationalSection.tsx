import { motion } from "framer-motion";
import { Globe, Shield, Cpu } from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Sovereign by Design",
    description: "Voice AI infrastructure developed, deployed, and governed entirely in India. Complete data control, zero compromises.",
  },
  {
    icon: Shield,
    title: "Secure & Safe",
    description: "AI that works on-prem, in the cloud, or at the edge. Available wherever you need it with enterprise-grade security.",
  },
  {
    icon: Cpu,
    title: "State-of-the-art AI",
    description: "Advanced and affordable AI models and tools so enterprises can build voice agents with confidence.",
  },
];

export const FoundationalSection = () => {
  return (
    <section className="pt-0 pb-20 lg:pb-28 foundational-section-bg">
      <div className="container mx-auto px-8 lg:px-16 xl:px-24 pt-20 lg:pt-28">
        {/* White container box for heading and cards */}
        <div className="bg-background rounded-3xl px-8 py-12 lg:px-16 lg:py-16">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-foreground">
              Foundational Voice AI that India can rely on
            </h2>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="foundational-card"
              >
                {/* Vertical dotted decoration */}
                <div className="card-dots" />
                
                {/* Icon */}
                <div className="icon-sarvam mb-8">
                  <feature.icon className="w-6 h-6 text-foreground/60" strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="text-xl lg:text-2xl text-foreground mb-4">
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
      </div>
    </section>
  );
};
