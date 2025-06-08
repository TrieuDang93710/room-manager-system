/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import ButtonCommon from '@/components/atoms/ButtonCommon';
import PaginationComponent from '@/components/molecules/Pagination/pagination';
import TableComponent from '@/components/molecules/Table';
import SearchComponent from '@/components/molecules/Search';
import { PlusOutlined, StarFilled } from '@ant-design/icons';
import { useApiSecure } from '@/hooks/useApiSecure';
import { useEffect, useState } from 'react';
import { useAuth } from '@/hooks/auth/useAuth';

interface ReviewerPageProps {
  params: { id: string };
}

const ReviewerPage = ({ params }: ReviewerPageProps) => {
  console.log('params: ', params.id);
  const { user } = useAuth();
  const apiSecure = useApiSecure();
  const [reviewers, setReviewers] = useState<any[]>([]);

  useEffect(() => {
    apiSecure
      .get('/rating')
      .then((result) => {
        console.log('result: ', result);
        setReviewers(result.data.data);
      })
      .catch((error) => {
        console.log('error: ', error);
      });
  }, [apiSecure, user]);

  console.log('reviewers: ', reviewers);

  const headers = ['#', 'Số sao', 'Đánh giá', 'Người đánh giá', 'Ảnh'];

  const renderRow = (review: any, index: any) => (
    <>
      <td className='truncate p-2'>{index + 1}</td>
      <td className='truncate p-2'>
        {Array.from({ length: review!.star }).map((_, idx) => (
          <StarFilled key={idx} className='text-yellow-500'/>
        ))}
      </td>
      <td className='truncate p-2'>{review!.comment}</td>
      <td className='truncate p-2 flex flex-row items-center justify-center'>
        {review!.userId && review!.userId.username}
      </td>
      <td className='p-2'>
        <img
          src={review!.userId && review!.userId.avatar}
          alt='avatar'
          className='w-[30px] h-[30px] rounded-full object-cover'
        />
      </td>
    </>
  );
  return (
    <div className='relative w-full h-screen bg-[#f7f7f7] dark:bg-[#242424] flex flex-col items-end gap-6 snap-y pt-20 md:px-3'>
      <div className='w-full py-2 px-2 flex-col justify-center md:gap-3 gap-y-2'>
        <div className='w-full flex sm:flex-row flex-col sm:items-center sm:justify-between items-start justify-start border shadow-sm shadow-slate-500 dark:border-none dark:bg-blue-800 rounded-sm px-2 gap-1'>
          <h3 className='text-[16px] text-black dark:text-white font-bold hover:text-blue-500 hover:underline-offset-1 cursor-default p-2'>
            Quản lý hóa đơn
          </h3>
          <div className='w-1/2 flex justify-end items-center gap-3'>
            <div className='border border-slate-300 hover:border-green-500 cursor-pointer rounded-sm px-4 py-1'>
              <select className='px-2 border-none bg-transparent'>
                <option className='border-none bg-transparent checked:bg-transparent' value=''>
                  Trạng thái
                </option>
                <option className='border-none bg-transparent checked:bg-transparent' value='applied'>
                  Thành công
                </option>
              </select>
            </div>
          </div>
        </div>
        <div className='md:flex md:flex-row flex-col gap-5 items-end justify-between my-6 px-2'>
          <div className='lg:w-[50%] md:w-2/3 w-full truncate flex justify-start gap-2'>
            <ButtonCommon onClick={() => alert('click me')} icon={<PlusOutlined />} title='Word' />
            <ButtonCommon onClick={() => alert('click me')} icon={<PlusOutlined />} title='Excel' />
          </div>
          <SearchComponent />
        </div>
        <TableComponent headers={headers} data={reviewers} renderRow={renderRow} />
        <div className='w-full flex justify-end py-1'>
          <PaginationComponent />
        </div>
      </div>
    </div>
  );
};

export default ReviewerPage;
