import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "wouter";
import { ArrowRight, Briefcase, GraduationCap, BookOpen, Users } from "lucide-react";
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
      icon: <BookOpen className="h-6 w-6" />,
      colorClasses: {
        gradientFrom: "from-pink-500",
        gradientTo: "to-rose-500",
        text: "text-rose-500",
        tag: {
          bg: "bg-pink-100",
          text: "text-pink-800"
        },
        glow: "shadow-rose-200"
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
      icon: <Users className="h-6 w-6" />,
      colorClasses: {
        gradientFrom: "from-indigo-500",
        gradientTo: "to-violet-500",
        text: "text-violet-600",
        tag: {
          bg: "bg-indigo-100",
          text: "text-indigo-800"
        },
        glow: "shadow-violet-200"
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
      icon: <GraduationCap className="h-6 w-6" />,
      colorClasses: {
        gradientFrom: "from-cyan-500",
        gradientTo: "to-teal-500",
        text: "text-teal-600",
        tag: {
          bg: "bg-teal-100",
          text: "text-teal-800"
        },
        glow: "shadow-teal-200"
      },
      href: "/vishwasatya"
    }
  ];

  return (
    <section id="schools" className="relative py-24 md:py-32 overflow-hidden" ref={sectionRef}>
      {/* Background with fancy patterns */}
      <div className="absolute inset-0 bg-gradient-to-b from-violet-100 to-white -z-10"></div>
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-white to-transparent -z-5"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-0 w-64 h-64 rounded-full bg-gradient-to-br from-pink-200 to-pink-300 mix-blend-multiply filter blur-3xl opacity-50 -z-5"></div>
      <div className="absolute bottom-20 right-0 w-80 h-80 rounded-full bg-gradient-to-br from-cyan-200 to-teal-300 mix-blend-multiply filter blur-3xl opacity-50 -z-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center px-4 py-2 bg-violet-100 rounded-full mb-6 text-violet-800">
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 mr-2 text-violet-600" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 6.5C2 4.01 4.01 2 6.5 2H17.5C19.99 2 22 4.01 22 6.5C22 8.99 19.99 11 17.5 11H6.5C4.01 11 2 8.99 2 6.5Z" fill="currentColor" fillOpacity="0.3"/>
              <path d="M2 17.5C2 15.01 4.01 13 6.5 13H17.5C19.99 13 22 15.01 22 17.5C22 19.99 19.99 22 17.5 22H6.5C4.01 22 2 19.99 2 17.5Z" fill="currentColor"/>
              <path d="M17.5 11C19.99 11 22 8.99 22 6.5C22 4.01 19.99 2 17.5 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6.5 22C4.01 22 2 19.99 2 17.5C2 15.01 4.01 13 6.5 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-sm font-medium">Our Educational Ecosystem</span>
          </span>
          
          <h2 className="font-montserrat font-bold text-5xl md:text-6xl text-gray-800 mb-6 tracking-tight">
            Where <span className="gradient-text">Learning</span> Comes to Life
          </h2>
          
          <p className="max-w-3xl mx-auto text-gray-600 text-xl leading-relaxed">
            IGW Foundation cultivates a comprehensive educational ecosystem with three flagship institutions, 
            each crafted to nurture excellence at different stages of learning.
          </p>
        </motion.div>
        
        {/* School Cards with Enhanced Design */}
        <motion.div 
          className="grid md:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {schoolsData.map((school, index) => (
            <motion.div 
              key={school.id}
              className={`bg-white rounded-3xl shadow-xl ${school.colorClasses.glow} overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl group`}
              variants={cardVariants}
              custom={index}
            >
              {/* Card Header with Image and Overlay */}
              <div className="relative h-60 overflow-hidden">
                {/* Background gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-tr ${school.colorClasses.gradientFrom} ${school.colorClasses.gradientTo} opacity-90 group-hover:opacity-95 transition-opacity duration-300`}></div>
                
                {/* Image */}
                <img 
                  src={school.image}
                  alt={`${school.name} Campus`}
                  className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* School details overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 inline-flex items-center self-start mb-3">
                    <div className="bg-white p-2 rounded-lg text-white mr-2">
                      <div className={`bg-gradient-to-r ${school.colorClasses.gradientFrom} ${school.colorClasses.gradientTo} p-1 rounded`}>
                        {school.icon}
                      </div>
                    </div>
                    <span className="text-white text-sm font-medium">{school.category}</span>
                  </div>
                  
                  <h3 className="font-montserrat font-bold text-3xl text-white text-shadow">{school.name}</h3>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-white rounded-full opacity-10"></div>
                <div className="absolute bottom-10 right-10 w-8 h-8 bg-white rounded-full opacity-20"></div>
              </div>
              
              {/* Card Content */}
              <div className="p-8">
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  {school.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {school.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className={`${school.colorClasses.tag.bg} ${school.colorClasses.tag.text} text-xs font-medium px-4 py-1.5 rounded-full`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Action Button */}
                <Link href={school.href}>
                  <span className={`group/btn cursor-pointer ${school.colorClasses.text} font-medium flex items-center justify-between w-full py-4 px-6 border-t border-gray-200`}>
                    <span className="text-lg">Explore Campus</span>
                    <span className={`flex items-center justify-center w-10 h-10 rounded-full bg-gray-50 ${school.colorClasses.text} group-hover/btn:translate-x-1 transition-transform`}>
                      <ArrowRight className="h-5 w-5" />
                    </span>
                  </span>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Call to Action Box */}
        <motion.div 
          className="mt-24 relative"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-3xl transform rotate-1 scale-[1.02] opacity-70 blur-[5px]"></div>
          
          <div className="relative bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-3xl overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/3 translate-x-1/4"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-1/3 -translate-x-1/4"></div>
            
            <div className="relative p-10 md:p-14 flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-14 text-white">
              <div className="bg-white/15 backdrop-blur-sm p-8 rounded-2xl flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-16 w-16">
                  <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                  <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                  <path d="M4 22h16"></path>
                  <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                  <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                  <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
                </svg>
              </div>
              
              <div className="flex-1">
                <h3 className="font-montserrat font-bold text-3xl md:text-4xl mb-4 text-center md:text-left">
                  Begin Your Educational Journey
                </h3>
                <p className="text-white/90 text-lg md:text-xl mb-8 text-center md:text-left">
                  Ready to provide your child with an exceptional educational experience? 
                  Our admissions team is here to guide you through every step of the process.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <Button 
                    asChild
                    className="bg-white text-fuchsia-600 hover:bg-white/90 px-8 py-6 rounded-xl text-lg font-semibold shadow-lg"
                  >
                    <a href="#contact">Start Admission Process</a>
                  </Button>
                  <Button 
                    asChild
                    variant="outline" 
                    className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-6 rounded-xl text-lg font-semibold"
                  >
                    <a href="#contact">Request Information</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Schools;
