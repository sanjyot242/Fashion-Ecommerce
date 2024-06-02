import React from 'react';

const products = [
  { id: 1, name: 'Product 1', price: '$100', image: 'path/to/image1.jpg' },
  { id: 2, name: 'Product 2', price: '$200', image: 'path/to/image2.jpg' },
  { id: 3, name: 'Product 3', price: '$300', image: 'path/to/image3.jpg' },
];

function FeaturedProducts() {
  return (
    <section className='py-12'>
      <div className='container mx-auto px-4'>
        <h2 className='text-3xl font-bold text-center mb-8'>
          Featured Products
        </h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
          {products.map((product) => (
            <div key={product.id} className='bg-white p-4 rounded shadow'>
              <img
                src={product.image}
                alt={product.name}
                className='w-full h-48 object-cover rounded'
              />
              <h3 className='mt-4 text-xl font-bold'>{product.name}</h3>
              <p className='mt-2 text-gray-600'>{product.price}</p>
              <a
                href={`/product/${product.id}`}
                className='mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded'>
                View Product
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;
