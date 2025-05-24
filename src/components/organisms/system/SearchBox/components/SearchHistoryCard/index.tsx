import { ArrowRightOutlined, CloseOutlined } from '@ant-design/icons';
import Link from 'next/link';

import lightning from '@/public/images/lightning-svgrepo-com.svg'
import Image from 'next/image';

interface SearchHistoryCardProps {
  openSearchHistoryCard: boolean;
  setOpenSearchHistoryCard: (value: boolean) => void;
}

const SearchHistoryCard = ({ openSearchHistoryCard, setOpenSearchHistoryCard }: SearchHistoryCardProps) => {
  return (
    <div
      className={`absolute top-16 right-8 w-[80%] md:h-[60vh] h-fit flex flex-col items-center justify-start bg-white md:rounded-2xl rounded-xl shadow-sm shadow-slate-600 py-4 px-4 gap-2 z-20 ${openSearchHistoryCard ? 'translate-y-full opacity-0 hidden duration-700' : 'translate-y-0 opacity-100 duration-500'}`}
    >
      <div className='w-full flex flex-row items-center justify-between'>
        <h3 className='text-[16px] font-medium text-black hover:text-blue-600 px-2'>Tìm kiếm theo:</h3>
        <CloseOutlined
          onClick={() => setOpenSearchHistoryCard(!openSearchHistoryCard)}
          className='p-2 text-[12px] text-black bg-slate-100 rounded-full'
        />
      </div>
      <div className='w-full flex flex-row items-start justify-between gap-2'>
        <div className='w-[50%] flex flex-col items-start justify-start border-r border-r-slate-300'>
          <h3 className='w-full text-[16px] font-medium text-slate-400 hover:text-blue-600 py-1 border-b border-b-slate-300'>
            Từ khóa phổ biến:
          </h3>
          <ul className='w-full h-[40vh] list-none list-inside flex flex-col items-start justify-start pb-3 overflow-y-auto hide-scrollbar gap-2 z-10'>
            {Array.from({ length: 9 }).map((_, index) => (
              <li key={index} className='w-full flex flex-row items-center justify-start py-2 rounded-md'>
                <Image alt='' src={lightning} width={20} height={20}/>
                <Link
                  href={'#'}
                  className='w-full text-[14px] font-medium text-black hover:text-blue-600 flex items-center justify-between px-2'
                >
                  <p>Kinh doanh/Bán hàng</p> <ArrowRightOutlined />
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className='w-[50%] flex flex-row items-start justify-start'>
          <h3 className='w-full text-[16px] font-medium text-slate-400 hover:text-blue-600 py-1 border-b border-b-slate-300'>
            Việc làm bạn có thể quan tâm:
          </h3>
        </div>
      </div>
    </div>
  );
};

export default SearchHistoryCard;
