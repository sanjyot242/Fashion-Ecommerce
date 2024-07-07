/* eslint-disable react/prop-types */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';

function ProductCard({ item }) {
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  // const productDetails = useSelector(
  //   (state) => state.products.details[item._id]
  // );

  // const error = useSelector((state) => state.products.error);

  const handleOnClick = () => {
    navigate(`/product/${item?._id}`);
  };

  return (
    <div
      onClick={handleOnClick}
      className='bg-white rounded-lg shadow-md overflow-hidden m-4'>
      <img
        src={item.image_url}
        alt={item.name}
        className='w-full h-64 object-cover'
      />
      <div className='p-4'>
        <h2 className='text-xl font-bold mb-2'>{item.name}</h2>
        <p className='text-gray-700 mb-4'>{item.price}</p>
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
