import React from 'react';
import { motion } from 'framer-motion';
import { cardVariant } from '../utils/motion';

function Feature({ title, headingLvl: Component, fontSizes, desc, customStyles }) {
  return (
    <motion.article
      className={`relative pt-4 flex ${customStyles || 'flex-col'} gap-2 sm:gap-4 md:gap-6 lg:gap-8 before:content-[""] before:absolute before:top-0 before:left-0 before:w-[30px] before:h-[3px] before:bg-gradient-accent before:rounded-full before:hover:transition-transform before:hover:ease-in-out before:hover:origin-left before:hover:animate-subtle-bg before:hover:transform before:hover:scale-x-150`}
      variants={cardVariant}
      initial="hidden"
      whileInView="show"
    >
      <Component className={`${fontSizes[0]} ${customStyles && 'flex-[0.3]'} max-w-[20ch] font-extrabold text-white leading-[24px] tracking-tighter`}>{title}</Component>
      <p className={`${fontSizes[1]} ${customStyles && 'flex-[0.7]'} text-content leading-7 font-primary font-medium`}>{desc}</p>
    </motion.article>
  );
}

export default Feature;