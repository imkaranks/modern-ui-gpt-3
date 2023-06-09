import React from 'react';
import siteLogo from '../assets/images/logo.svg';
import { motion } from 'framer-motion';
import { sectionVariant, textVariant } from '../utils/motion';

function Footer() {
  return (
    <motion.footer
      className='bg-primary-800 py-[1.6875rem] text-white'
      variants={sectionVariant}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <div className="w-11/12 max-w-7xl mx-auto">
        <a href="#" className="sr-only">Go back to top</a>
        <div className='flex flex-col items-center gap-8 py-12 sm:gap-10 sm:py-20 md:gap-14 md:py-28 lg:py-36 lg:gap-16'>
          <motion.h2
            className="text-gradient text-3xl font-extrabold text-center sm:text-4xl md:text-5xl lg:text-6xl"
            variants={textVariant}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{once: true}}
          >
            Do you want to step in to the future before others
          </motion.h2>
          <button className='text-sm text-white py-2 px-4 border border-white hover:transition-colors hover:border-accent-400 hover:text-accent-400 sm:text-base'>
            Request Early Access
          </button>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-[1.5fr,_1fr,_1fr,_1fr]">
          <div>
            <a href="#">
              <img
                src={siteLogo}
                alt="site logo"
                role='image'
              />
            </a>
            <div className='text-xs leading-[14.06px] max-w-[168px] mt-4 md:mt-[26px]'>
              <address className='inline not-italic'>Crechterwoord K12 182 DK Alknjkcb</address>, All Rights Reserved
            </div>
          </div>
          <div>
            <h3 className="text-sm leading-4 font-bold">Links</h3>
            <ul className="list-none mt-4 flex flex-col gap-2 sm:gap-4 md:mt-9">
              <li><a href="#" className="decoration-none text-xs leading-[14.06px]">Overons</a></li>
              <li><a href="#" className="decoration-none text-xs leading-[14.06px]">Social Media</a></li>
              <li><a href="#" className="decoration-none text-xs leading-[14.06px]">Counters</a></li>
              <li><a href="#" className="decoration-none text-xs leading-[14.06px]">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm leading-4 font-bold">Company</h3>
            <ul className="list-none mt-4 flex flex-col gap-2 sm:gap-4 md:mt-9">
              <li><a href="#" className="decoration-none text-xs leading-[14.06px]">Terms & Conditions</a></li>
              <li><a href="#" className="decoration-none text-xs leading-[14.06px]">Privacy Policy</a></li>
              <li><a href="#" className="decoration-none text-xs leading-[14.06px]">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm leading-4 font-bold">Get in touch</h3>
            <ul className="list-none mt-4 flex flex-col gap-2 sm:gap-4 md:mt-9">
              <li><address className="inline not-italic text-xs leading-[14.06px]">Crechterwoord K12 182 DK Alknjkcb</address></li>
              <li><address className="inline not-italic text-xs leading-[14.06px]">085-132567</address></li>
              <li><address className="inline not-italic text-xs leading-[14.06px]">info@payme.net</address></li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-8 sm:mt-12 md:mt-16 lg:mt-20">
          <small className='text-xs leading-[14.06px]'>© {new Date().getFullYear()} GPT-3. All rights reserved.</small>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;