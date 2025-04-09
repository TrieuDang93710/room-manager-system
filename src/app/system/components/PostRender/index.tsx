/* eslint-disable @typescript-eslint/no-explicit-any */
import { PostCardSquareComponent } from '@/components/organisms/system/Card/PostCardSquare';
import useField from '@/hooks/useFeild';
import usePost from '@/hooks/usePost';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const PostRender = () => {
  const router = useRouter();
  const { posts } = usePost();
  const { fields } = useField();

  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedField, setSelectedField] = useState('all');
  // const [sortOption, setSortOption] = useState('default');
  const [currentPage, setCurrentPage] = useState(8);
  const [itemsPerPage] = useState(8);
  // const postsLocal = useSelector((state: any) => state.posts);

  const filterItems = (field: any) => {
    const filtered = field === 'all' ? posts : posts.filter((item: any) => item.type_of_post.title === field);

    setFilteredItems(filtered);
    setSelectedField(field);
    setCurrentPage(1);
  };

  const showAll = () => {
    // filterItems('all');
    setFilteredItems(posts);
    setSelectedField('all');
    setCurrentPage(1);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const itemsRender = filteredItems.slice(indexOfFirstItem, indexOfLastItem);
  const currentItems = !itemsRender ? itemsRender : posts;

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className='w-[90%] flex flex-col items-center gap-3 px-2'>
      <h2 className='text-2xl font-bold mt-8'>Bài Đăng Nổi Bật</h2>
      <div className='lg:w-[60%] md:w-3/4 w-full flex md:flex-row flex-1 items-center justify-center gap-2'>
        <p
          onClick={showAll}
          className={`w-[20%] text-[14px] text-center truncate mb-4 font-medium hover:text-blue-600 hover:underline-offset-1 cursor-pointer ${selectedField === 'all' && 'text-blue-600'}`}
        >
          Tất cả
        </p>
        {fields.map((item: any) => (
          <p
            key={item.id}
            onClick={() => filterItems(`${item.title}`)}
            className={`w-[20%] text-[14px] text-center truncate mb-4 font-medium hover:text-blue-600 hover:underline-offset-1 cursor-pointer ${selectedField === `${item.title}` && 'text-blue-600'}`}
          >
            {item.title}
          </p>
        ))}
      </div>
      <div className='w-full flex sm:grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 flex-col items-center justify-around gap-3'>
        {currentItems.map((item: any) => (
          <PostCardSquareComponent key={item.id} post={item} onClick={() => router.push(`/system/post/${item.id}`)} />
        ))}
      </div>
      <div className='flex justify-center my-8'>
        {Array.from({ length: Math.ceil(filteredItems.length / itemsPerPage) }).map((_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className={`mx-1 px-3 py-1 rounded-full ${
              currentPage === index + 1 ? 'bg-blue-600 text-white' : 'bg-gray-200'
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PostRender;
