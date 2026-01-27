import { motion } from "framer-motion";
import { useContactPopup } from "@/contexts/ContactPopupContext";

export const CTASection = () => {
  const { openPopup } = useContactPopup();

  return (
    <section className="gradient-animated py-24 lg:py-32 rounded-3xl mx-4 lg:mx-8 mb-8">
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-white mb-6">
            We are building AI to automate
            <br />
            enterprise voice communications.
          </h2>

          <p className="text-lg text-white/80 mb-10">
            See how CognixAI Voice Agents cut your call volume 
            <br />
            by 60–80% immediately.
          </p>

          <a 
            href="#"
            onClick={(e) => {
              e.preventDefault();
              openPopup();
            }}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-md border border-white/30 hover:bg-white/30 transition-colors"
          >
            Book Live Demo
          </a>
        </motion.div>
      </div>
    </section>
  );
};
