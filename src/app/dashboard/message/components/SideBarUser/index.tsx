/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAuth } from '@/hooks/auth/useAuth';
import { useApiSecure } from '@/hooks/useApiSecure';
import usePost from '@/hooks/usePost';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const SideBarUser = () => {
  const router = useRouter();
  const auth = useAuth();
  const apiSecure = useApiSecure();
  const { usePostsSearch } = usePost();
  const { user } = auth;
  const { posts } = usePostsSearch({});

  const [follows, setFollows] = useState<any[]>();
  const [applicants, setApplicants] = useState<any[]>();

  useEffect(() => {
    if (user && user.role[0] === 'applicant') {
      apiSecure
        .get(`/applicant/${Number(user && user!.applicant.id)}`)
        .then((result) => {
          console.log('result: ', result.data.data.companies);
          setFollows(result.data.data.companies);
        })
        .catch((error) => {
          console.log('error: ', error);
        });
    } else if (user && user.role[0] === 'manager') {
      const seenApplicantIds = new Set();

      const uniqueApplies = posts
        .flatMap((post: any) => post.applies)
        .filter((apply: any) => {
          const id = apply.applicant?.id;
          if (!id) return false;
          if (seenApplicantIds.has(id)) {
            return false;
          } else {
            seenApplicantIds.add(id);
            return true;
          }
        });
      const arr = uniqueApplies;
      setApplicants(arr);
    }
  }, [apiSecure, posts, user]);
  console.log('applicants: ', applicants);

  let listItem;

  switch (user && user.role[0]) {
    case 'applicant':
      const listCompanies = follows?.map((item: any) => (
        <li
          key={item.id}
          onClick={() => router.push(`/dashboard/message/${item.id}`)}
          className='w-full py-1 shadow-sm hover:shadow-md hover:shadow-blue-600 dark:hover:shadow-white rounded-sm border border-slate-500 active:shadow-none'
        >
          <div className='relative flex items-start justify-start truncate gap-2 px-2'>
            <Image alt='avatar' src={item!.logo} width='30' height='30' className='cursor-pointer' />
            <div className='flex flex-col items-start relative truncate'>
              <h3 className='font-bold text-[12px] dark:text-blue-600 dark:hover:text-[#ebebeb] cursor-pointer line-clamp-2'>
                {item!.title}
              </h3>
              <p className='font-normal text-[10px] dark:text-blue-600 dark:hover:text-[#ebebeb] cursor-pointer'>
                You: Thanks!
              </p>
            </div>
          </div>
        </li>
      ));

      listItem = listCompanies;
      break;
    case 'manager':
      const listApplicants = applicants?.map((item: any) => (
        <li
          key={item.id}
          onClick={() => router.push(`/dashboard/message/${item!.applicant?.user?.id}`)}
          className='w-full py-1 shadow-sm hover:shadow-md hover:shadow-blue-600 dark:hover:shadow-white rounded-sm border border-slate-500 active:shadow-none'
        >
          <div className='relative flex items-start justify-start truncate gap-2 px-2'>
            <Image
              alt='avatar'
              src={item!.applicant?.user?.avatar}
              width='30'
              height='30'
              className='cursor-pointer rounded-full'
            />
            <div className='flex flex-col items-start relative truncate'>
              <h3 className='font-bold text-[12px] dark:text-blue-600 dark:hover:text-[#ebebeb] cursor-pointer line-clamp-2'>
                {item!.applicant?.user?.username}
              </h3>
              <p className='font-normal text-[10px] dark:text-blue-600 dark:hover:text-[#ebebeb] cursor-pointer'>
                You: Thanks!
              </p>
            </div>
          </div>
        </li>
      ));

      listItem = listApplicants;
      break;
    default:
      break;
  }

  return (
    <div className='w-[25%] h-[65vh] bg-white dark:bg-blue-900 flex flex-col items-start justify-start rounded-sm gap-4 p-4'>
      <div className='w-full flex flex-col items-start gap-2'>
        <label className='text-[#333333] font-bold text-[13px] dark:text-blue-600' htmlFor=''>
          Tìm Kiếm
        </label>
        <input
          className='w-full text-[#333333] bg-white dark:bg-transparent border-blue-600 font-bold text-[12px] dark:text-blue-600 dark:border-blue-500 dark:focus:border-blue-600 placeholder:truncate border-[2px] rounded-md py-1 px-2'
          placeholder='Nhập các từ khóa ...'
          type='text'
          name='search'
          id='search'
        />
      </div>
      <ul className='w-full flex flex-col items-start gap-2 list-none'>
        {listItem}
        <li
          onClick={() => router.push(`/dashboard/message/${Number(1)}`)}
          className='w-full py-1 mt-4 shadow-sm hover:shadow-md hover:shadow-blue-600 dark:hover:shadow-white rounded-sm border border-slate-500 active:shadow-none'
        >
          <div className='relative flex items-start justify-start truncate gap-2 px-2'>
            {/* <Image alt='avatar' src={item!.logo} width='30' height='30' className='cursor-pointer' /> */}
            <div className='flex flex-col items-start relative truncate'>
              <h3 className='font-bold text-[12px] dark:text-blue-600 dark:hover:text-[#ebebeb] cursor-pointer line-clamp-2'>
                Báo cáo hệ thống
              </h3>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default SideBarUser;
