/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import SearchComponent from '@/components/molecules/Search';
import TableComponent from '@/components/molecules/Table';
import ButtonCommon from '@/components/atoms/ButtonCommon';
import PaginationComponent from '@/components/molecules/Pagination/pagination';
import { DeleteOutlined, PlusOutlined, ReadOutlined } from '@ant-design/icons';
import './business.css';
import useBusiness from '@/hooks/useBusiness';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Approve from './components/Approve';
import Remove from './components/Remove';

const BusinessManagerPage = () => {
  const [openApproveModal, setOpenApproveModal] = useState<boolean>(false);
  const [openRemoveModal, setOpenRemoveModal] = useState<boolean>(false);
  const [businessId, setBusinessId] = useState<number>(0);
  const [businessSort, setBusinessSort] = useState<any[]>([]);
  const { useBusinessSearch } = useBusiness();
  const { businesses } = useBusinessSearch();

  useEffect(() => {
    setBusinessSort(businesses.sort((a: any, b: any) => a.id - b.id));
  }, [businesses]);

  const closeHandler = () => {
    setOpenApproveModal(!openApproveModal);
  };

  const closeRemoveHandler = () => {
    setOpenRemoveModal(!openRemoveModal);
  };

  const headers = ['#', 'Logo', 'Tên công ty', 'Ngày tạo', 'Trạng thái', 'Xử lý'];

  const renderRow = (company: any) => (
    <>
      <td className='truncate px-2'>{company.id}</td>
      <td className='truncate px-2'>
        {company.logo && <Image height={30} width={30} alt={`logo_${company.id}`} src={`${company.logo}`} />}
      </td>
      <td className='truncate text-center px-2'>{company.title}</td>
      <td className='truncate px-2'>{company.createAt}</td>
      <td
        className={`truncate px-2 ${company && company.status[0] !== 'approved' ? 'text-orange-600' : 'text-green-600'}`}
      >
        {company.status[0]}
      </td>
      <td className='flex items-center justify-center sm:gap-2 px-2'>
        {company.status[0] !== 'cancelled' ? (
          <>
            <ReadOutlined
              onClick={() => {
                setOpenApproveModal(!openApproveModal);
                setBusinessId(company.id);
              }}
              className='cursor-pointer rounded-full hover:bg-slate-50 dark:hover:bg-slate-700 p-3'
            />
            <DeleteOutlined
              onClick={() => {
                setOpenRemoveModal(!openRemoveModal);
                setBusinessId(company.id);
              }}
              className='cursor-pointer rounded-full hover:bg-slate-50 dark:hover:bg-slate-700 p-3'
            />
          </>
        ) : (
          <p className='p-3'>None action</p>
        )}
      </td>
    </>
  );

  return (
    <div className='relative w-full h-screen bg-[#f7f7f7] dark:bg-[#242424] flex flex-col items-end gap-6 snap-y pt-20 md:px-3'>
      <div className='w-full py-2 px-2 flex-col justify-center md:gap-3 gap-y-2'>
        <div className='w-full flex sm:flex-row flex-col sm:items-center sm:justify-between items-start justify-start border shadow-sm shadow-slate-500 rounded-sm px-2 gap-1'>
          <h3 className='text-[16px] text-black font-bold hover:text-blue-500 hover:underline-offset-1 cursor-default p-2'>
            Quản lý cong ty
          </h3>
          <div className='w-1/2 flex justify-end items-center gap-3'>
            <div className='border border-slate-300 hover:border-green-500 cursor-pointer rounded-sm px-4 py-1'>
              <select className='px-2 border-none bg-transparent'>
                <option className='border-none bg-transparent checked:bg-transparent' value=''>
                  Trạng thái
                </option>
                <option className='border-none bg-transparent checked:bg-transparent' value='applied'>
                  Đã duyet
                </option>
              </select>
            </div>
          </div>
        </div>
        <div className='md:flex md:flex-row flex-col gap-5 items-end justify-between my-6 px-2'>
          <div className='lg:w-[50%] md:w-2/3 w-full truncate flex justify-start gap-2'>
            <ButtonCommon onClick={() => alert('Click me')} icon={<PlusOutlined />} title='Excel' />
            <ButtonCommon onClick={() => alert('Click me')} icon={<PlusOutlined />} title='Work' />
          </div>
          <SearchComponent />
        </div>

        <TableComponent headers={headers} data={businessSort} renderRow={renderRow} />

        <div className='w-full flex justify-end py-1'>
          <PaginationComponent />
        </div>
      </div>
      <Approve
        setOpenApprove={setOpenApproveModal}
        openApprove={openApproveModal}
        onClick={closeHandler}
        id={businessId}
      />
      <Remove
        openRemove={openRemoveModal}
        setOpenRemove={setOpenRemoveModal}
        onClick={closeRemoveHandler}
        id={businessId}
      />
    </div>
  );
};

export default BusinessManagerPage;
