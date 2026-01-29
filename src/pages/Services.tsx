import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { motion } from "framer-motion";
import { useContactPopup } from "@/contexts/ContactPopupContext";
import { ServiceCard } from "@/components/services/ServiceCard";
import { FeatureCard } from "@/components/services/FeatureCard";
import { GetStartedCard } from "@/components/services/GetStartedCard";
import { 
  Workflow, 
  BarChart3, 
  MessageSquare, 
  Cpu
} from "lucide-react";

const services = [
  {
    icon: Workflow,
    title: "Kill Manual Work",
    description: "We replace repetitive human tasks with automation systems that run 24/7 — without reminders, follow-ups, or errors.",
    gradientClass: "bg-gradient-to-br from-blue-400 via-blue-300 to-amber-300",
  },
  {
    icon: MessageSquare,
    title: "Never Miss a Lead Again",
    description: "We deploy Voice AI agents and conversational systems that answer, qualify, and book — instantly.",
    gradientClass: "bg-gradient-to-br from-teal-400 via-cyan-300 to-blue-300",
  },
  {
    icon: BarChart3,
    title: "Make Data Speak",
    description: "We build AI-driven reporting systems that turn raw numbers into live dashboards, alerts, and decisions.",
    gradientClass: "bg-gradient-to-br from-orange-300 via-yellow-300 to-green-300",
  },
  {
    icon: Cpu,
    title: "Build What Off-The-Shelf Can't",
    description: "We build custom ERP, CRM, and AI-powered infrastructure designed around how your business actually works.",
    gradientClass: "bg-gradient-to-br from-purple-300 via-pink-300 to-rose-300",
  },
];

const featureCategories = [
  {
    title: "Workflow Automation",
    features: [
      "CRM updates & data sync",
      "Automated reporting & approvals",
      "Lead routing & notifications",
      "Document processing & extraction",
    ],
  },
  {
    title: "AI-Powered Communication",
    features: [
      "Voice AI for sales calls",
      "Intelligent appointment booking",
      "24/7 customer support bots",
      "Multi-channel engagement",
    ],
  },
  {
    title: "Custom Infrastructure",
    features: [
      "Tailored ERP & CRM systems",
      "Industrial & IoT automation",
      "Energy & resource optimization",
      "Real-time analytics dashboards",
    ],
  },
];

const getStartedOptions = [
  {
    title: "Partner with us on your AI strategy",
    features: [
      "Work with AI advisors to solve complex challenges",
      "Get hands-on deployment guidance",
      "Receive a custom automation roadmap",
    ],
    buttonText: "Get a Free Consultation",
  },
  {
    title: "Start with a focused pilot",
    features: [
      "Pick one workflow to automate first",
      "See results in 6-8 weeks",
      "Scale based on proven ROI",
    ],
    buttonText: "Book a Strategy Call",
  },
];

