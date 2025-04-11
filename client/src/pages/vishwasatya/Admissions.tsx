import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle, FileText, Users, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const Admissions = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const steps = [
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Application Submission",
      description: "Complete the online application form and submit required documents, including academic transcripts and statement of purpose."
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Entrance Examination",
      description: "Qualified candidates will be invited to take program-specific entrance examinations to assess their aptitude and knowledge."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Personal Interview",
      description: "Shortlisted candidates will undergo a personal interview with faculty members to evaluate their suitability for the program."
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Final Selection",
      description: "Based on academic records, entrance exam performance, and interview, successful candidates will receive admission offers."
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
          <div className="w-20 h-1 bg-cyan-600 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            Join our community of scholars and embark on an educational journey that blends tradition with innovation.
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
              src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Campus entrance" 
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
                  <div className="bg-cyan-100 text-cyan-600 p-3 rounded-full">
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
                className="bg-cyan-600 hover:bg-cyan-700 text-white font-medium"
              >
                <a href="#contact">Apply Now</a>
              </Button>
              <Button 
                asChild
                variant="outline" 
                className="border-cyan-300 text-cyan-700 hover:bg-cyan-50"
              >
                <a href="#">Download Prospectus</a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-16 bg-cyan-50 rounded-xl p-8 md:p-10"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold text-xl text-gray-800 mb-4">Important Dates</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center space-x-2">
                  <span className="w-3 h-3 bg-cyan-600 rounded-full"></span>
                  <span>Applications open: November 15</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-3 h-3 bg-cyan-600 rounded-full"></span>
                  <span>Early application deadline: January 31</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-3 h-3 bg-cyan-600 rounded-full"></span>
                  <span>Regular application deadline: March 31</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-3 h-3 bg-cyan-600 rounded-full"></span>
                  <span>Entrance examinations: April 15-30</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-3 h-3 bg-cyan-600 rounded-full"></span>
                  <span>Results announcement: May 25</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-xl text-gray-800 mb-4">Eligibility Criteria</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center space-x-2">
                  <span className="w-3 h-3 bg-cyan-600 rounded-full"></span>
                  <span>Higher Secondary: 10th pass with min. 60%</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-3 h-3 bg-cyan-600 rounded-full"></span>
                  <span>Bachelor's: 12th pass with min. 60%</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-3 h-3 bg-cyan-600 rounded-full"></span>
                  <span>Master's: Bachelor's degree with min. 55%</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-3 h-3 bg-cyan-600 rounded-full"></span>
                  <span>Additional program-specific requirements may apply</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-xl text-gray-800 mb-4">Financial Information</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center space-x-2">
                  <span className="w-3 h-3 bg-cyan-600 rounded-full"></span>
                  <span>Application fee: ₹1,000</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-3 h-3 bg-cyan-600 rounded-full"></span>
                  <span>Program fees vary by course</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-3 h-3 bg-cyan-600 rounded-full"></span>
                  <span>Merit scholarships available</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-3 h-3 bg-cyan-600 rounded-full"></span>
                  <span>Financial aid for deserving students</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-3 h-3 bg-cyan-600 rounded-full"></span>
                  <span>Research fellowships for postgraduate students</span>
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
