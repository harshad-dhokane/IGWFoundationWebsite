import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useAnimation } from "@/context/AnimationContext";

const Hero = () => {
  const { isFirstMount } = useAnimation();

  return (
    <section 
      id="home" 
      className="relative overflow-hidden bg-gradient-to-r from-cyan-600 via-teal-500 to-cyan-500 text-white min-h-screen flex items-center"
      style={{
        backgroundSize: "200% 200%",
        animation: "gradientBg 10s ease infinite",
      }}
    >
      {/* Decorative floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-cyan-300/30 rounded-full floating blur-xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-teal-300/30 rounded-full floating-reverse blur-lg"></div>
        <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-cyan-200/30 rounded-full floating-slow blur-xl"></div>
        
        {/* Traditional patterns */}
        <div className="absolute top-1/4 right-1/4 w-20 h-20 border-2 border-white/20 rounded-full floating"></div>
        <div className="absolute bottom-1/3 left-1/3 w-16 h-16 border-2 border-white/20 rounded-full floating-reverse"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: isFirstMount ? 0.2 : 0, duration: 0.8 }}
          >
            <span className="bg-white text-cyan-600 text-sm font-semibold px-3 py-1 rounded-full">Higher Education</span>
            <h1 className="font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl leading-tight my-6">
              Blending <span className="text-yellow-300">Tradition</span> with <span className="text-yellow-300">Innovation</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-white/90 max-w-lg">
              Vishwasatya Vidyaniketan offers a unique educational approach that preserves cultural 
              values while embracing modern teaching methodologies and global perspectives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild
                variant="default" 
                className="bg-white text-cyan-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium"
              >
                <a href="#admissions">Apply For Admission</a>
              </Button>
              <Button 
                asChild
                variant="outline" 
                className="bg-transparent border-2 border-white hover:bg-white/10 px-6 py-3 rounded-lg font-medium text-white"
              >
                <a href="#about">Explore Programs</a>
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: isFirstMount ? 0.6 : 0.1, duration: 0.8 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Vishwasatya campus" 
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
