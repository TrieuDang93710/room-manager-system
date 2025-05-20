import { Button } from '@/components/ui/button';
import { ArrowRightOutlined, SearchOutlined } from '@ant-design/icons';
import Link from 'next/link';

interface AddressCardProps {
  openAddressCard: boolean;
  setOpenAddressCard: (value: boolean) => void;
}

const AddressCard = ({ openAddressCard }: AddressCardProps) => {
  return (
    <div
      className={`absolute top-16 right-20 w-[50%] md:h-[60vh] h-[5vh] flex flex-col items-center justify-start bg-white md:rounded-2xl rounded-xl py-4 px-4 gap-2 z-20 ${openAddressCard ? 'translate-y-full opacity-0 hidden duration-700' : 'translate-y-0 opacity-100 duration-500'}`}
    >
      <div className='w-full flex flex-row items-center border border-slate-300 focus:border-blue-600 rounded-xl py-1 px-2 gap-2'>
        <SearchOutlined className='cursor-pointer' />
        <input type='text' className='w-full h-full focus:outline-blue-600 px-2 py-1' />
      </div>
      <div className='w-full flex flex-row items-start justify-between gap-2'>
        <div className='w-[50%] flex flex-col items-start justify-start border-r border-r-slate-300'>
          <ul className='w-full h-[40vh] list-none list-inside flex flex-col items-start justify-start pb-3 overflow-y-auto hide-scrollbar gap-2'>
            {Array.from({ length: 4 }).map((_, index) => (
              <li key={index} className='w-full flex flex-row items-center justify-start py-2 rounded-md'>
                <input type='checkbox' className='size-5 outline-black' />
                <Link
                  href={'#'}
                  className='w-full text-[14px] font-medium text-black hover:text-blue-600 flex items-center justify-between px-4'
                >
                  <p>Đà Nẵng</p> <ArrowRightOutlined />
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className='w-[50%] flex flex-row items-start justify-start'>
          <h3 className='w-full text-[16px] font-medium text-slate-400 hover:text-blue-600 py-1 border-b border-b-slate-300'>
            Quận/Huyện
          </h3>
        </div>
      </div>
      <div className='absolute bottom-0 w-full flex flex-row items-center justify-between border-t border-t-slate-300 p-2'>
        <p className='text-[13px] text-slate-600 font-medium'>Bỏ chọn tất cả</p>
        <Button
          onClick={() => alert('Click me')}
          className='w-fit text-white bg-blue-600 hover:text-blue-600 font-bold text-center rounded-full px-6'
          variant={'outline'}
          size={'sm'}
        >
          Áp dụng
        </Button>
      </div>
    </div>
  );
};

export default AddressCard;
