import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { 
    label: "PRODUCTS", 
    href: "/products", 
    hasDropdown: true,
    dropdownItems: [
      { label: "Voice Agent", href: "/products#voice-agent" },
      { label: "Orchestrator", href: "/products#orchestrator" },
      { label: "Insights", href: "/products#insights" },
    ]
  },
  { 
    label: "SERVICES", 
    href: "/services", 
    hasDropdown: false,
  },
  { label: "BLOG", href: "#blog" },
  { label: "CAREERS", href: "#careers" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

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
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 lg:px-8 pt-4">
      {/* Floating container with banner + navbar */}
      <div className={`max-w-7xl mx-auto overflow-hidden rounded-2xl transition-all duration-300 ${isScrolled ? "backdrop-blur-2xl backdrop-saturate-150 bg-white/20 border border-white/40" : "bg-background border border-border/50"}`}>
        {/* Announcement Banner - 20% of container */}
        <div className="banner-sarvam py-1.5 px-6 text-center">
          <p className="text-xs font-medium text-primary-foreground">
            Introducing CognixAI Voice Agents – Enterprise Calls Reimagined
          </p>
        </div>

        {/* Main Navbar - bottom layer */}
        <nav className={`border-t-0 transition-colors duration-300 ${isScrolled ? "bg-transparent" : "bg-background"}`}>
          <div className="px-6">
            <div className="flex items-center justify-between h-14">
              {/* Logo - simple text like Sarvam */}
              <a href="/" className="text-xl font-medium text-foreground tracking-tight">
                cognixai
              </a>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center gap-8" ref={dropdownRef}>
                {navLinks.map((link) => (
                  <div key={link.label} className="relative">
                    {link.hasDropdown ? (
                      <>
                        <button
                          onClick={() => setActiveDropdown(activeDropdown === link.label ? null : link.label)}
                          className="flex items-center gap-1 text-xs font-medium tracking-wide text-foreground hover:text-muted-foreground transition-colors"
                        >
                          {link.label}
                          <ChevronDown className={`w-3 h-3 transition-transform ${activeDropdown === link.label ? 'rotate-180' : ''}`} />
                        </button>
                        
                        {/* Glassmorphism Dropdown */}
                        <AnimatePresence>
                          {activeDropdown === link.label && (
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 10 }}
                              transition={{ duration: 0.2 }}
                              className="absolute top-full left-0 mt-3 min-w-[180px] z-50 rounded-xl overflow-hidden backdrop-blur-2xl backdrop-saturate-150 bg-white/70 border border-white/50 shadow-xl"
                            >
                              <div className="py-2">
                                {link.dropdownItems?.map((item) => (
                                  <a
                                    key={item.label}
                                    href={item.href}
                                    className="block px-4 py-2.5 text-xs font-medium tracking-wide text-foreground hover:bg-white/50 transition-colors"
                                    onClick={() => setActiveDropdown(null)}
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
                  href="#" 
                  className="px-5 py-2 text-xs font-medium tracking-wide border border-border rounded-md hover:bg-secondary transition-colors"
                >
                  API PLATFORM
                </a>
                <a href="#" className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-xs font-medium tracking-wide bg-foreground text-background hover:bg-foreground/90 transition-colors">
                  REQUEST A DEMO
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
                <div className="px-6 py-4 space-y-4">
                  {navLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="block text-sm font-medium text-foreground"
                    >
                      {link.label}
                    </a>
                  ))}
                  <div className="pt-4 border-t border-border">
                    <a href="#" className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-xs font-medium bg-foreground text-background hover:bg-foreground/90 transition-colors">
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
