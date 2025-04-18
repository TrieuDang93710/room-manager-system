/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import ButtonCommon from '@/components/atoms/ButtonCommon';
import PaginationComponent from '@/components/molecules/Pagination/pagination';
import SearchComponent from '@/components/molecules/Search';
import TableComponent from '@/components/molecules/Table';
import useUser from '@/hooks/useUser';
import { DeleteOutlined, EditOutlined, MailOutlined, PlusOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import Approve from './components/Approve';
import Remove from './components/Remove';

const AccountManagerPage = () => {
  const [openApproveModal, setOpenApproveModal] = useState<boolean>(false);
  const [openRemoveModal, setOpenRemoveModal] = useState<boolean>(false);
  const [userId, setUserId] = useState<number>(0);
  const [userSort, setUserSort] = useState<any[]>([]);
  const { users } = useUser();

  useEffect(() => {
    setUserSort(users.sort((a: any, b: any) => a.id - b.id));
  }, [users]);

  const closeHandler = () => {
    setOpenApproveModal(!openApproveModal);
  };

  const closeRemoveHandler = () => {
    setOpenRemoveModal(!openRemoveModal);
  };

  const headers = ['#', 'Họ và tên', 'Địa chỉ email', 'Ngày tạo tài khoản', 'Vai trò', 'Hàng động'];

  const renderRow = (account: any) => (
    <>
      <td className='truncate px-2'>{account.id}</td>
      <td className='truncate px-2'>{account.username}</td>
      <td className='truncate px-2'>{account.email}</td>
      <td className='truncate px-2'>{account.createAt}</td>
      <td className={`truncate px-2 ${account.role === 'Ứng viên' ? 'text-blue-700 font-bold' : ''}`}>
        {account.role[0]}
      </td>
      <td className='flex items-center justify-center sm:gap-2 px-2'>
        {!account.block ? (
          <>
            <MailOutlined
              onClick={() => alert('click me')}
              className='cursor-pointer rounded-full hover:bg-slate-50 dark:hover:bg-slate-700 p-3'
            />
            <EditOutlined
              onClick={() => {
                setOpenApproveModal(!openApproveModal);
                setUserId(account.id);
              }}
              className='cursor-pointer rounded-full hover:bg-slate-50 dark:hover:bg-slate-700 p-3'
            />
            <DeleteOutlined
              onClick={() => {
                setOpenRemoveModal(!openRemoveModal);
                setUserId(account.id);
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
            Quản lý tài khoản
          </h3>
          <div className='w-1/2 flex justify-end items-center gap-3'>
            <div className='border border-slate-300 hover:border-green-500 cursor-pointer rounded-sm px-4 py-1'>
              <select className='px-2 border-none bg-transparent'>
                <option className='border-none bg-transparent checked:bg-transparent' value=''>
                  Trạng thái
                </option>
                <option className='border-none bg-transparent checked:bg-transparent' value='applied'>
                  Đã khóa
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

        <TableComponent headers={headers} data={userSort} renderRow={renderRow} />

        <div className='w-full flex justify-end py-1'>
          <PaginationComponent />
        </div>
      </div>
      <Approve setOpenApprove={setOpenApproveModal} openApprove={openApproveModal} onClick={closeHandler} id={userId} />
      <Remove
        openRemove={openRemoveModal}
        setOpenRemove={setOpenRemoveModal}
        onClick={closeRemoveHandler}
        id={userId}
      />
    </div>
  );
};

export default AccountManagerPage;
