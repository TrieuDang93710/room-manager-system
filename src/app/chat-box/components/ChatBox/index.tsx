/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import Image from 'next/image';
import { groupMessagesByDate, mergeSortMessages, splitMessageResponse } from '@/config/groupMessage';
import { format } from 'date-fns';
import AI from '@/public/images/AI.png';
import { RootState } from '@/lib/store';
import { useSelector } from 'react-redux';
import { useAuth } from '@/hooks/auth/useAuth';
import MessageLoading from '../MessageLoading';

interface ChatBoxProps {
  receiverId: number;
}

const ChatBox = ({}: ChatBoxProps) => {
  const { user, loading } = useAuth();
  const chatBotData = useSelector((state: RootState) => state.chatBots);
  const grouped = groupMessagesByDate(chatBotData.messageResponse);
  const groupedSplit = splitMessageResponse(grouped, 'query');

  return (
    <div className='relative w-full h-[80vh] bg-blue-200 dark:bg-blue-900 gap-4 overflow-y-auto hide-scrollbar'>
      <div className='fixed z-20 w-[55%] flex items-center justify-start truncate gap-2 px-2 py-2 bg-[#f7f7f7] dark:bg-blue-800 border border-slate-400 border-b-0'>
        <Image alt='avatar' src={AI} width='30' height='30' className='cursor-pointer rounded-full' />
        <h3 className='font-bold text-[12px] dark:text-[#b4b4b4] dark:hover:text-[#ebebeb] cursor-pointer'>
          Chatbot AI
        </h3>
      </div>
      <div className='w-full flex flex-col items-center justify-start gap-4 z-10 pt-24'>
        {Object.entries(groupedSplit).map(([date, { query, answer }]) => (
          <div key={date} className='relative w-full flex flex-col items-start justify-center p-4 gap-4'>
            <p className='absolute top-[-40px] left-[40%] text-white text-[14px] bg-slate-400 dark:bg-[#2525253b] rounded-md px-8 py-1'>
              {format(new Date(date), 'EEE d/M/yyyy')}
            </p>
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
                    className={`w-[50%] flex flex-col justify-start gap-2 ${mgs && mgs!.sender ? 'items-end' : 'items-start'}`}
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
    </div>
  );
};

export default ChatBox;
