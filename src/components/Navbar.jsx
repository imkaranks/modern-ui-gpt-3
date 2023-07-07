import React, { useState } from 'react';
import sitelogo from '../assets/images/logo.svg';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { motion } from 'framer-motion';

const navListItem = {
  hide: {
    opacity: 0.25,
    x: '-100vw',
  },
  show: {
    opacity: 1,
    x: 0,
  }
}

const NavLinks = () => (
  <>
    <motion.li
      variants={navListItem}
      className='px-4 py-0.5 relative before:content-[""] before:absolute before:left-0 before:top-0 before:h-[1px] before:w-full before:bg-accent-400 before:transition-transform before:ease before:origin-left before:scale-x-0 after:content-[""] after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-full after:bg-accent-400 after:transition-transform after:ease after:origin-right after:scale-x-0 hover:before:scale-100 hover:after:scale-100'
    >
      <a href="#" className='text-white font-medium text-lg leading-6 capitalize cursor-pointer'>Home</a>
    </motion.li>
    <motion.li
      variants={navListItem}
      className='px-4 py-0.5 relative before:content-[""] before:absolute before:left-0 before:top-0 before:h-[1px] before:w-full before:bg-accent-400 before:transition-transform before:ease before:origin-left before:scale-x-0 after:content-[""] after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-full after:bg-accent-400 after:transition-transform after:ease after:origin-right after:scale-x-0 hover:before:scale-100 hover:after:scale-100'
    >
      <a href="#what-gpt3" className='text-white font-medium text-lg leading-6 capitalize cursor-pointer'>What is GPT3</a>
    </motion.li>
    <motion.li
      variants={navListItem}
      className='px-4 py-0.5 relative before:content-[""] before:absolute before:left-0 before:top-0 before:h-[1px] before:w-full before:bg-accent-400 before:transition-transform before:ease before:origin-left before:scale-x-0 after:content-[""] after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-full after:bg-accent-400 after:transition-transform after:ease after:origin-right after:scale-x-0 hover:before:scale-100 hover:after:scale-100'
    >
      <a href="#possibility" className='text-white font-medium text-lg leading-6 capitalize cursor-pointer'>Open AI</a>
    </motion.li>
    <motion.li
      variants={navListItem}
      className='px-4 py-0.5 relative before:content-[""] before:absolute before:left-0 before:top-0 before:h-[1px] before:w-full before:bg-accent-400 before:transition-transform before:ease before:origin-left before:scale-x-0 after:content-[""] after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-full after:bg-accent-400 after:transition-transform after:ease after:origin-right after:scale-x-0 hover:before:scale-100 hover:after:scale-100'
    >
      <a href="#features" className='text-white font-medium text-lg leading-6 capitalize cursor-pointer'>Case Studies</a>
    </motion.li>
    <motion.li
      variants={navListItem}
      className='px-4 py-0.5 relative before:content-[""] before:absolute before:left-0 before:top-0 before:h-[1px] before:w-full before:bg-accent-400 before:transition-transform before:ease before:origin-left before:scale-x-0 after:content-[""] after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-full after:bg-accent-400 after:transition-transform after:ease after:origin-right after:scale-x-0 hover:before:scale-100 hover:after:scale-100'
    >
      <a href="#blog" className='text-white font-medium text-lg leading-6 capitalize cursor-pointer'>Libraries</a>
    </motion.li>
  </>
);

function Navbar() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className='pt-8'>
      <div className="w-11/12 max-w-7xl mx-auto flex items-center gap-4 sm:gap-8 md:gap-10 lg:gap-[2.875rem]">
        <a href="#primary-navigation" className="sr-only">skip to navigation</a>
        <a href="#main-content" className="sr-only">skip to main content</a>

        <div>
          <img
            src={sitelogo}
            alt="site-logo"
            className='w-[62.56px] h-[16.02px]'
          />
        </div>

        <nav className='hidden min-[1071px]:flex' id="primary-navigation" aria-label='Primary Navigation'>
          <motion.ul
            className="list-none flex gap-[0.875rem]"
            initial="hide"
            animate="show"
            transition={{staggerChildren: 0.2}}
          >
            <NavLinks />
          </motion.ul>
        </nav>

        <div className="hidden sm:flex items-center ml-auto">
          <button className='text-white font-primary font-medium text-lg leading-6 capitalize mx-4 cursor-pointer'>sign in</button>
          <button type='button' className='py-2 px-4 bg-accent-400 text-white text-lg font-primary font-medium leading-6 capitalize rounded-md border-none cursor-pointer hover:transition-colors hover:bg-accent-300'>sign up</button>
        </div>

        <button className='bg-primary-800 rounded-full aspect-square w-10 flex justify-center items-center z-50 ml-auto sm:ml-0 min-[1071px]:hidden' onClick={() => setIsExpanded(!isExpanded)}>
          <span className="sr-only">{isExpanded ? 'Close' : 'Open'}Menu</span>
          {
            isExpanded
            ? <RiCloseLine color='#fff' size={27} />
            : <RiMenu3Line color='#fff' size={27} />
          }
        </button>

        {
          isExpanded && (
            <div className={`gpt3__navbar-mobile | fixed z-40 inset-0 bg-primary-800 flex flex-col gap-4 justify-center items-center text-center p-8 min-[1071px]:hidden`} onClick={() => setIsExpanded(!isExpanded)}>
              <nav aria-label="Mobile Navigation">
                <motion.ul
                  className="list-none flex flex-col gap-4 sm:gap-8"
                  initial="hide"
                  animate="show"
                  transition={{staggerChildren: 0.2}}
                >
                  <NavLinks />
                </motion.ul>
              </nav>
              <div className="flex flex-col gap-4 sm:hidden">
                <button className='text-white font-primary font-medium text-lg leading-6 capitalize mx-4 cursor-pointer'>sign in</button>
                <button type='button' className='py-2 px-4 bg-accent-400 text-white text-lg font-primary font-medium leading-6 capitalize rounded-md border-none cursor-pointer hover:transition-colors hover:bg-accent-300'>sign up</button>
              </div>
            </div>
          )
        }
      </div>
    </section>
  );
}

export default Navbar;