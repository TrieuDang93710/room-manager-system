'use client';
import CommonInput from '@/components/atoms/Input';
import { Card } from '@/components/molecules/Card';
import SeachComponent from '@/components/molecules/Search';
import TableComponent from '@/components/molecules/Table';
import { useState } from 'react';
import { CloseOutlined } from '@ant-design/icons';
import Modal from '@/components/molecules/Modal';
import { handleBlurChecking } from '@/lib/utils';
import useCombinedState from '@/hooks/useCombinedState';

const MaintenanceManagerPage = () => {
  const [state, setField] = useCombinedState({
    name: '',
    address: '',
    cost: '',
    maintenanceFile: '',
    createAt: '',
    // checking error field
    nameError: '',
    addressError: '',
    costError: '',
    maintenanceFileError: '',
    createAtError: ''
  });

  const [isOpen, setIsOpen] = useState<boolean>(true);

  const handleClickNewButton = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className='w-full flex flex-col items-end gap-6 snap-y pt-20 md:px-3'>
      <div className='md:w-[84%] w-full dark:bg-[#1a1a1a00] pr-10'>
        <Card className='w-full dark:bg-[#ffffff00] h-1/2'>
          <p className='text-[#292929] font-bold text-[15px] pb-2 dark:text-[#e6e6e6]'>MAINTENANCE LIST</p>
          <p className='text-[#333333] font-bold text-[12px] pb-4 dark:text-[#e6e6e6]'>descriptions</p>
          <div className='flex items-end justify-between'>
            <button
              onClick={handleClickNewButton}
              className='text-[#dbdbdb] bg-[#6f6f6f] dark:bg-[#fff0] font-bold text-[13px] dark:text-[#d1d1d1] dark:border-[#d1d1d1] dark:border-[2px] rounded-md px-4 py-1 hover:bg-[#e4e4e4] hover:text-[#232323] dark:hover:bg-[#e4e4e4] dark:hover:text-[#232323]'
            >
              Add new
            </button>
            <SeachComponent />
          </div>
          <TableComponent />
        </Card>
      </div>
      <Modal
        className='bg-[#29292962] dark:bg-[#f8f8f817] h-screen w-full flex justify-end items-center right-0 animate-in'
        isOpen={isOpen}
        hedden={false}
        onClose={() => setIsOpen(false)}
      >
        <div className='absolute right-5 bg-[#ffffff] dark:bg-[#0a0a0a] md:w-[80%] w-full h-[80%] p-3 rounded-md shadow-md shadow-[#fff]'>
          <div className='flex justify-between'>
            <p className='text-[#292929] font-bold text-[14px] p-2 dark:text-[#e6e6e6]'>ADD NEW MAINTENANCE</p>
            <CloseOutlined
              onClick={handleClickNewButton}
              className='cursor-pointer font-bold text-red-500 p-2 rounded-sm hover:bg-[#e3e3e3] dark:text-[#fff]'
            />
          </div>
          {/* <p className="text-[#292929] font-bold text-[14px] p-2 dark:text-[#e6e6e6]">ADD NEW ROOM</p> */}
          <form action='' className='relative w-full h-full'>
            <div className='w-full py-1 gap-2 flex-col md:flex'>
              <CommonInput
                onblur={() => handleBlurChecking('nameError', state.name, setField)}
                inputValue={state.name}
                typeInput='text'
                setField={setField}
                field='name'
                error={state.nameError}
                label_title='Room of Name'
              />
              <CommonInput
                onblur={() => handleBlurChecking('addressError', state.address, setField)}
                inputValue={state.address}
                typeInput='text'
                setField={setField}
                field='address'
                error={state.addressError}
                label_title='Room of Address'
              />
              <CommonInput
                onblur={() => handleBlurChecking('maintenanceFileError', state.maintenanceFile, setField)}
                inputValue={state.maintenanceFile}
                typeInput='file'
                setField={setField}
                field='maintenanceFile'
                error={state.maintenanceFileError}
                label_title='Maintenance File'
              />
              <CommonInput
                onblur={() => handleBlurChecking('costError', state.cost, setField)}
                inputValue={state.cost}
                typeInput='text'
                setField={setField}
                field='cost'
                error={state.costError}
                label_title='Cost'
              />
              <CommonInput
                onblur={() => handleBlurChecking('createAtError', state.createAt, setField)}
                inputValue={state.createAt}
                typeInput='date'
                setField={setField}
                field='createAt'
                error={state.createAtError}
                label_title='createAt'
              />
            </div>
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

export default MaintenanceManagerPage;
