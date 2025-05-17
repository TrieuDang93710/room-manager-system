/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRouter } from 'next/navigation';

const SideBarUser = () => {
  const router = useRouter();

  return (
    <div className='w-[25%] h-[80vh] bg-white dark:bg-blue-900 flex flex-col items-start justify-start rounded-sm gap-4 p-4'>
      <div className='w-full flex flex-col items-start gap-2'>
        <label className='text-[#333333] font-bold text-[13px] dark:text-blue-600' htmlFor=''>
          Tìm Kiếm
        </label>
        <input
          className='w-full text-[#333333] bg-white dark:bg-transparent border-blue-600 font-bold text-[12px] dark:text-blue-600 dark:border-blue-500 dark:focus:border-blue-600 placeholder:truncate border-[2px] rounded-md py-1 px-2'
          placeholder='Nhập các từ khóa ...'
          type='text'
          name='search'
          id='search'
        />
      </div>
      <ul className='w-full flex flex-col items-start gap-2 list-none'>
        <li
          onClick={() => router.push(`/dashboard/message/${Number(1)}`)}
          className='w-full py-1 mt-4 shadow-sm hover:shadow-md hover:shadow-blue-600 dark:hover:shadow-white rounded-sm border border-slate-500 active:shadow-none'
        >
          <div className='relative flex items-start justify-start truncate gap-2 px-2'>
            {/* <Image alt='avatar' src={item!.logo} width='30' height='30' className='cursor-pointer' /> */}
            <div className='flex flex-col items-start relative truncate'>
              <h3 className='font-bold text-[12px] dark:text-blue-600 dark:hover:text-[#ebebeb] cursor-pointer line-clamp-2'>
                Báo cáo hệ thống
              </h3>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default SideBarUser;
