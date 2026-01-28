import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

export const ServiceCard = ({ icon: Icon, title, description, index }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group flex flex-col rounded-2xl overflow-hidden border border-border bg-[#d3dad1] hover:shadow-lg transition-shadow duration-300"
    >
      {/* Icon Area */}
      <div className="relative h-40 sm:h-48 flex items-center justify-center bg-[#c5cfc2]">
        <div className="w-16 h-16 bg-background rounded-xl flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300">
          <Icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
        </div>
      </div>
      
      {/* Content */}
      <div className="p-5 sm:p-6">
        <h3 className="text-lg sm:text-xl font-medium text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};
