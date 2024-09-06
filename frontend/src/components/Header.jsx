// import React from 'react';
// import cartImg from '../assets/cart.jpg';
// import { Link } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// function Header() {
//   const { token } = useSelector((state) => state.auth);

//   return (
//     <header className='bg-white shadow'>
//       <div className='container mx-auto px-4 py-4 flex justify-between items-center'>
//         <div className='text-2xl font-bold'>Title</div>
//         <nav className='flex space-x-4'>
//           <Link to='/' className='text-gray-700 hover:text-gray-900'>
//             Home
//           </Link>
//           <Link to='/products' className='text-gray-700 hover:text-gray-900'>
//             Products
//           </Link>
//           {!token ? (
//             <Link to='/login' className='text-gray-700 hover:text-gray-900'>
//               Login/Signup
//             </Link>
//           ) : (
//             <Link to='/profile' className='text-gray-700 hover:text-gray-900'>
//               Profile
//             </Link>
//           )}
//           {/* <Link to='/signup' className='text-gray-700 hover:text-gray-900'>
//             Sign Up
//           </Link> */}
//           <Link to='/cart'>
//             <img className='object-contain w-6 h-6' src={cartImg} alt='' />
//           </Link>
//         </nav>
//       </div>
//     </header>
//   );
// }

// export default Header;


import React from 'react';
import NotificationsTab from './NotificationsTab';
import Navigation from './Navigation';
import SearchBar from './SeachBar';
import UserActions from './UserActions';

const Header = () => {
  return (
    <header className="flex overflow-hidden flex-col bg-white">
      <NotificationsTab />
      <nav className="flex flex-wrap gap-10 justify-center items-center px-32 py-0 w-full bg-white shadow-lg max-md:px-5 max-md:max-w-full">
        <div className="flex gap-2 items-center self-stretch py-4 my-auto w-36">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/1bff7bb7c180b284ffba00bc35e07564e8e2c1265b211860d2dea5e184b18f46?placeholderIfAbsent=true&apiKey=6075100a88d44b09b2d6c5b584a495ba" alt="Company logo" className="object-contain self-stretch my-auto w-36 aspect-[4.24]" />
        </div>
        <Navigation />
        <SearchBar />
        <UserActions />
      </nav>
    </header>
  );
};

export default Header;