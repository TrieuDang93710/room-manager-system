import { cn } from '@/helpers/utils';
import React from 'react';

interface OptionInterface {
  value: string;
  label: string;
}

interface SelectionComponentProps {
  className?: string;
  optionList?: (OptionInterface | undefined)[];
  selectValue?: string;
  setSelectValue: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
const SelectionComponent = ({ className, optionList, selectValue, setSelectValue }: SelectionComponentProps) => {
  return (
    <div className={cn('selection_box', className)}>
      <select value={selectValue} onChange={setSelectValue}>
        {optionList?.map((option, index) =>
          option ? (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ) : null
        )}
      </select>
    </div>
  );
};

export default SelectionComponent;
