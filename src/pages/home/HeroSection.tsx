import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
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
    <div className="relative min-h-screen bg-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[#FCFAFF]">
        <div className="absolute right-0 top-0 w-1/3 h-screen bg-gradient-to-l from-indigo-50 to-transparent"></div>
        <div className="absolute left-0 bottom-0 w-1/3 h-screen bg-gradient-to-t from-purple-50 to-transparent"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(#E9D5FF 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>
        </div>

      <section className="relative py-20 lg:py-32">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8 items-center"
          >
            <motion.div variants={itemVariants} className="text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="absolute -left-4 top-1/2 h-1 bg-indigo-600 transform -translate-y-1/2"
                ></motion.div>
                <h1 className="relative text-5xl font-black tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
                  <span className="block text-indigo-600 mb-2">
                    Transform Your
                  </span>
                  <span className="block">Learning Journey</span>
                  </h1>
              </motion.div>
              
              <motion.p
                variants={itemVariants}
                className="mt-8 text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0"
              >
                Experience the future of education with our AI-powered platform. Get personalized learning paths, real-time feedback, and join a thriving community of learners.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-6"
              >
                <Link
                  to="/signin"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-indigo-600 rounded-xl shadow-xl hover:bg-indigo-700 transform hover:-translate-y-1 transition-all duration-200"
                >
                  Start Learning Free
                  <motion.svg
                    className="ml-2 w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </motion.svg>
                </Link>

                <Link
                  to="/signup"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-indigo-600 bg-indigo-50 rounded-xl hover:bg-indigo-100 transform hover:-translate-y-1 transition-all duration-200"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  Join Community
                </Link>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-8"
              >
                <div className="flex items-center p-6 bg-white rounded-2xl shadow-lg transform hover:-translate-y-1 transition-all duration-200">
                  <div className="flex -space-x-4">
                    {[1, 2, 3].map((i) => (
                      <motion.img
                        key={i}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.2 }}
                        className="w-12 h-12 rounded-full border-2 border-white"
                        src={`https://randomuser.me/api/portraits/men/${i + 20}.jpg`}
                        alt=""
                      />
                    ))}
                    </div>
                  <div className="ml-6">
                    <p className="text-2xl font-bold text-indigo-600">4,600+</p>
                    <p className="text-sm font-medium text-gray-500">Active Learners</p>
                  </div>
                </div>

                <div className="flex items-center p-6 bg-white rounded-2xl shadow-lg transform hover:-translate-y-1 transition-all duration-200">
                  <div className="h-12 w-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-6">
                    <p className="text-2xl font-bold text-green-600">99%</p>
                    <p className="text-sm font-medium text-gray-500">Success Rate</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="relative"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="relative z-10"
              >
                <div className="relative">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                    className="absolute -top-6 -left-6 w-24 h-24 bg-yellow-400 rounded-xl transform rotate-6"
                  ></motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 }}
                    className="absolute -bottom-6 -right-6 w-24 h-24 bg-indigo-400 rounded-xl transform -rotate-6"
                  ></motion.div>
                  
                  <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden p-2">
                    <img
                  src="https://d33wubrfki0l68.cloudfront.net/29c501c64b21014b3f2e225abe02fe31fd8f3a5c/f866d/images/hero/3/illustration.png"
                      alt="Learning Platform"
                      className="relative rounded-xl transform transition-transform duration-500 hover:scale-105"
                />
              </div>

                  {/* Floating Stats Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="absolute -right-4 -bottom-4 bg-white rounded-xl p-4 shadow-xl"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">Progress</p>
                        <p className="text-xl font-bold text-indigo-600">+87%</p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Achievement Badge */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 }}
                    className="absolute -left-4 top-1/3 bg-white rounded-xl p-4 shadow-xl"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">Level</p>
                        <p className="text-lg font-bold text-gray-900">Expert</p>
            </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
          </div>
        </section>
      </div>
  );
};

export default HeroSection;
