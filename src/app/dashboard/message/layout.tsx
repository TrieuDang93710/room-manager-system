/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import SideBarUser from './components/SideBarUser';
import React, { Suspense } from 'react';
import Loading from '../loading';

interface MessageLayoutProps {
  children: React.ReactNode;
}

const MessageLayout = ({ children }: MessageLayoutProps) => {
  return (
    <div className='w-full h-screen bg-[#f7f7f7] dark:bg-slate-900 flex flex-col items-end gap-2 snap-y pt-20 md:px-3'>
      <div className='w-full h-full py-3 px-3 flex flex-col justify-start items-end md:gap-3 gap-y-2'>
        <div className='w-full flex sm:flex-row flex-col sm:items-center sm:justify-start items-start justify-start bg-blue-100 border shadow-sm shadow-slate-500 dark:border-none dark:bg-blue-800 rounded-sm px-2 py-1 gap-1'>
          <h3 className='text-[16px] text-black dark:text-white font-bold hover:text-blue-500 hover:underline-offset-1 cursor-default px-2 py-1'>
            Nhan tin
          </h3>
        </div>
        <div className='w-full flex flex-row justify-between bg-blue-100 dark:bg-blue-800 p-4 gap-2'>
          <SideBarUser />
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </div>
      </div>
    </div>
  );
};

export default MessageLayout;
