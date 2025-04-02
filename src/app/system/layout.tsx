'use client';
import { useState } from 'react';
import Image from 'next/image';
import FooterCommon from '@/components/organisms/system/Footer';
import NavbarCommon from '@/components/organisms/system/SystemHeader';
import ChatBoxAI from './components/ChatBoxAI';
import ModalResponsive from './components/Modal';

interface SystemLayoutProps {
  children: React.ReactNode;
}

const SystemLayout = ({ children }: SystemLayoutProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openChatAI, setOpenChatAI] = useState<boolean>(false);

  const openChatHandler = () => {
    setOpenChatAI(!openChatAI);
  };

  return (
    <div className='w-full z-10'>
      <NavbarCommon isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className='right-4 bottom-10 fixed z-20' onClick={openChatHandler}>
        <Image
          alt='ai_logo'
          src={'https://www.svgrepo.com/show/190330/chat.svg'}
          width='60'
          height='60'
          className='cursor-pointer active:shadow-sm active:shadow-slate-400'
        />
      </div>
      {openChatAI && <ChatBoxAI />}
      {children}
      <FooterCommon />
      <ModalResponsive isOpen={isOpen} setIsOpen={setIsOpen}/>
    </div>
  );
};

export default SystemLayout;
