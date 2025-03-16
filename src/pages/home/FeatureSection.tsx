import { motion } from "framer-motion";

const FeatureSection = () => {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Accelerated Learning",
      desc: "Master concepts faster with AI-powered adaptive learning that adjusts to your pace and style.",
      color: "bg-indigo-600",
      stats: {
        value: "2x",
        label: "Learning Speed"
      }
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Enterprise Security",
      desc: "Your data is protected with military-grade encryption and compliance with global security standards.",
      color: "bg-blue-600",
      stats: {
        value: "99.9%",
        label: "Security Score"
      }
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      title: "Personalized Path",
      desc: "Create your unique learning journey with customizable paths and difficulty levels.",
      color: "bg-purple-600",
      stats: {
        value: "100%",
        label: "Customization"
      }
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "Progress Analytics",
      desc: "Track your growth with detailed analytics and insights into your learning patterns.",
      color: "bg-pink-600",
      stats: {
        value: "24/7",
        label: "Monitoring"
      }
    }
  ];

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
            Powerful Features
          </motion.span>

          <motion.h2
            variants={itemVariants}
            className="mt-8 text-4xl font-black text-gray-900 sm:text-5xl lg:text-6xl tracking-tight"
          >
            Supercharge Your
            <br />
            <span className="relative inline-block mt-2">
              <span className="relative z-10 text-indigo-600">Learning Journey</span>
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
            Experience a revolutionary approach to learning with our cutting-edge features designed to maximize your potential.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="relative"
            >
              <div className="h-full bg-white rounded-2xl shadow-lg p-8 transition-all duration-200">
                <div className={`w-14 h-14 ${feature.color} rounded-xl flex items-center justify-center text-white mb-6`}>
                  {feature.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 mb-6">
                  {feature.desc}
                </p>

                <div className="pt-6 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{feature.stats.label}</span>
                    <span className="text-lg font-bold text-indigo-600">{feature.stats.value}</span>
                  </div>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="mt-2 h-1.5 bg-indigo-100 rounded-full overflow-hidden"
                  >
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "85%" }}
                      transition={{ duration: 1.5, delay: 0.4 }}
                      className={`h-full ${feature.color}`}
                    ></motion.div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-16 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 text-lg font-bold text-white bg-indigo-600 rounded-xl shadow-lg hover:bg-indigo-700 transition-all duration-200"
          >
            Explore All Features
            <svg className="ml-2 w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureSection;
