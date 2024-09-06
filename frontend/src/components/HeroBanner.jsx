import React from 'react';

const HeroBanner = () => {
  return (
    <section className="flex relative flex-col justify-center items-center px-16 py-80 w-full min-h-[834px] max-md:px-5 max-md:py-24 max-md:max-w-full">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets%2F6075100a88d44b09b2d6c5b584a495ba%2F8fc72dc6391340748d26344fa68bc9dd" alt="Sale background" className="object-cover absolute inset-0 size-full" />
      <div className="flex relative flex-col max-w-full w-[818px]">
        <div className="flex flex-col items-start w-full text-center text-white max-md:max-w-full">
          <h1 className="text-5xl font-medium tracking-tighter leading-[56px] max-md:max-w-full max-md:text-4xl max-md:leading-10">
            Sale Update: Now upto 60% off on select items
          </h1>
          <p className="mt-2 text-xl tracking-tight leading-snug max-md:max-w-full">
            The world's greatest designers - Now on sale! T&C apply
          </p>
        </div>
        <a href="#shop-now" className="gap-2 self-center px-5 py-2.5 mt-8 text-sm leading-none text-gray-900 bg-white rounded border-gray-300 border-solid shadow-sm border-[0.5px]">
          Shop now
        </a>
      </div>
    </section>
  );
};

export default HeroBanner;