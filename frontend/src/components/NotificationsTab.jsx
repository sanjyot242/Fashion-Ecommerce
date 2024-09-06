import React from 'react';

const NotificationsTab = () => {
  return (
    <div className="flex flex-wrap gap-2 justify-center items-center px-32 py-2 w-full bg-sky-50 max-md:px-5 max-md:max-w-full">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/46e1498a8730eddd3f0adb1202aff935503ed67307b1ae49234423f1fd3a06b0?placeholderIfAbsent=true&apiKey=6075100a88d44b09b2d6c5b584a495ba" alt="" className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square" />
      <div className="self-stretch my-auto text-xs font-semibold tracking-wider leading-5 text-center text-sky-900 uppercase">
        Notifications Tab
      </div>
      <div className="flex flex-1 shrink gap-2 items-center self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/72bcf652212bae909a0705d543bef0629b5559cb37c65059088e220213771595?placeholderIfAbsent=true&apiKey=6075100a88d44b09b2d6c5b584a495ba" alt="" className="object-contain self-stretch my-auto w-3 aspect-square" />
      </div>
    </div>
  );
};

export default NotificationsTab;