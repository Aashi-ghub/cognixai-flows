import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "Can AI agents really automate 80–90% of my operations?",
    answer: "In practice we usually see 60–90% of well-defined workflows automated—like lead routing, follow-ups, ticket triage, and reporting. The exact percentage depends on process complexity and how clean your data and tools are. Our custom AI agents are built specifically for your workflows, which is why we can achieve higher automation rates than generic tools."
  },
  {
    question: "How long does it take to go live with an AI agent?",
    answer: "Most clients see their first agent in production within 4–6 weeks, with 2–3 iterations over the following month to reach target automation levels. We start with a focused pilot on one workflow, demonstrate results, and then scale based on proven ROI."
  },
  {
    question: "Do I need to replace my existing tools to use your AI agents?",
    answer: "No. Our AI agents are designed to plug into your existing tools and workflows. They connect to your CRM, helpdesk, telephony systems, and internal tools without requiring you to replace your current infrastructure. This ensures a smooth integration and minimal disruption to your operations."
  },
  {
    question: "Which workflows can CognixAI Labs automate?",
    answer: "We build AI agents for sales operations (lead qualification, follow-ups, appointment booking), customer support (ticket routing, initial responses, escalation), and back-office workflows (data entry, reporting, system updates). Our agents integrate with your CRM, helpdesk, telephony, and internal tools to create end-to-end automation across your operations."
  },
  {
    question: "Who is CognixAI Labs a good fit for?",
    answer: "We work with founders and COOs of growing SMBs and mid-market companies, heads of Operations and Customer Experience (CX), and Sales and RevOps leaders running large lead or ticket volumes. We initially focus on India and global English-speaking markets, helping companies automate repetitive operations to scale without adding headcount."
  }
];

export const FAQSection = () => {
  return (
    <section className="py-16 md:py-24 border-t border-border">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal mb-12 text-foreground text-center" style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}>
            Frequently asked questions
          </h2>
          <Accordion type="single" collapsible className="w-full space-y-2">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="border border-border rounded-lg px-6 bg-card/30 hover:bg-card/50 transition-colors"
              >
                <AccordionTrigger className="text-left text-base md:text-lg font-medium text-foreground hover:no-underline py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};
