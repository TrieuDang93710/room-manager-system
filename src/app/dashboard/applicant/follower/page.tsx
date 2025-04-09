'use client';
import { PostingAgentComponent } from '@/components/organisms/system/Card/PostAgent';
import { useRouter } from 'next/navigation';

const FollowerManagerPage = () => {
  const router = useRouter();
  return (
    <div className='relative w-full h-screen bg-[#f7f7f7] dark:bg-[#242424] flex flex-col items-end gap-6 snap-y pt-20 md:px-3'>
      <div className='w-full h-fit py-3 px-3 flex-col justify-center md:gap-3 gap-y-2'>
        <div className='flex sm:flex-row flex-col sm:items-center sm:justify-start items-start justify-start border shadow-sm shadow-slate-500 rounded-sm px-2 py-1 gap-1'>
          <h3 className='text-[16px] text-black font-bold hover:text-blue-500 hover:underline-offset-1 cursor-default px-2 py-1'>
            Doanh nghiep dang theo doi
          </h3>
        </div>
        <div className='w-full border h-[75vh] border-green-500 flex sm:grid md:grid-cols-3 sm:grid-cols-2 flex-col items-center justify-around hide-scrollbar overflow-y-auto gap-4 p-4 mt-4'>
          {Array.from({ length: 4 }).map((_, index) => (
            <PostingAgentComponent key={index + 1} onClick={() => router.push(`/system/business/${index + 1}`)} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FollowerManagerPage;
