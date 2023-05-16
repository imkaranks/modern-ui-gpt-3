import React from 'react';
import possibilityImg from '../assets/images/possibility.webp';
import { motion } from 'framer-motion';
import { sectionVariant, textVariant, imageVariant } from '../utils/motion';

function Possibilities() {
  return (
    <motion.section
      className='py-16' aria-labelledby='gpt3__possibilities-title' aria-describedby='gpt3__possibilities-desc' id='possibility'
      variants={sectionVariant}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <div className="w-11/12 max-w-7xl mx-auto grid gap-4 items-center sm:grid-cols-2">
        <div>
          <motion.img
            src={possibilityImg}
            alt="possibilities"
            className='w-full h-full max-h-[466px] object-contain'
            variants={imageVariant('left')}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
          />
        </div>
        <div>
          <a href='#' className='block text-base text-[#71E5FF] font-medium leading-[30px] cursor-pointer'>Request Early Access to Get Started</a>
          <motion.h2
            className='text-gradient text-[34px] leading-[45px] max-w-[426px] font-extrabold tracking-tighter mt-[10px]' id="gpt3__possibilities-title"
            variants={textVariant}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{once: true}}
          >
            The possibilities are beyond your imagination
          </motion.h2>
          <p className='max-w-[479px] text-base text-content leading-[30px] font-normal mt-[23px]' id="gpt3__possibilities-desc">
            Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
          </p>
          <a href='#' className='block text-base text-accent-300 font-medium leading-[30px] mt-[31px] cursor-pointer'>Request Early Access to Get Started</a>
        </div>
      </div>
    </motion.section>
  );
}

export default Possibilities;