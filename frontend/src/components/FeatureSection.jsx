import React from 'react';

const FeatureSection = ({ title, description, buttonText, imageSrc, imageAlt, reverse = false }) => {
  return (
    <section className={`flex flex-wrap gap-10 px-32 py-16 w-full min-h-[713px] max-md:px-5 max-md:max-w-full ${reverse ? 'flex-row-reverse' : ''}`}>
      <div className="flex flex-col my-auto min-w-[240px] w-[451px] max-md:max-w-full">
        <div className="flex flex-col w-full text-gray-900 max-md:max-w-full">
          <h2 className="text-5xl font-medium tracking-tighter leading-[56px] max-md:max-w-full max-md:text-4xl max-md:leading-10">
            {title}
          </h2>
          <p className="mt-2 text-xl tracking-tight leading-snug max-md:max-w-full">
            {description}
          </p>
        </div>
        <a href="#shop-now" className="gap-2 self-start px-5 py-2.5 mt-8 text-sm leading-none text-white bg-gray-900 rounded shadow-sm">
          {buttonText}
        </a>
      </div>
      <img loading="lazy" src={imageSrc} alt={imageAlt} className="object-contain flex-1 shrink w-full rounded aspect-[1.17] basis-0 min-w-[240px] max-md:max-w-full" />
    </section>
  );
};

export default FeatureSection;