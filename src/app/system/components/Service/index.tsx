/* eslint-disable @typescript-eslint/no-explicit-any */
import CurrencyFormatted from '@/config/currency.config';
import useServicePackage from '@/hooks/usePackage';
import { useRouter } from 'next/navigation';

const ServicePackage = () => {
  const router = useRouter();
  const { packages } = useServicePackage();

  return (
    <div className='sm:w-[70%] w-full flex flex-col items-center pb-8'>
      <h2 className='text-2xl font-bold text-blue-600 py-2'>Các Gói Dịch Vụ</h2>
      <div className='w-[80%] flex sm:grid md:grid-cols-3 sm:grid-cols-2 flex-col items-center justify-around gap-4 py-10'>
        <div className='w-full border-[1px] rounded-sm py-2 cursor-pointer border-slate-500 dark:border-blue-600 flex flex-col items-center justify-start gap-2'>
          <button className='w-3/4 py-2 rounded-sm text-[14px] font-bold bg-[#9999993f] text-blue-600'>
            {CurrencyFormatted({ value: 0, code: 'VND' })}
          </button>
          <div className='w-full h-[30vh] flex flex-col items-start justify-start p-3 gap-2'>
            <p className='text-[16px] font-normal'>
              <strong className='text-black dark:text-blue-600 font-medium'>Giá gói : </strong>
              {CurrencyFormatted({ value: 0, code: 'VND' })}
            </p>
            <p className='text-[14px] font-normal'>
              <strong className='text-black dark:text-blue-600 font-medium'>Số tin đăng : </strong>5
            </p>
            <p className='text-[14px] font-normal'>
              <strong className='text-black dark:text-blue-600 font-medium text-pretty'>Mô tả : </strong>
              Hãy nâng cấp gói tài khoản để có trải nghiệm tốt nhất, trách gặp một số sự cố không mong muốn như gói cơ
              bản hiện tại.
            </p>
          </div>
          <button
            disabled={true}
            className='w-3/4 py-2 rounded-sm dark:text-blue-600 border border-slate-500 dark:border-[#9999993f] text-[14px] font-bold'
          >
            {/* <Link href={'/system/payment'}>Đã trải nghiệm</Link> */}
            Đã trải nghiệm
          </button>
        </div>

        {packages.map((item: any, index: any) => (
          <div
            key={index + 1}
            className='w-full border-[1px] rounded-sm hover:translate-x-1 py-2 cursor-pointer border-slate-500 hover:border-blue-600 flex flex-col items-center justify-start gap-2'
          >
            <button
              onClick={() => router.push(`/system/payment/${item.id}`)}
              className='w-3/4 py-2 rounded-md text-blue-600 text-[14px] font-bold hover:bg-blue-200 active:shadow-sm active:shadow-gray-600'
            >
              Mua ngay
            </button>
            <div className='w-full h-[30vh] flex flex-col items-start justify-start p-3 gap-2'>
              <p className='text-[16px] font-medium'>
                <strong className='text-black dark:text-blue-600 font-medium'>Giá gói : </strong>
                {CurrencyFormatted({ value: item!.price, code: 'VND' })}
              </p>
              <p className='text-[14px] font-normal'>
                <strong className='text-black dark:text-blue-600 font-medium'>Số tin đăng ứng tuyển : </strong>
                {item!.news_quantity}
              </p>
              <p className='text-[14px] font-normal'>
                <strong className='text-black dark:text-blue-600 font-medium'>Mô tả : </strong>
                {item!.description}
              </p>
            </div>
            <button className='w-3/4 py-2 rounded-md text-blue-600 border border-blue-600 text-[14px] font-bold hover:bg-blue-200 hover:text-blue-600 active:shadow-sm active:shadow-gray-600'>
              {item!.note}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicePackage;
