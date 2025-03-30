import AddComponent from '@/components/molecules/AddComp';
import { UploadOutlined } from '@ant-design/icons';
import Image from 'next/image';

const CommonInformation = () => {
  return (
    <div className='w-full flex flex-col items-start justify-start py-2 px-8 gap-4'>
      <div className='w-1/2 flex items-center justify-start p-4 gap-2'>
        <Image
          alt='avatar'
          src={'https://www.svgrepo.com/show/384676/account-avatar-profile-user-6.svg'}
          width='80'
          height='80'
          className='cursor-pointer'
        />
        <div className='flex flex-col items-center cursor-pointer'>
          <UploadOutlined className='hover:bg-blue-50 active:shadow-sm active:shadow-slate-400 p-2 rounded-full' />
          <p className='text-black text-[16px] font-medium'> Cap nhat</p>
        </div>
      </div>
      <div className='flex flex-col items-start justify-start gap-2'>
        <h3 className='text-black text-[16px] font-normal'>
          <strong>Ho va Ten : </strong>Dang Binh trieu
        </h3>
        <h3 className='text-black text-[16px] font-normal'>
          <strong>Gioi tinh : </strong>Nam
        </h3>
        <h3 className='text-black text-[16px] font-normal'>
          <strong>Ngay sinh : </strong>17 - 03 - 2003
        </h3>
      </div>
      <AddComponent title='Giao duc'>
        {Array.from({ length: 1 }).map((_, index) => (
          <h3 key={index} className='text-black text-[16px] font-normal'>
            Dai hoc Dong A
          </h3>
        ))}
      </AddComponent>
      <AddComponent title='Chuyen mon' action={true}>
        {Array.from({ length: 3 }).map((_, index) => (
          <h3 key={index} className='text-black text-[16px] font-normal'>
            Giao tiep cuon hut
          </h3>
        ))}
      </AddComponent>
      <AddComponent title='Ngoai ngu'>
        {Array.from({ length: 2 }).map((_, index) => (
          <h3 key={index} className='text-black text-[16px] font-normal'>
            Tieng anh
          </h3>
        ))}
      </AddComponent>
    </div>
  );
};

export default CommonInformation;
