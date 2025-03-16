import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from './animations';
import { learningSteps } from './data';

// Animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24,
      delay: i * 0.1
    }
  })
};

const iconVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 25
    }
  },
  hover: {
    scale: 1.1,
    rotate: [0, 10, -10, 0],
    transition: {
      duration: 0.6
    }
  }
};

const LearningApproachSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-indigo-50 via-white to-indigo-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-indigo-100 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-purple-100 rounded-full opacity-30 blur-3xl"></div>
      
      {/* Connected dots pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-full h-full bg-[url('/public/images/grid-pattern.svg')]"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <motion.div 
            className="text-center mb-20"
            variants={fadeInUp}
          >
            <motion.div 
              className="inline-block px-4 py-1 bg-indigo-100 rounded-full text-sm font-medium text-indigo-800 mb-6"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              How We Teach
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Learning Approach</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We've reimagined tech education from the ground up, creating a learning experience that's personalized, engaging, and effective.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
            variants={staggerContainer}
          >
            {learningSteps.map((step, index) => (
              <motion.div 
                key={step.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300"
                variants={cardVariants}
                custom={index}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 25px 50px -12px rgba(79, 70, 229, 0.25)"
                }}
              >
                <div className="h-2 bg-gradient-to-r from-indigo-500 to-purple-600"></div>
                <div className="p-8">
                  <div className="flex items-start mb-6">
                    <motion.div 
                      className="flex-shrink-0 mr-4 w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center"
                      variants={iconVariants}
                      whileHover="hover"
                    >
                      {step.icon}
                    </motion.div>
                    <div className="flex items-center">
                      <span className="text-4xl font-bold text-indigo-200">0{step.id}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{step.description}</p>
                  
                  <motion.div 
                    className="inline-flex items-center text-indigo-600 font-medium"
                    whileHover={{ x: 5 }}
                  >
                    Learn more
                    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="mt-20 text-center"
            variants={fadeInUp}
          >
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="mr-2">Explore Our Methodology</span>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default LearningApproachSection; 