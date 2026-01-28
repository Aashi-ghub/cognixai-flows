import { motion } from "framer-motion";
import { ArrowRight, LucideIcon } from "lucide-react";

interface FlagshipServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  gradientClass: string;
  onLearnMore: () => void;
  index: number;
}

export const FlagshipServiceCard = ({ 
  icon: Icon, 
  title, 
  description, 
  gradientClass,
  onLearnMore,
  index 
}: FlagshipServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group border border-border rounded-2xl bg-card overflow-hidden hover:shadow-lg transition-shadow duration-300"
    >
      <div className="flex flex-col md:flex-row">
        {/* Content Side */}
        <div className="flex-1 p-6 md:p-8 flex flex-col justify-center order-2 md:order-1">
          <div className="text-xs text-muted-foreground mb-3 uppercase tracking-wider">
            Flagship Service
          </div>
          <h3 
            className="text-xl md:text-2xl font-medium text-foreground mb-3"
            style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
          >
            {title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-6">
            {description}
          </p>
          <button
            onClick={onLearnMore}
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors group/btn w-fit"
          >
            Learn More
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>
        
        {/* Gradient/Image Side */}
        <div className={`relative w-full md:w-72 h-48 md:h-auto ${gradientClass} order-1 md:order-2`}>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-white/90 rounded-2xl flex items-center justify-center shadow-lg">
              <Icon className="w-8 h-8 text-foreground" strokeWidth={1.5} />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
