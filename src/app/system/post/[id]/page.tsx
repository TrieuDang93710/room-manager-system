/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import BreadCrumbCommon from '@/components/atoms/Breadcumb';
import PostCardRow from '@/components/organisms/system/Card/PostCardRow';
import flex from '@/config/flex.config';
import ExpiredPostChecking from '@/helpers/expired-check';
import useApiPublic from '@/hooks/useApiPublic';
import {
  ClockCircleOutlined,
  FilterOutlined,
  HeartOutlined,
  HomeOutlined,
  SlackSquareOutlined,
  SortAscendingOutlined,
  UsergroupAddOutlined
} from '@ant-design/icons';
import { useEffect, useState } from 'react';
import RenderContent from '../components/RenderContent';

interface PostDetailPageProps {
  params: { id: number };
}

function PostDetailPage({ params }: PostDetailPageProps) {
  const apiPublic = useApiPublic();
  const [postItem, setPostItem] = useState<any>(null);
  const [description, setDescription] = useState<string[]>([]);
  const [experience, setExperience] = useState<string[]>([]);
  console.log('res: ', params);

  const breadcrumbs = [
    {
      url: '/',
      label: 'Trang chủ',
      prefixIcon: () => <HomeOutlined />
    },
    {
      url: `/system/post/${params.id}`,
      label: `Thông tin chi tiết công việc`,
      prefixIcon: () => <FilterOutlined />
    }
  ];

  useEffect(() => {
    apiPublic
      .get(`post/${params.id}`)
      .then((res) => {
        setPostItem(res.data.data);
        setDescription(res.data.data.description.split('. '));
        setExperience(res.data.data.require.description.split('. '));
      })
      .catch((error) => {
        console.log('error: ', error);
      });
  }, [apiPublic, params.id]);

  console.log('postItem: ', postItem);
  console.log('description: ', description);

  const { days, expired } = ExpiredPostChecking(postItem && postItem!.createAt, postItem && postItem!.duration);

  return (
    <div
      className={
        'w-full min-h-screen md:px-10 flex flex-col items-center px-3 pt-20 z-10' +
        flex({ direction: 'col', justifyContent: 'start', alignItems: 'center' })
      }
    >
      <div
        className='w-full h-[20vh] px-2 bg-center bg-cover bg-no-repeat flex flex-row items-center justify-start'
        style={{
          backgroundImage:
            "url('https://taggd.in/wp-content/uploads/2022/12/Job-Prospects-for-Freshers-in-Pharmaceutical-Industry-Banner.png')"
        }}
      >
        <BreadCrumbCommon breadcrumbs={breadcrumbs} currentUrl='/' mode='dark' />
      </div>
      <div className='lg:w-[90%] w-full flex sm:flex-row flex-col items-start justify-around my-4 gap-1'>
        <div className='sm:w-[70%] w-full rounded-md shadow-sm shadow-slate-600 flex flex-col justify-start items-center p-4 gap-4'>
          <div className='w-full flex flex-col items-center justify-start p-2 gap-3'>
            {Array.from({ length: 1 }).map((_, index) => (
              <div
                key={index + 1}
                className='w-full border border-slate-300 rounded-sm hover:border-green-500 cursor-default flex flex-col items-start justify-start'
              >
                <div className='w-full flex flex-col items-start gap-4 p-2'>
                  <h3 className='text-[26px] text-black font-bold line-clamp-2'>{postItem && postItem!.title}</h3>
                  <div className='w-full flex flex-row justify-start gap-4'>
                    <div className='flex flex-row items-center justify-start gap-4'>
                      <SortAscendingOutlined className='text-white font-bold p-3 rounded-full bg-green-500' />
                      <p className='w-full flex flex-col items-start text-[16px] text-black text-start font-bold line-clamp-3 leading-6'>
                        <strong className='font-normal'>Muc luong : </strong>
                        <span>{postItem && !postItem.salary ? 'Thoa thuan' : postItem && !postItem.salary}</span>
                      </p>
                    </div>
                    <div className='flex flex-row items-center justify-start gap-4'>
                      <SortAscendingOutlined className='text-white font-bold p-3 rounded-full bg-green-500' />
                      <p className='w-full flex flex-col items-start text-[16px] text-black text-start font-bold line-clamp-3 leading-6'>
                        <strong className='font-normal'>Dia diem : </strong>
                        <span>{postItem && postItem!.company.work_place.address.city}</span>
                      </p>
                    </div>
                    <div className='flex flex-row items-center justify-start gap-4'>
                      <SortAscendingOutlined className='text-white font-bold p-3 rounded-full bg-green-500' />
                      <p className='w-full flex flex-col items-start text-[16px] text-black text-start font-bold line-clamp-3 leading-6'>
                        <strong className='font-normal'>Kinh nghiem : </strong>
                        <span>{postItem && postItem!.require.experience}</span>
                      </p>
                    </div>
                  </div>
                  <div className='w-full flex flex-col justify-between py-4 gap-4'>
                    <div className='sm:w-3/4 w-full flex flex-row justify-start items-center gap-8'>
                      <p className='text-[14px] text-slate-800 font-normal py-1 px-2 bg-slate-100 rounded-sm'>
                        <ClockCircleOutlined className='font-bold text-black mr-2' /> Han nop ho so :{' '}
                        <span className={`${expired < days && 'text-orange-600'}`}>
                          {expired < days ? 'Đã hết hạn ứng tuyển' : postItem && postItem.duration}
                        </span>
                      </p>
                    </div>
                    <div className='w-full flex gap-2'>
                      <button className='w-full px-2 py-2 rounded-md text-white text-[16px] font-bold active:shadow-slate-500 active:shadow-sm cursor-pointer bg-green-500 line-clamp-1'>
                        Ung tuyen ngay
                      </button>
                      <HeartOutlined className='border border-slate-500 hover:border-green-500 text-green-500 rounded-md font-medium cursor-pointer py-2 px-4' />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className='w-full flex flex-col items-start justify-start gap-3'>
            <RenderContent contents={description} title='Mô tả công việc' />
            <RenderContent contents={experience} title='Yêu cầu công việc' />
            <RenderContent contents={experience} title='Quyền lợi' />
            <RenderContent contents={experience} title='Kỹ năng' />

            <div className='w-full'>
              <strong className='text-[16px] text-black'>Thời gian làm việc :</strong>
              <ul className='list-disc px-4 py-3 flex flex-col gap-3'>
                <li className='text-[16px] text-black font-normal'>Từ thứ 2 đến thứ 6, thứ 7 và chủ nhật nghỉ</li>
              </ul>
            </div>
            <div className='w-full'>
              <strong className='text-[16px] text-black'>Cách thức ứng tuyển :</strong>
              <ul className='list-disc px-4 py-3 flex flex-col gap-3'>
                <li className='text-[16px] text-black font-normal'>
                  Ứng viên nộp hồ sơ trực tiếp hoặc trực tuyến bắng cách nhấn vào nút ứng tuyển bên dưới!
                </li>
              </ul>
            </div>
            <div className='w-full flex gap-2'>
              <button className='w-full px-2 py-2 rounded-md text-white text-[16px] font-bold active:shadow-slate-500 active:shadow-sm cursor-pointer bg-green-500 line-clamp-1'>
                Ứng tuyển ngay
              </button>
              <HeartOutlined className='border border-slate-500 hover:border-green-500 rounded-md text-green-500 font-medium cursor-pointer py-2 px-4' />
            </div>
            <p className='text-[20px] text-black font-bold py-8'>Viec lam lien quan :</p>
            <div className='w-full flex flex-col items-center justify-start p-2 gap-3'>
              {Array.from({ length: 3 }).map((_, index) => (
                <PostCardRow key={index} approved={true} />
              ))}
            </div>
          </div>
        </div>
        <div className='sm:w-[25%] w-full flex flex-col items-center justify-start py-4 px-2 gap-4'>
          <div className='w-full flex flex-col items-center justify-start rounded-md shadow-sm shadow-slate-600 px-2 py-4'>
            <div className='w-full flex flex-row items-center justify-start gap-3'>
              <div
                className='w-[20%] h-[10vh] bg-center bg-contain bg-no-repeat'
                style={{
                  backgroundImage:
                    "url('https://www.freeiconspng.com/thumbs/business-icon-png/corporate-icon-png-autocorrect-for-business-13.png')"
                }}
              ></div>
              <h3 className='text-black font-bold line-clamp-3'>{postItem && postItem!.company.title}</h3>
            </div>
            <p className='w-full text-[16px] text-black text-start font-bold line-clamp-2 leading-8'>
              <strong className='font-normal'>
                <UsergroupAddOutlined /> Quy mô :
              </strong>
              {postItem && postItem!.company.scale} nhân viên
            </p>
            <p className='w-full text-[16px] text-black text-start font-bold line-clamp-2 leading-8'>
              <strong className='font-normal'>
                <SlackSquareOutlined /> Lĩnh vực :
              </strong>
              {postItem && postItem!.type_of_post.title}
            </p>
            <p className='w-full text-[16px] text-black text-start font-bold line-clamp-2 leading-8'>
              <strong className='font-normal'>
                <HomeOutlined /> Địa điểm :
              </strong>
              {postItem && postItem!.company.work_place.address.city}
            </p>
          </div>
          <div className='w-full flex flex-col items-start justify-start rounded-md shadow-sm shadow-slate-600 gap-4 px-2 py-4'>
            <h3 className='font-bold text-[20px] text-black mb-4'>Thong tin chung</h3>
            <div className='w-full flex flex-row items-center justify-start gap-4'>
              <SortAscendingOutlined className='text-white font-bold p-3 rounded-full bg-green-500' />
              <p className='w-full flex flex-col items-start text-[16px] text-black text-start font-bold line-clamp-3 leading-6'>
                <strong className='font-normal'>Cấp bậc : </strong>
                <span>{postItem && postItem!.require.level}</span>
              </p>
            </div>
            <div className='w-full flex flex-row items-center justify-start gap-4'>
              <SortAscendingOutlined className='text-white font-bold p-3 rounded-full bg-green-500' />
              <p className='w-full flex flex-col items-start text-[16px] text-black text-start font-bold line-clamp-3 leading-6'>
                <strong className='font-normal'>Trình độ : </strong>
                <span>{postItem && postItem!.require.education}</span>
              </p>
            </div>
            <div className='w-full flex flex-row items-center justify-start gap-4'>
              <SortAscendingOutlined className='text-white font-bold p-3 rounded-full bg-green-500' />
              <p className='w-full flex flex-col items-start text-[16px] text-black text-start font-bold line-clamp-3 leading-6'>
                <strong className='font-normal'>Số luọng tuyển : </strong>
                <span>{postItem && postItem!.require.quantity} nguoi</span>
              </p>
            </div>
            <div className='w-full flex flex-row items-center justify-start gap-4'>
              <SortAscendingOutlined className='text-white font-bold p-3 rounded-full bg-green-500' />
              <p className='w-full flex flex-col items-start text-[16px] text-black text-start font-bold line-clamp-3 leading-6'>
                <strong className='font-normal'>Hình thức làm việc : </strong>
                <span>{postItem && postItem!.work_type}</span>
              </p>
            </div>
          </div>
          <button className='w-full border border-green-600 hover:bg-green-500 rounded-md active:shadow-md active:shadow-slate-300 text-green-600 hover:text-white text-[16px] font-bold px-2 py-3'>
            Nhan tin ngay
          </button>
        </div>
      </div>
    </div>
  );
}

export default PostDetailPage;
