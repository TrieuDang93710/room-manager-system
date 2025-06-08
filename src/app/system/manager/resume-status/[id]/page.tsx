/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import TableComponent from '@/components/molecules/Table';
import usePost from '@/hooks/usePost';
import { EditOutlined, ReadOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import Approve from '../components/Approve';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/lib/store';
import { addAllApplies } from '@/lib/features/applies/appliesSlice';

interface ResumeStatusDetailPageProps {
  params: { id: string };
}

// export async function generateStaticParams() {
//   const res = await fetch('https://api.yourservice.com/endpoint');
//   const data = await res.json();

//   const results = data.result;

//   return results.map((item: { id: { toString: () => any; }; }) => ({ id: item.id.toString() }));
// }


const ResumeStatusDetailPage = ({ params }: ResumeStatusDetailPageProps) => {
  const headers = ['#', 'Vị trí ứng tuyển', 'Ứng viên', 'Ngày ứng tuyển', 'Hồ sơ ứng tuyển', 'Trạng thái', 'Hành động'];

  const { usePostsSearch } = usePost();
  const { posts } = usePostsSearch();
  const dispatch = useDispatch();
  const appliesRedux = useSelector((state: RootState) => state.applies);
  const [numApplies, setNumApplies] = useState<any[]>([]);
  const [openApproveModal, setOpenApproveModal] = useState<boolean>(false);
  const [applyId, setApplyId] = useState<number>(0);

  useEffect(() => {
    const result = posts.filter((postItem: any) => postItem.id === Number(params.id));

    result.map((item: any) => {
      item.applies.map((apl: any) => {
        numApplies.push(apl);
        setNumApplies(numApplies);
      });
      dispatch(addAllApplies(item.applies));
    });
  }, [dispatch, numApplies, params.id, posts]);
  console.log('numApplies: ', numApplies);
  console.log('appliesRedux: ', appliesRedux.applies[0]);

  const closeApproveHandler = () => {
    setOpenApproveModal(!openApproveModal);
  };

  const renderRow = (apply: any, index: any) => (
    <>
      <td className='truncate p-2'>{index + 1}</td>
      <td className='truncate p-2'>{apply.post.title}</td>
      <td className='truncate p-2'>{apply.applicant && apply.applicant.user.username}</td>
      <td className='truncate p-2'>{apply.createAt}</td>
      <td className='truncate p-2 flex flex-row items-center justify-center'>
        <p className='text-[13px] text-white font-medium bg-blue-600 w-[80%] active:shadow-sm active:shadow-slate-800 rounded-md px-4 py-1'>
          Chi tiết
        </p>
      </td>
      <td className={`truncate p-2 ${apply && apply.status[0] === 'applied' ? 'text-blue-600 font-medium' : ''}`}>
        {apply.status[0]}
      </td>
      <td>
        <ReadOutlined
          onClick={() => alert('click me')}
          className='cursor-pointer rounded-full hover:bg-slate-50 dark:hover:bg-slate-700 p-3'
        />
        <EditOutlined
          onClick={() => {
            closeApproveHandler();
            setApplyId(apply.id);
          }}
          className='cursor-pointer rounded-full hover:bg-slate-50 dark:hover:bg-slate-700 p-3'
        />
      </td>
    </>
  );
  return (
    <div className=''>
      <TableComponent headers={headers} data={numApplies} renderRow={renderRow} />
      <Approve
        setOpenApprove={setOpenApproveModal}
        openApprove={openApproveModal}
        onClick={closeApproveHandler}
        id={applyId}
      />
    </div>
  );
};

export default ResumeStatusDetailPage;
