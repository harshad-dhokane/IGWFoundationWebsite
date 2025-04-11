import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Bell, Calendar, Users, Award } from "lucide-react";

const Notifications = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const announcements = [
    {
      icon: <Calendar className="h-5 w-5" />,
      title: "Summer Camp Enrollment Open",
      date: "April 15, 2023",
      description: "Registration for our fun-filled Summer Adventure Camp is now open! Early bird discounts available until May 10th.",
      link: "#"
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "Parent-Teacher Conferences",
      date: "March 22, 2023",
      description: "Spring semester parent-teacher conferences will be held on April 5-7. Sign up for your preferred time slot online.",
      link: "#"
    },
    {
      icon: <Award className="h-5 w-5" />,
      title: "Annual Art Show Coming Soon",
      date: "March 10, 2023",
      description: "Mark your calendars for our Annual Art Show on May 20th where we'll showcase our little artists' creative masterpieces!",
      link: "#"
    },
    {
      icon: <Bell className="h-5 w-5" />,
      title: "New Music & Movement Classes",
      date: "February 28, 2023",
      description: "We're excited to announce new music and movement enrichment classes starting next month with Ms. Sarah.",
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
    <section id="notifications" className="bg-pink-50 py-16 md:py-24" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-gray-800 mb-4">
            Announcements & Updates
          </h2>
          <div className="w-20 h-1 bg-pink-500 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            Stay up-to-date with the latest news, events, and important information from Global Kids.
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
                <div className="bg-pink-100 text-pink-600 p-3 rounded-full">
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
                    className="inline-flex items-center text-pink-600 hover:text-pink-700 font-medium mt-3 text-sm"
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
          className="mt-12 max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 border-l-4 border-pink-500"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
            <div className="bg-pink-100 text-pink-600 p-4 rounded-full">
              <Bell className="h-8 w-8" />
            </div>
            <div className="text-center md:text-left">
              <h3 className="font-montserrat font-semibold text-xl text-gray-800 mb-2">
                Stay Connected
              </h3>
              <p className="text-gray-600 mb-4">
                Sign up for our monthly newsletter to receive the latest updates, event announcements, and educational resources directly in your inbox.
              </p>
              <form className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500" 
                  required 
                />
                <button 
                  type="submit" 
                  className="bg-pink-500 hover:bg-pink-600 text-white font-medium px-4 py-2 rounded-lg transition-colors"
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
