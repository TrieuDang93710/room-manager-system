/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import BreadCrumbCommon from '@/components/atoms/Breadcumb';
import AddComponent from '@/components/molecules/AddComp';
import flex from '@/config/flex.config';
import { useApiSecure } from '@/hooks/useApiSecure';
import { FilterOutlined, HomeOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';

interface ApplicantInfoPageProps {
  params: { id: number };
}

const ApplicantInfoPage = ({ params }: ApplicantInfoPageProps) => {
  const id = params.id;
  const apiSecure = useApiSecure();
  const [itemDetail, setItemDetail] = useState<any>(null);

  const breadcrumbs = [
    {
      url: '/',
      label: 'Trang chủ',
      prefixIcon: () => <HomeOutlined />
    },
    {
      url: '/system/applicant',
      label: 'Ứng viên',
      prefixIcon: () => <FilterOutlined />
    },
    {
      url: `/system/applicant/${id}`,
      label: 'Thong tin ung viên',
      prefixIcon: () => <FilterOutlined />
    }
  ];

  useEffect(() => {
    apiSecure
      .get(`/resume/get-one/${Number(id)}`)
      .then((result) => {
        console.log('result: ', result.data.data);
        setItemDetail(result.data.data);
      })
      .catch((error) => {
        console.log('error: ', error);
      });
  }, [apiSecure, id]);

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
      <div className='sm:w-[80%] w-full flex sm:flex-row flex-col items-start justify-around my-4 px-2 gap-3'>
        <div className='sm:w-2/3 rounded-md shadow-sm shadow-slate-600 flex flex-col justify-start items-center p-4 gap-4'>
          <div
            className='w-1/2 h-[20vh] bg-center bg-contain bg-no-repeat'
            style={{
              backgroundImage: `url(${itemDetail && itemDetail!.image})`
            }}
          ></div>
          <div className='w-full flex flex-col items-start justify-start gap-3'>
            <p className='text-[16px] text-black font-normal line-clamp-3 leading-8 px-2'>
              <strong className=''>Mục tiêu : </strong>
              {itemDetail && itemDetail!.target}
            </p>
            <AddComponent title='Giáo dục'>
              <div className='w-full flex flex-col items-start justify-start gap-4'>
                {itemDetail &&
                  itemDetail!.education.map((item: any, index: any) => (
                    <div key={index} className='w-1/2 flex flex-row items-center justify-between'>
                      <h3 className='w-[70%] text-black dark:text-white text-[14px] font-normal line-clamp-2'>
                        {item.title}
                      </h3>
                      <p className='text-black dark:text-white text-[13px] font-normal'>{item.year}</p>
                    </div>
                  ))}
              </div>
            </AddComponent>
            <AddComponent title='Kinh nghiệm'>
              <div className='w-full flex flex-col items-start justify-start gap-4'>
                {itemDetail &&
                  itemDetail.experiences.map((item: any, index: any) => (
                    <div key={index + 1} className='w-full flex flex-col items-start justify-start gap-4 p-2'>
                      <div className='w-full flex flex-row items-center justify-between'>
                        <div className='w-1/3 flex flex-col items-start justify-center gap-2'>
                          <h3 className='text-black dark:text-white text-[14px] font-bold line-clamp-2'>
                            {item.title}
                          </h3>
                          <p className='text-black dark:text-white text-[12px] font-normal line-clamp-1'>
                            {item.company}
                          </p>
                        </div>
                        <p className='text-black dark:text-white text-[12px] font-medium'>{item.year}</p>
                      </div>
                      <ul className='list-disc flex flex-col items-start justify-start gap-2 px-8'>
                        {item.detail.split('; ').map((text: any, i: any) => (
                          <li key={i} className='text-black dark:text-white text-[13px] font-normal line-clamp-2'>
                            {text}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
              </div>
            </AddComponent>
            <AddComponent title='Chứng chỉ'>
              <div className='w-full flex flex-col items-start justify-start gap-4'>
                {itemDetail &&
                  itemDetail!.certificates.map((item: any, index: any) => (
                    <div key={index} className='w-1/2 flex flex-row items-center justify-between'>
                      <h3 className='w-[70%] text-black dark:text-white text-[14px] font-normal line-clamp-2'>
                        {item.title}
                      </h3>
                      <p className='text-black dark:text-white text-[13px] font-normal'>{item.year}</p>
                    </div>
                  ))}
              </div>
            </AddComponent>
            <AddComponent title='Giải thưởng'>
              <div className='w-full flex flex-col items-start justify-start gap-4'>
                {itemDetail &&
                  itemDetail!.awards.map((item: any, index: any) => (
                    <div key={index} className='w-1/2 flex flex-row items-center justify-between'>
                      <h3 className='w-[70%] text-black dark:text-white text-[14px] font-normal line-clamp-2'>
                        {item.title}
                      </h3>
                      <p className='text-black dark:text-white text-[13px] font-normal'>{item.year}</p>
                    </div>
                  ))}
              </div>
            </AddComponent>
            <AddComponent title='Kỹ năng'>
              <ul className='list-disc list-inside'>
                {itemDetail &&
                  itemDetail!.skills!.split('; ').map((item: any, index: any) => (
                    <li key={index} className='text-black dark:text-white text-[14px] font-normal py-2'>
                      {item}
                    </li>
                  ))}
              </ul>
            </AddComponent>
            <AddComponent title='Ngôn ngữ'>
              <ul className='list-disc list-inside'>
                {itemDetail &&
                  itemDetail!.languages!.split('; ').map((item: any, index: any) => (
                    <li key={index} className='text-black dark:text-white text-[14px] font-normal py-2'>
                      {item}
                    </li>
                  ))}
              </ul>
            </AddComponent>
          </div>
        </div>
        <div className='sm:w-1/3 w-full flex flex-col items-center justify-start py-4 px-2 gap-4'>
          <div className='w-full flex flex-col items-center justify-start rounded-md shadow-sm shadow-slate-600 px-2 py-4'>
            <h3 className='font-bold text-[20px] text-black mb-4'>Thông tin chung</h3>
            <p className='w-full text-[16px] text-black text-start font-normal line-clamp-3 leading-8'>
              <strong>Họ và tên : </strong>
              {itemDetail && itemDetail!.applicant && itemDetail!.applicant.user.username}
            </p>
            <p className='w-full text-[16px] text-black text-start font-normal line-clamp-3 leading-8'>
              <strong>Ngàu sinh : </strong>
              {itemDetail && itemDetail!.applicant && itemDetail!.applicant.user.date_of_birth}
            </p>
            <p className='w-full text-[16px] text-black text-start font-normal line-clamp-3 leading-8'>
              <strong>Ngành nghề hiện tại : </strong>
              {itemDetail && itemDetail!.level}
            </p>
          </div>
          <div className='w-full flex flex-col items-center justify-start rounded-md shadow-sm shadow-slate-600 px-2 py-4'>
            <h3 className='font-bold text-[20px] text-black mb-4'>Lien he</h3>
            <p className='w-full text-[16px] text-black text-start font-normal line-clamp-3 leading-8'>
              <strong>Địa chỉ : </strong>
              {itemDetail && itemDetail!.applicant && itemDetail!.applicant.user.address.city}
            </p>
            <p className='w-full text-[16px] text-black text-start font-normal line-clamp-2 leading-8 break-words'>
              <strong>Email : </strong>
              {itemDetail && itemDetail!.applicant && itemDetail!.applicant.user.email}
            </p>
            <p className='w-full text-[16px] text-black text-start font-normal line-clamp-3 leading-8'>
              <strong>SỐ điện thoại : </strong>
              {itemDetail && itemDetail!.applicant && itemDetail!.applicant.user.phone}
            </p>
          </div>
          <button className='w-full border border-blue-600 hover:bg-blue-600 rounded-md active:shadow-md active:shadow-slate-300 text-blue-600 hover:text-white text-[16px] font-bold px-2 py-3'>
            Nhắn tin ngay
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApplicantInfoPage;
