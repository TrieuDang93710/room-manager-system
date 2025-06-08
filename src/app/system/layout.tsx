/* eslint-disable @next/next/no-img-element */
'use client';
import React, { Suspense, useState } from 'react';
import Image from 'next/image';
import FooterCommon from '@/components/organisms/system/Footer';
import NavbarCommon from '@/components/organisms/system/SystemHeader';
import ChatBoxAI from './components/ChatBoxAI';
import ModalResponsive from './components/Modal';
import Loading from './loading';
import PostFilter from './components/PostFilter';
import { job_menu, profile_menu } from '@/faker/menu';
import MenuBoxComponent from '@/components/organisms/system/SystemHeader/components/MenuBox';

import chat_bot from '@/public/images/chat_ai.svg';
import comment_icon from '@/public/images/comment.png';
import { useAuth } from '@/hooks/auth/useAuth';
import { Role } from '@/enum/role.enum';
import CommentBox from './components/CommentBox';

interface SystemLayoutProps {
  children: React.ReactNode;
}

const SystemLayout = ({ children }: SystemLayoutProps) => {
  const auth = useAuth();
  const { user } = auth;
  const [isOpen, setIsOpen] = useState(false);
  const [menuBox, setMenuBox] = useState(false);
  const [openChatAI, setOpenChatAI] = useState<boolean>(false);
  const [openCommentBox, setOpenCommentBox] = useState<boolean>(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState<string>();
  const [isSelectedMenuItem, setIsSelectedMenuItem] = useState<boolean>(false);
  const [animateIcon, setAnimateIcon] = useState<boolean>(false);

  const menuItem = selectedMenuItem?.toLocaleLowerCase().replaceAll(' ', '_').toString();

  const openChatHandler = () => {
    setOpenChatAI(!openChatAI);
  };

  const openCommentBoxHandler = () => {
    setOpenCommentBox(!openCommentBox);
  };

  let menuContent;

  switch (menuItem) {
    case 'việc_làm':
      menuContent = job_menu;
      break;
    case 'tạo_hồ_sơ':
      menuContent = profile_menu;
    case 'quản_lý_đăng_bài':
      menuContent = profile_menu;
      break;
    default:
      break;
  }

  setTimeout(() => {
    setAnimateIcon(!animateIcon);
  }, 1000);

  return (
    <div className='relative w-full font-[family-name:var(--font-geist-sans)] flex flex-col items-center justify-start z-10'>
      <NavbarCommon
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        menuBox={menuBox}
        setMenuBox={setMenuBox}
        selectedMenuItem={selectedMenuItem}
        setSelectedMenuItem={setSelectedMenuItem}
        isSelectedMenuItem={isSelectedMenuItem}
        setIsSelectedMenuItem={setIsSelectedMenuItem}
      />
      <MenuBoxComponent
        menuBox={menuBox}
        setMenuBox={setMenuBox}
        menus={menuContent}
        isSelectedMenuItem={isSelectedMenuItem}
        setIsSelectedMenuItem={setIsSelectedMenuItem}
      />
      <PostFilter />
      {user && user.role && user.role[0] !== Role.ADMIN && (
        <>
          <div
            className={`right-4 bottom-10 fixed z-20 ${animateIcon ? 'scale-150 duration-700 opacity-100' : 'scale-100 duration-700 opacity-100'}`}
            onClick={openChatHandler}
          >
            <Image
              alt='ai_logo'
              src={chat_bot}
              width='40'
              height='40'
              className='cursor-pointer active:shadow-sm active:shadow-slate-400'
            />
          </div>
          <div className='right-4 bottom-24 fixed z-20' onClick={openCommentBoxHandler}>
            <img
              src={comment_icon.src}
              alt='ai_logo'
              width='40'
              height='40'
              className='cursor-pointer active:shadow-sm active:shadow-slate-400'
            />
          </div>
        </>
      )}
      {openCommentBox && <CommentBox onClose={() => setOpenCommentBox(!openCommentBox)} />}
      {openChatAI && <ChatBoxAI openChatAI={openChatAI} />}
      <Suspense fallback={<Loading />}>{children}</Suspense>
      <FooterCommon />
      <ModalResponsive isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default SystemLayout;
