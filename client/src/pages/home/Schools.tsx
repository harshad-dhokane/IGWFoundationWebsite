import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "wouter";
import { ArrowRight, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

const Schools = () => {
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

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
      } 
    },
  };

  const schoolsData = [
    {
      id: "global-kids",
      name: "Global Kids",
      category: "Pre-Primary",
      image: "https://images.unsplash.com/photo-1544237526-cae15a57ed1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "A vibrant early learning center where young minds are nurtured through play-based learning and creative exploration in a supportive environment.",
      tags: ["Ages 2-6", "Montessori", "Play-based"],
      colorClasses: {
        bg: "bg-[#FF7262]",
        text: "text-[#FF7262]",
        tag: {
          bg: "bg-pink-100",
          text: "text-pink-800"
        }
      },
      href: "/global-kids"
    },
    {
      id: "global-school",
      name: "Global School & Jr College",
      category: "K-12 & Jr College",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "A comprehensive educational institution offering a balanced curriculum that emphasizes academic excellence, character development, and extracurricular achievements.",
      tags: ["K-12", "Jr College", "STEM Focus"],
      colorClasses: {
        bg: "bg-[#4F46E5]",
        text: "text-[#4F46E5]",
        tag: {
          bg: "bg-indigo-100",
          text: "text-indigo-800"
        }
      },
      href: "/global-school"
    },
    {
      id: "vishwasatya",
      name: "Vishwasatya Vidyaniketan",
      category: "Higher Education",
      image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "An innovative institution blending traditional values with modern educational approaches, preparing students for global opportunities while staying rooted in culture.",
      tags: ["Higher Secondary", "College", "Liberal Arts"],
      colorClasses: {
        bg: "bg-[#06B6D4]",
        text: "text-[#06B6D4]",
        tag: {
          bg: "bg-cyan-100",
          text: "text-cyan-800"
        }
      },
      href: "/vishwasatya"
    }
  ];

  return (
    <section id="schools" className="bg-gray-50 py-16 md:py-24" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-gray-800 mb-4">
            Our Educational Institutions
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            IGW Foundation manages three premier educational institutions, each with its unique approach 
            to nurturing young minds and developing future leaders.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {schoolsData.map((school, index) => (
            <motion.div 
              key={school.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              variants={cardVariants}
              custom={index}
            >
              <div className={`h-48 ${school.colorClasses.bg} relative`}>
                <img 
                  src={school.image}
                  alt={`${school.name} Campus`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6">
                    <span className={`bg-white ${school.colorClasses.text} text-xs font-semibold px-3 py-1 rounded-full`}>
                      {school.category}
                    </span>
                    <h3 className="font-montserrat font-bold text-2xl text-white mt-2">{school.name}</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-6">
                  {school.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {school.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className={`${school.colorClasses.tag.bg} ${school.colorClasses.tag.text} text-xs px-3 py-1 rounded-full`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link href={school.href}>
                  <a className={`inline-flex items-center font-medium ${school.colorClasses.text} hover:underline`}>
                    Visit School Website
                    <ArrowRight className="h-5 w-5 ml-1" />
                  </a>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-16 max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 md:p-10"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
            <div className="bg-primary-100 rounded-full p-6 text-primary-600">
              <Briefcase className="h-10 w-10" />
            </div>
            <div>
              <h3 className="font-montserrat font-semibold text-2xl text-gray-800 mb-2 text-center md:text-left">
                Join Our Educational Community
              </h3>
              <p className="text-gray-600 mb-6 text-center md:text-left">
                Looking for quality education for your child? Explore our admissions process and join our vibrant community of learners and educators.
              </p>
              <div className="text-center md:text-left">
                <Button asChild className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3">
                  <a href="#contact">Start Admission Process</a>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Schools;
