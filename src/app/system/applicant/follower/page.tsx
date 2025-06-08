/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { AgentCardComponent } from '@/components/organisms/system/Card/AgentCard';
import { useAuth } from '@/hooks/auth/useAuth';
import { useApiSecure } from '@/hooks/useApiSecure';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const FollowerManagerPage = () => {
  const router = useRouter();
  const auth = useAuth();
  const { user } = auth;
  const apiSecure = useApiSecure();
  const [followCompany, setFollowCompany] = useState<any[]>([]);

  useEffect(() => {
    apiSecure
      .get(`/applicant/${user && Number(user.applicant.id)}`)
      .then((result) => {
        setFollowCompany(result.data.data.companies);
      })
      .catch((error) => {
        console.log('error_applicant: ', error);
      });
  }, [apiSecure, user]);

  console.log('followCompany: ', followCompany);

  return (
    <div className='relative w-full h-screen bg-white dark:bg-slate-900 flex flex-col items-end gap-6 snap-y md:px-3'>
      <div className='w-full h-fit py-3 px-3 flex-col justify-center md:gap-3 gap-y-2'>
        <div className='flex sm:flex-row flex-col sm:items-center sm:justify-start items-start justify-start border shadow-sm shadow-slate-500 dark:border-none dark:bg-blue-800 rounded-sm px-2 py-1 gap-1'>
          <h3 className='text-[16px] text-black dark:text-white font-bold hover:text-blue-500 hover:underline-offset-1 cursor-default px-2 py-1'>
            Doanh nghiep dang theo doi
          </h3>
        </div>
        <div className='w-full h-[75vh] flex sm:grid md:grid-cols-3 sm:grid-cols-2 flex-col items-center justify-around hide-scrollbar overflow-y-auto gap-4 p-4 mt-4'>
          {followCompany &&
            followCompany.map((item: any, index: any) => (
              <AgentCardComponent
                key={index + 1}
                companyItem={item}
                onClick={() => router.push(`/system/business/${index + 1}`)}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default FollowerManagerPage;
