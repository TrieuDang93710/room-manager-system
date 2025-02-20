/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import CommonInput from '@/components/atoms/Input';
import { Card } from '@/components/molecules/Card';
import Modal from '@/components/molecules/Modal';
import SearchComponent from '@/components/molecules/Search';
import TableComponent from '@/components/molecules/Table';
import { useState } from 'react';
import { CloseOutlined, DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
import { handleBlurChecking } from '@/helpers/utils';
import useCombinedState from '@/hooks/useCombinedState';
import PaginationComponent from '@/components/molecules/Pagination/pagination';
import ButtonCommon from '@/components/atoms/ButtonCommon';
import './room.css';

const RoomManagerPage = () => {
  const [state, setField] = useCombinedState({
    name: '',
    address: '',
    price: '',
    createBy: '',
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
    <div className='room_container'>
      <div className='room_content'>
        <Card className='w-full dark:bg-[#ffffff00]'>
          <p className='text-[#292929] text-[15px] pb-2'>Quản Lý Phòng Trọ</p>
          <p className='text-[#333333] text-[12px] pb-4'>
            Dưới đây là toàn bộ các bài đăng - các phòng trọ mà tôi đã đăng để cho thuê phòng trọ.
          </p>
          <div className='md:flex md:flex-row flex-col gap-5 items-end justify-between'>
            <div className='lg:w-[30%] md:w-2/3 w-full truncate flex justify-start gap-2'>
              <ButtonCommon onClick={closeAddRoomHandler} icon={<PlusOutlined />} title='Thêm Phòng Trọ Mới' />
              <ButtonCommon
                onClick={closeAddCategoryRoomHandler}
                icon={<PlusOutlined />}
                title='Thêm Loại Phòng Cho Thuê'
              />
            </div>
            <SearchComponent />
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
        hidden={false}
        onClose={() => setIsAddRoomOpen(false)}
      >
        <div className='modal_container'>
          <form>
            <div className='modal_header'>
              <p>Thêm Phòng Trọ Mới</p>
              <CloseOutlined
                onClick={closeAddRoomHandler}
                className='cursor-pointer font-bold text-red-500 p-2 rounded-sm hover:bg-[#e3e3e3] dark:text-[#fff]'
              />
            </div>
            <div className='w-full py-1 gap-2 flex-col md:flex'>
              <CommonInput
                onblur={() => handleBlurChecking('text', 'nameError', state.name, setField)}
                inputValue={state.name}
                typeInput='text'
                setField={setField}
                field='name'
                error={state.nameError}
                placeholder='Nhập tên phòng trọ ...'
                label_title='Tên Phòng'
              />
              <CommonInput
                onblur={() => handleBlurChecking('text', 'addressError', state.address, setField)}
                inputValue={state.address}
                typeInput='text'
                setField={setField}
                field='address'
                error={state.addressError}
                placeholder='Nhập địa chỉ ...'
                label_title='Địa Chỉ'
              />
              <CommonInput
                onblur={() => handleBlurChecking('text', 'priceError', state.price, setField)}
                inputValue={state.price}
                typeInput='text'
                setField={setField}
                field='price'
                error={state.priceError}
                placeholder='Nhập giá của phòng trọ ...'
                label_title='Giá'
              />
              <CommonInput
                onblur={() => handleBlurChecking('text', 'createByError', state.createBy, setField)}
                inputValue={state.createBy}
                typeInput='text'
                setField={setField}
                field='createBy'
                error={state.createByError}
                placeholder='Đăng bởi ...'
                label_title='Đăng Bài Bởi'
              />
            </div>
            <button className='modal_button' type='submit'>
              SAVE
            </button>
          </form>
        </div>
      </Modal>
      <Modal
        className='bg-[#29292962] dark:bg-[#f8f8f817] h-screen w-full flex justify-end items-center right-0 animate-in'
        isOpen={isAddCategoryRoomOpen}
        hidden={false}
        onClose={() => setIsAddCategoryRoomOpen(false)}
      >
        <div className='modal_container'>
          <form>
            <div className='modal_header'>
              <p>ADD NEW CATEGORY ROOM</p>
              <CloseOutlined
                onClick={closeAddCategoryRoomHandler}
                className='cursor-pointer font-bold text-red-500 p-2 rounded-sm hover:bg-[#e3e3e3] dark:text-[#fff]'
              />
            </div>
            <div className='w-full py-1 gap-2 flex'>
              <div className='w-1/3 py-1 gap-2 flex md:flex'>
                <CommonInput
                  onblur={() => handleBlurChecking('text', 'nameError', state.name, setField)}
                  inputValue={state.name}
                  typeInput='text'
                  setField={setField}
                  field='name'
                  error={state.nameError}
                  placeholder='Nhập tên loại phòng trọ ...'
                  label_title='Loai phong'
                />
              </div>
              <div className='w-2/3 border py-1 gap-2 flex flex-col justify-start items-center'>
                <p className='text-[14px] text-slate-800 font-bold m-0'>List of Room Category</p>
                <ul className=''>
                  <li></li>
                  <li></li>
                  <g className='d'></g>
                </ul>
              </div>
            </div>
            <button className='modal_button' type='submit'>
              SAVE
            </button>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default RoomManagerPage;
