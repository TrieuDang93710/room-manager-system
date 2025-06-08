/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import AddComponent from '@/components/molecules/AddComp';
import useResume from '@/hooks/useResume';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const MoreDetailInformation = () => {
  const { getOneResume } = useResume();
  const pathName = usePathname();
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
    <div className='w-full flex flex-col items-start justify-center py-4 px-8 gap-4'>
      <AddComponent title='Kinh nghiem'>
        <div className='w-full flex flex-col items-start justify-start gap-4'>
          {resumeItem.experiences.map((item: any, index: any) => (
            <div key={index + 1} className='w-full flex flex-col items-start justify-start gap-4 p-2'>
              <div className='w-full flex flex-row items-center justify-between'>
                <div className='w-1/3 flex flex-col items-start justify-center gap-2'>
                  <h3 className='text-black dark:text-white text-[14px] font-bold line-clamp-2'>{item.title}</h3>
                  <p className='text-black dark:text-white text-[12px] font-normal line-clamp-1'>{item.company}</p>
                </div>
                <p className='text-black dark:text-white text-[12px] font-medium'>{item.year}</p>
              </div>
              <ul className='list-disc flex flex-col items-start justify-start gap-2 px-8'>
                {item.detail.split('; ').map((text: any, i: any) => (
                  <li key={i} className='text-black dark:text-white text-[13px] font-normal line-clamp-2'>
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </AddComponent>
      <AddComponent title='Chuyên môn'>
        <div className='w-full flex flex-col items-start justify-start gap-4'>
          {resumeItem.certificates.map((item: any, index: any) => (
            <div key={index} className='w-1/3 flex flex-row items-center justify-between'>
              <h3 className='text-black dark:text-white text-[14px] font-normal line-clamp-2'>{item.title}</h3>
              <p className='text-black dark:text-white text-[12px] font-normal'>{item.year}</p>
            </div>
          ))}
        </div>
      </AddComponent>
      <AddComponent title='Giải thưỡng'>
        <div className='w-full flex flex-col items-start justify-start gap-4'>
          {resumeItem.awards.map((item: any, index: any) => (
            <div key={index} className='w-1/3 flex flex-row items-center justify-between'>
              <h3 className='text-black dark:text-white text-[14px] font-normal line-clamp-2'>{item.title}</h3>
              <p className='text-black dark:text-white text-[12px] font-normal'>{item.year}</p>
            </div>
          ))}
        </div>
      </AddComponent>
    </div>
  );
};

export default MoreDetailInformation;
