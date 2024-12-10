'use client'
import { Button } from '@/components/ui/button';
import { MenuUnfoldOutlined, MoonOutlined, SunOutlined } from '@ant-design/icons';
import * as React from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface NavbarCommonProps {
  isOpen?: boolean;
  setIsOpen: (value: boolean) => void;
}

const NavbarCommon = ({ isOpen, setIsOpen }: NavbarCommonProps) => {
  const router = useRouter();
  const { setTheme } = useTheme();

  const handleOpenModal = () => {
    setIsOpen(!isOpen);
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
        <h2 className='text-green-600 text-2xl font-bold sm:hidden py-4 px-2'>Welcome to website</h2>
      </div>
      <ul className='w-1/3 list-none md:flex gap-2 hidden'>
        <li className='navbar_menu text-[14px] py-2 hover:cursor-pointer dark:hover:bg-slate-700'>
          <Link href={'/'}>Home</Link>
        </li>
        <li className='navbar_menu text-[14px] py-2 hover:cursor-pointer dark:hover:bg-slate-700'>
          <Link href={'/system/rent-of-room'}>Room of rent</Link>
        </li>
        <li className='navbar_menu text-[14px] py-2 hover:cursor-pointer dark:hover:bg-slate-700'>
          <Link href={'/system/lessor-detail-page'}>Lessor</Link>
        </li>
        <li className='navbar_menu text-[14px] py-2 hover:cursor-pointer dark:hover:bg-slate-700'>
          <Link href={'/system/search-by-google-map'}>Search</Link>
        </li>
        <li className='navbar_menu text-[14px] py-2 hover:cursor-pointer dark:hover:bg-slate-700'>
          <Link href={'/'}>Contact</Link>
        </li>
      </ul>
      <div className='gap-8 sm:flex hidden'>
        <div className='flex gap-3 px-2'>
          <Button onClick={() => router.push('/sign-in')} className='bg-none' variant={'outline'} size={'sm'}>
            Sign in
          </Button>
          <Button onClick={() => router.push('/sign-up')} className='bg-none' variant={'outline'} size={'sm'}>
            Sign up
          </Button>
          <Button onClick={() => router.push('/sign-in')} className='bg-none' variant={'outline'} size={'sm'}>
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
    </nav>
  );
};

export default NavbarCommon;
