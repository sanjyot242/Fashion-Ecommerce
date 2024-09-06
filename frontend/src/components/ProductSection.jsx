import React from 'react';
import ProductCard from './ProductCard';

const ProductSection = ({ title, subtitle, products }) => {
  return (
    <section className="flex flex-col px-32 py-16 w-full max-md:px-5 max-md:max-w-full">
      <div className="flex flex-wrap gap-8 items-center w-full text-gray-900 max-md:max-w-full">
        <h2 className="flex-1 shrink self-stretch my-auto text-3xl font-medium tracking-tighter leading-none basis-12 max-md:max-w-full">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-2 text-xl tracking-tight leading-snug max-md:max-w-full">
            {subtitle}
          </p>
        )}
        <a href="#shop-now" className="gap-2 self-stretch px-6 py-3 my-auto text-sm leading-none bg-white rounded border-gray-300 border-solid shadow-sm border-[0.5px] max-md:px-5">
          Shop now
        </a>
      </div>
      <div className="flex flex-col justify-center mt-8 w-full max-md:max-w-full">
        <div className="flex flex-wrap gap-4 items-center w-full max-md:max-w-full">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;