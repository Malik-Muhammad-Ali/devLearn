import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from './animations';

// Simplified animation variants for cards
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      type: "tween", 
      duration: 0.4,
      ease: "easeOut"
    }
  }
};

// Simplified icon animation
const iconVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      duration: 0.3
    }
  }
};

const MissionSection = () => {
  const missions = [
    {
      title: "Accessibility",
      description: "We believe quality education should be available to everyone, regardless of background or location. Our platform is designed to be accessible and affordable.",
      icon: (
        <svg className="w-7 h-7 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      color: "from-blue-500 to-indigo-600"
    },
    {
      title: "Innovation",
      description: "We continuously push the boundaries of what's possible in online education, leveraging AI and interactive tools to create engaging learning experiences.",
      icon: (
        <svg className="w-7 h-7 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: "from-purple-500 to-indigo-600"
    },
    {
      title: "Community",
      description: "Learning is a social experience. We foster a supportive community where developers can connect, collaborate, and grow together.",
      icon: (
        <svg className="w-7 h-7 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      color: "from-indigo-500 to-blue-600"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-indigo-50 relative overflow-hidden">
      {/* Static decorative elements instead of animated ones */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-indigo-100 to-transparent opacity-70"></div>
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-100 rounded-full opacity-50"></div>
      <div className="absolute top-1/4 -left-20 w-60 h-60 bg-indigo-100 rounded-full opacity-30"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: { opacity: 0 },
            visible: { 
              opacity: 1,
              transition: { 
                staggerChildren: 0.1,
                delayChildren: 0.1
              }
            }
          }}
        >
          <motion.div 
            className="text-center mb-20"
            variants={fadeInUp}
          >
            <motion.div 
              className="inline-block px-4 py-1 bg-indigo-100 rounded-full text-sm font-medium text-indigo-800 mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
            >
              Our Purpose
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're committed to democratizing tech education and empowering the next generation of developers through innovative learning experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {missions.map((mission, index) => (
              <motion.div 
                key={mission.title}
                className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300"
                variants={cardVariants}
                whileHover={{ y: -5 }}
              >
                <div className={`h-2 bg-gradient-to-r ${mission.color}`}></div>
                <div className="p-8">
                  <motion.div 
                    className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mb-6"
                    variants={iconVariants}
                  >
                    {mission.icon}
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{mission.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {mission.description}
                  </p>
                  
                  <motion.div 
                    className="mt-6 inline-flex items-center text-indigo-600 font-medium"
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.2 }}
                  >
                    Learn more
                    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="mt-20 text-center"
            variants={fadeInUp}
          >
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              Join Our Mission
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionSection; 