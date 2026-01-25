import { motion } from "framer-motion";
import geometricDark from "@/assets/geometric-dark.jpg";
import geometricLight from "@/assets/geometric-light.jpg";

const features = [
  {
    category: "DISCOVERY",
    title: "Uncovering insights that guide the rest of the process",
    variant: "dark" as const,
  },
  {
    category: "PRODUCTION",
    title: "This is where structure and design begin to take shape",
    variant: "light" as const,
  },
];

export const FoundationalSection = () => {
  return (
    <section className="section-padding foundational-section-bg">
      <div className="container mx-auto px-8 lg:px-16 xl:px-24">
        {/* White container box for heading and cards */}
        <div className="bg-white rounded-3xl px-8 py-12 lg:px-16 lg:py-16 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-foreground">
              Foundational Voice AI that India can rely on
            </h2>
          </motion.div>

          {/* Features Grid - 2 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative rounded-2xl p-8 lg:p-10 min-h-[400px] flex flex-col ${
                  feature.variant === "dark"
                    ? "bg-foreground text-background"
                    : "bg-[#f0f2ef] text-foreground"
                }`}
                style={{ border: feature.variant === "dark" ? '3px solid hsl(var(--foreground))' : 'none' }}
              >
                {/* Vertical dotted decoration */}
                <div 
                  className="absolute top-5 right-5 w-6 h-[calc(100%-40px)]"
                  style={{
                    backgroundImage: `radial-gradient(circle, ${feature.variant === "dark" ? 'rgba(255,255,255,0.3)' : 'hsl(114, 10%, 72%)'} 2px, transparent 2px)`,
                    backgroundSize: '12px 12px',
                    backgroundRepeat: 'repeat-y',
                    backgroundPosition: 'center',
                  }}
                />

                {/* Category Label */}
                <span className={`text-xs font-medium tracking-widest mb-4 ${
                  feature.variant === "dark" ? "text-background/70" : "text-muted-foreground"
                }`}>
                  {feature.category}
                </span>

                {/* Title */}
                <h3 className={`text-2xl lg:text-3xl leading-snug max-w-[280px] ${
                  feature.variant === "dark" ? "text-background" : "text-foreground"
                }`}>
                  {feature.title}
                </h3>

                {/* Geometric illustration */}
                <div className="mt-auto pt-8 flex justify-center">
                  <img 
                    src={feature.variant === "dark" ? geometricDark : geometricLight} 
                    alt="Geometric illustration"
                    className="w-48 h-32 object-cover rounded-lg opacity-80"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
