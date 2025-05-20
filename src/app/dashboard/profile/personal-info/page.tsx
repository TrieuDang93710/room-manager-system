/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
'use client';
import AddComponent from '@/components/molecules/AddComp';
import { UploadOutlined } from '@ant-design/icons';
import { useState } from 'react';
import UpdateUser from '../components/UpdateUser';
import { useAuth } from '@/hooks/auth/useAuth';
import Image from 'next/image';

const PersonalInformation = () => {
  const { user } = useAuth();
  const [updateUser, setUpdateUser] = useState<boolean>(false);

  const updateUserHandler = () => {
    setUpdateUser(!updateUser);
  };

  console.log('user: ', user);

  return (
    <div className='w-full flex flex-col items-start justify-start py-2 px-8 gap-4'>
      <div className='w-1/2 flex items-center justify-start p-4 gap-2'>
        <Image
          alt='avatar'
          src={
            user && user!.avatar
              ? user!.avatar
              : 'https://www.svgrepo.com/show/384676/account-avatar-profile-user-6.svg'
          }
          width='80'
          height='80'
          className='cursor-pointer rounded-md'
          priority={true}
        />
        <div className='flex flex-col items-center cursor-pointer'>
          <UploadOutlined className='text-[18px] hover:bg-blue-50 dark:hover:bg-transparent dark:hover:text-white dark:text-blue-600 active:shadow-sm active:shadow-slate-400 p-2 rounded-full' />
          <p className='text-black dark:text-blue-600 text-[16px] font-medium'> Cập nhật</p>
        </div>
      </div>
      <div className='flex flex-col items-start justify-start gap-2 px-2'>
        <h3 className='text-black dark:text-white text-[16px] font-normal'>
          <strong className='dark:text-blue-600'>Họ và Tên : </strong>
          {user && user!.username ? user!.username : 'None'}
        </h3>
        <h3 className='text-black dark:text-white text-[16px] font-normal'>
          <strong className='dark:text-blue-600'>Giới tính : </strong>
          {user && user!.gender[0] ? user!.gender[0] : 'Chưa cập nhật'}
        </h3>
        <h3 className='text-black dark:text-white text-[16px] font-normal'>
          <strong className='dark:text-blue-600'>Ngày sinh : </strong>
          {user && user!.date_of_birth ? user!.date_of_birth : 'None'}
        </h3>
      </div>
      <AddComponent title='Kỹ năng' action={true}>
        {user && user.applicant ? (
          <h3 className='text-black dark:text-white text-[16px] font-normal'>{user!.applicant!.skill}</h3>
        ) : (
          <h3 className='text-black dark:text-white text-[16px] font-normal'>None</h3>
        )}
      </AddComponent>
      <AddComponent title='Sở thích' action={true}>
        {user && user.applicant ? (
          <h3 className='text-black dark:text-white text-[16px] font-normal'>{user!.applicant!.hobby}</h3>
        ) : (
          <h3 className='text-black dark:text-white text-[16px] font-normal'>None</h3>
        )}
      </AddComponent>
      <AddComponent title='Ngoại ngữ'>
        {user && user.applicant ? (
          <h3 className='text-black dark:text-white text-[16px] font-normal'>{user!.applicant!.language}</h3>
        ) : (
          <h3 className='text-black dark:text-white text-[16px] font-normal'>None</h3>
        )}
      </AddComponent>
      <button
        onClick={updateUserHandler}
        className='bg-blue-100 hover:bg-blue-300 text-blue-600 hover:text-blue-500 active:shadow-sm active:shadow-slate-400 dark:bg-[#0000] font-bold text-[13px] py-2 px-4 rounded-md dark:border-[1px] dark:border-blue-600 dark:hover:bg-blue-500 dark:hover:text-white dark:text-blue-600 ml-2 mt-4'
        type='submit'
      >
        Thay doi
      </button>
      <UpdateUser updateUser={updateUser} setUpdateUser={setUpdateUser} />
    </div>
  );
};

export default PersonalInformation;
