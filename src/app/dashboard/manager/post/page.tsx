/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { useState } from 'react';
import AddPost from './components/AddPost';
import SearchComponent from '@/components/molecules/Search';
import TableComponent from '@/components/molecules/Table';
import ButtonCommon from '@/components/atoms/ButtonCommon';
import PostCardRow from '@/components/organisms/system/Card/PostCardRow';
import PaginationComponent from '@/components/molecules/Pagination/pagination';
import {
  AppstoreOutlined,
  DeleteOutlined,
  EyeOutlined,
  PlusOutlined,
  ReadOutlined,
  TableOutlined,
  TeamOutlined
} from '@ant-design/icons';
import './room.css';
import AddField from './components/AddField';
import AddBusiness from './components/AddBusiness';

const RoomManagerPage = () => {
  const [openAddPost, setOpenAddPost] = useState<boolean>(false);
  const [openAddField, setOpenAddField] = useState<boolean>(false);
  const [openAddBusiness, setOpenAddBusiness] = useState<boolean>(false);
  const [viewRender, setViewRender] = useState<boolean>(false);

  const closeAddPostHandler = () => {
    setOpenAddPost(!openAddPost);
  };

  const closeAddFieldHandler = () => {
    setOpenAddField(!openAddField);
  };

  const closeAddBusinessHandler = () => {
    setOpenAddBusiness(!openAddBusiness);
  };

  const headers = ['Tiêu đề', 'Lĩnh vực', 'Ngày hết hạn', 'Lượt xem', 'Trạng thái', 'Ứng viên', 'Xử lý'];

  const posts = Array.from({ length: 20 }).map((_, index) => ({
    title: `Nhân viên kinh doanh ${index + 1}`,
    field: 'Kinh doanh',
    date: '11 - 03 - 2025',
    view: '1',
    status: 'Chưa duyệt'
  }));

  const renderRow = (post: any) => (
    <>
      <td className='truncate px-2'>{post.title}</td>
      <td className='truncate px-2'>{post.field}</td>
      <td className='truncate px-2'>{post.date}</td>
      <td className='truncate px-2'>
        <EyeOutlined className='cursor-pointer rounded-full hover:bg-slate-50 dark:hover:bg-slate-700 p-3' />{' '}
        {post.view}
      </td>
      <td className='truncate px-2'>{post.status}</td>
      <td className='truncate px-2'>
        <TeamOutlined className='cursor-pointer rounded-full hover:bg-slate-50 dark:hover:bg-slate-700 p-3' />{' '}
      </td>
      <td className='flex items-center justify-center sm:gap-2 px-2'>
        <ReadOutlined className='cursor-pointer rounded-full hover:bg-slate-50 dark:hover:bg-slate-700 p-3' />
        <DeleteOutlined className='cursor-pointer rounded-full hover:bg-slate-50 dark:hover:bg-slate-700 p-3' />
      </td>
    </>
  );

  return (
    <div className='relative w-full h-screen bg-[#f7f7f7] dark:bg-[#242424] flex flex-col items-end gap-6 snap-y pt-20 md:px-3'>
      <div className='w-full py-2 px-2 flex-col justify-center md:gap-3 gap-y-2'>
        <div className='w-full flex sm:flex-row flex-col sm:items-center sm:justify-between items-start justify-start border shadow-sm shadow-slate-500 rounded-sm px-2 gap-1'>
          <h3 className='text-[16px] text-black font-bold hover:text-blue-500 hover:underline-offset-1 cursor-default p-2'>
            Quản lý bài đăng
          </h3>
          <div className='w-1/2 flex justify-end items-center gap-3'>
            <div className='border border-slate-300 hover:border-green-500 cursor-pointer rounded-sm px-4 py-1'>
              <select className='px-2 border-none bg-transparent'>
                <option className='border-none bg-transparent checked:bg-transparent' value=''>
                  Trạng thái
                </option>
                <option className='border-none bg-transparent checked:bg-transparent' value='applied'>
                  Đã ứng tuyển
                </option>
              </select>
            </div>
            <p className='text-slate-800 text-[14px] flex items-center gap-2'>
              <strong className='font-bold'>Hiển thị : </strong>
              {viewRender ? (
                <AppstoreOutlined
                  onClick={() => setViewRender(!viewRender)}
                  className='text-green-500 font-bold text-xl cursor-pointer active:shadow-slate-500 active:shadow-sm'
                />
              ) : (
                <TableOutlined
                  onClick={() => setViewRender(!viewRender)}
                  className='text-green-500 font-bold text-2xl cursor-pointer active:shadow-slate-500 active:shadow-sm'
                />
              )}
            </p>
          </div>
        </div>
        <div className='md:flex md:flex-row flex-col gap-5 items-end justify-between my-6 px-2'>
          <div className='lg:w-[50%] md:w-2/3 w-full truncate flex justify-start gap-2'>
            <ButtonCommon onClick={closeAddPostHandler} icon={<PlusOutlined />} title='Tạo mới bài đăng' />
            <ButtonCommon onClick={closeAddFieldHandler} icon={<PlusOutlined />} title='Thêm lĩnh vực' />
            <ButtonCommon onClick={closeAddBusinessHandler} icon={<PlusOutlined />} title='Thêm doanh nghiệp' />
          </div>
          {viewRender ? (
            <SearchComponent />
          ) : (
            <div className='border border-slate-300 hover:border-green-500 cursor-pointer rounded-sm px-2 py-1'>
              <select className='px-2 border-none bg-transparent'>
                <option className='border-none bg-transparent checked:bg-transparent' value=''>
                  All
                </option>
                <option className='border-none bg-transparent checked:bg-transparent' value='applied'>
                  10
                </option>
              </select>
            </div>
          )}
        </div>
        {viewRender ? (
          <TableComponent headers={headers} data={posts} renderRow={renderRow} />
        ) : (
          <div className='w-full border h-[60vh] border-green-500 flex flex-col items-center justify-start overflow-y-auto gap-4 p-4 mt-4'>
            {Array.from({ length: 4 }).map((_, index) => (
              <PostCardRow applied={false} key={index} />
            ))}
          </div>
        )}
        {viewRender && (
          <div className='w-full flex justify-end py-1'>
            <PaginationComponent />
          </div>
        )}
      </div>
      <AddPost openAddPost={openAddPost} setOpenAddPost={setOpenAddPost} onClick={closeAddPostHandler} />
      <AddField openAddField={openAddField} setOpenAddField={setOpenAddField} onClick={closeAddFieldHandler} />
      <AddBusiness
        openAddBusiness={openAddBusiness}
        setOpenAddBusiness={setOpenAddBusiness}
        onClick={closeAddBusinessHandler}
      />
    </div>
  );
};

export default RoomManagerPage;
