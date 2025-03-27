'use client';
import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import BannerCarousel from '@/components/organisms/system/Banner';
import { introductions, listRoom } from '@/faker/data';
import 'react-multi-carousel/lib/styles.css';
import CardSquare from '@/components/organisms/system/Card/Square';
import { StarOutlined } from '@ant-design/icons';
import CurrencyFormatted from '@/config/currency.config';
import { PostCardSquareComponent } from '@/components/organisms/system/Card/PostCardSquare';
import { PostingAgentComponent } from '@/components/organisms/system/Card/PostAgent';

const SystemPage = () => {
  const router = useRouter();
  const [filteredItems] = useState(listRoom);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(2);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);
  console.log('currentItems: ', currentItems);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <main className='w-full min-h-screen md:px-10 px-3 pt-20 font-[family-name:var(--font-geist-sans)] flex flex-col justify-start items-center z-10'>
      <div className='flex sm:hidden flex-col justify-center items-center'>
        <Image alt='logo' src='https://www.svgrepo.com/show/513695/broccoli.svg' width={140} height={140} />
        <span className='text-[26px] font-bold text-gradient-to-bl text-green-500'>green life</span>
      </div>
      <BannerCarousel />
      <div className='w-full flex flex-col items-center gap-3 px-2'>
        <h2 className='text-2xl font-bold mt-8'>Bài Đăng Nổi Bật</h2>
        <div className='lg:w-[60%] md:w-3/4 w-full flex md:flex-row flex-1 items-center justify-center gap-2'>
          {Array.from({ length: 10 }).map((_, index) => (
            <p
              key={index}
              className='w-[20%] text-[14px] text-center truncate text-slate-950 mb-4 font-medium hover:text-green-500 hover:underline-offset-1 cursor-pointer'
            >
              Kinh doanh {index + 1}
            </p>
          ))}
        </div>
        <div className='w-full flex sm:grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 flex-col items-center justify-around gap-3'>
          {Array.from({ length: 1 }).map((_, index) => (
            <PostCardSquareComponent key={index + 1} onClick={() => router.push(`/system/post/${index + 1}`)} />
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
      <div className='w-full flex flex-col items-center gap-3 px-2'>
        <h2 className='text-2xl font-bold pt-4'>Về Chúng Tôi</h2>
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
      <div className='w-full h-[40vh] relative flex flex-col items-center border border-green-500 gap-3 px-2'>
        <h2 className='text-2xl font-bold py-4'>Đánh Giá Về Chúng Tôi</h2>
      </div>
      {/* <div className='w-full relative flex flex-col items-center gap-3 px-2'>
        <h2 className='text-2xl font-bold py-4'>Hệ Thống Khuến Nghị</h2>
        <SliderCommon items={listRoom} Component={PostCardComponent} />
      </div> */}
      <div className='w-[90%] flex sm:grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 flex-col items-center justify-around gap-4 py-10'>
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index + 1}
            className='w-full h-[20vh] border-[1px] rounded-sm hover:translate-x-1 cursor-pointer border-slate-300 hover:border-green-500 flex flex-col items-center justify-center'
          >
            <p className='text-2xl font-medium'>20 Tin</p>
          </div>
        ))}
      </div>
      <div className='w-full flex flex-col items-center'>
        <h2 className='text-2xl font-bold py-2'>Dai dien don vi tuyen dung</h2>
        <div className='w-[90%] flex sm:grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 flex-col items-center justify-around gap-4 py-10'>
          {Array.from({ length: 4 }).map((_, index) => (
            <PostingAgentComponent key={index + 1} onClick={() => router.push(`/system/business/${index + 1}`)} />
          ))}
        </div>
      </div>
      <div className='w-full flex flex-col items-center'>
        <h2 className='text-2xl font-bold py-2'>Danh gia ve dich vu cua chung toi</h2>
        <div className='w-[90%] flex sm:grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 flex-col items-center justify-around gap-4 py-10'>
          {Array.from({ length: 4 }).map((_, index) => (
            <CardSquare key={index + 1}>
              <p className='text-[13px] text-slate-800 font-normal py-1 line-clamp-4'>
                <strong className='font-bold text-black'>Mo ta : </strong>Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Quas quisquam possimus perferendis illum nulla incidunt ipsum dignissimos natus.
                Nihil, deleniti aliquam. Vel, officia reiciendis provident unde commodi perferendis. Totam, vel?
              </p>
              <div className='w-[60%] py-2 flex items-center justify-center gap-3'>
                {Array.from({ length: 5 }).map((_, index) => (
                  <StarOutlined key={index + 1} className='text-yellow-400 text-[18px] font-medium' />
                ))}
              </div>
            </CardSquare>
          ))}
        </div>
      </div>
      <div className='w-full flex flex-col items-center pb-8'>
        <h2 className='text-2xl font-bold py-2'>Cac goi dich vu</h2>
        <div className='w-[80%] flex sm:grid md:grid-cols-3 sm:grid-cols-2 flex-col items-center justify-around gap-4 py-10'>
          <div className='w-full border-[1px] rounded-sm hover:translate-x-1 py-2 cursor-pointer border-slate-300 hover:border-green-500 flex flex-col items-center justify-start gap-2'>
            <button className='w-3/4 py-2 rounded-md text-[16px] font-bold bg-green-500 text-white active:shadow-sm active:shadow-gray-600'>
              Mien phi
            </button>
            <div className='w-full h-[20vh] flex flex-col items-start justify-start p-3 gap-2'>
              <p className='text-[20px] font-medium'>
                <strong className='text-black font-medium'>Gia : </strong>
                {CurrencyFormatted({ value: 0, code: 'VND' })}
              </p>
              <p className='text-[18px] font-medium'>
                <strong className='text-black font-medium'>So tin dang : </strong>15
              </p>
              <p className='text-[18px] font-medium'>
                <strong className='text-black font-medium'>So tin dang : </strong>15
              </p>
            </div>
            <button
              disabled={true}
              className='w-3/4 py-2 rounded-md text-slate-800 border border-slate-600 text-[16px] font-bold'
            >
              Dang ky ngay
            </button>
          </div>
          {Array.from({ length: 2 }).map((_, index) => (
            <div
              key={index + 1}
              className='w-full border-[1px] rounded-sm hover:translate-x-1 py-2 cursor-pointer border-slate-300 hover:border-green-500 flex flex-col items-center justify-start gap-2'
            >
              <button className='w-3/4 py-2 rounded-md text-green-500 text-[16px] font-bold hover:bg-green-500 hover:text-white active:shadow-sm active:shadow-gray-600'>
                Goi Pro
              </button>
              <div className='w-full h-[20vh] flex flex-col items-start justify-start p-3 gap-2'>
                <p className='text-[20px] font-medium'>
                  <strong className='text-black font-medium'>Gia : </strong>
                  {CurrencyFormatted({ value: 150000, code: 'VND' })}
                </p>
                <p className='text-[18px] font-medium'>
                  <strong className='text-black font-medium'>So tin dang : </strong>15
                </p>
                <p className='text-[18px] font-medium'>
                  <strong className='text-black font-medium'>So tin dang : </strong>15
                </p>
              </div>
              <button className='w-3/4 py-2 rounded-md text-green-500 border border-green-500 text-[16px] font-bold hover:bg-green-500 hover:text-white active:shadow-sm active:shadow-gray-600'>
                Dang ky ngay
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default SystemPage;
