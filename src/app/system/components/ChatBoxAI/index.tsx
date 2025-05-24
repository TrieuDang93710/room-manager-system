import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import AI from '@/public/images/AI.png';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { useAuth } from '@/hooks/auth/useAuth';
import { RootState } from '@/lib/store';
import { FullscreenOutlined, SendOutlined } from '@ant-design/icons';
import MessageLoading from '@/app/chat-box/components/MessageLoading';
import useApiChatbot from '@/hooks/useApiChatbot';
import { addMessageResponse, addQuery } from '@/lib/features/chatbot/chatbotSlice';
import { groupMessagesByDate, mergeSortMessages, splitMessageResponse } from '@/config/groupMessage';

interface ChatBoxAIProps {
  openChatAI: boolean;
}

const ChatBoxAI = ({ }: ChatBoxAIProps) => {
  const router = useRouter();
  const auth = useAuth();
  const apiChatbot = useApiChatbot();
  const { user, loading, setLoading } = auth;
  const dispatch = useDispatch();
  const chatBotData = useSelector((state: RootState) => state.chatBots);
  const grouped = groupMessagesByDate(chatBotData.messageResponse);
  const groupedSplit = splitMessageResponse(grouped, 'query');

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

  return (
    <div
      className={`right-4 bottom-24 fixed md:w-1/3 sm:w-3/4 w-full h-[65vh] z-20 rounded-md bg-blue-100 border border-blue-600 animate-fade`}
    >
      <div className='absolute w-full h-[65vh] bg-[#0000003e] overflow-y-auto hide-scrollbar rounded-md gap-4 p-4'>
        <div className='fixed top-36 right-4 md:w-1/3 sm:w-3/4 w-full flex items-center justify-between truncate gap-2 p-4 bg-[#f7f7f7] dark:bg-[#333333] rounded-md rounded-br-none rounded-bl-none border border-slate-400 border-b-0'>
          <div className='flex items-center justify-start gap-2'>
            <Image
              alt='avatar'
              src={'https://www.svgrepo.com/show/190330/chat.svg'}
              width='30'
              height='30'
              className='cursor-pointer'
            />
            <h3 className='font-bold text-[12px] dark:text-[#b4b4b4] dark:hover:text-[#ebebeb] cursor-pointer'>
              Chatbot AI
            </h3>
          </div>
          <FullscreenOutlined
            onClick={() => router.push(`/chat-box/${Number(user.id)}`)}
            className='text-[14px] text-slate-600 font-bold active:shadow-sm active:shadow-blue-600'
          />
        </div>
        <div className='w-full flex flex-col items-center justify-start gap-4 z-10 pt-24'>
          {Object.entries(groupedSplit).map(([date, { query, answer }]) => (
            <div key={date} className='relative w-full flex flex-col items-start justify-center py-4 gap-4'>
              <div className='w-full flex flex-col items-center justify-between'>
                {mergeSortMessages(query, answer).map((mgs, index) => (
                  <div
                    key={index}
                    className={`w-full flex items-start justify-start gap-2 my-4 ${mgs && mgs!.sender ? 'flex-row-reverse' : 'flex-row'}`}
                  >
                    <Image
                      alt='avatar'
                      src={mgs && mgs!.sender && user ? user!.avatar : AI}
                      width={40}
                      height={40}
                      className='cursor-pointer rounded-full'
                    />
                    <div
                      className={`w-[80%] flex flex-col justify-start gap-2 ${mgs && mgs!.sender ? 'items-end' : 'items-start'}`}
                    >
                      <p className='text-[14px] text-black dark:text-blue-600 font-normal bg-white rounded-sm px-2 py-1'>
                        {mgs && mgs!.sender ? mgs!.query : mgs!.answer}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
          {loading && <MessageLoading avatar={user && user!.avatar} text={chatBotData.query.toString()} ai={AI} />}
        </div>
        <form
          onSubmit={handleSubmit(sendHandler)}
          className='fixed bottom-24 right-4 md:w-1/3 sm:w-3/4 w-full flex flex-row items-center bg-blue-200 rounded-md rounded-tr-none rounded-tl-none border border-slate-400 border-b-0 mt-2'
        >
          <input
            type='text'
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder='Type ...'
            className='w-full h-full px-2 py-4 bg-blue-200 focus:bg-[#0000003e] dark:focus:bg-transparent text-slate-800 dark:text-slate-50 dark:placeholder:text-slate-50 text-[18px]'
          />
          <button
            type='submit'
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
