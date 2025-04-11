import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useAnimation } from "@/context/AnimationContext";
import { ArrowRight, Sparkles, BookOpenCheck, Gem } from "lucide-react";

const Hero = () => {
  const { isFirstMount } = useAnimation();

  return (
    <section 
      id="home" 
      className="relative overflow-hidden"
    >
      {/* Background with gradient and shapes */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-500 z-0 overflow-hidden">
        {/* Animated geometric shapes */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-80 -right-20 w-80 h-80 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-20 md:py-28 lg:py-36">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: isFirstMount ? 0.2 : 0, duration: 0.8 }}
            className="text-white"
          >
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              <Sparkles className="h-4 w-4 mr-2 text-amber-300" />
              <span className="text-sm font-medium">Transforming Education Since 1995</span>
            </div>
            
            <h1 className="font-bold text-5xl md:text-6xl lg:text-7xl leading-tight mb-6 font-montserrat tracking-tight">
              Inspiring <span className="text-amber-300 relative">
                Brilliance
                <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 318 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 10C45.6667 4 158.8 -4.8 316 10" stroke="#FBBF24" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </span> in Every <span className="text-teal-300">Student</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-lg leading-relaxed">
              The IGW Foundation is dedicated to cultivating a lifelong love of learning, 
              fostering creativity, and nurturing tomorrow's visionaries.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 mt-10">
              <Button 
                asChild
                size="lg"
                className="bg-white text-violet-700 hover:bg-white/90 hover:text-violet-800 px-8 py-6 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <a href="#schools" className="flex items-center">
                  Discover Our Schools
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              
              <Button 
                asChild
                variant="outline" 
                size="lg"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-6 rounded-xl font-semibold text-lg transition-all duration-300"
              >
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>
            
            <div className="flex items-center space-x-8 mt-12">
              <div className="flex items-center">
                <BookOpenCheck className="h-6 w-6 text-amber-300 mr-2" />
                <span className="text-white/90">Accredited Programs</span>
              </div>
              <div className="flex items-center">
                <Gem className="h-6 w-6 text-teal-300 mr-2" />
                <span className="text-white/90">Exceptional Faculty</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: isFirstMount ? 0.6 : 0.1, duration: 0.8 }}
            className="relative"
          >
            {/* Decorative element */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70"></div>
            
            {/* Main image with frame effect */}
            <div className="relative z-10 rounded-2xl overflow-hidden border-8 border-white/20 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <img 
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Students learning together" 
                className="w-full h-auto object-cover"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-violet-900/50 to-transparent"></div>
            </div>
            
            {/* Floating badges */}
            <motion.div 
              className="absolute -bottom-6 -left-6 bg-white rounded-xl p-3 shadow-lg z-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: isFirstMount ? 1.2 : 0.7, duration: 0.6 }}
            >
              <div className="flex items-center gap-3">
                <div className="bg-amber-100 p-2 rounded-full">
                  <svg className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-800">15:1</p>
                  <p className="text-xs text-gray-500">Student-Teacher Ratio</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="absolute -top-4 right-10 bg-white rounded-xl p-3 shadow-lg z-20"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: isFirstMount ? 1.4 : 0.9, duration: 0.6 }}
            >
              <div className="flex items-center gap-3">
                <div className="bg-teal-100 p-2 rounded-full">
                  <svg className="h-6 w-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-800">3</p>
                  <p className="text-xs text-gray-500">Global Campuses</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
