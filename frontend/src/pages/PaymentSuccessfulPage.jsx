import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosInstance from '../utils/axiosInstance';
import OrderPlacedItem from '../components/OrderPlacedItem';

function PaymentSuccessfulPage() {
  const [orderDetails, setOrderDetails] = useState({ products: [] });
  const { paymentId, orderId } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const {
          data: { order },
        } = await axiosInstance.get(`/api/orders/order/${orderId}`);

        setOrderDetails(order);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [orderId]);

  return (
    <section className='py-24 relative'>
      <div className='w-full max-w-7xl px-4 md:px-5 lg:px-6 mx-auto'>
        <h2 className='font-manrope font-bold text-4xl leading-10 text-black text-center'>
          Payment Successful
        </h2>
        <p className='mt-4 font-normal text-lg leading-8 text-gray-500 mb-11 text-center'>
          Thanks for making a purchase you can check our order summary from
          below
        </p>
        <div className='main-box border border-gray-200 rounded-xl pt-6 max-w-xl max-lg:mx-auto lg:max-w-full'>
          <div className='flex flex-col lg:flex-row lg:items-center justify-between px-6 pb-6 border-b border-gray-200'>
            <div className='data'>
              <p className='font-semibold text-base leading-7 text-black'>
                Order Id:{' '}
                <span className='text-indigo-600 font-medium'>{orderId}</span>
              </p>
              <p className='font-semibold text-base leading-7 text-black mt-4'>
                Order Payment :{' '}
                <span className='text-gray-400 font-medium'>
                  {' '}
                  18th March 2021
                </span>
              </p>
            </div>
            <button className='rounded-full py-3 px-7 font-semibold text-sm leading-7 text-white bg-indigo-600 max-lg:mt-5 shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-700 hover:shadow-indigo-400'>
              Track Your Order
            </button>
          </div>
          <div className='w-full px-3 min-[400px]:px-6'>
            {orderDetails.products.map((product) => (
              <OrderPlacedItem product={product} />
            ))}
          </div>
          <div className='w-full border-t border-gray-200 px-6 flex flex-col lg:flex-row items-center justify-between'>
            <div className='flex flex-col sm:flex-row items-center max-lg:border-b border-gray-200'>
              <button className='flex outline-0 py-6 sm:pr-6 sm:border-r border-gray-200 whitespace-nowrap gap-2 items-center justify-center font-semibold group text-lg text-black bg-white transition-all duration-500 hover:text-indigo-600'>
                <svg
                  className='stroke-black transition-all duration-500 group-hover:stroke-indigo-600'
                  xmlns='http://www.w3.org/2000/svg'
                  width='22'
                  height='22'
                  viewBox='0 0 22 22'
                  fill='none'>
                  <path
                    d='M5.5 5.5L16.5 16.5M16.5 5.5L5.5 16.5'
                    stroke=''
                    strokeWidth='1.6'
                    strokeLinecap='round'
                  />
                </svg>
                Cancel Order
              </button>
              <p className='font-medium text-lg text-gray-900 pl-6 py-3 max-lg:text-center'>
                Paid using Credit Card{' '}
                <span className='text-gray-500'>ending with 8822</span>
              </p>
            </div>
            <p className='font-semibold text-lg text-black py-6'>
              Total Price:{' '}
              <span className='text-indigo-600'>
                ${orderDetails.total_price}
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default PaymentSuccessfulPage;
