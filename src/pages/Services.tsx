import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { motion } from "framer-motion";
import { useContactPopup } from "@/contexts/ContactPopupContext";
import { ServiceCard } from "@/components/services/ServiceCard";
import { SolutionAccordion } from "@/components/services/SolutionAccordion";
import { GreenDividerSection } from "@/components/services/GreenDividerSection";
import { FlagshipServiceCard } from "@/components/services/FlagshipServiceCard";
import { 
  Workflow, 
  BarChart3, 
  MessageSquare, 
  Cpu,
  Users,
  FileText,
  Clock,
  Bell,
  Database,
  Shield,
  Zap,
  Globe,
  Headphones,
  Bot,
  LineChart,
  Settings
} from "lucide-react";

// 4 Outcome Cards data
const outcomeCards = [
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

// 12 Solutions by Function data
const solutions = [
  {
    icon: Users,
    title: "Lead Management",
    description: "Automate lead capture and qualification",
    features: ["Auto-capture from forms, calls, emails", "AI-powered lead scoring", "Instant CRM sync", "Smart routing to sales reps"],
  },
  {
    icon: FileText,
    title: "Document Processing",
    description: "Extract data from any document format",
    features: ["Invoice and receipt parsing", "Contract data extraction", "Multi-language support", "Automated filing and archival"],
  },
  {
    icon: Clock,
    title: "Scheduling & Booking",
    description: "Never miss an appointment again",
    features: ["AI-powered calendar management", "Automated reminders", "Conflict resolution", "Multi-timezone support"],
  },
  {
    icon: Bell,
    title: "Notifications & Alerts",
    description: "Keep your team informed in real-time",
    features: ["Multi-channel delivery", "Smart escalation paths", "Custom trigger rules", "Priority-based routing"],
  },
  {
    icon: Database,
    title: "Data Sync & Integration",
    description: "Connect all your business systems",
    features: ["Real-time bidirectional sync", "100+ app integrations", "Custom API connections", "Error handling & retry logic"],
  },
  {
    icon: Shield,
    title: "Compliance & Reporting",
    description: "Stay compliant automatically",
    features: ["Automated audit trails", "Regulatory report generation", "Data retention policies", "Access control logging"],
  },
  {
    icon: Zap,
    title: "Workflow Automation",
    description: "Streamline complex business processes",
    features: ["Visual workflow builder", "Conditional logic branching", "Parallel task execution", "SLA monitoring"],
  },
  {
    icon: Globe,
    title: "Multi-Channel Outreach",
    description: "Engage customers everywhere",
    features: ["Email sequences", "SMS campaigns", "WhatsApp integration", "Social media automation"],
  },
  {
    icon: Headphones,
    title: "Customer Support",
    description: "24/7 intelligent support automation",
    features: ["AI chatbot deployment", "Ticket auto-classification", "Knowledge base integration", "Escalation management"],
  },
  {
    icon: Bot,
    title: "Voice AI Agents",
    description: "Human-like phone conversations",
    features: ["Outbound calling campaigns", "Inbound call handling", "Appointment scheduling", "Lead qualification calls"],
  },
  {
    icon: LineChart,
    title: "Analytics & Insights",
    description: "Turn data into actionable intelligence",
    features: ["Real-time dashboards", "Predictive analytics", "Custom KPI tracking", "Automated report delivery"],
  },
  {
    icon: Settings,
    title: "Custom Development",
    description: "Tailored solutions for unique needs",
    features: ["Bespoke ERP/CRM systems", "Industry-specific tools", "Legacy system integration", "Scalable architecture"],
  },
];

// 3 Flagship Services data
const flagshipServices = [
  {
    icon: Bot,
    title: "Enterprise Voice AI Platform",
    description: "Deploy human-like voice agents that handle thousands of calls simultaneously. From lead qualification to appointment booking, our Voice AI platform transforms how businesses communicate at scale.",
    gradientClass: "bg-gradient-to-br from-emerald-200 via-teal-100 to-cyan-100",
  },
  {
    icon: Workflow,
    title: "Intelligent Process Orchestration",
    description: "Connect your entire tech stack with smart automation that thinks ahead. Our orchestration engine handles complex multi-step workflows, reducing manual intervention by up to 90%.",
    gradientClass: "bg-gradient-to-br from-amber-100 via-orange-100 to-rose-100",
  },
  {
    icon: LineChart,
    title: "Predictive Business Intelligence",
    description: "Move from reactive to proactive decision-making. Our AI-powered analytics platform surfaces insights before problems occur, helping you stay ahead of the competition.",
    gradientClass: "bg-gradient-to-br from-violet-200 via-purple-100 to-pink-100",
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

        {/* 4 Outcome Cards */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {outcomeCards.map((card, index) => (
                <ServiceCard
                  key={card.title}
                  icon={card.icon}
                  title={card.title}
                  description={card.description}
                  gradientClass={card.gradientClass}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="container mx-auto px-4">
          <div className="h-px bg-border" />
        </div>

        {/* Solutions by Function - 12 Accordion Cards */}
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
                className="text-3xl md:text-4xl lg:text-5xl text-foreground mb-4"
                style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
              >
                Solutions by Function
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore our capabilities across every business function
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {solutions.map((solution, index) => (
                <SolutionAccordion
                  key={solution.title}
                  icon={solution.icon}
                  title={solution.title}
                  description={solution.description}
                  features={solution.features}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Green Divider Section */}
        <GreenDividerSection />

        {/* Flagship Services - 3 Horizontal Cards */}
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
                className="text-3xl md:text-4xl lg:text-5xl text-foreground mb-4"
                style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
              >
                Flagship Services
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our most impactful solutions for enterprise transformation
              </p>
            </motion.div>

            <div className="space-y-6 max-w-4xl mx-auto">
              {flagshipServices.map((service, index) => (
                <FlagshipServiceCard
                  key={service.title}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  gradientClass={service.gradientClass}
                  onLearnMore={openPopup}
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
