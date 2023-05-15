import React, { useState } from 'react';
import sitelogo from '../assets/images/logo.svg';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'

const NavLinks = () => (
  <>
    <li>
      <a href="#" className='text-white font-medium text-lg leading-6 capitalize cursor-pointer'>Home</a>
    </li>
    <li>
      <a href="#what-gpt3" className='text-white font-medium text-lg leading-6 capitalize cursor-pointer'>What is GPT3</a>
    </li>
    <li>
      <a href="#possibility" className='text-white font-medium text-lg leading-6 capitalize cursor-pointer'>Open AI</a>
    </li>
    <li>
      <a href="#features" className='text-white font-medium text-lg leading-6 capitalize cursor-pointer'>Case Studies</a>
    </li>
    <li>
      <a href="#blog" className='text-white font-medium text-lg leading-6 capitalize cursor-pointer'>Libraries</a>
    </li>
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

        <nav className='hidden lg:flex' id="primary-navigation" aria-label='Primary Navigation'>
          <ul className="list-none flex gap-[2.875rem]">
            <NavLinks />
          </ul>
        </nav>

        <div className="hidden sm:flex items-center ml-auto">
          <button className='text-white font-primary font-medium text-lg leading-6 capitalize mx-4 cursor-pointer'>sign in</button>
          <button type='button' className='py-2 px-4 bg-[#ff4820] text-white text-lg font-primary font-medium leading-6 capitalize rounded-md border-none cursor-pointer'>sign up</button>
        </div>

        <button className='ml-auto sm:ml-0 lg:hidden' onClick={() => setIsExpanded(!isExpanded)}>
          <span className="sr-only">{isExpanded ? 'Close' : 'Open'}Menu</span>
          {
            isExpanded
            ? <RiCloseLine color='#fff' size={27} />
            : <RiMenu3Line color='#fff' size={27} />
          }
        </button>

        {
          isExpanded && (
            <div className={`absolute top-12 right-4 bg-primary-800 flex flex-col gap-4 min-w-[210px] p-8 mt-4 rounded-md shadow-sm sm:top-20 sm:right-8 lg:hidden`}>
              <nav aria-label="Mobile Navigation">
                <ul className="list-none flex flex-col gap-4">
                  <NavLinks />
                </ul>
              </nav>
              <div className="flex flex-col gap-4 sm:hidden">
                <button className='text-white font-primary font-medium text-lg leading-6 capitalize mx-4 cursor-pointer'>sign in</button>
                <button type='button' className='py-2 px-4 bg-[#ff4820] text-white text-lg font-primary font-medium leading-6 capitalize rounded-md border-none cursor-pointer'>sign up</button>
              </div>
            </div>
          )
        }
      </div>
    </section>
  );
}

export default Navbar;