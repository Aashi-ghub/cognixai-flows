import { motion } from "framer-motion";
import { Sparkles, TrendingUp, Zap, LucideIcon } from "lucide-react";

interface FeatureItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface FeatureShowcaseSectionProps {
  badge: string;
  headline: string;
  description: string;
  features: FeatureItem[];
}

export const FeatureShowcaseSection = ({
  badge,
  headline,
  description,
  features
}: FeatureShowcaseSectionProps) => {
  return (
    <section className="container mx-auto px-4 lg:px-8 mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {/* Full-width dark card with image-like gradient background */}
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#2a2f26] via-[#1f2419] to-[#161a12] min-h-[320px] md:min-h-[380px]">
          {/* Overlay gradient for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          
          {/* Subtle texture overlay */}
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `radial-gradient(circle at 20% 30%, rgba(255,255,255,0.1) 0%, transparent 50%),
                              radial-gradient(circle at 80% 70%, rgba(255,255,255,0.08) 0%, transparent 40%)`
          }} />

          {/* Badge */}
          <div className="absolute top-6 left-6">
            <span className="px-3 py-1.5 text-[10px] font-semibold tracking-wider bg-foreground/10 backdrop-blur-sm text-white/90 rounded uppercase">
              {badge}
            </span>
          </div>

          {/* Bottom content */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">
              {headline}
            </h3>
            <p className="text-sm md:text-base text-white/70 max-w-2xl">
              {description}
            </p>
          </div>
        </div>

        {/* Three feature highlights below */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.1 }}
              className="flex items-start gap-3"
            >
              <feature.icon className="w-5 h-5 text-primary mt-0.5 shrink-0" strokeWidth={1.5} />
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-1">
                  {feature.title}
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
