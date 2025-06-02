/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import BreadCrumbCommon from '@/components/atoms/Breadcumb';
import flex from '@/config/flex.config';
import {
  FileSearchOutlined,
  FilterOutlined,
  HomeOutlined,
  LeftOutlined,
  RightOutlined,
  TableOutlined
} from '@ant-design/icons';
import { useState } from 'react';
import CardSquare from '@/components/organisms/system/Card/Square';
import { useRouter } from 'next/navigation';
import useNews from '@/hooks/useNews';
import { Button } from '@/components/ui/button';

const NewsPage = () => {
  const router = useRouter();
  const { newses } = useNews();
  console.log('news: ', newses)
  const [filteredItems, setFilteredItems] = useState(newses);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(4);
  const [viewRender, setViewRender] = useState<boolean>(false);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  console.log('currentItems: ', currentItems, '\n', 'paginate: ', paginate);

  const breadcrumbs = [
    {
      url: '/',
      label: 'Trang chủ',
      prefixIcon: () => <HomeOutlined />
    },
    {
      url: '/system/news',
      label: 'Tin tức',
      prefixIcon: () => <FilterOutlined />
    }
  ];

  const handleSetViewRender = () => {
    setViewRender(!viewRender);
  };

  return (
    <div
      className={
        'w-full min-h-screen pt-20 px-2 z-10 ' +
        flex({ direction: 'col', justifyContent: 'start', alignItems: 'center' })
      }
    >
      <div className='sm:w-[80%] w-full flex flex-row items-center justify-start px-2'>
        <BreadCrumbCommon breadcrumbs={breadcrumbs} currentUrl='/' mode='dark' />
      </div>
      <div className='sm:w-[80%] w-full flex flex-row justify-between items-center shadow-sm shadow-black border border-slate-200 px-4 py-4 gap-2'>
        <p className='md:hidden text-slate-800 text-[14px] flex items-center gap-2'>
          <strong className='font-bold'>Loc : </strong>
          <FileSearchOutlined className='text-green-500 font-bold text-2xl cursor-pointer active:shadow-slate-500 active:shadow-sm' />
        </p>
        <div className='md:w-full w-3/4 flex justify-end items-center gap-3'>
          <div className='border border-green-500 rounded-sm'>
            <select className='px-2 border-none' name='' id=''>
              <option className='border-none' value=''>
                All
              </option>
              <option className='border-none' value='10'>
                10
              </option>
            </select>
          </div>
          <p className='text-slate-800 text-[14px] flex items-center gap-2'>
            <strong className='font-bold'>View : </strong>
            <TableOutlined
              onClick={() => handleSetViewRender()}
              className='text-green-500 font-bold text-2xl cursor-pointer active:shadow-slate-500 active:shadow-sm'
            />
          </p>
        </div>
      </div>
      <div className='sm:w-[70%] w-full grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 py-10'>
        {currentItems.map((item: any, index: any) => (
          <CardSquare key={index + 1} logo={item!.banner && item!.banner}>
            <div className='w-full px-2'>
              <p className='text-[13px] text-slate-800 font-normal'>
                {item!.information?.field && item!.information?.field}
              </p>
              <h3 className='text-[18px] text-black font-bold py-2 line-clamp-1'>{item!.title}</h3>
              <p className='text-[13px] text-slate-800 font-normal py-1 line-clamp-3'>
                <strong className='font-bold text-black'>Mô tả : </strong>
                {item!.contents}
              </p>
            </div>
            <button
              onClick={() => router.push(`/system/news/${index + 1}`)}
              className='w-1/2 py-2 rounded-md text-green-500 text-[16px] font-bold hover:bg-green-200 hover:text-green-800 active:shadow-sm active:shadow-gray-600'
            >
              Xem thêm
            </button>
          </CardSquare>
        ))}
      </div>
      <div className='relative sm:w-[30%] w-[80%] flex justify-center items-center my-8 gap-4'>
        <Button
          onClick={() => alert('Click me')}
          className='absolute left-2 w-9 text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white font-bold rounded-full flex justify-center items-center p-2'
          variant={'outline'}
          size={'sm'}
        >
          <LeftOutlined />
        </Button>
        {Array.from({ length: Math.ceil(filteredItems.length / itemsPerPage) }).map((_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className={`mx-1 px-3 py-1 rounded-full ${currentPage === index + 1 ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          >
            {index + 1}
          </button>
        ))}
        <Button
          onClick={() => alert('Click me')}
          className='absolute right-2 w-9 text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white font-bold rounded-full flex justify-center items-center p-2'
          variant={'outline'}
          size={'sm'}
        >
          <RightOutlined />
        </Button>
      </div>
    </div>
  );
};

export default NewsPage;
