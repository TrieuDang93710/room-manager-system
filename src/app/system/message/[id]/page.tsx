/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { useEffect, useState } from 'react';
import ChatBox from '../components/ChatBox';
import useBusiness from '@/hooks/useBusiness';
import { useAuth } from '@/hooks/auth/useAuth';
import { SendOutlined } from '@ant-design/icons';
import useCloudinary from '@/hooks/useCloudinary';
import { useForm } from 'react-hook-form';
import useChat from '@/hooks/useChat';

interface ChatPageProps {
  params: { id: number };
}

const ChatPage = ({ params }: ChatPageProps) => {
  const { useBusinessSearch } = useBusiness();
  const { businesses } = useBusinessSearch();
  const { sendMessage, useAllMessages } = useChat();
  const { refetch } = useAllMessages({ userToChatId: Number(params.id) });
  const auth = useAuth();
  const { user } = auth;
  const [receiverId, setReceiverId] = useState<number>(0);

  // const apiSecure = useApiSecure()
  const { uploadFile } = useCloudinary();
  const { handleSubmit } = useForm();
  const [text, setText] = useState<string>('');
  const [image, setImage] = useState<string>('');

  useEffect(() => {
    switch (user && user!.role[0]) {
      case 'applicant':
        businesses.map((item: any) => {
          if (item.manager) {
            setReceiverId(Number(item.manager.user.id));
          }
        });
      case 'manager':
        setReceiverId(Number(params.id));
    }
  }, [businesses, params.id, user]);

  console.log('receiverId: ', receiverId);

  const sendHandler = async () => {
    const imgFile = new FormData();
    imgFile.append('file', image);

    let image_secure_url;

    await uploadFile
      .mutateAsync({ file: imgFile })
      .then((result) => {
        console.log('result: ', result.data);
        image_secure_url = result.data.data.secure_url;
      })
      .catch((error) => console.log('error: ', error));

    const sendDto = {
      text: text,
      image: image_secure_url ? image_secure_url : null
    };

    await sendMessage.mutateAsync({ receiver: Number(params.id), sendDto: sendDto });
    refetch();
    console.log('sendDto: ', sendDto);
  };

  return (
    <div className='sm:w-[75%] w-full flex flex-col items-center justify-start'>
      <ChatBox receiverId={receiverId} />
      <form
        onSubmit={handleSubmit(sendHandler)}
        className='relative w-full flex sm:flex-row flex-col items-center gap-4 bg-blue-200 dark:bg-transparent dark:border dark:border-blue-600 mt-2'
      >
        <div className='w-full flex flex-row items-center justify-start sm:pb-0 pb-10 gap-2'>
          <input
            type='file'
            accept='image/*'
            onChange={(e: any) => setImage(e.target.files[0])}
            className='w-[20%] h-full px-2 bg-blue-200 dark:bg-transparent dark:focus:bg-transparent'
          />
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
          className={`absolute right-1 bottom-0 w-full sm:w-[20%] bg-blue-600 hover:bg-blue-500 text-slate-50 font-bold text-[16px] shadow-sm shadow-slate-400 px-4 py-1`}
        >
          <SendOutlined />
        </button>
      </form>
    </div>
  );
};

export default ChatPage;
