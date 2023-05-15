import React from 'react';
import Article from '../components/Article';
import blogImg1 from '../assets/images/blog01.png';
import blogImg2 from '../assets/images/blog02.png';
import blogImg3 from '../assets/images/blog03.png';
import blogImg4 from '../assets/images/blog04.png';
import blogImg5 from '../assets/images/blog05.png';

function Blog() {
  return (
    <section className='py-16'>
      <div className="w-11/12 max-w-7xl mx-auto grid gap-[50.68px] sm:grid-cols-2 md:grid-cols-3">
        <h2 className="col-span-full text-4xl text-gradient md:leading-[75px] font-extrabold tracking-tighter sm:text-5xl md:text-6xl">
          A lot is happening, We are blogging about it.
        </h2>
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
    </section>
  );
}

export default Blog;