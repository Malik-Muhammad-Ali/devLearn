import React from "react";
import { motion } from "framer-motion";

const WorkingSection = () => {
  const steps = [
    {
      number: "01",
      title: "Quiz Generation",
      description: "The AI generates a customized quiz based on your preferences or chosen topic. It curates questions, options, and difficulty levels tailored to your learning goals.",
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      color: "from-cyan-400 to-blue-500",
      accent: "#38bdf8",
      bgGradient: "bg-gradient-to-br from-cyan-500/10 to-blue-500/5"
    },
    {
      number: "02",
      title: "User Interaction",
      description: "Solve the quiz by selecting answers to multiple-choice or other question types. The platform tracks your time and answers to assess your performance in real-time.",
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
        </svg>
      ),
      color: "from-fuchsia-400 to-purple-500",
      accent: "#d946ef",
      bgGradient: "bg-gradient-to-br from-fuchsia-500/10 to-purple-500/5"
    },
    {
      number: "03",
      title: "Performance Report & Resources",
      description: "Receive a detailed performance report with your score and insights. Get personalized recommendations for resources like articles, tutorials, or courses to improve your skills.",
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      color: "from-rose-400 to-pink-500",
      accent: "#fb7185",
      bgGradient: "bg-gradient-to-br from-rose-500/10 to-pink-500/5"
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
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-slate-950 to-slate-900">
      {/* Simplified Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        {/* Static gradient backgrounds instead of animated ones */}
        <div className="absolute -top-[30%] -left-[10%] w-[80%] h-[80%] rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/5 blur-3xl" />
        <div className="absolute -bottom-[30%] -right-[10%] w-[80%] h-[80%] rounded-full bg-gradient-to-r from-purple-500/10 to-fuchsia-500/5 blur-3xl" />
          </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border border-cyan-500/20 mb-4"
          >
            <span className="flex h-2 w-2 rounded-full bg-cyan-400 mr-2"></span>
            Our Process
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="mt-6 text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl tracking-tight"
          >
            <span className="block">How Does It</span>
            <span className="relative inline-block mt-2">
              <span className="relative z-10 bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
                Work?
              </span>
              <div className="absolute bottom-2 left-0 h-4 w-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 -z-10 rounded-lg"></div>
            </span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="mt-8 text-xl text-slate-300 max-w-3xl mx-auto"
          >
            Our AI-powered platform makes learning efficient and personalized through a simple three-step process.
          </motion.p>
        </motion.div>

        <div className="relative">
          {/* Connection lines removed */}
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
          >
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="relative group h-full"
              >
                <div className="relative z-10 transition-transform duration-300 hover:-translate-y-2 h-full">
                  {/* Card */}
                  <div className={`h-full rounded-3xl ${step.bgGradient} backdrop-blur-xl p-8 border border-white/5 transition-all duration-300 overflow-hidden flex flex-col`} style={{ minHeight: "420px" }}>
                    {/* Glowing orb */}
                    <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-r from-white/5 to-white/0 blur-xl" />
                    
                    {/* Step number */}
                    <div className="absolute top-6 right-6 inline-flex items-center justify-center w-10 h-10 text-lg font-bold text-white bg-white/10 backdrop-blur-xl rounded-full border border-white/10">
                      {step.number}
            </div>

                    {/* Icon container - removed animation */}
                    <div className="relative mb-8 inline-flex">
                      <div className={`w-20 h-20 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center text-white shadow-lg`} style={{ boxShadow: `0 10px 30px -5px ${step.accent}40` }}>
                        {step.icon}
                </div>
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/0 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

                    {/* Content */}
                    <div className="flex-grow flex flex-col">
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                        {step.title}
                </h3>
                      
                      <p className="text-slate-300 leading-relaxed flex-grow">
                        {step.description}
                </p>
              </div>

                    {/* Static border instead of animated */}
                    <div className={`absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r ${step.color} rounded-b-3xl opacity-70 group-hover:opacity-100 transition-opacity duration-300`} />
                  </div>
                </div>
                
                {/* Shadow */}
                <div className={`absolute -bottom-4 left-4 right-4 h-10 bg-gradient-to-r ${step.color} opacity-20 blur-xl rounded-full transform scale-x-[0.85] group-hover:scale-x-95 transition-transform duration-300`} />
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <motion.button
            variants={itemVariants}
            className="relative inline-flex items-center px-10 py-5 text-lg font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 overflow-hidden group hover:scale-105"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10">Start Learning Now</span>
            <svg className="ml-3 w-5 h-5 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </motion.button>
        </motion.div>
        </div>
      </section>
  );
};

export default WorkingSection;
