/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import CommonInput from '@/components/atoms/Input';
import { handleBlurChecking } from '@/helpers/utils';
import useCombinedState from '@/hooks/useCombinedState';
import useResume from '@/hooks/useResume';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const Contact = () => {
  const [state, setField] = useCombinedState({
    email: '',
    phone: '',
    address: '',
    emailError: '',
    phoneError: '',
    addressError: ''
  });

  const { getOneResume } = useResume();
  const pathName = usePathname();
  const [resumeItem, setResumeItem] = useState<any>(null);
  const [change, setChange] = useState<boolean>(false);

  const resumeId = Number(pathName.split('/')[4]);
  console.log('pathName: ', resumeId);

  useEffect(() => {
    getOneResume
      .mutateAsync({ id: resumeId })
      .then((res) => {
        console.log('res: ', res);
        setResumeItem(res.data.data);
      })
      .catch((error) => {
        console.log('error: ', error);
      });
  }, []);

  console.log('resumeItem: ', resumeItem);
  if (!resumeItem) {
    return 'Not found';
  }

  const changeHandler = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setChange(!change);
  };

  return (
    <div className='w-full flex flex-col items-center justify-start py-2 px-4 gap-2'>
      <form className='w-1/2 flex flex-col items-start justify-start py-8 gap-4'>
        <div className='w-full flex flex-col items-start justify-start gap-2'>
          <CommonInput
            onblur={() => handleBlurChecking('text', 'emailError', state.email, setField)}
            inputValue={change ? resumeItem.applicant.user.email : state.email}
            typeInput='email'
            setField={setField}
            field='email'
            error={state.emailError}
            label_title='Email :'
            placeholder={resumeItem.applicant.user.email}
          />
          <CommonInput
            onblur={() => handleBlurChecking('text', 'phoneError', state.phone, setField)}
            inputValue={change ? resumeItem.applicant.user.phone : state.phone}
            typeInput='text'
            setField={setField}
            field='phone'
            error={state.phoneError}
            label_title='So dien thoai :'
            placeholder={resumeItem.applicant.user.phone}
          />
          <CommonInput
            onblur={() => handleBlurChecking('text', 'addressError', state.address, setField)}
            inputValue={change ? resumeItem.applicant.user.address : state.address}
            typeInput='text'
            setField={setField}
            field='address'
            error={state.addressError}
            label_title='Dia chi :'
            placeholder={resumeItem.applicant.user.address}
          />
        </div>
        <button
          onClick={() => changeHandler}
          className='bg-blue-100 hover:bg-blue-300 text-blue-600 hover:text-blue-500 active:shadow-sm active:shadow-slate-400 dark:bg-[#0000] font-bold text-[13px] py-2 px-4 rounded-md dark:border-[1px] dark:border-[#fff] dark:hover:bg-blue-200 dark:hover:text-[#000] dark:text-white ml-2'
          type='submit'
        >
          Thay doi
        </button>
      </form>
    </div>
  );
};

export default Contact;
