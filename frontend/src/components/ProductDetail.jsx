function ProductDetail() {
  return (
    <div className='bg-white py-6 sm:py-8 lg:py-12'>
      <div className='mx-auto max-w-screen-lg px-4 md:px-8'>
        <div className='grid md:grid-cols-2 gap-12'>
          {/* Image section */}
          <div className='space-y-4'>
            <div className='rounded-lg overflow-hidden'>
              <img
                src='https://images.unsplash.com/photo-1619785292559-a15caa28bde6?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                alt=''
                loading='lazy'
                className='w-full h-full object-cover object-center'
              />
            </div>
            <div className='grid grid-cols-2 gap-4'>
              <div className='rounded-lg overflow-hidden'>
                <img
                  className='w-full h-full object-cover object-center'
                  src='https://images.unsplash.com/photo-1619785690726-89c6b3bd3849?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  alt=''
                />
              </div>
              <div className='rounded-lg overflow-hidden'>
                <img
                  className='w-full h-full object-cover object-center'
                  src='https://images.unsplash.com/photo-1619785292489-043ea2cc700c?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  alt=''
                />
              </div>
            </div>
          </div>
          {/* Desciption Section  */}
          <div className='md:py-8 space-y-4'>
            {/* !-- name - start -- */}
            <div className='mb-2 md:mb-3'>
              <span className='text-gray-500 inline-block'>Brand Name </span>
              <h2 className='text-2xl font-bold text-gray-800 lg:text-3xl'>
                Purple Jacket Female
              </h2>
            </div>
            {/* !-- name - end -- */}

            {/* <!-- rating - start --> */}
            <div className=' flex items-center md:mb-10'>
              <div className='-ml-1 flex gap-0.5'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6 text-yellow-400'
                  viewBox='0 0 20 20'
                  fill='currentColor'>
                  <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                </svg>

                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6 text-yellow-400'
                  viewBox='0 0 20 20'
                  fill='currentColor'>
                  <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                </svg>

                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6 text-yellow-400'
                  viewBox='0 0 20 20'
                  fill='currentColor'>
                  <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                </svg>

                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6 text-yellow-400'
                  viewBox='0 0 20 20'
                  fill='currentColor'>
                  <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                </svg>

                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6 text-gray-300'
                  viewBox='0 0 20 20'
                  fill='currentColor'>
                  <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                </svg>
              </div>

              <span className='ml-2 text-sm text-gray-500'>4.2</span>

              <a
                href='#'
                className='ml-4 text-sm font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700'>
                view all 47 reviews
              </a>
            </div>
            {/* <!-- rating - end --> */}
            {/* <!-- Colour - Start --> */}
            <div>
              <span className='mb-3 inline-block text-sm font-semibold text-gray-500 md:text-base'>
                Color
              </span>
              <div className='flex flex-wrap gap-2'>
                <button className='rounded-full border ring-2 ring-transparent ring-offset-1  hover:ring-black  h-8 w-8 bg-gray-600'></button>
                <button className='rounded-full border  ring-2 ring-transparent ring-offset-1  hover:ring-black h-8 w-8 bg-black'></button>
                <button className='rounded-full border ring-2 ring-transparent ring-offset-1  hover:ring-black  h-8 w-8 bg-purple-800'></button>
              </div>
            </div>
            {/* <!-- Colour - End --> */}

            {/* <!-- Sizee - Start --> */}
            <div>
              <span className='mb-3 inline-block text-sm font-semibold text-gray-500 md:text-base'>
                Size
              </span>
              <div className='flex flex-wrap gap-3'>
                <button className='h-8 w-12 bg-white rounded-md border-2  font-semibold text-gray-800 hover:bg-gray-100 active:bg-gray-200'>
                  XS
                </button>
                <button className='h-8 w-12 bg-white rounded-md border-2  font-semibold text-gray-800 hover:bg-gray-100 active:bg-gray-200'>
                  S
                </button>
                <button className='h-8 w-12 bg-white rounded-md border-2  font-semibold text-gray-800 hover:bg-gray-100 active:bg-gray-200'>
                  M
                </button>
                <button className='h-8 w-12 bg-white rounded-md border-2  font-semibold text-gray-800 hover:bg-gray-100 active:bg-gray-200'>
                  L
                </button>
                <button className='h-8 w-12 bg-white rounded-md border-2  font-semibold text-gray-800 hover:bg-gray-100 active:bg-gray-200'>
                  XL
                </button>
              </div>
            </div>
            {/* <!-- Size - End --> */}
            {/* <!-- price - start --> */}
            <div className='mb-4'>
              <div className='flex items-end gap-2'>
                <span className='text-xl font-bold text-gray-800 md:text-2xl'>
                  $15.00
                </span>
                <span className='mb-0.5 text-red-500 line-through'>$30.00</span>
              </div>

              <span className='text-sm text-gray-500'>
                incl. VAT plus shipping
              </span>
            </div>
            {/* <!-- price - end --> */}

            {/* <!-- shipping notice - start --> */}
            <div className='mb-6 flex items-center gap-2 text-gray-500'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                <path d='M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z' />
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0'
                />
              </svg>

              <span className='text-sm'>2-4 day shipping</span>
            </div>
            {/* <!-- shipping notice - end --> */}

            {/* <!-- buttons - start --> */}
            <div className='flex gap-2.5'>
              <a
                href='#'
                className='inline-block flex-1 rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 sm:flex-none md:text-base'>
                Add to cart
              </a>

              <a
                href='#'
                className='inline-block rounded-lg bg-gray-200 px-4 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
                  />
                </svg>
              </a>
            </div>
            {/* <!-- buttons - end --> */}

            {/* <!-- description - start --> */}
            <div className='mt-10 md:mt-16 lg:mt-20'>
              <div className='mb-3 text-lg font-semibold text-gray-800'>
                Description
              </div>

              <p className='text-gray-500'>
                This is a section of some simple filler text, also known as
                placeholder text. It shares some characteristics of a real
                written text but is random or otherwise generated. It may be
                used to display a sample of fonts or generate text for testing.
                <br />
                <br />
                This is a section of some simple filler text, also known as
                placeholder text. It shares some characteristics of a real
                written text but is random or otherwise generated.
              </p>
            </div>
            {/* <!-- description - end --> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;