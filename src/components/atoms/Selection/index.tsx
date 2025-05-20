/* eslint-disable @typescript-eslint/no-explicit-any */
import { cn } from '@/helpers/utils';
import React from 'react';

interface SelectionComponentProps {
  className?: string;
  optionList?: any[];
  value?: string;
  setValue: (value: any) => void;
}
const SelectionComponent = ({ className, optionList, value, setValue }: SelectionComponentProps) => {
  return (
    <div className={cn('selection_box', className)}>
      <select value={value} onChange={(e) => setValue(e.target.value)}>
        <option>Chọn</option>
        {optionList?.map((item, index) =>
          item ? (
            <option key={index} value={item.value}>
              {item.label}
            </option>
          ) : null
        )}
      </select>
    </div>
  );
};

export default SelectionComponent;
