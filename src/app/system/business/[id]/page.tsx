/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-async-client-component */
/* eslint-disable react-hooks/rules-of-hooks */
'use client';
import BreadCrumbCommon from '@/components/atoms/Breadcumb';
import PostCardRow from '@/components/organisms/system/Card/PostCardRow';
import flex from '@/config/flex.config';
import NotificationCustom from '@/helpers/notify';
import useApiPublic from '@/hooks/useApiPublic';
import { useApiSecure } from '@/hooks/useApiSecure';
import { FilterOutlined, HomeOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';

interface BusinessInfoPageProps {
  params: { id: number };
}

const BusinessInfoPage = ({ params }: BusinessInfoPageProps) => {
  const id = params.id;
  const apiPublic = useApiPublic();
  const apiSecure = useApiSecure();
  const [itemDetail, setItemDetail] = useState<any>(null);
  // const [follows, setFollows] = useState<any[]>([]);
  // const [followed, setFollowed] = useState<boolean>(false);

  const breadcrumbs = [
    {
      url: '/',
      label: 'Trang chủ',
      prefixIcon: () => <HomeOutlined />
    },
    {
      url: '/system/business',
      label: 'Doanh nghiep',
      prefixIcon: () => <FilterOutlined />
    },
    {
      url: `/system/business/${id}`,
      label: 'Thong tin danh nghiep',
      prefixIcon: () => <FilterOutlined />
    }
  ];

  useEffect(() => {
    apiPublic
      .get(`/companies/${Number(id)}`)
      .then((result) => {
        console.log('result: ', result.data.data);
        setItemDetail(result.data.data);
      })
      .catch((error) => {
        console.log('error: ', error);
      });
  }, [apiPublic, id]);

  // useEffect(() => {
  //   const followChecking = follows.some((item: any) => item.id === Number(id));

  //   if (followChecking) {
  //     setFollowed(!followed);
  //   }
  // }, [followed, follows, id]);

  const handleFollow = async () => {
    await apiSecure
      .patch(`/applicant/follow/${Number(params.id)}`)
      .then(() => {
        NotificationCustom('success', 'Đã theo dõi');
      })
      .catch((error) => {
        NotificationCustom('error', error.message);
      });

    // await apiSecure
    //   .get(`/applicant/${user && user.applicant.id}`)
    //   .then((result) => {
    //     setFollows(result.data.data.companies);
    //   })
    //   .catch((error) => {
    //     console.log('error: ', error);
    //   });
  };

  return (
    <div
      className={
        'w-full min-h-screen md:px-10 flex flex-col items-center px-3 pt-20 z-10 ' +
        flex({ direction: 'col', justifyContent: 'start', alignItems: 'center' })
      }
    >
      <div className='sm:w-[80%] w-full flex flex-row items-center justify-start px-2'>
        <BreadCrumbCommon breadcrumbs={breadcrumbs} currentUrl='/' mode='dark' />
      </div>
      <div className='sm:w-[80%] w-full flex md:flex-row flex-col items-start justify-around my-4 px-2 gap-3'>
        <div className='md::w-2/3 w-full rounded-md shadow-sm shadow-slate-600 flex flex-col justify-start items-center p-4 gap-4'>
          <div
            className='w-1/2 h-[20vh] bg-center bg-contain bg-no-repeat'
            style={{
              backgroundImage: `url(${itemDetail && itemDetail!.logo})`
            }}
          ></div>
          <div className='w-full flex flex-col items-start justify-start gap-3'>
            <p className='text-[16px] text-black font-normal leading-8'>
              <strong className=''>Gioi thieu doanh nghiep : </strong> Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Officia, placeat fugit distinctio ipsum eveniet reprehenderit alias. Numquam quae
              consequatur enim nobis commodi iste cupiditate non. Minus cumque corporis sunt amet.
            </p>
            <p className='text-[16px] text-black font-normal leading-8'>
              <strong className=''>Kinh nghiem : </strong> Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Officia, placeat fugit distinctio ipsum eveniet reprehenderit alias. Numquam quae consequatur enim nobis
              commodi iste cupiditate non. Minus cumque corporis sunt amet.
            </p>
            <p className='text-[16px] text-black font-normal leading-8'>
              <strong className=''>Tuyen dung : </strong>
            </p>
            <div className='w-full flex flex-col items-center justify-start gap-3'>
              {Array.from({ length: 3 }).map((_, index) => (
                <PostCardRow key={index} />
              ))}
            </div>
          </div>
        </div>
        <div className='md:w-1/3 w-full flex flex-col items-center justify-start py-4 px-2 gap-4'>
          <button
            onClick={handleFollow}
            className='w-full border border-blue-600 hover:bg-blue-600 rounded-md active:shadow-md active:shadow-slate-300 text-blue-600 hover:text-white text-[16px] font-bold px-2 py-3'
          >
            {/* {followed ? 'Đang theo dõi' : 'Theo dõi công ty'} */}
            Theo dõi
          </button>
          <div className='w-full flex flex-col items-center justify-start rounded-md shadow-sm shadow-slate-600 px-2 py-4'>
            <h3 className='font-bold text-[20px] text-black mb-4'>Lien he</h3>
            <p className='w-full flex flex-col items-start text-[16px] text-black text-start font-normal line-clamp-3 leading-8'>
              <strong>Dia chi doanh nghiep : </strong>
              <span>K29/8 Tran Duc Thao</span>
            </p>
            <p className='w-full text-[16px] text-black text-start font-normal line-clamp-3 leading-8'>
              <strong>So dien thoai : </strong>0336148613
            </p>
            <hr className='w-full border border-slate-400 my-2' />
            <p className='w-full flex flex-col items-start text-[16px] text-black text-start font-normal line-clamp-3 leading-8'>
              <strong>Ban do : </strong>
              <span>K29/8 Tran Duc Thao</span>
            </p>
          </div>
          <button className='w-full border border-blue-600 hover:bg-blue-600 rounded-md active:shadow-md active:shadow-slate-300 text-blue-600 hover:text-white text-[16px] font-bold px-2 py-3'>
            Nhắn tin
          </button>
        </div>
      </div>
    </div>
  );
};

export default BusinessInfoPage;
