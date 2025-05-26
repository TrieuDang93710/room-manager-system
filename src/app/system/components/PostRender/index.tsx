/* eslint-disable @typescript-eslint/no-explicit-any */
import PostMiniCardSquare from '@/components/organisms/system/Card/PostMiniCardSquare';
import { Button } from '@/components/ui/button';
import { filterPost } from '@/faker/data';
import usePost from '@/hooks/usePost';
import { CheckOutlined, DownOutlined, FunnelPlotOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface PostRenderProps {
  setOpenPostDetailCard: React.Dispatch<React.SetStateAction<boolean>>;
  setPostId: React.Dispatch<React.SetStateAction<number>>;
  openPostDetailCard: boolean;
}

const PostRender = ({ setOpenPostDetailCard, openPostDetailCard, setPostId }: PostRenderProps) => {
  const { usePostsSearch } = usePost();
  const { posts } = usePostsSearch();

  const [filteredItems, setFilteredItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(8);
  const [itemsPerPage] = useState(8);
  const [filterTypeCard, setFilterTypeCard] = useState<boolean>(true);
  const [filterTypeIndex, setFilterTypeIndex] = useState<number>(0);
  const [filterBy, setFilterBy] = useState<string>('address');
  const [filterValueRender, setFilterValueRender] = useState<string[]>([]);
  const [filterSelectedValue, setFilterSelectedValue] = useState<string>('all');
  const [indexFilterSelectedValue, setIndexFilterSelectedValue] = useState<number>();

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const itemsRender = filteredItems.slice(indexOfFirstItem, indexOfLastItem);
  const currentItems = itemsRender;
  // const currentItems = !itemsRender ? itemsRender : posts;
  console.log('currentItems: ', currentItems);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const handleOpenFilterTypeCard = () => {
    setFilterTypeCard(!filterTypeCard);
  };

  const filterTypes = [
    { title: 'Địa điểm', value: 'address' },
    { title: 'Mức lương', value: 'salary' },
    { title: 'Kinh nghiệm', value: 'experience' },
    { title: 'Ngành nghề', value: 'job' }
  ];

  const filterTypeItem = filterTypes.map((item, index) => (
    <li
      key={index}
      onClick={() => {
        setFilterBy(item.value);
        setFilterTypeIndex(index);
        setFilterTypeCard(!filterTypeCard);
      }}
      className={`w-full flex flex-row items-center justify-between gap-2 py-2 px-2 rounded-md hover:bg-blue-100 cursor-pointer ${filterTypeIndex === index && 'text-blue-600'}`}
    >
      <p>{item.title}</p> {filterTypeIndex === index && <CheckOutlined />}
    </li>
  ));

  const filterTypeLabel = filterTypes.filter((item) => item.value === filterBy);

  console.log('filterSelectedValue: ', filterSelectedValue);
  console.log('filterBy: ', filterBy);

  const filterType = filterBy;

  useEffect(() => {
    let filtered;
    switch (filterType) {
      case 'all':
        console.log('posts: ', posts);
        setFilteredItems(posts);
        setCurrentPage(1);

      case 'address':
        filtered =
          filterSelectedValue === 'all'
            ? posts
            : posts.filter((item: any) => item.company.work_place.address.city === filterSelectedValue);

        console.log('filtered: ', filtered);
        setFilteredItems(filtered);
        setCurrentPage(1);
        break;
      default:
        break;
    }
  }, [filterSelectedValue, filterType, posts]);

  useEffect(() => {
    filterPost.map((item) => {
      if (item.title === filterBy) {
        setFilterValueRender(item.value);
      }
    });
  }, [filterBy, filteredItems]);

  const menuItem = filterValueRender.map((item, index) => (
    <li
      onClick={() => {
        setFilterSelectedValue(item);
        setIndexFilterSelectedValue(index);
      }}
      key={index}
      className={`py-2 px-4 rounded-full border hover:border-blue-600 text-black font-medium cursor-pointer ${indexFilterSelectedValue === index ? 'bg-blue-600 text-white' : 'bg-slate-100'}`}
    >
      {item}
    </li>
  ));

  return (
    <div className='sm:w-[80%] w-full flex flex-col items-center gap-3 px-2'>
      <div className='w-full flex sm:flex-row flex-col items-center sm:justify-between justify-stretch px-4'>
        <h2 className='w-full text-2xl text-blue-600 font-bold mt-8'>Việt làm tốt nhất</h2>
        <div className='w-full flex flex-row items-center sm:justify-center justify-between gap-4'>
          <Link href={'#'} className='underline hover:text-blue-600'>
            Xem tất cả
          </Link>
          <div className='flex flex-row items-center justify-start gap-2'>
            <Button
              onClick={() => alert('Click me')}
              className='w-9 text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white font-bold rounded-full flex justify-center items-center p-2'
              variant={'outline'}
              size={'sm'}
            >
              <LeftOutlined />
            </Button>
            <Button
              onClick={() => alert('Click me')}
              className='w-9 text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white font-bold rounded-full flex justify-center items-center p-2'
              variant={'outline'}
              size={'sm'}
            >
              <RightOutlined />
            </Button>
          </div>
        </div>
      </div>
      <div className='relative w-full flex sm:flex-row flex-col sm:items-center items-start sm:justify-between justify-start px-4'>
        <Button
          onClick={handleOpenFilterTypeCard}
          className='w-[25%] text-slate-300 border-slate-400 hover:border-blue-600 hover:bg-blue-50 hover:text-blue-600 font-bold md:flex hidden justify-between items-center px-4'
          variant={'outline'}
          size={'lg'}
        >
          <p className='inline-flex items-center justify-around w-[60%]'>
            <FunnelPlotOutlined className='mr-2' />
            Lọc theo:
            <span className='text-black ml-8'>{filterTypeLabel[0].title}</span>
          </p>
          <DownOutlined />
        </Button>
        <ul
          className={`absolute left-14 top-12 w-[20%] bg-white rounded-xl shadow-sm shadow-slate-500 list-none list-inside flex flex-col items-start justify-start py-2 px-4 gap-2 ${filterTypeCard && 'hidden'}`}
        >
          {filterTypeItem}
        </ul>
        <ul className='relative sm:w-[70%] w-full h-full flex sm:flex-row flex-col sm:items-center items-start justify-start px-16 gap-4'>
          <Button
            onClick={() => alert('Click me')}
            className='absolute left-2 w-9 text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white font-bold rounded-full flex justify-center items-center p-2'
            variant={'outline'}
            size={'sm'}
          >
            <LeftOutlined />
          </Button>
          <li
            onClick={() => setFilterSelectedValue('all')}
            className={`py-2 px-4 rounded-full bg-blue-600 text-white font-medium cursor-pointer`}
          >
            Ngẫu nhiên
          </li>
          {menuItem}
          <Button
            onClick={() => alert('Click me')}
            className='absolute right-2 w-9 text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white font-bold rounded-full flex justify-center items-center p-2'
            variant={'outline'}
            size={'sm'}
          >
            <RightOutlined />
          </Button>
        </ul>
      </div>
      <div className='w-full flex sm:grid md:grid-cols-3 sm:grid-cols-2 flex-col items-center justify-around gap-3 px-4 py-2'>
        {currentItems.map((item: any) => (
          <PostMiniCardSquare
            onHover={() => {
              setOpenPostDetailCard(!openPostDetailCard);
              setPostId(item.id);
            }}
            key={item.id}
          />
        ))}
      </div>
      <div className='relative sm:w-[30%] w-[80%] flex justify-center items-center my-8 gap-4'>
        <Button
          onClick={() => alert('Click me')}
          className='absolute left-2 w-9 text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white font-bold rounded-full flex justify-center items-center p-2'
          variant={'outline'}
          size={'sm'}
        >
          <LeftOutlined />
        </Button>
        {Array.from({ length: Math.ceil(filteredItems.length / itemsPerPage) }).map((_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className={`mx-1 px-3 py-1 rounded-full ${1 === index + 1 ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          >
            {index + 1}
          </button>
        ))}
        <Button
          onClick={() => alert('Click me')}
          className='absolute right-2 w-9 text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white font-bold rounded-full flex justify-center items-center p-2'
          variant={'outline'}
          size={'sm'}
        >
          <RightOutlined />
        </Button>
      </div>
    </div>
  );
};

export default PostRender;
