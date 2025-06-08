/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import AddComponent from '@/components/molecules/AddComp';
import useResume from '@/hooks/useResume';
import { UploadOutlined } from '@ant-design/icons';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const CommonInformation = () => {
  const { getOneResume } = useResume();
  const pathName = usePathname();
  console.log('pathName: ', pathName)
  const [resumeItem, setResumeItem] = useState<any>(null);

  const resumeId = Number(pathName.split('/')[4]);
  console.log('pathName: ', resumeId);

  useEffect(() => {
    getOneResume
      .mutateAsync({ id: resumeId })
      .then((res) => {
        setResumeItem(res.data.data);
      })
      .catch((error) => {
        console.log('error: ', error);
      });
  }, []);

  console.log('resumeItem: ', resumeItem);
  if (!resumeItem) {
    return 'Not found';
  }

  return (
    <div className='w-full flex flex-col items-start justify-start py-2 px-8 gap-4'>
      <div className='w-1/2 flex items-center justify-start p-4 gap-2'>
        <img src={resumeItem.image} alt={`image_${resumeItem.id}`} width='80' height='80' className='cursor-pointer' />
        <div className='flex flex-col items-center cursor-pointer'>
          <UploadOutlined className='hover:bg-blue-50 dark:text-blue-600 dark:hover:bg-blue-500 dark:hover:text-white active:shadow-sm active:shadow-slate-400 p-2 rounded-full' />
          <p className='text-black dark:text-blue-600 text-[16px] font-medium'>Cập nhật</p>
        </div>
      </div>
      <div className='flex flex-col items-start justify-start gap-2 px-2'>
        <h3 className='text-black dark:text-white text-[16px] font-normal'>
          <strong className='dark:text-blue-600'>Họ và Tên : </strong>
          {resumeItem.title}
        </h3>
        <h3 className='text-black dark:text-white text-[16px] font-normal'>
          <strong className='dark:text-blue-600'>Giới tính : </strong>
          {'Chưa cập nhật'}
        </h3>
        <h3 className='text-black dark:text-white text-[16px] font-normal'>
          <strong className='dark:text-blue-600'>Ngày sinh : </strong>
          {resumeItem.applicant.user.date_of_birth ? resumeItem.applicant.user.date_of_birth : 'Chưa cập nhật'}
        </h3>
      </div>
      <AddComponent title='Giáo dục'>
        <div className='w-full flex flex-col items-start justify-start gap-4'>
          {resumeItem.education.map((item: any, index: any) => (
            <div key={index} className='w-1/2 flex flex-row items-center justify-between'>
              <h3 className='w-[70%] text-black dark:text-white text-[14px] font-normal line-clamp-2'>{item.title}</h3>
              <p className='text-black dark:text-white text-[13px] font-normal'>{item.year}</p>
            </div>
          ))}
        </div>
      </AddComponent>
      <AddComponent title='Chuyên môn' action={true}>
        {Array.from({ length: 3 }).map((_, index) => (
          <h3 key={index} className='text-black dark:text-white text-[14px] font-normal'>
            Giao tiep cuon hut
          </h3>
        ))}
      </AddComponent>
      <AddComponent title='Kỹ năng mềm' action={true}>
        {resumeItem.skills &&
          resumeItem.skills!.split('; ').map((item: any, index: any) => (
            <h3 key={index} className='text-black dark:text-white text-[14px] font-normal'>
              {item}
            </h3>
          ))}
      </AddComponent>
      <AddComponent title='Ngoại ngữ'>
        {resumeItem.languages &&
          resumeItem.languages!.split('; ').map((item: any, index: any) => (
            <h3 key={index} className='text-black dark:text-white text-[14px] font-normal'>
              {item.toUpperCase()}
            </h3>
          ))}
      </AddComponent>
      <AddComponent title='Sở thích'>
        {Array.from({ length: 2 }).map((_, index) => (
          <h3 key={index} className='text-black dark:text-white text-[14px] font-normal'>
            Tieng anh
          </h3>
        ))}
      </AddComponent>
    </div>
  );
};

export default CommonInformation;
