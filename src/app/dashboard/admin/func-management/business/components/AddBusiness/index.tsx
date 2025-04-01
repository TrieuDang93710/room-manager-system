/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import CommonInput from '@/components/atoms/Input';
import Modal from '@/components/molecules/Modal';
import { handleBlurChecking } from '@/helpers/utils';
import useCombinedState from '@/hooks/useCombinedState';
import { CloseOutlined } from '@ant-design/icons';
import AddComponent from '@/components/molecules/AddComp';
import AddContent from '@/components/AddContent';
import './AddBusiness.css';

interface AddBusinessProps {
  openAddBusiness: boolean;
  setOpenAddBusiness: (value: boolean) => void;
  onClick: () => void;
}

const AddBusiness = ({ onClick, setOpenAddBusiness, openAddBusiness }: AddBusinessProps) => {
  const [openSections, setOpenSections] = useState<any>({
    image: false,
    video: false,
    contact: false
  });

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

  const toggleSection = (section: string) => {
    setOpenSections((prev: { [x: string]: any; }) => ({ ...prev, [section]: !prev[section] }));
  };

  const renderAddContent = (section: string) => {
    switch (section) {
      case 'image':
      case 'video':
        return (
          <AddContent onSave={(e) => onSave(e, section)}>
            {Array.from({ length: 1 }).map((_, index) => (
              <input
                key={index}
                className='w-full border border-slate-500 focus:border focus:border-green-500 rounded-sm px-2 py-1'
                type='text'
                placeholder={`Them ${section} ...`}
              />
            ))}
          </AddContent>
        );
      case 'contact':
        return (
          <AddContent onSave={(e) => onSave(e, section)}>
            {Array.from({ length: 4 }).map((_, index) => (
              <input
                key={index}
                className='w-full border border-slate-500 focus:border focus:border-green-500 rounded-sm px-2 py-1'
                type='text'
                placeholder={`Them ${section} ...`}
              />
            ))}
          </AddContent>
        );
      default:
        return;
    }
  };

  const renderAddComponent = (section: string) => {
    switch (section) {
      case 'image':
      case 'video':
        return (
          <AddComponent
            title={section}
            action={true}
            onClick={() => toggleSection(section)}
            isButton={openSections[section]}
          >
            {Array.from({ length: 3 }).map((_, index) => (
              <h3 key={index} className='text-black text-[16px] font-normal'>
                Placeholder
              </h3>
            ))}
          </AddComponent>
        );
      case 'contact':
        return (
          <AddComponent
            title='Kinh nghiem'
            action={true}
            onClick={() => toggleSection(section)}
            isButton={openSections[section]}
          >
            <div className='w-full flex flex-col items-start justify-start gap-4'>
              {Array.from({ length: 1 }).map((_, index) => (
                <div
                  key={index + 1}
                  className='w-[50%] flex flex-col items-start justify-start gap-4 p-2 border border-green-500'
                >
                  <div className='w-full flex flex-row items-start justify-start gap-4'>
                    <h3 className='text-black text-[16px] font-bold line-clamp-2'>email :</h3>
                    <p className='text-black text-[16px] font-normal'>dangbinhtrieu123@gmail.com</p>
                  </div>
                </div>
              ))}
            </div>
          </AddComponent>
        );
      default:
        return;
    }
  };

  const onSave = (e: { preventDefault: () => void }, section: string) => {
    e.preventDefault();
    setOpenSections((prev: any) => ({ ...prev, [section]: false }));
  };

  return (
    <Modal
      className='bg-[#29292962] dark:bg-[#f8f8f817] h-screen w-full flex justify-center items-center right-0 animate-in'
      isOpen={openAddBusiness}
      hidden={false}
      onClose={() => setOpenAddBusiness(false)}
    >
      <div className='modal_container_add_business'>
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
              label_title='Ten linh vuc'
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
            {['image', 'video', 'contact'].map((section) => (
              <React.Fragment key={section}>
                {renderAddComponent(section)}
                {openSections[section] && renderAddContent(section)}
              </React.Fragment>
            ))}
          </div>
          <button className='modal_button' type='submit'>
            SAVE
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default AddBusiness;
