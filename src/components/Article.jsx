import React from 'react';

function Article({image, posted, title, customStyles}) {
  return (
    <article className={`bg-primary-700 ${customStyles ? customStyles : ''}`}>
      <img
        src={image}
        alt={title}
        className="w-full"
      />
      <div className="p-4">
        <time dateTime={posted[0]} className='text-[11.65px] font-bold leading-[34px] text-white'>{posted[1]}</time>
        <p className='text-2xl text-white font-extrabold leading-[30px]'>{title}</p>
        <a href='#' className='block text-[11.65px] font-bold leading-[34px] text-white mt-8'>Read Full Article</a>
      </div>
    </article>
  );
}

export default Article;