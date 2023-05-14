import React from 'react';

function Register() {
  return (
    <section className='py-16'>
      <div className="bg-gradient-primary w-11/12 max-w-7xl mx-auto p-8 flex flex-col gap-4 rounded-[10.7236px] sm:flex-row sm:justify-between sm:items-center md:p-[42px]">
        <div className='flex-1'>
          <h2 className="text-xs text-[#0E0E0E] font-medium leading-[30px]">
            Request Early Access to Get Started
          </h2>
          <p className="text-[24px] text-black font-extrabold">
            Register today & start exploring the endless possiblities.
          </p>
        </div>
        <div>
          <button className="text-base text-white font-bold leading-[30px] py-4 px-8 bg-black rounded-full">Get Started</button>
        </div>
      </div>
    </section>
  );
}

export default Register;