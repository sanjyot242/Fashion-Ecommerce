import React from 'react';

function Hero() {
  return (
    <section className='bg-gray-200 h-screen flex items-center'>
      <div className='container mx-auto px-4 text-center'>
        <h1 className='text-5xl font-bold text-gray-800'>
          Welcome to Prototype
        </h1>
        <p className='mt-4 text-lg text-gray-600'>
          Discover the best products from top brands
        </p>
        <a
          href='/products'
          className='mt-6 inline-block bg-blue-500 text-white py-2 px-4 rounded'>
          Shop Now
        </a>
      </div>
    </section>
  );
}

export default Hero;
