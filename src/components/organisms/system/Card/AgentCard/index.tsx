/* eslint-disable @typescript-eslint/no-explicit-any */
import { HomeOutlined } from '@ant-design/icons';
import CardSquare from '../Square';
import React from 'react';

interface AgentCardComponentProps {
  onClick?: () => void;
  companyItem?: any;
}

export const AgentCardComponent = ({ onClick, companyItem }: AgentCardComponentProps) => {
  return (
    <CardSquare logo={companyItem && companyItem!.logo}>
      <div className='w-full px-2'>
        <p className='text-[13px] text-slate-800 font-normal dark:text-blue-500'>Kinh doanh</p>
        <h3 className='text-[18px] text-black dark:text-blue-800 font-bold py-2 line-clamp-2'>
          {companyItem && companyItem!.title}
        </h3>
        <p className='text-[13px] text-slate-800 font-normal py-1'>
          <HomeOutlined className='font-bold text-black dark:text-blue-800 mr-2' /> 29 Tran Duc Thao
        </p>
        <p className='text-[13px] text-slate-800 font-normal py-1'>
          <strong className='font-bold text-black dark:text-blue-800'>Quy mô : </strong>
          {companyItem && companyItem!.scale}
        </p>
      </div>
      <button
        onClick={onClick}
        className='py-2 px-2 rounded-sm text-blue-800 text-[16px] font-bold bg-blue-100 dark:bg-blue-300 hover:bg-blue-200 hover:text-blue-800 active:shadow-sm active:shadow-gray-600'
      >
        Xem them
      </button>
    </CardSquare>
  );
};
