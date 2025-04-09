import Image from 'next/image';
import Message from '../Message';

const ChatBox = () => {
  return (
    <div className='relative w-full h-[65vh] bg-[#0000003e] overflow-y-auto gap-4 p-4'>
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
      <div className='absolute bottom-4 right-0 left-0 w-full flex flex-col items-center justify-start gap-4'>
        <p className='text-white text-[14px] bg-slate-600 rounded-md px-8 py-1'>Wed 2/4/2025</p>
        <div className='w-full flex flex-row items-start justify-between px-4'>
          <Message />
          <Message sender={true}/>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
