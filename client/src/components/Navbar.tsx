import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, BookOpen } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  // Determine which site we're on for styling
  const isGlobalKids = location.includes("global-kids");
  const isGlobalSchool = location.includes("global-school");
  const isVishwasatya = location.includes("vishwasatya");

  // Set theme color based on current site
  let themeColor = "primary";
  let themeBgColor = "bg-primary-500";
  let themeHoverColor = "hover:text-primary-500";
  
  if (isGlobalKids) {
    themeColor = "text-pink-500";
    themeBgColor = "bg-pink-500";
    themeHoverColor = "hover:text-pink-500";
  } else if (isGlobalSchool) {
    themeColor = "text-indigo-600";
    themeBgColor = "bg-indigo-600";
    themeHoverColor = "hover:text-indigo-600";
  } else if (isVishwasatya) {
    themeColor = "text-cyan-600";
    themeBgColor = "bg-cyan-600";
    themeHoverColor = "hover:text-cyan-600";
  } else {
    themeColor = "text-violet-600";
    themeBgColor = "bg-violet-600";
    themeHoverColor = "hover:text-violet-600";
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMobileMenuOpen(false);
  }, [location]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const menuItems = isGlobalKids || isGlobalSchool || isVishwasatya
    ? [
        { text: "Home", href: isGlobalKids ? "/global-kids" : isGlobalSchool ? "/global-school" : "/vishwasatya" },
        { text: "About", href: "#about" },
        { text: "Gallery", href: "#gallery" },
        { text: "Classes", href: "#classes" },
        { text: "Notifications", href: "#notifications" },
        { text: "Admissions", href: "#admissions" },
        { text: "Contact", href: "#contact" },
        { text: "IGW Foundation", href: "/" },
      ]
    : [
        { text: "Home", href: "#home" },
        { text: "About Us", href: "#about" },
        { text: "Our Schools", href: "#schools" },
        { text: "Testimonials", href: "#testimonials" },
        { text: "Contact", href: "#contact" },
      ];

  // Custom Link component to avoid nesting <a> tags
  interface NavLinkProps {
    href: string;
    className?: string;
    children: React.ReactNode;
  }
  
  const NavLink = ({ href, className = "", children }: NavLinkProps) => {
    const [location] = useLocation();
    const isHashLink = href.startsWith('#');
    const fullPath = isHashLink ? href : href;
    
    if (isHashLink) {
      return (
        <a 
          href={fullPath}
          className={className}
          onClick={(e: React.MouseEvent) => {
            e.preventDefault();
            const targetId = href.substring(1);
            const element = document.getElementById(targetId);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
              // Close mobile menu if open
              setIsMobileMenuOpen(false);
            }
          }}
        >
          {children}
        </a>
      );
    }
    
    return (
      <Link href={fullPath}>
        <span className={`cursor-pointer ${className}`}>{children}</span>
      </Link>
    );
  };

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl transition-all duration-300 rounded-2xl ${
        isScrolled ? "bg-white/80 shadow-lg backdrop-blur-md py-2" : "bg-white/60 backdrop-blur-sm py-3"
      }`}
    >
      <div className="mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <NavLink href={isGlobalKids || isGlobalSchool || isVishwasatya ? location : "/"} className="flex items-center space-x-2">
            <span className={themeColor}>
              <BookOpen className="h-8 w-8" />
            </span>
            <span className="font-montserrat font-bold text-xl text-gray-800">
              {isGlobalKids 
                ? "Global Kids" 
                : isGlobalSchool 
                ? "Global School & Jr College" 
                : isVishwasatya 
                ? "Vishwasatya Vidyaniketan" 
                : "IGW Foundation"}
            </span>
          </NavLink>

          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <NavLink 
                key={index} 
                href={item.href} 
                className={`font-medium text-gray-700 ${themeHoverColor} transition-colors`}
              >
                {item.text}
              </NavLink>
            ))}
          </div>

          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-gray-700 focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white px-4 pt-4 pb-6 mt-2 rounded-lg shadow-lg"
            >
              <div className="flex flex-col space-y-4">
                {menuItems.map((item, index) => (
                  <NavLink 
                    key={index} 
                    href={item.href} 
                    className={`font-medium text-gray-700 ${themeHoverColor} transition-colors py-2 px-2 rounded-md hover:bg-gray-50`}
                  >
                    {item.text}
                  </NavLink>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
