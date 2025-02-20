'use client';
import ButtonCommon from '@/components/atoms/ButtonCommon';
import { Card } from '@/components/molecules/Card';
import PaginationComponent from '@/components/molecules/Pagination/pagination';
import SearchComponent from '@/components/molecules/Search';
import TableComponent from '@/components/molecules/Table';
import { ContactsOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons';

const TenantManagerPage = () => {
  const userTenantHeaders = ['Tenant Name', 'Email', 'Address', 'Actions'];

  const userTenants = Array.from({ length: 20 }).map((_, index) => ({
    name: `Tran Thi Thanh Tam ${index + 1}`,
    email: 'tamttt123@gmail.com',
    address: 'Hoa Cuong Nam, Hai Chau, Da Nang'
  }));

  const renderUserTenantRow = (tenant: any) => (
    <>
      <td className='truncate px-2'>{tenant.name}</td>
      <td className='truncate px-2'>{tenant.email}</td>
      <td className='truncate px-2'>{tenant.address}</td>
      <td className='flex items-center justify-center sm:gap-2 px-2'>
        <ContactsOutlined className='cursor-pointer rounded-full hover:bg-slate-50 dark:hover:bg-slate-700 p-3' />
        <DeleteOutlined className='cursor-pointer rounded-full hover:bg-slate-50 dark:hover:bg-slate-700 p-3' />
      </td>
    </>
  );
  const _handler = () => {
    alert('Hello world');
  };
  return (
    <div className='w-full flex flex-col items-end gap-6 snap-y pt-20 md:px-3'>
      <div className='md:w-[84%] w-full dark:bg-[#1a1a1a00] md:pr-10'>
        <Card className='w-full dark:bg-[#ffffff00] h-1/2'>
          <p className='text-[#292929] font-bold text-[15px] pb-2 dark:text-[#e6e6e6]'>Danh khach thue tro</p>
          <p className='text-[#333333] font-bold text-[12px] pb-4 dark:text-[#e6e6e6]'>Viet mo ta o day</p>
          <div className='flex items-end justify-between'>
            <div className='w-1/2 flex justify-start gap-2'>
              <ButtonCommon onClick={_handler} icon={<PlusOutlined />} title='Excel' />
              <ButtonCommon onClick={_handler} icon={<PlusOutlined />} title='Print' />
            </div>
            <SearchComponent />
          </div>
          <br />
          <TableComponent headers={userTenantHeaders} data={userTenants} renderRow={renderUserTenantRow} />
        </Card>
        <div className='w-full flex justify-end py-2'>
          <PaginationComponent />
        </div>
      </div>
    </div>
  );
};

export default TenantManagerPage;
