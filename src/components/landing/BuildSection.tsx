import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useContactPopup } from "@/contexts/ContactPopupContext";

export const BuildSection = () => {
  const { openPopup } = useContactPopup();

  const handleAuditClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    openPopup();
  };

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[500px]">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-lg"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.1] mb-4">
              Who is CognixAI Labs a good fit for?
            </h2>

            <p className="text-lg text-muted-foreground mb-6">
              We work with founders and COOs of growing SMBs and mid-market companies, heads of Operations and Customer Experience (CX), and Sales and RevOps leaders running large lead or ticket volumes. If you're spending hours on repetitive tasks that could be automated, we should talk.
            </p>
            <p className="text-base text-muted-foreground mb-10">
              Create your own AI-powered voice agents and applications with CognixAI Labs Models
            </p>

            {/* CTA Buttons */}
            <div className="flex items-center gap-6">
              <a
                href="#"
                onClick={handleAuditClick}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Get a Free Automation Audit
              </a>
              <a
                href="/products"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
              >
                See Real Use Cases
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Right Column - Code Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Code Window */}
            <div className="relative bg-card rounded-xl border border-border shadow-lg overflow-hidden max-w-md ml-auto">
              {/* Window Header */}
              <div className="flex items-center gap-2 px-3 py-2 border-b border-border bg-muted/50">
                <div className="flex items-center gap-1">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                </div>
                <span className="text-xs text-muted-foreground ml-2">cognixai-labs.js</span>
              </div>
              
              {/* Code Content */}
              <div className="p-4 font-mono text-xs">
                <div className="text-muted-foreground">
                  <span className="text-primary">import</span>{" "}
                  <span className="text-foreground">{"{ CognixAI }"}</span>{" "}
                  <span className="text-primary">from</span>{" "}
                  <span className="text-amber-600">"@cognixai-labs/sdk"</span>;
                </div>
                <br />
                <div className="text-muted-foreground">
                  <span className="text-primary">const</span>{" "}
                  <span className="text-foreground">agent</span>{" "}
                  <span className="text-muted-foreground">=</span>{" "}
                  <span className="text-primary">new</span>{" "}
                  <span className="text-foreground">CognixAI</span>
                  <span className="text-muted-foreground">({"{"}</span>
                </div>
                <div className="pl-4 text-muted-foreground">
                  <span className="text-foreground">apiKey</span>:{" "}
                  <span className="text-amber-600">"YOUR_API_KEY"</span>,
                </div>
                <div className="text-muted-foreground">{"});"}</div>
                <br />
                <div className="text-muted-foreground">
                  <span className="text-primary">const</span>{" "}
                  <span className="text-foreground">response</span>{" "}
                  <span className="text-muted-foreground">=</span>{" "}
                  <span className="text-primary">await</span>{" "}
                  <span className="text-foreground">agent</span>.
                  <span className="text-primary">call</span>
                  <span className="text-muted-foreground">({"{"}</span>
                </div>
                <div className="pl-4 text-muted-foreground">
                  <span className="text-foreground">to</span>:{" "}
                  <span className="text-amber-600">"+1234567890"</span>,
                </div>
                <div className="pl-4 text-muted-foreground">
                  <span className="text-foreground">prompt</span>:{" "}
                  <span className="text-amber-600">"Schedule a demo"</span>,
                </div>
                <div className="text-muted-foreground">{"});"}</div>
                <br />
                <div className="text-muted-foreground">
                  <span className="text-foreground">console</span>.
                  <span className="text-primary">log</span>
                  <span className="text-muted-foreground">(</span>
                  <span className="text-foreground">response</span>
                  <span className="text-muted-foreground">);</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
