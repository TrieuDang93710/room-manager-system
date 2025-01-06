'use client';
import CommonInput from '@/components/atoms/Input';
import { Card } from '@/components/molecules/Card';
import SeachComponent from '@/components/molecules/Search';
import { useState } from 'react';
import { CloseOutlined, ContactsOutlined, DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
import Modal from '@/components/molecules/Modal';
import { handleBlurChecking } from '@/lib/utils';
import useCombinedState from '@/hooks/useCombinedState';
import ButtonCommon from '@/components/atoms/ButtonCommon';
import TableComponent from '@/components/molecules/Table';

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

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClickNewButton = () => {
    setIsOpen(!isOpen);
  };
  const maintenanceHeaders = ['Room Name', 'Address', 'Maintenance file', 'Cost', 'Date time', 'Actions'];

  const maintenances = Array.from({ length: 20 }).map((_, index) => ({
    name: `Phong tro so ${index + 1}`,
    address: 'Hoa Cuong Nam, Hai Chau, Da Nang',
    file: '',
    cost: '300.000',
    date: '25/12/2024'
  }));

  const renderMaintenanceRow = (maintenance: any) => (
    <>
      <td className='truncate px-2'>{maintenance.name}</td>
      <td className='truncate px-2'>{maintenance.address}</td>
      <td className='truncate px-2'>
        <ContactsOutlined className='cursor-pointer rounded-full hover:bg-slate-50 dark:hover:bg-slate-700 p-3' />
      </td>
      <td className='truncate px-2'>{maintenance.cost}</td>
      <td className='truncate px-2'>{maintenance.date}</td>
      <td className='flex items-center justify-center sm:gap-2 px-2'>
        <EditOutlined className='cursor-pointer rounded-full hover:bg-slate-50 dark:hover:bg-slate-700 p-3' />
        <DeleteOutlined className='cursor-pointer rounded-full hover:bg-slate-50 dark:hover:bg-slate-700 p-3' />
      </td>
    </>
  );
  return (
    <div className='w-full flex flex-col items-end gap-6 snap-y pt-20 md:px-3'>
      <div className='md:w-[84%] w-full dark:bg-[#1a1a1a00] pr-10'>
        <Card className='w-full dark:bg-[#ffffff00] h-1/2'>
          <p className='text-[#292929] font-bold text-[15px] pb-2 dark:text-[#e6e6e6]'>Quan ly bao tri</p>
          <p className='text-[#333333] font-bold text-[12px] pb-4 dark:text-[#e6e6e6]'>Viet mo ta o day</p>
          <div className='flex items-end justify-between'>
            <div className='w-1/2 flex justify-start gap-2'>
              <ButtonCommon onClick={handleClickNewButton} icon={<PlusOutlined />} title='Add new' />
            </div>
            <SeachComponent />
          </div>
          <br />
          <TableComponent headers={maintenanceHeaders} data={maintenances} renderRow={renderMaintenanceRow} />
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
