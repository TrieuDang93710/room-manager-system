import React from 'react';

interface CardRowProps {
  children?: React.ReactNode;
  logo?: string;
}

const CardRow = ({ children, logo }: CardRowProps) => {
  return (
    <div className='relative w-full border border-slate-300 dark:border-blue-600 dark:bg-blue-100 dark:hover:bg-white rounded-sm hover:border-green-500 hover:cursor-default flex sm:flex-row flex-col items-center justify-start'>
      <div
        className='w-1/6 h-[10vh] bg-center bg-contain bg-no-repeat'
        style={{
          backgroundImage: `url(${logo})`
        }}
      ></div>
      {children}
    </div>
  );
};

export default CardRow;
