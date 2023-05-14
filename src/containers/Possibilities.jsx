import React from 'react';
import possibilityImg from '../assets/possibility.png';

function Possibilities() {
  return (
    <section className='py-16' aria-labelledby='gpt3__possibilities-title' aria-describedby='gpt3__possibilities-desc'>
      <div className="w-11/12 max-w-7xl mx-auto grid gap-4 items-center sm:grid-cols-2">
        <div>
          <img
            src={possibilityImg}
            alt="possibilities"
            className='w-full h-full max-h-[466px] object-contain'
          />
        </div>
        <div>
          <a href='#' className='block text-base text-[#71E5FF] font-medium leading-[30px] cursor-pointer'>Request Early Access to Get Started</a>
          <h2 className='text-gradient text-[34px] leading-[45px] max-w-[426px] font-extrabold tracking-tighter mt-[10px]' id="gpt3__possibilities-title">
            The possibilities are beyond your imagination
          </h2>
          <p className='max-w-[479px] text-base text-content leading-[30px] font-normal mt-[23px]' id="gpt3__possibilities-desc">
            Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
          </p>
          <a href='#' className='block text-base text-[#FF8A71] font-medium leading-[30px] mt-[31px] cursor-pointer'>Request Early Access to Get Started</a>
        </div>
      </div>
    </section>
  );
}

export default Possibilities;