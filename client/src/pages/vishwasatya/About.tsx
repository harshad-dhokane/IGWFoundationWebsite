import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Lightbulb, Users, Globe, BookOpen } from "lucide-react";

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

  const features = [
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Holistic Education",
      description: "We integrate traditional wisdom with contemporary learning approaches to develop well-rounded individuals."
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Innovation & Research",
      description: "Our programs emphasize critical thinking, creativity, and research skills for real-world problem-solving."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Cultural Integration",
      description: "We nurture cultural values and traditions while preparing students for global opportunities."
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Global Partnerships",
      description: "Collaborations with international institutions provide diverse learning experiences and perspectives."
    }
  ];

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
            About Vishwasatya Vidyaniketan
          </h2>
          <div className="w-20 h-1 bg-cyan-600 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            Established in 2000, Vishwasatya Vidyaniketan was founded with a vision to create a 
            unique educational institution that bridges traditional values with modern approaches.
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
              Our Philosophy
            </motion.h3>
            <motion.p 
              className="text-gray-600 mb-6"
              variants={itemVariants}
            >
              At Vishwasatya, we believe that true education fosters not just intellectual growth, but also 
              emotional intelligence, cultural awareness, and spiritual depth. Our pedagogical approach combines 
              the wisdom of ancient learning traditions with cutting-edge educational methodologies.
            </motion.p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="bg-cyan-50 rounded-lg p-5"
                  variants={itemVariants}
                >
                  <div className="text-cyan-600 mb-3">{feature.icon}</div>
                  <h4 className="font-semibold text-gray-800 mb-2">{feature.title}</h4>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
            
            <motion.a 
              href="#classes" 
              className="inline-flex items-center font-medium text-cyan-600 hover:text-cyan-700"
              variants={itemVariants}
            >
              Explore our academic programs
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </motion.a>
          </motion.div>
          
          <motion.div 
            className="order-1 md:order-2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Students in traditional learning environment" 
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
