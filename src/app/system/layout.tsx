'use client';
import Modal from '@/components/molecules/Modal';
import FooterCommon from '@/components/organisms/FuncSystem/Footer/footer';
import NavbarCommon from '@/components/organisms/FuncSystem/Header/navbar';
import { Button } from '@/components/ui/button';
import { MenuFoldOutlined, MoonOutlined, SunOutlined } from '@ant-design/icons';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface SystemLayoutProps {
  children: React.ReactNode;
}

const SystemLayout = ({ children }: SystemLayoutProps) => {
  const router = useRouter();
  const { setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const handleCloseModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className='w-full z-10'>
      <NavbarCommon isOpen={isOpen} setIsOpen={setIsOpen} />
      {children}
      <FooterCommon />
      <Modal
        className='bg-[#10101030] dark:bg-[#73737300] border-none min-h-screen max-w-screen-2xl top-0 right-0 p-0'
        hidden={false}
        isOpen={isOpen}
        onClose={handleCloseModal}
      >
        <div className='fixed z-30 animate-fade w-full sm:w-1/3 ssm:w-3/4 flex flex-col items-start justify-start gap-4 bg-slate-50 dark:bg-slate-900 min-h-screen px-3 sm:px-6 py-6'>
          <MenuFoldOutlined
            onClick={handleCloseModal}
            className='absolute right-3 top-3 font-bold text-xl hover:cursor-pointer hover:text-slate-700 dark:text-white dark:hover:text-slate-300'
          />
          <div className='animation_fade w-full flex flex-col justify-center items-center py-1 px-2'>
            <Image
              alt='logo'
              src='https://www.svgrepo.com/show/513695/broccoli.svg'
              width={80}
              height={80}
              className=''
            />
            <span className='text-[20px] font-bold text-gradient-to-bl text-green-500 pb-3'>green life</span>
          </div>

          <ul className='w-full list-none flex flex-col gap-2'>
            <li className='navbar_menu text-[14px] py-2 hover:cursor-pointer dark:hover:bg-slate-700'>
              <Link href='/'>Trang Chủ</Link>
            </li>
            <li className='navbar_menu text-[14px] py-2 hover:cursor-pointer dark:hover:bg-slate-700'>
              <Link href='/system/post-filter'>Tìm kiếm</Link>
            </li>
            <li className='navbar_menu text-[14px] py-2 hover:cursor-pointer dark:hover:bg-slate-700'>
              <Link href='/system/post-map'>Tìm kiếm trên bản đồ</Link>
            </li>
            <li className='navbar_menu text-[14px] py-2 hover:cursor-pointer dark:hover:bg-slate-700'>
              <Link href='/system/business'>Doanh nghiệp</Link>
            </li>
            <li className='navbar_menu text-[14px] py-2 hover:cursor-pointer dark:hover:bg-slate-700'>
              <Link href='/system/applicant'>Ứng viên</Link>
            </li>
            <li className='navbar_menu text-[14px] py-2 hover:cursor-pointer dark:hover:bg-slate-700'>
              <Link href='/system/news'>Tin tức</Link>
            </li>
          </ul>

          <ul className='list-none flex'>
            <li onClick={() => setTheme('system')}>
              <SunOutlined className='cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full p-3' />
            </li>
            <li onClick={() => setTheme('dark')}>
              <MoonOutlined className='cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full p-3' />
            </li>
          </ul>

          <div className='flex flex-col gap-4 pt-5 justify-center'>
            <Button onClick={() => router.push('/')} className='bg-none' variant={'outline'} size={'sm'}>
              Sign in
            </Button>
            <Button onClick={() => router.push('/')} className='bg-none' variant={'outline'} size={'sm'}>
              Sign up
            </Button>
            <Button onClick={() => router.push('/')} className='bg-none' variant={'outline'} size={'sm'}>
              Post
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default SystemLayout;
