/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import BreadCrumbCommon from '@/components/atoms/Breadcumb';
import flex from '@/config/flex.config';
import useApiPublic from '@/hooks/useApiPublic';
import { FilterOutlined, HomeOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';

import banner from '@/public/images/search_banner.jpg';

interface NewsInfoPageProps {
  params: { id: number };
}

// export async function generateStaticParams() {
//   const res = await fetch('https://api.yourservice.com/endpoint');
//   const data = await res.json();

//   const results = data.result;

//   return results.map((item: { id: { toString: () => any; }; }) => ({ id: item.id.toString() }));
// }

const NewsInfoPage = ({ params }: NewsInfoPageProps) => {
  const apiPublic = useApiPublic();
  const [newsItem, setNewsItem] = useState<any>(null);

  const breadcrumbs = [
    {
      url: '/',
      label: 'Trang chủ',
      prefixIcon: () => <HomeOutlined />
    },
    {
      url: '/system/news',
      label: 'Tin tuc',
      prefixIcon: () => <FilterOutlined />
    },
    {
      url: `/system/news/${params.id}`,
      label: 'Thong tin chi tiet',
      prefixIcon: () => <FilterOutlined />
    }
  ];

  useEffect(() => {
    apiPublic
      .get(`/news/${Number(params.id)}`)
      .then((result) => {
        console.log('result: ', result.data.data);
        setNewsItem(result.data.data);
      })
      .catch((error) => {
        console.log('error: ', error);
      });
  }, [apiPublic, params.id]);

  const listItem =
    newsItem &&
    newsItem.contents.split('; ').map((item: any, index: any) => (
      <li key={index} className='text-[16px] text-black font-normal leading-8 py-4'>
        {item}
      </li>
    ));

  const listImage =
    newsItem &&
    newsItem.image.map((item: string, idx: any) => (
      // <Image key={idx} alt={`${item}_${idx}`} src={item} width={'100'} height={'100'} />
      <img key={idx} alt={`${item}_${idx}`} src={item} className='w-full py-4' />
    ));

  const bannerImage =
    newsItem && newsItem.banner ? (
      <div
        className='w-1/2 h-[20vh] bg-center bg-contain bg-no-repeat'
        style={{
          backgroundImage: `url(${banner.src})`
        }}
      ></div>
    ) : (
      <div
        className='w-1/2 h-[20vh] bg-center bg-contain bg-no-repeat'
        style={{
          backgroundImage: `url(${banner.src})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>
    );

  return (
    <div
      className={
        'w-full min-h-screen md:px-10 flex flex-col items-center px-3 z-10' +
        flex({ direction: 'col', justifyContent: 'start', alignItems: 'center' })
      }
    >
      <div
        className='absolute top-16 w-full h-[40vh] px-2 bg-center bg-cover bg-no-repeat flex flex-row items-center justify-start'
        style={{
          backgroundImage: `url(${banner.src})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <BreadCrumbCommon breadcrumbs={breadcrumbs} currentUrl='/' mode='dark' />
      </div>
      <div className='lg:w-[90%] w-full flex md:flex-row flex-col items-start justify-around my-4 pt-[25%] gap-3'>
        <div className='w-full rounded-md shadow-sm shadow-slate-600 flex flex-col justify-start items-center p-4 gap-4'>
          {bannerImage}
          <div className='w-[80%] flex flex-col items-start justify-start gap-3'>
            <p className='text-[16px] text-black font-normal leading-8'>
              <strong className=''>Thông tin liên hệ : </strong>
            </p>
            <p className='text-[16px] text-black font-normal leading-8'>
              <strong className='font-normal'>Người thực hiện : </strong>
              {newsItem && newsItem!.information?.createBy}
            </p>
            <p className='text-[16px] text-black font-normal leading-8'>
              <strong className='font-normal'>Địa chỉ email : </strong>
              {newsItem && newsItem!.information?.email}
            </p>
            <p className='text-[16px] text-black font-normal leading-8'>
              <strong className='font-normal'>Số điện thoại : </strong>
              {newsItem && newsItem!.information?.phone}
            </p>
            <ul className='list-disc list-inside'>{listItem}</ul>
            {listImage}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsInfoPage;
