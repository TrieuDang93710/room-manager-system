/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import BreadCrumbCommon from '@/components/atoms/Breadcumb';
import CommonInput from '@/components/atoms/Input';
import GoogleMaps from '@/components/molecules/GoogleMap/google-map';
import GoogleMapsWrapper from '@/components/molecules/GoogleMap/google-map-wrapper';
import { LOCATIONS } from '@/components/molecules/GoogleMap/location';
import flex from '@/config/flex.config';
import useCombinedState from '@/hooks/useCombinedState';
import { BellOutlined, ClockCircleOutlined, CloseOutlined, FileSearchOutlined, HomeOutlined } from '@ant-design/icons';
import { useState } from 'react';
import CheckboxCard from '@/components/molecules/CheckboxCard';
import usePost from '@/hooks/usePost';
import { addresses, fields, workTypes } from '@/faker/data';
import { PostCardSquareComponent } from '@/components/organisms/system/Card/PostCardSquare';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';

const GoogleMapsSearching = () => {
  const breadcrumbs = [
    {
      url: '/',
      label: 'Trang chủ',
      prefixIcon: () => <HomeOutlined />
    },
    {
      url: '/system/post-map',
      label: 'Bài đăng trên bản đồ số',
      prefixIcon: () => <FileSearchOutlined />
    }
  ];

  const [state, setField] = useCombinedState({
    titles: ''
  });

  const [checkedState, setCheckedState] = useCombinedState<any>({
    field: [''],
    address: [''],
    workType: ['']
  });

  const { handleSubmit, reset } = useForm();
  const { usePostsSearch } = usePost();
  const { posts } = usePostsSearch({
    fields: checkedState.field.toString(),
    addresses: checkedState.address.toString(),
    workTypes: checkedState.workType.toString(),
    titles: state.titles.toString()
  });

  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleClose = () => {
    setOpenModal(!openModal);
  };

  const handleOpen = () => {
    setOpenModal(!openModal);
  };

  const searchHandler = () => {
    console.log('titles: ', state.titles);
    reset();
  };

  return (
    <div
      className={
        'w-full min-h-screen md:px-10 px-3 pt-20  z-10 ' +
        flex({ direction: 'col', justifyContent: 'start', alignItems: 'center' })
      }
    >
      <div className='w-[80%] flex flex-row items-center justify-between gap-3'>
        <p className='text-[14px] font-bold text-black text-center'>Tuyển dụng 49.562 việc làm [Update 23/05/2025]</p>
        <Button
          onClick={() => alert('Click me')}
          className='hover:text-white border-blue-600 hover:bg-blue-600 text-blue-600 font-bold rounded-full md:px-8 px-4'
          variant={'outline'}
          size={'lg'}
        >
          <BellOutlined />
          <p className='hidden md:block'>Tạo thông báo việc làm</p>
        </Button>
      </div>
      <div className='w-[80%] flex flex-row items-center justify-start'>
        <BreadCrumbCommon breadcrumbs={breadcrumbs} currentUrl='/' mode='dark' />
      </div>
      <div className='w-[80%] relative flex md:flex-row flex-col justify-between gap-3 px-2 py-4'>
        <div className='md:w-[60%] w-full'>
          <GoogleMapsWrapper>
            <GoogleMaps locations={LOCATIONS} />
          </GoogleMapsWrapper>
        </div>
        <div className='relative md:w-[40%] w-full'>
          <div className='w-full flex flex-row justify-end items-center px-4 py-4 gap-2'>
            <div className='w-3/4 flex justify-end items-center gap-3'>
              <div className='border border-blue-600 rounded-sm'>
                <select className='px-2 border-none' name='' id=''>
                  <option className='border-none' value=''>
                    All
                  </option>
                  <option className='border-none' value='10'>
                    10
                  </option>
                </select>
              </div>
              <p className='text-slate-800 text-[14px] flex items-center gap-2'>
                <strong className='font-bold dark:text-blue-600'>Loc nang cao : </strong>
                <FileSearchOutlined
                  onClick={handleOpen}
                  className='text-blue-600 font-bold text-2xl cursor-pointer active:shadow-slate-500 active:shadow-sm'
                />
                <ClockCircleOutlined />
              </p>
            </div>
          </div>
          <form className='w-full md:right-0.5 gap-3' onSubmit={handleSubmit(() => searchHandler())}>
            <div className={'w-full py-1 ' + flex({ direction: 'col', alignItems: 'start', justifyContent: 'start' })}>
              <CommonInput
                inputValue={state.titles}
                typeInput='text'
                setField={setField}
                field='titles'
                hidden={false}
                label_title='Tìm kiếm'
                placeholder='Nhập tên công việc'
              />
              <button
                className='w-[90%] m-auto bg-blue-600 dark:bg-[#0000] font-bold text-[13px] py-2 px-4 rounded-md text-[#fff] hover:bg-green- active:shadow-sm active:shadow-slate-400 dark:border-[1px] dark:border-blue-600 dark:hover:bg-blue-600 dark:hover:text-white dark:text-blue-600'
                type='submit'
              >
                SEARCHING
              </button>
            </div>
          </form>
          {/* <p className='text-slate-800 text-[14px] flex items-center px-4 py-4 gap-2'>
            <strong className='font-bold'>Ket qua : </strong>None
          </p> */}
          <div className='w-full flex sm:grid sm:grid-cols-1 flex-col items-center justify-around gap-3 py-4 px-2'>
            {posts.map((item: any, index: any) => (
              <PostCardSquareComponent key={index + 1} post={item} />
            ))}
          </div>
          <div className={`absolute top-0 right-0 w-full h-full bg-[#3f3f3f5d] ${!openModal && 'hidden'}`}>
            <p
              onClick={handleClose}
              className='absolute top-2 left-2 px-2 py-1 cursor-pointer text-center rounded-sm text-[18px] text-red-500 font-bold active:shadow-red-500 active:shadow-sm hover:bg-slate-200'
            >
              <CloseOutlined />
            </p>
            <div className='absolute top-0 right-0 md:w-1/2 w-3/4 h-full bg-white dark:bg-slate-900'>
              <div className='w-full hidden md:flex flex-col items-center justify-start px-4'>
                <h3 className='text-[18px] text-black dark:text-blue-600 font-medium py-2'>Bộ tìm kiếm</h3>
                <CheckboxCard
                  title='Lĩnh vực'
                  array={fields}
                  setCheckedValue={setCheckedState}
                  checkedLabel='field'
                  checkedValue={checkedState.field}
                />
                <CheckboxCard
                  title='Địa điểm'
                  array={addresses}
                  setCheckedValue={setCheckedState}
                  checkedLabel='address'
                  checkedValue={checkedState.address}
                />
                <CheckboxCard
                  title='Loại công việc'
                  array={workTypes}
                  setCheckedValue={setCheckedState}
                  checkedLabel='workType'
                  checkedValue={checkedState.workType}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoogleMapsSearching;
