/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Suspense } from 'react';
import TabBar from '@/components/molecules/TabBar';
import Loading from '@/app/system/loading';

interface ResumeDetailLayoutProps {
  params: { id: number };
  children: React.ReactNode;
}

// export async function generateStaticParams() {
//   const res = await fetch('https://api.yourservice.com/endpoint');
//   const data = await res.json();

//   const results = data.result;

//   return results.map((item: { id: { toString: () => any; }; }) => ({ id: item.id.toString() }));
// }


const ResumeDetailLayout = ({ params, children }: ResumeDetailLayoutProps) => {
  const id = params.id;

  const navigates = [
    {
      title: 'Thông tin chung',
      path: `/dashboard/applicant/resume/${id}`
    },
    {
      title: 'Thông tin liên hệ',
      path: `/dashboard/applicant/resume/${id}/contact`
    },
    {
      title: 'Kinh nghiem & Chuyen mon',
      path: `/dashboard/applicant/resume/${id}/more-detail`
    }
  ];

  return (
    <div className='relative w-full h-screen dark:bg-[#242424] flex flex-col items-end gap-6 snap-y pt-20 md:px-3'>
      <div className='w-full bg-blue-100 dark:bg-blue-800 h-fit py-3 px-3 flex-col justify-center md:gap-3 gap-y-2'>
        <TabBar tabs={navigates} />
        <div className='w-full h-[80vh] bg-white dark:bg-slate-900 flex flex-col justify-start items-center rounded-sm hide-scrollbar overflow-y-auto'>
          <Suspense fallback={<Loading />}>{children}</Suspense>
          {/* {children} */}
        </div>
      </div>
    </div>
  );
};

export default ResumeDetailLayout;
