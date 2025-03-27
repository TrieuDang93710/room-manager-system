import React from 'react';

interface AddContentProps {
  onSave: (e: { preventDefault: () => void }) => void;
  children: React.ReactNode;
}

const AddContent = ({ onSave, children }: AddContentProps) => {
  return (
    <div className='w-[60%] flex flex-col items-start justify-start gap-4 my-2 px-8'>
      <div className='w-2/3 flex flex-col items-start justify-start gap-2'>{children}</div>
      <button
        onClick={onSave}
        className='w-2/3 bg-blue-600 dark:bg-[#0000] font-bold text-[13px] py-2 px-4 rounded-md text-[#fff] hover:bg-blue-500 dark:border-[1px] dark:border-[#fff] dark:hover:bg-blue-200 dark:hover:text-[#000] dark:text-white'
      >
        Add
      </button>
    </div>
  );
};

export default AddContent;
