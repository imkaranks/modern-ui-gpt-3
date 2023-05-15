import React from 'react';
import Feature from '../components/Feature';
import './WhatGPT3.css';
import { motion } from 'framer-motion';
import { sectionVariant } from '../utils/motion';

function WhatGPT3() {
  return (
    <motion.section
      className='py-16' id='what-gpt3' aria-label='What is GPT-3'
      variants={sectionVariant}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <div className="whatgpt3__content | w-11/12 max-w-7xl mx-auto p-4 sm:p-8 md:p-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        <Feature
          title='What is GPT-3'
          headingLvl='h2'
          fontSizes={[ 'text-xl md:text-2xl', 'text-base' ]}
          desc='We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.'
          customStyles='col-span-full flex-col md:flex-row'
        />

        <div className="col-span-full flex flex-col items-start my-4 justify-between sm:my-8 lg:my-[41px] lg:flex-row lg:items-center">
          <h2 className="text-gradient font-extrabold text-[28px] leading-[40px] max-w-[510px] sm:text-[32px] sm:leading-[45px]">
            The possibilities are beyond your imagination
          </h2>
          <a href="#" className='font-medium text-base leading-[30px] text-subhead cursor-pointer mt-4 lg:mt-0'>Explore The Library</a>
        </div>

        <Feature
          title="Chatbots"
          headingLvl='h3'
          fontSizes={[ 'text-xl md:text-2xl', 'text-base' ]}
          desc="We so opinion friends me message as delight. Whole front do of plate heard oh ought."
        />

        <Feature
          title="Knowledgebase"
          headingLvl='h3'
          fontSizes={[ 'text-xl md:text-2xl', 'text-base' ]}
          desc="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
        />

        <Feature
          title="Education"
          headingLvl='h3'
          fontSizes={[ 'text-xl md:text-2xl', 'text-base' ]}
          desc="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
        />
      </div>
    </motion.section>
  );
}

export default WhatGPT3;