import React from 'react';
import google from '../assets/images/google.png';
import slack from '../assets/images/slack.png';
import atlassian from '../assets/images/atlassian.png';
import dropbox from '../assets/images/dropbox.png';
import shopify from '../assets/images/shopify.png';
import { motion } from 'framer-motion';
import { sectionVariant } from '../utils/motion';

function Sponsors() {
  return (
    <motion.section
      className='py-8' aria-label='Our Sponsors'
      variants={sectionVariant}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center items-center">
        <div className='flex-1 max-w-[150px] min-w-[120px] m-4 flex justify-center items-center'>
          <img
            src={google}
            alt="google-logo"
          />
        </div>
        <div className='flex-1 max-w-[150px] min-w-[120px] m-4 flex justify-center items-center'>
          <img
            src={slack}
            alt="slack-logo"
          />
        </div>
        <div className='flex-1 max-w-[150px] min-w-[120px] m-4 flex justify-center items-center'>
          <img
            src={atlassian}
            alt="atlassian-logo"
          />
        </div>
        <div className='flex-1 max-w-[150px] min-w-[120px] m-4 flex justify-center items-center'>
          <img
            src={dropbox}
            alt="dropbox-logo"
          />
        </div>
        <div className='flex-1 max-w-[150px] min-w-[120px] m-4 flex justify-center items-center'>
          <img
            src={shopify}
            alt="shopify-logo"
          />
        </div>
      </div>
    </motion.section>
  );
}

export default Sponsors;