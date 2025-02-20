'use client';
import BreadCrumbCommon from '@/components/atoms/Breadcumb';
import CommonInput from '@/components/atoms/Input';
import GoogleMaps from '@/components/molecules/GoogleMap/google-map';
import GoogleMapsWrapper from '@/components/molecules/GoogleMap/google-map-wrapper';
import { LOCATIONS } from '@/components/molecules/GoogleMap/location';
import flex from '@/config/flex.config';
import useCombinedState from '@/hooks/useCombinedState';
import { handleBlurChecking } from '../../../helpers/utils';
import { ClockCircleOutlined, CloseOutlined, FileSearchOutlined, HomeOutlined } from '@ant-design/icons';
import { useState } from 'react';
import CheckboxCard from '@/components/molecules/CheckboxCard';

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
    email: '',
    emailError: ''
  });

  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleClose = () => {
    setOpenModal(!openModal);
  };

  const handleOpen = () => {
    setOpenModal(!openModal);
  };

  return (
    <div
      className={
        'w-full min-h-screen md:px-10 px-3 pt-20  z-10' +
        flex({ direction: 'col', justifyContent: 'start', alignItems: 'center' })
      }
    >
      <div
        className='w-full h-[20vh] px-2 my-4 bg-center bg-cover bg-no-repeat flex flex-row items-center justify-start'
        style={{
          backgroundImage:
            "url('https://taggd.in/wp-content/uploads/2022/12/Job-Prospects-for-Freshers-in-Pharmaceutical-Industry-Banner.png')"
        }}
      >
        <BreadCrumbCommon breadcrumbs={breadcrumbs} currentUrl='/' mode='dark' />
      </div>
      <div className='w-full relative flex md:flex-row flex-col gap-3 px-2'>
        <div className='md:w-[60%] w-full'>
          <GoogleMapsWrapper>
            <GoogleMaps locations={LOCATIONS} />
          </GoogleMapsWrapper>
        </div>
        <div className='relative md:w-[40%] w-full'>
          <div className='w-full flex flex-row justify-end items-center px-4 py-4 gap-2'>
            <div className='w-3/4 flex justify-end items-center gap-3'>
              <div className='border border-green-500 rounded-sm'>
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
                <strong className='font-bold'>Loc nang cao : </strong>
                <FileSearchOutlined
                  onClick={handleOpen}
                  className='text-green-500 font-bold text-2xl cursor-pointer active:shadow-slate-500 active:shadow-sm'
                />
                <ClockCircleOutlined />
              </p>
            </div>
          </div>
          <form action='' className='w-full md:right-0.5 gap-3'>
            <div className={'w-full py-1 ' + flex({ direction: 'col', alignItems: 'start', justifyContent: 'start' })}>
              <CommonInput
                onblur={() => handleBlurChecking('text', 'emailError', state.email, setField)}
                inputValue={state.email}
                typeInput='text'
                setField={setField}
                field='email'
                error={state.emailError}
                hidden={true}
                label_title='Nhap tu khoa de tim kiem'
                placeholder='Enter a address to get longitude and latitude'
              />
              <button
                className='w-[90%] m-auto bg-green-500 dark:bg-[#0000] font-bold text-[13px] py-2 px-4 rounded-md text-[#fff] hover:bg-green- active:shadow-sm active:shadow-slate-400 dark:border-[1px] dark:border-[#fff] dark:hover:bg-blue-200 dark:hover:text-[#000] dark:text-white'
                type='submit'
              >
                SEARCHING
              </button>
            </div>
          </form>
          <p className='text-slate-800 text-[14px] flex items-center px-4 py-4 gap-2'>
            <strong className='font-bold'>Ket qua : </strong>None
          </p>
          <div className={`absolute top-0 right-0 w-full h-full bg-[#3f3f3f5d] ${!openModal && 'hidden'}`}>
            <p
              onClick={handleClose}
              className='absolute top-2 left-2 px-2 py-1 cursor-pointer text-center rounded-sm text-[18px] text-red-500 font-bold active:shadow-red-500 active:shadow-sm hover:bg-slate-200'
            >
              <CloseOutlined />
            </p>
            <div className='absolute top-0 right-0 md:w-1/2 w-3/4 h-full bg-white'>
              <div className='w-full hidden md:flex flex-col items-center justify-start px-4'>
                <h3 className='text-[18px] text-black font-medium py-2'>Bo loc bai dang</h3>
                <CheckboxCard title='Linh vuc' />
                <CheckboxCard title='Dia diem' />
                <CheckboxCard title='Hinh thuc' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoogleMapsSearching;
