import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from './HeroSection';
import { motion } from 'framer-motion';
import { sectionVariant } from '../utils/motion';

function Header() {
  return (
    <motion.header
      className='bg-gradient | min-h-screen grid grid-rows-[min-content_1fr]'
      variants={sectionVariant}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <Navbar />
      <HeroSection />
    </motion.header>
  );
}

export default Header;