/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import ButtonCommon from '@/components/atoms/ButtonCommon';
import PaginationComponent from '@/components/molecules/Pagination/pagination';
import SearchComponent from '@/components/molecules/Search';
import TableComponent from '@/components/molecules/Table';
import { DeleteOutlined, PlusOutlined, ReadOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import usePost from '@/hooks/usePost';
import Approve from './components/Approve';
import Remove from './components/Remove';

const PostManagerPage = () => {
  const [openApproveModal, setOpenApproveModal] = useState<boolean>(false);
  const [openRemoveModal, setOpenRemoveModal] = useState<boolean>(false);
  const [postId, setPostId] = useState<number>(0);
  const { usePostsSearch } = usePost();
  const { posts } = usePostsSearch();
  const [postSort, setPostSort] = useState<any[]>([]);

  useEffect(() => {
    setPostSort(posts.sort((a: any, b: any) => a.id - b.id));
  }, [posts]);

  const closeHandler = () => {
    setOpenApproveModal(!openApproveModal);
  };

  const closeRemoveHandler = () => {
    setOpenRemoveModal(!openRemoveModal);
  };

  const headers = ['#', 'Tiêu đề', 'Lĩnh vực', 'Doanh nghiệp', 'Địa điểm', 'Trạng thái', 'Hàng động'];

  const renderRow = (post: any) => (
    <>
      <td className='truncate px-2'>{post.id}</td>
      <td className='truncate px-2'>{post.title}</td>
      <td className='truncate px-2'>{post.type_of_post.title}</td>
      <td className='truncate px-2'>{post.company.title}</td>
      <td className='truncate px-2'>{post.company.work_place.address.city}</td>
      <td className={`truncate px-2 ${post.status[0] !== 'approved' ? 'text-orange-600 font-bold' : 'text-green-600'}`}>
        {post.status[0]}
      </td>
      <td className='flex items-center justify-center sm:gap-2 px-2'>
        {post.status[0] !== 'cancelled' ? (
          <>
            <ReadOutlined
              onClick={() => {
                setOpenApproveModal(!openApproveModal);
                setPostId(post.id);
              }}
              className='cursor-pointer rounded-full hover:bg-slate-50 dark:hover:bg-slate-700 p-3'
            />
            <DeleteOutlined
              onClick={() => {
                setOpenRemoveModal(!openRemoveModal);
                setPostId(post.id);
              }}
              className='cursor-pointer rounded-full hover:bg-slate-50 dark:hover:bg-slate-700 p-3'
            />
          </>
        ) : (
          <p className='p-3'>None</p>
        )}
      </td>
    </>
  );
  return (
    <div className='relative w-full h-screen bg-[#f7f7f7] dark:bg-[#242424] flex flex-col items-end gap-6 snap-y pt-20 md:px-3'>
      <div className='w-full py-2 px-2 flex-col justify-center md:gap-3 gap-y-2'>
        <div className='w-full flex sm:flex-row flex-col sm:items-center sm:justify-between items-start justify-start border shadow-sm shadow-slate-500 rounded-sm px-2 gap-1'>
          <h3 className='text-[16px] text-black font-bold hover:text-blue-500 hover:underline-offset-1 cursor-default p-2'>
            Quản lý trạng thái bài đăng
          </h3>
          <div className='w-1/2 flex justify-end items-center gap-3'>
            <div className='border border-slate-300 hover:border-green-500 cursor-pointer rounded-sm px-4 py-1'>
              <select className='px-2 border-none bg-transparent'>
                <option className='border-none bg-transparent checked:bg-transparent' value=''>
                  Trạng thái
                </option>
                <option className='border-none bg-transparent checked:bg-transparent' value='applied'>
                  Đang chờ duyệt
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

        <TableComponent headers={headers} data={postSort} renderRow={renderRow} />

        <div className='w-full flex justify-end py-1'>
          <PaginationComponent />
        </div>
      </div>

      <Approve setOpenApprove={setOpenApproveModal} openApprove={openApproveModal} onClick={closeHandler} id={postId} />
      <Remove
        openRemove={openRemoveModal}
        setOpenRemove={setOpenRemoveModal}
        onClick={closeRemoveHandler}
        id={postId}
      />
    </div>
  );
};

export default PostManagerPage;
