import React from 'react';

const SearchBar = () => {
  return (
    <form className="flex flex-col flex-1 shrink self-stretch my-auto text-sm leading-none text-gray-500 whitespace-nowrap basis-0 min-w-[240px]">
      <div className="flex gap-2 items-center p-2 w-full rounded border border-gray-200 border-solid">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e86c60e59f889941c497e1a9f216074fe5751e3236f18a9df7b542329c83ced8?placeholderIfAbsent=true&apiKey=6075100a88d44b09b2d6c5b584a495ba" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
        <label htmlFor="search" className="sr-only">Search</label>
        <input
          type="search"
          id="search"
          placeholder="Search"
          className="flex-1 shrink self-stretch my-auto min-w-[240px] bg-transparent border-none outline-none"
        />
      </div>
    </form>
  );
};

export default SearchBar;