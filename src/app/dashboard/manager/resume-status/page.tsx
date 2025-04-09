/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import TableComponent from '@/components/molecules/Table';
import { EyeOutlined, ReadOutlined, UserOutlined } from '@ant-design/icons';
import Link from 'next/link';

const ResumeStatusPage = () => {
  const headers = ['#', 'Vị trí ứng tuyển', 'Bài viết', 'Lượt xem', 'Số lượng ứng tuyển', 'Chi tiết'];

  const applicant = Array.from({ length: 5 }).map((_, index) => ({
    title: `Nhân viên phục vụ ${index + 1}`,
    view: '10',
    applies: '5'
  }));

  const renderRow = (apply: any, index: any) => (
    <>
      <td className='truncate p-2'>{index + 1}</td>
      <td className='truncate p-2'>{apply.title}</td>
      <td className='truncate p-2'>j</td>
      <td className='truncate p-2'>
        <EyeOutlined className='mr-2' />
        {apply.view}
      </td>
      <td className='truncate p-2'>
        <UserOutlined className='mr-2' />
        {apply.applies}
      </td>
      <td>
        <Link href={`/dashboard/manager/resume-status/${index + 1}`}>
          <ReadOutlined className='cursor-pointer rounded-full hover:bg-slate-50 dark:hover:bg-slate-700 p-3' />
        </Link>
      </td>
    </>
  );
  return <TableComponent headers={headers} data={applicant} renderRow={renderRow} />;
};

export default ResumeStatusPage;
