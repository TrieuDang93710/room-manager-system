/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import Image from 'next/image';
import Message from '../Message';
import useChat from '@/hooks/useChat';
import { groupMessagesByDate, mergeSortMessages, splitSenderReceiver } from '@/config/groupMessage';
import { useAuth } from '@/hooks/auth/useAuth';
import { format } from 'date-fns';
import { useEffect, useState } from 'react';
import { useApiSecure } from '@/hooks/useApiSecure';

interface ChatBoxProps {
  receiverId: number;
}

const ChatBox = ({ receiverId }: ChatBoxProps) => {
  const auth = useAuth();
  const apiSecure = useApiSecure();
  const { user } = auth;
  const { useAllMessages } = useChat();
  const { messages } = useAllMessages({ userToChatId: Number(receiverId) });
  const [receiverUser, setReceiverUser] = useState<any>(null);

  const grouped = groupMessagesByDate(messages.data);

  const groupedSplit = splitSenderReceiver(grouped, Number(user && user.id));

  console.log('groupedSplit: ', groupedSplit);

  useEffect(() => {
    apiSecure
      .get(`/user/${Number(receiverId)}`)
      .then((result) => {
        setReceiverUser(result.data.data);
        console.log('result: ', result.data.data);
      })
      .catch((error) => {
        console.log('error: ', error);
      });
  }, [apiSecure, receiverId]);

  return (
    <div className='relative w-full h-[65vh] bg-blue-200 dark:bg-blue-900 gap-4 overflow-y-auto hide-scrollbar'>
      {receiverUser && (
        <div className='sm:fixed z-20 w-[55%] flex items-start justify-start truncate gap-2 px-2 py-2 bg-[#f7f7f7] dark:bg-blue-800 border border-slate-400 border-b-0'>
          <Image
            alt='avatar'
            src={receiverUser?.avatar}
            width='30'
            height='30'
            className='cursor-pointer rounded-full'
          />
          <div className='flex flex-col items-start relative truncate'>
            <h3 className='font-bold text-[12px] dark:text-[#b4b4b4] dark:hover:text-[#ebebeb] cursor-pointer'>
              {receiverUser?.username}
            </h3>
            <p className='font-normal text-[10px] dark:text-[#b4b4b4] dark:hover:text-[#ebebeb] cursor-pointer'>
              Not friend
            </p>
          </div>
        </div>
      )}
      <div className='w-full flex flex-col items-center justify-start gap-4 z-10 pt-24'>
        {groupedSplit &&
          Object.entries(groupedSplit).map(([date, { sender, receiver }]) => (
            <div key={date} className='relative w-full flex flex-col items-start justify-center p-4 gap-4'>
              <p className='absolute top-[-40px] left-[40%] text-white text-[14px] bg-slate-400 dark:bg-[#2525253b] rounded-md px-8 py-1'>
                {format(new Date(date), 'EEE d/M/yyyy')}
              </p>
              <div className='w-full flex flex-col items-center justify-between'>
                {mergeSortMessages(sender, receiver).map((mgs, index) => (
                  <Message key={index} sender={!mgs.sender} messageItem={mgs} receiverId={receiverId} />
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ChatBox;
