import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface GetStartedCardProps {
  title: string;
  features: string[];
  buttonText: string;
  onButtonClick: () => void;
  index: number;
}

export const GetStartedCard = ({ title, features, buttonText, onButtonClick, index }: GetStartedCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="border border-border rounded-xl p-6 md:p-8 bg-card/30 flex flex-col h-full"
    >
      <h3 className="text-xl md:text-2xl font-medium text-foreground mb-6">{title}</h3>
      
      <ul className="space-y-4 flex-1 mb-8">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3">
            <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
            <span className="text-sm text-muted-foreground">{feature}</span>
          </li>
        ))}
      </ul>
      
      <button
        onClick={onButtonClick}
        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md text-sm font-medium border border-border bg-background hover:bg-secondary/50 transition-colors w-fit"
      >
        {buttonText}
      </button>
    </motion.div>
  );
};
