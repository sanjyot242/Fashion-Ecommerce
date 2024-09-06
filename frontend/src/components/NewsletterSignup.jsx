import React from 'react';

const NewsletterSignup = () => {
  return (
    <section className="flex flex-col justify-center px-32 py-16 w-full max-md:px-5 max-md:max-w-full">
      <div className="flex flex-wrap gap-8 items-start py-4 w-full max-md:max-w-full">
        <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px] max-md:max-w-full">
          <h2 className="text-3xl font-medium tracking-tighter leading-none text-gray-900 max-md:max-w-full">
            Never miss an update
          </h2>
          <p className="mt-2 text-base tracking-tight text-slate-600 max-md:max-w-full">
            Signup for promotions, new arrivals, updates and more - straight to your inbox
          </p>
        </div>
        <form className="flex flex-col min-w-[240px] w-[488px] max-md:max-w-full">
          <div className="flex flex-col w-full text-base tracking-tight max-w-[488px] max-md:max-w-full">
            <label htmlFor="email" className="flex gap-0.5 items-center self-start font-semibold tracking-tighter text-gray-900 whitespace-nowrap">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email address"
              className="flex gap-2 items-center p-2 mt-2 w-full text-gray-500 rounded border border-gray-200 border-solid max-md:max-w-full"
              required
            />
            <div className="flex flex-wrap gap-1 items-start mt-2 w-full leading-6 text-slate-600 max-md:max-w-full">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/bc3e239e7365e07d60ce75dfe19e9d100026c16e1647b14203db1b1cdd576503?placeholderIfAbsent=true&apiKey=6075100a88d44b09b2d6c5b584a495ba" alt="" className="object-contain shrink-0 aspect-square w-[18px]" />
              <div className="flex-1 shrink basis-0 max-md:max-w-full">
              We will be sending you regular updates about offers and new arrivals. If you don't wish to receive them, you can opt out by clicking on Unsubscribe link in the email
            </div>
          </div>
        </div>
        <button type="submit" className="gap-2 self-stretch px-5 py-2.5 mt-8 max-w-full text-sm leading-none text-white whitespace-nowrap bg-gray-900 rounded shadow-sm w-[488px]">
          Signup
        </button>
      </form>
    </div>
  </section>
);
};

export default NewsletterSignup;