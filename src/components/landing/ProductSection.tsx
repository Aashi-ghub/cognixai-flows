import { motion } from "framer-motion";
import { Phone, Workflow, BarChart3, ArrowRight } from "lucide-react";

const products = [
  {
    icon: Phone,
    name: "Cognix Voice Agent",
    description: "Handles real inbound and outbound calls for support, collections, and sales with human-like conversations.",
    tag: "VOICE",
  },
  {
    icon: Workflow,
    name: "Cognix Orchestrator",
    description: "Connects your voice agent to CRM, ERP, ticketing, and payment systems seamlessly.",
    tag: "PLATFORM",
  },
  {
    icon: BarChart3,
    name: "Cognix Insights",
    description: "Searchable transcripts, QA scoring, and call analytics at your fingertips.",
    tag: "ANALYTICS",
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
            <motion.a
              key={product.name}
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group sarvam-card hover:shadow-lg transition-shadow"
            >
              {/* Tag */}
              <span className="text-xs font-medium tracking-wider text-muted-foreground mb-6 block">
                {product.tag}
              </span>

              {/* Icon */}
              <div className="icon-sarvam mb-6">
                <product.icon className="w-6 h-6 text-foreground/70" strokeWidth={1.5} />
              </div>

              {/* Name */}
              <h3 className="text-xl lg:text-2xl text-foreground mb-4 group-hover:text-primary transition-colors">
                {product.name}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed mb-6">
                {product.description}
              </p>

              {/* Link */}
              <span className="inline-flex items-center text-sm font-medium text-primary">
                Learn more
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
