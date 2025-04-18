import React from 'react';

interface AddContentProps {
  onSave: (e: { preventDefault: () => void }) => void;
  children: React.ReactNode;
}

const AddContent = ({ onSave, children }: AddContentProps) => {
  return (
    <div className='w-[60%] flex flex-col items-start justify-start gap-4 my-2 px-8'>
      <div className='w-full flex flex-col items-start justify-start gap-2'>{children}</div>
      <button
        onClick={onSave}
        className='w-full bg-blue-600 dark:bg-blue-500 font-bold text-[13px] py-2 px-4 rounded-sm text-[#fff] hover:bg-blue-300 dark:hover:bg-blue-300 dark:hover:text-white dark:text-white'
      >
        Add
      </button>
    </div>
  );
};

export default AddContent;
