'use client';
import CommonInput from '@/components/atoms/Input';
import { handleBlurChecking } from '@/helpers/utils';
import useCombinedState from '@/hooks/useCombinedState';

const Setting = () => {
  const [state, setField] = useCombinedState({
    password: '',
    newPassword: '',
    passwordError: '',
    newPasswordError: ''
  });

  return (
    <div className='w-full flex flex-col items-center justify-start py-2 px-4 gap-2'>
      <form className='w-1/2 flex flex-col items-start justify-start py-8 gap-4'>
        <div className='w-full flex flex-col items-start justify-start gap-2'>
          <CommonInput
            onblur={() => handleBlurChecking('text', 'passwordError', state.password, setField)}
            inputValue={state.password}
            typeInput='password'
            setField={setField}
            field='password'
            error={state.passwordError}
            label_title='Password :'
            placeholder='Type old password again'
          />
          <CommonInput
            onblur={() => handleBlurChecking('text', 'newPasswordError', state.newPassword, setField)}
            inputValue={state.newPassword}
            typeInput='text'
            setField={setField}
            field='newPassword'
            error={state.newPasswordError}
            label_title='New password :'
            placeholder='Type new password'
          />
        </div>
        <button
          className='bg-blue-100 hover:bg-blue-300 text-blue-600 hover:text-blue-500 active:shadow-sm active:shadow-slate-400 dark:bg-[#0000] font-bold text-[13px] py-2 px-4 rounded-md dark:border-[1px] dark:border-[#fff] dark:hover:bg-blue-200 dark:hover:text-[#000] dark:text-white ml-2'
          type='submit'
        >
          Thay doi
        </button>
      </form>
    </div>
  );
};

export default Setting;
