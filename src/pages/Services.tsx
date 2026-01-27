import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { motion } from "framer-motion";
import { useContactPopup } from "@/contexts/ContactPopupContext";
import { 
  Workflow, 
  BarChart3, 
  MessageSquare, 
  Cpu,
  ChevronRight
} from "lucide-react";

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

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-44 pb-16 md:pb-20 bg-background">
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
                We don't sell tools.<br />
                We build systems that work.
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Remove friction, eliminate busywork, and let your team focus on what actually moves the needle.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Block Section */}
        <section className="py-12 md:py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="space-y-16 md:space-y-24">
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
                  >
                    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center`}>
                      {/* Content Side */}
                      <div className={`${isEven ? 'order-1' : 'order-1 lg:order-2'}`}>
                        <h2 
                          className="text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 leading-tight"
                          style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
                        >
                          {service.title}
                        </h2>
                        
                        <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
                          {service.description}
                        </p>

                        <a
                          href="#"
                          onClick={handleConsultationClick}
                          className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all duration-300 group"
                        >
                          Learn More
                          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                      </div>

                      {/* Visual Side */}
                      <div className={`${isEven ? 'order-2' : 'order-2 lg:order-1'}`}>
                        <div className="aspect-[4/3] bg-secondary/30 rounded-2xl md:rounded-3xl border border-border flex flex-col items-center justify-center p-8 md:p-12">
                          <ServiceIcon className="w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 text-primary/50 mb-6" strokeWidth={1} />
                          
                          {/* Tags */}
                          <div className="flex flex-wrap justify-center gap-2 mb-4">
                            {service.usedFor.map((item) => (
                              <span 
                                key={item} 
                                className="text-xs md:text-sm text-muted-foreground bg-background/80 px-3 py-1.5 rounded-full border border-border"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                          
                          {/* Outcome */}
                          <p className="text-center text-sm md:text-base text-primary font-medium">
                            {service.outcome}
                          </p>
                        </div>
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

        {/* Final CTA Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl mx-auto text-center"
            >
              <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-8">
                If manual work is slowing you down,<br />
                we'll show you exactly what to automate — and what to ignore.
              </p>
              <a
                href="#"
                onClick={handleConsultationClick}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Book a Strategy Call
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