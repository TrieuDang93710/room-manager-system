/* eslint-disable @typescript-eslint/no-explicit-any */
import { ClockCircleOutlined, HeartOutlined, SortAscendingOutlined } from '@ant-design/icons';

interface ApplyCardProps {
  postItem: any;
  onClick: () => void;
  expired: number;
  days: number;
}

const ApplyCard = ({ postItem, onClick, expired, days }: ApplyCardProps) => {
  return (
    <div className='w-full flex flex-col items-center justify-start p-2 gap-3'>
      {Array.from({ length: 1 }).map((_, index) => (
        <div
          key={index + 1}
          className='w-full border border-blue-600 rounded-sm cursor-default flex flex-col items-start justify-start'
        >
          <div className='w-full flex flex-col items-start gap-4 p-2'>
            <h3 className='text-[26px] text-black dark:text-blue-600 font-bold line-clamp-2'>
              {postItem && postItem!.title}
            </h3>
            <div className='w-full flex flex-row justify-start gap-4'>
              <div className='flex flex-row items-center justify-start gap-2'>
                <SortAscendingOutlined className='font-bold p-2 rounded-full bg-blue-500 text-white hover:bg-blue-200 hover:text-blue-600' />
                <p className='w-full flex flex-col items-start text-[14px] text-black dark:text-blue-600 text-start font-bold line-clamp-3 leading-6'>
                  <strong className='font-normal'>Muc luong : </strong>
                  <span className='dark:text-white'>
                    {postItem && !postItem.salary ? 'Thoa thuan' : postItem && !postItem.salary}
                  </span>
                </p>
              </div>
              <div className='flex flex-row items-center justify-start gap-2'>
                <SortAscendingOutlined className='font-bold p-2 rounded-full bg-blue-500 text-white hover:bg-blue-200 hover:text-blue-600' />
                <p className='w-full flex flex-col items-start text-[14px] text-black dark:text-blue-600 text-start font-bold line-clamp-3 leading-6'>
                  <strong className='font-normal'>Dia diem : </strong>
                  <span className='dark:text-white'>{postItem && postItem!.company.work_place.address.city}</span>
                </p>
              </div>
              <div className='flex flex-row items-center justify-start gap-2'>
                <SortAscendingOutlined className='font-bold p-2 rounded-full bg-blue-500 text-white hover:bg-blue-200 hover:text-blue-600' />
                <p className='w-full flex flex-col items-start text-[14px] text-black dark:text-blue-600 text-start font-bold line-clamp-3 leading-6'>
                  <strong className='font-normal'>Kinh nghiem : </strong>
                  <span className='dark:text-white'>{postItem && postItem!.require.experience}</span>
                </p>
              </div>
            </div>
            <div className='w-full flex flex-col justify-between py-4 gap-4'>
              <div className='sm:w-3/4 w-full flex flex-row justify-start items-center gap-8'>
                <p className='text-[14px] text-slate-800 dark:text-blue-600 font-normal py-1 px-2 bg-[#9999993f] rounded-sm'>
                  <ClockCircleOutlined className='font-bold text-black mr-2' /> Han nop ho so :{' '}
                  <span className={`${expired < days && 'text-orange-600'}`}>
                    {expired < days ? 'Đã hết hạn ứng tuyển' : postItem && postItem.duration}
                  </span>
                </p>
              </div>
              <div className='w-full flex gap-2'>
                <button
                  onClick={onClick}
                  className='w-full px-2 py-2 rounded-sm text-white text-[16px] font-bold active:shadow-blue-500 active:shadow-sm cursor-pointer bg-blue-500 line-clamp-1'
                >
                  Ứng tuyển ngay
                </button>
                <HeartOutlined className='border border-blue-600 hover:border-blue-500 text-blue-600 rounded-md font-medium cursor-pointer py-2 px-4' />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ApplyCard;
