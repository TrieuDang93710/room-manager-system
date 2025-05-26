/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from '@/components/ui/button';
import useField from '@/hooks/useFeild';
import { ArrowRightOutlined, CloseOutlined, SearchOutlined } from '@ant-design/icons';
import Link from 'next/link';

interface CategoryCardProps {
  openCategoryCard: boolean;
  setOpenCategoryCard: (value: boolean) => void;
}

const CategoryCard = ({ openCategoryCard, setOpenCategoryCard }: CategoryCardProps) => {
  const { fields } = useField();
  return (
    <div
      className={`absolute top-20 w-full md:h-[60vh] h-[5vh] flex flex-col items-center justify-start bg-white md:rounded-2xl rounded-xl py-4 px-4 gap-2 z-20 ${openCategoryCard ? 'translate-y-full opacity-0 hidden duration-700' : 'translate-y-0 opacity-100 duration-500'}`}
    >
      <div className='w-full flex flex-row items-center justify-between'>
        <h3 className='text-[16px] font-medium text-black hover:text-blue-600 px-2'>
          Chọn nhóm nghề, nghề hoặc vị trí chuyên môn
        </h3>
        <CloseOutlined
          onClick={() => setOpenCategoryCard(!openCategoryCard)}
          className='p-2 text-[12px] text-black bg-slate-100 rounded-full'
        />
      </div>
      <div className='w-full flex flex-row items-center border border-slate-300 focus:border-blue-600 rounded-xl py-1 px-2 gap-2'>
        <SearchOutlined className='cursor-pointer' />
        <input type='text' className='w-full h-full focus:outline-blue-600 px-2 py-1' />
      </div>
      <div className='w-full flex flex-row items-start justify-between gap-2'>
        <div className='w-[30%] flex flex-col items-start justify-start border-r border-r-slate-300'>
          <h3 className='w-full text-[16px] font-medium text-slate-400 hover:text-blue-600 py-1 border-b border-b-slate-300'>
            Nhóm nghề
          </h3>
          <ul className='w-full h-[30vh] list-none list-inside flex flex-col items-start justify-start pb-3 overflow-y-auto hide-scrollbar gap-2'>
            {fields.map((item: any) => (
              <li key={item.id} className='w-full flex flex-row items-center justify-start py-2 rounded-md'>
                <input type='checkbox' className='size-5 outline-black' />
                <Link
                  href={'#'}
                  className='w-full text-[14px] font-medium text-black hover:text-blue-600 flex items-center justify-between px-4'
                >
                  <p>{item.title}</p> <ArrowRightOutlined />
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className='w-[70%] flex flex-row items-start justify-start'>
          <div className='w-full flex flex-row items-center justify-start border-b border-b-slate-300'>
            <h3 className='w-[30%] text-[16px] font-medium text-slate-400 hover:text-blue-600 py-1'>Nghề</h3>
            <h3 className='w-[30%] text-[16px] font-medium text-slate-400 hover:text-blue-600 py-1'>
              Vị trí chuyên môn
            </h3>
          </div>
        </div>
      </div>
      <div className='absolute bottom-0 w-full flex flex-row items-center justify-between border-t border-t-slate-300 p-2'>
        <p className='text-[13px] text-slate-600 font-medium'>
          Bạn có vấn đề với danh mục nghề ?
          <Link href={'#'} className='text-[13px] text-blue-600'>
            Gửi góp ý
          </Link>
        </p>
        <div className='w-[40%] flex flex-row items-center justify-end gap-4'>
          <p className='text-[13px] text-slate-400 font-medium'>Bỏ chọn tất cả</p>
          <div className='w-[60%] flex flex-row items-center justify-between gap-2 border-l border-l-slate-400 pl-4'>
            <Button
              onClick={() => alert('Click me')}
              className='w-[50%] text-black border-slate-400 hover:border-blue-600 hover:text-blue-600 font-bold text-center rounded-full px-4'
              variant={'outline'}
              size={'sm'}
            >
              Hủy
            </Button>
            <Button
              onClick={() => alert('Click me')}
              className='w-[50%] text-white bg-blue-600 hover:text-blue-600 font-bold text-center rounded-full px-6'
              variant={'outline'}
              size={'sm'}
            >
              Chọn
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
