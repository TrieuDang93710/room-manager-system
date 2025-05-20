'use client';
import RoomProps from '@/interfaces/room/room';
import React from 'react';

interface CardSquareProps {
  item?: RoomProps;
  className?: string;
  children?: React.ReactNode;
  logo?: string;
}

const CardSquare = ({ children, logo }: CardSquareProps) => {
  return (
    <div className='w-full border-[1px] rounded-sm hover:translate-x-1 cursor-pointer bg-white dark:bg-slate-300 dark:hover:bg-slate-50 dark:border-transparent border-slate-300 hover:border-green-500 dark:hover:border-blue-500 flex flex-col items-center justify-center'>
      <div className='w-full h-full'>
        <div className='left-4 w-full flex flex-col justify-start items-center px-2 py-4 gap-2'>
          <div
            className='w-1/2 h-[10vh] bg-center bg-contain bg-no-repeat'
            style={{
              backgroundImage: `url(${logo})`
            }}
          ></div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default CardSquare;
