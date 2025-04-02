import CardSquare from '@/components/organisms/system/Card/Square';
import { StarOutlined } from '@ant-design/icons';

const ReviewUs = () => {
  return (
    <div className='w-[90%] flex flex-col items-center'>
      <h2 className='text-2xl font-bold py-2'>Danh gia ve dich vu cua chung toi</h2>
      <div className='w-[90%] flex sm:grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 flex-col items-center justify-around gap-4 py-10'>
        {Array.from({ length: 4 }).map((_, index) => (
          <CardSquare key={index + 1}>
            <p className='text-[13px] text-slate-800 font-normal py-1 line-clamp-4'>
              <strong className='font-bold text-black'>Mo ta : </strong>Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Quas quisquam possimus perferendis illum nulla incidunt ipsum dignissimos natus. Nihil,
              deleniti aliquam. Vel, officia reiciendis provident unde commodi perferendis. Totam, vel?
            </p>
            <div className='w-[60%] py-2 flex items-center justify-center gap-3'>
              {Array.from({ length: 5 }).map((_, index) => (
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