const Services = () => {
  const { openPopup } = useContactPopup();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section - Kept intact */}
        <section className="pt-44 pb-20 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 
                className="text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.15] mb-6"
                style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
              >
                What We Do
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
                We don't sell tools. We build systems that remove friction, eliminate busywork, and let your team focus on what actually moves the needle.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={openPopup}
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-md text-sm font-medium border border-border bg-background hover:bg-secondary/50 transition-colors"
                >
                  Contact Sales
                </button>
                <button
                  onClick={openPopup}
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-md text-sm font-medium bg-foreground text-background hover:bg-foreground/90 transition-colors"
                >
                  Start Building
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {services.map((service, index) => (
                <ServiceCard
                  key={service.title}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  gradientClass={service.gradientClass}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Green Banner Section */}
        <section className="relative bg-[#5c6650] overflow-hidden">
          <div className="container mx-auto px-4 py-24 md:py-32 flex flex-col items-center justify-center">
            {/* Decorative Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <div className="w-24 h-24 md:w-32 md:h-32 bg-[#a4a86c] rounded-lg flex items-center justify-center shadow-lg">
                <svg className="w-12 h-12 md:w-16 md:h-16 text-[#5c6650]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M9 9L15 15M15 9L9 15" />
                </svg>
              </div>
            </motion.div>
            
            {/* Main Text */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl text-white text-center max-w-3xl"
              style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
            >
              Harness the power of intelligent systems
            </motion.h2>
          </div>
          
          {/* Zigzag Bottom Pattern */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg 
              className="w-full h-4 md:h-6" 
              viewBox="0 0 1200 24" 
              preserveAspectRatio="none"
              fill="none"
            >
              <path 
                d="M0 12 L15 0 L30 12 L45 0 L60 12 L75 0 L90 12 L105 0 L120 12 L135 0 L150 12 L165 0 L180 12 L195 0 L210 12 L225 0 L240 12 L255 0 L270 12 L285 0 L300 12 L315 0 L330 12 L345 0 L360 12 L375 0 L390 12 L405 0 L420 12 L435 0 L450 12 L465 0 L480 12 L495 0 L510 12 L525 0 L540 12 L555 0 L570 12 L585 0 L600 12 L615 0 L630 12 L645 0 L660 12 L675 0 L690 12 L705 0 L720 12 L735 0 L750 12 L765 0 L780 12 L795 0 L810 12 L825 0 L840 12 L855 0 L870 12 L885 0 L900 12 L915 0 L930 12 L945 0 L960 12 L975 0 L990 12 L1005 0 L1020 12 L1035 0 L1050 12 L1065 0 L1080 12 L1095 0 L1110 12 L1125 0 L1140 12 L1155 0 L1170 12 L1185 0 L1200 12 L1200 24 L0 24 Z" 
                className="fill-[#a4a86c]/40"
              />
            </svg>
          </div>
        </section>

        {/* Service Highlight Cards Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="space-y-6">
              {/* Card 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col md:flex-row rounded-xl overflow-hidden border border-border"
              >
                <div className="flex-1 bg-[#f5f3ee] p-8 md:p-10 flex flex-col justify-center">
                  <span className="text-sm text-muted-foreground mb-3">Workflow Automation</span>
                  <h3 
                    className="text-2xl md:text-3xl text-foreground mb-4"
                    style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
                  >
                    End-to-end process automation that eliminates manual bottlenecks
                  </h3>
                  <button 
                    onClick={openPopup}
                    className="inline-flex items-center justify-center w-fit px-5 py-2.5 text-sm font-medium border border-foreground rounded-md hover:bg-foreground hover:text-background transition-colors"
                  >
                    Learn More
                  </button>
                </div>
                <div className="w-full md:w-64 h-48 md:h-auto bg-[#c25a3c] flex items-center justify-center">
                  <svg className="w-16 h-16 text-[#a34830]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L12 22M2 12L22 12M4.93 4.93L19.07 19.07M19.07 4.93L4.93 19.07" stroke="currentColor" strokeWidth="2" fill="none"/>
                  </svg>
                </div>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex flex-col md:flex-row rounded-xl overflow-hidden border border-border"
              >
                <div className="flex-1 bg-[#f5f3ee] p-8 md:p-10 flex flex-col justify-center">
                  <span className="text-sm text-muted-foreground mb-3">AI Communication</span>
                  <h3 
                    className="text-2xl md:text-3xl text-foreground mb-4"
                    style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
                  >
                    Voice AI agents that handle calls, qualify leads, and book meetings
                  </h3>
                  <button 
                    onClick={openPopup}
                    className="inline-flex items-center justify-center w-fit px-5 py-2.5 text-sm font-medium border border-foreground rounded-md hover:bg-foreground hover:text-background transition-colors"
                  >
                    Learn More
                  </button>
                </div>
                <div className="w-full md:w-64 h-48 md:h-auto bg-[#4a7c59] flex items-center justify-center">
                  <svg className="w-16 h-16 text-[#3a6347]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L12 22M2 12L22 12M4.93 4.93L19.07 19.07M19.07 4.93L4.93 19.07" stroke="currentColor" strokeWidth="2" fill="none"/>
                  </svg>
                </div>
              </motion.div>

              {/* Card 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col md:flex-row rounded-xl overflow-hidden border border-border"
              >
                <div className="flex-1 bg-[#f5f3ee] p-8 md:p-10 flex flex-col justify-center">
                  <span className="text-sm text-muted-foreground mb-3">Custom Infrastructure</span>
                  <h3 
                    className="text-2xl md:text-3xl text-foreground mb-4"
                    style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
                  >
                    Tailored ERP, CRM, and AI systems built for how you actually work
                  </h3>
                  <button 
                    onClick={openPopup}
                    className="inline-flex items-center justify-center w-fit px-5 py-2.5 text-sm font-medium border border-foreground rounded-md hover:bg-foreground hover:text-background transition-colors"
                  >
                    Learn More
                  </button>
                </div>
                <div className="w-full md:w-64 h-48 md:h-auto bg-[#c25a3c] flex items-center justify-center">
                  <svg className="w-16 h-16 text-[#a34830]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L12 22M2 12L22 12M4.93 4.93L19.07 19.07M19.07 4.93L4.93 19.07" stroke="currentColor" strokeWidth="2" fill="none"/>
                  </svg>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24 bg-card/30 border-y border-border">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12 md:mb-16"
            >
              <h2 
                className="text-3xl md:text-4xl lg:text-5xl text-foreground mb-4"
                style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
              >
                Enterprise-grade capabilities
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Everything you need to automate at scale
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featureCategories.map((category, index) => (
                <FeatureCard
                  key={category.title}
                  title={category.title}
                  features={category.features}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Get Started Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12 md:mb-16"
            >
              <h2 
                className="text-3xl md:text-4xl lg:text-5xl text-foreground"
                style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
              >
                Get started
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {getStartedOptions.map((option, index) => (
                <GetStartedCard
                  key={option.title}
                  title={option.title}
                  features={option.features}
                  buttonText={option.buttonText}
                  onButtonClick={openPopup}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
