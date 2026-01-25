import { motion } from "framer-motion";
import productVoiceAgent from "@/assets/product-voice-agent.png";
import productOrchestrator from "@/assets/product-orchestrator.png";
import productInsights from "@/assets/product-insights.png";

const products = [
  {
    image: productVoiceAgent,
    name: "Cognix Voice Agent",
    description: "Handles real inbound and outbound calls for support, collections, and sales.",
  },
  {
    image: productOrchestrator,
    name: "Cognix Orchestrator",
    description: "Connects your voice agent to CRM, ERP, ticketing, and payment systems.",
  },
  {
    image: productInsights,
    name: "Cognix Insights",
    description: "Searchable transcripts, QA scoring, and call analytics at your fingertips.",
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

        {/* Product Cards - Full Image Style */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-3xl overflow-hidden aspect-[3/4] cursor-pointer"
              style={{ border: '1px solid hsl(var(--border))' }}
            >
              {/* Full Image Background */}
              <img
                src={product.image}
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              {/* Content Overlay at Bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-semibold mb-2">
                  {product.name}
                </h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  {product.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
