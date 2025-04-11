import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Classes = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const educationPrograms = [
    {
      title: "Higher Secondary Education",
      category: "Grades 11-12",
      description: "Our Higher Secondary program offers a holistic approach that combines academic excellence with values-based education, preparing students for higher studies.",
      streams: ["Arts Stream", "Commerce Stream", "Science Stream"],
      features: ["Traditional knowledge integration", "Modern teaching methodologies", "Career guidance", "Personality development"]
    },
    {
      title: "Bachelor's Programs",
      category: "Undergraduate",
      description: "Our undergraduate programs combine rigorous academics with practical experience, creating well-rounded professionals with strong ethical foundations.",
      streams: ["Bachelor of Arts (BA)", "Bachelor of Commerce (BCom)", "Bachelor of Science (BSc)", "Bachelor of Computer Applications (BCA)"],
      features: ["Industry collaborations", "Research opportunities", "Cultural studies", "Leadership development"]
    },
    {
      title: "Master's Programs",
      category: "Postgraduate",
      description: "Our postgraduate programs focus on advanced knowledge and specialized skills, with emphasis on research, innovation, and professional expertise.",
      streams: ["Master of Arts (MA)", "Master of Commerce (MCom)", "Master of Science (MSc)", "Master of Computer Applications (MCA)"],
      features: ["Advanced research methodology", "Industry internships", "Specialized training", "Global exposure"]
    },
    {
      title: "Certificate Programs",
      category: "Skill Enhancement",
      description: "Short-term certificate programs designed to enhance specific skills, provide specialized knowledge, or explore emerging fields.",
      streams: ["Digital Marketing", "Sustainable Development", "Indian Philosophy", "Artificial Intelligence", "Cultural Heritage Studies"],
      features: ["Flexible scheduling", "Industry experts as faculty", "Practical workshops", "Certification"]
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
            Our comprehensive educational programs blend traditional wisdom with contemporary knowledge,
            preparing students for both global opportunities and cultural rootedness.
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
                    <h4 className="font-medium text-gray-800 mb-2">Streams/Specializations:</h4>
                    <div className="flex flex-wrap gap-2">
                      {program.streams.map((stream, i) => (
                        <span 
                          key={i} 
                          className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full"
                        >
                          {stream}
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
            Beyond academics, we offer various extracurricular activities, workshops, and seminars
            to ensure holistic development of our students.
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center bg-cyan-600 hover:bg-cyan-700 text-white font-medium px-6 py-3 rounded-lg transition-colors"
          >
            Request Program Details
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Classes;
