import React from 'react';

const CheckOutUs = () => {
  return (
    <div className='px-5 py-10 md:px-10 md:py-20'>
      <div className='bg-button-bg px-6 py-14 md:px-10 md:py-20 border border-black rounded-3xl drop-shadow-solid flex flex-col-reverse md:flex-row items-center gap-8 md:gap-10'>
        
        {/* Left Section: Text */}
        <div className='w-full md:w-1/2 flex flex-col gap-4 justify-between'>
          <h1 className='text-4xl sm:text-5xl md:text-7xl text-white text-outline font-heading leading-snug'>
            Check Us Out On Youtube
          </h1>
          <p className='text-white font-paragraph text-base md:text-lg'>
            Understand DSA concepts with simplified animations. Come join us!
          </p>
          <a href='https://youtube.com' className='text-center w-full md:w-fit uppercase hover:no-underline transition-all hover:scale-105 border-black border rounded-full px-4 py-3 md:px-6 md:py-4 bg-code-bg text-black'>
            Open Youtube
          </a>
        </div>

        {/* Right Section: Image */}
        <div className='w-full md:w-1/2 flex justify-center'>
          <img
            src='/images/linklist.png'
            alt='youtube'
            className='w-full h-auto object-cover border-black rounded-2xl'
          />
        </div>
      </div>
    </div>
  );
};

export default CheckOutUs;
