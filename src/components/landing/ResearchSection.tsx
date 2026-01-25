import { motion } from "framer-motion";
import { ArrowUpRight, FileText, Lightbulb, Cpu } from "lucide-react";

const researchItems = [
  {
    icon: FileText,
    type: "Whitepaper",
    title: "The Future of Agentic Enterprise Automation",
    description: "How autonomous AI agents are reshaping business operations and decision-making.",
    link: "#",
  },
  {
    icon: Lightbulb,
    type: "Case Study",
    title: "Fortune 500 Reduces Processing Time by 85%",
    description: "Learn how a leading financial services firm deployed Cognix Agents at scale.",
    link: "#",
  },
  {
    icon: Cpu,
    type: "Technical Report",
    title: "Building Reliable Multi-Agent Systems",
    description: "Our approach to orchestrating multiple AI agents for complex workflows.",
    link: "#",
  },
];

export const ResearchSection = () => {
  return (
    <section id="research" className="py-24 bg-card/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-12"
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
              Our <span className="text-gradient-primary">Research</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl">
              Insights from the frontier of AI automation and agentic systems.
            </p>
          </div>
          <a
            href="#"
            className="mt-4 md:mt-0 inline-flex items-center text-primary hover:text-primary/80 transition-colors font-medium"
          >
            View all research
            <ArrowUpRight className="w-4 h-4 ml-1" />
          </a>
        </motion.div>

        {/* Research Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {researchItems.map((item, index) => (
            <motion.a
              key={item.title}
              href={item.link}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group glass-card p-6 hover-glow transition-all duration-300 hover:translate-y-[-4px]"
            >
              {/* Type Badge */}
              <div className="flex items-center gap-2 mb-4">
                <item.icon className="w-4 h-4 text-primary" />
                <span className="text-xs font-medium text-primary uppercase tracking-wide">
                  {item.type}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold font-display mb-3 text-foreground group-hover:text-primary transition-colors">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {item.description}
              </p>

              {/* Read Link */}
              <div className="flex items-center text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-sm font-medium">Read more</span>
                <ArrowUpRight className="w-4 h-4 ml-1" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
