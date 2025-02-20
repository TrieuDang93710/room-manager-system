'use client';
import { useState } from 'react';
import SelectionComponent from '../Selection';
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';
import { cn } from '@/helpers/utils';
import './index.css';

interface OptionInterface {
  value: string;
  label: string;
}
interface CommonInputProps {
  typeInput: string;
  inputValue?: string;
  error?: string;
  field: string;
  setField: (field: string, value: string) => void;
  // setInputValue: (value: string) => void,
  onblur: () => void;
  label_title?: string;
  labelTileClassName?: string;
  inputClassName?: string;
  iconPassStyle?: string;
  optionList?: (OptionInterface | undefined)[];
  hidden?: boolean;
  isAuth?: boolean;
  iconPass?: boolean;
  passHidden?: boolean;
  setPassHidden?: (value: boolean) => void;
  placeholder?: string;
}

const CommonInput = ({
  inputValue,
  error,
  onblur,
  label_title,
  labelTileClassName,
  inputClassName,
  iconPassStyle,
  optionList,
  typeInput,
  setField,
  field,
  hidden,
  isAuth,
  passHidden,
  iconPass,
  setPassHidden,
  placeholder
}: CommonInputProps) => {
  const [selectValue, setSelectValue] = useState<string>('');

  const handlePageSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectValue = e.target.value;
    setSelectValue(selectValue);
  };

  return (
    <div className={`group_input ${passHidden && 'relative justify-end'}`}>
      <label
        className={cn(
          `${isAuth ? 'sign_in_label_input' : 'label_input'} ${hidden && 'label_require'} `,
          labelTileClassName
        )}
      >
        {label_title}
      </label>
      {optionList ? (
        <SelectionComponent
          className='w-full border-gray-300 border'
          optionList={optionList}
          selectValue={selectValue}
          setSelectValue={handlePageSizeChange}
        />
      ) : (
        <input
          onBlur={onblur}
          className={cn(`${isAuth ? 'sign_in_input_style' : 'input_style'} `, inputClassName)}
          type={passHidden ? 'text' : typeInput}
          value={inputValue}
          onChange={(e) => setField(field, e.target.value)}
          placeholder={placeholder}
          required={true}
        />
      )}
      {iconPass ? (
        passHidden ? (
          <span className={`absolute right-5 ${!error ? 'bottom-4' : 'top-10'}`}>
            <EyeInvisibleOutlined
              onClick={() => setPassHidden!(!passHidden)}
              className={`cursor-pointer ${iconPassStyle}`}
            />
          </span>
        ) : (
          <span className={`absolute right-5 ${!error ? 'bottom-4' : 'top-10'}`}>
            <EyeOutlined onClick={() => setPassHidden!(!passHidden)} className={`cursor-pointer ${iconPassStyle}`} />
          </span>
        )
      ) : null}
      {error && <span className='mt-1 text-[12px] text-red-500 line-clamp-5 pr-2'>{error}</span>}
    </div>
  );
};

export default CommonInput;
