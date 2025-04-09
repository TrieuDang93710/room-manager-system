import { introductions } from '@/faker/data';
import Image from 'next/image';

const AboutUs = () => {
  return (
    <div className='w-[90%] flex flex-col items-center gap-3 px-2'>
      <h2 className='text-2xl font-bold pt-4'>Về Chúng Tôi</h2>
      <div className='w-full flex md:justify-around px-2'>
        {introductions.map((item) => (
          <div key={item.id} className='w-1/3 md:w-1/5 px-3 py-3 flex flex-col justify-start gap-3'>
            <div className='w-full flex items-center justify-center gap-4 py-2 hover:cursor-pointer hover:border-[2px] hover:border-green-500 dark:hover:border-slate-50'>
              <Image className='' alt='cart' src={item.icon} width={30} height={30} />
              <h2 className='text-xl font-bold dark:text-[#b1b1b1]'>{item.title}</h2>
            </div>
            <p className='text-xs font-normal text-[#8c8c8c] text-wrap truncate line-clamp-3 hover:line-clamp-none'>
              {item.descriptions}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
