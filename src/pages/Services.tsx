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
    gradientClass: "bg-gradient-to-br from-blue-200 via-blue-100 to-amber-100",
  },
  {
    icon: MessageSquare,
    title: "Never Miss a Lead Again",
    description: "We deploy Voice AI agents and conversational systems that answer, qualify, and book — instantly.",
    gradientClass: "bg-gradient-to-br from-teal-200 via-cyan-100 to-blue-100",
  },
  {
    icon: BarChart3,
    title: "Make Data Speak",
    description: "We build AI-driven reporting systems that turn raw numbers into live dashboards, alerts, and decisions.",
    gradientClass: "bg-gradient-to-br from-orange-100 via-yellow-100 to-green-100",
  },
  {
    icon: Cpu,
    title: "Build What Off-The-Shelf Can't",
    description: "We build custom ERP, CRM, and AI-powered infrastructure designed around how your business actually works.",
    gradientClass: "bg-gradient-to-br from-purple-100 via-pink-100 to-rose-100",
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
            
            {/* Zigzag Divider */}
            <div className="mt-16 md:mt-24 w-full overflow-hidden">
              <svg 
                className="w-full h-6 md:h-8" 
                viewBox="0 0 1200 32" 
                preserveAspectRatio="none"
                fill="none"
              >
                <path 
                  d="M0 16 L20 0 L40 16 L60 0 L80 16 L100 0 L120 16 L140 0 L160 16 L180 0 L200 16 L220 0 L240 16 L260 0 L280 16 L300 0 L320 16 L340 0 L360 16 L380 0 L400 16 L420 0 L440 16 L460 0 L480 16 L500 0 L520 16 L540 0 L560 16 L580 0 L600 16 L620 0 L640 16 L660 0 L680 16 L700 0 L720 16 L740 0 L760 16 L780 0 L800 16 L820 0 L840 16 L860 0 L880 16 L900 0 L920 16 L940 0 L960 16 L980 0 L1000 16 L1020 0 L1040 16 L1060 0 L1080 16 L1100 0 L1120 16 L1140 0 L1160 16 L1180 0 L1200 16 L1200 32 L1180 16 L1160 32 L1140 16 L1120 32 L1100 16 L1080 32 L1060 16 L1040 32 L1020 16 L1000 32 L980 16 L960 32 L940 16 L920 32 L900 16 L880 32 L860 16 L840 32 L820 16 L800 32 L780 16 L760 32 L740 16 L720 32 L700 16 L680 32 L660 16 L640 32 L620 16 L600 32 L580 16 L560 32 L540 16 L520 32 L500 16 L480 32 L460 16 L440 32 L420 16 L400 32 L380 16 L360 32 L340 16 L320 32 L300 16 L280 32 L260 16 L240 32 L220 16 L200 32 L180 16 L160 32 L140 16 L120 32 L100 16 L80 32 L60 16 L40 32 L20 16 L0 32 Z" 
                  className="fill-border"
                />
              </svg>
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
