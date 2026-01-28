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
          </div>
        </section>

        {/* Green Zigzag Divider Section */}
        <section className="w-full bg-[hsl(62_20%_22%)] py-8 md:py-12 overflow-hidden">
          <div className="w-full flex justify-center">
            <svg 
              className="w-full max-w-none h-8 md:h-12" 
              viewBox="0 0 1440 48" 
              preserveAspectRatio="xMidYMid meet"
              fill="none"
            >
              {/* Repeating zigzag/diamond pattern */}
              <pattern id="zigzag" x="0" y="0" width="40" height="48" patternUnits="userSpaceOnUse">
                <path 
                  d="M0 24 L10 12 L20 24 L10 36 Z M20 24 L30 12 L40 24 L30 36 Z" 
                  fill="hsl(50 35% 45%)"
                  opacity="0.7"
                />
                <path 
                  d="M10 12 L20 0 L30 12 L20 24 Z M10 36 L20 24 L30 36 L20 48 Z" 
                  fill="hsl(50 35% 45%)"
                  opacity="0.5"
                />
              </pattern>
              <rect width="100%" height="100%" fill="url(#zigzag)" />
            </svg>
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
