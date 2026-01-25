import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";

const footerLinks = {
  Products: ["Cognix Flows", "Cognix Agents", "Cognix Insights", "API Platform"],
  Solutions: ["Finance", "Supply Chain", "Customer Support", "HR Automation"],
  Resources: ["Documentation", "Blog", "Case Studies", "Whitepapers"],
  Company: ["About Us", "Careers", "Contact", "Press"],
};

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
];

export const Footer = () => {
  return (
    <footer className="bg-card/50 border-t border-border/50">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-2 md:col-span-1"
          >
            {/* Logo */}
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary-foreground flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg font-display">C</span>
              </div>
              <span className="text-lg font-bold font-display text-foreground">
                CognixAI Labs
              </span>
            </div>
            <p className="text-sm text-muted-foreground mb-6">
              Building AI agents to automate the real world.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary transition-colors"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <h4 className="text-sm font-semibold text-foreground mb-4 font-display">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 CognixAI Labs. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
            <span className="hidden md:inline">Made in India · Serving Global Enterprises</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
