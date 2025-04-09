import { FullscreenOutlined, SendOutlined } from '@ant-design/icons';
import Image from 'next/image';
import Link from 'next/link';

const ChatBoxAI = () => {
  return (
    <div className='right-4 bottom-24 fixed md:w-1/3 sm:w-3/4 w-full h-[65vh] z-20 rounded-md bg-blue-100 border border-blue-600 animate-fade'>
      <div className='relative w-full h-[65vh] bg-[#0000003e] overflow-y-auto hide-scrollbar rounded-md gap-4 p-4'>
        <div className='fixed top-36 right-4 md:w-1/3 sm:w-3/4 w-full flex items-start justify-start truncate gap-2 px-2 py-4 bg-[#f7f7f7] dark:bg-[#333333] rounded-md rounded-br-none rounded-bl-none border border-slate-400 border-b-0'>
          <Image
            alt='avatar'
            src={'https://www.svgrepo.com/show/190330/chat.svg'}
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
          <Link href={'/chat-box'}>
            <FullscreenOutlined className='text-[14px] text-slate-600 active:shadow-sm active:shadow-blue-600' />
          </Link>
        </div>

        {Array.from({ length: 2 }).map((_, index) => (
          <div
            key={index}
            className={`w-full flex flex-col items-center justify-start gap-4 pb-4 ${index === 0 && 'pt-10'}`}
          >
            <div className={`w-full flex items-start justify-start gap-2 ${false ? 'flex-row-reverse' : 'flex-row'}`}>
              <Image
                alt='avatar'
                src={'https://www.svgrepo.com/show/190330/chat.svg'}
                width='40'
                height='40'
                className='cursor-pointer'
              />
              <div className={`w-[80%] flex flex-col justify-start gap-4  ${false ? 'items-end' : 'items-start'}`}>
                <div className={`w-full flex flex-col justify-start gap-2  ${false ? 'items-end' : 'items-start'}`}>
                  <p className='text-[14px] text-black font-normal bg-white rounded-sm px-2 py-1'>
                    Hello, I&apos;m here
                  </p>
                  <div className='w-1/2 h-[10vh] flex items-center justify-center bg-white rounded-sm'>Image</div>
                </div>
              </div>
            </div>
            <div className={`w-full flex items-start justify-start gap-2 ${true ? 'flex-row-reverse' : 'flex-row'}`}>
              <div className={`w-full flex flex-col justify-start gap-4  ${true ? 'items-end' : 'items-start'}`}>
                <div className={`w-full flex flex-col justify-start gap-2  ${true ? 'items-end' : 'items-start'}`}>
                  <p className='text-[14px] text-black font-normal bg-white rounded-sm px-2 py-1'>
                    Hello, I&apos;m here
                  </p>
                  <div className='w-1/2 h-[10vh] flex items-center justify-center bg-white rounded-sm'>Image</div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <form className='fixed bottom-24 right-4 md:w-1/3 sm:w-3/4 w-full flex flex-row items-center bg-blue-200 rounded-md rounded-tr-none rounded-tl-none border border-slate-400 border-b-0 mt-2'>
          <input
            type='text'
            placeholder='Type ...'
            className='w-full h-full px-2 py-4 bg-blue-200 focus:bg-[#0000003e] dark:focus:bg-transparent text-slate-800 dark:text-slate-50 dark:placeholder:text-slate-50 text-[18px]'
          />
          <button
            type='submit'
            onClick={() => alert('Click me')}
            className={`absolute right-1 w-full sm:w-[20%] bg-blue-600 hover:bg-blue-500 text-slate-50 font-bold text-[16px] shadow-sm shadow-slate-400 px-4 py-3`}
          >
            <SendOutlined />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatBoxAI;
