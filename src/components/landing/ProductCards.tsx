import { motion } from "framer-motion";
import { Workflow, Bot, BarChart3, Sparkles } from "lucide-react";

const products = [
  {
    icon: Workflow,
    name: "Cognix Flows",
    description: "Visual workflows to connect ERPs, CRMs, and internal tools with AI agents.",
    status: "Now Available",
    statusColor: "bg-primary",
  },
  {
    icon: Bot,
    name: "Cognix Agents",
    description: "Domain-specialized AI agents for finance, operations, and customer support.",
    status: "Now Available",
    statusColor: "bg-primary",
  },
  {
    icon: BarChart3,
    name: "Cognix Insights",
    description: "Real-time analytics and observability across all your automations.",
    status: "Coming Soon",
    statusColor: "bg-accent",
  },
  {
    icon: Sparkles,
    name: "Cognix Studio",
    description: "No-code builder for custom AI agents and workflow automation.",
    status: "Coming Soon",
    statusColor: "bg-accent",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const ProductCards = () => {
  return (
    <section id="products" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
            The <span className="text-gradient-primary">Cognix Platform</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A complete suite of tools to build, deploy, and manage AI-powered automation at scale.
          </p>
        </motion.div>

        {/* Product Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {products.map((product) => (
            <motion.div
              key={product.name}
              variants={itemVariants}
              className="group glass-card p-6 hover-glow cursor-pointer transition-all duration-300 hover:translate-y-[-4px]"
            >
              {/* Status Badge */}
              <div className="flex items-center gap-2 mb-4">
                <span className={`w-2 h-2 rounded-full ${product.statusColor}`} />
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                  {product.status}
                </span>
              </div>

              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                <product.icon className="w-6 h-6 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold font-display mb-2 text-foreground group-hover:text-primary transition-colors">
                {product.name}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {product.description}
              </p>

              {/* Hover Arrow */}
              <div className="mt-4 flex items-center text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-sm font-medium">Learn more</span>
                <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
