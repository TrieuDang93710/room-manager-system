'use client';
import 'react-multi-carousel/lib/styles.css';
import BannerCarousel from '@/components/organisms/system/Banner';
import PostRender from './components/PostRender';
import AboutUs from './components/About';
import ReviewUs from './components/Review';
import ServicePackage from './components/Service';
import RecruitmentRepresentative from './components/Representative';

const SystemPage = () => {
  return (
    <main className='relative w-full min-h-screen md:px-10 px-3 pt-20 font-[family-name:var(--font-geist-sans)] flex flex-col justify-start items-center z-10'>
      <BannerCarousel />
      <PostRender />
      <AboutUs />
      <div className='w-[90%] h-[40vh] relative flex flex-col items-center border border-green-500 gap-3 px-2'>
        <h2 className='text-2xl font-bold py-4'>Đánh Giá Về Chúng Tôi</h2>
      </div>
      {/* Hệ thống khuyến nghị */}
      {/* <div className='w-full relative flex flex-col items-center gap-3 px-2'>
        <h2 className='text-2xl font-bold py-4'>Hệ Thống Khuến Nghị</h2>
        <SliderCommon items={listRoom} Component={PostCardComponent} />
      </div> */}
      <div className='w-[90%] flex sm:grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 flex-col items-center justify-around gap-4 py-10'>
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index + 1}
            className='w-full h-[20vh] border-[1px] rounded-sm hover:translate-x-1 cursor-pointer border-slate-300 hover:border-green-500 flex flex-col items-center justify-center'
          >
            <p className='text-2xl font-medium'>20 Tin</p>
          </div>
        ))}
      </div>
      <RecruitmentRepresentative />
      <ReviewUs />
      <ServicePackage />
    </main>
  );
};

export default SystemPage;
