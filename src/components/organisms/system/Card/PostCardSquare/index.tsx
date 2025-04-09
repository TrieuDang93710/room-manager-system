/* eslint-disable @typescript-eslint/no-explicit-any */
import { FieldTimeOutlined, HomeOutlined } from '@ant-design/icons';
import CardSquare from '../Square';
import CurrencyFormatted from '@/config/currency.config';
import ExpiredPostChecking from '@/helpers/expired-check';

interface PostCardSquareComponentProps {
  onClick?: () => void;
  post?: any;
}

export const PostCardSquareComponent = ({ onClick, post }: PostCardSquareComponentProps) => {
  const { days, expired } = ExpiredPostChecking(post!.createAt, post!.duration);
  console.log('expired: ', expired);

  return (
    <CardSquare logo={post && post.company.logo}>
      <div className='w-full px-2'>
        <p className='text-[13px] text-slate-800 font-normal'>{post!.type_of_post.title}</p>
        <h3 className='text-[18px] text-black font-bold py-2 line-clamp-2'>{post!.title}</h3>
        <p className='text-[13px] text-slate-800 font-normal py-1'>
          <HomeOutlined className='font-bold text-black mr-2' /> {post!.company.work_place.address.village}{' '}
          {post!.company.work_place.address.district} {post!.company.work_place.address.city}{' '}
          {post!.company.work_place.address.national}
        </p>
        <p className='text-[13px] text-slate-800 font-normal py-1'>
          <strong className='font-bold text-black'>Hinh thuc : </strong>
          {post!.work_type[0]}
        </p>
        <p className='text-[13px] text-slate-800 font-normal py-1'>
          <strong className='font-bold text-black line-clamp-2'>Yeu cau : </strong>
          {post!.require.experience}
        </p>
        <p className='text-[13px] text-slate-800 font-normal py-1'>
          <strong className='font-bold text-black'>Luong : </strong>
          {CurrencyFormatted({ value: 20000, code: 'VND' })} / gio
        </p>
        <div className='w-full flex flex-col items-start'>
          <p className={`text-[13px] font-normal py-1 text-left line-clamp-1 ${expired < days && 'text-red-600'}`}>
            <strong className='font-bold text-black'>Time : </strong>
            {expired < days ? 'Đã hết hạn ứng tuyển' : post!.duration}
          </p>
          {expired >= days && (
            <p className='text-[13px] text-slate-800 font-normal py-1'>
              <strong className='font-bold text-black'>
                <FieldTimeOutlined /> :{' '}
              </strong>
              {expired.toFixed()} days
            </p>
          )}
        </div>
        {expired >= days && (
          <p className='text-[13px] text-slate-800 font-normal py-1'>
            <strong className='font-bold text-black'>Cap nhat : </strong>
            {days.toFixed()} ngay truoc.
          </p>
        )}
      </div>
      <button
        onClick={onClick}
        className='w-1/2 py-2 rounded-md text-green-500 text-[16px] font-bold hover:bg-green-200 hover:text-green-800 active:shadow-sm active:shadow-gray-600'
      >
        Xem them
      </button>
    </CardSquare>
  );
};
