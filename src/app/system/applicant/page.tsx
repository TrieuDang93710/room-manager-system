/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import BreadCrumbCommon from '@/components/atoms/Breadcumb';
import flex from '@/config/flex.config';
import { addresses, fields, listRoom, workTypes } from '@/faker/data';
import { FileSearchOutlined, FilterOutlined, HomeOutlined, TableOutlined } from '@ant-design/icons';
import { useState } from 'react';
import CheckboxCard from '@/components/molecules/CheckboxCard';
import { useRouter } from 'next/navigation';
import { ApplicantCardComponent } from '@/components/organisms/system/Card/ApplicantCard';
import useCombinedState from '@/hooks/useCombinedState';

const ApplicantPage = () => {
  const router = useRouter();
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
      url: '/system/applicant',
      label: 'Ứng viên',
      prefixIcon: () => <FilterOutlined />
    }
  ];

  const handleSetViewRender = () => {
    setViewRender(!viewRender);
  };

  return (
    <div
      className={
        'w-full min-h-screen md:px-10 px-3 pt-20  z-10' +
        flex({ direction: 'col', justifyContent: 'start', alignItems: 'center' })
      }
    >
      <div
        className='w-full h-[20vh] px-2 bg-center bg-cover bg-no-repeat flex flex-row items-center justify-start'
        style={{
          backgroundImage:
            "url('https://taggd.in/wp-content/uploads/2022/12/Job-Prospects-for-Freshers-in-Pharmaceutical-Industry-Banner.png')"
        }}
      >
        <BreadCrumbCommon breadcrumbs={breadcrumbs} currentUrl='/' mode='dark' />
      </div>
      <div className='w-full flex flex-row items-start justify-around my-4 gap-3'>
        <div className='w-[20%] min-h-screen border dark:border-blue-600 shadow-md shadow-blue-950 dark:shadow-blue-800 hidden md:flex flex-col items-center justify-start px-4'>
          <h3 className='text-[18px] text-black dark:text-blue-600 font-medium py-2'>Bộ tìm kiếm</h3>
          <CheckboxCard
            title='Trình độ'
            array={fields}
            setCheckedValue={setCheckedState}
            checkedLabel='field'
            checkedValue={checkedState.field}
          />
          <CheckboxCard
            title='Giới tính'
            array={addresses}
            setCheckedValue={setCheckedState}
            checkedLabel='address'
            checkedValue={checkedState.address}
          />
          <CheckboxCard
            title='Tuổi'
            array={workTypes}
            setCheckedValue={setCheckedState}
            checkedLabel='workType'
            checkedValue={checkedState.workType}
          />
          <CheckboxCard
            title='Địa điểm'
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
            {Array.from({ length: 2 }).map((_, index) => (
              <ApplicantCardComponent key={index + 1} onClick={() => router.push(`/system/applicant/${index + 1}`)} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicantPage;
