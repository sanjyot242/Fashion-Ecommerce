import CartItem from './CartItem';
const productsData = [
  {
    id: 1,
    image:
      'https://images.unsplash.com/photo-1617724757497-79b54c5444d2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // replace with actual image paths
    name: 'Basic Tee',
    color: 'Sienna',
    size: 'Large',
    price: 32.0,
    inStock: true,
    quantity: 1,
  },
  {
    id: 2,
    image:
      'https://images.unsplash.com/photo-1503341504253-dff4815485f1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // replace with actual image paths
    name: 'Basic Tee',
    color: 'Black',
    size: 'Large',
    price: 32.0,
    inStock: false,
    quantity: 1,
  },
  {
    id: 3,
    image:
      'https://images.unsplash.com/photo-1535730142260-496e3db19f6f?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // replace with actual image paths
    name: 'Nomad Tumbler',
    color: 'White',
    size: '',
    price: 35.0,
    inStock: true,
    quantity: 1,
  },
];
function ShoppingCart() {
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
            {productsData.map((product) => (
              <CartItem key={product.id} {...product} />
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
              <dd className='text-sm font-medium text-gray-900'>$123.00</dd>
            </div>
            <div className='border-t border-gray-200 pt-4 flex items-center justify-between'>
              <dt className='flex items-center text-sm text-gray-600'>
                <span>Shipping estimate</span>
                <span className='ml-2 text-gray-400'>?</span>
              </dt>
              <dd className='text-sm font-medium text-gray-900'>$13.00</dd>
            </div>
            <div className='border-t border-gray-200 pt-4 flex items-center justify-between'>
              <dt className='flex items-center text-sm text-gray-600'>
                <span>Tax estimate</span>
                <span className='ml-2 text-gray-400'>?</span>
              </dt>
              <dd className='text-sm font-medium text-gray-900'>$3.76</dd>
            </div>
            <div className='border-t border-gray-200 pt-4 flex items-center justify-between'>
              <dt className='text-base font-medium text-gray-900'>
                Order total
              </dt>
              <dd className='text-base font-medium text-gray-900'>$163.70</dd>
            </div>
          </dl>
          <div className='mt-6'>
            <button className='w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
              Checkout
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
export default ShoppingCart;
