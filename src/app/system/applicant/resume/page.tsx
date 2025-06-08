/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { PlusSquareOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import AddResume from './components/AddResume';
import ResumeCardComponent from '@/components/organisms/system/Card/ResumeCard';
import useResume from '@/hooks/useResume';
import UpdateResume from './components/UpdateResume';

const ResumePage = () => {
  const router = useRouter();
  const { useResumeSearch } = useResume();
  const { resumes } = useResumeSearch();
  const [addResume, setAddResume] = useState<boolean>(false);
  const [updateResume, setUpdateResume] = useState<boolean>(false);
  const [resumeSort, setResumeSort] = useState<any[]>([]);
  const [resumeItem, setResumeItem] = useState<any>(null);

  useEffect(() => {
    setResumeSort(resumes.sort((a: any, b: any) => a.id - b.id));
  }, [resumes]);

  const addResumeHandler = () => {
    setAddResume(!addResume);
  };

  const updateResumeHandler = (item: any) => {
    setUpdateResume(!updateResume);
    setResumeItem(item);
  };

  return (
    <div className='relative w-full h-screen dark:bg-[#242424] flex flex-col items-end gap-6 snap-y md:px-3'>
      <div className='w-full h-fit py-3 px-3 flex-col justify-center md:gap-3 gap-y-2'>
        <div className='w-full bg-blue-50 dark:bg-blue-800 dark:border-none flex sm:flex-row flex-col sm:items-center sm:justify-between items-start justify-start border shadow-sm shadow-slate-500 rounded-sm px-2 py-1 gap-1'>
          <h3 className='text-[16px] text-black dark:text-white font-bold hover:text-blue-500 hover:underline-offset-1 cursor-default px-2 py-1'>
            Quản lý hồ sơ đăng ký
          </h3>
          <div className='border border-blue-600 dark:hover:border-white cursor-pointer rounded-sm px-4 py-1'>
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
          <button
            onClick={addResumeHandler}
            className='px-4 py-1 cursor-pointer rounded-sm dark:text-blue-600 text-white dark:hover:bg-blue-500 bg-blue-600 dark:bg-transparent dark:hover:text-white dark:border dark:border-blue-600 text-[14px] font-bold line-clamp-1'
          >
            <PlusSquareOutlined /> Tao moi
          </button>
        </div>
        <div className='w-full h-[70vh] bg-blue-50 dark:bg-blue-800 p-4 mt-4 shadow-sm shadow-slate-500 rounded-sm'>
          <div className='w-full h-full bg-white dark:bg-slate-900 flex sm:grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 flex-col items-center justify-start overflow-y-auto gap-4 p-2 rounded-sm'>
            {resumeSort.map((item: any) => (
              <ResumeCardComponent
                key={item.id}
                resumeItem={item}
                updateHandler={() => updateResumeHandler(item)}
                onClick={() => router.push(`/system/applicant/resume/${item.id}`)}
              />
            ))}
          </div>
        </div>
      </div>
      <AddResume addResume={addResume} setAddResume={setAddResume} />
      <UpdateResume updateResume={updateResume} setUpdateResume={setUpdateResume} resumeItem={resumeItem} />
    </div>
  );
};

export default ResumePage;
