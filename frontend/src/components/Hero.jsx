import React from 'react';
import backgroundImage from '../assets/hero-background.jpg';

function Hero() {
  return (
    <section className='h-screen flex items-center justify-between bg-gray-100 overflow-hidden'>
      <div className='container mx-auto px-4 py-16 flex flex-col md:flex-row items-center'>
        <div className='md:w-1/2 text-center md:text-left'>
          <h1 className='text-5xl font-bold text-gray-900'>
            Discover the Latest Fashion Trends
          </h1>
          <p className='mt-4 text-lg text-gray-700'>
            Stay ahead with our curated selection of the latest styles.
          </p>
          <a
            href='/products'
            className='mt-6 inline-block bg-blue-500 text-white py-2 px-4 rounded'>
            Shop Now
          </a>
        </div>
        <div className='md:w-1/2 mt-8 md:mt-0 flex justify-center items-center'>
          <img
            src={backgroundImage}
            alt='Fashion Inspiration'
            className='w-full h-auto max-w-full object-cover rounded-lg shadow-lg'
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
