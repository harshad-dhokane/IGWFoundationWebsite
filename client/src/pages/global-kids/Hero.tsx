import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useAnimation } from "@/context/AnimationContext";

const Hero = () => {
  const { isFirstMount } = useAnimation();

  return (
    <section 
      id="home" 
      className="bg-gradient-to-r from-pink-500 via-pink-400 to-rose-500 text-white"
      style={{
        backgroundSize: "200% 200%",
        animation: "gradientBg 10s ease infinite",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: isFirstMount ? 0.2 : 0, duration: 0.8 }}
          >
            <span className="bg-white text-pink-500 text-sm font-semibold px-3 py-1 rounded-full">Pre-Primary Education</span>
            <h1 className="font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl leading-tight my-6">
              Where Little <span className="text-yellow-300">Minds</span> Begin Their <span className="text-yellow-300">Journey</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-white/90 max-w-lg">
              Global Kids provides a nurturing environment where young children develop a love for learning
              through play, exploration, and creative expression.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild
                variant="default" 
                className="bg-white text-pink-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium"
              >
                <a href="#admissions">Enroll Your Child</a>
              </Button>
              <Button 
                asChild
                variant="outline" 
                className="bg-transparent border-2 border-white hover:bg-white/10 px-6 py-3 rounded-lg font-medium text-white"
              >
                <a href="#about">Learn More</a>
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: isFirstMount ? 0.6 : 0.1, duration: 0.8 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1545558014-8692077e9b5c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Children playing and learning" 
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
