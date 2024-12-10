import BreadCrumbCommon from '@/components/atoms/Breadcumb';
import TabsCompt from '@/components/molecules/Tab/tab';
import LessorCard from '@/components/organisms/FuncSystem/Card/lessor';
import RoomCardCommon from '@/components/organisms/FuncSystem/Card/room';
import FormComment from '@/components/organisms/FuncSystem/FormComment/form_comment';
import SliderCommon from '@/components/organisms/FuncSystem/Slider/slider';
import { Button } from '@/components/ui/button';
import flex from '@/config/flex.config';
import { listRoom } from '@/faker/data';
import { HomeOutlined, PlusOutlined, ReadOutlined } from '@ant-design/icons';
import {} from 'react';

interface LessorDetailPageProps {
  params: Promise<{ slug: string }>;
  error?: boolean | false;
  type?: string | 'text';
}

const LessorDetailPage = async ({ params }: LessorDetailPageProps) => {
  const slug = (await params).slug;

  const breadcrumbs = [
    {
      url: '/',
      label: 'Home-page',
      prefixIcon: () => <HomeOutlined />
    },
    {
      url: `/system/lessor-detail-page/${slug}`,
      label: `Lessor-detail-${slug}`,
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
      <div className={'w-full py-2 ' + flex({ direction: 'col', alignItems: 'center' })}>
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
                <strong className='dark:text-green-500'>Fullname: </strong>
                <span className='dark:text-slate-300'>Pham Le Van Cong</span>
              </li>
              <li className={'w-full text-[18px] gap-2 p-2 ' + flex({})}>
                <strong className='dark:text-green-500'>Address: </strong>
                <span className='dark:text-slate-300 truncate'>Hoa Cuong Nam, Hai Chau, Da Nang, Viet Nam</span>
              </li>
              <li className={'w-full text-[18px] gap-2 p-2 ' + flex({})}>
                <strong className='dark:text-green-500'>Phone: </strong>
                <span className='dark:text-slate-300'>+84 - 905 454 143</span>
              </li>
              <li className={'w-full text-[18px] gap-2 p-2 ' + flex({})}>
                <strong className='dark:text-green-500'>Number of Room: </strong>
                <span className='dark:text-slate-300'>15</span>
              </li>
              <li className={'w-full text-[18px] gap-2 p-2 ' + flex({})}>
                <strong className='dark:text-green-500'>Rent: </strong>
                <span className='dark:text-slate-300'>5</span>
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
        <h2 className='text-2xl text-center font-bold py-4'>Some Photos and Videos of our Room</h2>
        <TabsCompt />
      </div>
      <div className='w-full relative flex flex-col gap-3 px-2 py-2'>
        <h2 className='text-2xl text-center font-bold py-4'>Contact with Lessor</h2>
        <div className={'w-full gap-2 ' + flex({ alignItems: 'center', justifyContent: 'around' })}>
          <LessorCard />
          <FormComment />
        </div>
      </div>
      <div className='w-full relative flex flex-col gap-3 px-2 py-2'>
        <h2 className='text-2xl text-center font-bold py-4'>Our Room</h2>
        <SliderCommon items={listRoom} Component={RoomCardCommon} />
      </div>
    </div>
  );
};

export default LessorDetailPage;
