import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQSection = () => {
  const FAQS = [
    {
      question: "How does DevLearn's AI-powered learning work?",
      answer:
        "DevLearn uses advanced machine learning algorithms to analyze your learning style, pace, and performance patterns. It then creates personalized learning paths and adaptive quizzes that evolve with your progress, ensuring optimal learning outcomes.",
      icon: "🤖"
    },
    {
      question: "What makes DevLearn different from other platforms?",
      answer:
        "DevLearn stands out with its real-time adaptive learning system, enterprise-grade security, and comprehensive analytics. Our platform doesn't just test knowledge—it builds understanding through personalized feedback and targeted resource recommendations.",
      icon: "⚡"
    },
    {
      question: "How do I track my learning progress?",
      answer:
        "Our intuitive dashboard provides detailed insights into your learning journey. View progress metrics, skill development charts, and personalized recommendations. Track your improvement over time and identify areas for growth with our advanced analytics tools.",
      icon: "📊"
    },
    {
      question: "What subscription plans are available?",
      answer:
        "DevLearn offers flexible plans to suit different needs. Start with our free tier to access basic features, or upgrade to Premium for advanced analytics, AI-powered recommendations, and unlimited access to our resource library. Enterprise plans are also available for teams.",
      icon: "💎"
    },
    {
      question: "What topics and skills can I learn?",
      answer:
        "DevLearn covers a comprehensive range of technical and professional skills. From programming and data science to business analytics and soft skills, our platform continuously expands its content library based on industry trends and user needs.",
      icon: "🎯"
    },
  ];

  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="relative py-24 bg-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[#FCFAFF]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(#E9D5FF 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.span
            variants={itemVariants}
            className="inline-flex items-center px-4 py-1.5 rounded-lg text-sm font-semibold bg-indigo-50 text-indigo-600"
          >
            <span className="flex h-2 w-2 rounded-full bg-indigo-600 mr-2"></span>
            Common Questions
          </motion.span>

          <motion.h2
            variants={itemVariants}
            className="mt-8 text-4xl font-black text-gray-900 sm:text-5xl lg:text-6xl tracking-tight"
          >
            Frequently Asked
            <br />
            <span className="relative inline-block mt-2">
              <span className="relative z-10 text-indigo-600">Questions</span>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute bottom-0 left-0 h-3 bg-indigo-100 -z-10"
              ></motion.div>
            </span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Find answers to common questions about DevLearn's learning platform and how it can help you achieve your goals.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto space-y-6"
        >
          {FAQS.map((faq, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative"
            >
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-200 hover:shadow-xl">
                <button
                  type="button"
                  className="flex items-center justify-between w-full px-8 py-6 text-left"
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="flex items-center space-x-4">
                    <span className="text-2xl">{faq.icon}</span>
                    <span className="text-lg font-bold text-gray-900">
                      {faq.question}
                    </span>
                  </div>
                  <motion.div
                    animate={{ rotate: openFAQ === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center justify-center w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openFAQ === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden border-t border-gray-100"
                    >
                      <div className="px-8 py-6">
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center space-x-2 text-gray-600"
          >
            <span>Still have questions?</span>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/contact"
              className="inline-flex items-center px-6 py-3 text-base font-bold text-indigo-600 bg-indigo-50 rounded-xl hover:bg-indigo-100 transition-all duration-200"
            >
              Contact Support
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
