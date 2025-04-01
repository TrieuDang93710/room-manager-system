/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import Image from 'next/image';
import CommonInput from '@/components/atoms/Input';
import Modal from '@/components/molecules/Modal';
import useCombinedState from '@/hooks/useCombinedState';
import { CloseOutlined, UploadOutlined } from '@ant-design/icons';
import { handleBlurChecking } from '@/helpers/utils';
import './AddResume.css';
import AddComponent from '@/components/molecules/AddComp';
import AddContent from '@/components/AddContent';

interface AddResumeProps {
  addResume: boolean;
  setAddResume: (value: boolean) => void;
}

const AddResume = ({ addResume, setAddResume }: AddResumeProps) => {
  const [openSections, setOpenSections] = useState<any>({
    expertise: false,
    hobby: false,
    experience: false,
    certificate: false,
    award: false,
    language: false,
    skill: false
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
      case 'expertise':
      case 'hobby':
      case 'language':
      case 'skill':
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
      case 'experience':
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
      case 'certificate':
        return (
          <AddContent onSave={(e) => onSave(e, section)}>
            <div className='w-full flex flex-row items-center justify-between'>
              <input
                className='w-2/3 border border-slate-500 focus:border focus:border-green-500 rounded-sm px-2 py-1'
                type='text'
                placeholder={`Them ${section} ...`}
              />
              <input
                className='w-[30%] border border-slate-500 focus:border focus:border-green-500 rounded-sm px-2 py-1'
                type='text'
                placeholder='Thoi gian ...'
              />
            </div>
          </AddContent>
        );
      case 'award':
        return (
          <AddContent onSave={(e) => onSave(e, section)}>
            <div className='w-full flex flex-row items-center justify-between'>
              <input
                className='w-2/3 border border-slate-500 focus:border focus:border-green-500 rounded-sm px-2 py-1'
                type='text'
                placeholder={`Them ${section} ...`}
              />
              <input
                className='w-[30%] border border-slate-500 focus:border focus:border-green-500 rounded-sm px-2 py-1'
                type='text'
                placeholder='Thoi gian ...'
              />
            </div>
          </AddContent>
        );
      default:
        return;
    }
  };

  const renderAddComponent = (section: string) => {
    switch (section) {
      case 'expertise':
      case 'hobby':
      case 'language':
      case 'skill':
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
      case 'experience':
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
                  className='w-2/3 flex flex-col items-start justify-start gap-4 p-2 border border-green-500'
                >
                  <div className='w-full flex flex-row items-start justify-between'>
                    <div className='w-1/3 flex flex-col items-start justify-center gap-2'>
                      <h3 className='text-black text-[20px] font-bold line-clamp-2'>Nhan vien sale</h3>
                      <p className='text-black text-[14px] font-normal line-clamp-1'>Cong ty ABC</p>
                    </div>
                    <p className='text-black text-[16px] font-medium'>2018 - 2020</p>
                  </div>
                  <ul className='list-disc flex flex-col items-start justify-start gap-2 px-8'>
                    {Array.from({ length: 4 }).map((_, index) => (
                      <li key={index + 1} className='text-black text-[16px] font-normal line-clamp-2'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </AddComponent>
        );
      case 'certificate':
        return (
          <AddComponent
            title='Chung chi'
            action={true}
            onClick={() => toggleSection(section)}
            isButton={openSections[section]}
          >
            <div className='w-full flex flex-col items-start justify-start gap-4'>
              {Array.from({ length: 2 }).map((_, index) => (
                <div key={index} className='w-1/3 flex flex-row items-center justify-between'>
                  <h3 className='text-black text-[20px] font-bold line-clamp-2'>Nhan vien sale</h3>
                  <p className='text-black text-[16px] font-medium'>2018 - 2020</p>
                </div>
              ))}
            </div>
          </AddComponent>
        );
      case 'award':
        return (
          <AddComponent
            title='Giai thuong'
            action={true}
            onClick={() => toggleSection(section)}
            isButton={openSections[section]}
          >
            <div className='w-full flex flex-col items-start justify-start gap-4'>
              {Array.from({ length: 2 }).map((_, index) => (
                <div key={index} className='w-1/3 flex flex-row items-center justify-between'>
                  <h3 className='text-black text-[20px] font-bold line-clamp-2'>Nhan vien sale</h3>
                  <p className='text-black text-[16px] font-medium'>2018 - 2020</p>
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
      isOpen={addResume}
      hidden={false}
      onClose={() => setAddResume(false)}
    >
      <div className='modal_container'>
        <form>
          <div className='modal_header'>
            <p>Thêm mới</p>
            <CloseOutlined
              onClick={() => setAddResume(!addResume)}
              className='cursor-pointer font-bold text-red-500 p-2 rounded-sm hover:bg-[#e3e3e3] dark:text-[#fff]'
            />
          </div>
          <div className='w-full h-[80%] py-1 gap-2 flex flex-col md:flex overflow-y-auto'>
            <div className='w-full flex items-center justify-center p-4 gap-2'>
              <Image
                alt='avatar'
                src={'https://www.svgrepo.com/show/384676/account-avatar-profile-user-6.svg'}
                width='80'
                height='80'
                className='cursor-pointer'
              />
              <div className='flex flex-col items-center cursor-pointer'>
                <UploadOutlined className='hover:bg-blue-50 active:shadow-sm active:shadow-slate-400 p-2 rounded-full' />
                <p className='text-black text-[16px] font-medium'> Cap nhat</p>
              </div>
            </div>
            <div className='flex flex-row items-center justify-center cursor-pointer'>
              <UploadOutlined className='hover:bg-blue-50 active:shadow-sm active:shadow-slate-400 p-2 rounded-full' />
              <p className='text-black text-[16px] font-medium'> Upload CV</p>
            </div>
            <CommonInput
              onblur={() => handleBlurChecking('text', 'nameError', state.name, setField)}
              inputValue={state.name}
              typeInput='text'
              setField={setField}
              field='name'
              error={state.nameError}
              placeholder='Nhap ho va ten ...'
              label_title='Ho va Ten'
            />
            <CommonInput
              onblur={() => handleBlurChecking('text', 'addressError', state.address, setField)}
              inputValue={state.address}
              typeInput='text'
              setField={setField}
              field='address'
              error={state.addressError}
              placeholder='Nhap mo ta ...'
              label_title='Mo ta'
            />

            {['expertise', 'hobby', 'experience', 'certificate', 'award', 'language', 'skill'].map((section) => (
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

export default AddResume;
