/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAuth } from '@/hooks/auth/useAuth';
import { useApiSecure } from '@/hooks/useApiSecure';
import { format, parseISO } from 'date-fns';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface MessageProps {
  receiver?: boolean;
  sender?: boolean;
  messageItem?: any;
  receiverId?: number;
}

const Message = ({ sender, messageItem, receiverId }: MessageProps) => {
  const auth = useAuth();
  const apiSecure = useApiSecure();
  const { user } = auth;
  const [receiverUser, setReceiverUser] = useState<any>(null);

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
    <>
      {messageItem && (
        <div className={`w-full flex items-start justify-start gap-2 my-4 ${sender ? 'flex-row-reverse' : 'flex-row'}`}>
          <Image
            alt='avatar'
            src={user && sender && receiverUser ? user!.avatar : receiverUser?.avatar}
            width={40}
            height={40}
            className='cursor-pointer rounded-full'
          />
          <div className={`w-[50%] flex flex-col justify-start gap-2 ${sender ? 'items-end' : 'items-start'}`}>
            <p className='text-[14px] text-black dark:text-blue-600 font-normal bg-white rounded-sm px-2 py-1'>
              {messageItem && messageItem!.text}
            </p>
            {messageItem!.image && (
              <Image
                alt='image'
                src={'https://res.cloudinary.com/dmdzyoslx/image/upload/v1745241929/u0ysktwtpgaursjpvdvr.png'}
                width={40}
                height={40}
                className='flex items-center justify-center'
              />
            )}
            <span className='text-[14px] text-slate-700 dark:text-white font-normal'>
              {format(parseISO(messageItem && messageItem!.createAt), 'HH:mm')}
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default Message;
