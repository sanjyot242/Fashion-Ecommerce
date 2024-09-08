import React, { useState, useEffect } from 'react';

function AccordionItem({ title }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  // Check if screen size is larger than the desktop breakpoint
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsDesktop(true);
        setIsOpen(true); // Always open in desktop
      } else {
        setIsDesktop(false);
        setIsOpen(false); // Can toggle in mobile
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Check on component mount

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='flex-col overflow-hidden items-center w-full headingsh5regular gap-16'>
      {/* Hide button on larger screens (desktop) */}
      {!isDesktop && (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='flex flex-1 justify-between items-center w-full text-left'
          aria-expanded={isOpen}>
          <span className='flex-1 shrink self-stretch my-auto min-w-[240px]'>
            {title}
          </span>
          <img
            loading='lazy'
            src='https://cdn.builder.io/api/v1/image/assets/TEMP/4c3de7eca54226c591c8f88932184617c0bc731a5710e4c44c685f5d7b534d07?placeholderIfAbsent=true&apiKey=6075100a88d44b09b2d6c5b584a495ba'
            alt=''
            className={`object-contain shrink-0 self-stretch my-auto w-5 aspect-square transition-transform ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        </button>
      )}

      {/* Show content depending on the title and if it's open or in desktop mode */}
      {(isOpen || isDesktop) && (
        <>
          {title === 'Customer Service' && (
            <div className='flex flex-col items-start gap-16'>
              <button className='p-none justify-center items-center gap-8 rounded-xxs paragraphmediumregular mt-16'>
                Contact Us
              </button>
              <button className='p-none justify-center items-center gap-8 rounded-xxs paragraphmediumregular'>
                FAQs
              </button>
              <button className='p-none justify-center items-center gap-8 rounded-xxs paragraphmediumregular'>
                Orders and Delivery
              </button>
              <button className='p-none justify-center items-center gap-8 rounded-xxs paragraphmediumregular'>
                Returns and refunds
              </button>
              <button className='p-none justify-center items-center gap-8 rounded-xxs paragraphmediumregular'>
                Promotion terms and Conditions
              </button>
              <button className='p-none justify-center items-center gap-8 rounded-xxs paragraphmediumregular'>
                ROOTSPACE Customer Promise
              </button>
            </div>
          )}
          {title === 'About Rootspace' && (
            <div className='flex flex-col items-start gap-16'>
              <button className='p-none justify-center items-center gap-8 rounded-xxs paragraphmediumregular mt-16'>
                About Us
              </button>
              <button className='p-none justify-center items-center gap-8 rounded-xxs paragraphmediumregular'>
                Investors
              </button>
              <button className='p-none justify-center items-center gap-8 rounded-xxs paragraphmediumregular'>
                Careers
              </button>
              <button className='p-none justify-center items-center gap-8 rounded-xxs paragraphmediumregular'>
                Modern Slavery Statement
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default AccordionItem;
