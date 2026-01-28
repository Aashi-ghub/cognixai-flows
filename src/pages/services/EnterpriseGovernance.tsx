import { motion } from "framer-motion";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { ArrowRight, Shield, Server, Database } from "lucide-react";
import { useContactPopup } from "@/contexts/ContactPopupContext";

const services = [
  {
    icon: Shield,
    title: "The AI Control Tower (Governance Framework)",
    description: "Comprehensive governance framework to deploy, monitor, and control AI models safely."
  },
  {
    icon: Server,
    title: "Private LLM Deployment & Fine-tuning",
    description: "Deploy and customize large language models within your secure infrastructure."
  },
  {
    icon: Database,
    title: "Vector Database Architecture",
    description: "Design and implement scalable vector databases for AI-powered applications."
  }
];

const EnterpriseGovernance = () => {
  const { openPopup } = useContactPopup();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-40 pb-20 bg-gradient-to-b from-[#f5f3ee] to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-medium tracking-wider uppercase bg-[#4a7c59]/10 text-[#4a7c59] rounded-full">
              Service Category
            </span>
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl mb-6 text-foreground"
              style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
            >
              Enterprise Governance & Infrastructure
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 
              className="text-2xl md:text-3xl mb-6 text-foreground"
              style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
            >
              Why This Matters
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              AI without governance is a liability. This cluster builds the "Control Tower" necessary 
              to deploy models safely, monitor their performance, and ensure data security across the organization.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Green Banner */}
      <section className="relative bg-[#5c6650] overflow-hidden">
        <div className="container mx-auto px-4 py-16 md:py-20 flex flex-col items-center justify-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl lg:text-4xl text-white text-center max-w-3xl"
            style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
          >
            Included Services
          </motion.h2>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-[#f5f3ee]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-4">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background rounded-2xl p-6 md:p-8 border border-border hover:shadow-lg transition-shadow flex items-start gap-5"
              >
                <div className="w-12 h-12 bg-[#4a7c59]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <service.icon className="w-6 h-6 text-[#4a7c59]" />
                </div>
                <div>
                  <h3 
                    className="text-lg md:text-xl mb-2 text-foreground"
                    style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm md:text-base">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 
              className="text-3xl md:text-4xl mb-6 text-foreground"
              style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
            >
              Ready to build your AI governance framework?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss how to deploy AI safely and securely in your organization.
            </p>
            <button
              onClick={openPopup}
              className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background rounded-lg font-medium hover:bg-foreground/90 transition-colors"
            >
              Get Started
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EnterpriseGovernance;
