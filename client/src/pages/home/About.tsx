import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle } from "lucide-react";

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
    <section id="about" className="bg-white py-16 md:py-24" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-gray-800 mb-4">
            About IGW Foundation
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            Established with a vision to transform education, IGW Foundation has been at the forefront of 
            educational innovation for over two decades.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="order-2 md:order-1"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.h3 
              className="font-montserrat font-semibold text-2xl text-gray-800 mb-4"
              variants={itemVariants}
            >
              Our Mission & Vision
            </motion.h3>
            <motion.p 
              className="text-gray-600 mb-6"
              variants={itemVariants}
            >
              At IGW Foundation, we believe in the power of education to transform lives. Our mission is to provide 
              accessible, quality education that empowers students to become lifelong learners and responsible global citizens.
            </motion.p>
            
            <div className="space-y-4 mb-8">
              <motion.div 
                className="flex items-start space-x-3"
                variants={itemVariants}
              >
                <div className="bg-primary-100 p-2 rounded-full text-primary-600 mt-1">
                  <CheckCircle className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Student-Centered Learning</h4>
                  <p className="text-gray-600">We place students at the center of the learning experience, nurturing their unique talents and interests.</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start space-x-3"
                variants={itemVariants}
              >
                <div className="bg-primary-100 p-2 rounded-full text-primary-600 mt-1">
                  <CheckCircle className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Inclusive Community</h4>
                  <p className="text-gray-600">We foster an inclusive environment where diversity is celebrated and every voice is valued.</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start space-x-3"
                variants={itemVariants}
              >
                <div className="bg-primary-100 p-2 rounded-full text-primary-600 mt-1">
                  <CheckCircle className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Innovation & Excellence</h4>
                  <p className="text-gray-600">We continuously innovate our teaching methods while maintaining the highest standards of academic excellence.</p>
                </div>
              </motion.div>
            </div>
            
            <motion.a 
              href="#schools" 
              className="inline-flex items-center font-medium text-primary-600 hover:text-primary-700"
              variants={itemVariants}
            >
              Learn about our schools
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </motion.a>
          </motion.div>
          
          <motion.div 
            className="order-1 md:order-2 grid grid-cols-2 gap-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1529390079861-591de354faf5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
              alt="Diverse classroom setting" 
              className="rounded-lg shadow-md h-48 w-full object-cover mb-4"
            />
            <img 
              src="https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
              alt="School building" 
              className="rounded-lg shadow-md h-64 w-full object-cover"
            />
            <img 
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
              alt="Students working together" 
              className="rounded-lg shadow-md h-64 w-full object-cover"
            />
            <img 
              src="https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
              alt="Educational activities" 
              className="rounded-lg shadow-md h-48 w-full object-cover mt-4"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
