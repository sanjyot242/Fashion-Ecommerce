import React from 'react';
import backgroundImage from '../assets/hero-background.jpg';
import zaraSvg from '../../public/images/zara-logo-11.svg';
import ckSvg from '../../public/images/ck.svg';
import gucciSvg from '../../public/images/gucci.svg';
import pradaSvg from '../../public/images/prada.svg';
import versaceSvg from '../../public/images/versace.svg';

function Hero() {
  return (
    <>
      <section className='h-screen flex items-center justify-between bg-gray-100 overflow-hidden'>
        <div className='ml-auto pl-12 flex flex-col md:flex-row items-center'>
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
      <div className='w-full lg:h-[122px] h-[146px] bg-black flex  items-center justify-between p-3  '>
        <img src={versaceSvg} className='w-[166px] h-[33.16px] '></img>
        <img src={zaraSvg} className='w-[166px] h-[33.16px] '></img>
        <img src={ckSvg} className='w-[166px] h-[33.16px] '></img>
        <img src={gucciSvg} className='w-[166px] h-[33.16px] '></img>
        <img src={pradaSvg} className='w-[166px] h-[33.16px] '></img>
      </div>
    </>
  );
}

export default Hero;
