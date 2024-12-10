'use client';
import CommonInput from '@/components/atoms/Input';
import { Card } from '@/components/molecules/Card';
import Modal from '@/components/molecules/Modal';
import SeachComponent from '@/components/molecules/Search';
import TableComponent from '@/components/molecules/Table';
import { CloseOutlined } from '@ant-design/icons';
import useCombinedState from '@/hooks/useCombinedState';
import { handleBlurChecking } from '@/lib/utils';
import { useState } from 'react';
import { pageSizeList } from '@/faker/data';
import PaginationComponent from '@/components/molecules/Pagination/pagination';

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

  const [isOpen, setIsOpen] = useState<boolean>(true);

  const handleClickNewButton = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className='w-full flex flex-col items-end gap-6 snap-y pt-20 md:px-3'>
      <div className='md:w-[84%] w-full dark:bg-[#1a1a1a00] md:pr-10'>
        <Card className='w-full dark:bg-[#ffffff00] h-1/2'>
          <p className='text-[#292929] font-bold text-[15px] pb-2 dark:text-[#e6e6e6]'>Danh sách phòng</p>
          <p className='text-[#333333] font-bold text-[12px] pb-4 dark:text-[#e6e6e6]'>descriptions</p>
          <div className='flex items-end justify-between'>
            <button
              onClick={handleClickNewButton}
              className='text-[#dbdbdb] bg-[#6f6f6f] dark:bg-[#fff0] font-bold text-[13px] dark:text-[#d1d1d1] dark:border-[#d1d1d1] dark:border-[2px] rounded-md px-4 py-1 hover:bg-[#e4e4e4] hover:text-[#232323] dark:hover:bg-[#e4e4e4] dark:hover:text-[#232323]'
            >
              Thêm
            </button>
            <SeachComponent />
          </div>
          <br />
          <TableComponent />
        </Card>
        <div className='w-full flex justify-end py-1'>
          <PaginationComponent />
        </div>
      </div>
      <Modal
        className='bg-[#29292962] dark:bg-[#f8f8f817] h-screen w-full flex justify-end items-center right-0 animate-in'
        isOpen={isOpen}
        hedden={false}
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
                onblur={() => handleBlurChecking('nameError', state.name, setField)}
                inputValue={state.name}
                typeInput='text'
                setField={setField}
                field='name'
                error={state.nameError}
                label_title='Contract of Name'
              />
              <CommonInput
                onblur={() => handleBlurChecking('tenantError', state.tenant, setField)}
                inputValue={state.tenant}
                typeInput='text'
                setField={setField}
                field='tenant'
                error={state.tenantError}
                label_title='Tenant'
              />
              <CommonInput
                onblur={() => handleBlurChecking('peopleError', state.people, setField)}
                inputValue={state.people}
                typeInput='text'
                setField={setField}
                field='people'
                error={state.peopleError}
                label_title='Number of Tenant'
              />
              <CommonInput
                onblur={() => handleBlurChecking('phoneError', state.phone, setField)}
                inputValue={state.phone}
                typeInput='text'
                setField={setField}
                field='phone'
                error={state.phoneError}
                label_title='Phone Number'
              />
              <CommonInput
                onblur={() => handleBlurChecking('roomError', state.room, setField)}
                setField={setField}
                field='room'
                typeInput='text'
                label_title='Room'
                optionList={pageSizeList}
              />
              <CommonInput
                onblur={() => handleBlurChecking('termError', state.term, setField)}
                inputValue={state.term}
                typeInput='date'
                setField={setField}
                field='term'
                error={state.termError}
                label_title='Contract Term'
              />
              <CommonInput
                onblur={() => handleBlurChecking('createByError', state.createBy, setField)}
                inputValue={state.createBy}
                typeInput='text'
                setField={setField}
                field='createBy'
                error={state.createByError}
                label_title='Create By'
              />
            </div>
            <CommonInput
              onblur={() => handleBlurChecking('contractError', state.contract, setField)}
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
