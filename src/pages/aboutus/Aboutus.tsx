import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from './HeroSection';
import LearningApproachSection from './LearningApproachSection';
import MissionSection from './MissionSection';
import Footer from './Footer';

const Aboutus = () => {
  return (
    <div className="pt-24 bg-white">
      <HeroSection />
      <LearningApproachSection />
      <MissionSection />
      <Footer />
    </div>
  );
};

export default Aboutus;