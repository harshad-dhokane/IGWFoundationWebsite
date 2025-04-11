import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle, FileText, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Admissions = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const steps = [
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Submit Application",
      description: "Complete our online application form with your child's information and preferred program."
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Schedule a Visit",
      description: "Arrange a tour of our facility and meet with our director to learn more about our programs."
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Assessment/Observation",
      description: "Schedule a time for your child to visit and interact with teachers and potential classmates."
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Enrollment",
      description: "Upon acceptance, complete enrollment forms and secure your child's place with a deposit."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="admissions" className="bg-white py-16 md:py-24" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-gray-800 mb-4">
            Admissions Process
          </h2>
          <div className="w-20 h-1 bg-pink-500 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            We welcome families to join our Global Kids community! Here's how to apply for admission to our programs.
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8 }}
            className="rounded-lg overflow-hidden"
          >
            <img 
              src="https://images.unsplash.com/photo-1526634997893-7ae865af8f60?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Children in classroom" 
              className="w-full h-auto object-cover"
            />
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.h3 
              className="font-montserrat font-semibold text-2xl text-gray-800 mb-6"
              variants={itemVariants}
            >
              How to Apply
            </motion.h3>
            
            <div className="space-y-6">
              {steps.map((step, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start space-x-4"
                  variants={itemVariants}
                >
                  <div className="bg-pink-100 text-pink-600 p-3 rounded-full">
                    {step.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Step {index + 1}: {step.title}</h4>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              className="mt-8 grid gap-4 sm:grid-cols-2"
              variants={itemVariants}
            >
              <Button 
                asChild
                className="bg-pink-500 hover:bg-pink-600 text-white font-medium"
              >
                <a href="#contact">Start Application</a>
              </Button>
              <Button 
                asChild
                variant="outline" 
                className="border-pink-300 text-pink-700 hover:bg-pink-50"
              >
                <a href="#">Download Brochure</a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-16 bg-pink-50 rounded-xl p-8 md:p-10"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold text-xl text-gray-800 mb-4">Application Timeline</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center space-x-2">
                  <span className="w-3 h-3 bg-pink-500 rounded-full"></span>
                  <span>Applications open: January 15</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-3 h-3 bg-pink-500 rounded-full"></span>
                  <span>Priority deadline: March 1</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-3 h-3 bg-pink-500 rounded-full"></span>
                  <span>Notifications: April 15</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-3 h-3 bg-pink-500 rounded-full"></span>
                  <span>Rolling admissions after April 15</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-xl text-gray-800 mb-4">Age Requirements</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center space-x-2">
                  <span className="w-3 h-3 bg-pink-500 rounded-full"></span>
                  <span>Toddler Program: 2 years by Sept 1</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-3 h-3 bg-pink-500 rounded-full"></span>
                  <span>Preschool: 3 years by Sept 1</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-3 h-3 bg-pink-500 rounded-full"></span>
                  <span>Pre-K: 4 years by Sept 1</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-3 h-3 bg-pink-500 rounded-full"></span>
                  <span>Must be fully potty-trained for 3+ programs</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-xl text-gray-800 mb-4">Tuition & Fees</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center space-x-2">
                  <span className="w-3 h-3 bg-pink-500 rounded-full"></span>
                  <span>Application fee: $75 (non-refundable)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-3 h-3 bg-pink-500 rounded-full"></span>
                  <span>Annual registration fee: $250</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-3 h-3 bg-pink-500 rounded-full"></span>
                  <span>Materials fee: $150 per semester</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-3 h-3 bg-pink-500 rounded-full"></span>
                  <span>Monthly tuition varies by program</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Admissions;
