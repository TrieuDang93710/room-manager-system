'use client';
import useCombinedState from '@/hooks/useCombinedState';

const ProfilePage = () => {
  const [state, setField] = useCombinedState({
    email: '',
    phone: '',
    fullName: '',
    address: '',
    avatar: '',
    social: '',
    emailError: '',
    phoneError: '',
    fullNameError: '',
    addressError: '',
    avatarError: '',
    socialError: ''
  });

  return (
    <div className='relative w-full h-screen bg-[#f7f7f7] dark:bg-[#242424] flex flex-col items-end gap-6 snap-y pt-20 md:px-3'>
      <div className='w-full border border-green-500 h-fit py-3 px-3 flex-col justify-center md:gap-3 gap-y-2'>
        <div className='flex sm:flex-row flex-col sm:items-center sm:justify-around items-start justify-start gap-1'>
          <h3 className='text-[16px] text-black font-bold hover:text-blue-500 hover:underline-offset-1 cursor-default px-2 py-1'>
            Thong tin chung
          </h3>
          <h3 className='text-[16px] text-black font-bold hover:text-blue-500 hover:underline-offset-1 cursor-default px-2 py-1'>
            Thong tin lien he
          </h3>
          <h3 className='text-[16px] text-black font-bold hover:text-blue-500 hover:underline-offset-1 cursor-default px-2 py-1'>
            Cai dat tai khoan
          </h3>
        </div>
        <div className='w-full h-[80vh] border border-green-500 flex flex-col justify-start items-center'></div>
        {/* <div className='absolute md:right-5 right-0 bg-[#ffffff] dark:bg-[#0a0a0a] md:w-[80%] w-full h-[70%] p-3 rounded-md'>
          <form action='' className='absolute w-full h-full md:right-0.5'>
            <div className='w-full py-1 grid grid-cols-2 gap-2 msm:flex-col'>
              <CommonInput
                onblur={() => handleBlurChecking('text', 'emailError', state.email, setField)}
                inputValue={state.email}
                typeInput='text'
                setField={setField}
                field='email'
                error={state.emailError}
                label_title='Contract of email'
              />
              <CommonInput
                onblur={() => handleBlurChecking('text', 'phoneError', state.phone, setField)}
                inputValue={state.phone}
                typeInput='text'
                setField={setField}
                field='phone'
                error={state.phoneError}
                label_title='phone'
              />
              <CommonInput
                onblur={() => handleBlurChecking('text', 'fullNameError', state.fullName, setField)}
                inputValue={state.fullName}
                typeInput='text'
                setField={setField}
                field='fullName'
                error={state.fullNameError}
                label_title='Full Name'
              />
            </div>
            <CommonInput
              onblur={() => handleBlurChecking('text', 'avatarError', state.avatar, setField)}
              inputValue={state.avatar}
              typeInput='file'
              setField={setField}
              field='avatar'
              error={state.avatarError}
              label_title='Avatar File'
            />
            <CommonInput
              onblur={() => handleBlurChecking('text', 'socialError', state.social, setField)}
              inputValue={state.social}
              typeInput='text'
              setField={setField}
              field='social'
              error={state.socialError}
              label_title='Social'
            />
            <button
              className='absolute left-2 bottom-8 bg-blue-600 dark:bg-[#0000] font-bold text-[13px] py-2 px-4 rounded-md text-[#fff] hover:bg-blue-500 dark:border-[1px] dark:border-[#fff] dark:hover:bg-blue-200 dark:hover:text-[#000] dark:text-white'
              type='submit'
            >
              SAVE
            </button>
          </form>
        </div> */}
      </div>
    </div>
  );
};

export default ProfilePage;
