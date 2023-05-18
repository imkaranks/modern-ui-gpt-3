import React from 'react';
import Feature from '../components/Feature';
import { motion } from 'framer-motion';
import { sectionVariant, textVariant } from '../utils/motion';

function Features() {
  return (
    <motion.section
      className='py-16' aria-labelledby='gpt3__features-title' id='features'
      variants={sectionVariant}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <div className="w-11/12 max-w-7xl mx-auto grid gap-4 sm:grid-cols-2">
        <div>
          <motion.h2
            className='max-w-[426px] text-gradient text-[30px] leading-[45px] tracking-tighter font-extrabold' id="gpt3__features-title"
            variants={textVariant}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{once: true}}
          >
            The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.
          </motion.h2>
          <a href='#' className='block text-base text-accent-300 font-medium leading-[30px] my-4 cursor-pointer sm:mt-[34px]'>Request Early Access to Get Started</a>
        </div>
        <motion.div
          className='flex flex-col gap-5'
          initial="hidden"
          whileInView="show"
          transition={{staggerChildren: 0.2}}
        >
          <Feature
            title='Improving end distrusts instantly'
            headingLvl='h3'
            fontSizes={[ 'text-base', 'text-sm' ]}
            desc='From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.'
            customStyles='flex-col pt-1 md:flex-row'
          />
          <Feature
            title='Become the tended active'
            headingLvl='h3'
            fontSizes={[ 'text-base', 'text-sm' ]}
            desc='Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.'
            customStyles='flex-col pt-1 md:flex-row'
          />
          <Feature
            title='Message or am nothing'
            headingLvl='h3'
            fontSizes={[ 'text-base', 'text-sm' ]}
            desc='Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.'
            customStyles='flex-col pt-1 md:flex-row'
          />
          <Feature
            title='Really boy law county'
            headingLvl='h3'
            fontSizes={[ 'text-base', 'text-sm' ]}
            desc='Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.'
            customStyles='flex-col pt-1 md:flex-row'
          />
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Features;