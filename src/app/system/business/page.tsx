/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import BreadCrumbCommon from '@/components/atoms/Breadcumb';
import flex from '@/config/flex.config';
import { addresses, fields, listRoom, workTypes } from '@/faker/data';
import { BellOutlined, FileSearchOutlined, FilterOutlined, HomeOutlined, TableOutlined } from '@ant-design/icons';
import { useState } from 'react';
import CheckboxCard from '@/components/molecules/CheckboxCard';
import { useRouter } from 'next/navigation';
import { AgentCardComponent } from '@/components/organisms/system/Card/AgentCard';
import useCombinedState from '@/hooks/useCombinedState';
import { Button } from '@/components/ui/button';
import useBusiness from '@/hooks/useBusiness';

const BusinessPage = () => {
  const router = useRouter();
  const { useBusinessSearch } = useBusiness();
  const { businesses } = useBusinessSearch();
  const [filteredItems] = useState(listRoom);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(2);
  const [viewRender, setViewRender] = useState<boolean>(false);

  const [checkedState, setCheckedState] = useCombinedState<any>({
    field: [''],
    address: [''],
    workType: ['']
  });

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
      url: '/system/business',
      label: 'Doanh nghiệp',
      prefixIcon: () => <FilterOutlined />
    }
  ];

  const handleSetViewRender = () => {
    setViewRender(!viewRender);
  };

  return (
    <div
      className={
        'w-full min-h-screen md:px-10 px-3 pt-5 z-10 ' +
        flex({ direction: 'col', justifyContent: 'start', alignItems: 'center' })
      }
    >
      <div className='sm:w-[80%] w-full flex flex-row items-center justify-between gap-3 px-2'>
        <p className='text-[14px] font-bold text-black sm:text-center text-start'>
          Tổng 49.562 công ty đăng việc làm [Update 23/05/2025]
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
      <div className='sm:w-[80%] w-full min-h-screen flex flex-row items-start justify-around my-4 gap-3'>
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
            title='Quy mô'
            array={workTypes}
            setCheckedValue={setCheckedState}
            checkedLabel='workType'
            checkedValue={checkedState.workType}
          />
        </div>
        <div className='w-full flex flex-col items-center justify-start'>
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
          <div className='w-[90%] flex sm:grid md:grid-cols-3 sm:grid-cols-2 flex-col items-center justify-around gap-4 py-10'>
            {businesses.map((item: any) => (
              <AgentCardComponent
                key={item.id}
                companyItem={item}
                onClick={() => router.push(`/system/business/${item.id}`)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessPage;
