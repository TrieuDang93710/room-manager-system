'use client';
import PostCardRow from '@/components/organisms/FuncSystem/Card/PostCardRow';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const HistoryManagerPage = () => {
  const router = useRouter();
  console.log('router: ', router);
  const [applied] = useState<boolean>(false);

  return (
    <div className='relative w-full h-screen bg-[#f7f7f7] dark:bg-[#242424] flex flex-col items-end gap-6 snap-y pt-20 md:px-3'>
      <div className='w-full h-fit py-3 px-3 flex-col justify-center md:gap-3 gap-y-2'>
        <div className='w-full flex sm:flex-row flex-col sm:items-center sm:justify-between items-start justify-start border shadow-sm shadow-slate-500 rounded-sm px-2 py-1 gap-1'>
          <h3 className='text-[16px] text-black font-bold hover:text-blue-500 hover:underline-offset-1 cursor-default p-2'>
            Trang thai bai dang ung tuyen
          </h3>
          <div className='border border-slate-400 hover:border-green-500 cursor-pointer rounded-sm px-4 py-1'>
            <select className='px-2 border-none bg-transparent' name='' id=''>
              <option className='border-none bg-transparent checked:bg-transparent' value=''>
                Trạng thái
              </option>
              <option className='border-none bg-transparent checked:bg-transparent' value='applied'>
                Đã ứng tuyển
              </option>
            </select>
          </div>
        </div>
        <div className='w-full border h-[70vh] border-green-500 flex flex-col items-center justify-start overflow-y-auto gap-4 p-4 mt-4'>
          {Array.from({ length: 3 }).map((_, index) => (
            <PostCardRow key={index} applied={applied} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HistoryManagerPage;
