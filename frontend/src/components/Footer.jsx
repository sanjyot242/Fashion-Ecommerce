// import React from 'react';

// function Footer() {
//   return (
//     <footer className='bg-white py-8'>
//       <div className='container mx-auto px-4'>
//         <div className='flex flex-wrap justify-between'>
//           <div className='w-full md:w-1/4 mb-6'>
//             <h6 className='font-bold mb-2'>Company</h6>
//             <ul>
//               <li>
//                 <a href='/' className='text-gray-700 hover:text-gray-900'>
//                   About Us
//                 </a>
//               </li>
//               <li>
//                 <a href='/' className='text-gray-700 hover:text-gray-900'>
//                   Careers
//                 </a>
//               </li>
//               <li>
//                 <a href='/' className='text-gray-700 hover:text-gray-900'>
//                   Premium Tools
//                 </a>
//               </li>
//               <li>
//                 <a href='/' className='text-gray-700 hover:text-gray-900'>
//                   Blog
//                 </a>
//               </li>
//             </ul>
//           </div>
//           <div className='w-full md:w-1/4 mb-6'>
//             <h6 className='font-bold mb-2'>Pages</h6>
//             <ul>
//               <li>
//                 <a href='/login' className='text-gray-700 hover:text-gray-900'>
//                   Login
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href='/register'
//                   className='text-gray-700 hover:text-gray-900'>
//                   Register
//                 </a>
//               </li>
//               <li>
//                 <a href='/' className='text-gray-700 hover:text-gray-900'>
//                   Add List
//                 </a>
//               </li>
//               <li>
//                 <a href='/' className='text-gray-700 hover:text-gray-900'>
//                   Contact
//                 </a>
//               </li>
//             </ul>
//           </div>
//           <div className='w-full md:w-1/4 mb-6'>
//             <h6 className='font-bold mb-2'>Legal</h6>
//             <ul>
//               <li>
//                 <a href='/' className='text-gray-700 hover:text-gray-900'>
//                   Terms
//                 </a>
//               </li>
//               <li>
//                 <a href='/' className='text-gray-700 hover:text-gray-900'>
//                   Privacy
//                 </a>
//               </li>
//               <li>
//                 <a href='/' className='text-gray-700 hover:text-gray-900'>
//                   Team
//                 </a>
//               </li>
//               <li>
//                 <a href='/' className='text-gray-700 hover:text-gray-900'>
//                   About Us
//                 </a>
//               </li>
//             </ul>
//           </div>
//           <div className='w-full md:w-1/4 mb-6'>
//             <h6 className='font-bold mb-2'>Subscribe</h6>
//             <p className='text-gray-700 mb-2'>
//               Get access to subscriber exclusive deals and be the first who gets
//               informed about fresh sales.
//             </p>
//             <form className='flex'>
//               <input
//                 type='email'
//                 placeholder='Enter your email'
//                 className='w-full px-4 py-2 border rounded-l-md focus:outline-none'
//               />
//               <button
//                 type='submit'
//                 className='px-4 py-2 bg-black text-white rounded-r-md'>
//                 SUBSCRIBE
//               </button>
//             </form>
//             <div className='mt-2 flex items-center'>
//               <input type='checkbox' id='terms' className='mr-2' />
//               <label htmlFor='terms' className='text-gray-700'>
//                 I agree with the{' '}
//                 <a href='/' className='text-blue-500 hover:underline'>
//                   Terms and Conditions
//                 </a>
//               </label>
//             </div>
//           </div>
//         </div>
//         <div className='text-center text-gray-500 mt-8'>
//           All rights reserved. Copyright © 2024 Material Tailwind
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;

// import React from 'react';

// const Footer = () => {
//   const socialIcons = [
//     { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/9c6ad34a30feb4580891a17a84cfc95496eaf0b74f525d211753f2eae833afd7?placeholderIfAbsent=true&apiKey=6075100a88d44b09b2d6c5b584a495ba", alt: "Facebook" },
//     { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/806d75f2bfb40a63ce680984099fec613742ee91e61976d5439cb187191ccdeb?placeholderIfAbsent=true&apiKey=6075100a88d44b09b2d6c5b584a495ba", alt: "Twitter" },
//     { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/6da4a918199a919b5719eab732bf361b9125a20b0539062f03656c0b64706b10?placeholderIfAbsent=true&apiKey=6075100a88d44b09b2d6c5b584a495ba", alt: "Instagram" },
//     { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/7becff92555c8bdb7134c7048558390d468416ead8a86effefb520e46765c4e7?placeholderIfAbsent=true&apiKey=6075100a88d44b09b2d6c5b584a495ba", alt: "LinkedIn" }
//   ];

//   const customerServiceLinks = [
//     "Contact us", "FAQs", "Orders and delivery", "Returns and refunds",
//     "Payment and pricing", "Cryptocurrency payments", "Promotion terms and conditions",
//     "ROOTSPACE Customer Promise"
//   ];

//   const aboutLinks = [
//     "About us", "Investors", "Rootspace partner boutiques", "Careers",
//     "Modern slavery statement"
//   ];

//   const footerLinks = ["Privacy policy", "Terms and conditions", "Sitemap"];

