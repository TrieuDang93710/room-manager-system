'use client';
import BannerCarousel from '@/components/organisms/FuncSystem/Banner/banner_carousel';
import { introductions, listRoom } from '@/faker/data';
import Image from 'next/image';
import 'react-multi-carousel/lib/styles.css';
import SliderCommon from '@/components/organisms/FuncSystem/Slider/slider';
import RoomCardCommon from '@/components/organisms/FuncSystem/Card/room';
import LessorCard from '@/components/organisms/FuncSystem/Card/lessor';
import { useState } from 'react';
import flex from '@/config/flex.config';
import useCombinedState from '@/hooks/useCombinedState';
import CommonInput from '@/components/atoms/Input';
import { handleBlurChecking } from '@/lib/utils';

const SystemPage = () => {
  const [filteredItems] = useState(listRoom);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(2);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

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

  return (
    <main className='w-full min-h-screen md:px-10 px-3 pt-20 font-[family-name:var(--font-geist-sans)] flex flex-col justify-start items-center z-10'>
      <div className='flex sm:hidden flex-col justify-center items-center'>
        <Image alt='logo' src='https://www.svgrepo.com/show/513695/broccoli.svg' width={140} height={140} />
        <span className='text-[26px] font-bold text-gradient-to-bl text-green-500'>green life</span>
      </div>
      <BannerCarousel />
      <div className='w-full flex flex-col gap-3 px-2'>
        <h2 className='text-2xl font-bold pt-4'>About us</h2>
        <div className='w-full flex md:justify-around px-2'>
          {introductions.map((item) => (
            <div key={item.id} className='w-1/3 md:w-1/5 px-3 py-3 flex flex-col justify-start gap-3'>
              <div className='w-full flex items-center justify-center gap-4 py-2 hover:cursor-pointer hover:border-[2px] hover:border-green-500 dark:hover:border-slate-50'>
                <Image className='' alt='cart' src={item.icon} width={30} height={30} />
                <h2 className='text-xl font-bold dark:text-[#b1b1b1]'>{item.title}</h2>
              </div>
              <p className='text-xs font-normal text-[#8c8c8c] text-wrap truncate line-clamp-3 hover:line-clamp-none'>
                {item.descriptions}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className='w-full relative flex flex-col gap-3 px-2'>
        <h2 className='text-2xl font-bold py-4'>Recommendation</h2>
        <SliderCommon items={listRoom} Component={RoomCardCommon} />
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
      <div className='w-full relative flex flex-col gap-3 px-2'>
        <h2 className='text-2xl font-bold py-4'>Review about us</h2>
      </div>
      <div className='w-full relative flex flex-col gap-3 px-2'>
        <h2 className='text-2xl font-bold py-4'>Nguoi cho thue</h2>
        <SliderCommon items={listRoom} Component={LessorCard} />
      </div>
      <div className='w-full relative flex flex-col gap-3 p-6'>
        <h2 className='text-2xl font-bold py-4'>Contact us</h2>
        <div className={'w-full gap-3 ' + flex({ alignItems: 'start', justifyContent: 'start', direction: 'row' })}>
          <div className={'w-full '}>
            <form
              className={
                'w-full h-full gap-4 ' + flex({ alignItems: 'center', justifyContent: 'center', direction: 'col' })
              }
            >
              <div className='w-full py-1 grid grid-cols-2 gap-2'>
                <CommonInput
                  onblur={() => handleBlurChecking('emailError', state.email, setField)}
                  inputValue={state.email}
                  typeInput='text'
                  setField={setField}
                  field='email'
                  error={state.emailError}
                  label_title='Fullname'
                />
                <CommonInput
                  onblur={() => handleBlurChecking('phoneError', state.phone, setField)}
                  inputValue={state.phone}
                  typeInput='text'
                  setField={setField}
                  field='phone'
                  error={state.phoneError}
                  label_title='Email'
                />
              </div>
              <CommonInput
                onblur={() => handleBlurChecking('socialError', state.social, setField)}
                inputValue={state.social}
                typeInput='text'
                setField={setField}
                field='social'
                error={state.socialError}
                label_title='Subject'
              />
              <CommonInput
                onblur={() => handleBlurChecking('socialError', state.social, setField)}
                inputValue={state.social}
                typeInput='text'
                setField={setField}
                field='social'
                error={state.socialError}
                label_title='Descriptions'
              />
              <button
                className='w-3/4 bg-blue-600 dark:bg-[#0000] font-bold text-[13px] py-2 px-4 rounded-md text-[#fff] hover:bg-blue-500 dark:border-[1px] dark:border-[#fff] dark:hover:bg-blue-200 dark:hover:text-[#000] dark:text-white'
                type='submit'
              >
                submit
              </button>
            </form>
          </div>
          <div className={'w-1/3 ' + flex({ alignItems: 'start', direction: 'col', justifyContent: 'start' })}>
            <h2 className='text-[14px] font-bold py-4'>Contact us</h2>
            <ul
              className={
                'w-1/5 list-none gap-4 ' + flex({ alignItems: 'start', direction: 'col', justifyContent: 'start' })
              }
            >
              <li className='navbar_menu text-[12px] py-2 hover:cursor-pointer dark:hover:bg-slate-700'>
                <a href='/'>
                  <strong>Address: </strong>
                  Address
                </a>
              </li>
              <li className='navbar_menu text-[12px] py-2 hover:cursor-pointer dark:hover:bg-slate-700'>
                <a href='/'>
                  <strong>Phone: </strong>
                  Phone
                </a>
              </li>
              <li className='navbar_menu text-[12px] py-2 hover:cursor-pointer dark:hover:bg-slate-700'>
                <a href='/'>
                  <strong>Email: </strong>
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SystemPage;
