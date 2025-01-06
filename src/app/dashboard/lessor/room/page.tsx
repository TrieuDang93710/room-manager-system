'use client';

import CommonInput from '@/components/atoms/Input';
import { Card } from '@/components/molecules/Card';
import Modal from '@/components/molecules/Modal';
import SeachComponent from '@/components/molecules/Search';
import TableComponent from '@/components/molecules/Table';
import { useState } from 'react';
import { CloseOutlined, DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
import { handleBlurChecking } from '@/lib/utils';
import useCombinedState from '@/hooks/useCombinedState';
import PaginationComponent from '@/components/molecules/Pagination/pagination';
import ButtonCommon from '@/components/atoms/ButtonCommon';

const RoomManagerPage = () => {
  const [state, setField] = useCombinedState({
    name: '',
    address: '',
    price: '',
    createBy: '',
    // checking error field
    nameError: '',
    addressError: '',
    priceError: '',
    createByError: ''
  });

  const [isAddRoomOpen, setIsAddRoomOpen] = useState<boolean>(false);
  const [isAddCategoryRoomOpen, setIsAddCategoryRoomOpen] = useState<boolean>(false);

  const closeAddRoomHandler = () => {
    setIsAddRoomOpen(!isAddRoomOpen);
  };

  const closeAddCategoryRoomHandler = () => {
    setIsAddCategoryRoomOpen(!isAddCategoryRoomOpen);
  };

  const roomHeaders = ['Room Name', 'Address', 'Price', 'Status', 'Hidden', 'Approved', 'Actions'];

  const rooms = Array.from({ length: 20 }).map((_, index) => ({
    name: `Chung cu mini ${index + 1}`,
    address: `512 Nui Thanh, Hoa Cuong Nam, Hai Chau`,
    price: '3,000,000',
    status: 'Da thue',
    hidden: 'Show',
    approved: 'Da duyet'
  }));

  const renderRoomRow = (room: any) => (
    <>
      <td className='truncate px-2'>{room.name}</td>
      <td className='truncate px-2'>{room.address}</td>
      <td className='truncate px-2'>{room.price}</td>
      <td className='truncate px-2'>{room.status}</td>
      <td className='truncate px-2'>{room.hidden}</td>
      <td className='truncate px-2'>{room.approved}</td>
      <td className='flex items-center justify-center sm:gap-2 px-2'>
        <EditOutlined className='cursor-pointer rounded-full hover:bg-slate-50 dark:hover:bg-slate-700 p-3' />
        <DeleteOutlined className='cursor-pointer rounded-full hover:bg-slate-50 dark:hover:bg-slate-700 p-3' />
      </td>
    </>
  );

  return (
    <div className='w-full flex flex-col items-end gap-6 snap-y pt-20 md:px-3'>
      <div className='md:w-[84%] w-full  dark:bg-[#1a1a1a00]'>
        <Card className='w-full dark:bg-[#ffffff00]'>
          <p className='text-[#292929] font-bold text-[15px] pb-2 dark:text-[#e6e6e6]'>Quan ly phong tro</p>
          <p className='text-[#333333] font-bold text-[12px] pb-4 dark:text-[#e6e6e6]'>Viet mo ta o day</p>
          <div className='flex items-end justify-between'>
            <div className='w-1/2 flex justify-start gap-2'>
              <ButtonCommon onClick={closeAddRoomHandler} icon={<PlusOutlined />} title='Them phong tro' />
              <ButtonCommon onClick={closeAddCategoryRoomHandler} icon={<PlusOutlined />} title='Them loai phong tro' />
            </div>
            <SeachComponent />
          </div>
          <br />
          <TableComponent headers={roomHeaders} data={rooms} renderRow={renderRoomRow} />
        </Card>
        <div className='w-full flex justify-end py-1'>
          <PaginationComponent />
        </div>
      </div>
      <Modal
        className='bg-[#29292962] dark:bg-[#f8f8f817] h-screen w-full flex justify-end items-center right-0 animate-in'
        isOpen={isAddRoomOpen}
        hedden={false}
        onClose={() => setIsAddRoomOpen(false)}
      >
        <div className='absolute md:right-5 right-0 bg-[#ffffff] dark:bg-[#0a0a0a] md:w-[80%] w-full h-[80%] p-3 rounded-md shadow-md shadow-[#fff]'>
          <form action='' className='relative w-full h-full'>
            <div className='flex justify-between'>
              <p className='text-[#292929] font-bold text-[14px] p-2 dark:text-[#e6e6e6]'>ADD NEW ROOM</p>
              <CloseOutlined
                onClick={closeAddRoomHandler}
                className='cursor-pointer font-bold text-red-500 p-2 rounded-sm hover:bg-[#e3e3e3] dark:text-[#fff]'
              />
            </div>
            <div className='w-full py-1 gap-2 flex-col md:flex'>
              <CommonInput
                onblur={() => handleBlurChecking('nameError', state.name, setField)}
                inputValue={state.name}
                typeInput='text'
                setField={setField}
                field='name'
                error={state.nameError}
                label_title='Ten phong'
              />
              <CommonInput
                onblur={() => handleBlurChecking('addressError', state.address, setField)}
                inputValue={state.address}
                typeInput='text'
                setField={setField}
                field='address'
                error={state.addressError}
                label_title='Dia chi'
              />
              <CommonInput
                onblur={() => handleBlurChecking('priceError', state.price, setField)}
                inputValue={state.price}
                typeInput='text'
                setField={setField}
                field='price'
                error={state.priceError}
                label_title='Gia'
              />
              <CommonInput
                onblur={() => handleBlurChecking('createByError', state.createBy, setField)}
                inputValue={state.createBy}
                typeInput='text'
                setField={setField}
                field='createBy'
                error={state.createByError}
                label_title='Dang boi'
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
      <Modal
        className='bg-[#29292962] dark:bg-[#f8f8f817] h-screen w-full flex justify-end items-center right-0 animate-in'
        isOpen={isAddCategoryRoomOpen}
        hedden={false}
        onClose={() => setIsAddCategoryRoomOpen(false)}
      >
        <div className='absolute md:right-5 right-0 bg-[#ffffff] dark:bg-[#0a0a0a] md:w-[80%] w-full h-[80%] p-3 rounded-md shadow-md shadow-[#fff]'>
          <form action='' className='relative w-full h-full flex-col'>
            <div className='flex justify-between'>
              <p className='text-[#292929] font-bold text-[14px] p-2 dark:text-[#e6e6e6]'>ADD NEW CATEGORY ROOM</p>
              <CloseOutlined
                onClick={closeAddCategoryRoomHandler}
                className='cursor-pointer font-bold text-red-500 p-2 rounded-sm hover:bg-[#e3e3e3] dark:text-[#fff]'
              />
            </div>
            <div className='w-full py-1 gap-2 flex'>
              <div className='w-1/3 py-1 gap-2 flex md:flex'>
                <CommonInput
                  onblur={() => handleBlurChecking('nameError', state.name, setField)}
                  inputValue={state.name}
                  typeInput='text'
                  setField={setField}
                  field='name'
                  error={state.nameError}
                  label_title='Loai phong'
                />
              </div>
              <div className='w-2/3 border py-1 gap-2 flex flex-col justify-start items-center'>
                <p className='text-[14px] text-slate-800 font-bold m-0'>Danh sach loai phong</p>
                <ul className=''>
                  <li></li>
                  <li></li>
                  <g className='d'></g>
                </ul>
              </div>
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

export default RoomManagerPage;
