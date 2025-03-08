import React from 'react';

interface CardRowProps {
  children?: React.ReactNode;
}

const CardRow = ({ children }: CardRowProps) => {
  return (
    <div className='relative w-full border border-slate-300 rounded-sm hover:border-green-500 active:shadow-slate-500 active:shadow-sm cursor-pointer flex sm:flex-row flex-col items-center justify-start'>
      <div
        className='w-1/6 h-[10vh] bg-center bg-contain bg-no-repeat'
        style={{
          backgroundImage:
            "url('https://www.freeiconspng.com/thumbs/business-icon-png/corporate-icon-png-autocorrect-for-business-13.png')"
        }}
      ></div>
      {children}
    </div>
  );
};

export default CardRow;
