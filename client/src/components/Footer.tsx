import { Link, useLocation } from "wouter";
import { BookOpen, Twitter, Facebook, Instagram, Linkedin, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Footer = () => {
  const [location] = useLocation();
  const [email, setEmail] = useState("");
  const { toast } = useToast();
  
  // Determine which site we're on for styling
  const isGlobalKids = location.includes("global-kids");
  const isGlobalSchool = location.includes("global-school");
  const isVishwasatya = location.includes("vishwasatya");

  // Set theme color based on current site
  let siteLabel = "IGW Foundation";
  
  if (isGlobalKids) {
    siteLabel = "Global Kids";
  } else if (isGlobalSchool) {
    siteLabel = "Global School & Jr College";
  } else if (isVishwasatya) {
    siteLabel = "Vishwasatya Vidyaniketan";
  }

  const newsletterMutation = useMutation({
    mutationFn: (email: string) => {
      return apiRequest("POST", "/api/newsletter", { email });
    },
    onSuccess: async (response) => {
      const data = await response.json();
      toast({
        title: "Subscription Successful",
        description: data.message,
      });
      setEmail("");
    },
    onError: (error) => {
      toast({
        title: "Subscription Failed",
        description: error.message,
        variant: "destructive",
      });
    }
  });

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    newsletterMutation.mutate(email);
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <span className="text-white">
                <BookOpen className="h-8 w-8" />
              </span>
              <span className="font-montserrat font-bold text-xl">{siteLabel}</span>
            </div>
            <p className="text-gray-400 mb-6">
              Building a brighter future through quality education and holistic development 
              for students across all age groups.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Schools</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/global-kids">
                  <a className="text-gray-400 hover:text-white transition-colors flex items-center">
                    <ChevronRight className="h-4 w-4 mr-2" />
                    Global Kids
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/global-school">
                  <a className="text-gray-400 hover:text-white transition-colors flex items-center">
                    <ChevronRight className="h-4 w-4 mr-2" />
                    Global School & Jr College
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/vishwasatya">
                  <a className="text-gray-400 hover:text-white transition-colors flex items-center">
                    <ChevronRight className="h-4 w-4 mr-2" />
                    Vishwasatya Vidyaniketan
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-2" />
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-2" />
                  Admissions
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-2" />
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-2" />
                  News & Events
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-2" />
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter to receive updates on our schools and educational programs.
            </p>
            <form className="space-y-4" onSubmit={handleNewsletterSubmit}>
              <div>
                <Input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors text-white"
                  required
                />
              </div>
              <Button 
                type="submit" 
                className="bg-primary-500 hover:bg-primary-600 text-white font-medium w-full"
                disabled={newsletterMutation.isPending}
              >
                {newsletterMutation.isPending ? "Subscribing..." : "Subscribe"}
              </Button>
            </form>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} IGW Foundation. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
