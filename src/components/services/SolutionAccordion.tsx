import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { LucideIcon } from "lucide-react";

interface SolutionAccordionProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  index: number;
}

export const SolutionAccordion = ({ icon: Icon, title, description, features, index }: SolutionAccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="border border-border rounded-xl bg-card overflow-hidden"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-secondary/30 transition-colors"
      >
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
            <Icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
          </div>
          <div>
            <h3 className="text-base font-medium text-foreground">{title}</h3>
            <p className="text-sm text-muted-foreground mt-0.5">{description}</p>
          </div>
        </div>
        <ChevronDown 
          className={`w-5 h-5 text-muted-foreground transition-transform duration-200 flex-shrink-0 ml-4 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>
      
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="px-5 pb-5 pt-2 border-t border-border">
          <ul className="space-y-2">
            {features.map((feature, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="text-primary mt-1">•</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};
