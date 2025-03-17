import { motion } from "framer-motion";

const MileStoneSection = () => {
  const milestones = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      value: "6+",
      label: "Years of Revolutionizing Learning",
      color: "bg-indigo-600",
      increment: {
        start: 0,
        end: 6,
        duration: 2
      }
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      value: "1000+",
      label: "Personalized Quizzes Created",
      color: "bg-purple-600",
      increment: {
        start: 0,
        end: 1000,
        duration: 2
      }
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      value: "4600+",
      label: "Engaged Learners",
      color: "bg-pink-600",
      increment: {
        start: 0,
        end: 4600,
        duration: 2
      }
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
        </svg>
      ),
      value: "98%",
      label: "Success Rate in Skill Development",
      color: "bg-blue-600",
      increment: {
        start: 0,
        end: 98,
        duration: 2
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
            Our Milestones
          </motion.span>

          <motion.h2
            variants={itemVariants}
            className="mt-8 text-4xl font-black text-gray-900 sm:text-5xl lg:text-6xl tracking-tight"
          >
            Our Growth, Defined by
            <br />
            <span className="relative inline-block mt-2">
              <span className="relative z-10 text-indigo-600">Achievements</span>
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
            Discover how we're transforming the learning landscape with our innovative AI-powered platform.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {milestones.map((milestone, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="relative"
            >
              <div className="h-full bg-white rounded-2xl shadow-lg p-8 transition-all duration-200">
                <div className={`w-14 h-14 ${milestone.color} rounded-xl flex items-center justify-center text-white mb-6`}>
                  {milestone.icon}
            </div>

                <motion.h3
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-4xl font-bold text-gray-900 mb-2"
                >
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: milestone.increment.duration }}
                  >
                    {milestone.value}
                  </motion.span>
                </motion.h3>

                <p className="text-gray-600">
                  {milestone.label}
                </p>

                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-b-2xl"
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        </div>
      </section>
  );
};

export default MileStoneSection;
