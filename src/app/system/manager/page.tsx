import { Card } from '@/components/molecules/Card';
import SearchComponent from '@/components/molecules/Search';

const LessorPage = () => {
  return (
    <div className='w-full flex flex-col items-end gap-6 snap-y pt-20 md:px-3'>
      <div className='w-full dark:bg-[#1a1a1a00]'>
        <Card className='w-full dark:bg-[#ffffff00] h-1/2'>
          <p className='text-[#292929] font-bold text-[15px] pb-2 dark:text-[#e6e6e6]'>Danh sách phòng trọ</p>
          <p className='text-[#333333] font-bold text-[12px] pb-4 dark:text-[#e6e6e6]'>Nhập mô tả về thông tin phòng trọ</p>
          <div className='flex items-end justify-between'>
            <button className='text-[#dbdbdb] bg-[#6f6f6f] dark:bg-[#fff0] font-bold text-[13px] dark:text-[#d1d1d1] dark:border-[#d1d1d1] dark:border-[2px] rounded-md px-4 py-1 hover:bg-[#e4e4e4] hover:text-[#232323] dark:hover:bg-[#e4e4e4] dark:hover:text-[#232323]'>
              Thêm Mới
            </button>
            <SearchComponent /> 
          </div>
          {/* <TableComponent /> */}
        </Card>
      </div>
    </div>
  );
};

export default LessorPage;
