import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HeroSection2 = () => {
  const features = [
    {
      icon: "🚀",
      title: "Adaptive Learning",
      description:
        "AI-powered system that adapts to your learning style and pace",
      color: "bg-indigo-600",
      stats: "2x Faster",
    },
    {
      icon: "⚡",
      title: "Real-time Feedback",
      description: "Get instant insights on your performance and progress",
      color: "bg-purple-600",
      stats: "24/7 Support",
    },
    {
      icon: "📊",
      title: "Progress Tracking",
      description: "Detailed analytics and insights to monitor your growth",
      color: "bg-blue-600",
      stats: "100% Accurate",
    },
    {
      icon: "🎯",
      title: "Smart Goals",
      description: "Set and achieve your learning objectives with precision",
      color: "bg-pink-600",
      stats: "95% Success",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="relative bg-white py-24 sm:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(#E9D5FF 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        ></div>
      </div>

      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Smart Learning System
          </motion.span>

          <motion.h2
            variants={itemVariants}
            className="mt-8 text-4xl font-black text-gray-900 sm:text-5xl lg:text-6xl tracking-tight"
          >
            Master Any Skill with
            <br />
            <span className="relative inline-block mt-2">
              <span className="relative z-10 text-indigo-600">
                AI-Powered Learning
              </span>
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
            Experience a revolutionary approach to learning with our advanced AI
            platform. Get personalized guidance, real-time feedback, and track
            your progress like never before.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="relative"
            >
              <div className="h-full bg-white rounded-2xl shadow-lg p-8 transition-all duration-200">
                <div
                  className={`w-14 h-14 ${feature.color} rounded-xl flex items-center justify-center text-2xl mb-6`}
                >
                  {feature.icon}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>

                <p className="text-gray-600 mb-6">{feature.description}</p>

                <div className="pt-6 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Performance</span>
                    <span className="text-lg font-bold text-indigo-600">
                      {feature.stats}
                    </span>
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

        <motion.div variants={itemVariants} className="mt-16 text-center">
          <Link to="/signin">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 text-lg font-bold text-white bg-indigo-600 rounded-xl shadow-lg hover:bg-indigo-700 transition-all duration-200 cursor-pointer"
            >
              Start Learning Now
              <svg
                className="ml-2 w-5 h-5 animate-bounce"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </motion.button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default HeroSection2;
