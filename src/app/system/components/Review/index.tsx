/* eslint-disable @typescript-eslint/no-explicit-any */
import CardSquare from '@/components/organisms/system/Card/Square';
import useComment from '@/hooks/useComment';
import { StarOutlined } from '@ant-design/icons';

const ReviewUs = () => {
  const { comments } = useComment();

  return (
    <div className='w-[70%] flex flex-col items-center'>
      <h2 className='text-2xl font-bold text-blue-600 py-2'>Đánh Giá Về Hệ Thống</h2>
      <div className='w-[90%] flex sm:grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 flex-col items-center justify-around gap-4 py-10'>
        {comments.map((item: any, index: any) => (
          <CardSquare key={index + 1} logo={item!.userId?.avatar}>
            <div className='w-full flex flex-col items-start justify-center gap-2'>
              <p className='text-[13px] text-slate-800 font-normal py-1 line-clamp-4'>
                <strong className='font-bold text-black dark:text-blue-600'>Tên : </strong>
                {item!.userId?.username}
              </p>
              <p className='text-[13px] text-slate-800 font-normal py-1 line-clamp-4'>
                <strong className='font-bold text-black dark:text-blue-600'>Mô tả : </strong>
                {item!.comment}
              </p>
            </div>
            <div className='w-[60%] py-2 flex items-center justify-center gap-3'>
              {Array.from({ length: item!.star }).map((_, index) => (
                <StarOutlined key={index + 1} className='text-yellow-400 text-[18px] font-medium' />
              ))}
            </div>
          </CardSquare>
        ))}
      </div>
    </div>
  );
};

export default ReviewUs;
