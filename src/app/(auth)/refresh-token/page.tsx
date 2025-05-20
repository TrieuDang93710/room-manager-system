'use client';
/* eslint-disable @typescript-eslint/no-explicit-any */
import flex from '@/config/flex.config';
import ButtonCommon from '@/components/atoms/ButtonCommon';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { useApiSecure } from '@/hooks/useApiSecure';
import NotificationCustom from '@/helpers/notify';
import { useAuth } from '@/hooks/auth/useAuth';

const RefreshToken = () => {
  const { handleSubmit } = useForm();
  const { user, setUser } = useAuth();
  const apiSecure = useApiSecure();
  const router = useRouter();

  const handleAccountActive = async () => {
    // const oldRefreshToken = localStorage.getItem('refresh-token');
    const body = {
      refreshToken: user.refresh_token
    };

    apiSecure
      .post(`/auth/refresh-token`, body)
      .then(() => {
        NotificationCustom(`success`, 'Làm mới thành công');
        router.push('/sign-in');
        setUser(null);
      })
      .catch((error) => {
        console.log('error.response: ', error);
        if (error.response.data) {
          NotificationCustom(`error`, error.response.data.message);
          router.push('/refresh-token');
        }
      });
  };

  return (
    <div
      className={
        'w-full min-h-screen py-10 ' + flex({ direction: 'col', alignItems: 'center', justifyContent: 'start' })
      }
    >
      <div className='sign_in_container'>
        <h2 className='sign_in_title'>Làm mới token</h2>
        <form className='sign_in_form' onSubmit={handleSubmit(handleAccountActive)}>
          <ButtonCommon title='Refresh Token' onClick={() => console.log('Sign in')} />
        </form>
      </div>
    </div>
  );
};

export default RefreshToken;
