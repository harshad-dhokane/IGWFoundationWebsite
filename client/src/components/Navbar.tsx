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
  
  if (isGlobalKids) {
    themeColor = "pink-500";
  } else if (isGlobalSchool) {
    themeColor = "indigo-600";
  } else if (isVishwasatya) {
    themeColor = "cyan-600";
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
        { text: "About", href: `${location}#about` },
        { text: "Gallery", href: `${location}#gallery` },
        { text: "Classes", href: `${location}#classes` },
        { text: "Notifications", href: `${location}#notifications` },
        { text: "Admissions", href: `${location}#admissions` },
        { text: "Contact", href: `${location}#contact` },
        { text: "IGW Foundation", href: "/" },
      ]
    : [
        { text: "Home", href: "#home" },
        { text: "About Us", href: "#about" },
        { text: "Our Schools", href: "#schools" },
        { text: "Testimonials", href: "#testimonials" },
        { text: "Contact", href: "#contact" },
      ];

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-white/90 py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href={isGlobalKids || isGlobalSchool || isVishwasatya ? location : "/"}>
            <a className="flex items-center space-x-2">
              <span className={`text-${themeColor}`}>
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
            </a>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <Link key={index} href={item.href}>
                <a className="font-medium text-gray-700 hover:text-primary-500 transition-colors">
                  {item.text}
                </a>
              </Link>
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
                  <Link key={index} href={item.href}>
                    <a className="font-medium text-gray-700 hover:text-primary-500 transition-colors py-2 px-2 rounded-md hover:bg-gray-50">
                      {item.text}
                    </a>
                  </Link>
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
