import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Classes = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const classPrograms = [
    {
      title: "Toddler Program",
      ageRange: "Ages 2-3",
      description: "A gentle introduction to the school environment focusing on sensory exploration, language development, and social interaction.",
      schedule: "Half-day (9am-12pm) or Full-day (9am-3pm)",
      activities: ["Sensory Play", "Music & Movement", "Early Language", "Fine Motor Skills"]
    },
    {
      title: "Preschool Program",
      ageRange: "Ages 3-4",
      description: "Building independence and confidence through a play-based curriculum that introduces early literacy, numeracy, and creative expression.",
      schedule: "Half-day (9am-12pm) or Full-day (9am-3pm)",
      activities: ["Pre-Reading Skills", "Early Math Concepts", "Art & Creativity", "Nature Exploration"]
    },
    {
      title: "Pre-Kindergarten",
      ageRange: "Ages 4-5",
      description: "Preparing children for kindergarten through structured activities that develop school readiness skills while nurturing curiosity and creativity.",
      schedule: "Half-day (9am-12pm) or Full-day (9am-3pm)",
      activities: ["Literacy Development", "Mathematical Thinking", "Science Discovery", "Social Skills"]
    },
    {
      title: "Enrichment Programs",
      ageRange: "All Ages",
      description: "Optional after-school activities that allow children to explore special interests and develop new skills in a fun, supportive environment.",
      schedule: "Weekday afternoons (3:30pm-4:30pm)",
      activities: ["Dance & Movement", "Art Studio", "Music Exploration", "Junior Sports"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 } 
    },
  };

  return (
    <section id="classes" className="relative overflow-hidden bg-white py-16 md:py-24" ref={sectionRef}>
      {/* Decorative elements */}
      <div className="absolute inset-0 mesh-gradient-vibrant opacity-70"></div>
      
      {/* Floating shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-[10%] w-28 h-28 bg-pink-200/30 shape-circle animate-float-diagonal"></div>
        <div className="absolute bottom-40 right-[5%] w-20 h-20 bg-pink-300/30 shape-star animate-float"></div>
        <div className="absolute top-1/2 left-[20%] w-16 h-16 border-2 border-pink-200/30 shape-diamond animate-rotate-slow"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-gray-800 mb-4">
            Our Programs
          </h2>
          <div className="w-20 h-1 bg-pink-500 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            We offer a variety of age-appropriate programs designed to meet the developmental 
            needs of young children and foster a lifelong love of learning.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {classPrograms.map((program, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="bg-pink-50 border-b border-pink-100">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl text-gray-800">{program.title}</CardTitle>
                      <CardDescription className="text-pink-600 font-medium mt-1">
                        {program.ageRange}
                      </CardDescription>
                    </div>
                    <span className="bg-pink-100 text-pink-800 text-xs px-3 py-1 rounded-full">
                      {program.schedule}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Key Activities:</h4>
                    <div className="flex flex-wrap gap-2">
                      {program.activities.map((activity, i) => (
                        <span 
                          key={i} 
                          className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full"
                        >
                          {activity}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-gray-600 mb-4">
            We also offer extended care options from 8:00am-9:00am and 3:00pm-5:30pm for families who need additional hours.
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center bg-pink-500 hover:bg-pink-600 text-white font-medium px-6 py-3 rounded-lg transition-colors"
          >
            Inquire About Enrollment
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Classes;
