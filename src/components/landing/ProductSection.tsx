import { motion } from "framer-motion";
import { BadgeCheck, ArrowRight } from "lucide-react";
import productVoiceAgent from "@/assets/product-voice-agent.jpg";
import productOrchestrator from "@/assets/product-orchestrator.jpg";
import productInsights from "@/assets/product-insights.jpg";

const products = [
  {
    image: productVoiceAgent,
    name: "Cognix Voice Agent",
    description: "Handles real inbound and outbound calls for support, collections, and sales with human-like conversations.",
    stats: { calls: "50K+", rating: "4.9" },
  },
  {
    image: productOrchestrator,
    name: "Cognix Orchestrator",
    description: "Connects your voice agent to CRM, ERP, ticketing, and payment systems seamlessly.",
    stats: { integrations: "100+", uptime: "99.9%" },
  },
  {
    image: productInsights,
    name: "Cognix Insights",
    description: "Searchable transcripts, QA scoring, and call analytics at your fingertips.",
    stats: { analyzed: "1M+", accuracy: "98%" },
  },
];

export const ProductSection = () => {
  return (
    <section id="products" className="section-padding bg-background">
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-foreground">
            CognixAI Product Suite
          </h2>
        </motion.div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              style={{ border: '1px solid hsl(var(--border))' }}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden aspect-[4/5]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Name with badge */}
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-xl font-semibold text-foreground">
                    {product.name}
                  </h3>
                  <BadgeCheck className="w-5 h-5 text-primary fill-primary/20" />
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  {product.description}
                </p>

                {/* Stats & Action */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    {Object.entries(product.stats).map(([key, value]) => (
                      <span key={key} className="flex items-center gap-1">
                        <span className="font-medium text-foreground">{value}</span>
                        <span className="capitalize">{key}</span>
                      </span>
                    ))}
                  </div>
                  <button className="inline-flex items-center gap-1 px-4 py-2 rounded-full border border-border text-sm font-medium text-foreground hover:bg-secondary transition-colors">
                    Explore
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
