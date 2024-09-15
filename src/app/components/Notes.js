import React from 'react';

const Notes = () => {
  return (
    <div className='px-5 py-10 md:px-10 md:py-20'>
      <div className='bg-primary-text px-6 py-14 md:px-10 md:py-20 border border-black rounded-3xl drop-shadow-solid flex flex-col items-center gap-8'>
        
        {/* Title Section */}
        <div className='w-full text-center'>
          <h1 className='text-4xl sm:text-5xl md:text-7xl text-code-bg text-outline font-heading leading-snug'>
            My Saved Notes
          </h1>
          <p className='text-white font-paragraph text-base md:text-lg mt-4'>
            Explore Easy to Understand and Organized Notes at your fingertips!
          </p>
        </div>

        {/* Notes Grid Section */}
        <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-8 '>
          {/* Note 1 */}
          <div className='flex justify-center transition-all hover:scale-105'>
            <img
              src='/images/hash-table.png'
              alt='Note 1'
              className='w-full h-auto object-cover border-black rounded-2xl'
            />
          </div>
          
          {/* Note 2 */}
          <div className='flex justify-center transition-all hover:scale-105'>
            <img
              src='/images/array&linkedlist.png'
              alt='Note 2'
              className='w-full h-auto object-cover border-black rounded-2xl'
            />
          </div>
          
          {/* Note 3 */}
          <div className='flex justify-center transition-all hover:scale-105'>
            <img
              src='/images/stack&queue.png'
              alt='Note 3'
              className='w-full h-auto object-cover border-black rounded-2xl'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notes;
