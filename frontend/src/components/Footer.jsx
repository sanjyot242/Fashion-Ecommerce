import React from 'react';

function Footer() {
  return (
    <footer className='bg-white py-8'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-wrap justify-between'>
          <div className='w-full md:w-1/4 mb-6'>
            <h6 className='font-bold mb-2'>Company</h6>
            <ul>
              <li>
                <a href='/' className='text-gray-700 hover:text-gray-900'>
                  About Us
                </a>
              </li>
              <li>
                <a href='/' className='text-gray-700 hover:text-gray-900'>
                  Careers
                </a>
              </li>
              <li>
                <a href='/' className='text-gray-700 hover:text-gray-900'>
                  Premium Tools
                </a>
              </li>
              <li>
                <a href='/' className='text-gray-700 hover:text-gray-900'>
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div className='w-full md:w-1/4 mb-6'>
            <h6 className='font-bold mb-2'>Pages</h6>
            <ul>
              <li>
                <a href='/login' className='text-gray-700 hover:text-gray-900'>
                  Login
                </a>
              </li>
              <li>
                <a
                  href='/register'
                  className='text-gray-700 hover:text-gray-900'>
                  Register
                </a>
              </li>
              <li>
                <a href='/' className='text-gray-700 hover:text-gray-900'>
                  Add List
                </a>
              </li>
              <li>
                <a href='/' className='text-gray-700 hover:text-gray-900'>
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className='w-full md:w-1/4 mb-6'>
            <h6 className='font-bold mb-2'>Legal</h6>
            <ul>
              <li>
                <a href='/' className='text-gray-700 hover:text-gray-900'>
                  Terms
                </a>
              </li>
              <li>
                <a href='/' className='text-gray-700 hover:text-gray-900'>
                  Privacy
                </a>
              </li>
              <li>
                <a href='/' className='text-gray-700 hover:text-gray-900'>
                  Team
                </a>
              </li>
              <li>
                <a href='/' className='text-gray-700 hover:text-gray-900'>
                  About Us
                </a>
              </li>
            </ul>
          </div>
          <div className='w-full md:w-1/4 mb-6'>
            <h6 className='font-bold mb-2'>Subscribe</h6>
            <p className='text-gray-700 mb-2'>
              Get access to subscriber exclusive deals and be the first who gets
              informed about fresh sales.
            </p>
            <form className='flex'>
              <input
                type='email'
                placeholder='Enter your email'
                className='w-full px-4 py-2 border rounded-l-md focus:outline-none'
              />
              <button
                type='submit'
                className='px-4 py-2 bg-black text-white rounded-r-md'>
                SUBSCRIBE
              </button>
            </form>
            <div className='mt-2 flex items-center'>
              <input type='checkbox' id='terms' className='mr-2' />
              <label htmlFor='terms' className='text-gray-700'>
                I agree with the{' '}
                <a href='/' className='text-blue-500 hover:underline'>
                  Terms and Conditions
                </a>
              </label>
            </div>
          </div>
        </div>
        <div className='text-center text-gray-500 mt-8'>
          All rights reserved. Copyright © 2024 Material Tailwind
        </div>
      </div>
    </footer>
  );
}

export default Footer;
