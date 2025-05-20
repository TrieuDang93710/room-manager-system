/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

interface BannerCommonProps {
  banners?: any;
}

const BannerCommon = ({ banners }: BannerCommonProps) => {
  return (
    <div
      className='relative flex items-center justify-between w-full h-[30vh] md:h-[40vh] rounded-xl m-auto shadow-sm shadow-slate-500 z-0'
      style={{
        backgroundImage: `url(${banners?.image_url})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
    </div>
  );
};

export default BannerCommon;
