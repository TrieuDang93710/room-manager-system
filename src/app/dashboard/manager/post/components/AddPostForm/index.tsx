/* eslint-disable @typescript-eslint/no-explicit-any */
import CommonInput from '@/components/atoms/Input';
import NotificationCustom from '@/helpers/notify';
import { handleBlurChecking } from '@/helpers/utils';
import { useAuth } from '@/hooks/auth/useAuth';
import { useApiSecure } from '@/hooks/useApiSecure';
import useBusiness from '@/hooks/useBusiness';
import useField from '@/hooks/useFeild';
import usePost from '@/hooks/usePost';
import { CloseOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

interface AddPostFormProps {
  closeHandler: () => void;
  state: any;
  setField: any;
  typeOfPost: string;
  setTypeOfPost: (value: string) => void;
  business: string;
  setBusiness: (value: string) => void;
}

interface OptionInterface {
  value: string;
  label: string;
}

const AddPostForm = ({
  state,
  setField,
  closeHandler,
  typeOfPost,
  setTypeOfPost,
  business,
  setBusiness
}: AddPostFormProps) => {
  const [fieldOptionList, setFieldOptionList] = useState<OptionInterface[]>([]);
  const [businessOptionList, setBusinessOptionList] = useState<OptionInterface[]>([]);
  const { handleSubmit, reset } = useForm();
  const { fields } = useField();
  const { businesses } = useBusiness();
  const { refetch } = usePost();
  const router = useRouter();
  const apiSecure = useApiSecure();
  const {} = useAuth();

  useEffect(() => {
    const fieldOption = fields.map((item: any) => ({ label: item.title, value: item.id }));
    const businessOption = businesses.map((item: any) => ({ label: item.title, value: item.id }));
    setFieldOptionList(fieldOption);
    setBusinessOptionList(businessOption);
  }, [fields, businesses]);

  console.log('fieldOptionList: ', fieldOptionList);
  console.log('businessOptionList: ', businessOptionList);

  const addPostHandler = () => {
    // e.preventDefault();
    const title = state.title;
    const description = state.description;
    const company = business;
    const field = typeOfPost;
    const duration = state.duration;
    const salary = state.salary;
    const benefit = state.benefit;
    const gender = state.gender;
    const age = state.age;
    const experience = state.experience;
    const quantity = state.quantity;
    const level = state.level;
    const education = state.education;
    const skill = state.skill;
    const time = state.time;
    const detail = state.detail;

    const postDto = {
      title: title,
      description: description,
      company: Number(company),
      type_of_post: Number(field),
      duration: duration,
      salary: Number(salary),
      benefit: benefit,
      require: {
        gender: [gender],
        age: Number(age),
        experience: experience,
        quantity: Number(quantity),
        education: education,
        level: level,
        skill: skill,
        time: time,
        detail: detail
      }
    };

    console.log('postDto: ', postDto);

    apiSecure
      .post('post', postDto)
      .then((response) => {
        console.log('response: ', response);
        NotificationCustom('success', response.data.message);
        router.push('/dashboard/manager/post');
        refetch();
        reset();
      })
      .catch((error: string) => {
        console.log('error: ', error);
        NotificationCustom('error', error);
        // reset();
        // router.push('/dashboard/manager/post');
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit(addPostHandler)}>
        <div className='modal_header'>
          <p>Thêm mới bài đăng</p>
          <CloseOutlined
            onClick={closeHandler}
            className='cursor-pointer font-bold text-red-500 p-2 rounded-sm hover:bg-[#e3e3e3] dark:text-[#fff]'
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
          <CommonInput
            onblur={() => handleBlurChecking('text', 'descriptionError', state.description, setField)}
            inputValue={state.description}
            typeInput='text'
            setField={setField}
            field='description'
            error={state.descriptionError}
            placeholder='Nhap mo ta ...'
            label_title='Mô tả công việc'
          />
          <CommonInput
            onblur={() => handleBlurChecking('text', 'benefitError', state.benefit, setField)}
            inputValue={state.benefit}
            typeInput='text'
            setField={setField}
            field='benefit'
            error={state.benefitError}
            placeholder='Nhap mo ta ...'
            label_title='Quyền lợi'
          />
          <div className='w-full flex md:flex-row flex-col items-center justify-between'>
            <CommonInput
              onblur={() => handleBlurChecking('text', 'fieldError', state.field, setField)}
              typeInput='text'
              setField={setField}
              field='field'
              error={state.fieldError}
              selectValue={typeOfPost}
              setSelectValue={setTypeOfPost}
              optionList={fieldOptionList}
              placeholder='Nhap mo ta ...'
              label_title='Lĩnh vực'
            />
            <CommonInput
              onblur={() => handleBlurChecking('text', 'companyError', state.company, setField)}
              inputValue={state.company}
              typeInput='text'
              setField={setField}
              field='company'
              error={state.companyError}
              selectValue={business}
              setSelectValue={setBusiness}
              optionList={businessOptionList}
              placeholder='Nhap mo ta ...'
              label_title='Công ty'
            />
          </div>
          <div className='w-full flex md:flex-row flex-col items-center justify-between'>
            <CommonInput
              onblur={() => handleBlurChecking('text', 'salaryError', state.salary, setField)}
              inputValue={state.salary}
              typeInput='text'
              setField={setField}
              field='salary'
              error={state.salaryError}
              placeholder='Nhap mo ta ...'
              label_title='Mức lương'
            />
            <CommonInput
              onblur={() => handleBlurChecking('text', 'durationError', state.duration, setField)}
              inputValue={state.duration}
              typeInput='date'
              setField={setField}
              field='duration'
              error={state.durationError}
              placeholder='Nhap mo ta ...'
              label_title='Đến hạn'
            />
          </div>
          <p className='text-slate-900 text-[14px] font-bold px-2'>Yeu cau cua cong viec :</p>
          <div className='w-full flex md:flex-row flex-col items-center justify-between'>
            <CommonInput
              onblur={() => handleBlurChecking('text', 'ageError', state.age, setField)}
              inputValue={state.age}
              typeInput='text'
              setField={setField}
              field='age'
              error={state.ageError}
              placeholder='Nhap mo ta ...'
              label_title='Độ tuổi'
            />
            <CommonInput
              onblur={() => handleBlurChecking('text', 'experienceError', state.experience, setField)}
              inputValue={state.experience}
              typeInput='text'
              setField={setField}
              field='experience'
              error={state.experienceError}
              placeholder='Nhap mo ta ...'
              label_title='Kinh nghiệm'
            />
          </div>
          <div className='w-full flex md:flex-row flex-col items-center justify-between'>
            <CommonInput
              onblur={() => handleBlurChecking('text', 'genderError', state.gender, setField)}
              inputValue={state.gender}
              typeInput='text'
              setField={setField}
              field='gender'
              error={state.genderError}
              placeholder='Nhap mo ta ...'
              label_title='Giới tính'
            />
            <CommonInput
              onblur={() => handleBlurChecking('text', 'quantityError', state.quantity, setField)}
              inputValue={state.quantity}
              typeInput='text'
              setField={setField}
              field='quantity'
              error={state.quantityError}
              placeholder='Nhap mo ta ...'
              label_title='Số lượng'
            />
          </div>
          <div className='w-full flex md:flex-row flex-col items-center justify-between'>
            <CommonInput
              onblur={() => handleBlurChecking('text', 'levelError', state.level, setField)}
              inputValue={state.level}
              typeInput='text'
              setField={setField}
              field='level'
              error={state.levelError}
              placeholder='Nhap mo ta ...'
              label_title='Trình độ'
            />
            <CommonInput
              onblur={() => handleBlurChecking('text', 'educationError', state.education, setField)}
              inputValue={state.education}
              typeInput='text'
              setField={setField}
              field='education'
              error={state.educationError}
              placeholder='Nhap mo ta ...'
              label_title='Học vấn'
            />
          </div>
          <div className='w-full flex md:flex-row flex-col items-center justify-between'>
            <CommonInput
              onblur={() => handleBlurChecking('text', 'skillError', state.skill, setField)}
              inputValue={state.skill}
              typeInput='text'
              setField={setField}
              field='skill'
              error={state.skillError}
              placeholder='Nhap mo ta ...'
              label_title='Kỹ năng'
            />
            <CommonInput
              onblur={() => handleBlurChecking('text', 'timeError', state.time, setField)}
              inputValue={state.time}
              typeInput='text'
              setField={setField}
              field='time'
              error={state.timeError}
              placeholder='Nhap mo ta ...'
              label_title='Thời gian làm việc'
            />
          </div>
          <CommonInput
            onblur={() => handleBlurChecking('text', 'detailError', state.detail, setField)}
            inputValue={state.detail}
            typeInput='text'
            setField={setField}
            field='detail'
            error={state.detailError}
            placeholder='Nhap mo ta ...'
            label_title='Chi tiết yêu cầu'
          />
        </div>
        <button className='modal_button' type='submit'>
          SAVE
        </button>
      </form>
    </>
  );
};

export default AddPostForm;
