import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Classes = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const educationPrograms = [
    {
      title: "Primary School",
      grades: "Grades 1-5",
      description: "Our primary program develops foundational skills in literacy, numeracy, and critical thinking through engaging, hands-on learning experiences.",
      subjects: ["Language Arts", "Mathematics", "Science", "Social Studies", "Art & Music", "Physical Education"],
      features: ["Small class sizes", "Personalized attention", "Project-based learning"]
    },
    {
      title: "Middle School",
      grades: "Grades 6-8",
      description: "Middle school bridges the gap between primary and secondary education, helping students develop independence and discover their unique strengths and interests.",
      subjects: ["Advanced Language Arts", "Pre-Algebra & Algebra", "Life & Physical Sciences", "World History", "Foreign Language", "Digital Literacy"],
      features: ["Specialist teachers", "Research skills development", "Leadership opportunities"]
    },
    {
      title: "High School",
      grades: "Grades 9-12",
      description: "Our rigorous high school program prepares students for university success through challenging academics, college counseling, and opportunities for specialization.",
      subjects: ["Advanced Mathematics", "Physics, Chemistry & Biology", "Literature & Composition", "Economics & Social Sciences", "Computer Science", "Fine Arts"],
      features: ["Advanced Placement courses", "Career guidance", "University preparation"]
    },
    {
      title: "Junior College",
      grades: "Grades 11-12 (Higher Secondary)",
      description: "The Junior College division offers specialized streams that prepare students for professional courses and university entrance examinations.",
      subjects: ["Science Stream (PCM/PCB)", "Commerce Stream", "Arts Stream", "Entrepreneurship Studies", "Research Methodology", "Internship Program"],
      features: ["University entrance exam preparation", "Industry partnerships", "Specialized faculty"]
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
    <section id="classes" className="bg-white py-16 md:py-24" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-gray-800 mb-4">
            Academic Programs
          </h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            Our comprehensive curriculum provides a solid foundation while fostering critical thinking,
            creativity, and a love for lifelong learning.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {educationPrograms.map((program, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm border-2 border-indigo-100">
                <CardHeader className="bg-gradient-to-r from-indigo-50 to-indigo-100/50 border-b-2 border-indigo-200">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-2xl font-bold text-gray-800 mb-2">{program.title}</CardTitle>
                      <CardDescription className="text-indigo-600 font-semibold text-lg mt-1">
                        {program.grades}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-8 relative">
                  {/* Decorative element */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-indigo-100/30 rounded-full blur-2xl"></div>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-800 mb-2">Key Subjects:</h4>
                    <div className="flex flex-wrap gap-2">
                      {program.subjects.map((subject, i) => (
                        <span 
                          key={i} 
                          className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full"
                        >
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Program Features:</h4>
                    <ul className="list-disc pl-5 text-gray-600 text-sm">
                      {program.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
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
            We also offer a variety of extracurricular activities, clubs, and special programs to enhance
            our students' educational experience and develop well-rounded individuals.
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-3 rounded-lg transition-colors"
          >
            Request Curriculum Details
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Classes;
