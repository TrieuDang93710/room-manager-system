/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import PostCardRow from '@/components/organisms/system/Card/PostCardRow';
import { useAuth } from '@/hooks/auth/useAuth';
import useApply from '@/hooks/useApply';

const HistoryManagerPage = () => {
  const { applies } = useApply();
  const { user } = useAuth();

  return (
    <div className='relative w-full h-screen flex flex-col items-end gap-6 snap-y pt-20 md:px-3'>
      <div className='w-full h-fit py-3 px-3 flex-col justify-center md:gap-3 gap-y-2'>
        <div className='w-full bg-blue-50 dark:bg-blue-800 flex sm:flex-row flex-col sm:items-center sm:justify-between items-start justify-start border dark:border-none shadow-sm shadow-slate-500 rounded-sm px-2 py-1 gap-1'>
          <h3 className='text-[16px] text-black dark:text-white font-bold hover:text-blue-500 hover:underline-offset-1 cursor-default p-2'>
            Trang thai bai dang ung tuyen
          </h3>
          <div className='border border-blue-600 hover:border-white cursor-pointer rounded-sm px-4 py-1'>
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
        <div className='w-full h-[70vh] flex flex-col items-center justify-start overflow-y-auto gap-4 p-4 mt-4'>
          {applies &&
            applies
              .filter((item: any) => item.applicant.user.email === user.email)
              .map((item: any, index: any) => (
                <PostCardRow key={index} postItem={item.post} applied={item.status[0]} />
              ))}
        </div>
      </div>
    </div>
  );
};

export default HistoryManagerPage;
