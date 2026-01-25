import { motion } from "framer-motion";

export const InsightsSection = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight mb-6">
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
            className="sarvam-card"
          >
            {/* Mock Stats */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center p-4 bg-background rounded-xl">
                <p className="text-2xl font-semibold text-foreground">12.4k</p>
                <p className="text-xs text-muted-foreground mt-1">Total Calls</p>
              </div>
              <div className="text-center p-4 bg-background rounded-xl">
                <p className="text-2xl font-semibold text-primary">94%</p>
                <p className="text-xs text-muted-foreground mt-1">Resolution</p>
              </div>
              <div className="text-center p-4 bg-background rounded-xl">
                <p className="text-2xl font-semibold text-foreground">2.3m</p>
                <p className="text-xs text-muted-foreground mt-1">Avg Duration</p>
              </div>
            </div>

            {/* Mock Transcript */}
            <div className="bg-background rounded-xl p-5 border border-border">
              <p className="text-xs font-medium text-muted-foreground mb-2 tracking-wide">
                RECENT TRANSCRIPT
              </p>
              <p className="text-sm text-foreground italic leading-relaxed">
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
