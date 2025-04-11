import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Target, Heart, Sparkles, ArrowRight } from "lucide-react";

const About = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="about" className="relative py-20 md:py-32 overflow-hidden" ref={sectionRef}>
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-white to-fuchsia-50 -z-10"></div>
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-pink-200 to-pink-300 rounded-bl-full opacity-20 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-amber-200 to-amber-300 rounded-tr-full opacity-20 -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center px-4 py-2 bg-violet-100 rounded-full mb-6">
            <Sparkles className="h-4 w-4 mr-2 text-violet-600" />
            <span className="text-sm font-medium text-violet-800">Educational Excellence Since 1995</span>
          </div>
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-gray-800 mb-6 tracking-tight">
            Pioneering <span className="gradient-text">Educational Excellence</span>
          </h2>
          <p className="max-w-3xl mx-auto text-gray-600 text-xl leading-relaxed">
            For over two decades, IGW Foundation has led the charge in transforming education, 
            creating innovative learning environments that inspire students to reach their fullest potential.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left column - Features */}
          <motion.div 
            className="relative z-10"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.h3 
              className="font-montserrat font-semibold text-3xl text-gray-800 mb-6"
              variants={itemVariants}
            >
              Igniting Potential Through <br />Inspired Learning
            </motion.h3>
            
            <motion.p 
              className="text-gray-600 text-lg mb-10 leading-relaxed"
              variants={itemVariants}
            >
              We believe in cultivating a lifelong love for learning by creating environments 
              where curiosity thrives, critical thinking flourishes, and every child's unique talents are celebrated.
            </motion.p>
            
            <div className="space-y-8 mb-10">
              {/* Feature 1 */}
              <motion.div 
                className="bg-white rounded-2xl p-6 shadow-lg border border-violet-100 hover:shadow-xl transition-shadow duration-300"
                variants={itemVariants}
              >
                <div className="flex items-start gap-5">
                  <div className="p-3 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-xl text-white">
                    <Target className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-xl text-gray-800 mb-2">Student-Centered Approach</h4>
                    <p className="text-gray-600">We design our educational experiences around the needs, interests, and aspirations of each student, creating personalized pathways to success.</p>
                  </div>
                </div>
              </motion.div>
              
              {/* Feature 2 */}
              <motion.div 
                className="bg-white rounded-2xl p-6 shadow-lg border border-amber-100 hover:shadow-xl transition-shadow duration-300"
                variants={itemVariants}
              >
                <div className="flex items-start gap-5">
                  <div className="p-3 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl text-white">
                    <Heart className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-xl text-gray-800 mb-2">Inclusive Community</h4>
                    <p className="text-gray-600">Our schools embrace diversity and foster caring communities where students feel valued, respected, and empowered to contribute.</p>
                  </div>
                </div>
              </motion.div>
              
              {/* Feature 3 */}
              <motion.div 
                className="bg-white rounded-2xl p-6 shadow-lg border border-teal-100 hover:shadow-xl transition-shadow duration-300"
                variants={itemVariants}
              >
                <div className="flex items-start gap-5">
                  <div className="p-3 bg-gradient-to-br from-teal-400 to-emerald-500 rounded-xl text-white">
                    <Award className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-xl text-gray-800 mb-2">Innovation & Excellence</h4>
                    <p className="text-gray-600">We blend innovative teaching methods with time-tested educational principles to deliver exceptional academic experiences.</p>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <motion.a 
              href="#schools" 
              className="inline-flex items-center bg-violet-600 hover:bg-violet-700 text-white font-medium px-6 py-3 rounded-xl transition-colors shadow-md hover:shadow-lg group"
              variants={itemVariants}
            >
              Discover Our Educational Approach
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </motion.a>
          </motion.div>
          
          {/* Right column - Image gallery with floating elements */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1 }}
          >
            {/* Main image collage */}
            <div className="relative grid grid-cols-6 grid-rows-6 gap-4 h-[600px]">
              {/* Image 1 */}
              <motion.div 
                className="col-span-4 row-span-3 rounded-2xl overflow-hidden shadow-xl"
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1529390079861-591de354faf5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                  alt="Diverse classroom setting" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              {/* Image 2 */}
              <motion.div 
                className="col-span-2 row-span-2 col-start-5 row-start-2 rounded-2xl overflow-hidden shadow-xl"
                initial={{ opacity: 0, y: -20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                  alt="School building" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              {/* Image 3 */}
              <motion.div 
                className="col-span-3 row-span-3 col-start-1 row-start-4 rounded-2xl overflow-hidden shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                  alt="Students working together" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              {/* Image 4 */}
              <motion.div 
                className="col-span-3 row-span-3 col-start-4 row-start-4 rounded-2xl overflow-hidden shadow-xl"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                  alt="Educational activities" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-pink-400 rounded-full mix-blend-multiply blur-lg opacity-70"></div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-amber-300 rounded-full mix-blend-multiply blur-lg opacity-70"></div>
              
              {/* Stats badge */}
              <motion.div 
                className="absolute top-1/4 right-0 translate-x-1/4 bg-white rounded-2xl p-4 shadow-xl z-10 border-2 border-violet-100"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <div className="text-center">
                  <p className="text-4xl font-bold text-violet-600">24+</p>
                  <p className="text-gray-600 text-sm">Years of Excellence</p>
                </div>
              </motion.div>
              
              {/* Stats badge */}
              <motion.div 
                className="absolute bottom-10 left-0 -translate-x-1/4 bg-white rounded-2xl p-4 shadow-xl z-10 border-2 border-amber-100"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                <div className="text-center">
                  <p className="text-4xl font-bold text-amber-500">5000+</p>
                  <p className="text-gray-600 text-sm">Students Empowered</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
