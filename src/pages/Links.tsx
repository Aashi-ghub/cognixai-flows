import { useEffect, useState } from "react";

export default function LinksPage() {
  const [mounted, setMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide header on this page
    const header = document.querySelector('header');
    if (header) {
      header.style.display = 'none';
    }
    
    // Show loading animation for 1.7 seconds
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
      setMounted(true);
    }, 1700);

    return () => {
      // Show header when leaving page
      if (header) {
        header.style.display = '';
      }
      clearTimeout(loadingTimer);
    };
  }, []);

  const links = [
    {
      id: 1,
      title: "Web",
      subtitle: "Explore our services",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      url: "https://www.cognixailabs.com",
      bgColor: "bg-black",
      borderColor: "border-black",
      textColor: "text-white",
      iconBg: "bg-white/20"
    },
    {
      id: 2,
      title: "LinkedIn",
      subtitle: "Follow us on LinkedIn",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      url: "https://linkedin.com/company/cognixai-labs",
      bgColor: "bg-[#0077B5]",
      borderColor: "border-[#0077B5]",
      textColor: "text-white",
      iconBg: "bg-white/20"
    },
    {
      id: 3,
      title: "Instagram",
      subtitle: "Follow us on Instagram",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
      url: "https://instagram.com/cognixai_labs/",
      bgColor: "bg-gradient-to-r from-[#E4405F] to-[#FCAF45]",
      borderColor: "border-[#E4405F]",
      textColor: "text-white",
      iconBg: "bg-white/20"
    },
    {
      id: 4,
      title: "WhatsApp",
      subtitle: "Build smarter systems",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      ),
      url: "https://wa.me/919501944156?text=Hi%20I%20am%20looking%20to%20automate%20my%20business%20processes.%20Let%E2%80%99s%20discuss.",
      bgColor: "bg-[#25D366]",
      borderColor: "border-[#25D366]",
      textColor: "text-white",
      iconBg: "bg-white/20"
    },
    {
      id: 5,
      title: "Email",
      subtitle: "Get in touch",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      url: "mailto:hello@cognixailabs.com?subject=Business%20Automation%20Inquiry&body=Hello%2C%0A%0AI%20am%20interested%20in%20automating%20my%20business%20processes.%20Please%20connect%20to%20discuss%20further.%0A%0AThank%20you.",
      bgColor: "bg-white",
      borderColor: "border-gray-300",
      textColor: "text-gray-900",
      iconBg: "bg-gray-100"
    }
  ];

  // Show loading animation
  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <style>{`
          @keyframes stampFlash {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.8; transform: scale(1.05); }
          }
        `}</style>
        <div className="relative w-48 h-48 sm:w-64 sm:h-64">
          <img
            src="/Stamp CognixAI Labs.png"
            alt="CognixAI Labs"
            className="w-full h-full object-contain"
            style={{
              animation: 'stampFlash 0.5s ease-in-out infinite'
            }}
          />
        </div>
      </div>
    );
  }

  if (!mounted) {
    return null;
  }

  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      <div className="min-h-screen bg-white flex flex-col items-center">
        {/* Banner Section - Full Width */}
        <div className="w-full mb-6">
          <img
            src="/Cognixai Labs banner.png"
            alt="CognixAI Labs Banner"
            className="w-full h-auto object-cover"
          />
        </div>
        
        <div className="w-full max-w-sm px-4 sm:px-6">
          
          {/* Profile Section - Minimal */}
          <div className="text-center mb-10">
            <div className="mb-5 flex justify-center">
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-white overflow-hidden ring-2 ring-gray-200 shadow-sm">
                <img
                  src="/CognixAI Labs Logo final.png"
                  alt="CognixAI Labs"
                  className="w-full h-full object-contain p-2 scale-[1.2]"
                />
              </div>
            </div>
            <h1 className="text-2xl sm:text-3xl font-semibold text-black mb-2">CognixAI Labs</h1>
            <p className="text-gray-600 text-sm leading-relaxed px-2">
              We build custom AI automations that streamline workflows, cut costs, and free your team to focus on growth.
            </p>
          </div>

          {/* Links Section - Minimal & Interactive */}
          <div className="space-y-3">
            {links.map((link, index) => (
              <a
                key={link.id}
                href={link.url}
                target={link.url.startsWith('http') ? '_blank' : undefined}
                rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`
                  group flex items-center gap-3 sm:gap-4 
                  ${link.bgColor} ${link.borderColor} ${link.textColor} 
                  border-2 rounded-xl 
                  px-4 py-3.5 sm:py-4
                  transition-all duration-200 
                  active:scale-[0.98] 
                  hover:shadow-lg
                  touch-manipulation
                  select-none
                `}
                style={{
                  WebkitTapHighlightColor: 'transparent',
                  animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`
                }}
              >
                <div className={`flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-lg flex items-center justify-center ${link.iconBg} group-active:scale-95 transition-transform`}>
                  {link.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-base sm:text-lg">{link.title}</div>
                  <div className={`text-xs sm:text-sm ${link.textColor === 'text-white' ? 'opacity-90' : 'opacity-70'} truncate`}>{link.subtitle}</div>
                </div>
                <div className={`flex-shrink-0 ${link.textColor === 'text-white' ? 'opacity-60' : 'opacity-40'} group-hover:opacity-80 group-active:translate-x-1 transition-all`}>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </a>
            ))}
          </div>

          {/* Footer - Minimal */}
          <div className="mt-10 text-center">
            <p className="text-gray-400 text-xs">
              © {new Date().getFullYear()} CognixAI Labs
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
