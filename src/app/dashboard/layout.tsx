'use client';
import React, { Suspense, useEffect, useState } from 'react';
import Modal from '@/components/molecules/Modal';
import { funcOfAdmin, funcOfApplicant, funcOfManager } from '@/config/funcMenuConfig';
import { Role } from '@/enum/role.enum';
import Loading from './loading';
import listFuncInterface from '@/interfaces/listFunction';
import FunctionListManager from '@/components/organisms/manager/SideBar';
import ManagerHeader from '@/components/organisms/manager/ManagerHeader';
import { useAuth } from '@/hooks/auth/useAuth';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [hidden, setHidden] = useState<boolean>(false);
  const [isHiddenMenu, setIsHiddenMenu] = useState<boolean>(false);
  const [selectedMenu, setSelectedMenu] = useState<number>(0);
  const [functions, setFunctions] = useState<listFuncInterface[]>([]);
  const { user } = useAuth();
  console.log('user: ', user)
  let account: string = Role.MANAGER;

  account = user && user!.role[0];
  // account = 'manager';
  console.log('account: ', account);

  useEffect(() => {
    switch (account) {
      case Role.MANAGER:
        setFunctions(funcOfManager);
        break;
      case Role.ADMIN:
        setFunctions(funcOfAdmin);
        break;
      case Role.APPLICANT:
        setFunctions(funcOfApplicant);
        break;
      default:
        break;
    }
  }, [account]);

  return (
    <div className='relative w-full dark:bg-slate-900 flex flex-row items-start justify-between gap-2 md:px-0 px-3'>
      <FunctionListManager
        title={`${user && account.toLocaleUpperCase()}`}
        hidden={hidden}
        setHidden={setHidden}
        listFunc={functions}
        account={account}
        selectedMenu={selectedMenu}
        setSelectedMenu={setSelectedMenu}
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
            selectedMenu={selectedMenu} //
            setSelectedMenu={setSelectedMenu}
            className={`md:hidden block ${hidden ? 'w-1/6 z-10' : 'sm:w-1/2 w-3/4 z-10'}`}
          />
        </div>
      </Modal>
    </div>
  );
};
export default DashboardLayout;
