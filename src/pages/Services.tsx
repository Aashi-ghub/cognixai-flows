import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { CTASection } from "@/components/landing/CTASection";
import { motion } from "framer-motion";
import { useContactPopup } from "@/contexts/ContactPopupContext";
import { 
  Workflow, 
  BarChart3, 
  MessageSquare, 
  Cpu
} from "lucide-react";

const stats = [
  { value: "200+", label: "Automations Shipped" },
  { value: "40%", label: "Avg. Cost Reduction" },
  { value: "24/7", label: "Always Running" },
  { value: "6–8 wks", label: "Typical Delivery" },
];

const services = [
  {
    icon: Workflow,
    title: "Kill Manual Work",
    tagline: "What breaks businesses isn't strategy. It's repetition.",
    description: "We replace repetitive human tasks with automation systems that run 24/7 — without reminders, follow-ups, or errors.",
    usedFor: ["CRM updates", "Reporting & approvals", "Lead routing & notifications"],
    outcome: "Less work. Fewer mistakes. Faster execution.",
  },
  {
    icon: MessageSquare,
    title: "Never Miss a Lead Again",
    tagline: "Most businesses lose customers because they respond too late. We fix that.",
    description: "We deploy Voice AI agents and conversational systems that answer, qualify, and book — instantly.",
    usedFor: ["Sales calls", "Appointments", "Customer support"],
    outcome: "More conversations. More conversions. Zero missed calls.",
  },
  {
    icon: BarChart3,
    title: "Make Data Speak",
    tagline: "You already have the data. You just don't see it in time.",
    description: "We build AI-driven reporting systems that turn raw numbers into live dashboards, alerts, and decisions.",
    usedFor: ["KPI tracking", "Performance monitoring", "Opportunity detection"],
    outcome: "Clarity instead of chaos. Decisions instead of guesses.",
  },
  {
    icon: Cpu,
    title: "Build What Off-The-Shelf Can't",
    tagline: "Generic tools don't fit real workflows. So we don't force them.",
    description: "We build custom ERP, CRM, and AI-powered infrastructure designed around how your business actually works.",
    usedFor: ["Operations & internal systems", "Industrial & IoT automation", "Energy & resource optimization"],
    outcome: "Systems that adapt to you — not the other way around.",
  },
];

const Services = () => {
  const { openPopup } = useContactPopup();

  const handleConsultationClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    openPopup();
  };

  const handleDemoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    openPopup();
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
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
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                We don't sell tools. We build systems that remove friction, eliminate busywork, and let your team focus on what actually moves the needle.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-card border-y border-border">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-serif text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Detail Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="space-y-20 md:space-y-32">
              {services.map((service, index) => {
                const isEven = index % 2 === 0;
                const ServiceIcon = service.icon;
                
                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="scroll-mt-24"
                  >
                    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center`}>
                      {/* Icon Side */}
                      <div className={`${isEven ? 'order-1' : 'order-1 lg:order-2'}`}>
                        <div className="flex items-center justify-center aspect-square max-w-md mx-auto bg-secondary/30 rounded-2xl md:rounded-3xl border border-border">
                          <ServiceIcon className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 text-primary/60" strokeWidth={1} />
                        </div>
                      </div>

                      {/* Content Side */}
                      <div className={`${isEven ? 'order-2' : 'order-2 lg:order-1'}`}>
                        {/* Title */}
                        <h2 
                          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 leading-tight"
                          style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
                        >
                          {service.title}
                        </h2>
                        
                        {/* Tagline */}
                        <p className="text-lg md:text-xl text-foreground/80 italic mb-4">
                          {service.tagline}
                        </p>
                        
                        {/* Description */}
                        <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
                          {service.description}
                        </p>

                        {/* Used For */}
                        <div className="mb-4">
                          <span className="text-sm font-medium text-foreground">We automate:</span>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {service.usedFor.map((item) => (
                              <span key={item} className="text-sm text-muted-foreground bg-secondary/50 px-3 py-1 rounded-full">
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Outcome */}
                        <p className="text-base font-medium text-primary">
                          {service.outcome}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Transition Section */}
        <section className="py-16 md:py-24 bg-card border-y border-border">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 
                className="text-3xl md:text-4xl lg:text-5xl text-foreground mb-6"
                style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
              >
                Not Sure What You Need?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Most companies don't need more AI.<br />
                They need AI in the right place.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                That's why we don't start with tools.<br />
                We start with your workflows.
              </p>
              <a
                href="#"
                onClick={handleConsultationClick}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Get a Free Automation Roadmap
              </a>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default Services;
