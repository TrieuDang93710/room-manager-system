/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React, { useState } from 'react';
import CommonInput from '@/components/atoms/Input';
import Modal from '@/components/molecules/Modal';
import useCombinedState from '@/hooks/useCombinedState';
import { CloseOutlined } from '@ant-design/icons';
import { handleBlurChecking } from '@/helpers/utils';
import './UpdateUser.css';
import { useDispatch, useSelector } from 'react-redux';
import { addHobby, addLanguage, addSkill, addAddress } from '@/lib/features/users/usersSlice';
import { RootState } from '@/lib/store';
import { useForm } from 'react-hook-form';
import Image from 'next/image';
import useCloudinary from '@/hooks/useCloudinary';
import renderContent from '@/components/molecules/renderContent';
import renderAddContent from '@/components/molecules/renderAddContent';
import useUser from '@/hooks/useUser';
import { useAuth } from '@/hooks/auth/useAuth';

interface UpdateUserProps {
  updateUser: boolean;
  setUpdateUser: (value: boolean) => void;
}

const UpdateUser = ({ updateUser, setUpdateUser }: UpdateUserProps) => {
  const { handleSubmit } = useForm();
  const { uploadFile } = useCloudinary();
  const { updateProfile, refetch } = useUser();
  const { user } = useAuth();
  const dispatch = useDispatch();
  const userData = useSelector((state: RootState) => state.users);

  const [openSections, setOpenSections] = useState<any>({
    hobby: false,
    language: false,
    skill: false,
    address: false
  });

  const [formData, setFormData] = useState<any>({
    hobby: '',
    language: '',
    skill: '',
    address: { national: '', city: '', district: '', village: '' }
  });

  const [state, setField] = useCombinedState({
    username: '',
    dob: '',
    gender: '',
    phone: '',
    usernameError: '',
    dobError: '',
    genderError: '',
    phoneError: ''
  });

  const [image, setImage] = useState<any>(null);

  const toggleSection = (section: string) => {
    setOpenSections((prev: { [x: string]: any }) => ({ ...prev, [section]: !prev[section] }));
  };

  const onSaveHandler = (e: { preventDefault: () => void }, section: string) => {
    e.preventDefault();
    setOpenSections((prev: any) => ({ ...prev, [section]: false }));

    switch (section) {
      case 'hobby':
        dispatch(addHobby(formData.hobby));
        break;
      case 'language':
        dispatch(addLanguage(formData.language));
        break;
      case 'skill':
        dispatch(addSkill(formData.skill));
        break;
      case 'address':
        dispatch(addAddress(formData.address));
        break;
      default:
        break;
    }
  };

  const onChangeHandler = (section: any, value: any) => {
    setFormData({ ...formData, [section]: value });
  };

  const UpdateUserHandler = async () => {
    const fullname = state.username;
    const dob = state.dob;
    const g_der = state.gender;
    const phone = state.phone;

    const imgFile = new FormData();
    imgFile.append('file', image);

    let image_secure_url;

    await uploadFile
      .mutateAsync({ file: imgFile })
      .then((result) => {
        console.log('result: ', result.data);
        image_secure_url = result.data.data.secure_url;
      })
      .catch((error) => console.log('error: ', error));

    const userDto = {
      username: fullname,
      date_of_birth: dob,
      gender: [g_der],
      phone: phone,
      avatar: image_secure_url,
      skill: userData.skill.toString().replaceAll(',', '; '),
      language: userData.language.toString().replaceAll(',', '; '),
      hobby: userData.hobby.toString().replaceAll(',', '; '),
      address: userData.address
    };

    console.log('userDto: ', userDto);

    await updateProfile.mutateAsync({ updateUserDto: userDto });
    refetch();
  };

  return (
    <Modal
      className='bg-[#29292962] dark:bg-[#f8f8f817] h-screen w-full flex justify-center items-center right-0 animate-in'
      isOpen={updateUser}
      hidden={false}
      onClose={() => setUpdateUser(false)}
    >
      <div className='modal_container'>
        <form onSubmit={handleSubmit(UpdateUserHandler)}>
          <div className='modal_header'>
            <p>Cập nhật hồ sơ</p>
            <CloseOutlined
              onClick={() => setUpdateUser(!UpdateUser)}
              className='cursor-pointer font-bold text-red-500 p-2 rounded-sm hover:bg-[#e3e3e3] dark:text-[#fff]'
            />
          </div>
          <div className='w-full h-[80%] py-1 gap-2 flex flex-col items-center md:flex hide-scrollbar overflow-y-auto'>
            <div className='w-full flex items-center justify-center p-4 gap-2'>
              <Image
                alt='avatar'
                src='https://www.svgrepo.com/show/384676/account-avatar-profile-user-6.svg'
                width='80'
                height='80'
                className='cursor-pointer'
              />
              <div className='w-[30%] flex flex-col items-start justify-center cursor-pointer gap-2'>
                <input
                  type='file'
                  accept='image/*'
                  className='text-[13px] font-normal'
                  onChange={(e: any) => setImage(e.target.files[0])}
                />
                <p className='text-black text-[13px] font-normal'> Cap nhat</p>
              </div>
            </div>
            <div className='w-full flex flex-row items-center justify-center mt-2'>
              <CommonInput
                onblur={() => handleBlurChecking('text', 'usernameError', state.username, setField)}
                inputValue={state.username}
                typeInput='text'
                setField={setField}
                field='username'
                error={state.usernameError}
                placeholder=''
                label_title='Họ và Tên'
              />
              <CommonInput
                onblur={() => handleBlurChecking('text', 'dobError', state.dob, setField)}
                inputValue={state.dob}
                typeInput='text'
                setField={setField}
                field='dob'
                error={state.dobError}
                placeholder=''
                label_title='Ngày sinh'
              />
            </div>
            <div className='w-full flex flex-row items-center justify-center mt-2'>
              <CommonInput
                onblur={() => handleBlurChecking('text', 'genderError', state.gender, setField)}
                inputValue={state.gender}
                typeInput='text'
                setField={setField}
                field='gender'
                error={state.genderError}
                placeholder=''
                label_title='Giới tính'
              />
              <CommonInput
                onblur={() => handleBlurChecking('text', 'phoneError', state.phone, setField)}
                inputValue={state.phone}
                typeInput='text'
                setField={setField}
                field='phone'
                error={state.phoneError}
                placeholder=''
                label_title='Số điện thoại'
              />
            </div>
            {user &&
              user!.role[0] === 'applicant' &&
              ['hobby', 'language', 'skill'].map((section) => (
                <React.Fragment key={section}>
                  {renderContent(section, toggleSection, openSections, userData)}
                  {openSections[section] && renderAddContent(section, onSaveHandler, onChangeHandler, formData)}
                </React.Fragment>
              ))}
            {['address'].map((section) => (
              <React.Fragment key={section}>
                {renderContent(section, toggleSection, openSections, userData)}
                {openSections[section] && renderAddContent(section, onSaveHandler, onChangeHandler, formData)}
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

export default UpdateUser;
