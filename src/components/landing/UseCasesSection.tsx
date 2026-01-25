import { motion } from "framer-motion";
import { Calculator, Truck, HeadphonesIcon, Users, FileText, ShoppingCart } from "lucide-react";

const useCases = [
  {
    icon: Calculator,
    title: "Finance & Accounting",
    pain: "Manual reconciliation and approval bottlenecks",
    outcome: "80% faster close cycles with AI-powered automation",
  },
  {
    icon: Truck,
    title: "Supply Chain & Logistics",
    pain: "Fragmented visibility across vendors and shipments",
    outcome: "Real-time orchestration with predictive insights",
  },
  {
    icon: HeadphonesIcon,
    title: "Customer Support",
    pain: "High ticket volumes and slow resolution times",
    outcome: "AI co-pilots that resolve 70% of queries instantly",
  },
  {
    icon: Users,
    title: "HR & Recruitment",
    pain: "Time-consuming screening and onboarding processes",
    outcome: "Automated candidate workflows and compliance",
  },
  {
    icon: FileText,
    title: "Document Processing",
    pain: "Manual data extraction from invoices and contracts",
    outcome: "Intelligent OCR with 99% accuracy extraction",
  },
  {
    icon: ShoppingCart,
    title: "Order Management",
    pain: "Disconnected systems causing fulfillment delays",
    outcome: "End-to-end order automation across channels",
  },
];

export const UseCasesSection = () => {
  return (
    <section id="solutions" className="py-24 bg-background">
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
            Transforming <span className="text-gradient-primary">Enterprise Operations</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how CognixAI agents are automating critical workflows across industries.
          </p>
        </motion.div>

        {/* Use Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group glass-card p-6 hover-glow cursor-pointer transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <useCase.icon className="w-6 h-6 text-accent" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold font-display mb-3 text-foreground group-hover:text-accent transition-colors">
                {useCase.title}
              </h3>

              {/* Pain Point */}
              <p className="text-sm text-muted-foreground mb-3 italic">
                "{useCase.pain}"
              </p>

              {/* Outcome */}
              <p className="text-sm text-foreground/80 font-medium">
                → {useCase.outcome}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
