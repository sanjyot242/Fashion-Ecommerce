import React from 'react';

function Header() {
  return (
    <header className='bg-white shadow'>
      <div className='container mx-auto px-4 py-4 flex justify-between items-center'>
        <div className='text-2xl font-bold'>Title</div>
        <nav className='flex space-x-4'>
          <a href='/' className='text-gray-700 hover:text-gray-900'>
            Home
          </a>
          <a href='/products' className='text-gray-700 hover:text-gray-900'>
            Products
          </a>
          <a href='/login' className='text-gray-700 hover:text-gray-900'>
            Login
          </a>
          <a href='/signup' className='text-gray-700 hover:text-gray-900'>
            Sign Up
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
