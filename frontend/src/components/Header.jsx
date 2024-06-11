import React from 'react';
import cartImg from '../assets/cart.jpg';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
function Header() {
  const { token } = useSelector((state) => state.auth);

  return (
    <header className='bg-white shadow'>
      <div className='container mx-auto px-4 py-4 flex justify-between items-center'>
        <div className='text-2xl font-bold'>Title</div>
        <nav className='flex space-x-4'>
          <Link to='/' className='text-gray-700 hover:text-gray-900'>
            Home
          </Link>
          <Link to='/products' className='text-gray-700 hover:text-gray-900'>
            Products
          </Link>
          {!token ? (
            <Link to='/login' className='text-gray-700 hover:text-gray-900'>
              Login/Signup
            </Link>
          ) : (
            <Link to='/profile' className='text-gray-700 hover:text-gray-900'>
              Profile
            </Link>
          )}
          {/* <Link to='/signup' className='text-gray-700 hover:text-gray-900'>
            Sign Up
          </Link> */}
          <Link to='/cart'>
            <img className='object-contain w-6 h-6' src={cartImg} alt='' />
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
