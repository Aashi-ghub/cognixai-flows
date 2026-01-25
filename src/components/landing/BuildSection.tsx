import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const BuildSection = () => {
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
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.1] mb-6">
              Build with CognixAI
            </h2>

            <p className="text-lg text-muted-foreground mb-10">
              Create your own AI-powered voice agents and applications with CognixAI Models
            </p>

            {/* CTA Buttons */}
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                GET STARTED
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
              >
                Read Docs
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Right Column - Code Mockup with Floating Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            {/* Floating Icons */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 right-12 w-14 h-14 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xl font-bold shadow-lg z-10"
            >
              C
            </motion.div>
            
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-1/3 -left-6 w-12 h-12 rounded-full bg-secondary flex items-center justify-center shadow-md z-10"
            >
              <span className="text-xl">🤖</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-1/4 right-0 w-10 h-10 rounded-full bg-muted flex items-center justify-center shadow-md z-10"
            >
              <span className="text-lg">🔊</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
              className="absolute -bottom-4 left-1/4 w-10 h-10 rounded-full bg-accent flex items-center justify-center shadow-md z-10"
            >
              <span className="text-lg">📞</span>
            </motion.div>

            {/* Code Window */}
            <div className="relative bg-card rounded-2xl border border-border shadow-xl overflow-hidden">
              {/* Window Header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/50">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <span className="text-xs text-muted-foreground ml-2">cognix.js</span>
              </div>
              
              {/* Code Content */}
              <div className="p-6 font-mono text-sm">
                <div className="text-muted-foreground">
                  <span className="text-primary">import</span>{" "}
                  <span className="text-foreground">{"{ CognixAI }"}</span>{" "}
                  <span className="text-primary">from</span>{" "}
                  <span className="text-amber-600">"cognixai"</span>;
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
