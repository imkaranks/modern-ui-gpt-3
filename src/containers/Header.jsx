import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from './HeroSection';

function Header() {
  return (
    <header className='bg-gradient | min-h-screen grid grid-rows-[min-content_1fr]'>
      <Navbar />
      <HeroSection />
    </header>
  );
}

export default Header;