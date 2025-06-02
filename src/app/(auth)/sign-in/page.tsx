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
import jwt, { JwtPayload } from 'jsonwebtoken';
import { useApiSecure } from '@/hooks/useApiSecure';
import NotificationCustom from '@/helpers/notify';
import useUser from '@/hooks/useUser';
import TimestampConvert from '@/helpers/time-convert';

const SignIn = () => {
  const [passHidden, setPassHidden] = useState<boolean>(false);

  const [state, setField] = useCombinedState({
    email: '',
    password: '',
    emailError: '',
    passwordError: ''
  });

  const { handleSubmit, reset } = useForm();
  const { signIn, setUser, user } = useAuth();
  const { getUserByEmail } = useUser();
  const apiSecure = useApiSecure();
  const router = useRouter();

  const handleSignIn = async () => {
    const email = state.email;
    const password = state.password;

    signIn(email, password)
      .then((response) => {
        NotificationCustom('success', response.data.message);
        const token = response.data.data.token;
        const refreshToken = response.data.data.refreshToken;
        localStorage.setItem('access-token', token);
        localStorage.setItem('refresh-token', refreshToken);
        const { id } = jwt.decode(token) as JwtPayload;
        apiSecure
          .get(`/user/${id}`)
          .then((res) => {
            if (res.data) {
              setUser(res.data.data[0]);
              console.log('user: ', user);
              NotificationCustom(`success`, res.data.message);
              router.push('/');
            }
          })
          .catch((error) => {
            if (error.response.data) {
              NotificationCustom(`warning`, error.response.data.message);
              reset();
              router.push('/account-active');
            }
          });
      })
      .catch(async () => {
        if (
          (token_time_exp < realtime && TimestampConvert(realtime) <= TimestampConvert(refresh_token_time_exp) - 1) ||
          TimestampConvert(realtime) > TimestampConvert(refresh_token_time_exp) - 1
        ) {
          NotificationCustom('warning', 'Vui lòng làm mới mật khẩu');
          router.push('/refresh-token');
        }
        // NotificationCustom('error', error.message);
      });

    const result = (await getUserByEmail.mutateAsync({ email: email })).data;
    console.log('userByEmail: ', result.data);
    setUser(result.data);
    const decodedToken = jwt.decode(result.data.token!) as JwtPayload;
    const decodedRefreshToken = jwt.decode(result.data.refresh_token!) as JwtPayload;
    console.log(decodedToken, decodedRefreshToken);

    const get_time = new Date().getTime();
    const datetime = Math.floor(get_time / 1000);

    if (!decodedToken || !decodedRefreshToken) {
      return 'Error';
    }

    const token_time_exp = decodedToken.exp! - decodedToken.iat!;
    const refresh_token_time_exp = decodedRefreshToken.exp! - decodedRefreshToken.iat!;
    const realtime = datetime - decodedToken.iat!;

    console.log(token_time_exp, refresh_token_time_exp, realtime);
  };

  return (
    <div className={'w-full py-10 ' + flex({ direction: 'col', alignItems: 'center', justifyContent: 'center' })}>
      <div className='sign_in_container'>
        <h2 className='sign_in_title'>Đăng Nhập</h2>
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
              hidden={true}
              isAuth={true}
              label_title='Địa chỉ email'
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
              hidden={true}
              isAuth={true}
              iconPass={true}
              passHidden={passHidden}
              setPassHidden={setPassHidden}
              label_title='Mật khẩu'
              placeholder='Please, enter password'
              iconPassStyle='text-slate-100'
              labelTileClassName='text-white'
            />
          </div>
          <ButtonCommon title='Sign in' onClick={() => console.log('Sign in')} />
        </form>
        <p>
          Haven&apos; t you an account yet?
          <Link className='text-blue-600' href={'/sign-up'}>
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
