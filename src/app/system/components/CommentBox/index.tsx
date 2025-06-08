/* eslint-disable @next/next/no-img-element */
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useAuth } from '@/hooks/auth/useAuth';
import { CloseOutlined, SendOutlined } from '@ant-design/icons';
import comment_icon from '@/public/images/comment.png';
import { useApiSecure } from '@/hooks/useApiSecure';

interface CommentBoxProps {
  openChatAI?: boolean;
  onClose?: () => void;
}

const CommentBox = ({ onClose }: CommentBoxProps) => {
  const auth = useAuth();
  const { setLoading } = auth;
  const apiSecure = useApiSecure();
  const { handleSubmit } = useForm();
  const [text, setText] = useState<string>('');

  const sendHandler = async () => {
    setLoading(true);
    const commentDto = {
      comment: text
    };
    console.log('commentDto: ', commentDto);

    try {
      const response = await apiSecure.post('/rating', { star: 5, ...commentDto });
      console.log('response: ', response);
      setText('');
    } catch (error) {
      console.error('Error sending comment:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`right-4 bottom-24 fixed md:w-1/4 sm:w-3/4 w-full h-[40vh] z-20 rounded-md bg-blue-100 border border-blue-600 animate-fade`}
    >
      <div className='absolute w-full h-full bg-[#0000003e] overflow-y-auto hide-scrollbar rounded-md gap-4'>
        <div className='w-full flex items-center justify-between truncate gap-2 z-20 p-4 bg-[#f7f7f7] dark:bg-[#333333] rounded-md rounded-br-none rounded-bl-none border border-slate-400 border-b-0'>
          <div className='flex flex-row items-center justify-start gap-2'>
            <img src={comment_icon.src} alt='avatar' width='30' height='30' className='cursor-pointer' />
            <h3 className='font-bold text-[12px] dark:text-[#b4b4b4] dark:hover:text-[#ebebeb] cursor-pointer'>
              Bình luận
            </h3>
          </div>
          <CloseOutlined
            onClick={onClose}
            className='text-[14px] text-slate-600 font-bold active:shadow-sm active:shadow-blue-600'
          />
        </div>
        <form
          onSubmit={handleSubmit(sendHandler)}
          className='w-full h-full flex flex-col items-center justify-start bg-white rounded-md rounded-tr-none rounded-tl-none border border-slate-400 border-b-0'
        >
          <div className='w-full h-[50%] flex flex-col items-start justify-start relative px-2'>
            <h3 className='text-[16px] text-slate-600 dark:text-white font-bold hover:underline-offset-1 cursor-default py-2'>
              Nhập bình luận của bạn
            </h3>
            <input
              type='text'
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder='Type ...'
              className='w-full h-full px-2 py-1 bg-[#6d6d6d16] focus:bg-[#0000003e] dark:focus:bg-transparent text-slate-800 dark:text-slate-50 dark:placeholder:text-blue-600 rounded-sm text-[18px]'
            />
          </div>
          <button
            type='submit'
            className={`absolute bottom-0 w-full bg-blue-600 hover:bg-blue-500 text-slate-50 font-bold text-[16px] shadow-sm shadow-slate-400 px-4 py-3`}
          >
            <SendOutlined />
          </button>
        </form>
      </div>
    </div>
  );
};

export default CommentBox;
