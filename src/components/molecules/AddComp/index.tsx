import React from 'react';
import { PlusOutlined } from '@ant-design/icons';

interface AddComponentProps {
  children: React.ReactNode;
  title?: string;
  action?: boolean;
  isButton?: boolean;
  onClick?: (e: { preventDefault: () => void }) => void;
}

const AddComponent = ({ title, onClick, action, isButton, children }: AddComponentProps) => {
  return (
    <div className='w-full flex flex-col items-start justify-start gap-2 px-2'>
      <h3 className='text-[#334155] text-[14px] font-normal'>
        <strong>{title} : </strong>
      </h3>
      <div className='w-full flex items-center justify-start gap-3 px-4'>
        {children}
        {action && !isButton && (
          <p
            onClick={onClick}
            className='bg-blue-100 hover:bg-blue-300 text-blue-600 hover:text-blue-500 text-[10px] active:shadow-sm active:shadow-slate-400 font-medium rounded-md px-4 py-2'
          >
            <PlusOutlined />
          </p>
        )}
      </div>
    </div>
  );
};

export default AddComponent;
