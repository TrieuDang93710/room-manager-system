/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import TableComponent from '@/components/molecules/Table';
import { EditOutlined, ReadOutlined } from '@ant-design/icons';

interface ResumeStatusDetailPageProps {
  params: { id: string };
}

const ResumeStatusDetailPage = ({ params }: ResumeStatusDetailPageProps) => {
  console.log('params: ', params.id);

  const headers = ['#', 'Vị trí ứng tuyển', 'Ứng viên', 'Ngày ứng tuyển', 'Hồ sơ ứng tuyển', 'Trạng thái', 'Hành động'];

  const applicant = Array.from({ length: 5 }).map((_, index) => ({
    title: `Nhân viên phục vụ`,
    applicant: `Ứng viên ${index + 1}`,
    createAt: `12/02/2025`,
    status: 'Đã ứng tuyển'
  }));

  const renderRow = (apply: any, index: any) => (
    <>
      <td className='truncate p-2'>{index + 1}</td>
      <td className='truncate p-2'>{apply.title}</td>
      <td className='truncate p-2'>{apply.applicant}</td>
      <td className='truncate p-2'>{apply.createAt}</td>
      <td className='truncate p-2'>j</td>
      <td className={`truncate p-2`}>{apply.status}</td>
      <td>
        <ReadOutlined
          onClick={() => alert('click me')}
          className='cursor-pointer rounded-full hover:bg-slate-50 dark:hover:bg-slate-700 p-3'
        />
        <EditOutlined
          onClick={() => alert('click me')}
          className='cursor-pointer rounded-full hover:bg-slate-50 dark:hover:bg-slate-700 p-3'
        />
      </td>
    </>
  );
  return <TableComponent headers={headers} data={applicant} renderRow={renderRow} />;
};

export default ResumeStatusDetailPage;
