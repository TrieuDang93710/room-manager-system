import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { cn } from '@/helpers/utils';
import { useAuth } from '@/hooks/auth/useAuth';
import listFuncInterface from '@/interfaces/listFunction/index';
import { LogoutOutlined, MenuFoldOutlined, MenuUnfoldOutlined, MessageOutlined } from '@ant-design/icons';

interface FunctionListManagerProps {
  title?: string;
  hidden?: boolean;
  setHidden: (value: boolean) => void;
  listFunc?: listFuncInterface[];
  className?: string;
  account?: string;
  selectedMenu?: number;
  setSelectedMenu: (value: number) => void;
}
const FunctionListManager = ({
  className,
  hidden,
  listFunc,
  title,
  setHidden,
  account,
  selectedMenu,
  setSelectedMenu
}: FunctionListManagerProps) => {
  const router = useRouter();
  const auth = useAuth();
  const { user, logout, setLoading } = auth;
  const [selectedSubMenu, setSelectedSubMenu] = useState<number>(0);

  const handleSignOut = () => {
    setLoading(true);
    logout();
    setLoading(false);
    router.push('/sign-in');
  };

  return (
    <div
      className={
        hidden
          ? cn(
              'relative z-30 md:w-1/12 w-1/8 flex flex-col items-center justify-start bg-blue-500 dark:bg-blue-900 h-screen p-5',
              className
            )
          : cn(
              'relative z-30 md:w-1/6 w-1/4 flex flex-col items-start justify-start bg-blue-500 dark:bg-blue-900 h-screen p-5',
              className
            )
      }
    >
      <div className='w-full flex flex-col items-center truncate line-clamp-2'>
        <h2 className='text-white md:text-2xl text-[16px] font-bold pb-5 text-center line-clamp-2'>{title}</h2>
        <Image
          alt='avatar'
          src={
            user && user!.avatar ? user.avatar : 'https://www.svgrepo.com/show/384676/account-avatar-profile-user-6.svg'
          }
          width='60'
          height='60'
          className='pb-5'
        />
        <p className='text-[#e4e4e4] md:text-[16px] text-[13px] font-bold pt-4 pb-4 text-center'>Quản Lý Chức Năng</p>
      </div>
      <div className='w-full'>
        <ul className='w-ful'>
          {listFunc?.map((item, index) => {
            return (
              <li
                key={index}
                className={`${!hidden ? 'w-full block text-[#fcfcfc] md:text-[16px] text-[12px] px-5 md:p-4 hover:bg-[#e5e5e52e] hover:cursor-pointer rounded-md truncate' : 'w-full flex items-center justify-center text-[#fcfcfc] md:text-[16px] text-[12px] px-5 md:p-4 p-[10px] hover:bg-[#e5e5e52e] hover:cursor-pointer rounded-md'}`}
              >
                <Link
                  key={`${index}`}
                  href={`/dashboard/${account}/${item.path}`}
                  onClick={() => setSelectedMenu(index)}
                >
                  {!hidden ? item.label : item.icon}
                </Link>
                {account === 'admin' && item.children && selectedMenu === index && selectedMenu !== 0 && (
                  <SubMenuComponent
                    subMenus={item.children}
                    parentPath={item.path}
                    selectedSubMenu={selectedSubMenu}
                    setSelectedSubMenu={setSelectedSubMenu}
                  />
                )}
              </li>
            );
          })}
          {account !== 'admin' && (
            <li
              className={`w-ful flex items-center text-[#fcfcfc] md:text-[16px] text-[12px] px-5 md:p-4 p-[10px] hover:bg-[#e5e5e52e] hover:cursor-pointer rounded-md ${
                hidden ? 'justify-center' : 'justify-start'
              }`}
            >
              <Link href={'/dashboard/message'} onClick={handleSignOut} className='text-start truncate'>
                {hidden === true ? <MessageOutlined /> : 'Tin nhắn'}
              </Link>
            </li>
          )}
          <li
            className={`w-ful flex items-center text-[#fcfcfc] md:text-[16px] text-[12px] px-5 md:p-4 p-[10px] hover:bg-[#e5e5e52e] hover:cursor-pointer rounded-md ${
              hidden ? 'justify-center' : 'justify-start'
            }`}
          >
            <Link href={'/sign-in'} onClick={handleSignOut} className='text-start truncate'>
              {hidden === true ? <LogoutOutlined /> : 'Đăng Xuất'}
            </Link>
          </li>
        </ul>
      </div>
      <div className='absolute top-2 right-1'>
        {hidden ? (
          <MenuUnfoldOutlined
            onClick={() => setHidden(!hidden)}
            className=' text-white font-bold text-xl hover:cursor-pointer hover:text-[#dcdcdc]'
          />
        ) : (
          <MenuFoldOutlined
            onClick={() => setHidden(!hidden)}
            className=' text-white font-bold text-xl hover:cursor-pointer hover:text-[#dcdcdc]'
          />
        )}
      </div>
    </div>
  );
};

export default FunctionListManager;

interface SubMenuComponentProps {
  subMenus?: listFuncInterface[];
  parentPath?: string;
  selectedSubMenu?: number;
  setSelectedSubMenu: (value: number) => void;
}

const SubMenuComponent = ({ subMenus, parentPath, selectedSubMenu, setSelectedSubMenu }: SubMenuComponentProps) => {
  return (
    <ul className='w-full h-[30vh] list-none flex flex-col items-center justify-start gap-2 py-1 pl-1 overflow-y-auto truncate'>
      {subMenus &&
        subMenus.map((item, index) => (
          <li
            key={index}
            className='w-full flex flex-row items-center justify-start text-[#fcfcfc] md:text-[16px] text-[12px] px-2 md:p-4 hover:bg-[#e5e5e52e] hover:cursor-pointer rounded-md truncate'
            onClick={() => {
              setSelectedSubMenu(index);
            }}
          >
            <Link
              className='w-full flex flex-row items-center justify-start text-[16px] font-normal gap-2 truncate hover:overflow-visible'
              href={`/dashboard/admin/${parentPath}/${item.path}`}
            >
              <span className='h-8 flex items-center'>
                <input
                  className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                  type='radio'
                  checked={selectedSubMenu === index && true}
                />
              </span>
              {item.label}
            </Link>
          </li>
        ))}
    </ul>
  );
};
