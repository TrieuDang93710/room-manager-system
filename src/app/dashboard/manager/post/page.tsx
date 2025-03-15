/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import SearchComponent from '@/components/molecules/Search';
import TableComponent from '@/components/molecules/Table';
import { useState } from 'react';
import {
  AppstoreOutlined,
  CloseOutlined,
  DeleteOutlined,
  EditOutlined,
  EyeOutlined,
  PlusOutlined,
  ReadOutlined,
  TableOutlined,
  TeamOutlined
} from '@ant-design/icons';
import { handleBlurChecking } from '@/helpers/utils';
import useCombinedState from '@/hooks/useCombinedState';
import PaginationComponent from '@/components/molecules/Pagination/pagination';
import ButtonCommon from '@/components/atoms/ButtonCommon';
import './room.css';
import PostCardRow from '@/components/organisms/FuncSystem/Card/PostCardRow';
import CommonInput from '@/components/atoms/Input';
import Modal from '@/components/molecules/Modal';

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
  const [viewRender, setViewRender] = useState<boolean>(false);

  const closeAddRoomHandler = () => {
    setIsAddRoomOpen(!isAddRoomOpen);
  };

  const closeAddCategoryRoomHandler = () => {
    setIsAddCategoryRoomOpen(!isAddCategoryRoomOpen);
  };

  const headers = ['Tiêu đề', 'Lĩnh vực', 'Ngày hết hạn', 'Lượt xem', 'Trạng thái', 'Ứng viên', 'Xử lý'];

  const posts = Array.from({ length: 20 }).map((_, index) => ({
    title: `Nhân viên kinh doanh ${index + 1}`,
    field: 'Kinh doanh',
    date: '11 - 03 - 2025',
    view: '1',
    status: 'Chưa duyệt'
  }));

  const renderRow = (post: any) => (
    <>
      <td className='truncate px-2'>{post.title}</td>
      <td className='truncate px-2'>{post.field}</td>
      <td className='truncate px-2'>{post.date}</td>
      <td className='truncate px-2'>
        <EyeOutlined className='cursor-pointer rounded-full hover:bg-slate-50 dark:hover:bg-slate-700 p-3' />{' '}
        {post.view}
      </td>
      <td className='truncate px-2'>{post.status}</td>
      <td className='truncate px-2'>
        <TeamOutlined className='cursor-pointer rounded-full hover:bg-slate-50 dark:hover:bg-slate-700 p-3' />{' '}
      </td>
      <td className='flex items-center justify-center sm:gap-2 px-2'>
        <ReadOutlined className='cursor-pointer rounded-full hover:bg-slate-50 dark:hover:bg-slate-700 p-3' />
        <DeleteOutlined className='cursor-pointer rounded-full hover:bg-slate-50 dark:hover:bg-slate-700 p-3' />
      </td>
    </>
  );

  return (
    <div className='relative w-full h-screen bg-[#f7f7f7] dark:bg-[#242424] flex flex-col items-end gap-6 snap-y pt-20 md:px-3'>
      <div className='w-full py-2 px-2 flex-col justify-center md:gap-3 gap-y-2'>
        <div className='w-full flex sm:flex-row flex-col sm:items-center sm:justify-between items-start justify-start border shadow-sm shadow-slate-500 rounded-sm px-2 gap-1'>
          <h3 className='text-[16px] text-black font-bold hover:text-blue-500 hover:underline-offset-1 cursor-default p-2'>
            Quản lý bài đăng
          </h3>
          <div className='w-1/2 flex justify-end items-center gap-3'>
            <div className='border border-slate-300 hover:border-green-500 cursor-pointer rounded-sm px-4 py-1'>
              <select className='px-2 border-none bg-transparent'>
                <option className='border-none bg-transparent checked:bg-transparent' value=''>
                  Trạng thái
                </option>
                <option className='border-none bg-transparent checked:bg-transparent' value='applied'>
                  Đã ứng tuyển
                </option>
              </select>
            </div>
            <p className='text-slate-800 text-[14px] flex items-center gap-2'>
              <strong className='font-bold'>Hiển thị : </strong>
              {viewRender ? (
                <AppstoreOutlined
                  onClick={() => setViewRender(!viewRender)}
                  className='text-green-500 font-bold text-xl cursor-pointer active:shadow-slate-500 active:shadow-sm'
                />
              ) : (
                <TableOutlined
                  onClick={() => setViewRender(!viewRender)}
                  className='text-green-500 font-bold text-2xl cursor-pointer active:shadow-slate-500 active:shadow-sm'
                />
              )}
            </p>
          </div>
        </div>
        <div className='md:flex md:flex-row flex-col gap-5 items-end justify-between my-6 px-2'>
          <div className='lg:w-[50%] md:w-2/3 w-full truncate flex justify-start gap-2'>
            <ButtonCommon onClick={closeAddRoomHandler} icon={<PlusOutlined />} title='Tạo mới bài đăng' />
            <ButtonCommon onClick={closeAddCategoryRoomHandler} icon={<PlusOutlined />} title='Thêm lĩnh vực' />
            <ButtonCommon onClick={closeAddCategoryRoomHandler} icon={<PlusOutlined />} title='Thêm doanh nghiệp' />
          </div>
          {viewRender ? (
            <SearchComponent />
          ) : (
            <div className='border border-slate-300 hover:border-green-500 cursor-pointer rounded-sm px-2 py-1'>
              <select className='px-2 border-none bg-transparent'>
                <option className='border-none bg-transparent checked:bg-transparent' value=''>
                  All
                </option>
                <option className='border-none bg-transparent checked:bg-transparent' value='applied'>
                  10
                </option>
              </select>
            </div>
          )}
        </div>
        {viewRender ? (
          <TableComponent headers={headers} data={posts} renderRow={renderRow} />
        ) : (
          <div className='w-full border h-[60vh] border-green-500 flex flex-col items-center justify-start overflow-y-auto gap-4 p-4 mt-4'>
            {Array.from({ length: 4 }).map((_, index) => (
              <PostCardRow applied={true} key={index} />
            ))}
          </div>
        )}
        {viewRender && (
          <div className='w-full flex justify-end py-1'>
            <PaginationComponent />
          </div>
        )}
      </div>
      <Modal
        className='bg-[#29292962] dark:bg-[#f8f8f817] h-screen w-full flex justify-center items-center right-0 animate-in'
        isOpen={isAddRoomOpen}
        hidden={false}
        onClose={() => setIsAddRoomOpen(false)}
      >
        <div className='modal_container'>
          <form>
            <div className='modal_header'>
              <p>Thêm mới</p>
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
    </div>

    // <div className='room_container'>
    //   <div className='room_content'>
    //     <Card className='w-full dark:bg-[#ffffff00]'>
    //       <p className='text-[#292929] text-[15px] pb-2'>Quản Lý Bài Đăng</p>
    //       <p className='text-[#333333] text-[12px] pb-4'>
    //         Dưới đây là toàn bộ các bài đăng - các phòng trọ mà tôi đã đăng để cho thuê phòng trọ.
    //       </p>
    //       <div className='md:flex md:flex-row flex-col gap-5 items-end justify-between'>
    //         <div className='lg:w-[30%] md:w-2/3 w-full truncate flex justify-start gap-2'>
    //           <ButtonCommon onClick={closeAddRoomHandler} icon={<PlusOutlined />} title='Thêm Phòng Trọ Mới' />
    //           <ButtonCommon
    //             onClick={closeAddCategoryRoomHandler}
    //             icon={<PlusOutlined />}
    //             title='Thêm Loại Phòng Cho Thuê'
    //           />
    //         </div>
    //         <SearchComponent />
    //       </div>
    //       <br />
    //       <TableComponent headers={roomHeaders} data={rooms} renderRow={renderRoomRow} />
    //     </Card>
    //     <div className='w-full flex justify-end py-1'>
    //       <PaginationComponent />
    //     </div>
    //   </div>
    //   <Modal
    //     className='bg-[#29292962] dark:bg-[#f8f8f817] h-screen w-full flex justify-end items-center right-0 animate-in'
    //     isOpen={isAddRoomOpen}
    //     hidden={false}
    //     onClose={() => setIsAddRoomOpen(false)}
    //   >
    //     <div className='modal_container'>
    //       <form>
    //         <div className='modal_header'>
    //           <p>Thêm Phòng Trọ Mới</p>
    //           <CloseOutlined
    //             onClick={closeAddRoomHandler}
    //             className='cursor-pointer font-bold text-red-500 p-2 rounded-sm hover:bg-[#e3e3e3] dark:text-[#fff]'
    //           />
    //         </div>
    //         <div className='w-full py-1 gap-2 flex-col md:flex'>
    //           <CommonInput
    //             onblur={() => handleBlurChecking('text', 'nameError', state.name, setField)}
    //             inputValue={state.name}
    //             typeInput='text'
    //             setField={setField}
    //             field='name'
    //             error={state.nameError}
    //             placeholder='Nhập tên phòng trọ ...'
    //             label_title='Tên Phòng'
    //           />
    //           <CommonInput
    //             onblur={() => handleBlurChecking('text', 'addressError', state.address, setField)}
    //             inputValue={state.address}
    //             typeInput='text'
    //             setField={setField}
    //             field='address'
    //             error={state.addressError}
    //             placeholder='Nhập địa chỉ ...'
    //             label_title='Địa Chỉ'
    //           />
    //           <CommonInput
    //             onblur={() => handleBlurChecking('text', 'priceError', state.price, setField)}
    //             inputValue={state.price}
    //             typeInput='text'
    //             setField={setField}
    //             field='price'
    //             error={state.priceError}
    //             placeholder='Nhập giá của phòng trọ ...'
    //             label_title='Giá'
    //           />
    //           <CommonInput
    //             onblur={() => handleBlurChecking('text', 'createByError', state.createBy, setField)}
    //             inputValue={state.createBy}
    //             typeInput='text'
    //             setField={setField}
    //             field='createBy'
    //             error={state.createByError}
    //             placeholder='Đăng bởi ...'
    //             label_title='Đăng Bài Bởi'
    //           />
    //         </div>
    //         <button className='modal_button' type='submit'>
    //           SAVE
    //         </button>
    //       </form>
    //     </div>
    //   </Modal>
    //   <Modal
    //     className='bg-[#29292962] dark:bg-[#f8f8f817] h-screen w-full flex justify-end items-center right-0 animate-in'
    //     isOpen={isAddCategoryRoomOpen}
    //     hidden={false}
    //     onClose={() => setIsAddCategoryRoomOpen(false)}
    //   >
    //     <div className='modal_container'>
    //       <form>
    //         <div className='modal_header'>
    //           <p>ADD NEW CATEGORY ROOM</p>
    //           <CloseOutlined
    //             onClick={closeAddCategoryRoomHandler}
    //             className='cursor-pointer font-bold text-red-500 p-2 rounded-sm hover:bg-[#e3e3e3] dark:text-[#fff]'
    //           />
    //         </div>
    //         <div className='w-full py-1 gap-2 flex'>
    //           <div className='w-1/3 py-1 gap-2 flex md:flex'>
    //             <CommonInput
    //               onblur={() => handleBlurChecking('text', 'nameError', state.name, setField)}
    //               inputValue={state.name}
    //               typeInput='text'
    //               setField={setField}
    //               field='name'
    //               error={state.nameError}
    //               placeholder='Nhập tên loại phòng trọ ...'
    //               label_title='Loai phong'
    //             />
    //           </div>
    //           <div className='w-2/3 border py-1 gap-2 flex flex-col justify-start items-center'>
    //             <p className='text-[14px] text-slate-800 font-bold m-0'>List of Room Category</p>
    //             <ul className=''>
    //               <li></li>
    //               <li></li>
    //               <g className='d'></g>
    //             </ul>
    //           </div>
    //         </div>
    //         <button className='modal_button' type='submit'>
    //           SAVE
    //         </button>
    //       </form>
    //     </div>
    //   </Modal>
    // </div>
  );
};

export default RoomManagerPage;
