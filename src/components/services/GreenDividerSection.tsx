import { motion } from "framer-motion";

export const GreenDividerSection = () => {
  return (
    <section className="relative py-32 md:py-40 bg-primary overflow-hidden">
      {/* Decorative pattern overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-x-0 bottom-0 h-16 flex items-center justify-center">
          <div className="w-full max-w-6xl px-4">
            <svg viewBox="0 0 1200 40" className="w-full h-8" preserveAspectRatio="none">
              <pattern id="zigzag" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M0 20 L10 10 L20 20 L30 10 L40 20" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary-foreground" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#zigzag)" />
            </svg>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Icon */}
          <div className="mb-8 flex justify-center">
            <div className="w-20 h-20 rounded-2xl bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center">
              <svg 
                viewBox="0 0 48 48" 
                className="w-12 h-12 text-primary-foreground"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <rect x="8" y="8" width="14" height="14" rx="2" />
                <rect x="26" y="8" width="14" height="14" rx="2" />
                <rect x="8" y="26" width="14" height="14" rx="2" />
                <rect x="26" y="26" width="14" height="14" rx="2" />
                <path d="M15 22 L15 26" />
                <path d="M33 22 L33 26" />
                <path d="M22 15 L26 15" />
                <path d="M22 33 L26 33" />
              </svg>
            </div>
          </div>
          
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl text-primary-foreground max-w-3xl mx-auto leading-tight"
            style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
          >
            Harness the power of intelligent systems
          </h2>
        </motion.div>
      </div>
      
      {/* Bottom decorative zigzag border */}
      <div className="absolute inset-x-0 bottom-0">
        <svg viewBox="0 0 1200 24" className="w-full h-6" preserveAspectRatio="none">
          <pattern id="bottomZigzag" width="24" height="24" patternUnits="userSpaceOnUse">
            <path 
              d="M0 12 L6 6 L12 12 L18 6 L24 12 L24 24 L0 24 Z" 
              fill="hsl(var(--primary-foreground))" 
              opacity="0.15"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#bottomZigzag)" />
        </svg>
      </div>
    </section>
  );
};
