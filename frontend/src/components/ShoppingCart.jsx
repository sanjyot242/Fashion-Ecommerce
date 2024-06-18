import { useEffect } from 'react';
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCart } from '../../redux/Cart/cartSlice';
import { useNavigate } from 'react-router-dom';

function ShoppingCart() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cart = useSelector((store) => store.cart.items);

  useEffect(() => {
    console.log('Use effect executed');
    dispatch(fetchCart());
  }, [dispatch]);

  console.log(cart);

  const handleOnClick = () => {
    navigate('/checkout');
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
    <div className='max-w-2xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
      <h1 className='text-3xl font-extrabold tracking-tight text-gray-900'>
        Shopping Cart
      </h1>
      <div className='mt-12 lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start'>
        <section aria-labelledby='cart-heading' className='lg:col-span-8'>
          <h2 id='cart-heading' className='sr-only'>
            Items in your shopping cart
          </h2>
          <ul
            role='list'
            className='border-t border-b border-gray-200 divide-y divide-gray-200'>
            {cart.map((product, index) => (
              <CartItem key={index} product={product} />
            ))}
          </ul>
        </section>
        <section
          aria-labelledby='summary-heading'
          className='lg:col-span-4 bg-gray-50 p-6 rounded-lg shadow'>
          <h2
            id='summary-heading'
            className='text-lg font-medium text-gray-900'>
            Order summary
          </h2>
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
          </dl>
          <div className='mt-6'>
            <button
              onClick={handleOnClick}
              className='w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
              Checkout
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
export default ShoppingCart;
