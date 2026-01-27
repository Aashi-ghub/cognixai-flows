import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { useContactPopup } from "@/contexts/ContactPopupContext";

const navLinks = [
  { 
    label: "PRODUCTS", 
    href: "/products", 
    hasDropdown: true,
    dropdownItems: [
      { label: "Call Agent", href: "/products#call-agent" },
      { label: "Hiring Agent", href: "/products#hiring-agent" },
      { label: "AutoQuote AI", href: "/products#autoquote-ai" },
      { label: "Sales Agent", href: "/products#sales-agent" },
      { label: "Orchestrator", href: "/products#orchestrator" },
      { label: "Insights", href: "/products#insights" },
    ]
  },
  { 
    label: "SERVICES", 
    href: "/services", 
    hasDropdown: false,
  },
  { label: "BLOG", href: "/blog" },
];

export const Navbar = () => {
  const { openPopup } = useContactPopup();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleDemoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    openPopup();
    setIsOpen(false); // Close mobile menu if open
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    if (activeDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [activeDropdown]);

  return (
    <header className="fixed top-0 left-0 right-0 z-[9999] px-4 lg:px-8 pt-4">
      {/* Floating container with banner + navbar */}
      <div className={`max-w-7xl mx-auto rounded-2xl transition-all duration-300 ${isScrolled ? "backdrop-blur-2xl backdrop-saturate-150 bg-white/20 border border-white/40" : "bg-background border border-border/50"}`}>
        {/* Announcement Banner - edges match navbar, full width, blunt corners */}
        <div
          className="banner-sarvam py-1.5 px-6 text-center w-full"
          style={{
            borderTopLeftRadius: '1rem', // matches rounded-2xl (1rem)
            borderTopRightRadius: '1rem',
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
            marginRight: 0,
            marginLeft: 0,
            // Ensure alignment with main box, no border or offset
          }}
        >
          <p className="text-xs font-medium text-primary-foreground">
            Introducing CognixAI Labs Voice Agents – Enterprise Calls Reimagined
          </p>
        </div>

        {/* Main Navbar - bottom layer */}
        <nav className={`border-t-0 transition-colors duration-300 ${isScrolled ? "bg-transparent" : "bg-background"}`}>
          <div className="px-6">
            <div className="relative flex items-center justify-between h-14">
              {/* Logo - clean serif like Sarvam */}
              <a href="/" className="flex items-center gap-2 text-2xl text-foreground tracking-tight" style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}>
                CognixAI
              </a>

              {/* Desktop Navigation - centered in the viewport */}
              <div
                className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2"
                ref={dropdownRef}
              >
                {navLinks.map((link) => (
                  <div 
                    key={link.label} 
                    className="relative z-[10000]"
                    onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.label)}
                    onMouseLeave={() => link.hasDropdown && setActiveDropdown(null)}
                  >
                    {link.hasDropdown ? (
                      <>
                        <button
                          type="button"
                          onClick={() => setActiveDropdown(activeDropdown === link.label ? null : link.label)}
                          className="flex items-center gap-1 text-xs font-medium tracking-wide text-foreground hover:text-muted-foreground transition-colors relative z-[10001]"
                        >
                          {link.label}
                          <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${activeDropdown === link.label ? 'rotate-180' : ''}`} />
                        </button>
                        
                        {/* Glassmorphism Dropdown */}
                        <AnimatePresence>
                          {activeDropdown === link.label && (
                            <motion.div
                              initial={{ opacity: 0, y: -10, scale: 0.95 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: -10, scale: 0.95 }}
                              transition={{ duration: 0.2 }}
                              className="absolute top-full left-0 mt-3 min-w-[220px] z-[10002] rounded-xl overflow-hidden backdrop-blur-2xl backdrop-saturate-150 bg-white/20 border border-white/40"
                              onMouseEnter={() => setActiveDropdown(link.label)}
                              onMouseLeave={() => setActiveDropdown(null)}
                              style={{ position: 'absolute' }}
                            >
                              <div className="py-2">
                                {link.dropdownItems?.map((item) => (
                                  <a
                                    key={item.label}
                                    href={item.href}
                                    className="block px-5 py-2.5 text-xs font-medium tracking-wide text-foreground hover:bg-primary/10 hover:text-primary transition-all duration-150"
                                    onClick={() => {
                                      setActiveDropdown(null);
                                    }}
                                  >
                                    {item.label}
                                  </a>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <a
                        href={link.href}
                        className="flex items-center gap-1 text-xs font-medium tracking-wide text-foreground hover:text-muted-foreground transition-colors"
                      >
                        {link.label}
                      </a>
                    )}
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="hidden lg:flex items-center gap-3">
                <a 
                  href="/products" 
                  className="px-5 py-2 text-xs font-medium tracking-wide border border-border rounded-md hover:bg-secondary transition-colors"
                >
                  Our Solutions
                </a>
                <a href="#" onClick={handleDemoClick} className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-xs font-medium tracking-wide bg-foreground text-background hover:bg-foreground/90 transition-colors">
                  GET A FREE DEMO
                  <span>✦</span>
                </a>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 text-foreground"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden backdrop-blur-2xl bg-white/70"
              >
                <div className="px-6 py-4 space-y-2">
                  {navLinks.map((link) => (
                    <div key={link.label}>
                      {link.hasDropdown ? (
                        <>
                          <button
                            onClick={() => setMobileDropdown(mobileDropdown === link.label ? null : link.label)}
                            className="flex items-center justify-between w-full text-sm font-medium text-foreground py-2"
                          >
                            <span>{link.label}</span>
                            <ChevronDown className={`w-4 h-4 transition-transform ${mobileDropdown === link.label ? 'rotate-180' : ''}`} />
                          </button>
                          <AnimatePresence>
                            {mobileDropdown === link.label && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                className="pl-4 space-y-1 overflow-hidden"
                              >
                                {link.dropdownItems?.map((item) => (
                                  <a
                                    key={item.label}
                                    href={item.href}
                                    className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                                    onClick={() => {
                                      setMobileDropdown(null);
                                      setIsOpen(false);
                                    }}
                                  >
                                    {item.label}
                                  </a>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </>
                      ) : (
                        <a
                          href={link.href}
                          className="block text-sm font-medium text-foreground py-2"
                          onClick={() => setIsOpen(false)}
                        >
                          {link.label}
                        </a>
                      )}
                    </div>
                  ))}
                  <div className="pt-4 border-t border-border">
                    <a 
                      href="#" 
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-xs font-medium bg-foreground text-background hover:bg-foreground/90 transition-colors"
                      onClick={handleDemoClick}
                    >
                      REQUEST A DEMO ✦
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </header>
  );
};
