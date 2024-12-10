import RatingCommon from '@/components/atoms/Rating/rating';
import flex from '@/config/flex.config';
import Image from 'next/image';

const CommentCompt = () => {
  return (
    <div className={'w-full px-2 py-2 gap-2 ' + flex({direction: 'col'}) }>
      <RatingCommon ratings={4} maxRating={5} />
      <div className='relative flex items-start justify-start gap-1 pb-2 px-2'>
        <Image
          alt='avatar'
          src='https://www.svgrepo.com/show/384676/account-avatar-profile-user-6.svg'
          width='40'
          height='40'
          className='cursor-default'
        />
        <div className='w-1/4 pr-2 line-clamp-2 flex flex-col items-start relative'>
          <h3 className='font-bold text-[14px] dark:text-[#b4b4b4] dark:hover:text-[#ebebeb] cursor-default'>
            Dang Binh Trieu
          </h3>
          <p className='font-medium text-slate-800 text-[14px] dark:text-[#b4b4b4] dark:hover:text-[#ebebeb] cursor-text'>
            trieu.lessor123@gmail.com
          </p>
          <p className='font-medium text-slate-800 line-clamp-2 text-[14px] dark:text-[#b4b4b4] dark:hover:text-[#ebebeb] cursor-text'>
            This room is very well. Always, supporting the owner.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CommentCompt;
