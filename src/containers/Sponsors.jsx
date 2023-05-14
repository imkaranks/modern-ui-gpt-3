import React from 'react';
import google from '../assets/google.png';
import slack from '../assets/slack.png';
import atlassian from '../assets/atlassian.png';
import dropbox from '../assets/dropbox.png';
import shopify from '../assets/shopify.png';

function Sponsors() {
  return (
    <section className='py-8' aria-label='Our Sponsors'>
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center items-center">
        <div className='flex-1 max-w-[150px] min-w-[120px] m-4 flex justify-center items-center'>
          <img
            src={google}
            alt="google-logo"
          />
        </div>
        <div className='flex-1 max-w-[150px] min-w-[120px] m-4 flex justify-center items-center'>
          <img
            src={slack}
            alt="slack-logo"
          />
        </div>
        <div className='flex-1 max-w-[150px] min-w-[120px] m-4 flex justify-center items-center'>
          <img
            src={atlassian}
            alt="atlassian-logo"
          />
        </div>
        <div className='flex-1 max-w-[150px] min-w-[120px] m-4 flex justify-center items-center'>
          <img
            src={dropbox}
            alt="dropbox-logo"
          />
        </div>
        <div className='flex-1 max-w-[150px] min-w-[120px] m-4 flex justify-center items-center'>
          <img
            src={shopify}
            alt="shopify-logo"
          />
        </div>
      </div>
    </section>
  );
}

export default Sponsors;