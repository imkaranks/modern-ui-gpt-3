import React from 'react';
import Feature from '../components/Feature';

function Features() {
  return (
    <section className='py-16' aria-labelledby='gpt3__features-title'>
      <div className="w-11/12 max-w-7xl mx-auto grid gap-4 sm:grid-cols-2">
        <div>
          <h2 className='max-w-[426px] text-gradient text-[30px] leading-[45px] font-extrabold' id="gpt3__features-title">
            The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.
          </h2>
          <a href='#' className='block text-base text-[#FF8A71] font-medium leading-[30px] my-4 cursor-pointer sm:mt-[34px]'>Request Early Access to Get Started</a>
        </div>
        <div className='flex flex-col gap-5'>
          <Feature
            title='Improving end distrusts instantly'
            headingLvl='h3'
            fontSizes={[ 'base', 'sm' ]}
            desc='From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.'
            customStyles='flex-col pt-1 md:flex-row'
          />
          <Feature
            title='Become the tended active'
            headingLvl='h3'
            fontSizes={[ 'base', 'sm' ]}
            desc='Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.'
            customStyles='flex-col pt-1 md:flex-row'
          />
          <Feature
            title='Message or am nothing'
            headingLvl='h3'
            fontSizes={[ 'base', 'sm' ]}
            desc='Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.'
            customStyles='flex-col pt-1 md:flex-row'
          />
          <Feature
            title='Really boy law county'
            headingLvl='h3'
            fontSizes={[ 'base', 'sm' ]}
            desc='Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.'
            customStyles='flex-col pt-1 md:flex-row'
          />
        </div>
      </div>
    </section>
  );
}

export default Features;