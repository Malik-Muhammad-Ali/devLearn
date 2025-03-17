import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Wade Warren",
      role: "Software Developer",
      image: "https://cdn.rareblocks.xyz/collection/celebration/images/blog/3/avatar-1.jpg",
      quote: "DevLearn helped me master new skills in just 30 days with its personalized quizzes. It's truly a game-changer for anyone looking to accelerate their learning!",
      rating: 5,
      achievement: "Mastered 3 Skills",
      company: "TechCorp Inc.",
      highlights: [
        "Completed Advanced React & Node.js courses",
        "Improved coding efficiency by 65%",
        "Applied new skills in 4 production projects"
      ]
    },
    {
      name: "Leslie Alexander",
      role: "Data Scientist",
      image: "https://cdn.rareblocks.xyz/collection/celebration/images/blog/3/avatar-2.jpg",
      quote: "The quizzes are tailored to my learning needs, making the process faster and more efficient. Highly recommend this platform to anyone serious about learning.",
      rating: 5,
      achievement: "Top Performer",
      company: "DataViz Solutions",
      highlights: [
        "Mastered Python & TensorFlow fundamentals",
        "Completed 12 data analysis challenges",
        "Reduced model training time by 40%"
      ]
    },
    {
      name: "Jenny Wilson",
      role: "Product Manager",
      image: "https://cdn.rareblocks.xyz/collection/celebration/images/blog/3/avatar-3.jpg",
      quote: "DevLearn's personalized learning paths have taken my skills to the next level. It's the best tool for anyone looking to grow in their field.",
      rating: 5,
      achievement: "100% Completion",
      company: "InnovateTech",
      highlights: [
        "Completed Agile & Scrum certification path",
        "Improved team productivity by 28%",
        "Successfully launched 2 new products"
      ]
    },
    {
      name: "Robert Chen",
      role: "Frontend Developer",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      quote: "The interactive quizzes and immediate feedback have dramatically improved my coding skills. I've seen tangible results in my work within weeks.",
      rating: 5,
      achievement: "Fast Learner",
      company: "WebFront Studios",
      highlights: [
        "Mastered CSS animations & modern layouts",
        "Reduced page load times by 35%",
        "Built 5 responsive web applications"
      ]
    },
    {
      name: "Sarah Johnson",
      role: "UX Designer",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      quote: "As a designer, I needed to expand my technical knowledge. DevLearn made it easy with visual learning paths and practical challenges.",
      rating: 5,
      achievement: "Creative Excellence",
      company: "DesignHub",
      highlights: [
        "Completed UI/UX advanced certification",
        "Improved user engagement metrics by 42%",
        "Created design system used by 3 teams"
      ]
    }
  ];

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [direction, setDirection] = useState<number>(0);
  const [autoplay, setAutoplay] = useState<boolean>(true);

  // Handle autoplay
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (autoplay) {
      interval = setInterval(() => {
        setDirection(1);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [autoplay, testimonials.length]);

  // Pause autoplay on hover
  const handleMouseEnter = () => setAutoplay(false);
  const handleMouseLeave = () => setAutoplay(true);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.4,
        ease: "easeIn"
      }
    })
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
    <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-b from-indigo-50 to-white">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#6366f120_1px,transparent_1px),linear-gradient(to_bottom,#6366f120_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-indigo-50 to-transparent"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-br from-indigo-200 to-purple-200 opacity-30 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-gradient-to-tr from-blue-200 to-indigo-200 opacity-30 blur-3xl"></div>
          </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.span
            variants={itemVariants}
            className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800 border border-indigo-200"
          >
            <span className="flex h-2 w-2 rounded-full bg-indigo-500 mr-2"></span>
            Success Stories
          </motion.span>

          <motion.h2
            variants={itemVariants}
            className="mt-6 text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight"
          >
            What Our Learners
            <span className="block mt-2">
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Are Saying</span>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="absolute bottom-0 left-0 h-3 md:h-4 bg-indigo-100 -z-10 rounded-lg"
                ></motion.div>
              </span>
                  </span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Discover how DevLearn is transforming learning journeys and helping people achieve their goals faster.
          </motion.p>
        </motion.div>

        {/* Mobile Navigation Controls */}
        <div className="flex justify-center mb-4 md:hidden">
          <div className="flex space-x-2">
            <button 
              onClick={handlePrev}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-600 hover:bg-indigo-100 hover:text-indigo-600 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-600 hover:bg-indigo-100 hover:text-indigo-600 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
                </div>
              </div>

        {/* Carousel Container */}
        <div 
          className="relative mb-12 md:mb-16"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full"
            >
              {/* Card for mobile (stacked layout) */}
              <div className="block md:hidden w-full max-w-lg mx-auto">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                  <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6">
                    <div className="flex items-center mb-4">
                      <img
                        className="w-12 h-12 rounded-full border-2 border-white/50 object-cover"
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].name}
                      />
                      <div className="ml-4">
                        <p className="text-white font-bold">{testimonials[currentIndex].name}</p>
                        <p className="text-indigo-100 text-sm">{testimonials[currentIndex].role}</p>
              </div>
            </div>

                    <blockquote className="text-lg font-medium text-white leading-relaxed">
                      "{testimonials[currentIndex].quote}"
                    </blockquote>
                  </div>

                  <div className="p-6 bg-white">
                    <div className="flex mb-4">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    
                    <div className="mb-4">
                      <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                        {testimonials[currentIndex].achievement}
                  </span>
                    </div>
                    
                    <div className="space-y-3 mb-6">
                      {testimonials[currentIndex].highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-start">
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <div className="ml-3">
                            <p className="text-gray-700">{highlight}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4 border-t border-gray-100">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center text-sm font-bold text-indigo-600 hover:text-indigo-700"
                      >
                        Read Full Story
                        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card for desktop (side-by-side layout) */}
              <div className="hidden md:block w-full max-w-4xl mx-auto">
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
                  <div className="flex flex-row">
                    {/* Testimonial Image Side */}
                    <div className="w-2/5 bg-gradient-to-br from-indigo-500 to-purple-600 p-8 flex flex-col justify-between relative">
                      <div className="relative z-10">
                        <div className="text-white opacity-80 mb-3">
                          <svg width="45" height="36" className="fill-current">
                            <path d="M13.415.001C6.07 5.185.887 13.681.887 23.041c0 7.632 4.608 12.096 9.936 12.096 5.04 0 8.784-4.032 8.784-8.784 0-4.752-3.312-8.208-7.632-8.208-.864 0-2.016.144-2.304.288.72-4.896 5.328-10.656 9.936-13.536L13.415.001zm24.768 0c-7.2 5.184-12.384 13.68-12.384 23.04 0 7.632 4.608 12.096 9.936 12.096 4.896 0 8.784-4.032 8.784-8.784 0-4.752-3.456-8.208-7.776-8.208-.864 0-1.872.144-2.16.288.72-4.896 5.184-10.656 9.792-13.536L38.183.001z"></path>
                          </svg>
                        </div>
                        <blockquote className="text-xl font-medium text-white leading-relaxed mb-8">
                          "{testimonials[currentIndex].quote}"
                        </blockquote>
                        <div className="flex items-center">
                          <img
                            className="w-14 h-14 rounded-full border-2 border-white/50 object-cover"
                            src={testimonials[currentIndex].image}
                            alt={testimonials[currentIndex].name}
                          />
                          <div className="ml-4">
                            <p className="text-white font-bold text-lg">{testimonials[currentIndex].name}</p>
                            <p className="text-indigo-100">{testimonials[currentIndex].role}</p>
                            <p className="text-indigo-200 text-sm">{testimonials[currentIndex].company}</p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Decorative elements */}
                      <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20 blur-xl"></div>
                      <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/10 rounded-full -ml-20 -mb-20 blur-xl"></div>
                    </div>
                    
                    {/* Testimonial Details Side */}
                    <div className="w-3/5 p-8 lg:p-12 bg-white">
                      <div className="flex flex-col h-full justify-between">
                        <div>
                          <div className="flex mb-6">
                            {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                              <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                          
                          <div className="mb-8">
                            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                              {testimonials[currentIndex].achievement}
                    </span>
                  </div>

                          <h3 className="text-2xl font-bold text-gray-900 mb-4">Learning Journey Highlights</h3>
                          
                          <div className="space-y-4 mb-8">
                            {testimonials[currentIndex].highlights.map((highlight, idx) => (
                              <div key={idx} className="flex items-start">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                                </div>
                                <div className="ml-4">
                                  <p className="text-gray-700">{highlight}</p>
                </div>
                              </div>
                            ))}
              </div>
            </div>

                        <div className="flex justify-between items-center pt-6 border-t border-gray-100">
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center text-sm font-bold text-indigo-600 hover:text-indigo-700"
                          >
                            Read Full Story
                            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </motion.button>
                          
                          <div className="flex space-x-2">
                            <button 
                              onClick={handlePrev}
                              className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-indigo-100 hover:text-indigo-600 transition-colors"
                            >
                              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                              </svg>
                            </button>
                            <button 
                              onClick={handleNext}
                              className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-indigo-100 hover:text-indigo-600 transition-colors"
                            >
                              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </button>
                          </div>
                        </div>
                </div>
              </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          
          {/* Carousel Indicators */}
          <div className="absolute -bottom-8 left-0 right-0 flex justify-center space-x-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > currentIndex ? 1 : -1);
                  setCurrentIndex(idx);
                }}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? "bg-indigo-600 w-6 md:w-8" : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
        </div>
      </section>
  );
};

export default Testimonials;
