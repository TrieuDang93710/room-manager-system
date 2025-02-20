'use client';
import ButtonCommon from '@/components/atoms/ButtonCommon';
import { Card } from '@/components/molecules/Card';
import PaginationComponent from '@/components/molecules/Pagination/pagination';
import SearchComponent from '@/components/molecules/Search';
import TableComponent from '@/components/molecules/Table';
import { ContactsOutlined, PlusOutlined } from '@ant-design/icons';

const RequirementManagerPage = () => {
  const _handler = () => {
    alert('Hello world');
  };
  const requireHeaders = ['Room Name', 'Tenant', 'Phone', 'Description', 'Status', 'Actions'];

  const requires = Array.from({ length: 20 }).map((_, index) => ({
    name: `Phong tro so ${index + 1}`,
    tenant: 'Dang Thanh Tam',
    phone: '0336.148.613',
    description: 'Wifi cho tro cua chau no hoi chap chon, mong chu chu tro lap dat moi cho chau. Ton bao nhieu tien chau tra',
    status: 'Chua xu ly'
  }));

  const renderRequireRow = (require: any) => (
    <>
      <td className='truncate px-2'>{require.name}</td>
      <td className='truncate px-2'>{require.tenant}</td>
      <td className='truncate px-2'>{require.phone}</td>
      <td className='line-clamp-3 text-start px-4'>{require.description}</td>
      <td className='truncate px-2'>{require.status}</td>
      <td className='flex items-center justify-center sm:gap-2 px-2'>
        <ContactsOutlined className='cursor-pointer rounded-full hover:bg-slate-50 dark:hover:bg-slate-700 p-3' />
      </td>
    </>
  );
  return (
    <div className='w-full flex flex-col items-end gap-6 snap-y pt-20 md:px-3'>
      <div className='md:w-[84%] w-full dark:bg-[#1a1a1a00] md:pr-10'>
        <Card className='w-full dark:bg-[#ffffff00] h-1/2'>
          <p className='text-[#292929] font-bold text-[15px] pb-2 dark:text-[#e6e6e6]'>
            Quan ly yeu cau cua nguoi thue tro
          </p>
          <p className='text-[#333333] font-bold text-[12px] pb-4 dark:text-[#e6e6e6]'>Viet mo ta o day</p>
          <div className='flex items-end justify-between'>
            <div className='w-1/2 flex justify-start gap-2'>
              <ButtonCommon onClick={_handler} icon={<PlusOutlined />} title='Excel' />
              <ButtonCommon onClick={_handler} icon={<PlusOutlined />} title='Print' />
            </div>
            <SearchComponent />
          </div>
          <br />
          <TableComponent headers={requireHeaders} data={requires} renderRow={renderRequireRow} />
        </Card>
        <div className='w-full flex justify-end py-2'>
          <PaginationComponent />
        </div>
      </div>
    </div>
  );
};

export default RequirementManagerPage;
