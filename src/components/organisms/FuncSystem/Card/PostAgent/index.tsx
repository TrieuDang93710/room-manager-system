import { HomeOutlined } from '@ant-design/icons';
import CardSquare from '../Square';
import React from 'react';

interface PostingAgentComponentProps {
  onClick?: () => void;
}

export const PostingAgentComponent = ({ onClick }: PostingAgentComponentProps) => {
  return (
    <CardSquare>
      <div className='w-full px-2'>
        <p className='text-[13px] text-slate-800 font-normal'>Kinh doanh</p>
        <h3 className='text-[18px] text-black font-bold py-2 line-clamp-2'>Tap hoa co Loan</h3>
        <p className='text-[13px] text-slate-800 font-normal py-1'>
          <HomeOutlined className='font-bold text-black mr-2' /> 29 Tran Duc Thao
        </p>
        <p className='text-[13px] text-slate-800 font-normal py-1'>
          <strong className='font-bold text-black'>So bai dang : </strong>5
        </p>
      </div>
      <button
        onClick={onClick}
        className='w-1/2 py-2 rounded-md text-green-500 text-[16px] font-bold hover:bg-green-200 hover:text-green-800 active:shadow-sm active:shadow-gray-600'
      >
        Xem them
      </button>
    </CardSquare>
  );
};
