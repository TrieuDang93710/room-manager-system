'use client';
import { SendOutlined } from '@ant-design/icons';
import Image from 'next/image';

const MessagePage = () => {
  return (
    <div className='relative w-full h-screen bg-[#f7f7f7] dark:bg-[#242424] flex flex-col items-end gap-6 snap-y pt-20 md:px-3'>
      <div className='w-full h-fit py-3 px-3 flex-col justify-center md:gap-3 gap-y-2'>
        <div className='flex sm:flex-row flex-col sm:items-center sm:justify-start items-start justify-start border shadow-sm shadow-slate-500 rounded-sm px-2 py-1 gap-1'>
          <h3 className='text-[16px] text-black font-bold hover:text-blue-500 hover:underline-offset-1 cursor-default px-2 py-1'>
            Nhan tin
          </h3>
        </div>
        <div className='w-full flex flex-row justify-between'>
          <div className='w-[25%] h-[70vh] flex flex-col items-start justify-start border border-green-500 gap-4 p-1 mt-4'>
            <div className='w-full flex flex-col items-start gap-2'>
              <label className='text-[#333333] font-bold text-[13px] dark:text-[#d1d1d1]' htmlFor=''>
                Tìm Kiếm
              </label>
              <input
                className='w-full text-[#333333] bg-white border-green-500 font-bold text-[12px] dark:text-[#d1d1d1] dark:border-green-500 dark:focus:border-green-500 placeholder:truncate border-[2px] rounded-md py-1 px-2'
                placeholder='Nhập các từ khóa ...'
                type='text'
                name='search'
                id='search'
              />
            </div>
            <ul className='w-full flex flex-col items-start gap-2 list-none'>
              <li className='w-full py-1 shadow-sm shadow-green-500 rounded-sm border-[2px] border-green-500'>
                <div className='relative flex items-start justify-start truncate gap-2 px-2'>
                  <Image
                    alt='avatar'
                    src={'https://www.svgrepo.com/show/384676/account-avatar-profile-user-6.svg'}
                    width='30'
                    height='30'
                    className='cursor-pointer'
                  />
                  <div className='flex flex-col items-start relative truncate'>
                    <h3 className='font-bold text-[12px] dark:text-[#b4b4b4] dark:hover:text-[#ebebeb] cursor-pointer'>
                      Đặng Bình Triệu
                    </h3>
                    <p className='font-normal text-[10px] dark:text-[#b4b4b4] dark:hover:text-[#ebebeb] cursor-pointer'>
                      You: Thanks!
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className='relative w-full border h-[70vh] border-green-500 flex sm:grid md:grid-cols-3 sm:grid-cols-2 flex-col items-center justify-around overflow-y-auto gap-4 p-4 mt-4'>
            <div className='absolute top-0 left-0 w-full flex items-start justify-start truncate gap-2 px-2 py-2 bg-[#f7f7f7] dark:bg-[#333333] border border-slate-400 border-b-0'>
              <Image
                alt='avatar'
                src={'https://www.svgrepo.com/show/384676/account-avatar-profile-user-6.svg'}
                width='30'
                height='30'
                className='cursor-pointer'
              />
              <div className='flex flex-col items-start relative truncate'>
                <h3 className='font-bold text-[12px] dark:text-[#b4b4b4] dark:hover:text-[#ebebeb] cursor-pointer'>
                  Đặng Bình Triệu
                </h3>
                <p className='font-normal text-[10px] dark:text-[#b4b4b4] dark:hover:text-[#ebebeb] cursor-pointer'>
                  Not friend
                </p>
              </div>
            </div>
            {/* code show message */}
          </div>
        </div>
        <div className='w-full bg-blue-200 mt-2'>
          <form className='w-full flex sm:flex-row flex-col items-center justify-between shadow-md shadow-slate-300 sm:gap-0 gap-2'>
            <div className='sm:w-[80%] w-full h-full flex items-center justify-end'>
              <input
                type='text'
                placeholder='Type ...'
                className='sm:w-[60%] w-full h-full px-2 bg-slate-200 dark:bg-slate-900 dark:focus:bg-slate-700 focus:bg-slate-100 dark:focus:bg-transparent outline-none focus:outline-none text-slate-800 dark:text-slate-50 dark:placeholder:text-slate-50 text-[13px] py-2'
              />
            </div>
            <button
              type='submit'
              className={`w-full sm:w-[20%] bg-green-500 text-slate-50 font-bold text-[16px] px-4 py-1 `}
            >
              <SendOutlined />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MessagePage;
