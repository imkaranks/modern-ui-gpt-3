import React, { useState } from 'react';
import heroImg from '../assets/images/ai.webp';
import people from '../assets/images/people.png';
import { motion } from 'framer-motion';
import { textVariant, imageVariant } from '../utils/motion';

function HeroSection() {
  const [imgLoading, setImgLoading] = useState(true);

  return (
    <section className='self-center py-16' aria-labelledby='gpt3__headline' aria-describedby='gpt3__desc'>
      <div className="w-11/12 max-w-7xl mx-auto grid md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="max-w-[614px]">
            <motion.h1
              className='text-gradient font-extrabold text-4xl leading-none tracking-tighter md:text-5xl lg:text-[62px]' id="gpt3__headline"
              variants={textVariant}
              initial="offscreen"
              whileInView="onscreen"
              transition={{delay: 0.3}}
              viewport={{once: true}}
            >
              Let’s Build Something amazing with GPT-3 OpenAI
            </motion.h1>
            <p className='text-sm leading-[24px] text-content mt-6 md:text-base lg:text-xl' id="gpt3__desc">
              Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
            </p>
          </div>

          <div className='flex w-full max-w-[614px] my-8'>
            <label htmlFor="email" className='sr-only'>Your Email Address</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder='Your Email Address'
              className='bg-primary-700 w-full flex-[0.7] min-h-[50px] text-xs leading-6 text-white border-2 border-primary-700 outline-none rounded-tl-md rounded-bl-md px-4 sm:text-base md:text-xl sm:leading-[27px]'
            />
            <button className='w-full flex-[0.3] min-h-[50px] bg-accent-400 text-xs leading-6 text-white font-bold px-4 outline-0 border-none rounded-tr-md rounded-br-md cursor-pointer sm:text-base md:text-xl sm:leading-[22px] hover:transition-colors hover:bg-accent-300' type="submit">Get Started</button>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row items-center">
            <img
              src={people}
              alt="people"
            />
            <p className='m-0 text-center text-xs text-white font-medium sm:ml-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>

        <div className={`md:col-span-2 ${imgLoading ? 'bg-[url(/ai-small.webp)] bg-no-repeat bg-contain bg-center' : ''}`}>
          <motion.img
            src={heroImg}
            alt=""
            className={`${imgLoading ? 'opacity-0' : ''} w-full h-full max-h-[466px] object-contain`}
            variants={imageVariant('right')}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
            onLoad={() => setImgLoading(false)}
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;