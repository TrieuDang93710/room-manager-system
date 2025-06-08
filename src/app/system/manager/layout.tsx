'use client';
import { funcOfManager } from '@/config/funcMenuConfig';
import { Role } from '@/enum/role.enum';
import { useAuth } from '@/hooks/auth/useAuth';
import listFuncInterface from '@/interfaces/listFunction';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
interface ManagerSystemLayoutProps {
  children: React.ReactNode;
}

const ManagerSystemLayout = ({ children }: ManagerSystemLayoutProps) => {
  const [functions, setFunctions] = useState<listFuncInterface[]>([]);
  const { user } = useAuth();
  console.log('user: ', user);
  let account: string = Role.MANAGER;
  account = user && user!.role[0];
  // account = 'manager';
  console.log('account: ', account);

  useEffect(() => {
    switch (account) {
      case Role.MANAGER:
        setFunctions(funcOfManager);
        break;
      default:
        break;
    }
  }, [account]);

  return (
    <div className='w-[80%] flex md:flex-row flex-col items-center justify-between z-10 gap-4 font-[family-name:var(--font-geist-sans)]'>
      <div className='relative flex z-30 md:w-1/4 w-full flex-col items-start justify-start bg-white dark:bg-blue-900 shadow-sm shadow-blue-500 md:h-screen h-fit p-5 md:my-20 mt-20'>
        <p className='text-blue-600 md:text-[16px] text-[13px] font-bold pt-4 pb-4 text-center'>Quản lý chức năng</p>
        <ul className='w-full flex md:flex-col md:items-start md:justify-start flex-row items-center justify-start gap-2 flex-wrap truncate'>
          {functions?.map((item, index) => {
            return (
              <li
                key={index}
                className='flex text-blue-600 md:text-[16px] text-[12px] px-5 md:p-4 p-2 hover:bg-blue-200 hover:cursor-pointer rounded-md truncate'
              >
                <Link key={`${index}`} href={`/system/${account}/${item.path}`}>
                  {item.label}
                </Link>
              </li>
            );
          })}
          <li className='flex items-center justify-start text-blue-600 md:text-[16px] text-[12px] px-5 md:p-4 p-2 hover:bg-blue-200 hover:cursor-pointer rounded-md'>
            <Link href={'/system/message'} className='text-start truncate'>
              Tin nhắn
            </Link>
          </li>
        </ul>
      </div>
      <div className='w-full h-screen flex flex-col items-start justify-start overflow-y-auto md:my-20'>{children}</div>
    </div>
  );
};

export default ManagerSystemLayout;
