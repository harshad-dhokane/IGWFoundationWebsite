import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const Testimonials = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [showAllTestimonials, setShowAllTestimonials] = useState(false);

  const testimonials = [
    {
      id: 1,
      quote: "My daughter has flourished at Global Kids. The teachers are nurturing, and the curriculum is thoughtfully designed to engage young learners through creative activities.",
      name: "Priya Sharma",
      role: "Parent, Global Kids",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    },
    {
      id: 2,
      quote: "The balanced approach to academics and extracurriculars at Global School has helped my son develop not just academically but as a well-rounded individual ready for life's challenges.",
      name: "Rajesh Patel",
      role: "Parent, Global School",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    },
    {
      id: 3,
      quote: "Vishwasatya Vidyaniketan has provided me with a perfect blend of traditional values and modern education. The faculty support and guidance has been instrumental in my academic journey.",
      name: "Ananya Desai",
      role: "Student, Vishwasatya Vidyaniketan",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    },
    {
      id: 4,
      quote: "As an educator at Global School, I've witnessed firsthand the commitment to excellence and the innovative teaching methods that help each student reach their full potential.",
      name: "Samir Joshi",
      role: "Teacher, Global School",
      image: "https://images.unsplash.com/photo-1601412436867-1c9493626dbf?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      hidden: true
    },
    {
      id: 5,
      quote: "The holistic development approach at IGW Foundation schools has prepared my children not just for exams but for life. The values they've learned will stay with them forever.",
      name: "Meera Kapoor",
      role: "Parent, Global School",
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      hidden: true
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
    <section id="testimonials" className="bg-white py-16 md:py-24" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-gray-800 mb-4">
            What Our Community Says
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            Hear from our students, parents, and educators about their experiences with IGW Foundation schools.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {testimonials.map((testimonial) => (
            <motion.div 
              key={testimonial.id}
              className={`bg-gray-50 rounded-xl p-6 shadow-sm ${
                testimonial.hidden && !showAllTestimonials ? 'hidden lg:block' : ''
              }`}
              variants={itemVariants}
            >
              <div className="flex items-center mb-4">
                <div className="text-amber-500">
                  <Quote className="h-8 w-8" />
                </div>
              </div>
              <p className="text-gray-600 mb-6 italic">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image}
                  alt={testimonial.name} 
                  className="h-12 w-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-medium text-gray-800">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {!showAllTestimonials && (
            <Button 
              onClick={() => setShowAllTestimonials(true)} 
              variant="outline"
              className="text-primary-600 font-medium border border-primary-300 rounded-lg px-6 py-2 hover:bg-primary-50 transition-colors md:hidden"
            >
              View More Testimonials
            </Button>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
