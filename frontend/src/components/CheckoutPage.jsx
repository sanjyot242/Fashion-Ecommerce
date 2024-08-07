import React from 'react';
import CartItem from './CartItem';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchCart } from '../../redux/Cart/cartSlice';
import axiosInstance from '../utils/axiosInstance';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

function CheckoutPage() {
  const schema = yup.object({
    first_name: yup.string().required('First name is a required field'),
    last_name: yup.string().required(),
    email: yup.string().email().required(),
    street: yup.string().max(30).required(),
    city: yup.string().required(),
    state: yup.string().required(),
    zipCode: yup.string().max(6).min(6).required(),
    phone: yup.string().min(10).max(10).required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const cart = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log('Use effect executed');
    dispatch(fetchCart());
  }, [dispatch]);

  const handlePayNow = async (amount, cart, data) => {
    const {
      data: { key },
    } = await axiosInstance.get('/api/getKey');

    const {
      data: { order },
    } = await axiosInstance.post('/api/payment/createOrder', {
      amount,
      cart,
      data,
    });

    const options = {
      key,
      amount: order.amount,
      currency: 'INR',
      name: 'RootSpace Pvt Ltd',
      description: 'Description',
      image:
        'https://images.unsplash.com/photo-1600269452121-4f2416e55c28?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      order_id: order.id,
      callback_url:
        'https://fashion-ecommerce-backend-9deb.onrender.com/api/payment/verifyPayment',
      prefill: {
        name: 'Logged in User Name',
        email: 'username@example.com',
        contact: '9999999999',
      },
      notes: {
        address: 'Razorpay Corporate Office',
      },
      theme: {
        color: '#121212',
      },
    };
    const razor = new window.Razorpay(options);
    razor.open();
  };

  const calculateSubtotal = () => {
    const subTotal = cart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    return subTotal.toFixed(2);
  };

  const calculateShipping = () => {
    return (5.0).toFixed(2); // Flat shipping rate for simplicity
  };

  const calculateTax = () => {
    return (calculateSubtotal() * 0.08).toFixed(2); // 8% tax rate for simplicity
  };

  const calculateTotal = () => {
    return (
      parseFloat(calculateSubtotal()) +
      parseFloat(calculateShipping()) +
      parseFloat(calculateTax())
    );
  };

  return (
    <div className='mx-12 px-4 mt-4'>
      <form
        onSubmit={handleSubmit((data) =>
          handlePayNow(calculateTotal(), cart, data)
        )}>
        <div className='flex flex-col md:flex-row gap-10  overflow-hidden'>
          <div className='w-full md:w-1/2 p-5'>
            <h2 className='text-xl font-semibold'>Contact Information</h2>
            <div className='space-y-4'>
              <input
                {...register('email')}
                type='email'
                placeholder='Email address'
                className='w-full p-2 border border-gray-300 rounded-md'
              />
            </div>
            <p className='m-1 block text-sm font-thin text-red-700'>
              {errors.email?.message}
            </p>

            <h2 className='text-xl font-semibold mt-6'>Shipping Information</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <input
                type='text'
                {...register('first_name')}
                placeholder='First name'
                className='p-2 border border-gray-300 rounded-md'
              />

              <input
                type='text'
                {...register('last_name')}
                placeholder='Last name'
                className='p-2 border border-gray-300 rounded-md'
              />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <p className='m-1 block text-sm font-thin text-red-700'>
                {errors.first_name?.message}
              </p>
              <p className='m-1 block text-sm font-thin text-red-700'>
                {errors.last_name?.message}
              </p>
            </div>

            <input
              type='text'
              {...register('company')}
              placeholder='Company (optional)'
              className='w-full p-2 border border-gray-300 rounded-md mt-4'
            />

            <input
              type='text'
              {...register('street')}
              placeholder='Street Name'
              className='w-full p-2 border border-gray-300 rounded-md mt-4'
            />
            <p className='m-1 block text-sm font-thin text-red-700'>
              {errors.street?.message}
            </p>
            <div className='grid grid-cols-3 gap-4 mt-4'>
              <input
                type='text'
                {...register('city')}
                placeholder='City'
                className='col-span-2 p-2 border border-gray-300 rounded-md'
              />
              <select className='p-2 border border-gray-300 rounded-md'>
                <option>India</option>
              </select>
              <p className='m-1 block text-sm font-thin text-red-700'>
                {errors.city?.message}
              </p>
            </div>
            <div className='grid grid-cols-3 gap-4 mt-4'>
              <input
                type='text'
                {...register('state')}
                placeholder='State / Province'
                className='p-2 border border-gray-300 rounded-md'
              />

              <input
                type='text'
                placeholder='Postal code'
                {...register('zipCode')}
                className='p-2 border border-gray-300 rounded-md'
              />

              <input
                type='text'
                placeholder='Phone'
                {...register('phone')}
                className='p-2 border border-gray-300 rounded-md'
              />
              <p className='m-1 block text-sm font-thin text-red-700'>
                {errors.state?.message}
              </p>
              <p className='m-1 block text-sm font-thin text-red-700'>
                {errors.zipCode?.message}
              </p>
              <p className='m-1 block text-sm font-thin text-red-700'>
                {errors.phone?.message}
              </p>
            </div>

            {/* <h2 className='text-xl font-semibold mt-6'>Delivery method</h2>
            <div className='mt-4'>
              <label className='flex items-center'>
                <input type='radio' name='delivery' className='form-radio' />
                <span className='ml-2'>Standard (4-10 business days)</span>
              </label>
              <label className='flex items-center mt-2'>
                <input type='radio' name='delivery' className='form-radio' />
                <span className='ml-2'>Express (2-5 business days)</span>
              </label>
            </div>

            <h2 className='text-xl font-semibold mt-6'>Payment</h2>
            <div className='flex items-center mt-4'>
              <input type='radio' name='payment' className='form-radio' />
              <span className='ml-2'>Credit card</span>
            </div>
            <div className='grid grid-cols-3 gap-4 mt-4'>
              <input
                type='text'
                placeholder='Card number'
                className='col-span-3 p-2 border border-gray-300 rounded-md'
              />
              <input
                type='text'
                placeholder='MM/YY'
                className='p-2 border border-gray-300 rounded-md'
              />
              <input
                type='text'
                placeholder='CVC'
                className='p-2 border border-gray-300 rounded-md'
              />
            </div> */}
          </div>

          <div className='w-full md:w-1/2 bg-gray-100 p-5'>
            <h2 className='text-xl font-semibold'>Order summary</h2>
            <ul
              role='list'
              className='border-t border-b border-gray-200 divide-y divide-gray-200'>
              {cart.map((product, index) => (
                <CartItem key={index} product={product} />
              ))}
            </ul>
            <dl className='mt-6 space-y-4'>
              <div className='flex items-center justify-between'>
                <dt className='text-sm text-gray-600'>Subtotal</dt>
                <dd className='text-sm font-medium text-gray-900'>
                  ${calculateSubtotal()}
                </dd>
              </div>
              <div className='border-t border-gray-200 pt-4 flex items-center justify-between'>
                <dt className='flex items-center text-sm text-gray-600'>
                  <span>Shipping estimate</span>
                  <span className='ml-2 text-gray-400'>?</span>
                </dt>
                <dd className='text-sm font-medium text-gray-900'>
                  ${calculateShipping()}
                </dd>
              </div>
              <div className='border-t border-gray-200 pt-4 flex items-center justify-between'>
                <dt className='flex items-center text-sm text-gray-600'>
                  <span>Tax estimate</span>
                  <span className='ml-2 text-gray-400'>?</span>
                </dt>
                <dd className='text-sm font-medium text-gray-900'>
                  ${calculateTax()}
                </dd>
              </div>
              <div className='border-t border-gray-200 pt-4 flex items-center justify-between'>
                <dt className='text-base font-medium text-gray-900'>
                  Order total
                </dt>
                <dd className='text-base font-medium text-gray-900'>
                  ${calculateTotal()}
                </dd>
              </div>
              <div className='border-t border-gray-200 pt-4 flex items-center justify-between'>
                <button className='p-2 font-semibold text-xl rounded-sm text-white bg-blue-gray-500 w-full hover:bg-blue-gray-800'>
                  Pay Now
                </button>
              </div>
            </dl>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CheckoutPage;
