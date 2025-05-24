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
import { useState } from 'react';
import CheckboxCard from '@/components/molecules/CheckboxCard';
import PostCardRow from '@/components/organisms/system/Card/PostCardRow';
import { PostCardSquareComponent } from '@/components/organisms/system/Card/PostCardSquare';
import usePost from '@/hooks/usePost';
import useCombinedState from '@/hooks/useCombinedState';
import { Button } from '@/components/ui/button';

const RentOfRoomPage = () => {
  const [filteredItems] = useState(listRoom);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(2);
  const [viewRender, setViewRender] = useState<boolean>(false);
  const [checkedState, setCheckedState] = useCombinedState<any>({
    field: [''],
    address: [''],
    workType: ['']
  });
  const { usePostsSearch } = usePost();
  const { posts } = usePostsSearch({
    fields: checkedState.field.toString(),
    addresses: checkedState.address.toString(),
    workTypes: checkedState.workType.toString()
  });
  console.log('posts: ', posts);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

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
      label: 'Tiềm kiếm',
      prefixIcon: () => <FilterOutlined />
    }
  ];

  const handleSetViewRender = () => {
    setViewRender(!viewRender);
  };

  console.log(
    'fieldChecked: ',
    checkedState.field,
    '\naddressChecked: ',
    checkedState.address,
    '\nworkTypeChecked: ',
    checkedState.workType
  );

  return (
    <div
      className={
        'w-full min-h-screen md:px-10 px-3 pt-5 z-10 ' +
        flex({ direction: 'col', justifyContent: 'start', alignItems: 'center' })
      }
    >
      <div className='w-[80%] flex flex-row items-center justify-between gap-3'>
        <p className='text-[14px] font-bold text-black text-center'>Tuyển dụng 49.562 việc làm [Update 23/05/2025]</p>
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
      <div className='w-[80%] flex flex-row items-center justify-start'>
        <BreadCrumbCommon breadcrumbs={breadcrumbs} currentUrl='/' mode='dark' />
      </div>
      <div className='w-[80%] flex flex-row items-start justify-around my-4 gap-3'>
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
          <div className='w-full flex flex-row items-center justify-between p-4'>
            <p className='inline-flex items-center justify-around'>
              Tìm kiếm theo:
            </p>
            <ul className='relative w-[80%] h-full flex flex-row items-center justify-start px-16 gap-4'>
              <Button
                onClick={() => alert('Click me')}
                className='absolute left-2 w-9 text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white font-bold rounded-full flex justify-center items-center p-2'
                variant={'outline'}
                size={'sm'}
              >
                <LeftOutlined className='hidden md:block' />
              </Button>
              <Button
                onClick={() => alert('Click me')}
                className='absolute right-2 w-9 text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white font-bold rounded-full flex justify-center items-center p-2'
                variant={'outline'}
                size={'sm'}
              >
                <RightOutlined className='hidden md:block' />
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
              {posts.map((item: any, index: any) => (
                <PostCardSquareComponent key={index + 1} post={item} />
              ))}
            </div>
          ) : (
            <div className='w-full flex flex-col items-center justify-start px-2 py-4 gap-3'>
              {posts.map((item: any, index: any) => (
                <PostCardRow key={index} postItem={item} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RentOfRoomPage;
