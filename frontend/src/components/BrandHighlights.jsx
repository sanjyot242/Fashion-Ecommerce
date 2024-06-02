import React from 'react';

const brands = [
  { id: 1, name: 'Brand 1', image: 'path/to/brand1.jpg' },
  { id: 2, name: 'Brand 2', image: 'path/to/brand2.jpg' },
  { id: 3, name: 'Brand 3', image: 'path/to/brand3.jpg' },
];

function BrandHighlights() {
  return (
    <section className='py-12 bg-gray-100'>
      <div className='container mx-auto px-4'>
        <h2 className='text-3xl font-bold text-center mb-8'>Top Brands</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
          {brands.map((brand) => (
            <div key={brand.id} className='bg-white p-4 rounded shadow'>
              <img
                src={brand.image}
                alt={brand.name}
                className='w-full h-32 object-cover rounded'
              />
              <h3 className='mt-4 text-xl font-bold text-center'>
                {brand.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BrandHighlights;
