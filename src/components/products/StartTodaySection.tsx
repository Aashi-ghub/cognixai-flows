import { motion } from "framer-motion";
import { useContactPopup } from "@/contexts/ContactPopupContext";

interface StartTodaySectionProps {
  headline: string;
  description: string;
  ctaText?: string;
}

export const StartTodaySection = ({
  headline,
  description,
  ctaText = "Request access"
}: StartTodaySectionProps) => {
  const { openPopup } = useContactPopup();

  return (
    <section className="container mx-auto px-4 lg:px-8 mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="rounded-2xl bg-gradient-to-br from-[#1a1f16] via-[#161a12] to-[#0f120c] py-16 md:py-24 px-6"
      >
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
          {/* Badge */}
          <span className="px-4 py-1.5 text-xs font-medium tracking-wider border border-white/20 rounded-full text-white/80 mb-6">
            Start Today
          </span>

          {/* Headline */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-white mb-4">
            {headline}
          </h2>

          {/* Description */}
          <p className="text-white/60 mb-8">
            {description}
          </p>

          {/* CTA Button */}
          <button
            onClick={() => openPopup()}
            className="px-8 py-3 text-sm font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
          >
            {ctaText}
          </button>
        </div>
      </motion.div>
    </section>
  );
};
