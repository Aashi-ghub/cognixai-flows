import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "PRODUCTS", href: "#products", hasDropdown: true },
  { label: "COMPANY", href: "#company", hasDropdown: true },
  { label: "BLOG", href: "#blog" },
  { label: "CAREERS", href: "#careers" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-4">
      {/* Floating container with banner + navbar */}
      <div className="container mx-auto overflow-hidden rounded-2xl shadow-lg border border-border/50">
        {/* Announcement Banner - top layer */}
        <div className="banner-sarvam py-3 px-6 text-center">
          <p className="text-sm font-medium text-primary-foreground">
            ✦✦ Introducing CognixAI Voice Agents – Enterprise Calls Reimagined ✦✦
          </p>
        </div>

        {/* Main Navbar - bottom layer */}
        <nav className="bg-background border-t-0">
          <div className="px-6">
            <div className="flex items-center justify-between h-14">
              {/* Logo - simple text like Sarvam */}
              <a href="/" className="text-xl font-medium text-foreground tracking-tight">
                cognixai
              </a>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center gap-8">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="flex items-center gap-1 text-xs font-medium tracking-wide text-foreground hover:text-muted-foreground transition-colors"
                  >
                    {link.label}
                    {link.hasDropdown && <ChevronDown className="w-3 h-3" />}
                  </a>
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
                <a href="#" className="btn-primary text-xs tracking-wide">
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
                className="lg:hidden bg-background"
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
                    <a href="#" className="btn-primary text-xs">
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
