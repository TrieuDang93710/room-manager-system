/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { Card } from '@/components/molecules/Card';
import './message.css';
import { ArrowRightOutlined } from '@ant-design/icons';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useApiSecure } from '@/hooks/useApiSecure';
import { Role } from '@/enum/role.enum';

const RoomManagerPage = () => {
  const [users, setUsers] = useState([]);
  const [userFilter, setUserFilter] = useState([]);
  const apiSecure = useApiSecure();

  useEffect(() => {
    const token: string | null = localStorage.getItem('access-token');

    apiSecure
      .get('/user', {
        headers: {
          Authorization: `Bearer ${token!}`
        }
      })
      .then((res) => {
        setUsers(res.data.data);
        res.data.data.forEach((element: any) => {
          if (element.role[0] === Role.USER) {
            const array = [];
            array.push(element);
            setUserFilter(element);
          }
        });
        return;
      })
      .catch((error) => {
        return error;
      });
  }, []);

  console.log('users: ', users);
  console.log('userFilter: ', userFilter);

  return (
    <div className='message_container'>
      <div className='message_content'>
        <Card className='w-full flex flex-col justify-between dark:bg-[#ffffff00]'>
          <p className='text-[#292929] text-[15px] text-start pb-2'>Cuộc Trò Chuyện</p>
          <div className='sm:flex sm:h-screen sm:flex-row flex-col items-center justify-between gap-4'>
            <div className='sm:w-[20%] w-full h-full flex flex-col items-center justify-start rounded-sm gap-6 px-2 pb-4'>
              <div className='w-full flex flex-col items-start gap-2'>
                <label className='text-[#333333] font-bold text-[13px] dark:text-[#d1d1d1]' htmlFor=''>
                  Tìm Kiếm
                </label>
                <input
                  className='w-full text-[#333333] bg-white border-green-500 font-bold text-[12px] dark:text-[#d1d1d1] dark:border-green-500 dark:focus:border-green-500 placeholder:truncate border-[2px] rounded-md py-1 px-2'
                  placeholder='Nhập các từ khóa ...'
                  type='text'
                  name='search'
                  id='search'
                />
              </div>
              <ul className='w-full flex flex-col items-start gap-2 list-none'>
                <li className='w-full py-1 shadow-sm shadow-green-500 rounded-sm border-[2px] border-green-500'>
                  <div className='relative flex items-start justify-start truncate gap-2 px-2'>
                    <Image
                      alt='avatar'
                      src={'https://www.svgrepo.com/show/384676/account-avatar-profile-user-6.svg'}
                      width='30'
                      height='30'
                      className='cursor-pointer'
                    />
                    <div className='flex flex-col items-start relative truncate'>
                      <h3 className='font-bold text-[12px] dark:text-[#b4b4b4] dark:hover:text-[#ebebeb] cursor-pointer'>
                        Đặng Bình Triệu
                      </h3>
                      <p className='font-normal text-[10px] dark:text-[#b4b4b4] dark:hover:text-[#ebebeb] cursor-pointer'>
                        You: Thanks!
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className='relative w-full sm:min-h-screen h-full rounded-sm bg-slate-400 dark:bg-slate-800'>
              <div className='absolute top-0 left-0 w-full flex items-start justify-start truncate gap-2 px-2 py-2 bg-[#f7f7f7] dark:bg-[#333333] border border-slate-400 border-b-0'>
                <Image
                  alt='avatar'
                  src={'https://www.svgrepo.com/show/384676/account-avatar-profile-user-6.svg'}
                  width='30'
                  height='30'
                  className='cursor-pointer'
                />
                <div className='flex flex-col items-start relative truncate'>
                  <h3 className='font-bold text-[12px] dark:text-[#b4b4b4] dark:hover:text-[#ebebeb] cursor-pointer'>
                    Đặng Bình Triệu
                  </h3>
                  <p className='font-normal text-[10px] dark:text-[#b4b4b4] dark:hover:text-[#ebebeb] cursor-pointer'>
                    Not friend
                  </p>
                </div>
              </div>
              {/* code show message */}

            </div>
          </div>
        </Card>
        <form className='w-full flex sm:flex-row flex-col items-center justify-between shadow-md border border-slate-400 shadow-slate-300 py-2 px-2 mt-2 sm:gap-0 gap-2'>
          <div className='sm:w-[80%] w-full h-full flex items-center justify-end'>
            <input
              type='text'
              placeholder='Type ...'
              className='sm:w-2/3 w-full h-full px-2 bg-slate-200 dark:bg-slate-900 dark:focus:bg-slate-700 focus:bg-slate-400 dark:focus:bg-transparent outline-none focus:outline-none text-slate-50 dark:text-slate-50 dark:placeholder:text-slate-50 text-[13px] py-2'
            />
          </div>
          <button
            type='submit'
            className={`w-full sm:w-[20%] bg-green-500 text-slate-50 font-bold text-[16px] px-4 py-1 `}
          >
            <ArrowRightOutlined />
          </button>
        </form>
      </div>
    </div>
  );
};

export default RoomManagerPage;
