import { motion } from "framer-motion";
import { TrendingUp, FileText } from "lucide-react";

export const InsightsSection = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6 text-balance">
              Insights from every interaction
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Every call generates structured data: transcripts, sentiment scores, 
              intent tags, and compliance flags. Search across thousands of 
              conversations instantly and surface trends that drive decisions.
            </p>
          </motion.div>

          {/* Right Column - Mock Analytics Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-background rounded-2xl border border-border p-6"
          >
            {/* Analytics Header */}
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Call Analytics</p>
                <p className="text-sm text-muted-foreground">Last 30 days</p>
              </div>
            </div>

            {/* Mock Stats */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center p-3 bg-card rounded-xl">
                <p className="text-2xl font-bold text-foreground">12.4k</p>
                <p className="text-xs text-muted-foreground">Total Calls</p>
              </div>
              <div className="text-center p-3 bg-card rounded-xl">
                <p className="text-2xl font-bold text-primary">94%</p>
                <p className="text-xs text-muted-foreground">Resolution</p>
              </div>
              <div className="text-center p-3 bg-card rounded-xl">
                <p className="text-2xl font-bold text-foreground">2.3m</p>
                <p className="text-xs text-muted-foreground">Avg. Duration</p>
              </div>
            </div>

            {/* Mock Transcript Snippet */}
            <div className="bg-card rounded-xl p-4 border border-border">
              <div className="flex items-center gap-2 mb-3">
                <FileText className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm font-medium text-foreground">Recent Transcript</span>
              </div>
              <p className="text-sm text-muted-foreground italic">
                "Thank you for confirming. I've updated your payment date to the 15th. 
                Is there anything else I can help you with today?"
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
