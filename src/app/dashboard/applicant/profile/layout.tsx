'use client';
import TabBar from '@/components/molecules/TabBar';
import React from 'react';

interface ProfileLayoutProps {
  children: React.ReactNode;
}

const navigates = [
  {
    title: 'Thông tin chung',
    path: 'profile/'
  },
  {
    title: 'Thông tin liên hệ',
    path: 'profile/contact'
  },
  {
    title: 'Cài đặt tài khoản',
    path: 'profile/setting'
  }
];

const ProfileLayout = ({ children }: ProfileLayoutProps) => {
  return (
    <div className='relative w-full h-screen flex flex-col items-end gap-6 snap-y pt-20 md:px-3'>
      <div className='w-full bg-blue-100 dark:bg-blue-800 h-fit py-3 px-3 flex-col justify-center md:gap-3 gap-y-2'>
        <TabBar tabs={navigates} />
        <div className='w-full h-[80vh] bg-white dark:bg-slate-900 flex flex-col justify-start items-center rounded-sm overflow-y-auto'>
          {children}
        </div>
      </div>
    </div>
  );
};

export default ProfileLayout;
