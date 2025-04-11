import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Bell, Calendar, Award, BookOpen } from "lucide-react";

const Notifications = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const announcements = [
    {
      icon: <Award className="h-5 w-5" />,
      title: "International Research Symposium",
      date: "June 15, 2023",
      description: "Vishwasatya will host the International Symposium on 'Traditional Knowledge Systems in Modern Education' with scholars from over 10 countries.",
      link: "#"
    },
    {
      icon: <BookOpen className="h-5 w-5" />,
      title: "New Course Launch: Sustainable Development",
      date: "May 28, 2023",
      description: "We're introducing a new postgraduate diploma program in Sustainable Development and Traditional Ecological Knowledge starting next semester.",
      link: "#"
    },
    {
      icon: <Calendar className="h-5 w-5" />,
      title: "Annual Cultural Festival - Sanskruti",
      date: "May 12, 2023",
      description: "Our annual cultural festival celebrating India's diverse heritage will be held from June 5-7. Register now to participate in various competitions.",
      link: "#"
    },
    {
      icon: <Bell className="h-5 w-5" />,
      title: "Summer Internship Opportunities",
      date: "April 30, 2023",
      description: "Applications are now open for summer internships with our partner organizations in sustainable technology, heritage conservation, and digital humanities.",
      link: "#"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="notifications" className="bg-cyan-50 py-16 md:py-24" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-gray-800 mb-4">
            News & Announcements
          </h2>
          <div className="w-20 h-1 bg-cyan-600 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            Stay updated with the latest events, achievements, and opportunities at Vishwasatya Vidyaniketan.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {announcements.map((announcement, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
              variants={itemVariants}
            >
              <div className="flex items-start space-x-4">
                <div className="bg-cyan-100 text-cyan-600 p-3 rounded-full">
                  {announcement.icon}
                </div>
                <div>
                  <div className="flex justify-between items-start">
                    <h3 className="font-semibold text-lg text-gray-800">{announcement.title}</h3>
                    <span className="text-xs text-gray-500">{announcement.date}</span>
                  </div>
                  <p className="mt-2 text-gray-600">{announcement.description}</p>
                  <a 
                    href={announcement.link} 
                    className="inline-flex items-center text-cyan-600 hover:text-cyan-700 font-medium mt-3 text-sm"
                  >
                    Learn more
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-12 max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 border-l-4 border-cyan-600"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
            <div className="bg-cyan-100 text-cyan-600 p-4 rounded-full">
              <Bell className="h-8 w-8" />
            </div>
            <div className="text-center md:text-left">
              <h3 className="font-montserrat font-semibold text-xl text-gray-800 mb-2">
                Stay Connected
              </h3>
              <p className="text-gray-600 mb-4">
                Subscribe to our newsletter for regular updates on events, research opportunities, and educational insights.
              </p>
              <form className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500" 
                  required 
                />
                <button 
                  type="submit" 
                  className="bg-cyan-600 hover:bg-cyan-700 text-white font-medium px-4 py-2 rounded-lg transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Notifications;
