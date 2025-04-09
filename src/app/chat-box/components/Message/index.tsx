import Image from 'next/image';

interface MessageProps {
  receiver?: boolean;
  sender?: boolean;
}

const Message = ({ sender }: MessageProps) => {
  return (
    <div className={`w-1/2 flex items-start justify-start gap-2 ${sender ? 'flex-row-reverse' : 'flex-row'}`}>
      <Image
        alt='avatar'
        src={'https://www.svgrepo.com/show/190330/chat.svg'}
        width='40'
        height='40'
        className='cursor-pointer'
      />
      <div className={`w-[80%] flex flex-col justify-start gap-4  ${sender ? 'items-end' : 'items-start'}`}>
        <div className={`w-full flex flex-col justify-start gap-2  ${sender ? 'items-end' : 'items-start'}`}>
          <p className='text-[14px] text-black font-normal bg-white rounded-sm px-2 py-1'>Hello, I&apos;m here</p>
          <div className='w-1/2 h-[10vh] flex items-center justify-center bg-white rounded-sm'>Image</div>
          <span className='text-[14px] text-slate-700 font-normal'>22:04</span>
        </div>
      </div>
    </div>
  );
};

export default Message;
