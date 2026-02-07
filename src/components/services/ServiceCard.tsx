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
      className="group flex flex-col border border-border rounded-xl bg-card overflow-hidden"
    >
      {/* Gradient Image Area */}
      <div className={`relative h-48 sm:h-56 ${gradientClass}`}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-lg">
            <Icon className="w-7 h-7 text-foreground" strokeWidth={1.5} />
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-5 bg-card">
        <h3 className="text-xl font-medium text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};
