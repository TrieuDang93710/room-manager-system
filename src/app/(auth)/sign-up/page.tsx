/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import CommonInput from '@/components/atoms/Input';
import flex from '@/config/flex.config';
import useCombinedState from '@/hooks/useCombinedState';
import { handleBlurChecking } from '@/helpers/utils';
import { FacebookOutlined, GooglePlusOutlined, TwitterOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { useState } from 'react';
import ButtonCommon from '@/components/atoms/ButtonCommon';
import { useForm } from 'react-hook-form';
import { useAuth } from '@/hooks/auth/useAuth';
import { useRouter } from 'next/navigation';
import NotificationCustom from '@/helpers/notify';

const SignUp = () => {
  const [passHidden, setPassHidden] = useState<boolean>(false);

  const [state, setField] = useCombinedState({
    email: '',
    password: '',
    name: '',
    passConfirm: '',
    emailError: '',
    nameError: '',
    passwordError: '',
    passConfirmError: ''
  });

  const { handleSubmit, reset } = useForm();
  const { signUp } = useAuth();
  const router = useRouter();

  const handleSignUp = () => {
    const username = state.name;
    const email = state.email;
    const password = state.password;
    const passConfirm = state.passConfirm;
    const role = null;

    if (passConfirm !== password) {
      NotificationCustom('error', 'passConfirm and password no match');
    }

    signUp(username, email, password, role!)
      .then((response) => {
        console.log('response: ', response);
        NotificationCustom('success', response.data.message);
        router.push('/sign-in');
      })
      .catch((error: string) => {
        console.log('error: ', error);
        NotificationCustom('error', error);
        reset();
        router.push('/sign-up');
      });
  };

  return (
    <div className={'w-full h-full ' + flex({ direction: 'col', alignItems: 'center', justifyContent: 'center' })}>
      <div className='sign_up_container flex flex-col items-center justify-start'>
        <div className={`w-full flex flex-row items-center justify-center py-2`}>
          <h2 className='sign_up_title'>Sign up</h2>
        </div>
        <form className='sign_up_form pt-4' onSubmit={handleSubmit(handleSignUp)}>
          <CommonInput
            onblur={() => handleBlurChecking('text', 'nameError', state.name, setField)}
            inputValue={state.name}
            typeInput='text'
            setField={setField}
            field='name'
            error={state.nameError}
            hidden={false}
            isAuth={true}
            label_title='Username'
            placeholder='Please, enter name'
            labelTileClassName='text-white'
          />
          <CommonInput
            onblur={() => handleBlurChecking('email', 'emailError', state.email, setField)}
            passHidden={passHidden}
            inputValue={state.email}
            typeInput='email'
            setField={setField}
            field='email'
            error={state.emailError}
            hidden={false}
            isAuth={true}
            label_title='Email'
            placeholder='Please, enter email'
            labelTileClassName='text-white'
          />
          <CommonInput
            onblur={() => handleBlurChecking('password', 'passwordError', state.password, setField)}
            inputValue={state.password}
            typeInput='password'
            setField={setField}
            field='password'
            error={state.passwordError}
            hidden={false}
            iconPass={true}
            isAuth={true}
            passHidden={passHidden}
            setPassHidden={setPassHidden}
            label_title='Password'
            placeholder='Please, enter password'
            iconPassStyle='text-slate-100'
            labelTileClassName='text-white'
          />
          <CommonInput
            onblur={() =>
              handleBlurChecking('passwordConfirm', 'passConfirmError', state.passConfirm, setField, state.password)
            }
            inputValue={state.passConfirm}
            typeInput='password'
            setField={setField}
            field='passConfirm'
            error={state.passConfirmError}
            hidden={false}
            isAuth={true}
            label_title='Password Confirm'
            placeholder='Please, enter password confirm'
            iconPassStyle='text-slate-100'
            labelTileClassName='text-white'
          />
          <CommonInput
            onblur={() =>
              handleBlurChecking('passwordConfirm', 'passConfirmError', state.passConfirm, setField, state.password)
            }
            inputValue={state.passConfirm}
            typeInput='password'
            setField={setField}
            field='passConfirm'
            error={state.passConfirmError}
            hidden={false}
            isAuth={true}
            label_title='Role'
            placeholder='Please, enter password confirm'
            iconPassStyle='text-slate-100'
            labelTileClassName='text-white'
          />
          <ButtonCommon title='Sign up' onClick={() => console.log('Sign up')} />
        </form>
        <p className=''>
          Have you already existed ?
          <Link className='text-blue-600' href={'/sign-in'}>
            Sign in
          </Link>
        </p>
        <div className='sign_up_other'>
          <p className=''>Sign up with</p>
          <div className={'w-full gap-3 ' + flex({ justifyContent: 'around', alignItems: 'center' })}>
            <GooglePlusOutlined className='text-[30px] text-red-500' onClick={handleSignUp} />
            <FacebookOutlined className='text-[30px] text-blue-500' />
            <TwitterOutlined className='text-[30px] text-blue-500' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
