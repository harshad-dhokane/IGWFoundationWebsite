import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import ContactForm from "@/components/ContactForm";

const Contact = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

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
    <section id="contact" className="relative overflow-hidden bg-gradient-to-br from-pink-50 via-rose-50 to-orange-50 py-16 md:py-24" ref={sectionRef}>
      {/* Playful floating shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-pink-200/40 rounded-full blur-xl animate-float"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-rose-200/40 rounded-star blur-xl animate-float-delayed"></div>
      <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-orange-200/40 rounded-heart blur-xl animate-bounce-slow"></div>
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-gray-800 mb-4">
            Contact Global Kids
          </h2>
          <div className="w-20 h-1 bg-pink-500 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            We'd love to hear from you! Reach out with any questions about our programs, 
            enrollment, or to schedule a tour of our facility.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div 
            className="md:col-span-2 bg-white rounded-xl shadow-lg p-8"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.h3 
              className="font-montserrat font-semibold text-2xl text-gray-800 mb-6"
              variants={itemVariants}
            >
              Send Us a Message
            </motion.h3>
            <ContactForm schoolSite="global-kids" />
          </motion.div>
          
          <motion.div 
            className="md:col-span-1"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div 
              className="bg-white rounded-xl shadow-lg p-8 mb-8"
              variants={itemVariants}
            >
              <h3 className="font-montserrat font-semibold text-xl text-gray-800 mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-pink-100 p-2 rounded-full text-pink-600 mt-1">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Our Location</h4>
                    <p className="text-gray-600">456 Playful Lane<br />Mumbai, Maharashtra 400002</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-pink-100 p-2 rounded-full text-pink-600 mt-1">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Phone</h4>
                    <p className="text-gray-600">+91 22 2345 6789</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-pink-100 p-2 rounded-full text-pink-600 mt-1">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Email</h4>
                    <p className="text-gray-600">info@globalkids.org</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-pink-600 text-white rounded-xl shadow-lg p-8"
              variants={itemVariants}
            >
              <h3 className="font-montserrat font-semibold text-xl mb-4">School Hours</h3>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>8:00 AM - 5:30 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday:</span>
                  <span>Closed</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </li>
              </ul>
              
              <div className="mt-6 pt-6 border-t border-pink-500">
                <h3 className="font-montserrat font-semibold text-xl mb-4">Schedule a Tour</h3>
                <p className="mb-4">
                  We invite you to visit our campus and see our programs in action. 
                  Contact us to schedule a personalized tour.
                </p>
                <a 
                  href="tel:+912223456789" 
                  className="inline-flex items-center justify-center bg-white text-pink-600 hover:bg-pink-100 font-medium px-4 py-2 rounded-lg transition-colors"
                >
                  Call to Schedule
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
