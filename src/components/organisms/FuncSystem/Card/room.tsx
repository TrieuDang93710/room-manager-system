'use client'
import CurrencyFormatted from '@/config/currency.config';
import flex from '@/config/flex.config';
import RoomProps from '@/interfaces/room/room';
import { cn } from '@/lib/utils';
import { AppstoreAddOutlined, HeartOutlined, SaveOutlined, ShareAltOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface RoomCardCommonProps {
  item?: RoomProps;
  className?: string;
}

const RoomCardCommon = ({ item, className }: RoomCardCommonProps) => {
  const router = useRouter();
  const [onMouseHover, setOnMouseHover] = useState<boolean>(false);
  const handleMouseEnter = () => {
    setOnMouseHover(!onMouseHover);
  };
  const handleMouseLeave = () => {
    setOnMouseHover(!onMouseHover);
  };
  return (
    <div
      onClick={() => router.push(`/system/room/${item?._id}`)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={
        cn(
          'w-full h-[50vh] mb-5 border-[2px] border-slate-300 hover:shadow-md hover:shadow-slate-900 dark:hover:shadow-slate-100 active:shadow-slate-100 flex flex-col items-center justify-center'
        ) + className
      }
      style={{
        backgroundImage: `url('https://archiadvisor.com/wp-content/uploads/2019/02/interior-layout.jpg')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className='relative w-full h-full bg-gradient-to-t from-green-700 dark:from-slate-800 to-transparent'>
        <div
          className={`absolute left-4 w-full p-2 gap-2 ${
            onMouseHover ? `${flex({ direction: 'col' })} bottom-1/4` : 'hidden'
          }`}
        >
          <h2 className='text-2xl font-bold text-slate-100'>{item?.name}</h2>
          <h3 className='text-xl font-bold text-slate-100'>{CurrencyFormatted({ value: item?.price, code: 'VND' })}</h3>
        </div>
        <div
          className={`absolute right-2 top-2 flex gap-3 w-[50px] h-1/2 rounded-b-md p-2 bg-gradient-to-t from-[#e2e8f0ed] dark:from-slate-400 to-transparent ${flex(
            { direction: 'col', alignItems: 'center', justifyContent: 'end' }
          )} ${onMouseHover ? '' : 'hidden'}`}
        >
          <HeartOutlined className='text-2xl text-green-700 hover:p-2 rounded-full hover:bg-[#256b2945]  dark:text-slate-700' />
          <SaveOutlined className='text-2xl text-green-700 hover:p-2 rounded-full hover:bg-[#256b2945] dark:text-slate-700' />
          <AppstoreAddOutlined className='text-2xl text-green-700 hover:p-2 rounded-full hover:bg-[#256b2945] dark:text-slate-700' />
          <ShareAltOutlined className='text-2xl text-green-700 hover:p-2 rounded-full hover:bg-[#256b2945] dark:text-slate-700' />
        </div>
        <div
          className={`absolute bottom-0 gap-3 w-full h-1/5 p-2 bg-gradient-to-r from-slate-100 dark:from-slate-800 to-slate-50 dark:to-slate-700 ${
            onMouseHover ? `${flex({ justifyContent: 'between' })} animate-in` : 'hidden'
          }`}
        >
          <ul className={'w-full px-2 ' + flex({ direction: 'row', alignItems: 'center', justifyContent: 'between' })}>
            <li className={flex({ direction: 'col', alignItems: 'center' })}>
              <h3 className='text-[14px] font-bold'>Location</h3>
              <p className='text-[12px] font-normal'>Danang</p>
            </li>
            <li className={flex({ direction: 'col', alignItems: 'center' })}>
              <h3 className='text-[14px] font-bold'>Category</h3>
              <p className='text-[12px] font-normal'>Room</p>
            </li>
            <li className={flex({ direction: 'col', alignItems: 'center' })}>
              <h3 className='text-[14px] font-bold'>Lessor</h3>
              <p className='text-[12px] font-normal'>Nguyen Van An</p>
            </li>
          </ul>
        </div>
        <div
          className={`absolute left-4 bottom-1/3 p-2 gap-2 ${flex({ direction: 'col' })} ${
            onMouseHover ? 'hidden' : ''
          }`}
        >
          <h2 className='text-2xl font-bold text-slate-100'>{item?.name}</h2>
          <h3 className='text-xl font-bold text-slate-100'>{CurrencyFormatted({ value: item?.price, code: 'VND' })}</h3>
          <p className='text-[18px] font-bold text-center text-slate-300 border-[2px] border-slate-400 rounded-md'>
            Da cho thue
          </p>
        </div>
      </div>
    </div>
  );
};

export default RoomCardCommon;
