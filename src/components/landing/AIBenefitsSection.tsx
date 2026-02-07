import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useContactPopup } from "@/contexts/ContactPopupContext";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  ReferenceDot,
} from "recharts";

interface Stage {
  name: string;
  shortName: string;
  operatingMargin: number;
  operationalCapacity: number;
  marginDescription: string;
  capacityDescription: string;
  x: number;
  y: number;
}

const stages: Stage[] = [
  {
    name: "Manual Operations",
    shortName: "Manual Operations",
    operatingMargin: 8.2,
    operationalCapacity: 12.5,
    marginDescription: "Baseline operating costs with fully manual processes. High labor costs limit profit margins.",
    capacityDescription: "Limited capacity constrained by available human resources and working hours.",
    x: 0,
    y: 20,
  },
  {
    name: "AI-Accelerated Teams",
    shortName: "AI-Accelerated Teams",
    operatingMargin: 18.4,
    operationalCapacity: 24.8,
    marginDescription: "Win competitive bids at pricing competitors must decline. Your cost structure allows 25% lower pricing while maintaining healthy margins.",
    capacityDescription: "Scale into new markets without proportional headcount growth. Launch products or geographies in weeks that previously required building entire teams.",
    x: 1,
    y: 45,
  },
  {
    name: "AI-Enabled Ops",
    shortName: "AI-Enabled Ops",
    operatingMargin: 31.6,
    operationalCapacity: 32.4,
    marginDescription: "Structural cost advantage over competitors. Maintain premium service levels while operating at significantly lower cost per transaction.",
    capacityDescription: "Scale your organization without scaling headcount. Handle enterprise contract volumes that would require 200+ employees with teams of 25-30.",
    x: 2,
    y: 70,
  },
  {
    name: "Fully AI-Native",
    shortName: "Fully AI-Native",
    operatingMargin: 45.2,
    operationalCapacity: 48.6,
    marginDescription: "Industry-leading margins through AI-first operations. Sustainable competitive advantage that compounds over time.",
    capacityDescription: "Unlimited scalability with minimal marginal cost. Handle 10x volume increases without proportional resource additions.",
    x: 3,
    y: 95,
  },
];

// Chart data points for the curve
const chartData = [
  { x: 0, y: 20 },
  { x: 0.3, y: 28 },
  { x: 0.6, y: 35 },
  { x: 1, y: 45 },
  { x: 1.3, y: 52 },
  { x: 1.6, y: 60 },
  { x: 2, y: 70 },
  { x: 2.3, y: 78 },
  { x: 2.6, y: 86 },
  { x: 3, y: 95 },
];

