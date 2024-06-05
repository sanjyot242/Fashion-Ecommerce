import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function ProductCard({ image, title, price }) {
  return (
    <div className='bg-white rounded-lg shadow-md overflow-hidden m-4'>
      <img src={image} alt={title} className='w-full h-64 object-cover' />
      <div className='p-4'>
        <h2 className='text-xl font-bold mb-2'>{title}</h2>
        <p className='text-gray-700 mb-4'>{price}</p>
        <div className='flex justify-end'>
          <button className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'>
            <FontAwesomeIcon icon='shopping-cart' />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
