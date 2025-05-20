/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import ButtonCommon from '@/components/atoms/ButtonCommon';
import PaginationComponent from '@/components/molecules/Pagination/pagination';
import TableComponent from '@/components/molecules/Table';
import SearchComponent from '@/components/molecules/Search';
import { PlusOutlined } from '@ant-design/icons';
import { useApiSecure } from '@/hooks/useApiSecure';
import { useEffect, useState } from 'react';
import { useAuth } from '@/hooks/auth/useAuth';

interface ServiceBillPageProps {
  params: { id: string };
}

const ServiceBillPage = ({ params }: ServiceBillPageProps) => {
  console.log('params: ', params.id);
  const { user } = useAuth();
  const apiSecure = useApiSecure();
  const [payments, setPayments] = useState<any[]>([]);

  useEffect(() => {
    apiSecure
      .get(`/payment/email/${user && user.email}`)
      .then((result) => {
        console.log('result: ', result);
        setPayments(result.data.data);
      })
      .catch((error) => {
        console.log('error: ', error);
      });
  }, [apiSecure, user]);

  console.log('payments: ', payments);

  const headers = ['Mã Hóa Đơn', 'Phương Thức Thanh Toán', 'Ngày Thanh Toán', 'Gói Dịch Vụ', 'Tổng Tiền', 'Trạng thái'];

  const renderRow = (payment: any) => (
    <>
      <td className='truncate p-2'>{payment!.paymentId}</td>
      <td className='truncate p-2'>{payment!.paymentMethod[0]}</td>
      <td className='truncate p-2'>{payment!.paymentDate}</td>
      <td className='truncate p-2 flex flex-row items-center justify-center'>
        <p className='text-[13px] text-white font-medium bg-blue-600 w-[80%] active:shadow-sm active:shadow-slate-800 rounded-md px-4 py-1'>
          Chi tiết
        </p>
      </td>
      <td>{(payment!.total / 100) * 25930} ₫</td>
      <td
        className={`truncate p-2 ${payment && payment.status[0] === 'succeeded' ? 'text-green-500 font-medium' : ''}`}
      >
        {payment.status[0]}
      </td>
    </>
  );
  return (
    <div className='relative w-full h-screen bg-[#f7f7f7] dark:bg-[#242424] flex flex-col items-end gap-6 snap-y pt-20 md:px-3'>
      <div className='w-full py-2 px-2 flex-col justify-center md:gap-3 gap-y-2'>
        <div className='w-full flex sm:flex-row flex-col sm:items-center sm:justify-between items-start justify-start border shadow-sm shadow-slate-500 dark:border-none dark:bg-blue-800 rounded-sm px-2 gap-1'>
          <h3 className='text-[16px] text-black dark:text-white font-bold hover:text-blue-500 hover:underline-offset-1 cursor-default p-2'>
            Quản lý hóa đơn
          </h3>
          <div className='w-1/2 flex justify-end items-center gap-3'>
            <div className='border border-slate-300 hover:border-green-500 cursor-pointer rounded-sm px-4 py-1'>
              <select className='px-2 border-none bg-transparent'>
                <option className='border-none bg-transparent checked:bg-transparent' value=''>
                  Trạng thái
                </option>
                <option className='border-none bg-transparent checked:bg-transparent' value='applied'>
                  Thành công
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
        <TableComponent headers={headers} data={payments} renderRow={renderRow} />
        <div className='w-full flex justify-end py-1'>
          <PaginationComponent />
        </div>
      </div>
    </div>
  );
};

export default ServiceBillPage;
