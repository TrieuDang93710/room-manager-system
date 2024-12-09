'use client';
import { Card } from '@/components/molecules/Card';

const FollowerManagerPage = () => {
  return (
    <div className='w-full flex flex-col items-end gap-6 snap-y pt-20 md:px-3'>
      <div className='md:w-[84%] w-full dark:bg-[#1a1a1a00] md:pr-10'>
        <Card className='w-full dark:bg-[#ffffff00] h-1/2'>
          <p className='text-[#292929] font-bold text-[15px] pb-2 dark:text-[#e6e6e6]'>Nguoi da theo gioi</p>
          <p className='text-[#333333] font-bold text-[12px] pb-4 dark:text-[#e6e6e6]'>descriptions</p>
        </Card>
      </div>
    </div>
  );
};

export default FollowerManagerPage;
