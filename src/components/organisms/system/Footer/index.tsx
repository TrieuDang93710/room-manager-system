import flex from '@/config/flex.config';
import { FacebookOutlined, GoogleOutlined, InstagramOutlined, TwitterOutlined } from '@ant-design/icons';
import Image from 'next/image';
import job_logo from '@/public/svgs/job.svg';

const FooterCommon = () => {
  return (
    <div className='w-full flex flex-col md:flex-row justify-between items-center shadow-md bg-slate-50 dark:bg-blue-900 dark:shadow-none dark:shadow-slate-300 border p-2'>
      <div className='animation_fade md:w-1/3 w-full flex flex-col justify-center items-center py-1 px-2'>
        <Image alt='logo' src={job_logo} width={80} height={80} className='' />
        <span className='text-[20px] font-bold text-gradient-to-bl text-blue-600 pb-3'>Jobs 24/7</span>
      </div>
      <div className={'w-full gap-3 md:flex grid grid-cols-2'}>
        <ul className={'w-1/5 list-none ' + flex({ alignItems: 'start', direction: 'col' })}>
          <li className='navbar_menu text-[14px] py-2 hover:cursor-pointer dark:hover:bg-slate-700'>
            <a href='/'>Home</a>
          </li>
          <li className='navbar_menu text-[14px] py-2 hover:cursor-pointer dark:hover:bg-slate-700'>
            <a href='/system/rent-of-room'>Room of rent</a>
          </li>
          <li className='navbar_menu text-[14px] py-2 hover:cursor-pointer dark:hover:bg-slate-700'>
            <a href='#'>Lessor</a>
          </li>
          <li className='navbar_menu text-[14px] py-2 hover:cursor-pointer dark:hover:bg-slate-700'>
            <a href='#'>Search</a>
          </li>
          <li className='navbar_menu text-[14px] py-2 hover:cursor-pointer dark:hover:bg-slate-700'>
            <a href='#'>Contact</a>
          </li>
        </ul>
        <ul className={'w-1/5 list-none ' + flex({ alignItems: 'start', direction: 'col' })}>
          <li className='navbar_menu text-[14px] py-2 hover:cursor-pointer dark:hover:bg-slate-700'>
            <a href='/'>Home</a>
          </li>
          <li className='navbar_menu text-[14px] py-2 hover:cursor-pointer dark:hover:bg-slate-700'>
            <a href='/system/rent-of-room'>Room of rent</a>
          </li>
          <li className='navbar_menu text-[14px] py-2 hover:cursor-pointer dark:hover:bg-slate-700'>
            <a href='#'>Lessor</a>
          </li>
          <li className='navbar_menu text-[14px] py-2 hover:cursor-pointer dark:hover:bg-slate-700'>
            <a href='#'>Search</a>
          </li>
          <li className='navbar_menu text-[14px] py-2 hover:cursor-pointer dark:hover:bg-slate-700'>
            <a href='#'>Contact</a>
          </li>
        </ul>
        <ul className={'w-1/5 list-none ' + flex({ alignItems: 'start', direction: 'col' })}>
          <li className='navbar_menu text-[14px] py-2 hover:cursor-pointer dark:hover:bg-slate-700'>
            <a href='/'>Home</a>
          </li>
          <li className='navbar_menu text-[14px] py-2 hover:cursor-pointer dark:hover:bg-slate-700'>
            <a href='/system/rent-of-room'>Room of rent</a>
          </li>
        </ul>
        <ul
          className={
            'w-1/5 list-none gap-4 ' + flex({ alignItems: 'center', direction: 'row', justifyContent: 'start' })
          }
        >
          <li className='navbar_menu text-[14px] py-2 hover:cursor-pointer dark:hover:bg-slate-700'>
            <a href='/'>
              <FacebookOutlined className='font-bold text-2xl text-blue-600' />
            </a>
          </li>
          <li className='navbar_menu text-[14px] py-2 hover:cursor-pointer dark:hover:bg-slate-700'>
            <a href='/'>
              <GoogleOutlined className='font-bold text-2xl text-red-600' />
            </a>
          </li>
          <li className='navbar_menu text-[14px] py-2 hover:cursor-pointer dark:hover:bg-slate-700'>
            <a href='/'>
              <InstagramOutlined className='font-bold text-2xl text-blue-600' />
            </a>
          </li>
          <li className='navbar_menu text-[14px] py-2 hover:cursor-pointer dark:hover:bg-slate-700'>
            <a href='/'>
              <TwitterOutlined className='font-bold text-2xl text-blue-600' />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FooterCommon;
