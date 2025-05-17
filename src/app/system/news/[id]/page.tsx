/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-async-client-component */
/* eslint-disable react-hooks/rules-of-hooks */
'use client';
import BreadCrumbCommon from '@/components/atoms/Breadcumb';
import flex from '@/config/flex.config';
import useApiPublic from '@/hooks/useApiPublic';
import { FilterOutlined, HomeOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
interface NewsInfoPageProps {
  params: { id: number };
}

const NewsInfoPage = async ({ params }: NewsInfoPageProps) => {
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
          backgroundImage: `url(${newsItem.banner})`
        }}
      ></div>
    ) : (
      <div
        className='w-1/2 h-[20vh] bg-center bg-contain bg-no-repeat'
        style={{
          backgroundImage:
            "url('https://www.freeiconspng.com/thumbs/business-icon-png/corporate-icon-png-autocorrect-for-business-13.png')"
        }}
      ></div>
    );

  return (
    <div
      className={
        'w-full min-h-screen md:px-10 flex flex-col items-center px-3 pt-20 z-10' +
        flex({ direction: 'col', justifyContent: 'start', alignItems: 'center' })
      }
    >
      <div
        className='w-full h-[40vh] px-2 bg-center bg-cover bg-no-repeat flex flex-row items-center justify-start'
        style={{
          backgroundImage:
            "url('https://taggd.in/wp-content/uploads/2022/12/Job-Prospects-for-Freshers-in-Pharmaceutical-Industry-Banner.png')"
        }}
      >
        <BreadCrumbCommon breadcrumbs={breadcrumbs} currentUrl='/' mode='dark' />
      </div>
      <div className='lg:w-[90%] w-full flex md:flex-row flex-col items-start justify-around my-4 gap-3'>
        <div className='w-full rounded-md shadow-sm shadow-slate-600 flex flex-col justify-start items-center p-4 gap-4'>
          {bannerImage}
          <div className='w-[80%] flex flex-col items-start justify-start gap-3'>
            <p className='text-[16px] text-black font-normal leading-8'>
              <strong className=''>Thông tin liên hệ : </strong>
            </p>
            <p className='text-[16px] text-black font-normal leading-8'>
              <strong className='font-normal'>Người thực hiện : </strong>
              {newsItem!.information?.createBy}
            </p>
            <p className='text-[16px] text-black font-normal leading-8'>
              <strong className='font-normal'>Địa chỉ email : </strong>
              {newsItem!.information?.email}
            </p>
            <p className='text-[16px] text-black font-normal leading-8'>
              <strong className='font-normal'>Số điện thoại : </strong>
              {newsItem!.information?.phone}
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
