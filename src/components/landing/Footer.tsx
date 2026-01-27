import { useContactPopup } from "@/contexts/ContactPopupContext";

const footerLinks = {
  Product: ["Call Agent", "Hiring Agent", "AutoQuote AI", "Sales Agent", "Orchestrator", "Insights"],
  Initiatives: ["AI Summit 2026"],
  Company: ["Blog"],
  "Get Started": ["For Enterprises", "For Startups"],
  Connect: ["Press", "Partnerships", "Contact"],
};

const getFooterHref = (link: string) => {
  switch (link) {
    // Product deep-links
    case "Call Agent":
      return "/products#call-agent";
    case "Hiring Agent":
      return "/products#hiring-agent";
    case "AutoQuote AI":
      return "/products#autoquote-ai";
    case "Sales Agent":
      return "/products#sales-agent";
    case "Orchestrator":
      return "/products#orchestrator";
    case "Insights":
      return "/products#insights";

    // Company
    case "Blog":
      return "/blog";

    // Get Started
    case "For Enterprises":
      return "/services";
    case "For Startups":
      return "/services";

    // Connect (mailto with context)
    case "Press":
      return "mailto:hello@cognixailabs.com?subject=Press%20Enquiry%20-%20CognixAI%20Labs&body=Hi%20CognixAI%20Labs%20Team%2C%0D%0A%0D%0AI'm%20reaching%20out%20for%20a%20press%20or%20media%20opportunity.%20Here%20are%20the%20details%3A%0D%0A%0D%0A-%20Publication%2FOutlet%3A%0D%0A-%20Story%20or%20angle%3A%0D%0A-%20Timeline%3A%0D%0A%0D%0ABest%2C%0D%0A";
    case "Partnerships":
      return "mailto:hello@cognixailabs.com?subject=Partnership%20Opportunity%20-%20CognixAI%20Labs&body=Hi%20CognixAI%20Labs%20Team%2C%0D%0A%0D%0AI'd%20love%20to%20explore%20a%20potential%20partnership%20or%20collaboration.%20Here%20are%20a%20few%20details%3A%0D%0A%0D%0A-%20Company%20name%3A%0D%0A-%20What%20we%20do%3A%0D%0A-%20How%20we'd%20like%20to%20collaborate%3A%0D%0A%0D%0ALooking%20forward%20to%20connecting.%0D%0A%0D%0ABest%2C%0D%0A";
    case "Contact":
      return "#contact";

    // Fallback / placeholder
    default:
      return "#";
  }
};

export const Footer = () => {
  const { openPopup } = useContactPopup();

  const handleContactClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    openPopup();
  };

  return (
    <footer className="bg-foreground rounded-t-[2.5rem] mt-0">
      <div className="container mx-auto py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2">
              <span className="text-lg font-medium text-white">
                CognixAI Labs
              </span>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-xs font-medium tracking-wider text-white/40 mb-4">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => {
                  const href = getFooterHref(link);
                  const isContact = link === "Contact";

                  return (
                    <li key={link}>
                      <a
                        href={href}
                        onClick={isContact ? handleContactClick : undefined}
                        className="text-sm text-white/70 hover:text-white transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40">
            © 2026 CognixAI Labs. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-white/40">
            <a href="/privacy" className="hover:text-white transition-colors">Privacy</a>
            <a href="/terms" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
