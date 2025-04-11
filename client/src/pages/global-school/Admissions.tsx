import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle, FileText, UserCheck, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const Admissions = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const steps = [
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Application Submission",
      description: "Complete the online application form and submit all required documents, including previous academic records."
    },
    {
      icon: <UserCheck className="h-6 w-6" />,
      title: "Entrance Assessment",
      description: "Students take an age-appropriate entrance assessment to determine their academic readiness."
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Interview",
      description: "Selected candidates and their parents are invited for an interview with the admissions committee."
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Admission Decision",
      description: "Successful candidates receive an offer letter. Upon acceptance, complete enrollment formalities and fee payment."
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
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            Join our community of learners and embark on a journey of academic excellence and personal growth.
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
              src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Students in campus" 
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
                  <div className="bg-indigo-100 text-indigo-600 p-3 rounded-full">
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
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium"
              >
                <a href="#contact">Apply Now</a>
              </Button>
              <Button 
                asChild
                variant="outline" 
                className="border-indigo-300 text-indigo-700 hover:bg-indigo-50"
              >
                <a href="#">Download Prospectus</a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-16 bg-indigo-50 rounded-xl p-8 md:p-10"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold text-xl text-gray-800 mb-4">Admission Calendar</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center space-x-2">
                  <span className="w-3 h-3 bg-indigo-600 rounded-full"></span>
                  <span>Applications open: December 1</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-3 h-3 bg-indigo-600 rounded-full"></span>
                  <span>Early admission deadline: January 31</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-3 h-3 bg-indigo-600 rounded-full"></span>
                  <span>Regular admission deadline: March 15</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-3 h-3 bg-indigo-600 rounded-full"></span>
                  <span>Final admission results: April 30</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-xl text-gray-800 mb-4">Required Documents</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center space-x-2">
                  <span className="w-3 h-3 bg-indigo-600 rounded-full"></span>
                  <span>Completed application form</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-3 h-3 bg-indigo-600 rounded-full"></span>
                  <span>Birth certificate</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-3 h-3 bg-indigo-600 rounded-full"></span>
                  <span>Previous academic records</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-3 h-3 bg-indigo-600 rounded-full"></span>
                  <span>Passport-sized photographs</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-3 h-3 bg-indigo-600 rounded-full"></span>
                  <span>Transfer certificate (if applicable)</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-xl text-gray-800 mb-4">Fees Structure</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center space-x-2">
                  <span className="w-3 h-3 bg-indigo-600 rounded-full"></span>
                  <span>Application fee: ₹2,000</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-3 h-3 bg-indigo-600 rounded-full"></span>
                  <span>Admission fee: ₹50,000 (one-time)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-3 h-3 bg-indigo-600 rounded-full"></span>
                  <span>Tuition fee: Varies by grade level</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-3 h-3 bg-indigo-600 rounded-full"></span>
                  <span>Fee can be paid quarterly/annually</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-3 h-3 bg-indigo-600 rounded-full"></span>
                  <span>Scholarships available for deserving students</span>
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
