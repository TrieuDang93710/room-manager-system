/* eslint-disable @next/next/no-async-client-component */
/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import BreadCrumbCommon from '@/components/atoms/Breadcumb';
import flex from '@/config/flex.config';
import { FilterOutlined, HomeOutlined } from '@ant-design/icons';

interface ApplicantInfoPageProps {
  params: Promise<{ id: number }>;
}

const ApplicantInfoPage = async ({ params }: ApplicantInfoPageProps) => {
  const id = (await params).id;
  console.log('id: ', id);
  // const [filteredItems] = useState(listRoom);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [itemsPerPage] = useState(2);

  // const indexOfLastItem = currentPage * itemsPerPage;
  // const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  // const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

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
      <div className='lg:w-[90%] w-full flex sm:flex-row flex-col items-start justify-around my-4 gap-3'>
        <div className='sm:w-2/3 rounded-md shadow-sm shadow-slate-600 flex flex-col justify-start items-center p-4 gap-4'>
          <div
            className='w-1/2 h-[20vh] bg-center bg-contain bg-no-repeat'
            style={{
              backgroundImage:
                "url('https://www.freeiconspng.com/thumbs/business-icon-png/corporate-icon-png-autocorrect-for-business-13.png')"
            }}
          ></div>
          <div className='w-full flex flex-col items-start justify-start gap-3'>
            <p className='text-[16px] text-black font-normal line-clamp-3 leading-8'>
              <strong className=''>Muc tieu : </strong> Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Officia, placeat fugit distinctio ipsum eveniet reprehenderit alias. Numquam quae consequatur enim nobis
              commodi iste cupiditate non. Minus cumque corporis sunt amet.
            </p>
            <p className='text-[16px] text-black font-normal line-clamp-3 leading-8'>
              <strong className=''>Kinh nghiem : </strong> Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Officia, placeat fugit distinctio ipsum eveniet reprehenderit alias. Numquam quae consequatur enim nobis
              commodi iste cupiditate non. Minus cumque corporis sunt amet.
            </p>
            <div className='w-full'>
              <strong className='text-[16px] text-black'>Ky nang mem : </strong>
              <ul className='list-disc px-4 py-3 flex flex-col gap-3'>
                <li className='text-[16px] text-black font-normal'>Javascript</li>
                <li className='text-[16px] text-black font-normal'>ReactJS</li>
                <li className='text-[16px] text-black font-normal'>Typescript</li>
              </ul>
            </div>
            <div className='w-full'>
              <strong className='text-[16px] text-black'>Ky nang chuyen mon : </strong>
              <ul className='list-disc px-4 py-3 flex flex-col gap-3'>
                <li className='text-[16px] text-black font-normal'>Javascript</li>
                <li className='text-[16px] text-black font-normal'>ReactJS</li>
                <li className='text-[16px] text-black font-normal'>Typescript</li>
              </ul>
            </div>
            <div className='w-full'>
              <strong className='text-[16px] text-black'>Ngon ngu : </strong>
              <ul className='list-disc px-4 py-3 flex flex-col gap-3'>
                <li className='text-[16px] text-black font-normal'>Vietnamese</li>
                <li className='text-[16px] text-black font-normal'>English</li>
              </ul>
            </div>
            <div className='w-full'>
              <strong className='text-[16px] text-black'>Ky nang chuyen mon : </strong>
              <ul className='list-disc px-4 py-3 flex flex-col gap-3'>
                <li className='text-[16px] text-black font-normal'>Javascript</li>
                <li className='text-[16px] text-black font-normal'>ReactJS</li>
                <li className='text-[16px] text-black font-normal'>Typescript</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='sm:w-1/3 w-full flex flex-col items-center justify-start py-4 px-2 gap-4'>
          <div className='w-full flex flex-col items-center justify-start rounded-md shadow-sm shadow-slate-600 px-2 py-4'>
            <h3 className='font-bold text-[20px] text-black mb-4'>Thong tin chung</h3>
            <p className='w-full text-[16px] text-black text-start font-normal line-clamp-3 leading-8'>
              <strong>Ho va Ten : </strong>Dang Binh Trieu
            </p>
            <p className='w-full text-[16px] text-black text-start font-normal line-clamp-3 leading-8'>
              <strong>Ngay sinh : </strong>17-03-2003
            </p>
            <p className='w-full text-[16px] text-black text-start font-normal line-clamp-3 leading-8'>
              <strong>Nganh nghe : </strong>Sinh vien - nam 4
            </p>
          </div>
          <div className='w-full flex flex-col items-center justify-start rounded-md shadow-sm shadow-slate-600 px-2 py-4'>
            <h3 className='font-bold text-[20px] text-black mb-4'>Lien he</h3>
            <p className='w-full text-[16px] text-black text-start font-normal line-clamp-3 leading-8'>
              <strong>Dia chi : </strong>K29/8 Tran Duc Thao
            </p>
            <p className='w-full text-[16px] text-black text-start font-normal line-clamp-2 leading-8 break-words'>
              <strong>Email : </strong>dangbinhtrieu123@gmail.com
            </p>
            <p className='w-full text-[16px] text-black text-start font-normal line-clamp-3 leading-8'>
              <strong>So dien thoai : </strong>0336148613
            </p>
          </div>
          <button className='w-full border border-green-600 hover:bg-green-500 rounded-md active:shadow-md active:shadow-slate-300 text-green-600 hover:text-white text-[16px] font-bold px-2 py-3'>
            Nhan tin ngay
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApplicantInfoPage;
