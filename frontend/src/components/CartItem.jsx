import PropTypes from 'prop-types';
function CartItem({ id, image, name, color, size, price, inStock, quantity }) {
  return (
    <li className='flex py-6 sm:py-10'>
      <div className='flex-shrink-0'>
        <img
          src={image}
          alt={name}
          className='w-24 h-24 rounded-md object-cover sm:w-48 sm:h-48'
        />
      </div>
      <div className='ml-4 flex-1 flex flex-col justify-between sm:ml-6'>
        <div className='relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0'>
          <div>
            <div className='flex justify-between'>
              <h3 className='text-sm'>
                <a
                  href='#'
                  className='font-medium text-gray-700 hover:text-gray-800'>
                  {name}
                </a>
              </h3>
            </div>
            <div className='mt-1 flex text-sm'>
              <p className='text-gray-500'>{color}</p>
              {size ? (
                <p className='ml-4 pl-4 border-l border-gray-200 text-gray-500'>
                  {size}
                </p>
              ) : null}
            </div>
            <p className='mt-1 text-sm font-medium text-gray-900'>
              ${price.toFixed(2)}
            </p>
          </div>
          <div className='mt-4 sm:mt-0 sm:pr-9'>
            <label htmlFor={`quantity-${id}`} className='sr-only'>
              Quantity, {name}
            </label>
            <select
              id={`quantity-${id}`}
              name={`quantity-${id}`}
              className='max-w-full rounded-md border border-gray-300 py-1.5 text-left text-base font-medium leading-5 text-gray-700 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm'
              value={quantity}
              onChange={console.log('Quantity Changed')}>
              {[1, 2, 3, 4, 5].map((q) => (
                <option key={q} value={q}>
                  {q}
                </option>
              ))}
            </select>
            <div className='absolute top-0 right-0'>
              <button
                type='button'
                className='-m-2 p-2 inline-flex text-gray-400 hover:text-gray-500'
                onClick={console.log('Item Removed')}>
                &times;
              </button>
            </div>
          </div>
        </div>
        <p
          className={`mt-4 flex space-x-2 text-sm text-gray-700 ${
            inStock ? 'text-green-500' : 'text-gray-500'
          }`}>
          {inStock ? 'In stock' : 'Ships in 3-4 weeks'}
        </p>
      </div>
    </li>
  );
}
CartItem.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  inStock: PropTypes.bool.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default CartItem;