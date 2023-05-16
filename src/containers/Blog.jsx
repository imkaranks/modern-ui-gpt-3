import React from 'react';
import Article from '../components/Article';
import blogImg1 from '../assets/images/blog01.webp';
import blogImg2 from '../assets/images/blog02.webp';
import blogImg3 from '../assets/images/blog03.webp';
import blogImg4 from '../assets/images/blog04.webp';
import blogImg5 from '../assets/images/blog05.webp';
import { motion } from 'framer-motion';
import { sectionVariant, textVariant } from '../utils/motion';

function Blog() {
  return (
    <motion.section
      className='py-16' id='blog' aria-labelledby='gpt3__blog-title'
      variants={sectionVariant}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <div className="w-11/12 max-w-7xl mx-auto grid gap-[50.68px] sm:grid-cols-2 md:grid-cols-3">
        <motion.h2
          className="col-span-full text-4xl text-gradient md:leading-[75px] font-extrabold tracking-tighter sm:text-5xl md:text-6xl" id='gpt3__blog-title'
          variants={textVariant}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{once: true}}
        >
          A lot is happening, We are blogging about it.
        </motion.h2>
        <Article
          image={blogImg1}
          posted={['2021-09-26', 'Sep 26, 2021']}
          title='GPT-3 and Open  AI is the future. Let us exlore how it is?'
          customStyles='md:row-span-2'
        />
        <Article
          image={blogImg2}
          posted={['2021-09-26', 'Sep 26, 2021']}
          title='GPT-3 and Open  AI is the future. Let us exlore how it is?'
        />
        <Article
          image={blogImg3}
          posted={['2021-09-26', 'Sep 26, 2021']}
          title='GPT-3 and Open  AI is the future. Let us exlore how it is?'
        />
        <Article
          image={blogImg4}
          posted={['2021-09-26', 'Sep 26, 2021']}
          title='GPT-3 and Open  AI is the future. Let us exlore how it is?'
        />
        <Article
          image={blogImg5}
          posted={['2021-09-26', 'Sep 26, 2021']}
          title='GPT-3 and Open  AI is the future. Let us exlore how it is?'
        />
      </div>
    </motion.section>
  );
}

export default Blog;