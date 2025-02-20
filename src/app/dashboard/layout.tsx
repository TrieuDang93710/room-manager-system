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
import React, { ReactNode, useEffect, useState } from 'react';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [hidden, setHidden] = useState<boolean>(false);
  const [ishiddenMenu, setIshiddenMenu] = useState<boolean>(false);
  const [functions, setFunctions] = useState<Map<string, string>[]>([]);
  const [icons, setIcons] = useState<Map<string, ReactNode>[]>([]);
  const account: string = 'lessor';

  useEffect(() => {
    switch (account) {
      case 'lessor':
        setFunctions(funcOfLessor);
        setIcons(iconOfLessor);
        break;
      case 'admin':
        setFunctions(funcOfAdmin);
        setIcons(iconOfAdmin);
        break;
      case 'tenant':
        setFunctions(funcOfTenant);
        setIcons(iconOfTenant);
        break;
      default:
        break;
    }
  }, [account]);

  return (
    <div className='relative w-full md:flex md:justify-between flex-col md:px-0 px-3'>
      <FunctionListManager
        title='Nguoi cho thue'
        hidden={hidden}
        setHidden={setHidden}
        listFunc={functions}
        account={account}
        listIcon={icons}
        className='md:block hidden'
      />
      <div className='w-full max-h-screen flex flex-col items-center justify-start md:px-3'>
        <ManagerHeader ishiddenMenu={ishiddenMenu} setIshiddenMenu={setIshiddenMenu} account={account} />
        {children}
      </div>
      <Modal
        className='bg-[#10101030] dark:bg-[#73737300] border-none min-h-screen max-w-screen-2xl top-0 right-0'
        hedden={true}
        isOpen={ishiddenMenu}
        onClose={() => setIshiddenMenu(false)}
      >
        <div className='fixed sm:w-[30%] w-[40%] left-0 min-h-screen md:hidden'>
          <FunctionListManager
            title='Nguoi cho thue'
            hidden={hidden}
            setHidden={setHidden}
            listFunc={functions}
            account={account}
            listIcon={icons}
            className='md:hidden block sm:w-[30%] w-[40%]'
          />
        </div>
      </Modal>
    </div>
  );
};
export default DashboardLayout;
