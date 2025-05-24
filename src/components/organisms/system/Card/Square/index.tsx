'use client';
import RoomProps from '@/interfaces/room/room';
import React from 'react';

interface CardSquareProps {
  item?: RoomProps;
  className?: string;
  children?: React.ReactNode;
  logo?: string;
  onHover?: () => void
}

const CardSquare = ({ children, logo, onHover }: CardSquareProps) => {
  return (
    <div onMouseEnter={onHover} className='w-full border-[1px] rounded-md hover:translate-x-1 cursor-default bg-white dark:bg-slate-300 dark:hover:bg-slate-50 dark:border-transparent border-slate-300 hover:border-blue-600 dark:hover:border-blue-500 flex flex-col items-center justify-center py-4 px-2 gap-2'>
      <div
        className='w-1/2 h-[10vh] bg-center bg-contain bg-no-repeat'
        style={{
          backgroundImage: `url(${logo})`
        }}
      ></div>
      {children}
    </div>
  );
};

export default CardSquare;
