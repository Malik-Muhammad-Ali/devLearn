import React from 'react';

// Define CSS animation in a global style
const HeroSection = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-indigo-950 text-white">
      {/* Static background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle noise texture */}
        <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        
        {/* Dot pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] bg-[length:20px_20px]"></div>
        
        {/* Single glow effect */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-purple-500 opacity-10 rounded-full filter blur-[100px]"></div>
      </div>
      
      {/* Content */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text content - no animations */}
          <div className="md:w-1/2 text-left">
            <div className="inline-block px-4 py-1 bg-purple-600/90 rounded-full text-sm font-medium text-white mb-6">
              About DevLearn
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              We're on a Mission to <br />
              <span className="text-purple-400">
                Transform Tech Education
              </span>
            </h1>
            
            <p className="text-xl text-indigo-200 mb-8 max-w-lg">
              DevLearn is built by developers, for developers. We believe in making high-quality tech education accessible, engaging, and personalized for everyone.
            </p>
          </div>
          
          {/* Illustration - with CSS animation only */}
          <div className="md:w-1/2 relative">
            <div className="relative z-10 w-full h-full hero-float">
              <img 
                src="https://d33wubrfki0l68.cloudfront.net/29c501c64b21014b3f2e225abe02fe31fd8f3a5c/f866d/images/hero/3/illustration.png" 
                alt="Learning Illustration" 
                className="w-full h-auto max-w-lg mx-auto drop-shadow-2xl"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  // Fallback to a div with a background if image fails to load
                  target.outerHTML = `<div class="w-full h-96 bg-purple-700 rounded-lg flex items-center justify-center"><span class="text-white text-xl">DevLearn</span></div>`;
                }}
              />
            </div>
            
            {/* Single decorative element */}
            <div className="absolute top-1/4 -right-6 w-20 h-20 bg-purple-600/40 rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 