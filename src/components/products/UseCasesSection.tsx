import { motion } from "framer-motion";
import { useContactPopup } from "@/contexts/ContactPopupContext";

interface UseCasesSectionProps {
  badge: string;
  headline: string;
  description: string;
  ctaText?: string;
}

export const UseCasesSection = ({
  badge,
  headline,
  description,
  ctaText = "See all use cases"
}: UseCasesSectionProps) => {
  const { openPopup } = useContactPopup();

  return (
    <section className="container mx-auto px-4 lg:px-8 mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center text-center"
      >
        {/* Badge */}
        <span className="px-4 py-1.5 text-xs font-medium tracking-wider border border-border rounded-full bg-card/70 text-foreground mb-6">
          {badge}
        </span>

        {/* Headline */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-foreground mb-4 max-w-2xl">
          {headline}
        </h2>

        {/* Description */}
        <p className="text-muted-foreground max-w-xl mb-8">
          {description}
        </p>

        {/* CTA Button */}
        <button
          onClick={() => openPopup()}
          className="px-6 py-2.5 text-sm font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
        >
          {ctaText}
        </button>
      </motion.div>
    </section>
  );
};