export const AIBenefitsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [displayedMargin, setDisplayedMargin] = useState(stages[0].operatingMargin);
  const [displayedCapacity, setDisplayedCapacity] = useState(stages[0].operationalCapacity);
  const animationRef = useRef<number | null>(null);
  const { openPopup } = useContactPopup();

  // Auto-cycle through stages
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % stages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Animate numbers when stage changes
  useEffect(() => {
    const targetMargin = stages[activeIndex].operatingMargin;
    const targetCapacity = stages[activeIndex].operationalCapacity;
    const startMargin = displayedMargin;
    const startCapacity = displayedCapacity;
    const duration = 800;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function
      const easeOut = 1 - Math.pow(1 - progress, 3);
      
      setDisplayedMargin(startMargin + (targetMargin - startMargin) * easeOut);
      setDisplayedCapacity(startCapacity + (targetCapacity - startCapacity) * easeOut);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [activeIndex]);

  const currentStage = stages[activeIndex];

  return (
    <section className="section-padding bg-[#0f1410]">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-4">
            Scale without headcount,
            <br />
            cut operational costs and
            <br />
            learn from every interaction
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            From startups to Fortune 500 Shared Services centers: See how
            operations leaders are reaching 95% automation.
          </p>
        </motion.div>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="rounded-2xl bg-gradient-to-br from-[#1a1f16] via-[#161a12] to-[#0f120c] border border-white/10 overflow-hidden"
        >
          {/* Top Section with Chart */}
          <div className="p-6 md:p-8 lg:p-10">
            <div className="grid lg:grid-cols-[1fr,2fr] gap-8 items-center">
              {/* Left: Text */}
              <div>
                <h3 className="text-xl md:text-2xl text-white mb-2">
                  We Transform Organizations
                  <br />
                  Into AI-Native Market Leaders
                </h3>
                <button
                  onClick={() => openPopup()}
                  className="mt-4 px-5 py-2 text-sm font-medium border border-white/30 text-white rounded-md hover:bg-white/10 transition-colors"
                >
                  Learn how
                </button>
              </div>

              {/* Right: Chart */}
              <div className="relative h-64 md:h-72">
                {/* Grid lines */}
                <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="border-t border-white/5 w-full" />
                  ))}
                </div>
                
                {/* Recharts Line */}
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={chartData} margin={{ top: 20, right: 40, bottom: 20, left: 20 }}>
                    <XAxis dataKey="x" hide />
                    <YAxis hide domain={[0, 100]} />
                    <Line
                      type="monotone"
                      dataKey="y"
                      stroke="hsl(var(--primary))"
                      strokeWidth={3}
                      dot={false}
                      animationDuration={800}
                    />
                    {/* Stage dots */}
                    {stages.map((stage, index) => (
                      <ReferenceDot
                        key={stage.name}
                        x={stage.x}
                        y={stage.y}
                        r={index === activeIndex ? 10 : 6}
                        fill={index === activeIndex ? "hsl(var(--primary))" : "#1a1f16"}
                        stroke="hsl(var(--primary))"
                        strokeWidth={2}
                      />
                    ))}
                  </LineChart>
                </ResponsiveContainer>

                {/* Stage Labels */}
                {stages.map((stage, index) => {
                  const leftPercent = (stage.x / 3) * 100;
                  const bottomPercent = stage.y;
                  return (
                    <motion.div
                      key={stage.name}
                      initial={{ opacity: 0 }}
                      animate={{ 
                        opacity: index <= activeIndex ? 1 : 0.3,
                        scale: index === activeIndex ? 1 : 0.95
                      }}
                      transition={{ duration: 0.3 }}
                      className="absolute transform -translate-x-1/2"
                      style={{
                        left: `${leftPercent + 5}%`,
                        bottom: `${bottomPercent - 5}%`,
                      }}
                    >
                      <div 
                        className={`px-3 py-1.5 rounded-md text-xs font-medium whitespace-nowrap transition-colors ${
                          index === activeIndex 
                            ? 'bg-white/20 text-white' 
                            : 'bg-white/5 text-white/60'
                        }`}
                      >
                        {stage.shortName}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* FROM → TO Bar */}
          <div className="px-6 md:px-8 lg:px-10 py-4 bg-[#1a1d17] border-t border-white/10">
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-xs font-medium text-white/50 tracking-wider">FROM</span>
              {stages.map((stage, index) => (
                <div key={stage.name} className="flex items-center gap-3">
                  <span 
                    className={`text-sm transition-colors ${
                      index === 0 
                        ? 'text-primary font-medium' 
                        : index <= activeIndex 
                          ? 'text-white/80' 
                          : 'text-white/40'
                    }`}
                  >
                    {stage.shortName}
                  </span>
                  {index < stages.length - 1 && (
                    <motion.span 
                      animate={{ 
                        color: index < activeIndex ? 'hsl(var(--primary))' : 'rgba(255,255,255,0.3)'
                      }}
                      className="text-white/30"
                    >
                      →
                    </motion.span>
                  )}
                </div>
              ))}
              <span className="text-xs font-medium text-white/50 tracking-wider ml-auto">
                TO <span className="text-primary font-medium ml-2">{currentStage.shortName}</span>
              </span>
            </div>
          </div>

          {/* Metrics Cards */}
          <div className="grid md:grid-cols-2 gap-4 p-6 md:p-8 lg:p-10 pt-6">
            {/* Operating Margin */}
            <motion.div
              key={`margin-${activeIndex}`}
              className="bg-[#1a1d17] rounded-xl p-5 border border-white/5"
            >
              <p className="text-xs text-white/50 mb-1 tracking-wide">Operating Margin</p>
              <p className="text-3xl md:text-4xl font-semibold text-primary mb-3">
                +{displayedMargin.toFixed(1)}%
              </p>
              <AnimatePresence mode="wait">
                <motion.p
                  key={`margin-desc-${activeIndex}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="text-xs text-white/50 leading-relaxed"
                >
                  {currentStage.marginDescription}
                </motion.p>
              </AnimatePresence>
            </motion.div>

            {/* Operational Capacity */}
            <motion.div
              key={`capacity-${activeIndex}`}
              className="bg-[#1a1d17] rounded-xl p-5 border border-white/5"
            >
              <p className="text-xs text-white/50 mb-1 tracking-wide">Operational Capacity</p>
              <p className="text-3xl md:text-4xl font-semibold text-primary mb-3">
                +{displayedCapacity.toFixed(1)}%
              </p>
              <AnimatePresence mode="wait">
                <motion.p
                  key={`capacity-desc-${activeIndex}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="text-xs text-white/50 leading-relaxed"
                >
                  {currentStage.capacityDescription}
                </motion.p>
              </AnimatePresence>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
