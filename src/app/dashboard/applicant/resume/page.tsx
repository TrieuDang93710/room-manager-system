'use client';
import CardSquare from '@/components/organisms/FuncSystem/Card/Square';
import CurrencyFormatted from '@/config/currency.config';
import {
  DeleteOutlined,
  DownloadOutlined,
  EditOutlined,
  HomeOutlined,
  PlusSquareOutlined,
  ShareAltOutlined,
  ToTopOutlined
} from '@ant-design/icons';
import { useRouter } from 'next/navigation';

const ResumePage = () => {
  const router = useRouter();
  return (
    <div className='relative w-full h-screen bg-[#f7f7f7] dark:bg-[#242424] flex flex-col items-end gap-6 snap-y pt-20 md:px-3'>
      <div className='w-full h-fit py-3 px-3 flex-col justify-center md:gap-3 gap-y-2'>
        <div className='w-full flex sm:flex-row flex-col sm:items-center sm:justify-between items-start justify-start border shadow-sm shadow-slate-500 rounded-sm px-2 py-1 gap-1'>
          <h3 className='text-[16px] text-black font-bold hover:text-blue-500 hover:underline-offset-1 cursor-default px-2 py-1'>
            Quản lý hồ sơ đăng ký
          </h3>
          <div className='border border-slate-400 hover:border-green-500 cursor-pointer rounded-sm px-4 py-1'>
            <select className='px-2 border-none bg-transparent' name='' id=''>
              <option className='border-none bg-transparent checked:bg-transparent' value=''>
                Tất cả
              </option>
              <option className='border-none bg-transparent checked:bg-transparent' value='new'>
                Mới nhất
              </option>
            </select>
          </div>
        </div>
        <div className='w-full flex flex-row items-center justify-start gap-2 px-4 mt-2'>
          <button className='px-4 py-1 cursor-pointer rounded-sm text-white hover:text-blue-800 text-[14px] font-bold hover:bg-blue-300 bg-blue-500 line-clamp-1'>
            <PlusSquareOutlined /> Tao moi
          </button>
        </div>
        <div className='w-full border h-[70vh] border-green-500 flex sm:grid md:grid-cols-3 sm:grid-cols-2 flex-col items-center justify-start overflow-y-auto gap-4 p-4 mt-4'>
          {Array.from({ length: 1 }).map((_, index) => (
            // <PostCardSquareComponent key={index + 1} onClick={() => router.push(`/system/post/${index + 1}`)} />
            <CardSquare key={index}>
              <div className='w-full px-2'>
                <p className='text-[13px] text-slate-800 font-normal'>Nhan vien phuc vu</p>
                <h3 className='text-[18px] text-black font-bold py-2 line-clamp-2'>Dang Binh Trieu</h3>
                <p className='text-[13px] text-slate-800 font-normal py-1'>
                  <HomeOutlined className='font-bold text-black mr-2' /> 29 Tran Duc Thao
                </p>
                <p className='text-[13px] text-slate-800 font-normal py-1'>
                  <strong className='font-bold text-black'>Cap nhat : </strong> Sua <EditOutlined />
                </p>
                <div className='w-full flex md:flex-row md:justify-between flex-col items-start justify-start gap-4 py-2'>
                  <button className='px-4 py-1 cursor-pointer rounded-sm text-blue-800 hover:text-white text-[10px] font-medium hover:bg-blue-500 bg-blue-100 line-clamp-1'>
                    <ToTopOutlined /> Day top
                  </button>
                  <button className='px-4 py-1 cursor-pointer rounded-sm text-blue-800 hover:text-white text-[10px] font-medium hover:bg-blue-500 bg-blue-100 line-clamp-1'>
                    <ShareAltOutlined /> Chia se
                  </button>
                  <button className='px-4 py-1 cursor-pointer rounded-sm text-blue-800 hover:text-white text-[10px] font-medium hover:bg-blue-500 bg-blue-100 line-clamp-1'>
                    <DownloadOutlined /> Tai xuong
                  </button>
                  <DeleteOutlined />
                </div>
                <p className='text-[13px] text-slate-800 font-normal py-1'>
                  <strong className='font-bold text-black'>Cap nhat : </strong>2 ngay truoc.
                </p>
              </div>
              <button
                // onClick={onClick}
                className='w-1/2 py-2 rounded-md text-green-500 text-[16px] font-bold hover:bg-green-200 hover:text-green-800 active:shadow-sm active:shadow-gray-600'
              >
                Xem them
              </button>
            </CardSquare>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
