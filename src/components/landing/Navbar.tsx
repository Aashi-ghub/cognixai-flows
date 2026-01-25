import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Product", href: "#product" },
  { label: "Solutions", href: "#solutions" },
  { label: "Customers", href: "#customers" },
  { label: "Resources", href: "#resources" },
  { label: "Company", href: "#company" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Announcement Banner */}
      <div className="banner-gradient py-2 px-4 text-center">
        <p className="text-sm font-medium text-primary-foreground">
          ✦✦ Introducing CognixAI Voice Agents – Enterprise Calls Reimagined ✦✦
        </p>
      </div>

      {/* Main Navbar */}
      <nav className="bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2">
              <span className="text-xl font-bold text-foreground tracking-tight">
                CognixAI Labs
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                  <ChevronDown className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-4 py-2">
                API Platform
              </a>
              <a href="#" className="pill-button-primary flex items-center gap-2">
                Talk to Sales
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
              className="lg:hidden bg-background border-b border-border"
            >
              <div className="container mx-auto py-4 space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="block text-sm font-medium text-muted-foreground hover:text-foreground"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="pt-4 border-t border-border">
                  <a href="#" className="pill-button-primary inline-flex items-center gap-2">
                    Talk to Sales ✦
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};
