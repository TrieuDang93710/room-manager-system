import BreadCrumbCommon from '@/components/atoms/Breadcumb';
import TabsCompt from '@/components/molecules/Tab/tab';
import LessorCard from '@/components/organisms/FuncSystem/Card/lessor';
import RoomCardCommon from '@/components/organisms/FuncSystem/Card/room';
import CommentCompt from '@/components/organisms/FuncSystem/Comment/comment';
import FormComment from '@/components/organisms/FuncSystem/FormComment/form_comment';
import SliderCommon from '@/components/organisms/FuncSystem/Slider/slider';
import { Button } from '@/components/ui/button';
import CurrencyFormatted from '@/config/currency.config';
import flex from '@/config/flex.config';
import { listRoom } from '@/faker/data';
import { HomeOutlined, PlusOutlined, ReadOutlined } from '@ant-design/icons';
import {} from 'react';

interface LessorDetailPageProps {
  params: Promise<{ id: number }>;
  error?: boolean | false;
  type?: string | 'text';
}

const LessorDetailPage = async ({ params }: LessorDetailPageProps) => {
  const id = (await params).id;

  const breadcrumbs = [
    {
      url: '/',
      label: 'Homepage',
      prefixIcon: () => <HomeOutlined />
    },
    {
      url: `/system/room/${id}`,
      label: 'RoomDetail',
      prefixIcon: () => <ReadOutlined />
    }
  ];

  return (
    <div
      className={
        'w-full min-h-screen md:px-10 px-3 pt-20 z-10' +
        flex({ direction: 'col', justifyContent: 'start', alignItems: 'center' })
      }
    >
      <BreadCrumbCommon breadcrumbs={breadcrumbs} currentUrl='/' mode='dark' />
      <div className={'w-full lg:flex-row py-2 ' + flex({ direction: 'col', alignItems: 'start' })}>
        <div
          className={
            'w-full lg:w-[60%] p-2 sm:flex-row ' +
            flex({ alignItems: 'center', justifyContent: 'center', direction: 'col' })
          }
        >
          <div
            className={'w-[70%] h-[50vh] cursor-zoom-in'}
            style={{
              backgroundImage: `url('https://www.svgrepo.com/show/513695/broccoli.svg')`,
              backgroundPosition: 'center',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat'
            }}
          ></div>
          <div
            className={
              'sm:w-1/3 w-full sm:h-full h-1/4 gap-2 sm:flex-col ' +
              flex({ alignItems: 'center', justifyContent: 'center', direction: 'row' })
            }
          >
            <div
              className={'sm:w-36 sm:h-36 w-24 h-24 cursor-default'}
              style={{
                backgroundImage: `url('https://www.svgrepo.com/show/513695/broccoli.svg')`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
              }}
            ></div>
          </div>
        </div>
        <div
          className={
            'w-full lg:w-1/2 p-2 gap-2 dark:bg-[#ffffff1a] ' +
            flex({ alignItems: 'center', justifyContent: 'center', direction: 'col' })
          }
        >
          <h2 className='text-2xl md:text-3xl font-bold py-4 dark:text-green-500'>Lessor of Information</h2>
          <Button
            variant='outline'
            size='primary'
            className='w-1/5 text-xl mb-2 text-green-500 hover:text-green-500 dark:text-green-500 hover:shadow-sm bg-transparent border-green-500 dark:border-green-500 border-[2px] hover:shadow-green-500 active:border-slate-50 px-6'
          >
            <PlusOutlined className='text-green-500' />
            Save
          </Button>
          <div className='w-full'>
            <ul className={'w-full gap-2 ' + flex({ direction: 'col' })}>
              <li className={'w-full text-[18px] gap-2 p-2 ' + flex({})}>
                <strong className='dark:text-green-500'>Room of name: </strong>
                <span className='dark:text-slate-300'>Chung cu mini</span>
              </li>
              <li className={'w-full text-[18px] gap-2 p-2 ' + flex({})}>
                <strong className='dark:text-green-500'>Address: </strong>
                <span className='dark:text-slate-300 truncate'>Hoa Cuong Nam, Hai Chau, Da Nang, Viet Nam</span>
              </li>
              <li className={'w-full text-[18px] gap-2 p-2 ' + flex({})}>
                <strong className='dark:text-green-500'>Price: </strong>
                <span className='dark:text-slate-300'>{CurrencyFormatted({ value: 4500000, code: 'VND' })}</span>
              </li>
              <li className={'w-full text-[18px] gap-2 p-2 ' + flex({})}>
                <strong className='dark:text-green-500'>Status: </strong>
                <span className='dark:text-slate-300'>{false ? 'Rent' : 'Plank'}</span>
              </li>
              <li className={'w-full text-[18px] gap-2 p-2 ' + flex({})}>
                <strong className='dark:text-green-500'>Lessor: </strong>
                <span className='dark:text-slate-300'>Pham Le Van Cuong</span>
              </li>
            </ul>
            <div className='w-full justify-around flex sm:flex-row flex-col gap-3 py-2'>
              <Button
                variant='primary'
                size='primary'
                className='sm:w-1/2 w-full bg-green-500 shadow-sm shadow-slate-800 hover:bg-green-600 dark:border-[2px] dark:text-green-500 dark:border-green-500 dark:bg-transparent active:border-slate-50 px-6'
              >
                Contact with lessor
              </Button>
              <Button
                variant='primary'
                size='primary'
                className='sm:w-1/2 w-full bg-green-500 shadow-sm shadow-slate-800 hover:bg-green-600 dark:border-[2px] dark:text-green-500 dark:border-green-500 dark:bg-transparent active:border-slate-50 px-6'
              >
                Boot now
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full relative flex flex-col gap-3 px-2 py-2'>
        <h2 className='text-2xl text-start font-bold py-4'>Infrastructure</h2>
        <TabsCompt />
      </div>
      <div className='w-full relative flex flex-col gap-3 px-2 py-2'>
        <h2 className='text-2xl font-bold py-4'>Map</h2>
      </div>
      <div className='w-full relative flex flex-col gap-3 px-2 py-2'>
        <h2 className='text-2xl font-bold py-4'>Lessor</h2>
        <div className={'w-full gap-2 ' + flex({ alignItems: 'center', justifyContent: 'around' })}>
          <LessorCard />
          <FormComment />
        </div>
      </div>
      <div className='w-full relative flex flex-col gap-3 px-2 py-2'>
        <h2 className='text-2xl font-bold py-4'>Comments</h2>
        <CommentCompt />
        <p className='font-medium text-slate-800 line-clamp-2 text-[14px] dark:text-[#b4b4b4] dark:hover:text-[#ebebeb] cursor-default'>
          Please, login to write comment for post&apos; s owner.
        </p>
      </div>
      <div className='w-full relative flex flex-col gap-3 px-2 py-2'>
        <h2 className='text-2xl font-bold py-4'>Another ones</h2>
        <SliderCommon items={listRoom} Component={RoomCardCommon} />
      </div>
    </div>
  );
};

export default LessorDetailPage;
