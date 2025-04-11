
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Classes = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const educationPrograms = [
    {
      title: "Primary Education",
      category: "Grades 1-4",
      description: "Our primary education program provides a strong foundation with a unique semi-English approach, blending regional language instruction with English.",
      subjects: ["English", "Mathematics (English)", "Science (English)", "History (Marathi)", "Geography (Marathi)", "Marathi"],
      features: ["Bilingual teaching methodology", "Cultural integration", "Activity-based learning", "Regular parent interaction"]
    },
    {
      title: "Middle School",
      category: "Grades 5-8",
      description: "Middle school education continues our semi-English medium approach while preparing students for advanced concepts and secondary education.",
      subjects: ["English Literature & Grammar", "Advanced Mathematics (English)", "Science (English)", "Social Studies (Marathi)", "Computer Science (English)", "Arts & Crafts"],
      features: ["Interactive learning", "Regular assessments", "Extra-curricular activities", "Sports & Physical Education"]
    },
    {
      title: "Secondary Education",
      category: "Grades 9-10",
      description: "Secondary education focuses on State Board curriculum with our distinctive semi-English medium instruction, preparing students for board examinations.",
      subjects: ["English", "Mathematics (English)", "Science (English)", "History & Political Science (Marathi)", "Geography (Marathi)", "Information Technology"],
      features: ["Board exam preparation", "Career counseling", "Practical labs", "Remedial classes"]
    },
    {
      title: "Junior College",
      category: "Grades 11-12",
      description: "Our Junior College offers Science and Commerce streams following the State Board curriculum, preparing students for higher education.",
      streams: ["Science Stream", "Commerce Stream"],
      features: ["Experienced faculty", "Modern laboratories", "Entrance exam preparation", "Career guidance"]
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
          <div className="w-20 h-1 bg-cyan-600 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            Our unique semi-English medium curriculum combines the best of both worlds,
            offering subjects in English and Marathi to ensure strong linguistic and cultural foundations.
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
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="bg-cyan-50 border-b border-cyan-100">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl text-gray-800">{program.title}</CardTitle>
                      <CardDescription className="text-cyan-600 font-medium mt-1">
                        {program.category}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-800 mb-2">
                      {program.subjects ? "Key Subjects:" : "Available Streams:"}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {(program.subjects || program.streams)?.map((item, i) => (
                        <span 
                          key={i} 
                          className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full"
                        >
                          {item}
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
      </div>
    </section>
  );
};

export default Classes;
