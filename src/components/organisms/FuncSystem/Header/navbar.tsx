'use client';
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { MenuUnfoldOutlined, MoonOutlined, SunOutlined } from '@ant-design/icons';
import * as React from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import { useApiSecure } from '@/hooks/useApiSecure';
import jwt from 'jsonwebtoken';

interface NavbarCommonProps {
  isOpen?: boolean;
  setIsOpen: (value: boolean) => void;
}

const NavbarCommon = ({ isOpen, setIsOpen }: NavbarCommonProps) => {
  const router = useRouter();
  const { setTheme } = useTheme();
  const apiSecure = useApiSecure();
  const auth = useAuth();
  const { user, setUser, logout } = auth;

  useEffect(() => {
    const token: string | null = localStorage.getItem('access-token');

    if (token) {
      const { id } = jwt.decode(token!);

      apiSecure.get(`user/${id}`).then((result) => {
        console.log('user: ', result.data.data);
        setUser(result.data.data[0]);
      });
    } else {
      setUser(null);
    }
  }, []);

  console.log('user: ', user);

  const handleOpenModal = () => {
    setIsOpen(!isOpen);
  };

  const signOut = () => {
    logout();
    router.push('/sign-in');
  };

  return (
    <nav className='w-full flex justify-between items-center bg-white dark:bg-slate-900 shadow-md dark:shadow-slate-300 border rounded-none px-2 overflow-y-auto fixed z-20'>
      <div className='flex justify-start items-center gap-4 truncate'>
        <MenuUnfoldOutlined
          onClick={handleOpenModal}
          className='font-bold text-xl md:hidden hover:cursor-pointer hover:text-slate-700 dark:text-white dark:hover:text-slate-300'
        />
        <div className='sm:flex hidden flex-col justify-center items-center py-1 px-2'>
          <Image alt='logo' src='https://www.svgrepo.com/show/513695/broccoli.svg' width={30} height={30} />
          <span className='text-[13px] font-bold text-gradient-to-bl text-green-500'>green life</span>
        </div>
        <h2 className='text-green-600 text-2xl font-bold sm:hidden py-4 px-2'>CHÀO MỪNG MỌI NGƯỜI</h2>
      </div>
      <ul className='w-[50%] list-none md:flex gap-2 hidden'>
        <li className='navbar_menu text-[14px] py-2 px-2 rounded-sm active:shadow active:shadow-slate-500 hover:cursor-pointer hover:border hover:border-green-500 dark:hover:bg-slate-700 truncate'>
          <Link href={'/'}>Trang Chủ</Link>
        </li>
        <li className='navbar_menu text-[14px] py-2 px-2 rounded-sm active:shadow active:shadow-slate-500 hover:cursor-pointer hover:border hover:border-green-500 dark:hover:bg-slate-700 truncate'>
          <Link href={'/system/post-filter'}>Tìm kiếm</Link>
        </li>
        <li className='navbar_menu text-[14px] py-2 px-2 rounded-sm active:shadow active:shadow-slate-500 hover:cursor-pointer hover:border hover:border-green-500 dark:hover:bg-slate-700 truncate'>
          <Link href={'/system/post-map'}>Tìm kiếm trên bản đồ</Link>
        </li>
        <li className='navbar_menu text-[14px] py-2 px-2 rounded-sm active:shadow active:shadow-slate-500 hover:cursor-pointer hover:border hover:border-green-500 dark:hover:bg-slate-700 truncate'>
          <Link href={'/system/business'}>Doanh nghiệp</Link>
        </li>
        <li className='navbar_menu text-[14px] py-2 px-2 rounded-sm active:shadow active:shadow-slate-500 hover:cursor-pointer hover:border hover:border-green-500 dark:hover:bg-slate-700 truncate'>
          <Link href={'/system/applicant'}>Ứng viên</Link>
        </li>
        <li className='navbar_menu text-[14px] py-2 px-2 rounded-sm active:shadow active:shadow-slate-500 hover:cursor-pointer hover:border hover:border-green-500 dark:hover:bg-slate-700 truncate'>
          <Link href={'/system/news'}>Tin tức</Link>
        </li>
      </ul>
      {user ? (
        <div className='flex items-center justify-end'>
          <div className='relative flex items-start justify-center gap-1'>
            <Image
              alt='avatar'
              src='https://www.svgrepo.com/show/384676/account-avatar-profile-user-6.svg'
              width='40'
              height='40'
              className='cursor-pointer'
            />
            <div className='flex flex-col items-start relative'>
              <h3 className='font-medium text-[14px] dark:text-[#b4b4b4] dark:hover:text-[#ebebeb] cursor-pointer'>
                {user.username}
              </h3>
              <p className='font-medium text-[12px] dark:text-[#b4b4b4] dark:hover:text-[#ebebeb] cursor-pointer'>
                {user.email}
              </p>
            </div>
          </div>
          <ul className='list-none md:flex px-3 hidden'>
            <li onClick={() => setTheme('system')}>
              <SunOutlined className='cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full p-3' />
            </li>
            <li onClick={() => setTheme('dark')}>
              <MoonOutlined className='cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full p-3' />
            </li>
          </ul>
          <Button onClick={signOut} className='bg-none mr-4' variant={'outline'} size={'sm'}>
            Sign out
          </Button>
        </div>
      ) : (
        <div className='gap-8 sm:flex hidden'>
          <div className='flex gap-3 px-2'>
            <Button onClick={() => router.push('/sign-in')} className='bg-none' variant={'outline'} size={'sm'}>
              Sign in
            </Button>
            <Button onClick={() => router.push('/sign-up')} className='bg-none' variant={'outline'} size={'sm'}>
              Sign up
            </Button>
            <Button onClick={() => router.push('/sign-in-manager')} className='bg-none' variant={'outline'} size={'sm'}>
              Post
            </Button>
          </div>
          <ul className='list-none md:flex px-3 hidden'>
            <li onClick={() => setTheme('system')}>
              <SunOutlined className='cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full p-3' />
            </li>
            <li onClick={() => setTheme('dark')}>
              <MoonOutlined className='cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full p-3' />
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavbarCommon;
