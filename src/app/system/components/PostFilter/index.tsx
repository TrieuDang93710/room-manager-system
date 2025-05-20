import BannerCarousel from '@/components/organisms/system/Banner';
import SearchBox from '@/components/organisms/system/SearchBox';
import { RightOutlined } from '@ant-design/icons';
import Link from 'next/link';
import search_banner from '@/public/images/search_banner.jpg';
import { usePathname } from 'next/navigation';
const PostFilter = () => {
  const pathName = usePathname();
  // console.log('pathName: ', pathName);
  // const [currentPath, setCurrentPath] = useState<string>();

  // useEffect(() => {
  //   setCurrentPath(pathName);
  // }, [pathName]);
  // console.log('currentPath: ', currentPath);

  const menus = [
    { path: '#', label: 'Kinh doanh/quản lý' },
    { path: '#', label: 'Chắm sóc khách hàng' },
    { path: '#', label: 'Tài chính ngân hàng, đầu tư' },
    { path: '#', label: 'Công nghệ thông tin' },
    { path: '#', label: 'Công nghệ kỹ thuật điện' }
  ];

  const menuItem = menus.map((item, index) => (
    <li
      key={index}
      className='w-full flex flex-row items-center justify-start gap-2 py-2 px-2 rounded-md hover:bg-blue-100'
    >
      <Link
        href={item.path}
        className='w-full text-[14px] font-medium text-black hover:text-blue-600 flex items-center justify-between'
      >
        <p>{item.label}</p> <RightOutlined />
      </Link>
    </li>
  ));

  return (
    <>
      {pathName === '/' ||
      pathName === '/system/post-filter' ||
      pathName === '/system/business' ||
      pathName === '/system/applicant' ? (
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
            <div className='w-[80%] md:h-[40vh] h-full flex md:flex-row flex-col items-center md:justify-between justify-start gap-4'>
              <div className='md:w-[40%] w-full h-full bg-white rounded-xl p-4'>
                <ul className='w-full list-none list-inside flex flex-col items-start justify-start pb-3 gap-2'>
                  {menuItem}
                </ul>
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
