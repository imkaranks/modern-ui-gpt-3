import React from 'react';

function Feature({ title, headingLvl: Component, desc, customStyles }) {
  return (
    <article className={`relative pt-4 flex ${customStyles || 'flex-col'} gap-4 sm:gap-6 md:gap-8 before:content-[""] before:absolute before:top-0 before:left-0 before:w-[30px] before:h-[3px] before:bg-gradient-accent before:rounded-full`}>
      <Component className={`text-2xl ${customStyles && 'flex-[0.3]'} max-w-[20ch] font-extrabold text-white leading-[24px] tracking-tighter`}>{title}</Component>
      <p className={`text-base ${customStyles && 'flex-[0.7]'} text-content leading-7 font-primary font-medium`}>{desc}</p>
    </article>
  );
}

export default Feature;