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
import { useRouter } from 'next/navigation';
import jwt from 'jsonwebtoken';
import { useApiSecure } from '@/hooks/useApiSecure';
import NotificationCustom from '@/helpers/notify';

const SignIn = () => {
  const [passHidden, setPassHidden] = useState<boolean>(false);

  const [state, setField] = useCombinedState({
    email: '',
    password: '',
    emailError: '',
    passwordError: ''
  });

  const { handleSubmit, reset } = useForm();
  const { loginWithEmailAndPassword, setUser, user } = useAuth();
  const apiPublic = useApiPublic();
  const apiSecure = useApiSecure();
  const router = useRouter();

  const handleSignIn = () => {
    const email = state.email;
    const password = state.password;

    loginWithEmailAndPassword(email, password)
      .then((result: any) => {
        console.log('user on firebase: ', result.user);
        const userInfo = {
          email: email,
          password: password
        };
        apiPublic
          .post('/auth/sign-in', userInfo)
          .then((response) => {
            console.log('user on database : ', response.data);

            const token = response.data.data.token;
            localStorage.setItem('access-token', token);
            const { id } = jwt.decode(token);
            apiSecure
              .get(`/user/${id}`)
              .then((res) => {
                if (res.data) {
                  console.log('user: ', res.data.data);
                  setUser(res.data.data[0]);
                  NotificationCustom(`success`, res.data.statusMessage);
                  router.push('/dashboard');
                }
              })
              .catch((error) => {
                console.log('error.response: ', error);
                if (error.response.data) {
                  NotificationCustom(`warning`, error.response.data.message);
                  reset();
                  router.push('/account-active');
                }
              });
          })
          .catch((error) => {
            console.log('error.response: ', error);
            if (error.response.data) {
              NotificationCustom(`error`, error);
              reset();
              router.push('/sign-in-manager');
            }
          });
      })
      .catch((error: any) => {
        console.log('error: ', error);
        NotificationCustom('error', error);
        reset();
        router.push('/sign-in');
      });
  };

  return (
    <div
      className={
        'w-full min-h-screen py-10 ' + flex({ direction: 'col', alignItems: 'center', justifyContent: 'start' })
      }
    >
      <div className='sign_in_container'>
        <h2 className='sign_in_title'>Sign In</h2>
        <form className='sign_in_form' onSubmit={handleSubmit(handleSignIn)}>
          <div className='w-full py-1 gap-3 flex-col'>
            <CommonInput
              onblur={() => handleBlurChecking('email', 'emailError', state.email, setField)}
              inputValue={state.email}
              passHidden={passHidden}
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
          </div>
          <ButtonCommon title='Sign in' onClick={() => console.log('Sign in')} />
        </form>
        <p>
          Haven&apos; t you an account yet?
          <Link className='text-green-500' href={'/sign-up-manager'}>
            Sign up
          </Link>
        </p>
        <div className='sign_in_other'>
          <p>Sign in with</p>
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

export default SignIn;
