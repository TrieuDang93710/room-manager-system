import React from 'react';
import CommonInput from '@/components/atoms/Input';
import Modal from '@/components/molecules/Modal';
import { handleBlurChecking } from '@/helpers/utils';
import useCombinedState from '@/hooks/useCombinedState';
import { CloseOutlined } from '@ant-design/icons';
import './AddServicePackage.css';

interface AddFieldProps {
  openAddServicePackage: boolean;
  setOpenAddServicePackage: (value: boolean) => void;
  onClick: () => void;
}

const AddField = ({ onClick, setOpenAddServicePackage, openAddServicePackage }: AddFieldProps) => {
  const [state, setField] = useCombinedState({
    name: '',
    address: '',
    price: '',
    createBy: '',
    nameError: '',
    addressError: '',
    priceError: '',
    createByError: ''
  });

  return (
    <Modal
      className='bg-[#29292962] dark:bg-[#f8f8f817] h-screen w-full flex justify-center items-center right-0 animate-in'
      isOpen={openAddServicePackage}
      hidden={false}
      onClose={() => setOpenAddServicePackage(false)}
    >
      <div className='modal_container_add_field'>
        <form>
          <div className='modal_header'>
            <p>Thêm mới</p>
            <CloseOutlined
              onClick={onClick}
              className='cursor-pointer font-bold text-red-500 p-2 rounded-sm hover:bg-[#e3e3e3] dark:text-[#fff]'
            />
          </div>
          <div className='w-full h-[80%] py-1 gap-2 flex flex-col md:flex overflow-y-auto'>
            <CommonInput
              onblur={() => handleBlurChecking('text', 'nameError', state.name, setField)}
              inputValue={state.name}
              typeInput='text'
              setField={setField}
              field='name'
              error={state.nameError}
              placeholder='Nhap ho va ten ...'
              label_title='Tieu de'
            />
            <CommonInput
              onblur={() => handleBlurChecking('text', 'addressError', state.address, setField)}
              inputValue={state.address}
              typeInput='text'
              setField={setField}
              field='address'
              error={state.addressError}
              placeholder='Nhap mo ta ...'
              label_title='Mo ta chi tiet'
            />
            <div className='w-full flex md:flex-row flex-col items-center justify-between'>
              <CommonInput
                onblur={() => handleBlurChecking('text', 'addressError', state.address, setField)}
                inputValue={state.address}
                typeInput='text'
                setField={setField}
                field='address'
                error={state.addressError}
                placeholder='Nhap mo ta ...'
                label_title='Gia'
              />
              <CommonInput
                onblur={() => handleBlurChecking('text', 'addressError', state.address, setField)}
                inputValue={state.address}
                typeInput='text'
                setField={setField}
                field='address'
                error={state.addressError}
                placeholder='Nhap mo ta ...'
                label_title='So luong dang tin'
              />
            </div>
            <CommonInput
              onblur={() => handleBlurChecking('text', 'addressError', state.address, setField)}
              inputValue={state.address}
              typeInput='text'
              setField={setField}
              field='address'
              error={state.addressError}
              placeholder='Nhap mo ta ...'
              label_title='So luong tin noi bac'
            />
          </div>
          <button className='modal_button' type='submit'>
            SAVE
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default AddField;
