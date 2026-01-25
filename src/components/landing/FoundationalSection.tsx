import { motion } from "framer-motion";

const features = [
  {
    category: "DISCOVERY",
    title: "What's slowing your business down",
    description: "Manual processes, delays, and operational friction.",
    variant: "dark" as const,
  },
  {
    category: "EXECUTION",
    title: "AI that runs your workflows",
    description: "Automations that work 24/7 without hiring.",
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
                style={{ border: '3px solid hsl(var(--foreground))' }}
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

                {/* Description */}
                <p className={`text-base mt-4 max-w-[260px] ${
                  feature.variant === "dark" ? "text-background/70" : "text-muted-foreground"
                }`}>
                  {feature.description}
                </p>

                {/* Illustration area - placeholder with technical drawing style */}
                <div className="mt-auto pt-8 flex justify-center">
                  {feature.variant === "dark" ? (
                    <svg viewBox="0 0 200 140" className="w-48 h-32 opacity-80">
                      {/* Technical illustration - magnifying glass and card */}
                      <ellipse cx="120" cy="50" rx="40" ry="20" fill="none" stroke="currentColor" strokeWidth="1.5" />
                      <line x1="85" y1="65" x2="60" y2="100" stroke="currentColor" strokeWidth="1.5" />
                      <rect x="50" y="95" width="60" height="35" rx="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
                      <line x1="58" y1="105" x2="100" y2="105" stroke="currentColor" strokeWidth="1" opacity="0.5" />
                      <line x1="58" y1="115" x2="85" y2="115" stroke="currentColor" strokeWidth="1" opacity="0.5" />
                      {/* Grid lines */}
                      <line x1="0" y1="140" x2="200" y2="140" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
                      <line x1="40" y1="130" x2="40" y2="140" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
                      <line x1="80" y1="130" x2="80" y2="140" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
                      <line x1="120" y1="130" x2="120" y2="140" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
                      <line x1="160" y1="130" x2="160" y2="140" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 200 140" className="w-48 h-32 opacity-70">
                      {/* Isometric illustration - shapes and grid */}
                      {/* 3D Box */}
                      <polygon points="130,40 160,55 130,70 100,55" fill="none" stroke="currentColor" strokeWidth="1.5" />
                      <polygon points="130,70 160,55 160,80 130,95" fill="none" stroke="currentColor" strokeWidth="1.5" />
                      <polygon points="130,70 100,55 100,80 130,95" fill="none" stroke="currentColor" strokeWidth="1.5" />
                      {/* Cylinder */}
                      <ellipse cx="70" cy="85" rx="25" ry="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
                      <ellipse cx="70" cy="85" rx="25" ry="10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 2" />
                      {/* Small elements */}
                      <rect x="140" y="100" width="30" height="20" rx="2" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3 2" />
                      <rect x="40" y="110" width="25" height="15" rx="2" fill="none" stroke="currentColor" strokeWidth="1" />
                      {/* Dotted circle */}
                      <circle cx="100" cy="110" r="15" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 3" />
                    </svg>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
