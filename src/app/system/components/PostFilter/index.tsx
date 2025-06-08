/* eslint-disable @typescript-eslint/no-explicit-any */
import BannerCarousel from '@/components/organisms/system/Banner';
import SearchBox from '@/components/organisms/system/SearchBox';
import { RightOutlined } from '@ant-design/icons';
import Link from 'next/link';
import search_banner from '@/public/images/search_banner.jpg';
import { usePathname, useRouter } from 'next/navigation';
import useField from '@/hooks/useFeild';
import { useEffect, useState } from 'react';
import useApiPublic from '@/hooks/useApiPublic';
const PostFilter = () => {
  const pathName = usePathname();
  const apiPublic = useApiPublic();
  const router = useRouter();
  const { fields } = useField();
  const [selectedField, setSelectedField] = useState<number>(0);
  const [jobGroupItem, setJobGroupItem] = useState<any>(null);
  const [openJobGroupCard, setOpenJobGroupCard] = useState<boolean>(false);

  const menuItem = fields.map((item: any) => (
    <li
      // onClick={() => setSelectedField(item.id)}
      onMouseEnter={() => {
        setOpenJobGroupCard(!openJobGroupCard);
        setSelectedField(item.id);
      }}
      key={item.id}
      className='w-full flex flex-row items-center justify-start gap-2 py-2 px-2 rounded-md hover:bg-blue-100'
    >
      <Link
        href={'#'}
        className='w-full text-[14px] font-medium text-black hover:text-blue-600 flex items-center justify-between'
      >
        <p>{item.title}</p> <RightOutlined />
      </Link>
    </li>
  ));

  useEffect(() => {
    apiPublic
      .get(`/field/${Number(selectedField)}`)
      .then((result) => {
        console.log('result: ', result);
        setJobGroupItem(result.data.data);
      })
      .catch((error) => {
        console.log('error: ', error);
      });
  }, [apiPublic, selectedField]);

  console.log('jobGroupItem: ', jobGroupItem);

  return (
    <>
      {pathName === '/' ||
      pathName === '/system/post-filter' ||
      pathName === '/system/business' ||
      pathName === '/system/applicant-filter' ? (
        <div
          className='w-full h-full flex flex-col items-center justify-start pt-20 py-8'
          style={{
            backgroundImage: `url(${search_banner.src})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
          }}
        >
          {pathName === '/' ? (
            <>
              <h2 className='text-[28px] font-bold text-blue-500 text-center'>
                Tìm việc làm nhanh 24h, việc làm mới nhất trên toàn quốc
              </h2>
              <p className='text-[14px] font-bold text-white text-center'>
                Tiếp cận 40,000+ tin tuyển dụng việc làm mỗi ngày từ hàng nghìn doanh nghiệp uy tín tại Việt Nam
              </p>
            </>
          ) : null}
          <SearchBox />
          {pathName === '/' ? (
            <div className='relative w-[80%] md:h-[40vh] h-full flex md:flex-row flex-col items-center md:justify-between justify-start gap-4'>
              <div className='md:w-[40%] w-full h-full bg-white rounded-xl p-4'>
                <ul className='w-full list-none list-inside flex flex-col items-start justify-start pb-3 gap-2'>
                  {menuItem}
                </ul>
              </div>
              <div
                onMouseLeave={() => setOpenJobGroupCard(!openJobGroupCard)}
                className={`absolute right-0 top-0 md:w-[60%] w-full h-full bg-white rounded-xl z-20 p-4 ${openJobGroupCard && 'hidden'}`}
              >
                <p>{jobGroupItem && jobGroupItem.title}</p>
                {jobGroupItem && (
                  <ul className='w-full list-disc list-inside flex flex-col items-start justify-start py-3 gap-2'>
                    {jobGroupItem.cates.map((itm: any) => (
                      <li
                        onClick={() => router.push(`/system/post-cate-filter/${itm.id}`)}
                        key={itm.id}
                        className='w-full flex flex-row items-center justify-start gap-2 py-2 px-2 rounded-md hover:bg-blue-100'
                      >
                        <Link
                          href={'#'}
                          className='w-full text-[14px] font-medium text-black hover:text-blue-600 flex items-center justify-between'
                        >
                          <p>{itm.title}</p> <RightOutlined />
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div className='md:w-[60%] w-full h-full border border-white rounded-xl'>
                <BannerCarousel />
              </div>
            </div>
          ) : null}
        </div>
      ) : null}
    </>
  );
};

export default PostFilter;
