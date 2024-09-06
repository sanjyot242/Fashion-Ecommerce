import React from 'react';

const Navigation = () => {
  const navItems = ['Women', 'Men', 'Unisex', 'Brands', 'New', 'Sale'];

  return (
    <div className="flex flex-1 shrink gap-8 items-center self-stretch my-auto text-base tracking-tight text-gray-900 whitespace-nowrap basis-0 min-w-[240px]">
      {navItems.map((item, index) => (
        <a
          key={index}
          href={`#${item.toLowerCase()}`}
          className={`gap-2 self-stretch my-auto rounded ${item === 'Sale' ? 'text-red-600' : ''}`}
        >
          {item}
        </a>
      ))}
    </div>
  );
};

export default Navigation;