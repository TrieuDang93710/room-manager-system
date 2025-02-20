'use client';

import { Card } from '@/components/molecules/Card';
import PaginationComponent from '@/components/molecules/Pagination/pagination';
import SearchComponent from '@/components/molecules/Search';

const HistoryManagerPage = () => {
  return (
    <div className='w-full flex flex-col items-end gap-6 snap-y pt-20 md:px-3'>
      <div className='md:w-[84%] w-full dark:bg-[#1a1a1a00] md:pr-10'>
        <Card className='w-full dark:bg-[#ffffff00] h-1/2'>
          <p className='text-[#292929] font-bold text-[15px] pb-2 dark:text-[#e6e6e6]'>Rent of History</p>
          <p className='text-[#333333] font-bold text-[12px] pb-4 dark:text-[#e6e6e6]'>descriptions</p>
          <div className='flex items-end justify-end'>
            <SearchComponent />
          </div>
          <br />
          {/* <TableComponent /> */}
        </Card>
        <div className='w-full flex justify-end py-1'>
          <PaginationComponent />
        </div>
      </div>
    </div>
  );
};

export default HistoryManagerPage;
