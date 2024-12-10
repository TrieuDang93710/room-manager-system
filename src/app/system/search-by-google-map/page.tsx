'use client';
import BreadCrumbCommon from '@/components/atoms/Breadcumb';
import CommonInput from '@/components/atoms/Input';
import GoogleMaps from '@/components/molecules/GoogleMap/google-map';
import GoogleMapsWrapper from '@/components/molecules/GoogleMap/google-map-wrapper';
import { LOCATIONS } from '@/components/molecules/GoogleMap/location';
import RoomCardCommon from '@/components/organisms/FuncSystem/Card/room';
import SliderCommon from '@/components/organisms/FuncSystem/Slider/slider';
import flex from '@/config/flex.config';
import { listRoom } from '@/faker/data';
import useCombinedState from '@/hooks/useCombinedState';
import { handleBlurChecking } from '@/lib/utils';
import { FileSearchOutlined, HomeOutlined } from '@ant-design/icons';

const GoogleMapsSearching = () => {
  const breadcrumbs = [
    {
      url: '/',
      label: 'Homepage',
      prefixIcon: () => <HomeOutlined />
    },
    {
      url: '/system/search-by-google-map',
      label: 'RoomDetail',
      prefixIcon: () => <FileSearchOutlined />
    }
  ];

  const [state, setField] = useCombinedState({
    email: '',
    // checking error field
    emailError: ''
  });
  return (
    <div
      className={
        'w-full min-h-screen md:px-10 px-3 pt-20  z-10' +
        flex({ direction: 'col', justifyContent: 'start', alignItems: 'center' })
      }
    >
      <BreadCrumbCommon breadcrumbs={breadcrumbs} currentUrl='/' mode='dark' />
      <form action='' className='w-full md:right-0.5 gap-3'>
        <div className={'w-full py-1 ' + flex({})}>
          <CommonInput
            onblur={() => handleBlurChecking('emailError', state.email, setField)}
            inputValue={state.email}
            typeInput='text'
            setField={setField}
            field='email'
            error={state.emailError}
            hidden={true}
            placeholder='Enter a address to get longitude and latitude'
          />
          <button
            className='w-1/5 m-auto bg-blue-600 dark:bg-[#0000] font-bold text-[13px] py-2 px-4 rounded-md text-[#fff] hover:bg-blue-500 dark:border-[1px] dark:border-[#fff] dark:hover:bg-blue-200 dark:hover:text-[#000] dark:text-white'
            type='submit'
          >
            SEARCHING
          </button>
        </div>
      </form>
      <div className='w-full relative flex flex-col gap-3 px-2 py-2'>
        <h2 className='text-2xl text-center font-bold py-4'>Address in Google Map</h2>
        <GoogleMapsWrapper>
          <GoogleMaps locations={LOCATIONS} />
        </GoogleMapsWrapper>
      </div>
      <div className='w-full relative flex flex-col gap-3 px-2'>
        <h2 className='text-2xl text-center font-bold py-4'>Recommendation</h2>
        <SliderCommon items={listRoom} Component={RoomCardCommon} />
      </div>
    </div>
  );
};

export default GoogleMapsSearching;
