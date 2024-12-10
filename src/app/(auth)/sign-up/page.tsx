'use client';
import CommonInput from '@/components/atoms/Input';
import flex from '@/config/flex.config';
import useCombinedState from '@/hooks/useCombinedState';
import { handleBlurChecking } from '@/lib/utils';
import { FacebookOutlined, GooglePlusOutlined, TwitterOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { useState } from 'react';

const SignUp = () => {
  const [state, setField] = useCombinedState({
    email: '',
    password: '',
    username: '',
    passConfirm: '',
    // checking error field
    emailError: '',
    usernameError: '',
    passwordError: '',
    passConfirmError: ''
  });
  const [passHidden, setPassHidden] = useState<boolean>(false);
  return (
    <div className={'w-full min-h-screen ' + flex({ direction: 'col', alignItems: 'center', justifyContent: 'start' })}>
      <div className='lg:w-[30%] md:w-1/2 sm:w-3/4 w-full h-full bg-[#0c0c0c31] border-[2px] py-2 px-2 border-slate-700 rounded-md shadow-md shadow-slate-300'>
        <h2 className='text-3xl text-center text-slate-100 font-bold px-2 py-4'>Sign up</h2>
        <form className='w-full flex flex-col items-center gap-2'>
          <div className='w-full py-1 gap-3 flex-col'>
            <CommonInput
              onblur={() => handleBlurChecking('emailError', state.email, setField)}
              inputValue={state.email}
              typeInput='text'
              setField={setField}
              field='email'
              error={state.emailError}
              hidden={false}
              label_title='Email'
              placeholder='Please, enter email'
              labelTileClassName='text-white'
              inputClassName='border-none bg-[#ffffff1d] text-slate-200 placeholder:text-slate-200 dark:placeholder:text-slate-200 outline-slate-800 focus:outline-green-500 focus:bg-transparent'
            />
            <CommonInput
              onblur={() => handleBlurChecking('usernameError', state.username, setField)}
              inputValue={state.username}
              typeInput='text'
              setField={setField}
              field='text'
              error={state.usernameError}
              hidden={false}
              label_title='Username'
              placeholder='Please, username'
              labelTileClassName='text-white'
              inputClassName='border-none bg-[#ffffff1d] text-slate-200 placeholder:text-slate-200 dark:placeholder:text-slate-200 outline-slate-800 focus:outline-green-500 focus:bg-transparent'
            />
            <CommonInput
              onblur={() => handleBlurChecking('passwordError', state.password, setField)}
              inputValue={state.password}
              typeInput='password'
              setField={setField}
              field='password'
              error={state.passwordError}
              hidden={false}
              iconPass={true}
              passHidden={passHidden}
              setPassHidden={setPassHidden}
              label_title='Password'
              placeholder='Please, enter password'
              iconPassStyle='text-slate-100'
              labelTileClassName='text-white'
              inputClassName='border-none bg-[#ffffff1d] text-slate-200 placeholder:text-slate-200 dark:placeholder:text-slate-200 outline-slate-800 focus:outline-green-500 focus:bg-transparent'
            />
            <CommonInput
              onblur={() => handleBlurChecking('passConfirmError', state.passConfirm, setField)}
              inputValue={state.passConfirm}
              typeInput='password'
              setField={setField}
              field='passConfirm'
              error={state.passConfirmError}
              hidden={false}
              label_title='Password Confirm'
              placeholder='Please, enter password confirm'
              iconPassStyle='text-slate-100'
              labelTileClassName='text-white'
              inputClassName='border-none bg-[#ffffff1d] text-slate-200 placeholder:text-slate-200 dark:placeholder:text-slate-200 outline-slate-800 focus:outline-green-500 focus:bg-transparent'
            />
          </div>
          <button
            className='w-[90%] bg-green-500 dark:bg-green-500 font-bold text-[15px] py-3 mt-2 rounded-md text-[#fff] hover:bg-green-600 dark:border-[1px] dark:border-[#fff] dark:hover:bg-green-600 dark:hover:text-slate-300 dark:text-white'
            type='submit'
          >
            Sign up
          </button>
        </form>
        <p className='text-[15px] text-center text-slate-500 font-bold dark:hover:text-slate-300 dark:text-slate-500 py-2'>
          Have you already existed ?
          <Link className='text-green-500' href={'/sign-in'}>
            Sign in
          </Link>
        </p>
        <div className='w-[80%] m-auto py-2 flex flex-col gap-3'>
          <p className='text-[15px] text-center text-slate-100 font-bold dark:hover:text-slate-300 dark:text-slate-500 py-2'>
            Sign up with
          </p>
          <div className={'w-full gap-3 ' + flex({ justifyContent: 'around', alignItems: 'center' })}>
            <GooglePlusOutlined className='text-[30px] text-red-500' />
            <FacebookOutlined className='text-[30px] text-blue-500' />
            <TwitterOutlined className='text-[30px] text-blue-500' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
