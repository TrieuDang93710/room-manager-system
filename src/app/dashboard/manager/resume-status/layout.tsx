/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import ButtonCommon from '@/components/atoms/ButtonCommon';
import PaginationComponent from '@/components/molecules/Pagination/pagination';
import SearchComponent from '@/components/molecules/Search';
import { PlusOutlined } from '@ant-design/icons';
import React from 'react';

interface ResumeStatusLayoutProps {
  children: React.ReactNode;
}

const ResumeStatusLayout = ({ children }: ResumeStatusLayoutProps) => {
  return (
    <div className='relative w-full h-screen bg-[#f7f7f7] dark:bg-slate-900 flex flex-col items-end gap-6 snap-y pt-20 md:px-3'>
      <div className='w-full py-2 px-2 flex-col justify-center md:gap-3 gap-y-2'>
        <div className='w-full flex sm:flex-row flex-col sm:items-center sm:justify-between items-start justify-start border shadow-sm shadow-slate-500 dark:border-none dark:bg-blue-800 rounded-sm px-2 gap-1'>
          <h3 className='text-[16px] text-black dark:text-white font-bold hover:text-blue-500 hover:underline-offset-1 cursor-default p-2'>
            Quản lý trạng thái ứng tuyển
          </h3>
          <div className='w-1/2 flex justify-end items-center gap-3'>
            <div className='border border-blue-600 hover:border-blue-600 cursor-pointer rounded-sm px-4 py-1'>
              <select className='px-2 border-none bg-transparent'>
                <option className='border-none bg-transparent checked:bg-transparent' value=''>
                  Trạng thái
                </option>
                <option className='border-none bg-transparent checked:bg-transparent' value='applied'>
                  Đã ứng tuyển
                </option>
              </select>
            </div>
          </div>
        </div>
        <div className='md:flex md:flex-row flex-col gap-5 items-end justify-between my-6 px-2'>
          <div className='lg:w-[50%] md:w-2/3 w-full truncate flex justify-start gap-2'>
            <ButtonCommon onClick={() => alert('click me')} icon={<PlusOutlined />} title='Word' />
            <ButtonCommon onClick={() => alert('click me')} icon={<PlusOutlined />} title='Excel' />
          </div>
          <SearchComponent />
        </div>
        {children}
        <div className='w-full flex justify-end py-1'>
          <PaginationComponent />
        </div>
      </div>
    </div>
  );
};

export default ResumeStatusLayout;
