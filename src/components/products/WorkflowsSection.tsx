import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface WorkflowItem {
  title: string;
  description: string;
  previewText: string;
}

interface WorkflowsSectionProps {
  headline: string;
  description: string;
  items: WorkflowItem[];
}

export const WorkflowsSection = ({ headline, description, items }: WorkflowsSectionProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <section className="container mx-auto px-4 lg:px-8 mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <span className="px-4 py-1.5 text-xs font-medium tracking-wider border border-border rounded-full bg-card/70 text-foreground">
            Workflows
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-foreground text-center mb-4">
          {headline}
        </h2>

        {/* Description */}
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          {description}
        </p>

        {/* Two-column layout */}
        <div className="grid gap-8 lg:gap-12 lg:grid-cols-2 items-start">
          {/* Left: Feature list */}
          <div className="space-y-0">
            {items.map((item, index) => (
              <div
                key={index}
                className={`border-t border-border py-5 cursor-pointer transition-colors ${
                  index === items.length - 1 ? "border-b" : ""
                }`}
                onClick={() => setActiveIndex(index)}
              >
                <h3
                  className={`text-lg font-medium transition-colors ${
                    activeIndex === index
                      ? "text-foreground"
                      : "text-muted-foreground"
                  }`}
                >
                  {item.title}
                </h3>
                <AnimatePresence mode="wait">
                  {activeIndex === index && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-sm text-muted-foreground mt-3 leading-relaxed overflow-hidden"
                    >
                      {item.description}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Right: Preview card */}
          <div className="rounded-2xl bg-gradient-to-br from-[#5c6650] via-[#4a5840] to-[#3d4a35] p-6 lg:p-8 min-h-[280px] md:min-h-[320px] flex items-center justify-center relative overflow-hidden">
            {/* Decorative dots */}
            <div className="absolute top-8 left-8 flex gap-2">
              <div className="w-2 h-2 rounded-full bg-white/20" />
              <div className="w-2 h-2 rounded-full bg-white/30" />
              <div className="w-2 h-2 rounded-full bg-white/20" />
            </div>
            <div className="absolute bottom-12 left-12 flex flex-col gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
              <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
            </div>
            
            {/* Preview content card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="bg-card/95 backdrop-blur-sm rounded-xl p-5 max-w-sm shadow-lg"
              >
                <p className="text-sm text-foreground leading-relaxed mb-4">
                  {items[activeIndex].previewText}
                </p>
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1.5 text-xs text-primary">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    Completed
                  </span>
                  <span className="text-xs text-muted-foreground">
                    ID-{String(activeIndex + 1).padStart(4, "0")}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
