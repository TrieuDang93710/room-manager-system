'use client';
import CommonInput from '@/components/atoms/Input';
import { useAuth } from '@/hooks/auth/useAuth';

const Contact = () => {
  const { user } = useAuth();

  return (
    <div className='w-full flex flex-col items-center justify-start py-2 px-4 gap-2'>
      <form className='w-1/2 flex flex-col items-start justify-start py-8 gap-4'>
        <div className='w-full flex flex-col items-start justify-start gap-2'>
          <CommonInput
            typeInput='email'
            field='email'
            label_title='Email :'
            placeholder={user && user!.email ? user!.email : 'None'}
          />
          <CommonInput
            typeInput='text'
            field='phone'
            label_title='So dien thoai :'
            placeholder={user && user!.phone ? user!.phone : 'None'}
          />
          <CommonInput
            typeInput='text'
            field='address'
            label_title='Dia chi :'
            placeholder={
              user && user.applicant
                ? user!.address.village +
                  ' - ' +
                  user!.address.district +
                  ' - ' +
                  user!.address.city +
                  ' - ' +
                  user!.address.national
                : 'Chưa cập nhật'
            }
          />
        </div>
      </form>
    </div>
  );
};

export default Contact;
