import CurrencyFormatted from '@/config/currency.config';

const ServicePackage = () => {
  return (
    <div className='w-[90%] flex flex-col items-center pb-8'>
      <h2 className='text-2xl font-bold py-2'>Cac goi dich vu</h2>
      <div className='w-[80%] flex sm:grid md:grid-cols-3 sm:grid-cols-2 flex-col items-center justify-around gap-4 py-10'>
        <div className='w-full border-[1px] rounded-sm py-2 cursor-pointer border-slate-500 dark:border-blue-600 flex flex-col items-center justify-start gap-2'>
          <button className='w-3/4 py-2 rounded-sm text-[16px] font-bold bg-[#9999993f] text-blue-600'>
            Mien phi
          </button>
          <div className='w-full h-[30vh] flex flex-col items-start justify-start p-3 gap-2'>
            <p className='text-[20px] font-medium'>
              <strong className='text-black dark:text-blue-600 font-medium'>Gia : </strong>
              {CurrencyFormatted({ value: 0, code: 'VND' })}
            </p>
            <p className='text-[18px] font-medium'>
              <strong className='text-black dark:text-blue-600 font-medium'>So tin dang : </strong>15
            </p>
            <p className='text-[18px] font-medium'>
              <strong className='text-black dark:text-blue-600 font-medium'>So tin dang : </strong>15
            </p>
          </div>
          <button
            disabled={true}
            className='w-3/4 py-2 rounded-sm dark:text-blue-600 border border-slate-500 dark:border-[#9999993f] text-[16px] font-bold'
          >
            Dang ky ngay
          </button>
        </div>

        {Array.from({ length: 2 }).map((_, index) => (
          <div
            key={index + 1}
            className='w-full border-[1px] rounded-sm hover:translate-x-1 py-2 cursor-pointer border-slate-500 hover:border-blue-600 flex flex-col items-center justify-start gap-2'
          >
            <button className='w-3/4 py-2 rounded-md text-blue-600 text-[16px] font-bold hover:bg-blue-200 active:shadow-sm active:shadow-gray-600'>
              Goi Pro
            </button>
            <div className='w-full h-[30vh] flex flex-col items-start justify-start p-3 gap-2'>
              <p className='text-[20px] font-medium'>
                <strong className='text-black dark:text-blue-600 font-medium'>Gia : </strong>
                {CurrencyFormatted({ value: 150000, code: 'VND' })}
              </p>
              <p className='text-[18px] font-medium'>
                <strong className='text-black dark:text-blue-600 font-medium'>So tin dang : </strong>15
              </p>
              <p className='text-[18px] font-medium'>
                <strong className='text-black dark:text-blue-600 font-medium'>So tin dang : </strong>15
              </p>
            </div>
            <button className='w-3/4 py-2 rounded-md text-blue-600 border border-blue-600 text-[16px] font-bold hover:bg-blue-200 hover:text-blue-600 active:shadow-sm active:shadow-gray-600'>
              Dang ky ngay
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicePackage;
