import { motion } from "framer-motion";
import { Check, Phone, MessageCircle, Globe } from "lucide-react";

const bullets = [
  "Design flows visually, no code.",
  "Use templates for support, collections, and lead qualification.",
  "Ship in weeks, not quarters.",
];

const channels = [
  { icon: Phone, label: "Phone Calls" },
  { icon: MessageCircle, label: "WhatsApp / IVR" },
  { icon: Globe, label: "Web Click-to-Call" },
];

export const BuildSection = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-8 text-balance">
              Effortlessly build, customize, and launch voice agents
            </h2>

            {/* Bullets */}
            <ul className="space-y-4">
              {bullets.map((bullet, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 shrink-0">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-lg text-muted-foreground">{bullet}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right Column - Channel Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4"
          >
            {channels.map((channel, index) => (
              <div
                key={channel.label}
                className="bg-background rounded-2xl p-6 border border-border text-center"
              >
                <div className="icon-circle mx-auto mb-4">
                  <channel.icon className="w-5 h-5 text-primary" />
                </div>
                <p className="text-sm font-medium text-foreground">{channel.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
