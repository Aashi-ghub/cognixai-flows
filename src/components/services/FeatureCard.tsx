import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface FeatureCardProps {
  title: string;
  features: string[];
  index: number;
}

export const FeatureCard = ({ title, features, index }: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="border border-border rounded-xl p-6 bg-card/50"
    >
      <h3 className="text-lg font-medium text-foreground mb-5">{title}</h3>
      <ul className="space-y-3">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3">
            <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
            <span className="text-sm text-muted-foreground">{feature}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};
