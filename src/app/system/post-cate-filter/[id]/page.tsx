/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import BreadCrumbCommon from '@/components/atoms/Breadcumb';
import flex from '@/config/flex.config';
import { addresses, fields, listRoom, workTypes } from '@/faker/data';
import {
  BellOutlined,
  FileSearchOutlined,
  FilterOutlined,
  HomeOutlined,
  LeftOutlined,
  RightOutlined,
  TableOutlined
} from '@ant-design/icons';
import { useEffect, useState } from 'react';
import CheckboxCard from '@/components/molecules/CheckboxCard';
import PostCardRow from '@/components/organisms/system/Card/PostCardRow';
import { PostCardSquareComponent } from '@/components/organisms/system/Card/PostCardSquare';
import useCombinedState from '@/hooks/useCombinedState';
import { Button } from '@/components/ui/button';
import useApiPublic from '@/hooks/useApiPublic';
import usePost from '@/hooks/usePost';

interface RentOfRoomPageProps {
  params: { id: number };
}

const RentOfRoomPage = ({ params }: RentOfRoomPageProps) => {
  const apiPublic = useApiPublic();
  const [filteredItems] = useState(listRoom);
  const { usePostsSearch } = usePost();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(2);
  const [viewRender, setViewRender] = useState<boolean>(false);
  const [category, setCategory] = useState<any>(null);
  const [postFilterByCategory, setpostFilterByCategory] = useState<any[]>([]);
  const [checkedState, setCheckedState] = useCombinedState<any>({
    field: [''],
    address: [''],
    workType: ['']
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);
  const { posts } = usePostsSearch({});

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  console.log('currentItems, paginate: ', currentItems, paginate);

  const breadcrumbs = [
    {
      url: '/',
      label: 'Trang chủ',
      prefixIcon: () => <HomeOutlined />
    },
    {
      url: '/system/post-filter',
      label: (category && category.title) || 'Danh mục',
      prefixIcon: () => <FilterOutlined />
    }
  ];

  useEffect(() => {
    apiPublic
      .get(`/category/${Number(params.id)}`)
      .then((result) => {
        console.log('fields: ', result.data.data);
        setCategory(result.data.data);
      })
      .catch((error) => {
        console.error('Error fetching fields:', error);
      });
  }, [apiPublic, params.id]);

  useEffect(() => {
    setpostFilterByCategory(posts.filter((item: any) => item.type_of_post.title === category && category!.title));
  }, [category, posts]);

  const handleSetViewRender = () => {
    setViewRender(!viewRender);
  };

  return (
    <div
      className={
        'w-full min-h-screen md:px-10 px-3 pt-20 z-10 ' +
        flex({ direction: 'col', justifyContent: 'start', alignItems: 'center' })
      }
    >
      <div className='sm:w-[80%] w-full flex flex-row items-center justify-between gap-3 px-2'>
        <p className='text-[14px] font-bold text-black sm:text-center text-start'>
          Tuyển dụng {category && category!.posts.length} việc làm [Update {new Date().toLocaleDateString()}]
        </p>
        <Button
          onClick={() => alert('Click me')}
          className='hover:text-white border-blue-600 hover:bg-blue-600 text-blue-600 font-bold rounded-full md:px-8 px-4'
          variant={'outline'}
          size={'lg'}
        >
          <BellOutlined />
          <p className='hidden md:block'>Tạo thông báo việc làm</p>
        </Button>
      </div>
      <div className='sm:w-[80%] w-full flex flex-row items-center justify-start'>
        <BreadCrumbCommon breadcrumbs={breadcrumbs} currentUrl='/' mode='dark' />
      </div>
      <div className='sm:w-[80%] w-full flex flex-row items-start justify-around my-4 gap-3'>
        <div className='w-[20%] min-h-screen border dark:border-blue-600 shadow-sm shadow-blue-950 dark:shadow-blue-800 hidden md:flex flex-col items-center justify-start px-4'>
          <h3 className='text-[18px] text-black dark:text-blue-600 font-medium py-2'>Bộ tìm kiếm</h3>
          <CheckboxCard
            title='Lĩnh vực'
            array={fields}
            setCheckedValue={setCheckedState}
            checkedLabel='field'
            checkedValue={checkedState.field}
          />
          <CheckboxCard
            title='Địa điểm'
            array={addresses}
            setCheckedValue={setCheckedState}
            checkedLabel='address'
            checkedValue={checkedState.address}
          />
          <CheckboxCard
            title='Loại công việc'
            array={workTypes}
            setCheckedValue={setCheckedState}
            checkedLabel='workType'
            checkedValue={checkedState.workType}
          />
        </div>
        <div className='w-full flex flex-col items-center justify-start'>
          <div className='w-full h-[10vh] flex sm:flex-row flex-col sm:items-center items-start sm:justify-start justify-start p-4 gap-2'>
            <p className='inline-flex items-center justify-around'>Tìm kiếm theo:</p>
            <ul className='relative w-fit sm:h-fit h-full flex flex-row items-center justify-start px-16 gap-4'>
              <Button
                onClick={() => alert('Click me')}
                className='absolute left-2 w-9 text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white font-bold rounded-full flex justify-center items-center p-2'
                variant={'outline'}
                size={'sm'}
              >
                <LeftOutlined />
              </Button>
              <li
                onClick={() => alert('Click me')}
                className={`py-2 px-4 rounded-full border hover:border-blue-600 font-medium cursor-pointer bg-blue-600 text-white`}
              >
                Tất cả
              </li>
              <Button
                onClick={() => alert('Click me')}
                className='absolute right-2 w-9 text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white font-bold rounded-full flex justify-center items-center p-2'
                variant={'outline'}
                size={'sm'}
              >
                <RightOutlined />
              </Button>
            </ul>
          </div>
          <div className='w-full shadow-sm shadow-slate-600 dark:border-none dark:bg-blue-800 dark:rounded-sm flex flex-row justify-between items-center px-4 py-2 gap-2'>
            <p className='md:hidden text-slate-800 text-[14px] flex items-center gap-2'>
              <strong className='font-bold'>Loc : </strong>
              <FileSearchOutlined className='text-blue-600 font-bold text-2xl cursor-pointer active:shadow-slate-500 active:shadow-sm' />
            </p>
            <div className='md:w-full w-3/4 flex justify-end items-center gap-3'>
              <div className='border border-blue-600 rounded-sm'>
                <select className='px-2 border-none' name='' id=''>
                  <option className='border-none' value=''>
                    All
                  </option>
                  <option className='border-none' value='10'>
                    10
                  </option>
                </select>
              </div>
              <p className='text-blue-600 dark:text-white text-[14px] flex items-center gap-2'>
                <strong className='font-bold'>View : </strong>
                <TableOutlined
                  onClick={() => handleSetViewRender()}
                  className='text-blue-600 dark:text-white font-bold text-2xl cursor-pointer active:shadow-slate-500 active:shadow-sm'
                />
              </p>
            </div>
          </div>
          {viewRender ? (
            <div className='w-full flex sm:grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 flex-col items-center justify-around gap-3 py-4 px-2'>
              {postFilterByCategory ? (
                postFilterByCategory.map((item: any, index: any) => (
                  <PostCardSquareComponent key={index + 1} post={item} />
                ))
              ) : (
                <p className='text-blue-600 font-bold'>No posts found</p>
              )}
            </div>
          ) : (
            <div className='w-full flex flex-col items-center justify-center px-2 py-4 gap-3'>
              {postFilterByCategory ? (
                postFilterByCategory.map((item: any, index: any) => <PostCardRow key={index} postItem={item} />)
              ) : (
                <p className='text-blue-600 font-bold'>No posts found</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RentOfRoomPage;
