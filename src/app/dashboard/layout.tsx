'use client';
import Modal from '@/components/molecules/Modal';
import FunctionListManager from '@/components/organisms/FuncManager/func-menu';
import ManagerHeader from '@/components/organisms/FuncManager/manage-header';
import {
  funcOfAdmin,
  funcOfLessor,
  funcOfTenant,
  iconOfAdmin,
  iconOfLessor,
  iconOfTenant
} from '@/config/funcMenuConfig';
import { useAuth } from '@/hooks/useAuth';
import React, { ReactNode, Suspense, useEffect, useState } from 'react';
import { Role } from '@/enum/role.enum';
import Loading from './loading';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [hidden, setHidden] = useState<boolean>(false);
  const [isHiddenMenu, setIsHiddenMenu] = useState<boolean>(false);
  const [functions, setFunctions] = useState<Map<string, string>[]>([]);
  const [icons, setIcons] = useState<Map<string, ReactNode>[]>([]);
  const auth = useAuth();

  const { user } = auth;
  console.log('user: ', user);
  let account: string = Role.MANAGER;

  // account = user && user.role[0]!;
  account = 'admin';
  console.log('account: ', account);

  useEffect(() => {
    switch (account) {
      case Role.MANAGER:
        setFunctions(funcOfLessor);
        setIcons(iconOfLessor);
        break;
      case Role.ADMIN:
        setFunctions(funcOfAdmin);
        setIcons(iconOfAdmin);
        break;
      case Role.APPLICANT:
        setFunctions(funcOfTenant);
        setIcons(iconOfTenant);
        break;
      default:
        break;
    }
  }, [account]);

  return (
    <div className='relative w-full flex flex-row items-start justify-between gap-2 md:px-0 px-3'>
      <FunctionListManager
        title={`${user && account.toLocaleUpperCase()}`}
        hidden={hidden}
        setHidden={setHidden}
        listFunc={functions}
        account={account}
        listIcon={icons}
        className='md:block hidden'
      />
      <div className='w-full max-h-screen flex flex-col items-center justify-start md:px-3'>
        <ManagerHeader isHiddenMenu={isHiddenMenu} setIsHiddenMenu={setIsHiddenMenu} account={account} />
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </div>
      <Modal
        className='bg-[#10101030] dark:bg-[#73737300] border-none right-0'
        hidden={true}
        isOpen={isHiddenMenu}
        onClose={() => setIsHiddenMenu(false)}
      >
        <div className='relative w-full left-0 md:hidden'>
          <FunctionListManager
            title='Nguoi cho thue'
            hidden={hidden}
            setHidden={setHidden}
            listFunc={functions}
            account={account}
            listIcon={icons}
            className={`md:hidden block ${hidden ? 'w-1/6 z-10' : 'sm:w-1/2 w-3/4 z-10'}`}
          />
        </div>
      </Modal>
    </div>
  );
};
export default DashboardLayout;
