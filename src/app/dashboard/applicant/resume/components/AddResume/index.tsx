/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React, { useState } from 'react';
import CommonInput from '@/components/atoms/Input';
import Modal from '@/components/molecules/Modal';
import useCombinedState from '@/hooks/useCombinedState';
import { CloseOutlined } from '@ant-design/icons';
import { handleBlurChecking } from '@/helpers/utils';
import './AddResume.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  addAward,
  addCertificate,
  addEducation,
  addExperience,
  addExpertise,
  addHobby,
  addLanguage,
  addSkill
} from '@/lib/features/resumes/resumesSlice';
import { RootState } from '@/lib/store';
import { useForm } from 'react-hook-form';
import Image from 'next/image';
import useCloudinary from '@/hooks/useCloudinary';
import useResume from '@/hooks/useResume';
import renderContent from '@/components/molecules/renderContent';
import renderAddContent from '@/components/molecules/renderAddContent';

interface AddResumeProps {
  addResume: boolean;
  setAddResume: (value: boolean) => void;
}

const AddResume = ({ addResume, setAddResume }: AddResumeProps) => {
  const { handleSubmit } = useForm();
  const { uploadFile } = useCloudinary();
  const { addNewResume } = useResume();
  const dispatch = useDispatch();
  const resumeData = useSelector((state: RootState) => state.resumes);

  const [openSections, setOpenSections] = useState<any>({
    expertise: false,
    hobby: false,
    experience: false,
    education: false,
    certificate: false,
    award: false,
    language: false,
    skill: false
  });

  const [formData, setFormData] = useState<any>({
    expertise: { title: '', level: '' },
    hobby: '',
    language: '',
    skill: '',
    experience: { title: '', year: '', company: '', detail: '' },
    education: { title: '', year: '' },
    certificate: { title: '', year: '' },
    award: { title: '', year: '' }
  });

  const [state, setField] = useCombinedState({
    title: '',
    level: '',
    job: '',
    target: '',
    description: '',
    titleError: '',
    levelError: '',
    jobError: '',
    targetError: '',
    descriptionError: ''
  });

  const [image, setImage] = useState<any>(null);
  const [cv, setCV] = useState<any>(null);

  const toggleSection = (section: string) => {
    setOpenSections((prev: { [x: string]: any }) => ({ ...prev, [section]: !prev[section] }));
  };

  const onSaveHandler = (e: { preventDefault: () => void }, section: string) => {
    e.preventDefault();
    setOpenSections((prev: any) => ({ ...prev, [section]: false }));

    switch (section) {
      case 'expertise':
        dispatch(addExpertise(formData.expertise));
        break;
      case 'hobby':
        dispatch(addHobby(formData.hobby));
        break;
      case 'language':
        dispatch(addLanguage(formData.language));
        break;
      case 'skill':
        dispatch(addSkill(formData.skill));
        break;
      case 'experience':
        dispatch(addExperience(formData.experience));
        break;
      case 'certificate':
        dispatch(addCertificate(formData.certificate));
        break;
      case 'education':
        dispatch(addEducation(formData.education));
        break;
      case 'award':
        dispatch(addAward(formData.award));
        break;
      default:
        break;
    }
  };

  const onChangeHandler = (section: any, value: any) => {
    setFormData({ ...formData, [section]: value });
  };

  const addResumeHandler = async () => {
    const fullname = state.title;
    const level = state.level;
    const job = state.job;
    const target = state.target;
    const description = state.description;

    const imgFile = new FormData();
    imgFile.append('file', image);
    const cvFile = new FormData();
    cvFile.append('file', cv);

    let image_secure_url;
    let cv_secure_url;

    await uploadFile
      .mutateAsync({ file: imgFile })
      .then((result) => {
        console.log('result: ', result.data);
        image_secure_url = result.data.data.secure_url;
      })
      .catch((error) => console.log('error: ', error));

    await uploadFile
      .mutateAsync({ file: cvFile })
      .then((result) => {
        console.log('result: ', result.data);
        cv_secure_url = result.data.data.secure_url;
      })
      .catch((error) => console.log('error: ', error));

    const resumeDto = {
      title: fullname,
      level: level,
      job: job,
      target: target,
      description: description,
      image: image_secure_url,
      cv: cv_secure_url,
      experiences: resumeData.experience,
      certificates: resumeData.certificate,
      education: resumeData.education,
      awards: resumeData.award,
      skills: resumeData.skill.toString().replaceAll(',', '; '),
      languages: resumeData.language.toString().replaceAll(',', '; '),
      expertise: resumeData.expertise,
      hobbies: resumeData.hobby.toString().replaceAll(',', '; ')
    };

    console.log('resumeDto: ', resumeDto);

    await addNewResume.mutateAsync({ newResume: resumeDto });
  };

  return (
    <Modal
      className='bg-[#29292962] dark:bg-[#f8f8f817] h-screen w-full flex justify-center items-center right-0 animate-in'
      isOpen={addResume}
      hidden={false}
      onClose={() => setAddResume(false)}
    >
      <div className='modal_container'>
        <form onSubmit={handleSubmit(addResumeHandler)}>
          <div className='modal_header'>
            <p>Thêm mới hồ sơ</p>
            <CloseOutlined
              onClick={() => setAddResume(!addResume)}
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
            <div className='w-[50%] flex flex-row items-center justify-center cursor-pointer gap-2'>
              <input
                type='file'
                className='w-[50%] text-[13px] font-normal'
                onChange={(e: any) => setCV(e.target.files[0])}
              />
              <p className='text-black text-[13px] font-normal'> Upload CV</p>
            </div>
            <div className='w-full flex flex-row items-center justify-center mt-2'>
              <CommonInput
                onblur={() => handleBlurChecking('text', 'titleError', state.title, setField)}
                inputValue={state.title}
                typeInput='text'
                setField={setField}
                field='title'
                error={state.titleError}
                placeholder=''
                label_title='Họ và Tên'
              />
              <CommonInput
                onblur={() => handleBlurChecking('text', 'jobError', state.job, setField)}
                inputValue={state.job}
                typeInput='text'
                setField={setField}
                field='job'
                error={state.jobError}
                placeholder=''
                label_title='Vị trí công việc'
              />
            </div>
            <div className='w-full flex flex-row items-center justify-center mt-2'>
              <CommonInput
                onblur={() => handleBlurChecking('text', 'levelError', state.level, setField)}
                inputValue={state.level}
                typeInput='text'
                setField={setField}
                field='level'
                error={state.levelError}
                placeholder=''
                label_title='Cấp bậc'
              />
              <CommonInput
                onblur={() => handleBlurChecking('text', 'targetError', state.target, setField)}
                inputValue={state.target}
                typeInput='text'
                setField={setField}
                field='target'
                error={state.targetError}
                placeholder=''
                label_title='Mục tiêu'
              />
            </div>
            <CommonInput
              onblur={() => handleBlurChecking('text', 'descriptionError', state.description, setField)}
              inputValue={state.description}
              typeInput='text'
              setField={setField}
              field='description'
              error={state.descriptionError}
              placeholder=''
              label_title='Nhập ghi chú'
            />

            {['expertise', 'hobby', 'experience', 'certificate', 'education', 'award', 'language', 'skill'].map(
              (section) => (
                <React.Fragment key={section}>
                  {renderContent(section, toggleSection, openSections, resumeData)}
                  {openSections[section] && renderAddContent(section, onSaveHandler, onChangeHandler, formData)}
                </React.Fragment>
              )
            )}
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
