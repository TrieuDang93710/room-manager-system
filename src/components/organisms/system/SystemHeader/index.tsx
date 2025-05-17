/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import { useEffect, useState } from 'react';
import * as React from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { Button } from '@/components/ui/button';
import { MenuUnfoldOutlined, MoonOutlined, SunOutlined } from '@ant-design/icons';
import { useAuth } from '@/hooks/auth/useAuth';
import { useApiSecure } from '@/hooks/useApiSecure';
import './header.css';

interface NavbarCommonProps {
  isOpen?: boolean;
  setIsOpen: (value: boolean) => void;
}

const NavbarCommon = ({ isOpen, setIsOpen }: NavbarCommonProps) => {
  const [sticky, setSticky] = useState<boolean>(false);
  const router = useRouter();
  const pathname = usePathname();
  const { setTheme } = useTheme();
  const apiSecure = useApiSecure();
  const auth = useAuth();
  const { user, setUser, logout } = auth;
  const menus = [
    { path: '', label: 'Trang chủ' },
    { path: 'system/post-filter', label: 'Tìm kiếm' },
    { path: 'system/post-map', label: 'Tìm kiếm trên bản đồ' },
    { path: 'system/business', label: 'Doanh nghiệp' },
    { path: 'system/applicant', label: 'Ứng viên' },
    { path: 'system/news', label: 'Tin tức' }
  ];

  const menuItem = menus.map((item, index) => (
    <li key={index} className='menu_item'>
      <Link href={`/${item.path}`}>{item.label}</Link>
    </li>
  ));

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.addEventListener('scroll', handleScroll);
    };
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.addEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const token: string | null = localStorage.getItem('access-token');

    if (token) {
      const { id } = jwt.decode(token!) as JwtPayload;

      apiSecure.get(`user/${id}`).then((result) => {
        console.log('user: ', result.data.data);
        setUser(result.data.data);
      });
    } else {
      setUser(null);
    }
  }, []);

  const handleOpenModal = () => {
    setIsOpen(!isOpen);
  };

  const signOut = () => {
    logout();
    router.push('/sign-in');
  };

  return (
    <nav className={`header_nav ${sticky && 'shadow-md transition-all duration-300 ease-in-out hide-scrollbar'}`}>
      <div className='header_logo'>
        <MenuUnfoldOutlined
          onClick={handleOpenModal}
          className='font-bold text-xl md:hidden hover:cursor-pointer hover:text-slate-700 dark:text-white dark:hover:text-slate-300'
        />
        <div className='sm:flex hidden flex-col justify-center items-center py-1 px-2'>
          <Image alt='logo' src='https://www.svgrepo.com/show/513695/broccoli.svg' width={30} height={30} />
          <Link className='text-[13px] font-bold text-gradient-to-bl text-green-500' href={'/'}>
            green life
          </Link>
        </div>
        <h2 className='text-green-600 text-2xl font-bold sm:hidden py-4 px-2'>CHÀO MỪNG MỌI NGƯỜI</h2>
      </div>
      {pathname !== '/sign-in' && pathname !== '/sign-up' && <ul className='header_menu'>{menuItem}</ul>}
      {user ? (
        <div className='flex items-center justify-end'>
          <Button onClick={signOut} className='bg-none mr-4' variant={'outline'} size={'sm'}>
            Sign out
          </Button>
          <div className='relative flex items-start justify-center gap-1'>
            <Image
              alt='avatar'
              src={
                user && user!.avatar
                  ? user!.avatar
                  : 'https://www.svgrepo.com/show/384676/account-avatar-profile-user-6.svg'
              }
              width='40'
              height='40'
              className='cursor-pointer rounded-full'
            />
            <div className='flex flex-col items-start relative'>
              <Link
                href={'/dashboard/profile'}
                className='font-medium text-[14px] dark:text-[#b4b4b4] dark:hover:text-[#ebebeb] cursor-pointer'
              >
                {user.username}
              </Link>
              <p className='font-medium text-[12px] dark:text-[#b4b4b4] dark:hover:text-[#ebebeb] cursor-pointer'>
                {user.email}
              </p>
            </div>
          </div>
          <ul className='list-none md:flex px-3 hidden'>
            <li onClick={() => setTheme('light')}>
              <SunOutlined className='cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full p-3' />
            </li>
            <li onClick={() => setTheme('dark')}>
              <MoonOutlined className='cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full p-3' />
            </li>
          </ul>
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
            <li onClick={() => setTheme('light')}>
              <SunOutlined className='cursor-pointer hover:bg-white dark:hover:bg-slate-800 rounded-full p-3' />
            </li>
            <li onClick={() => setTheme('dark')}>
              <MoonOutlined className='cursor-pointer hover:bg-white dark:hover:bg-slate-800 rounded-full p-3' />
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavbarCommon;
