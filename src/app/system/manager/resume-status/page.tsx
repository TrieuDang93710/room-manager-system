/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import TableComponent from '@/components/molecules/Table';
import usePost from '@/hooks/usePost';
import { EyeOutlined, ReadOutlined, UserOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const ResumeStatusPage = () => {
  const headers = ['#', 'Vị trí ứng tuyển', 'Bài viết', 'Lượt xem', 'Số lượng ứng tuyển', 'Chi tiết'];

  const { usePostsSearch } = usePost();
  const { posts } = usePostsSearch();
  const [numApplies, setNumApplies] = useState<any[]>([]);
  const [numApplicant, setNumApplicant] = useState<number>(0);

  useEffect(() => {
    let count: number = 0;

    posts.map((item: any) => {
      setNumApplies(item.applies);
      console.log(item.applies);
      console.log('item.applies.length', item.applies.length);
      numApplies.forEach(() => {
        if (count < numApplies.length - 1) {
          count = count + 1;
          console.log('count: ', count);
          return;
        }

        setNumApplicant(numApplies.length);
      });
    });
  }, [numApplicant, numApplies, posts]);

  const renderRow = (post: any, index: any) => (
    <>
      <td className='truncate p-2'>{index + 1}</td>
      <td className='truncate p-2'>{post.title}</td>
      <td className='truncate p-2 flex flex-row items-center justify-center'>
        <p className='text-[13px] text-white font-medium bg-blue-600 w-[60%] active:shadow-sm active:shadow-slate-800 rounded-md px-4 py-1'>
          Chi tiết
        </p>
      </td>
      <td className='truncate p-2'>
        <EyeOutlined className='mr-2' />
        {post.views}
      </td>
      <td className='truncate p-2'>
        <UserOutlined className='mr-2' />
        {numApplicant}
      </td>
      <td>
        <Link href={`/system/manager/resume-status/${post.id}`}>
          <ReadOutlined className='cursor-pointer rounded-full hover:bg-slate-50 dark:hover:bg-slate-700 p-3' />
        </Link>
      </td>
    </>
  );
  return <TableComponent headers={headers} data={posts} renderRow={renderRow} />;
};

export default ResumeStatusPage;
