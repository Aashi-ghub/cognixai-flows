const footerLinks = {
  Product: ["Voice Agent", "Orchestrator", "Insights", "API Docs"],
  Solutions: ["BFSI", "E-commerce", "Logistics", "Healthcare"],
  Resources: ["Blog", "Case Studies", "Documentation", "Changelog"],
  Company: ["About", "Careers", "Contact", "Press"],
};

export const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <span className="text-lg font-medium text-foreground">
              cognixai
            </span>
            <p className="text-sm text-muted-foreground mt-3">
              Made in India · Serving global enterprises
            </p>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-xs font-medium tracking-wider text-muted-foreground mb-4 uppercase">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-foreground hover:text-primary transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 CognixAI Labs. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms</a>
            <a href="#" className="hover:text-foreground transition-colors">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
