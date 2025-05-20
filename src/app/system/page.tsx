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
import SyntheticComponent from './components/Synthetic';
import useBusiness from '@/hooks/useBusiness';
import usePost from '@/hooks/usePost';
import useServicePackage from '@/hooks/usePackage';
import useNews from '@/hooks/useNews';

const SystemPage = () => {
  const { useBusinessSearch } = useBusiness();
  const { usePostsSearch } = usePost();
  const { packages } = useServicePackage();
  const { newses } = useNews();
  const { businesses } = useBusinessSearch({});
  const { posts } = usePostsSearch({});

  return (
    <main className='relative w-full min-h-screen md:px-10 px-3 pt-20 font-[family-name:var(--font-geist-sans)] flex flex-col justify-start items-center z-10'>
      <BannerCarousel />
      <PostRender />
      <PolicyUs />
      <NewsSlide />
      <div className='w-[90%] flex sm:grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 flex-col items-center justify-around gap-4 py-10 my-4'>
        <SyntheticComponent title='Số lượng công ty đã đăng ký' value={businesses.length} />
        <SyntheticComponent title='Số lượng bài đăng công việc' value={posts.length} />
        <SyntheticComponent title='Số lượng gói dịch vụ hệ thống' value={packages.length} />
        <SyntheticComponent title='Tổng tin tức nỗi bậc' value={newses.length} />
      </div>
      <RecruitmentRepresentative />
      <ReviewUs />
      <ServicePackage />
    </main>
  );
};

export default SystemPage;
