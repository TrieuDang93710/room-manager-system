/* eslint-disable react-hooks/rules-of-hooks */
'use client';
import BreadCrumbCommon from '@/components/atoms/Breadcumb';
import PostCardRow from '@/components/organisms/FuncSystem/Card/PostCardRow';
import flex from '@/config/flex.config';
import { listRoom } from '@/faker/data';
import { FilterOutlined, HomeOutlined } from '@ant-design/icons';
import { useState } from 'react';

interface NewsInfoPageProps {
  params: Promise<{ id: number }>;
}

const NewsInfoPage = ({ params }: NewsInfoPageProps) => {
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
    {
      url: '/system/news',
      label: 'Tin tuc',
      prefixIcon: () => <FilterOutlined />
    },
    {
      url: `/system/news/${id}`,
      label: 'Thong tin chi tiet',
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
          <div
            className='w-1/2 h-[20vh] bg-center bg-contain bg-no-repeat'
            style={{
              backgroundImage:
                "url('https://www.freeiconspng.com/thumbs/business-icon-png/corporate-icon-png-autocorrect-for-business-13.png')"
            }}
          ></div>
          <div className='w-full flex flex-col items-start justify-start gap-3'>
            <p className='text-[16px] text-black font-normal leading-8'>
              <strong className=''>Gioi thieu doanh nghiep : </strong> Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Officia, placeat fugit distinctio ipsum eveniet reprehenderit alias. Numquam quae
              consequatur enim nobis commodi iste cupiditate non. Minus cumque corporis sunt amet. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Perferendis, rem! Nam adipisci molestias quo, alias illo quidem! Alias
              vitae similique quod hic quae, nisi vel consequuntur. Ipsam adipisci et eaque. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Incidunt, ipsa! Ad unde, ducimus officia ab illum libero maxime, a expedita
              ut praesentium doloribus consectetur eligendi id, fugiat itaque? Quae, culpa? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Id voluptate eveniet quidem qui aut? Architecto delectus, officia iusto
              doloremque error cumque ipsum ducimus laborum quae sequi odit voluptas at aperiam? Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Laudantium sed accusamus officia vitae minus dicta praesentium
              repudiandae repellat sequi reprehenderit, repellendus necessitatibus temporibus earum. Dolor id distinctio
              fugiat consectetur sed?
            </p>
            <p className='text-[16px] text-black font-normal leading-8'>
              <strong className=''>Kinh nghiem : </strong> Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Officia, placeat fugit distinctio ipsum eveniet reprehenderit alias. Numquam quae consequatur enim nobis
              commodi iste cupiditate non. Minus cumque corporis sunt amet. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Fuga laborum a vero sint exercitationem labore expedita porro explicabo sapiente est!
              Facere ratione error velit temporibus obcaecati corrupti tenetur labore minima. Lorem ipsum dolor sit
              amet, consectetur adipisicing elit. Laudantium quasi natus non enim autem labore, in illo. Similique ipsa
              cum, voluptas nulla porro molestiae eos, veritatis voluptate quas laudantium sit?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsInfoPage;
