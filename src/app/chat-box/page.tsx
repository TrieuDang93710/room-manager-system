'use client';
import { FullscreenExitOutlined, SendOutlined } from '@ant-design/icons';
import Link from 'next/link';
import Image from 'next/image';
import SideBarUser from './components/SideBarUser';
import './chat-box.css'

const ChatAIPage = () => {
  const sendHandler = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log('Click me');
  };

  return (
    <div className='relative w-full h-screen bg-[#f7f7f7] dark:bg-[#242424] flex flex-col items-end gap-2 snap-y md:px-3'>
      <div className='w-full h-full py-3 px-3 flex flex-col justify-start items-end md:gap-3 gap-y-2'>
        <div className='w-full flex flex-row justify-between bg-blue-100 p-4 gap-2'>
          <SideBarUser />
          <div className='w-full h-[80vh] z-20 rounded-md bg-blue-100 animate-fade'>
            <div className='relative w-full h-[80vh] bg-[#0000003e] rounded-md gap-4 p-4'>
              <div className='absolute top-0 right-0 w-full flex items-start justify-between truncate gap-2 px-4 py-4 bg-[#f7f7f7] dark:bg-[#333333] rounded-md rounded-br-none rounded-bl-none border border-slate-400 border-b-0'>
                <div className='flex flex-row items-center justify-between gap-2'>
                  <Image
                    alt='avatar'
                    src={'https://www.svgrepo.com/show/190330/chat.svg'}
                    width='30'
                    height='30'
                    className='cursor-pointer'
                  />
                  <h3 className='font-bold text-[18px] dark:text-[#b4b4b4] dark:hover:text-[#ebebeb] cursor-pointer'>
                    Chat AI
                  </h3>
                </div>
                <Link href={'/'}>
                  <FullscreenExitOutlined className='text-[18px] text-slate-600 font-bold active:shadow-sm active:shadow-blue-600 cursor-pointer' />
                </Link>
              </div>

              <div className='w-full h-full flex flex-col items-start justify-start px-4 hide-scrollbar overflow-y-auto'>
                {Array.from({ length: 3 }).map((_, index) => (
                  <div
                    key={index}
                    className={`w-full flex flex-col items-center justify-start gap-4 pb-4 ${index === 0 && 'pt-14'}`}
                  >
                    <div
                      className={`w-full flex items-start justify-start gap-2 ${false ? 'flex-row-reverse' : 'flex-row'}`}
                    >
                      <Image
                        alt='avatar'
                        src={'https://www.svgrepo.com/show/190330/chat.svg'}
                        width='40'
                        height='40'
                        className='cursor-pointer'
                      />
                      <div
                        className={`w-[80%] flex flex-col justify-start gap-4  ${false ? 'items-end' : 'items-start'}`}
                      >
                        <div
                          className={`w-full flex flex-col justify-start gap-2  ${false ? 'items-end' : 'items-start'}`}
                        >
                          <p className='text-[14px] text-black font-normal bg-white rounded-sm px-2 py-1'>
                            Hello, I&apos;m here
                          </p>
                          <div className='w-1/2 h-[10vh] flex items-center justify-center bg-white rounded-sm'>
                            Image
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className={`w-full flex items-start justify-start gap-2 ${true ? 'flex-row-reverse' : 'flex-row'}`}
                    >
                      <div
                        className={`w-full flex flex-col justify-start gap-4  ${true ? 'items-end' : 'items-start'}`}
                      >
                        <div
                          className={`w-full flex flex-col justify-start gap-2  ${true ? 'items-end' : 'items-start'}`}
                        >
                          <p className='text-[14px] text-black font-normal bg-white rounded-sm px-2 py-1'>
                            Hello, I&apos;m here
                          </p>
                          <div className='w-1/2 h-[10vh] flex items-center justify-center bg-white rounded-sm'>
                            Image
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <form className='relative w-[80%] flex flex-row items-center bg-blue-200 mt-2'>
          <input
            type='text'
            placeholder='Type ...'
            className='w-full h-full px-2 py-3 bg-blue-200 focus:bg-[#0000003e] dark:focus:bg-transparent text-slate-800 dark:text-slate-50 dark:placeholder:text-slate-50 text-[18px]'
          />
          <button
            type='submit'
            onClick={sendHandler}
            className={`absolute right-1 w-full sm:w-[20%] bg-blue-600 hover:bg-blue-500 text-slate-50 font-bold text-[16px] shadow-sm shadow-slate-400 px-4 py-2`}
          >
            <SendOutlined />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatAIPage;
