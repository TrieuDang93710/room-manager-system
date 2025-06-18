/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { useEffect, useState } from 'react';
import AddPost from './components/AddPost';
import SearchComponent from '@/components/molecules/Search';
import TableComponent from '@/components/molecules/Table';
import ButtonCommon from '@/components/atoms/ButtonCommon';
import PostCardRow from '@/components/organisms/system/Card/PostCardRow';
import PaginationComponent from '@/components/molecules/Pagination/pagination';
import { AppstoreOutlined, DeleteOutlined, PlusOutlined, ReadOutlined, TableOutlined } from '@ant-design/icons';
import './room.css';
import AddField from './components/AddField';
import AddBusiness from '../business/components/AddBusiness';
import useApiPublic from '@/hooks/useApiPublic';
import { useAuth } from '@/hooks/auth/useAuth';

const RoomManagerPage = () => {
  const apiPublic = useApiPublic();
  const auth = useAuth();
  const { user } = auth;
  const [openAddPost, setOpenAddPost] = useState<boolean>(false);
  const [openAddField, setOpenAddField] = useState<boolean>(false);
  const [openAddBusiness, setOpenAddBusiness] = useState<boolean>(false);
  const [viewRender, setViewRender] = useState<boolean>(false);
  const [postFIlterByEmail, setPostFilterByEmail] = useState<any[]>([]);

  useEffect(() => {
    apiPublic
      .get(`post/get-by-email/?email=${user && user!.email}`)
      .then((res) => {
        if (res.data) {
          setPostFilterByEmail(res.data.data.result);
        }
      })
      .catch((error) => {
        if (error.response.data) {
          console.error('Error fetching posts by email:', error.response.data.message);
        }
      });
  }, [apiPublic, user]);

  const closeAddPostHandler = () => {
    setOpenAddPost(!openAddPost);
  };

  const closeAddFieldHandler = () => {
    setOpenAddField(!openAddField);
  };

  const closeAddBusinessHandler = () => {
    setOpenAddBusiness(!openAddBusiness);
  };

  const headers = ['#', 'Tiêu đề', 'Lĩnh vực', 'Ngày hết hạn', 'Trạng thái', 'Xử lý'];

  const renderRow = (post: any, index: any) => (
    <>
      <td className='truncate px-2'>{index + 1}</td>
      <td className='truncate px-2'>{post.title}</td>
      <td className='truncate px-2'>{post.type_of_post.title}</td>
      <td className='truncate px-2'>{post.duration}</td>
      <td className={`truncate px-2 ${post && post.status[0] !== 'approved' ? 'text-orange-600' : 'text-green-600'}`}>
        {post.status[0]}
      </td>
      <td className='flex items-center justify-center sm:gap-2 px-2'>
        <ReadOutlined className='cursor-pointer rounded-full hover:bg-slate-50 dark:hover:bg-slate-700 p-3' />
        <DeleteOutlined className='cursor-pointer rounded-full hover:bg-slate-50 dark:hover:bg-slate-700 p-3' />
      </td>
    </>
  );

  return (
    <div className='relative w-full h-screen dark:bg-slate-900 flex flex-col items-end gap-6 snap-y md:px-3'>
      <div className='w-full py-2 px-2 flex-col justify-center md:gap-3 gap-y-2'>
        <div className='w-full flex sm:flex-row flex-col sm:items-center sm:justify-between items-start justify-start border shadow-sm dark:border-none dark:bg-blue-800 shadow-slate-500 rounded-sm px-2 gap-1'>
          <h3 className='text-[16px] text-black dark:text-white font-bold hover:text-blue-500 hover:underline-offset-1 cursor-default p-2'>
            Quản lý bài đăng
          </h3>
          <div className='sm:w-1/2 w-full flex justify-between items-center gap-3'>
            <div className='w-[50%] border border-slate-300 hover:border-green-500 cursor-pointer rounded-sm px-4 py-1'>
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
              <strong className='font-bold dark:text-white'>Hiển thị : </strong>
              {viewRender ? (
                <AppstoreOutlined
                  onClick={() => setViewRender(!viewRender)}
                  className='text-blue-600 dark:text-white font-bold text-xl cursor-pointer active:shadow-slate-500 active:shadow-sm'
                />
              ) : (
                <TableOutlined
                  onClick={() => setViewRender(!viewRender)}
                  className='text-blue-600 dark:text-white font-bold text-2xl cursor-pointer active:shadow-slate-500 active:shadow-sm'
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
            <div className='border border-slate-300 dark:border-blue-600 hover:border-green-500 cursor-pointer rounded-sm px-2 py-1 mt-2'>
              <select className='px-2 border-none bg-transparent'>
                <option className='border-none bg-transparent dark:text-blue-600 checked:bg-transparent' value=''>
                  All
                </option>
                <option
                  className='border-none bg-transparent dark:text-blue-600 checked:bg-transparent'
                  value='applied'
                >
                  10
                </option>
              </select>
            </div>
          )}
        </div>
        {viewRender ? (
          <TableComponent headers={headers} data={postFIlterByEmail} renderRow={renderRow} />
        ) : (
          <div className='w-full h-[60vh] flex flex-col items-center justify-start hide-scrollbar overflow-y-auto gap-4 p-4 mt-4'>
            {postFIlterByEmail && postFIlterByEmail.map((item: any) => <PostCardRow key={item.id} postItem={item} />)}
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
