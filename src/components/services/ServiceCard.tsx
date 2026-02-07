import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  gradientClass: string;
  index: number;
}

export const ServiceCard = ({ icon: Icon, title, description, gradientClass, index }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group flex flex-col border border-border rounded-xl bg-card overflow-hidden h-full"
    >
      {/* Top Content Area - White/Light Background */}
      <div className="flex-1 p-6 bg-gradient-to-b from-[#fafaf8] to-[#f0f2ed]">
        {/* Header with Title and Icon */}
        <div className="flex items-start justify-between mb-12">
          <h3 
            className="text-xl md:text-2xl text-foreground leading-tight"
            style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
          >
            {title}
          </h3>
          <div className="w-10 h-10 rounded-lg bg-[#f5f3ee] border border-border/50 flex items-center justify-center flex-shrink-0 ml-4">
            <Icon className="w-5 h-5 text-muted-foreground" strokeWidth={1.5} />
          </div>
        </div>
        
        {/* Description */}
        <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
          {description}
        </p>
      </div>
      
      {/* Bottom Gradient Block with Title */}
      <div className={`relative h-40 sm:h-48 ${gradientClass} flex items-center justify-center`}>
        <span 
          className="text-lg md:text-xl font-semibold text-white/90 uppercase tracking-wider text-center px-4"
          style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
        >
          {title}
        </span>
      </div>
    </motion.div>
  );
};
