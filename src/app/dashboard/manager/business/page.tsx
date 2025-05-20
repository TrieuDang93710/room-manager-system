/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { useState } from 'react';
import SearchComponent from '@/components/molecules/Search';
import TableComponent from '@/components/molecules/Table';
import ButtonCommon from '@/components/atoms/ButtonCommon';
import PaginationComponent from '@/components/molecules/Pagination/pagination';
import { DeleteOutlined, PlusOutlined, ReadOutlined } from '@ant-design/icons';
import AddBusiness from '../business/components/AddBusiness';
import useBusiness from '@/hooks/useBusiness';
import './business.css';

const RoomManagerPage = () => {
  const [openAddBusiness, setOpenAddBusiness] = useState<boolean>(false);
  const { useBusinessSearch } = useBusiness();
  const { businesses } = useBusinessSearch();

  const closeAddBusinessHandler = () => {
    setOpenAddBusiness(!openAddBusiness);
  };

  const headers = ['#', 'Logo', 'Tên công ty', 'Ngày tạo', 'Trạng thái', 'Xử lý'];

  const renderRow = (company: any, index: any) => (
    <>
      <td className='truncate py-2 px-2'>{index + 1}</td>
      <td className='truncate py-2 px-2'>{company.logo}</td>
      <td className='truncate py-2 px-2'>{company.title}</td>
      <td className='truncate py-2 px-2'>{company.createAt}</td>
      <td
        className={`truncate py-2 px-2 ${company && company.status[0] !== 'approved' ? 'text-orange-600' : 'text-green-600'}`}
      >
        {company.status[0]}
      </td>
      <td className='flex items-center justify-center sm:gap-2 py-2 px-2'>
        {company.status[0] !== 'approved' ? (
          <>
            <ReadOutlined className='cursor-pointer rounded-full hover:bg-slate-50 dark:hover:bg-slate-700 p-3' />
            <DeleteOutlined className='cursor-pointer rounded-full hover:bg-slate-50 dark:hover:bg-slate-700 p-3' />
          </>
        ) : (
          'None'
        )}
      </td>
    </>
  );

  return (
    <div className='relative w-full h-screen bg-[#f7f7f7] dark:bg-slate-900 flex flex-col items-end gap-6 snap-y pt-20 md:px-3'>
      <div className='w-full py-2 px-2 flex-col justify-center md:gap-3 gap-y-2'>
        <div className='w-full flex sm:flex-row flex-col sm:items-center sm:justify-between items-start justify-start border shadow-sm shadow-slate-500 dark:border-none dark:bg-blue-800 rounded-sm px-2 gap-1'>
          <h3 className='text-[16px] text-black dark:text-white font-bold hover:text-blue-500 hover:underline-offset-1 cursor-default p-2'>
            Quản lý công ty
          </h3>
          <div className='w-1/2 flex justify-end items-center gap-3'>
            <div className='border border-slate-300 hover:border-blue-600 cursor-pointer rounded-sm px-4 py-1'>
              <select className='px-2 border-none bg-transparent'>
                <option className='border-none bg-transparent checked:bg-transparent' value=''>
                  Trạng thái
                </option>
                <option className='border-none bg-transparent checked:bg-transparent' value='applied'>
                  Đã ứng tuyển
                </option>
              </select>
            </div>
          </div>
        </div>
        <div className='md:flex md:flex-row flex-col gap-5 items-end justify-between my-6 px-2'>
          <div className='lg:w-[50%] md:w-2/3 w-full truncate flex justify-start gap-2'>
            <ButtonCommon onClick={closeAddBusinessHandler} icon={<PlusOutlined />} title='Thêm doanh nghiệp' />
            <ButtonCommon onClick={() => alert('Click me')} icon={<PlusOutlined />} title='Excel' />
          </div>
          <SearchComponent />
        </div>
        <TableComponent headers={headers} data={businesses} renderRow={renderRow} />
        <div className='w-full flex justify-end py-1'>
          <PaginationComponent />
        </div>
      </div>
      <AddBusiness
        openAddBusiness={openAddBusiness}
        setOpenAddBusiness={setOpenAddBusiness}
        onClick={closeAddBusinessHandler}
      />
    </div>
  );
};

export default RoomManagerPage;
