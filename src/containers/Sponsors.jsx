import React from 'react';
import google from '../assets/images/google.png';
import slack from '../assets/images/slack.png';
import atlassian from '../assets/images/atlassian.png';
import dropbox from '../assets/images/dropbox.png';
import shopify from '../assets/images/shopify.png';
import { motion } from 'framer-motion';
import { sectionVariant } from '../utils/motion';

const sponsor = {
  hide: {
    opacity: 0,
    x: -20,
    y: -20
  },
  show: {
    opacity: 1,
    x: 0,
    y: 0
  }
}

function Sponsors() {
  return (
    <motion.section
      className='py-8' aria-label='Our Sponsors'
      variants={sectionVariant}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <motion.div
        className="max-w-7xl mx-auto flex flex-wrap justify-center items-center"
        initial="hide"
        whileInView="show"
        transition={{staggerChildren: 0.1}}
      >
        <motion.div
          className='flex-1 max-w-[150px] min-w-[120px] m-4 flex justify-center items-center'
          variants={sponsor}
        >
          <img
            src={google}
            alt="google-logo"
          />
        </motion.div>
        <motion.div
          className='flex-1 max-w-[150px] min-w-[120px] m-4 flex justify-center items-center'
          variants={sponsor}
        >
          <img
            src={slack}
            alt="slack-logo"
          />
        </motion.div>
        <motion.div
          className='flex-1 max-w-[150px] min-w-[120px] m-4 flex justify-center items-center'
          variants={sponsor}
        >
          <img
            src={atlassian}
            alt="atlassian-logo"
          />
        </motion.div>
        <motion.div
          className='flex-1 max-w-[150px] min-w-[120px] m-4 flex justify-center items-center'
          variants={sponsor}
        >
          <img
            src={dropbox}
            alt="dropbox-logo"
          />
        </motion.div>
        <motion.div
          className='flex-1 max-w-[150px] min-w-[120px] m-4 flex justify-center items-center'
          variants={sponsor}
        >
          <img
            src={shopify}
            alt="shopify-logo"
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default Sponsors;