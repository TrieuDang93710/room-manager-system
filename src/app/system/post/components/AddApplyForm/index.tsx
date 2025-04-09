/* eslint-disable @typescript-eslint/no-explicit-any */
import CommonInput from '@/components/atoms/Input';
import renderAddContent from '@/components/molecules/renderAddContent';
import renderContent from '@/components/molecules/renderContent';
import NotificationCustom from '@/helpers/notify';
import { handleBlurChecking } from '@/helpers/utils';
import usePost from '@/hooks/usePost';
import { RootState } from '@/lib/store';
import { CloseOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { addLetter } from '@/lib/features/applies/appliesSlice';
import useResume from '@/hooks/useResume';
import useApply from '@/hooks/useApply';

interface AddApplyFormProps {
  closeHandler: () => void;
  state: any;
  setField: any;
  resume: string;
  setResume: (value: string) => void;
  post: string;
  setPost: (value: string) => void;
}

interface OptionInterface {
  value: string;
  label: string;
}

const AddApplyForm = ({ state, setField, closeHandler, resume, setResume, post, setPost }: AddApplyFormProps) => {
  const [postOptionList, setPostOptionList] = useState<OptionInterface[]>([]);
  const [resumeOptionList, setResumeOptionList] = useState<OptionInterface[]>([]);
  const { handleSubmit, reset } = useForm();
  const { resumes } = useResume();
  const { refetch, posts } = usePost();
  const { addApply } = useApply();

  useEffect(() => {
    const postOption = posts.map((item: any) => ({ label: item.title, value: item.id }));
    const resumeOption = resumes.map((item: any) => ({ label: `${item.title} - ${item.id}`, value: item.id }));
    setPostOptionList(postOption);
    setResumeOptionList(resumeOption);
  }, [posts, resumes]);

  const dispatch = useDispatch();
  const applyData = useSelector((state: RootState) => state.applies);

  const [openSections, setOpenSections] = useState<any>({
    letter: false
  });

  const [formData, setFormData] = useState<any>({
    letter: { dear: '', content: '', signature: '' }
  });

  const toggleSection = (section: string) => {
    setOpenSections((prev: { [x: string]: any }) => ({ ...prev, [section]: !prev[section] }));
  };

  const onSaveHandler = (e: { preventDefault: () => void }, section: string) => {
    e.preventDefault();
    setOpenSections((prev: any) => ({ ...prev, [section]: false }));

    switch (section) {
      case 'letter':
        dispatch(addLetter(formData.letter));
        break;
      default:
        break;
    }
  };

  const onChangeHandler = (section: any, value: any) => {
    setFormData({ ...formData, [section]: value });
  };

  const addApplyHandler = async () => {
    const title = state.title;
    const postId = post;
    const resumeId = resume;

    const applyDto = {
      description: title,
      letter: applyData,
      post: Number(postId),
      resume: Number(resumeId)
    };

    console.log('applyDto: ', applyDto);

    await addApply
      .mutateAsync({ createApplyDto: applyDto })
      .then((response) => {
        console.log('response: ', response);
        NotificationCustom('success', response.data.message);
        // router.push('/dashboard/manager/post');
        refetch();
        reset();
      })
      .catch((error: string) => {
        console.log('error: ', error);
        NotificationCustom('error', error);
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit(addApplyHandler)}>
        <div className='modal_header'>
          <p className='dark:text-blue-600'>Ứng tuyển vào vị trí</p>
          <CloseOutlined
            onClick={closeHandler}
            className='cursor-pointer font-bold text-red-500 p-2 rounded-sm hover:bg-[#55555588] dark:text-red-600'
          />
        </div>
        <div className='w-full h-[80%] py-1 gap-2 flex flex-col md:flex hide-scrollbar overflow-y-auto'>
          <CommonInput
            onblur={() => handleBlurChecking('text', 'titleError', state.title, setField)}
            inputValue={state.title}
            typeInput='text'
            setField={setField}
            field='title'
            error={state.titleError}
            placeholder='Nhap ho va ten ...'
            label_title='Vị trí tuyển dụng'
          />
          <div className='w-full flex md:flex-row flex-col items-center justify-between'>
            <CommonInput
              onblur={() => handleBlurChecking('text', 'fieldError', state.field, setField)}
              typeInput='text'
              setField={setField}
              field='field'
              error={state.fieldError}
              selectValue={post}
              setSelectValue={setPost}
              optionList={postOptionList}
              placeholder='Nhap mo ta ...'
              label_title='Công việc'
            />
            <CommonInput
              onblur={() => handleBlurChecking('text', 'companyError', state.company, setField)}
              inputValue={state.company}
              typeInput='text'
              setField={setField}
              field='company'
              error={state.companyError}
              selectValue={resume}
              setSelectValue={setResume}
              optionList={resumeOptionList}
              placeholder='Nhap mo ta ...'
              label_title='Đơn ứng tuyển'
            />
          </div>
          {['letter'].map((section) => (
            <React.Fragment key={section}>
              {renderContent(section, toggleSection, openSections, applyData)}
              {openSections[section] && renderAddContent(section, onSaveHandler, onChangeHandler, formData)}
            </React.Fragment>
          ))}
        </div>
        <button className='modal_button' type='submit'>
          SAVE
        </button>
      </form>
    </>
  );
};

export default AddApplyForm;
