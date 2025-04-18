/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import 'react-multi-carousel/lib/styles.css';
import BannerCarousel from '@/components/organisms/system/Banner';
import PostRender from './components/PostRender';
import PolicyUs from './components/Policy';
import ReviewUs from './components/Review';
import ServicePackage from './components/Service';
import NewsSlide from './components/NewsSlide';
import RecruitmentRepresentative from './components/Representative';

const SystemPage = () => {
  return (
    <main className='relative w-full min-h-screen md:px-10 px-3 pt-20 font-[family-name:var(--font-geist-sans)] flex flex-col justify-start items-center z-10'>
      <BannerCarousel />
      <PostRender />
      <PolicyUs />
      <NewsSlide />
      <div className='w-[90%] flex sm:grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 flex-col items-center justify-around gap-4 py-10 my-4'>
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index + 1}
            className='w-full h-[20vh] border-[1px] rounded-sm hover:translate-x-1 cursor-pointer border-blue-600 hover:border-blue-600 flex flex-col items-center justify-center'
          >
            <p className='text-2xl font-bold dark:text-blue-600'>20 Tin</p>
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
