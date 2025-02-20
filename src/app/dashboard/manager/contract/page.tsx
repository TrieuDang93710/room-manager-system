'use client';
import CommonInput from '@/components/atoms/Input';
import { Card } from '@/components/molecules/Card';
import Modal from '@/components/molecules/Modal';
import SearchComponent from '@/components/molecules/Search';
import { CloseOutlined, ContactsOutlined, DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
import useCombinedState from '@/hooks/useCombinedState';
import { handleBlurChecking } from '@/helpers/utils';
import { useState } from 'react';
import { pageSizeList } from '@/faker/data';
import PaginationComponent from '@/components/molecules/Pagination/pagination';
import ButtonCommon from '@/components/atoms/ButtonCommon';
import TableComponent from '@/components/molecules/Table';

const ContractManagerPage = () => {
  const [state, setField] = useCombinedState({
    name: '',
    tenant: '',
    people: '',
    phone: '',
    room: '',
    term: '',
    createBy: '',
    contract: '',
    // checking error field
    nameError: '',
    tenantError: '',
    peopleError: '',
    phoneError: '',
    roomError: '',
    termError: '',
    createByError: '',
    contractError: ''
  });

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClickNewButton = () => {
    setIsOpen(!isOpen);
  };
  const contractHeaders = ['Contract Name', 'Tenant', 'Phone', 'Price', 'Contract', 'Date time', 'Status', 'Actions'];

  const contracts = Array.from({ length: 20 }).map((_, index) => ({
    name: `Hop dong so ${index + 1}`,
    tenant: 'Dang Thanh Tam',
    phone: '0336.148.613',
    price: '3.000.000',
    contract: '',
    date: '25/12/2024',
    status: 'Da thue'
  }));

  const renderContractRow = (contract: any) => (
    <>
      <td className='truncate px-2'>{contract.name}</td>
      <td className='truncate px-2'>{contract.tenant}</td>
      <td className='truncate px-2'>{contract.phone}</td>
      <td className='truncate px-2'>{contract.price}</td>
      <td className='truncate px-2'>
        <ContactsOutlined className='cursor-pointer rounded-full hover:bg-slate-50 dark:hover:bg-slate-700 p-3' />
      </td>
      <td className='truncate px-2'>{contract.date}</td>
      <td className='truncate px-2'>{contract.status}</td>
      <td className='flex items-center justify-center sm:gap-2 px-2'>
        <EditOutlined className='cursor-pointer rounded-full hover:bg-slate-50 dark:hover:bg-slate-700 p-3' />
        <DeleteOutlined className='cursor-pointer rounded-full hover:bg-slate-50 dark:hover:bg-slate-700 p-3' />
      </td>
    </>
  );
  return (
    <div className='w-full flex flex-col items-end gap-6 snap-y pt-20 md:px-3'>
      <div className='md:w-[84%] w-full dark:bg-[#1a1a1a00] md:pr-10'>
        <Card className='w-full dark:bg-[#ffffff00] h-1/2'>
          <p className='text-[#292929] font-bold text-[15px] pb-2 dark:text-[#e6e6e6]'>Quan ly hop dong thue nha tro</p>
          <p className='text-[#333333] font-bold text-[12px] pb-4 dark:text-[#e6e6e6]'>Viet mo ta o day</p>
          <div className='flex items-end justify-between'>
            <div className='lg:w-[30%] md:w-2/3 w-full truncate flex justify-start gap-2'>
              <ButtonCommon onClick={handleClickNewButton} icon={<PlusOutlined />} title='Add new' />
            </div>
            <SearchComponent />
          </div>
          <br />
          <TableComponent headers={contractHeaders} data={contracts} renderRow={renderContractRow} />
        </Card>
        <div className='w-full flex justify-end py-1'>
          <PaginationComponent />
        </div>
      </div>
      <Modal
        className='bg-[#29292962] dark:bg-[#f8f8f817] h-screen w-full flex justify-end items-center right-0 animate-in'
        isOpen={isOpen}
        hidden={false}
        onClose={() => setIsOpen(false)}
      >
        <div className='absolute md:right-5 right-0 bg-[#ffffff] dark:bg-[#0a0a0a] md:w-[80%] w-full h-[80%] p-3 rounded-md shadow-md shadow-[#fff]'>
          <div className='flex justify-between'>
            <p className='text-[#292929] font-bold text-[14px] p-2 dark:text-[#e6e6e6]'>ADD NEW MAINTENANCE</p>
            <CloseOutlined
              onClick={handleClickNewButton}
              className='cursor-pointer font-bold text-red-500 p-2 rounded-sm hover:bg-[#e3e3e3] dark:text-[#fff]'
            />
          </div>
          <form action='' className='relative w-full h-full'>
            <div className='w-full py-1 grid grid-cols-2 gap-2 msm:flex-col'>
              <CommonInput
                onblur={() => handleBlurChecking('text', 'nameError', state.name, setField)}
                inputValue={state.name}
                typeInput='text'
                setField={setField}
                field='name'
                error={state.nameError}
                label_title='Contract of Name'
              />
              <CommonInput
                onblur={() => handleBlurChecking('text', 'tenantError', state.tenant, setField)}
                inputValue={state.tenant}
                typeInput='text'
                setField={setField}
                field='tenant'
                error={state.tenantError}
                label_title='Tenant'
              />
              <CommonInput
                onblur={() => handleBlurChecking('text', 'peopleError', state.people, setField)}
                inputValue={state.people}
                typeInput='text'
                setField={setField}
                field='people'
                error={state.peopleError}
                label_title='Number of Tenant'
              />
              <CommonInput
                onblur={() => handleBlurChecking('text', 'phoneError', state.phone, setField)}
                inputValue={state.phone}
                typeInput='text'
                setField={setField}
                field='phone'
                error={state.phoneError}
                label_title='Phone Number'
              />
              <CommonInput
                onblur={() => handleBlurChecking('text', 'roomError', state.room, setField)}
                setField={setField}
                field='room'
                typeInput='text'
                label_title='Room'
                optionList={pageSizeList}
              />
              <CommonInput
                onblur={() => handleBlurChecking('text', 'termError', state.term, setField)}
                inputValue={state.term}
                typeInput='date'
                setField={setField}
                field='term'
                error={state.termError}
                label_title='Contract Term'
              />
              <CommonInput
                onblur={() => handleBlurChecking('text', 'createByError', state.createBy, setField)}
                inputValue={state.createBy}
                typeInput='text'
                setField={setField}
                field='createBy'
                error={state.createByError}
                label_title='Create By'
              />
            </div>
            <CommonInput
              onblur={() => handleBlurChecking('text', 'contractError', state.contract, setField)}
              inputValue={state.contract}
              typeInput='file'
              setField={setField}
              field='contract'
              error={state.contractError}
              label_title='Contract File'
            />
            <button
              className='absolute left-0 bottom-8 bg-blue-600 dark:bg-[#0000] font-bold text-[13px] py-2 px-4 rounded-md text-[#fff] hover:bg-blue-500 dark:border-[1px] dark:border-[#fff] dark:hover:bg-blue-200 dark:hover:text-[#000] dark:text-white'
              type='submit'
            >
              SAVE
            </button>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default ContractManagerPage;
