'use client';

import BreadCrumbCommon from '@/components/atoms/Breadcumb';
import CommonInput from '@/components/atoms/Input';
import RoomCardCommon from '@/components/organisms/FuncSystem/Card/room';
import flex from '@/config/flex.config';
import { listRoom } from '@/faker/data';
import useCombinedState from '@/hooks/useCombinedState';
import { handleBlurChecking } from '@/lib/utils';
import { FilterOutlined, HomeOutlined } from '@ant-design/icons';
import { useState } from 'react';

const RentOfRoomPage = () => {
  const [state, setField] = useCombinedState({
    email: '',
    phone: '',
    fullName: '',
    address: '',
    avatar: '',
    social: '',
    // checking error field
    emailError: '',
    phoneError: '',
    fullNameError: '',
    addressError: '',
    avatarError: '',
    socialError: ''
  });

  const [filteredItems] = useState(listRoom);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(2);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const breadcrumbs = [
    {
      url: '/',
      label: 'Homepage',
      prefixIcon: () => <HomeOutlined />
    },
    {
      url: '/system/rent-of-room',
      label: 'RoomDetail',
      prefixIcon: () => <FilterOutlined />
    }
  ];

  return (
    <div
      className={
        'w-full min-h-screen md:px-10 px-3 pt-20  z-10' +
        flex({ direction: 'col', justifyContent: 'start', alignItems: 'center' })
      }
    >
      <BreadCrumbCommon breadcrumbs={breadcrumbs} currentUrl='/' mode='dark' />
      <div className='w-full flex flex-col gap-3 px-2'>
        <h2 className='text-2xl font-bold py-4'>Room of Filter</h2>
        <form action='' className='w-full md:right-0.5 grid grid-cols-1 gap-3'>
          <div className='w-full py-1 grid grid-cols-3 gap-2 msm:flex-col'>
            <CommonInput
              onblur={() => handleBlurChecking('emailError', state.email, setField)}
              inputValue={state.email}
              typeInput='text'
              setField={setField}
              field='email'
              error={state.emailError}
              hidden={true}
              placeholder='Category'
            />
            <CommonInput
              onblur={() => handleBlurChecking('phoneError', state.phone, setField)}
              inputValue={state.phone}
              typeInput='text'
              setField={setField}
              field='phone'
              error={state.phoneError}
              hidden={true}
              placeholder='Price'
            />
            <CommonInput
              onblur={() => handleBlurChecking('fullNameError', state.fullName, setField)}
              inputValue={state.fullName}
              typeInput='text'
              setField={setField}
              field='fullName'
              error={state.fullNameError}
              hidden={true}
              placeholder='Choose'
            />
          </div>
          <button
            className='w-1/5 m-auto bg-blue-600 dark:bg-[#0000] font-bold text-[13px] py-2 px-4 rounded-md text-[#fff] hover:bg-blue-500 dark:border-[1px] dark:border-[#fff] dark:hover:bg-blue-200 dark:hover:text-[#000] dark:text-white'
            type='submit'
          >
            SEARCHING
          </button>
        </form>
      </div>
      <div className='w-full flex flex-col gap-3 px-2'>
        <h2 className='text-2xl font-bold py-4'>Room of List</h2>
        <div className='w-full gap-2 grid grid-cols-2 md:grid-cols-4'>
          {currentItems.map((item) => (
            <RoomCardCommon key={item._id} item={item} />
          ))}
        </div>
        <div className='flex justify-center my-8'>
          {Array.from({ length: Math.ceil(filteredItems.length / itemsPerPage) }).map((_, index) => (
            <button
              key={index + 1}
              onClick={() => paginate(index + 1)}
              className={`mx-1 px-3 py-1 rounded-full ${
                currentPage === index + 1 ? 'bg-green-500 text-white' : 'bg-gray-200'
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RentOfRoomPage;
