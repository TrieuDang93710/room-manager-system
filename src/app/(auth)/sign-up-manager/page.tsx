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
import { useAuth } from '@/hooks/useAuth';
import useApiPublic from '@/hooks/useApiPublic';
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';
import NotificationCustom from '@/helpers/notify';

const SignUp = () => {
  const [passHidden, setPassHidden] = useState<boolean>(false);

  const [state, setField] = useCombinedState({
    email: '',
    password: '',
    name: '',
    passConfirm: '',
    role: '',
    emailError: '',
    nameError: '',
    passwordError: '',
    passConfirmError: '',
    roleError: ''
  });

  const { handleSubmit, reset } = useForm();
  const { registerWithEmailAndPassword } = useAuth();
  const apiPublic = useApiPublic();
  const router = useRouter();

  const handleSignUp = () => {
    const username = state.name;
    const email = state.email;
    const password = state.password;
    const role = state.role;

    registerWithEmailAndPassword(email, password)
      .then((result: any) => {
        const user = result.user;
        console.log('user on firebase : ', user);
        const userInfo = {
          username: username,
          email: email,
          password: password,
          role: [role]
        };

        apiPublic.post('/auth/sign-up', userInfo).then((response) => {
          console.log('user on database : ', response.data);
          NotificationCustom('success', 'Signed up successfully');
          reset();
          router.push('/sign-in');
        });
      })
      .catch((error: any) => {
        console.log('error: ', error);
        NotificationCustom('error', error.response.message);
        router.push('/sign-up');
      });
  };

  return (
    <div className={'w-full min-h-screen ' + flex({ direction: 'col', alignItems: 'center', justifyContent: 'start' })}>
      <div className='sign_up_container'>
        <h2 className='sign_up_title'>Sign up</h2>
        <form className='sign_up_form' onSubmit={handleSubmit(handleSignUp)}>
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
          <div className='w-full py-1 gap-3 flex-col'>
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
              isAuth={true}
              iconPass={true}
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
              onblur={() => handleBlurChecking('text', 'roleError', state.role, setField, state.role)}
              inputValue={state.role}
              typeInput='text'
              setField={setField}
              field='role'
              error={state.roleError}
              hidden={false}
              isAuth={true}
              label_title='Role'
              placeholder='Please, enter role'
              iconPassStyle='text-slate-100'
              labelTileClassName='text-white'
            />
          </div>
          <ButtonCommon title='Sign up' onClick={() => console.log('Sign up')} />
        </form>
        <p className=''>
          Have you already existed ?
          <Link className='text-green-500' href={'/sign-in-manager'}>
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
