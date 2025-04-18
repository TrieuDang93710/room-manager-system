/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import BreadCrumbCommon from '@/components/atoms/Breadcumb';
import PostCardRow from '@/components/organisms/system/Card/PostCardRow';
import flex from '@/config/flex.config';
import ExpiredPostChecking from '@/helpers/expired-check';
import useApiPublic from '@/hooks/useApiPublic';
import {
  FilterOutlined,
  HeartOutlined,
  HomeOutlined
} from '@ant-design/icons';
import { useEffect, useState } from 'react';
import RenderContent from '../components/RenderContent';
import usePost from '@/hooks/usePost';
import AddApply from '../components/AddApply';
import BusinessInformation from '../components/Business';
import RequireInformation from '../components/Require';
import ApplyCard from '../components/ApplyCard';

interface PostDetailPageProps {
  params: { id: number };
}

function PostDetailPage({ params }: PostDetailPageProps) {
  const apiPublic = useApiPublic();
  const { posts } = usePost();
  const [postItem, setPostItem] = useState<any>(null);
  const [description, setDescription] = useState<string[]>([]);
  const [experience, setExperience] = useState<string[]>([]);
  const [benefit, setBenefit] = useState<string[]>([]);
  // const [skill, setSkill] = useState<string[]>([]);
  const [openAddApply, setOpenAddApply] = useState<boolean>(false);

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
        setDescription(res.data.data.description.split('; '));
        setExperience(res.data.data.require.description.split('; '));
        setBenefit(res.data.data.benefit.split('; '));
        // setSkill(res.data.data.benefit.split('; '))
      })
      .catch((error) => {
        console.log('error: ', error);
      });
  }, [apiPublic, params.id]);

  const { days, expired } = ExpiredPostChecking(postItem && postItem!.createAt, postItem && postItem!.duration);

  const closeAddApplyHandler = () => {
    setOpenAddApply(!openAddApply);
  };

  return (
    <div
      className={
        'relative w-full min-h-screen md:px-10 flex flex-col items-center px-3 pt-20 z-10' +
        flex({ direction: 'col', justifyContent: 'start', alignItems: 'center' })
      }
    >
      <div
        className='w-full h-[20vh] dark:rounded-sm px-2 bg-center bg-cover bg-no-repeat flex flex-row items-center justify-start'
        style={{
          backgroundImage:
            "url('https://taggd.in/wp-content/uploads/2022/12/Job-Prospects-for-Freshers-in-Pharmaceutical-Industry-Banner.png')"
        }}
      >
        <BreadCrumbCommon breadcrumbs={breadcrumbs} currentUrl='/' mode='dark' />
      </div>
      <div className='lg:w-[90%] w-full flex sm:flex-row flex-col items-start justify-around my-4 gap-1'>
        <div className='sm:w-[70%] w-full rounded-md shadow-sm shadow-slate-600 dark:shadow-md dark:shadow-blue-600 flex flex-col justify-start items-center p-4 gap-4'>
          <ApplyCard postItem={postItem} onClick={closeAddApplyHandler} days={days} expired={expired} />
          <div className='w-full flex flex-col items-start justify-start gap-3'>
            <RenderContent contents={description} title='Mô tả công việc' />
            <RenderContent contents={experience} title='Yêu cầu công việc' />
            <RenderContent contents={benefit} title='Quyền lợi' />
            <RenderContent contents={experience} title='Kỹ năng' />

            <div className='w-full'>
              <strong className='text-[16px] text-black dark:text-blue-600'>Thời gian làm việc :</strong>
              <ul className='list-disc px-4 py-3 flex flex-col gap-3'>
                <li className='text-[16px] text-black dark:text-white font-normal'>
                  Từ thứ 2 đến thứ 6, thứ 7 và chủ nhật nghỉ
                </li>
              </ul>
            </div>
            <div className='w-full'>
              <strong className='text-[16px] text-black dark:text-blue-600'>Cách thức ứng tuyển :</strong>
              <ul className='list-disc px-4 py-3 flex flex-col gap-3'>
                <li className='text-[16px] text-black dark:text-white font-normal'>
                  Ứng viên nộp hồ sơ trực tiếp hoặc trực tuyến bắng cách nhấn vào nút ứng tuyển bên dưới!
                </li>
              </ul>
            </div>
            <div className='w-full flex gap-2'>
              <button
                onClick={closeAddApplyHandler}
                className='w-full px-2 py-2 rounded-sm text-white text-[16px] font-bold active:shadow-blue-500 active:shadow-sm cursor-pointer bg-blue-500 line-clamp-1'
              >
                Ung tuyen ngay
              </button>
              <HeartOutlined className='border border-blue-600 hover:border-blue-500 text-blue-600 rounded-md font-medium cursor-pointer py-2 px-4' />
            </div>
            <p className='text-[20px] text-black dark:text-blue-600 font-bold py-8'>Việc làm liên quan :</p>
            <div className='w-full flex flex-col items-center justify-start p-2 gap-3'>
              {posts.map((item: any, index: any) => (
                <PostCardRow key={index} postItem={item} applied='not applied' />
              ))}
            </div>
          </div>
        </div>
        <div className='sm:w-[25%] w-full flex flex-col items-center justify-start py-4 px-2 gap-4'>
          <BusinessInformation postItem={postItem} />
          <RequireInformation postItem={postItem} />
          <button className='w-full border border-blue-600 hover:bg-blue-500 rounded-md active:shadow-md active:shadow-slate-300 text-blue-600 hover:text-white text-[16px] font-bold px-2 py-3'>
            Nhan tin ngay
          </button>
        </div>
      </div>
      <AddApply openAddApply={openAddApply} setOpenAddApply={setOpenAddApply} onClick={closeAddApplyHandler} />
    </div>
  );
}

export default PostDetailPage;
