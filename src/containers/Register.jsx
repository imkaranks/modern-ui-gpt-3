import React from 'react';
import { motion } from 'framer-motion';
import { sectionVariant, textVariant } from '../utils/motion';

function Register() {
  return (
    <motion.section
      className='py-16'
      variants={sectionVariant}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <div className="bg-gradient-primary w-11/12 max-w-7xl mx-auto p-8 flex flex-col gap-4 rounded-[10.7236px] sm:flex-row sm:justify-between sm:items-center md:p-[42px]">
        <div className='flex-1'>
          <h2 className="text-xs text-[#0E0E0E] font-medium leading-[30px]">
            Request Early Access to Get Started
          </h2>
          <motion.p
            className="text-[24px] text-black font-extrabold"
            variants={textVariant}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{once: true}}
          >
            Register today & start exploring the endless possiblities.
          </motion.p>
        </div>
        <div>
          <button className="text-base text-white font-bold leading-[30px] py-4 px-8 bg-black rounded-full hover:transition-colors hover:bg-accent-400">Get Started</button>
        </div>
      </div>
    </motion.section>
  );
}

export default Register;