import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Bell, Calendar, Trophy, BookOpen } from "lucide-react";

const Notifications = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const announcements = [
    {
      icon: <Trophy className="h-5 w-5" />,
      title: "National Science Olympiad Results",
      date: "May 10, 2023",
      description: "Congratulations to our students who achieved top ranks in the National Science Olympiad! Special mention to Aditya Sharma for securing 3rd position nationally.",
      link: "#"
    },
    {
      icon: <Calendar className="h-5 w-5" />,
      title: "Annual Day Celebration",
      date: "April 28, 2023",
      description: "Mark your calendars for our Annual Day celebration on June 15th. This year's theme is 'Innovation and Sustainability' featuring performances by all grades.",
      link: "#"
    },
    {
      icon: <BookOpen className="h-5 w-5" />,
      title: "New STEM Curriculum Launch",
      date: "April 15, 2023",
      description: "We're excited to announce the launch of our enhanced STEM curriculum with integrated project-based learning for grades 6-10 starting next semester.",
      link: "#"
    },
    {
      icon: <Bell className="h-5 w-5" />,
      title: "Parent-Teacher Meeting Schedule",
      date: "April 5, 2023",
      description: "The scheduled Parent-Teacher meetings for Q2 will be held on April 22-23. Booking for time slots is now open through the parent portal.",
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
    <section id="notifications" className="bg-indigo-50 py-16 md:py-24" ref={sectionRef}>
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
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            Stay informed about the latest events, achievements, and important updates from Global School & Jr College.
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
                <div className="bg-indigo-100 text-indigo-600 p-3 rounded-full">
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
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium mt-3 text-sm"
                  >
                    Read more
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
          className="mt-12 max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 border-l-4 border-indigo-600"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
            <div className="bg-indigo-100 text-indigo-600 p-4 rounded-full">
              <Bell className="h-8 w-8" />
            </div>
            <div className="text-center md:text-left">
              <h3 className="font-montserrat font-semibold text-xl text-gray-800 mb-2">
                Subscribe to School Updates
              </h3>
              <p className="text-gray-600 mb-4">
                Get the latest announcements, event notifications, and school news delivered directly to your inbox.
              </p>
              <form className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" 
                  required 
                />
                <button 
                  type="submit" 
                  className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-4 py-2 rounded-lg transition-colors"
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
