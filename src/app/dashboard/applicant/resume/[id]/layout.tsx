import React from 'react';
import TabBar from '@/components/molecules/TabBar';

interface ResumeDetailLayoutProps {
  params: Promise<{ id: number }>;
  children: React.ReactNode;
}

const ResumeDetailLayout = async ({ params, children }: ResumeDetailLayoutProps) => {
  const id = (await params).id;

  const navigates = [
    {
      title: 'Thông tin chung',
      path: `resume/${id}`
    },
    {
      title: 'Thông tin liên hệ',
      path: `resume/${id}/contact`
    },
    {
      title: 'Kinh nghiem & Chuyen mon',
      path: `resume/${id}/more-detail`
    }
  ];

  return (
    <div className='relative w-full h-screen dark:bg-[#242424] flex flex-col items-end gap-6 snap-y pt-20 md:px-3'>
      <div className='w-full bg-blue-100 h-fit py-3 px-3 flex-col justify-center md:gap-3 gap-y-2'>
        <TabBar tabs={navigates} />
        <div className='w-full h-[80vh] bg-white flex flex-col justify-start items-center rounded-sm overflow-y-auto'>
          {children}
        </div>
      </div>
    </div>
  );
};

export default ResumeDetailLayout;
