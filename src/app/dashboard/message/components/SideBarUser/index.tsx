import Image from 'next/image';

const SideBarUser = () => {
  return (
    <div className='w-[25%] h-[65vh] bg-white dark:bg-blue-900 flex flex-col items-start justify-start rounded-sm gap-4 p-4'>
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
        <li className='w-full py-1 shadow-sm shadow-blue-600 rounded-sm border-[2px] border-white'>
          <div className='relative flex items-start justify-start truncate gap-2 px-2'>
            <Image
              alt='avatar'
              src={'https://www.svgrepo.com/show/384676/account-avatar-profile-user-6.svg'}
              width='30'
              height='30'
              className='cursor-pointer'
            />
            <div className='flex flex-col items-start relative truncate'>
              <h3 className='font-bold text-[12px] dark:text-blue-600 dark:hover:text-[#ebebeb] cursor-pointer'>
                Đặng Bình Triệu
              </h3>
              <p className='font-normal text-[10px] dark:text-blue-600 dark:hover:text-[#ebebeb] cursor-pointer'>
                You: Thanks!
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default SideBarUser;
