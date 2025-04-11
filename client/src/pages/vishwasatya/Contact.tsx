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
    <section id="contact" className="bg-cyan-50 py-16 md:py-24" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-gray-800 mb-4">
            Contact Vishwasatya Vidyaniketan
          </h2>
          <div className="w-20 h-1 bg-cyan-600 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            Have questions about our programs, admissions process, or would like to schedule a campus visit? 
            We're here to assist you.
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
            <ContactForm schoolSite="vishwasatya" />
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
                  <div className="bg-cyan-100 p-2 rounded-full text-cyan-600 mt-1">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Campus Address</h4>
                    <p className="text-gray-600">234 Knowledge Path<br />Mumbai, Maharashtra 400004</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-cyan-100 p-2 rounded-full text-cyan-600 mt-1">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Phone</h4>
                    <p className="text-gray-600">+91 22 4567 8901</p>
                    <p className="text-gray-600">+91 22 4567 8902 (Admissions)</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-cyan-100 p-2 rounded-full text-cyan-600 mt-1">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Email</h4>
                    <p className="text-gray-600">info@vishwasatya.org</p>
                    <p className="text-gray-600">admissions@vishwasatya.org</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-cyan-600 text-white rounded-xl shadow-lg p-8"
              variants={itemVariants}
            >
              <h3 className="font-montserrat font-semibold text-xl mb-4">Office Hours</h3>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>9:00 AM - 5:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday:</span>
                  <span>9:00 AM - 1:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </li>
              </ul>
              
              <div className="mt-6 pt-6 border-t border-cyan-500">
                <h3 className="font-montserrat font-semibold text-xl mb-4">Campus Tours</h3>
                <p className="mb-4">
                  We invite prospective students and families to visit our campus.
                  Tours are available by appointment.
                </p>
                <a 
                  href="tel:+912245678902" 
                  className="inline-flex items-center justify-center bg-white text-cyan-600 hover:bg-cyan-100 font-medium px-4 py-2 rounded-lg transition-colors"
                >
                  Schedule a Tour
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
