/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { useState } from 'react';
import ChatBox from '../components/ChatBox';
import { SendOutlined } from '@ant-design/icons';
import { useForm } from 'react-hook-form';
import { useAuth } from '@/hooks/auth/useAuth';
import useApiChatbot from '@/hooks/useApiChatbot';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/lib/store';
import { addMessageResponse, addQuery } from '@/lib/features/chatbot/chatbotSlice';

interface ChatPageProps {
  params: { id: number };
}

const ChatPage = ({}: ChatPageProps) => {
  const { user, setLoading } = useAuth();
  const apiChatbot = useApiChatbot();
  const dispatch = useDispatch();
  const chatBotData = useSelector((state: RootState) => state.chatBots);
  const { handleSubmit } = useForm();
  const [text, setText] = useState<string>('');

  const sendHandler = async () => {
    setLoading(true);
    const queryDto = {
      query: text
    };
    console.log('queryDto: ', queryDto);
    dispatch(addQuery(text));
    const response = await apiChatbot.post('/ai', queryDto);
    dispatch(addMessageResponse(response.data));
    setLoading(false);
    console.log('response: ', response);
  };

  console.log('chatBotData: ', chatBotData.messageResponse);

  return (
    <div className='w-[75%] flex flex-col items-center justify-start'>
      <ChatBox receiverId={user && user.id} />
      <form
        onSubmit={handleSubmit(sendHandler)}
        className='relative w-full flex flex-row items-center bg-blue-200 dark:bg-transparent dark:border dark:border-blue-600 mt-2'
      >
        <div className='w-full flex flex-row items-center justify-start gap-2'>
          {/* <input
            type='file'
            accept='image/*'
            onChange={(e: any) => setImage(e.target.files[0])}
            className='w-[20%] h-full px-2 bg-blue-200 dark:bg-transparent dark:focus:bg-transparent'
          /> */}
          <input
            type='text'
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder='Type ...'
            className='w-full h-full px-2 py-2 bg-blue-200 focus:bg-[#0000003e] dark:bg-transparent dark:focus:bg-transparent text-slate-800 dark:text-blue-600 dark:placeholder:text-blue-600 text-[16px]'
          />
        </div>
        <button
          type='submit'
          className={`absolute right-1 w-full sm:w-[20%] bg-blue-600 hover:bg-blue-500 text-slate-50 font-bold text-[16px] shadow-sm shadow-slate-400 px-4 py-1`}
        >
          <SendOutlined />
        </button>
      </form>
    </div>
  );
};

export default ChatPage;
