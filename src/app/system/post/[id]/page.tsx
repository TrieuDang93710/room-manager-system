/* eslint-disable react-hooks/rules-of-hooks */
'use client';
import BreadCrumbCommon from '@/components/atoms/Breadcumb';
import PostCardRow from '@/components/organisms/FuncSystem/Card/PostCardRow';
import flex from '@/config/flex.config';
import { listRoom } from '@/faker/data';
import {
  ClockCircleOutlined,
  FieldTimeOutlined,
  FilterOutlined,
  HeartOutlined,
  HomeOutlined,
  MoneyCollectOutlined,
  SlackSquareOutlined,
  SortAscendingOutlined,
  UsergroupAddOutlined
} from '@ant-design/icons';
import { useState } from 'react';

interface PostPageProps {
  params: Promise<{ id: number }>;
}

const PostPage = ({ params }: PostPageProps) => {
  const id = params.id;
  console.log('id: ', id);
  const [filteredItems] = useState(listRoom);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(2);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  console.log('currentItems: ', currentItems, '\n', 'paginate: ', paginate);

  const breadcrumbs = [
    {
      url: '/',
      label: 'Trang chủ',
      prefixIcon: () => <HomeOutlined />
    },
    // {
    //   url: '/system/applicant',
    //   label: 'Ứng viên',
    //   prefixIcon: () => <FilterOutlined />
    // },
    {
      url: `/system/post/${id}`,
      label: 'Thong tin bai viet chi tiet',
      prefixIcon: () => <FilterOutlined />
    }
  ];

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
                  <h3 className='text-[26px] text-black font-bold line-clamp-2'>Nhan vien phuc vu</h3>
                  <div className='w-full flex flex-row justify-start gap-4'>
                    <div className='flex flex-row items-center justify-start gap-4'>
                      <SortAscendingOutlined className='text-white font-bold p-3 rounded-full bg-green-500' />
                      <p className='w-full flex flex-col items-start text-[16px] text-black text-start font-bold line-clamp-3 leading-6'>
                        <strong className='font-normal'>Muc luong : </strong>
                        <span>Thoa thuan</span>
                      </p>
                    </div>
                    <div className='flex flex-row items-center justify-start gap-4'>
                      <SortAscendingOutlined className='text-white font-bold p-3 rounded-full bg-green-500' />
                      <p className='w-full flex flex-col items-start text-[16px] text-black text-start font-bold line-clamp-3 leading-6'>
                        <strong className='font-normal'>Dia diem : </strong>
                        <span>Da Nang</span>
                      </p>
                    </div>
                    <div className='flex flex-row items-center justify-start gap-4'>
                      <SortAscendingOutlined className='text-white font-bold p-3 rounded-full bg-green-500' />
                      <p className='w-full flex flex-col items-start text-[16px] text-black text-start font-bold line-clamp-3 leading-6'>
                        <strong className='font-normal'>Kinh nghiem : </strong>
                        <span>Khong kinh nghiem</span>
                      </p>
                    </div>
                  </div>
                  <div className='w-full flex flex-col justify-between py-4 gap-4'>
                    <div className='sm:w-3/4 w-full flex flex-row justify-start items-center gap-8'>
                      <p className='text-[14px] text-slate-800 font-normal py-1 px-2 bg-slate-100 rounded-sm'>
                        <ClockCircleOutlined className='font-bold text-black mr-2' /> Han nop ho so : 13/03/2025
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
            <p className='text-[16px] text-black font-normal leading-8'>
              <strong className=''>Mo ta cong viec : </strong> Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Officia, placeat fugit distinctio ipsum eveniet reprehenderit alias. Numquam quae consequatur enim nobis
              commodi iste cupiditate non. Minus cumque corporis sunt amet. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Dolorum rem necessitatibus possimus beatae enim adipisci, voluptates dolore neque iste
              vel quaerat dicta maxime saepe! Sequi modi inventore magni fuga illo.
            </p>
            <p className='text-[16px] text-black font-normal leading-8'>
              <strong className=''>Yeu cau ung vien : </strong> Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Officia, placeat fugit distinctio ipsum eveniet reprehenderit alias. Numquam quae consequatur enim
              nobis commodi iste cupiditate non. Minus cumque corporis sunt amet. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Eum, explicabo? Cupiditate iusto sit, molestiae sequi consequuntur voluptatem culpa aut
              veritatis vel blanditiis quo perspiciatis, assumenda deleniti perferendis molestias! Labore, nulla!
            </p>
            <div className='w-full'>
              <strong className='text-[16px] text-black'>Quyen loi : </strong>
              <ul className='list-disc px-4 py-3 flex flex-col gap-3'>
                <li className='text-[16px] text-black font-normal'>Javascript</li>
                <li className='text-[16px] text-black font-normal'>ReactJS</li>
                <li className='text-[16px] text-black font-normal'>Typescript</li>
              </ul>
            </div>
            <div className='w-full'>
              <strong className='text-[16px] text-black'>Dia diem : </strong>
              <ul className='list-disc px-4 py-3 flex flex-col gap-3'>
                <li className='text-[16px] text-black font-normal'>Javascript</li>
                <li className='text-[16px] text-black font-normal'>ReactJS</li>
                <li className='text-[16px] text-black font-normal'>Typescript</li>
              </ul>
            </div>
            <div className='w-full'>
              <strong className='text-[16px] text-black'>Thoi gian lam viec : </strong>
              <ul className='list-disc px-4 py-3 flex flex-col gap-3'>
                <li className='text-[16px] text-black font-normal'>Thu 2 - thu 6</li>
              </ul>
            </div>
            <div className='w-full'>
              <strong className='text-[16px] text-black'>Cach thuc ung tuyen : </strong>
              <ul className='list-disc px-4 py-3 flex flex-col gap-3'>
                <li className='text-[16px] text-black font-normal'>
                  Ung vien nop ho so ung tuyen truc tiep bang cach bam Ung tuyen ngay ben duoi!
                </li>
              </ul>
            </div>
            <div className='w-full flex gap-2'>
              <button className='w-full px-2 py-2 rounded-md text-white text-[16px] font-bold active:shadow-slate-500 active:shadow-sm cursor-pointer bg-green-500 line-clamp-1'>
                Ung tuyen ngay
              </button>
              <HeartOutlined className='border border-slate-500 hover:border-green-500 rounded-md text-green-500 font-medium cursor-pointer py-2 px-4' />
            </div>
            <p className='text-[20px] text-black font-bold py-8'>Viec lam lien quan :</p>
            <div className='w-full flex flex-col items-center justify-start p-2 gap-3'>
              {Array.from({ length: 3 }).map((_, index) => (
                <PostCardRow key={index} />
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
              <h3 className='text-black font-bold line-clamp-3'>Cong Ty ABC</h3>
            </div>
            <p className='w-full text-[16px] text-black text-start font-bold line-clamp-2 leading-8'>
              <strong className='font-normal'>
                <UsergroupAddOutlined /> Quy mo :{' '}
              </strong>
              12 nhan vien
            </p>
            <p className='w-full text-[16px] text-black text-start font-bold line-clamp-2 leading-8'>
              <strong className='font-normal'>
                <SlackSquareOutlined /> Linh vuc :{' '}
              </strong>
              Kinh doanh
            </p>
            <p className='w-full text-[16px] text-black text-start font-bold line-clamp-2 leading-8'>
              <strong className='font-normal'>
                <HomeOutlined /> Dia diem :{' '}
              </strong>
              K29/8 - Tran Duc Thao, Hoa Cuong Nam, Hai Chau, Da Nang
            </p>
          </div>
          <div className='w-full flex flex-col items-start justify-start rounded-md shadow-sm shadow-slate-600 gap-4 px-2 py-4'>
            <h3 className='font-bold text-[20px] text-black mb-4'>Thong tin chung</h3>
            <div className='w-full flex flex-row items-center justify-start gap-4'>
              <SortAscendingOutlined className='text-white font-bold p-3 rounded-full bg-green-500' />
              <p className='w-full flex flex-col items-start text-[16px] text-black text-start font-bold line-clamp-3 leading-6'>
                <strong className='font-normal'>Cap bac : </strong>
                <span>Nhan vien</span>
              </p>
            </div>
            <div className='w-full flex flex-row items-center justify-start gap-4'>
              <SortAscendingOutlined className='text-white font-bold p-3 rounded-full bg-green-500' />
              <p className='w-full flex flex-col items-start text-[16px] text-black text-start font-bold line-clamp-3 leading-6'>
                <strong className='font-normal'>Hoc van : </strong>
                <span>Pho thong</span>
              </p>
            </div>
            <div className='w-full flex flex-row items-center justify-start gap-4'>
              <SortAscendingOutlined className='text-white font-bold p-3 rounded-full bg-green-500' />
              <p className='w-full flex flex-col items-start text-[16px] text-black text-start font-bold line-clamp-3 leading-6'>
                <strong className='font-normal'>So luong tuyen : </strong>
                <span>2 nguoi</span>
              </p>
            </div>
            <div className='w-full flex flex-row items-center justify-start gap-4'>
              <SortAscendingOutlined className='text-white font-bold p-3 rounded-full bg-green-500' />
              <p className='w-full flex flex-col items-start text-[16px] text-black text-start font-bold line-clamp-3 leading-6'>
                <strong className='font-normal'>Hinh thuc lam viec : </strong>
                <span>Toan thoi gian</span>
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
};

export default PostPage;
