// /* eslint-disable react/prop-types */
// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { useNavigate } from 'react-router-dom';

// function ProductCard({ item }) {
//   // const dispatch = useDispatch();
//   const navigate = useNavigate();
//   // const productDetails = useSelector(
//   //   (state) => state.products.details[item._id]
//   // );

//   // const error = useSelector((state) => state.products.error);

//   const handleOnClick = () => {
//     navigate(`/product/${item?._id}`);
//   };

//   return (
//     <div
//       onClick={handleOnClick}
//       className='bg-white rounded-lg shadow-md overflow-hidden m-4'>
//       <img
//         src={item.image_url}
//         alt={item.name}
//         className='w-full h-64 object-cover'
//       />
//       <div className='p-4'>
//         <h2 className='text-xl font-bold mb-2'>{item.name}</h2>
//         <p className='text-gray-700 mb-4'>{item.price}</p>
//         <div className='flex justify-end'>
//           <button className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'>
//             <FontAwesomeIcon icon='shopping-cart' />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProductCard;


import React from 'react';

const ProductCard = ({ image, status, name, salePrice, originalPrice, comparePrice }) => {
  return (
    <div className="flex flex-col flex-1 shrink self-stretch my-auto basis-0 min-w-[240px]">
      <div className="flex relative flex-col justify-between p-4 w-full rounded aspect-[0.791] min-h-[364px]">
        <img loading="lazy" src={image} alt={name} className="object-cover absolute inset-0 size-full" />
        <div className="flex relative flex-col items-start w-full text-xs font-semibold tracking-wider leading-5 text-gray-500 uppercase whitespace-nowrap">
          <div className="flex flex-col w-[53px]">
            <div className="flex gap-1 justify-center items-center px-1 w-full bg-gray-200 rounded border border-gray-300 border-solid">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/bea825953cb29db57410852d0558195800fc181613ac5e3b3bda2a29db90ae3c?placeholderIfAbsent=true&apiKey=6075100a88d44b09b2d6c5b584a495ba" alt="" className="object-contain shrink-0 self-stretch my-auto w-3 aspect-square" />
              <div className="self-stretch my-auto">{status}</div>
            </div>
          </div>
        </div>
        <button className="flex relative gap-2 items-end mt-64 w-full max-md:mt-10" aria-label="Add to favorites">
          <div className="flex gap-2 justify-center items-center p-2 w-12 h-12 backdrop-blur-[2px] bg-gray-200 bg-opacity-0 rounded-[999px]">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/6b2c2373a60dda94f10062379429ab1cfa57735de2436805d3d6bce5331983de?placeholderIfAbsent=true&apiKey=6075100a88d44b09b2d6c5b584a495ba" alt="" className="object-contain self-stretch my-auto w-8 aspect-square" />
          </div>
        </button>
      </div>
      <div className="flex flex-col mt-2 w-full text-base tracking-tight">
        <div className="text-gray-400">{status}</div>
        <h3 className="text-xl font-semibold tracking-tighter leading-tight text-gray-900">
          {name}
        </h3>
        <div className="flex gap-2 items-start w-full whitespace-nowrap text-slate-600">
          <span className="text-red-600">${salePrice}</span>
          <span>${originalPrice}</span>
          <span className="tracking-tighter">${comparePrice}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;