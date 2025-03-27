'use client';
import CommonInput from '@/components/atoms/Input';
import { handleBlurChecking } from '@/helpers/utils';
import useCombinedState from '@/hooks/useCombinedState';

const Contact = () => {
  const [state, setField] = useCombinedState({
    email: '',
    phone: '',
    address: '',
    emailError: '',
    phoneError: '',
    addressError: ''
  });

  return (
    <div className='w-full flex flex-col items-center justify-start py-2 px-4 gap-2'>
      <form className='w-1/2 flex flex-col items-start justify-start py-8 gap-4'>
        <div className='w-full flex flex-col items-start justify-start gap-2'>
          <CommonInput
            onblur={() => handleBlurChecking('text', 'emailError', state.email, setField)}
            inputValue={state.email}
            typeInput='email'
            setField={setField}
            field='email'
            error={state.emailError}
            label_title='Email :'
            placeholder='dangbinhtrieu123@gmail.com'
          />
          <CommonInput
            onblur={() => handleBlurChecking('text', 'phoneError', state.phone, setField)}
            inputValue={state.phone}
            typeInput='text'
            setField={setField}
            field='phone'
            error={state.phoneError}
            label_title='So dien thoai :'
            placeholder='+84 033 6148 613'
          />
          <CommonInput
            onblur={() => handleBlurChecking('text', 'addressError', state.address, setField)}
            inputValue={state.address}
            typeInput='text'
            setField={setField}
            field='address'
            error={state.addressError}
            label_title='Dia chi :'
            placeholder='K29/8 Tran Duc Thao, Hoa Cuong Nam, Hai Chau, Da Nang'
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

export default Contact;
