import React from 'react';

const UserActions = () => {
  return (
    <div className="flex gap-4 items-center self-stretch my-auto">
      <button className="flex gap-0 items-end self-stretch my-auto w-6" aria-label="User profile">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/57d6356fdaae1d457c1240c291ece398e2559b12cc39ecfffec5596b7e7a6b2b?placeholderIfAbsent=true&apiKey=6075100a88d44b09b2d6c5b584a495ba" alt="" className="object-contain self-stretch my-auto w-6 aspect-square" />
      </button>
      <button className="flex gap-0 items-end self-stretch my-auto w-6" aria-label="Favorites">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/6dc8e2d8cd5d6ad78fa3b26949187577532fa2391249d3c14cec4aa7bc767db6?placeholderIfAbsent=true&apiKey=6075100a88d44b09b2d6c5b584a495ba" alt="" className="object-contain self-stretch my-auto w-6 aspect-square" />
      </button>
      <button className="flex gap-0 items-end self-stretch my-auto w-8" aria-label="Shopping cart">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/127958962d35d29eeb3befce348b6a884860c841a9a4ced3d7bde9de58312696?placeholderIfAbsent=true&apiKey=6075100a88d44b09b2d6c5b584a495ba" alt="" className="object-contain shrink-0 gap-0 self-stretch my-auto w-8 aspect-[1.33]" />
      </button>
    </div>
  );
};

export default UserActions;