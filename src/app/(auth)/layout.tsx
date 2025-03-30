'use client';
import NavbarCommon from '@/components/organisms/system/SystemHeader';
import flex from '@/config/flex.config';
import React, { useState } from 'react';

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className='w-full dark:bg-[#151515]'>
      <NavbarCommon isOpen={isOpen} setIsOpen={setIsOpen} />
      <main
        className={
          'w-full min-h-screen md:px-10 px-3 pt-20 font-[family-name:var(--font-geist-sans)] z-10 ' +
          flex({ direction: 'col', alignItems: 'center', justifyContent: 'start' })
        }
        style={{
          backgroundImage: `url('https://png.pngtree.com/background/20230403/original/pngtree-living-room-empty-room-interior-background-picture-image_2264677.jpg')`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {children}
      </main>
      {/* <FooterCommon /> */}
    </div>
  );
};
export default AuthLayout;
