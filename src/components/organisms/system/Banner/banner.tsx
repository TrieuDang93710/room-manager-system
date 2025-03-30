import BannerInterface from '@/interfaces/banner/banner';
import React from 'react';

interface BannerCommonProps {
  banners?: BannerInterface;
}

const BannerCommon = ({ banners }: BannerCommonProps) => {
  return (
    <div
      className='relative flex items-center justify-between w-full h-[40vh] md:h-[60vh] m-auto shadow-sm shadow-slate-500 z-0'
      style={{
        // backgroundImage: `url('../public/images/banner_1.jpg')`,
        backgroundImage: `url(${banners?.image_url})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* <Image src='@/public/images/banner_1.jpg' width='100' height='100' alt={''} /> */}
      {/* <div className='sm:flex hidden flex-col items-start justify-center gap-4 px-4 h-full md:w-[40%] w-1/2 bg-[#1afe1a9b] dark:bg-[#1e1e1e96] rounded-tr-full bg-gradient-to-tr from-[#f7f7f7f1] dark:from-[#2f2f2f21] to-transparent'>
        <Button
          className='w-[30%] bg-green-700 dark:text-slate-50 hover:bg-transparent hover:border-[2px] hover:border-[#007f04] hover:text-green-800'
          variant='primary'
          size='msm'
        >
          Đăng ký ngay
        </Button>
        <h1 className='text-6xl font-bold text-green-700'>Việc Làm Sinh Viên</h1>
      </div>
      <div className='flex flex-col items-start justify-start gap-3 sm:w-[45%] w-full sm:pl-0 pl-10 pr-10'>
        <h1 className='text-3xl md:text-6xl font-bold text-white'>{banners?.title}</h1>
        <h3 className='text-xl md:text-4xl font-bold text-white'>{banners?.subTitle}</h3>
        <p className='text-[16px] md:text-2xl font-bold text-white'>{banners?.descriptions}</p>
        <div className='flex gap-2'>
          <Button
            className='bg-green-500 dark:text-slate-50 hover:bg-green-700 hover:bg-transparent hover:border-[2px] hover:border-[#007f04]'
            variant='primary'
            size='msm'
          >
            Read more
          </Button>
          <Button
            className='sm:hidden block bg-green-500 dark:text-slate-50 hover:bg-green-700 hover:bg-transparent hover:border-[2px] hover:border-[#007f04]'
            variant='primary'
            size='msm'
          >
            Dang ky ngay
          </Button>
        </div>
      </div> */}
    </div>
  );
};

export default BannerCommon;
