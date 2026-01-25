import { motion } from "framer-motion";

export const CTASection = () => {
  return (
    <section className="gradient-animated py-24 lg:py-32 rounded-3xl mx-4 lg:mx-8 mb-8">
      <div className="container mx-auto">
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
            Join our growing team of engineers, researchers,
            <br />
            and AI specialists.
          </p>

          <a 
            href="#" 
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-md border border-white/30 hover:bg-white/30 transition-colors"
          >
            See careers
          </a>
        </motion.div>
      </div>
    </section>
  );
};
