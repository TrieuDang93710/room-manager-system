/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import flex from '@/config/flex.config';
import RoomProps from '@/interfaces/room/room';
import { AppstoreAddOutlined, HeartOutlined, SaveOutlined, ShareAltOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface LessorCardProps {
  item?: RoomProps;
}

const LessorCard = ({item}: LessorCardProps) => {
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
      onClick={() => router.push(`/system/lessor-detail-page/${item?._id}`)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className='w-full h-[50vh] sm:w-1/2 md:w-1/4 border-[2px] border-slate-300 hover:shadow-md hover:shadow-slate-900 dark:hover:shadow-slate-100 active:shadow-slate-100 flex flex-col items-center justify-center'
      style={{
        backgroundImage: `url('https://archiadvisor.com/wp-content/uploads/2019/02/interior-layout.jpg')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className='relative w-full h-full bg-gradient-to-t from-green-700 dark:from-slate-800 to-transparent'>
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
          className={
            'absolute bottom-0 gap-3 w-full h-1/5 p-2 bg-gradient-to-r from-slate-100 dark:from-slate-800 to-slate-50 dark:to-slate-700' +
            flex({ justifyContent: 'between' })
          }
        >
          <ul className={'w-full px-2 ' + flex({ direction: 'row', alignItems: 'center', justifyContent: 'between' })}>
            <li className={flex({ direction: 'col', alignItems: 'center' })}>
              <h3 className='text-[14px] font-bold'>Room of num</h3>
              <p className='text-[12px] font-normal'>Room: 7</p>
            </li>
            <li className={flex({ direction: 'col', alignItems: 'center' })}>
              <h3 className='text-[14px] font-bold'>Rent</h3>
              <p className='text-[12px] font-normal'>Room: 2</p>
            </li>
            <li className={flex({ direction: 'col', alignItems: 'center' })}>
              <h3 className='text-[14px] font-bold'>Empty</h3>
              <p className='text-[12px] font-normal'>Room: 5</p>
            </li>
          </ul>
        </div>
        <div className={'absolute left-4 bottom-1/3 p-2 gap-2 ' + flex({ direction: 'col' })}>
          <h2 className='text-2xl font-bold text-slate-100'>Nguyen van An</h2>
          <p className='text-[14px] font-bold text-start line-clamp-2 text-slate-100 pr-10'>
            Hoa Cuong Nam, Hai Chau, Da Nang
          </p>
          <p className='w-1/2 text-[18px] font-bold text-center text-slate-300 border-[2px] border-slate-400 hover:border-slate-100 hover:text-slate-100 rounded-md'>
            follow
          </p>
        </div>
      </div>
    </div>
  );
};

export default LessorCard;
