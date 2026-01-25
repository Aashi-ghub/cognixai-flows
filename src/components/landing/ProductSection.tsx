import { motion } from "framer-motion";
import { Phone, Workflow, BarChart3, ArrowRight } from "lucide-react";

const products = [
  {
    icon: Phone,
    name: "Cognix Voice Agent",
    description: "Handles real inbound and outbound calls for support, collections, and sales.",
    link: "#",
  },
  {
    icon: Workflow,
    name: "Cognix Orchestrator",
    description: "Connects your voice agent to CRM, ERP, ticketing, and payment systems.",
    link: "#",
  },
  {
    icon: BarChart3,
    name: "Cognix Insights",
    description: "Searchable transcripts, QA scoring, and call analytics at your fingertips.",
    link: "#",
  },
];

export const ProductSection = () => {
  return (
    <section id="product" className="section-padding bg-background">
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-3">
            CognixAI Product Suite
          </p>
        </motion.div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <motion.a
              key={product.name}
              href={product.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group feature-card hover:border-primary/30 transition-all duration-300"
            >
              {/* Icon */}
              <div className="icon-circle mb-6">
                <product.icon className="w-6 h-6 text-primary" />
              </div>

              {/* Name */}
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {product.name}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed mb-4">
                {product.description}
              </p>

              {/* Link */}
              <span className="inline-flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more
                <ArrowRight className="w-4 h-4 ml-1" />
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
