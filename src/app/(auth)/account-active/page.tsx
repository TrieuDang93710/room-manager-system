'use client'
/* eslint-disable @typescript-eslint/no-explicit-any */
import CommonInput from '@/components/atoms/Input';
import flex from '@/config/flex.config';
import useCombinedState from '@/hooks/useCombinedState';
import { handleBlurChecking } from '@/helpers/utils';
import ButtonCommon from '@/components/atoms/ButtonCommon';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import jwt from 'jsonwebtoken';
import { useApiSecure } from '@/hooks/useApiSecure';
import NotificationCustom from '@/helpers/notify';

const AccountActive = () => {
  const [state, setField] = useCombinedState({
    codeId: '',
    codeIdError: ''
  });

  const { handleSubmit, reset } = useForm();
  const apiSecure = useApiSecure();
  const router = useRouter();

  const handleAccountActive = async () => {
    const codeId = state.codeId;
    console.log('codeId: ', codeId);
    const token = localStorage.getItem('access-token');
    const id = jwt.decode(token!);

    apiSecure
      .post(`/auth/activate-account/${id}`, { codeId: codeId })
      .then((response) => {
        console.log('user on database : ', response.data);
        NotificationCustom(`success`, response.data.statusMessage);
        reset();
        router.push('/sign-in');
      })
      .catch((error) => {
        console.log('error.response: ', error);
        if (error.response.data) {
          NotificationCustom(`error`, error.response.data.message);
          router.push('/account-active');
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
        <h2 className='sign_in_title'>Account Activation</h2>
        <form className='sign_in_form' onSubmit={handleSubmit(handleAccountActive)}>
          <div className='w-full py-1 gap-3 flex-col'>
            <CommonInput
              onblur={() => handleBlurChecking('codeId', 'codeIdError', state.codeId, setField)}
              inputValue={state.codeId}
              passHidden={false}
              typeInput='text'
              setField={setField}
              field='codeId'
              error={state.codeIdError}
              hidden={false}
              label_title='Code'
              placeholder='Please, enter code'
              labelTileClassName='text-white'
            />
          </div>
          <ButtonCommon title='Activation' onClick={() => console.log('Sign in')} />
        </form>
      </div>
    </div>
  );
};

export default AccountActive;
