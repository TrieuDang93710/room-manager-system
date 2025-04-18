'use client';
import { SendOutlined } from '@ant-design/icons';
import SideBarUser from './components/SideBarUser';
import ChatBox from './components/ChatBox';

const MessagePage = () => {
  const sendHandler = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log('Click me');
  };

  return (
    <div className='relative w-full h-screen bg-[#f7f7f7] dark:bg-slate-900 flex flex-col items-end gap-2 snap-y pt-20 md:px-3'>
      <div className='w-full h-full py-3 px-3 flex flex-col justify-start items-end md:gap-3 gap-y-2'>
        <div className='w-full flex sm:flex-row flex-col sm:items-center sm:justify-start items-start justify-start bg-blue-100 border shadow-sm shadow-slate-500 dark:border-none dark:bg-blue-800 rounded-sm px-2 py-1 gap-1'>
          <h3 className='text-[16px] text-black dark:text-white font-bold hover:text-blue-500 hover:underline-offset-1 cursor-default px-2 py-1'>
            Nhan tin
          </h3>
        </div>
        <div className='w-full flex flex-row justify-between bg-blue-100 dark:bg-blue-800 p-4 gap-2'>
          <SideBarUser />
          <ChatBox />
        </div>
        <form className='relative w-[80%] flex flex-row items-center bg-blue-200 dark:bg-transparent dark:border dark:border-blue-600 mt-2'>
          <input
            type='text'
            placeholder='Type ...'
            className='w-full h-full px-2 py-2 bg-blue-200 focus:bg-[#0000003e] dark:bg-transparent dark:focus:bg-transparent text-slate-800 dark:text-blue-600 dark:placeholder:text-blue-600 text-[18px]'
          />
          <button
            type='submit'
            onClick={sendHandler}
            className={`absolute right-1 w-full sm:w-[20%] bg-blue-600 hover:bg-blue-500 text-slate-50 font-bold text-[16px] shadow-sm shadow-slate-400 px-4 py-1`}
          >
            <SendOutlined />
          </button>
        </form>
      </div>
    </div>
  );
};

export default MessagePage;