//   return (
//     <footer className="flex flex-col px-32 py-16 w-full bg-gray-900 max-md:px-5 max-md:max-w-full">
//       <div className="flex gap-2 items-center max-w-full w-[152px]">
//         <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/0e240cd0270a20f9189bef27f6d2f50e222c2cd80cf3b22fd2ed7b3d54b059ff?placeholderIfAbsent=true&apiKey=6075100a88d44b09b2d6c5b584a495ba" alt="Rootspace logo" className="object-contain self-stretch my-auto aspect-[1.01] w-[152px]" />
//       </div>
//       <div className="flex flex-wrap gap-10 items-start mt-8 w-full text-white max-md:max-w-full">
//         <div className="flex flex-col min-w-[240px]">
//           <h2 className="mr-24 text-2xl tracking-tighter leading-none">Rootspace Website</h2>
//           <p className="mt-4 text-base tracking-tight">Rootspace Website</p>
//           <div className="flex gap-8 items-center mt-8 text-2xl tracking-tighter leading-none">
//             <span className="self-stretch my-auto">Follow us: </span>
//             {socialIcons.map((icon, index) => (
//               <a key={index} href="#" aria-label={icon.alt}>
//                 <img loading="lazy" src={icon.src} alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
//               </a>
//             ))}
//           </div>
//         </div>
//         <div className="flex flex-col flex-1 shrink basis-0">
//           <h2 className="text-2xl tracking-tighter leading-none">Destination/Currency</h2>
//           <div className="flex gap-4 items-start self-start mt-4 text-base tracking-tight">
//             <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9790c0a6ae7db789fce81fef9cb8e8ea71a1c3cb83eca976c64824223b0916a1?placeholderIfAbsent=true&apiKey=6075100a88d44b09b2d6c5b584a495ba" alt="Flag" className="object-contain shrink-0 w-6 aspect-square" />
//             <span>India, Rupee, INR</span>
//           </div>
//         </div>
//         <nav className="flex flex-col flex-1 shrink items-start text-base tracking-tight basis-0">
//           <h2 className="self-stretch text-2xl tracking-tighter leading-none">Customer Service</h2>
//           {customerServiceLinks.map((link, index) => (
//             <a key={index} href="#" className="gap-2 self-stretch mt-4 rounded">
//               {link}
//             </a>
//           ))}
//         </nav>
//         <nav className="flex flex-col flex-1 shrink items-start text-base tracking-tight basis-0">
//           <h2 className="self-stretch text-2xl tracking-tighter leading-none">About Rootspace</h2>
//           {aboutLinks.map((link, index) => (
//             <a key={index} href="#" className="gap-2 self-stretch mt-4 rounded">
//               {link}
//             </a>
//           ))}
//         </nav>
//       </div>
//       <nav className="flex flex-wrap gap-4 items-center mt-8 w-full text-base tracking-tight text-white max-md:max-w-full">
//         {footerLinks.map((link, index) => (
//           <a key={index} href="#" className="gap-2 self-stretch my-auto rounded">
//             {link}
//           </a>
//         ))}
//       </nav>
//     </footer>
//   );
// };

// export default Footer;

import React from 'react';
import Logo from './Logo';
import SocialLinks from './SocialLinks';
import AccordionItem from './AccordionItem';
import '../index.css';

function Footer() {
  return (
    <footer className='flex p-16 flex-col items-start gap-32 items-stretch bg-bg-primary-inverse text-text-inverse lg:px-120 lg:py-64  '>
      <Logo />
      <div className='flex flex-col   gap-32 lg:gap-[100px] items-start lg:flex-row '>
        <div className='flex flex-col gap-32 items-start'>
          <div className='flex flex-col gap-16'>
            <h2 className='headingsh5regular'>Rootspace Website</h2>
            <p className='paragraphmediumregular'>Rootspace Website</p>
          </div>
          <SocialLinks />
        </div>
        <AccordionItem title='Customer Service' />
        <AccordionItem title='About Rootspace' />

        <div className='flex flex-col gap-16 items-starts'>
          <h2 className='headingsh5regular'>Destination/Currency</h2>
          <div className='flex gap-16 items-start '>
            <img
              loading='lazy'
              src='https://cdn.builder.io/api/v1/image/assets/TEMP/544000ce0ad6af8cb84c2ae1754e46a86e7a9609121038541cf12c9fc5ab1f21?placeholderIfAbsent=true&apiKey=6075100a88d44b09b2d6c5b584a495ba'
              alt='Flag'
            />
            <span className='paragraphmediumregular'>India, Rupee, INR</span>
          </div>
        </div>
      </div>
      <div className='flex items-center self-stretch gap-16'>
        <a
          href='#'
          className='flex-1 p-none gap-8 items-center justify-center rounded-xxs paragraphsmallregular lg:flex-none lg:w-auto'>
          Privacy policy
        </a>
        <a
          href='#'
          className='flex-1 p-none gap-8 items-center justify-center rounded-xxs paragraphsmallregular lg:flex-none lg:w-auto'>
          Terms and conditions
        </a>
      </div>
    </footer>
  );
}

export default Footer;
